const Product = require('../models/Product');
const LccTransfer = require('../models/LccTransfer');
const Report = require('../models/Report');

/**
 * GET DASHBOARD STATS
 * Aggregates live data from Product, LccTransfer, and Report collections
 */
const getDashboardStats = async (req, res) => {
  try {
    // 1. Fetch warehouse products
    const products = await Product.find().lean();
    const warehouseProductsCount = products.length;
    const warehouseTotalStock = products.reduce(
      (sum, p) => sum + (Number(p.quantity) || 0),
      0
    );

    // 2. Fetch LCC Transfers & group by product
    const transfers = await LccTransfer.find().lean();
    const lccMap = new Map();
    transfers.forEach(t => {
      const key = (t.productId || t.name || '').trim().toUpperCase();
      if (!key) return;

      const existing = lccMap.get(key) || {
        productId: t.productId,
        name: t.name,
        quantity: 0,
        location: t.location || 'LCC'
      };
      existing.quantity += Number(t.quantity) || 0;
      if (t.location) existing.location = t.location;
      lccMap.set(key, existing);
    });

    const lccItems = Array.from(lccMap.values()).filter(it => it.quantity > 0);
    const lccItemsCount = lccItems.length;
    const lccTotalStock = lccItems.reduce(
      (sum, it) => sum + (Number(it.quantity) || 0),
      0
    );

    // 3. Combined Totals
    const totalStock = warehouseTotalStock + lccTotalStock;
    const totalProducts = warehouseProductsCount + lccItemsCount;

    // Categories (distinct product names)
    const categorySet = new Set();
    products.forEach(p => {
      if (p.name && typeof p.name === 'string' && p.name.trim()) {
        categorySet.add(p.name.trim().toLowerCase());
      }
    });
    lccItems.forEach(it => {
      if (it.name && typeof it.name === 'string' && it.name.trim()) {
        categorySet.add(it.name.trim().toLowerCase());
      }
    });
    const categoriesCount = categorySet.size || (totalProducts > 0 ? 1 : 0);

    // Low stock items (< 20 PCS)
    const lowStockItems = [];
    products.forEach(p => {
      if (Number(p.quantity) < 20) {
        lowStockItems.push({
          productId: p.productId,
          name: p.productId ? `${p.productId} - ${p.name}` : p.name,
          category: p.location ? `Warehouse (${p.location})` : 'Warehouse',
          stock: Number(p.quantity),
          minimum: 20
        });
      }
    });
    lccItems.forEach(it => {
      if (Number(it.quantity) < 20) {
        lowStockItems.push({
          productId: it.productId,
          name: it.productId ? `${it.productId} - ${it.name}` : it.name,
          category: it.location ? `LCC (${it.location})` : 'LCC',
          stock: Number(it.quantity),
          minimum: 20
        });
      }
    });

    // 4. Weekly Stock Movement (Last 7 Days)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    const stockMovementBuckets = [];

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      const ymd = `${year}-${month}-${day}`;
      const dmy = `${day}-${month}-${year}`;

      stockMovementBuckets.push({
        day: days[d.getDay()],
        date: ymd,
        altDate: dmy,
        received: 0,
        distributed: 0
      });
    }

    const reports = await Report.find().lean();
    let hasMovementActivity = false;
    reports.forEach(r => {
      const bucket = stockMovementBuckets.find(
        b => b.date === r.date || b.altDate === r.date
      );
      if (bucket) {
        if (r.eventType === 'STOCK_RECEIVED' || r.eventType === 'PRODUCT_ADDED') {
          bucket.received += Math.max(0, Number(r.quantityChange) || 0);
          hasMovementActivity = true;
        } else if (r.eventType === 'STOCK_TRANSFERRED') {
          bucket.distributed += Math.abs(Number(r.quantityChange) || 0);
          hasMovementActivity = true;
        }
      }
    });

    // 5. Recent Activity (top 2 from reports)
    const recentReports = await Report.find()
      .sort({ timestamp: -1, createdAt: -1 })
      .limit(10)
      .lean();

    // Deduplicate any repeated logs for same product/event and take strictly top 2
    const seen = new Set();
    const uniqueRecentReports = [];
    for (const r of recentReports) {
      const key = `${r.productId}_${r.eventType}_${r.quantityChange}_${r.date}_${r.time}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueRecentReports.push(r);
      }
      if (uniqueRecentReports.length === 2) break;
    }

    const recentActivities = uniqueRecentReports.map(r => {
      let icon = '📦';
      if (r.eventType === 'STOCK_RECEIVED') icon = '📥';
      else if (r.eventType === 'STOCK_TRANSFERRED') icon = '🔄';
      else if (r.eventType === 'PRODUCT_UPDATED') icon = '✏️';
      else if (r.eventType === 'PRODUCT_DELETED') icon = '🗑️';
      else if (r.eventType === 'PRODUCT_ADDED') icon = '✨';

      const prodName =
        r.productId && r.productId !== 'N/A'
          ? `${r.productId} (${r.productName})`
          : r.productName;

      let description = '';
      if (r.eventType === 'STOCK_RECEIVED') {
        description = `${prodName} • +${r.quantityChange} PCS received by ${r.updatedBy || 'Staff'}`;
      } else if (r.eventType === 'PRODUCT_ADDED') {
        description = `${prodName} • ${r.newStock} PCS registered by ${r.updatedBy || 'Staff'}`;
      } else if (r.eventType === 'STOCK_TRANSFERRED') {
        description = `${prodName} • ${Math.abs(r.quantityChange)} PCS transferred to LCC by ${r.updatedBy || 'Staff'}`;
      } else if (r.eventType === 'PRODUCT_UPDATED') {
        description = `${prodName} • Stock updated to ${r.newStock} PCS by ${r.updatedBy || 'Staff'}`;
      } else if (r.eventType === 'PRODUCT_DELETED') {
        description = `${prodName} • Removed from inventory by ${r.updatedBy || 'Admin'}`;
      } else {
        description = `${prodName} • ${r.remarks || r.eventTitle || 'Warehouse operation'}`;
      }

      return {
        title: r.eventTitle || 'Warehouse Operation',
        description,
        date: r.date,
        time: r.time,
        timestamp: r.timestamp,
        icon
      };
    });

    return res.status(200).json({
      success: true,
      stats: {
        warehouseProductsCount,
        warehouseTotalStock,
        lccItemsCount,
        lccTotalStock,
        totalProducts,
        totalStock,
        categoriesCount,
        lowStockCount: lowStockItems.length,
        isLowStock: lowStockItems.length > 0
      },
      lowStockItems,
      stockMovement: stockMovementBuckets.map(b => ({
        day: b.day,
        received: b.received,
        distributed: b.distributed
      })),
      hasMovementActivity,
      recentActivities
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch dashboard stats',
      error: error.message
    });
  }
};

module.exports = {
  getDashboardStats
};
