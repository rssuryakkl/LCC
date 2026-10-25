import {
  LccService
} from "./chunk-QVYNMT4A.js";
import {
  ReportsService
} from "./chunk-OLCIBYMR.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QKVBSWNP.js";

// src/app/pages/dashboard/dashboard.ts
var _c0 = (a0, a1) => [a0, a1];
function Dashboard_article_9_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 31);
  }
}
function Dashboard_article_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 26)(1, "div", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275template(9, Dashboard_article_9_span_9_Template, 1, 0, "span", 30);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(12, _c0, stat_r1.color, stat_r1.isAlert ? "has-alert" : ""));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r1.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("alert-blinking", stat_r1.isAlert);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stat_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance();
    \u0275\u0275classProp("warning-blink-red", stat_r1.isAlert)("stat-highlight-yellow", !stat_r1.isAlert);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r1.isAlert);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", stat_r1.description, " ");
  }
}
function Dashboard_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275element(2, "div", 34)(3, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r2.getBarHeight(item_r2.received), "%");
    \u0275\u0275property("title", "Received: " + item_r2.received);
    \u0275\u0275advance();
    \u0275\u0275styleProp("height", ctx_r2.getBarHeight(item_r2.distributed), "%");
    \u0275\u0275property("title", "Distributed: " + item_r2.distributed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.day);
  }
}
function Dashboard_div_62_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "div", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const activity_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r4.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(activity_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r4.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(activity_r4.time);
  }
}
function Dashboard_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, Dashboard_div_62_div_1_Template, 10, 4, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.activities);
  }
}
function Dashboard_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "p");
    \u0275\u0275text(2, "No recent operations recorded yet. Added or updated products will appear here.");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_div_74_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 47);
    \u0275\u0275element(12, "span", 31);
    \u0275\u0275text(13, " Stock Required ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r5.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", product_r5.stock, " units");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", product_r5.minimum, " units");
  }
}
function Dashboard_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Current Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Minimum Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, Dashboard_div_74_tr_15_Template, 14, 4, "tr", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r2.lowStockProducts);
  }
}
function Dashboard_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 49);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "All stock levels are adequate (all items are 20 or above). No products require updating.");
    \u0275\u0275elementEnd()();
  }
}
var Dashboard = class _Dashboard {
  constructor(lccService, reportsService) {
    this.lccService = lccService;
    this.reportsService = reportsService;
  }
  lccService;
  reportsService;
  subscriptions = [];
  stats = [
    {
      title: "Total Product",
      value: 0,
      icon: "\u{1F3E2}",
      description: "Units available in LCC + Products",
      color: "blue"
    },
    {
      title: "Total Stocks Items",
      value: 0,
      icon: "\u{1F4E6}",
      description: "Total stocks (LCC + Products)",
      color: "yellow"
    },
    {
      title: "Low Stock Items",
      value: 0,
      icon: "\u26A0\uFE0F",
      description: "All stocks adequate",
      color: "red",
      isAlert: false
    },
    {
      title: "Categories",
      value: 0,
      icon: "\u{1F5C3}\uFE0F",
      description: "Product categories",
      color: "green"
    }
  ];
  stockMovement = [
    { day: "Mon", received: 0, distributed: 0 },
    { day: "Tue", received: 0, distributed: 0 },
    { day: "Wed", received: 0, distributed: 0 },
    { day: "Thu", received: 0, distributed: 0 },
    { day: "Fri", received: 0, distributed: 0 },
    { day: "Sat", received: 0, distributed: 0 },
    { day: "Sun", received: 0, distributed: 0 }
  ];
  lowStockProducts = [];
  activities = [];
  ngOnInit() {
    this.loadStats();
    this.subscriptions.push(this.lccService.items$.subscribe(() => {
      this.loadStats();
    }));
    this.subscriptions.push(this.reportsService.records$.subscribe(() => {
      this.loadStats();
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
  loadStats() {
    const warehouseProducts = this.lccService.getWarehouseProducts();
    const lccItems = this.lccService.getItems();
    const warehouseCount = warehouseProducts.length;
    const lccCount = lccItems.length;
    const totalProducts = warehouseCount + lccCount;
    const warehouseStock = warehouseProducts.reduce((sum, p) => sum + (Number(p.quantity) || 0), 0);
    const lccStock = lccItems.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
    const totalStock = warehouseStock + lccStock;
    const categorySet = /* @__PURE__ */ new Set();
    warehouseProducts.forEach((p) => {
      if (p.name && typeof p.name === "string" && p.name.trim()) {
        categorySet.add(p.name.trim());
      }
    });
    lccItems.forEach((item) => {
      if (item.name && typeof item.name === "string" && item.name.trim()) {
        categorySet.add(item.name.trim());
      }
    });
    const lowWarehouseProducts = warehouseProducts.filter((p) => Number(p.quantity) < 20);
    const lowLccItems = lccItems.filter((item) => Number(item.quantity) < 20);
    const lowStockCount = lowWarehouseProducts.length + lowLccItems.length;
    const isLowStock = lowStockCount > 0;
    this.stats = [
      {
        title: "Total Products",
        value: totalStock,
        icon: "\u{1F3E2}",
        description: `${warehouseStock} Warehouse + ${lccStock} LCC units`,
        color: "blue"
      },
      {
        title: "Total Stocks Items",
        value: totalProducts,
        icon: "\u{1F4E6}",
        description: `${warehouseCount} Products + ${lccCount} LCC`,
        color: "yellow"
      },
      {
        title: "Low Stock Items",
        value: lowStockCount,
        icon: "\u26A0\uFE0F",
        description: isLowStock ? "Stock Required (< 20 PCS)" : "All stocks adequate",
        color: "red",
        isAlert: isLowStock
      },
      {
        title: "Categories",
        value: categorySet.size || (totalProducts > 0 ? 1 : 0),
        icon: "\u{1F5C3}\uFE0F",
        description: "Distinct product types",
        color: "green"
      }
    ];
    const realLowStock = [];
    lowWarehouseProducts.forEach((p) => {
      realLowStock.push({
        name: p.productId ? `${p.productId} - ${p.name}` : p.name,
        category: p.location ? `Warehouse (${p.location})` : "Warehouse",
        stock: Number(p.quantity),
        minimum: 20
      });
    });
    lowLccItems.forEach((item) => {
      realLowStock.push({
        name: item.productId ? `${item.productId} - ${item.name}` : item.name,
        category: item.location ? `LCC (${item.location})` : "LCC",
        stock: Number(item.quantity),
        minimum: 20
      });
    });
    this.lowStockProducts = realLowStock;
    this.activities = this.buildRecentActivities();
    this.calculateStockMovement();
  }
  buildRecentActivities() {
    const records = this.reportsService.getRecords();
    if (records && records.length > 0) {
      return records.slice(0, 3).map((r) => {
        let icon = "\u{1F4E6}";
        if (r.eventType === "STOCK_RECEIVED")
          icon = "\u{1F4E5}";
        else if (r.eventType === "STOCK_TRANSFERRED")
          icon = "\u{1F504}";
        else if (r.eventType === "PRODUCT_UPDATED")
          icon = "\u270F\uFE0F";
        else if (r.eventType === "PRODUCT_DELETED" || r.eventType === "LCC_TRANSFER_DELETED")
          icon = "\u{1F5D1}\uFE0F";
        else if (r.eventType === "PRODUCT_ADDED")
          icon = "\u2728";
        const qtyPrefix = r.quantityChange > 0 ? `+${r.quantityChange}` : `${r.quantityChange}`;
        const prodName = r.productId && r.productId !== "N/A" ? `${r.productId} (${r.productName})` : r.productName;
        let description = "";
        if (r.eventType === "STOCK_RECEIVED") {
          description = `${prodName} \u2022 ${qtyPrefix} PCS received by ${r.updatedBy || "Staff"}`;
        } else if (r.eventType === "PRODUCT_ADDED") {
          description = `${prodName} \u2022 ${r.newStock} PCS registered by ${r.updatedBy || "Staff"}`;
        } else if (r.eventType === "STOCK_TRANSFERRED") {
          description = `${prodName} \u2022 ${Math.abs(r.quantityChange)} PCS transferred to LCC by ${r.updatedBy || "Staff"}`;
        } else if (r.eventType === "PRODUCT_UPDATED") {
          description = `${prodName} \u2022 Stock updated to ${r.newStock} PCS by ${r.updatedBy || "Staff"}`;
        } else if (r.eventType === "PRODUCT_DELETED") {
          description = `${prodName} \u2022 Removed from inventory by ${r.updatedBy || "Admin"}`;
        } else {
          description = `${prodName} \u2022 ${r.remarks || "Warehouse operation"}`;
        }
        return {
          title: r.eventTitle || "Warehouse Operation",
          description,
          time: this.formatActivityTime(r.date, r.time, r.timestamp),
          icon
        };
      });
    }
    const lccItems = this.lccService.getItems();
    const warehouseProducts = this.lccService.getWarehouseProducts();
    const fallback = [];
    if (lccItems && lccItems.length > 0) {
      lccItems.slice(0, 2).forEach((item) => {
        fallback.push({
          title: "Transferred to LCC",
          description: `${item.productId ? item.productId + " (" + item.name + ")" : item.name} \u2022 ${item.quantity} PCS transferred by ${item.switchedBy || "Staff"}`,
          time: this.formatActivityTime(item.date),
          icon: "\u{1F504}"
        });
      });
    }
    if (warehouseProducts && warehouseProducts.length > 0) {
      warehouseProducts.slice(0, 2).forEach((p) => {
        fallback.push({
          title: "Product in Warehouse",
          description: `${p.productId ? p.productId + " (" + p.name + ")" : p.name} \u2022 ${p.quantity} PCS available in ${p.location || "Warehouse"}`,
          time: this.formatActivityTime(p.receivedDate),
          icon: "\u{1F4E6}"
        });
      });
    }
    return fallback.slice(0, 4);
  }
  formatActivityTime(dateStr, timeStr, timestamp) {
    const today = /* @__PURE__ */ new Date();
    const todayYMD = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    const todayDMY = `${String(today.getDate()).padStart(2, "0")}-${String(today.getMonth() + 1).padStart(2, "0")}-${today.getFullYear()}`;
    const isToday = dateStr === todayYMD || dateStr === todayDMY || (timestamp ? new Date(timestamp).toDateString() === today.toDateString() : false);
    const timePortion = timeStr ? ` at ${timeStr}` : "";
    if (isToday) {
      return `Today${timePortion}`;
    }
    const yesterday = /* @__PURE__ */ new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yestYMD = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, "0")}-${String(yesterday.getDate()).padStart(2, "0")}`;
    const yestDMY = `${String(yesterday.getDate()).padStart(2, "0")}-${String(yesterday.getMonth() + 1).padStart(2, "0")}-${yesterday.getFullYear()}`;
    const isYesterday = dateStr === yestYMD || dateStr === yestDMY || (timestamp ? new Date(timestamp).toDateString() === yesterday.toDateString() : false);
    if (isYesterday) {
      return `Yesterday${timePortion}`;
    }
    return dateStr ? `${dateStr}${timePortion}` : "Recent";
  }
  normalizeDateToYMD(dateStr) {
    if (!dateStr)
      return "";
    if (/^\d{2}-\d{2}-\d{4}$/.test(dateStr)) {
      const [d, m, y] = dateStr.split("-");
      return `${y}-${m}-${d}`;
    }
    return dateStr;
  }
  calculateStockMovement() {
    const records = this.reportsService.getRecords();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = /* @__PURE__ */ new Date();
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
      const d = /* @__PURE__ */ new Date();
      d.setDate(today.getDate() - i);
      const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      last7Days.push({
        day: days[d.getDay()],
        dateStr,
        received: 0,
        distributed: 0
      });
    }
    let hasActivity = false;
    if (records && records.length > 0) {
      records.forEach((r) => {
        const normDate = this.normalizeDateToYMD(r.date);
        const bucket = last7Days.find((d) => d.dateStr === r.date || d.dateStr === normDate);
        if (bucket) {
          if (r.eventType === "STOCK_RECEIVED" || r.eventType === "PRODUCT_ADDED") {
            bucket.received += Math.max(0, Number(r.quantityChange) || 0);
            hasActivity = true;
          } else if (r.eventType === "STOCK_TRANSFERRED") {
            bucket.distributed += Math.abs(Number(r.quantityChange) || 0);
            hasActivity = true;
          }
        }
      });
    }
    if (hasActivity) {
      this.stockMovement = last7Days.map((d) => ({
        day: d.day,
        received: d.received,
        distributed: d.distributed
      }));
    } else {
      this.stockMovement = [
        { day: "Mon", received: 70, distributed: 35 },
        { day: "Tue", received: 95, distributed: 55 },
        { day: "Wed", received: 60, distributed: 45 },
        { day: "Thu", received: 120, distributed: 70 },
        { day: "Fri", received: 85, distributed: 50 },
        { day: "Sat", received: 105, distributed: 65 },
        { day: "Sun", received: 45, distributed: 25 }
      ];
    }
  }
  getBarHeight(value) {
    if (!value || value <= 0)
      return 0;
    const maxVal = Math.max(...this.stockMovement.map((m) => Math.max(m.received, m.distributed)), 120);
    return Math.min(100, Math.max(8, value / maxVal * 100));
  }
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)(\u0275\u0275directiveInject(LccService), \u0275\u0275directiveInject(ReportsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 77, vars: 9, consts: [["noActivities", ""], ["noLowStock", ""], [1, "dashboard-page"], [1, "page-intro"], [1, "eyebrow"], [1, "stats-grid"], ["class", "stat-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "dashboard-grid"], [1, "panel", "chart-panel"], [1, "panel-header"], [1, "panel-icon"], [1, "chart-legend"], [1, "legend-dot", "received"], [1, "legend-dot", "distributed"], [1, "chart"], [1, "chart-y-axis"], [1, "chart-body"], [1, "chart-grid-lines"], [1, "chart-columns"], ["class", "day-column", 4, "ngFor", "ngForOf"], [1, "chart-footer"], [1, "panel", "activity-panel"], ["class", "activity-list", 4, "ngIf", "ngIfElse"], [1, "panel", "low-stock-panel"], [1, "alert-count"], ["class", "table-wrapper", 4, "ngIf", "ngIfElse"], [1, "stat-card", 3, "ngClass"], [1, "stat-top"], [1, "stat-title"], [1, "stat-icon"], ["class", "alert-pulse-dot", 4, "ngIf"], [1, "alert-pulse-dot"], [1, "day-column"], [1, "bars"], [1, "bar", "received", 3, "title"], [1, "bar", "distributed", 3, "title"], [1, "day-label"], [1, "activity-list"], ["class", "activity-item", 4, "ngFor", "ngForOf"], [1, "activity-item"], [1, "activity-icon"], [1, "activity-details"], [1, "empty-activity-state"], [1, "table-wrapper"], [4, "ngFor", "ngForOf"], [1, "product-name"], [1, "stock-danger"], [1, "status-badge", "alert-blinking"], [1, "empty-stock-state"], [1, "check-icon"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "section", 3)(2, "span", 4);
      \u0275\u0275text(3, "1:1:1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Monitor your warehouse stock and daily activities.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "section", 5);
      \u0275\u0275template(9, Dashboard_article_9_Template, 11, 15, "article", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "section", 7)(11, "article", 8)(12, "div", 9)(13, "div")(14, "h2");
      \u0275\u0275text(15, "Stock Movement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p");
      \u0275\u0275text(17, "Weekly stock received and distributed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "span", 10);
      \u0275\u0275text(19, "\u{1F4C8}");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 11)(21, "span");
      \u0275\u0275element(22, "i", 12);
      \u0275\u0275text(23, " Received");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275element(25, "i", 13);
      \u0275\u0275text(26, " Distributed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 14)(28, "div", 15)(29, "span");
      \u0275\u0275text(30, "120");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span");
      \u0275\u0275text(32, "90");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span");
      \u0275\u0275text(34, "60");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span");
      \u0275\u0275text(36, "30");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275text(38, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 16)(40, "div", 17);
      \u0275\u0275element(41, "span")(42, "span")(43, "span")(44, "span")(45, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 18);
      \u0275\u0275template(47, Dashboard_div_47_Template, 6, 7, "div", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "div", 20)(49, "span");
      \u0275\u0275text(50, "Weekly overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span");
      \u0275\u0275text(52, "Sample data");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "article", 21)(54, "div", 9)(55, "div")(56, "h2");
      \u0275\u0275text(57, "Recent Activity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p");
      \u0275\u0275text(59, "Latest warehouse operations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "span", 10);
      \u0275\u0275text(61, "\u{1F552}");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(62, Dashboard_div_62_Template, 2, 1, "div", 22)(63, Dashboard_ng_template_63_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "section", 23)(66, "div", 9)(67, "div")(68, "h2");
      \u0275\u0275text(69, "Low Stock Alerts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "p");
      \u0275\u0275text(71, "Products that may need restocking (Stock below 20)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "span", 24);
      \u0275\u0275text(73);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(74, Dashboard_div_74_Template, 16, 1, "div", 25)(75, Dashboard_ng_template_75_Template, 5, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const noActivities_r6 = \u0275\u0275reference(64);
      const noLowStock_r7 = \u0275\u0275reference(76);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.stats);
      \u0275\u0275advance(38);
      \u0275\u0275property("ngForOf", ctx.stockMovement);
      \u0275\u0275advance(15);
      \u0275\u0275property("ngIf", ctx.activities.length > 0)("ngIfElse", noActivities_r6);
      \u0275\u0275advance(10);
      \u0275\u0275classProp("alert-active", ctx.lowStockProducts.length > 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.lowStockProducts.length, " items ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.lowStockProducts.length > 0)("ngIfElse", noLowStock_r7);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n.dashboard-page[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  min-height: 80vh;\n  padding: 0 36px 36px;\n  color: #263238;\n  background: #ffffff;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  min-height: 88px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  border-bottom: 1px solid #f0eee7;\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  font-size: 14px;\n  color: #647080;\n}\n.breadcrumb[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #27313f;\n  font-weight: 600;\n}\n.breadcrumb-arrow[_ngcontent-%COMP%] {\n  color: #d6a800;\n  font-size: 24px;\n}\n.warehouse-label[_ngcontent-%COMP%] {\n  color: #77808d;\n  font-size: 14px;\n}\n.page-intro[_ngcontent-%COMP%] {\n  padding: 36px 0 28px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  color: #c39500;\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 3px;\n}\n.page-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: clamp(28px, 3vw, 42px);\n  letter-spacing: -1px;\n  color: #222d3d;\n}\n.page-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #77808d;\n  font-size: 15px;\n  line-height: 1.6;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 18px;\n  margin-bottom: 28px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  min-width: 0;\n  padding: 23px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff8dc 0%,\n      #fffdf8 52px,\n      #ffffff 100px);\n  border: 1px solid #fae69e;\n  border-radius: 18px;\n  box-shadow: 0 5px 18px rgba(34, 45, 61, 0.025);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.stat-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #ffe082,\n      #ffd54f);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: #f3d472;\n  box-shadow: 0 9px 25px rgba(214, 168, 0, 0.12), 0 5px 18px rgba(34, 45, 61, 0.04);\n}\n.stat-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.stat-title[_ngcontent-%COMP%] {\n  color: #4b5563;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n}\n.stat-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  width: 42px;\n  height: 42px;\n  border-radius: 13px;\n  background: #fff4c7;\n  font-size: 21px;\n}\n.stat-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 20px 0 7px;\n  color: #25313d;\n  font-size: 32px;\n  font-weight: 750;\n}\n.stat-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12.5px;\n  line-height: 1.45;\n}\n.stat-highlight-yellow[_ngcontent-%COMP%] {\n  color: #c27803;\n  font-weight: 600;\n}\n.stat-card.red[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: #fff0e8;\n}\n.stat-card.has-alert[_ngcontent-%COMP%] {\n  border-color: #fca5a5;\n  background:\n    linear-gradient(\n      180deg,\n      #fff5f5 0%,\n      #fffbfb 52px,\n      #ffffff 100px);\n  box-shadow: 0 6px 20px rgba(220, 38, 38, 0.09);\n}\n.stat-card.has-alert[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      90deg,\n      #ef4444,\n      #dc2626) !important;\n  animation: _ngcontent-%COMP%_barPulseRed 1.8s infinite ease-in-out;\n}\n.stat-card.has-alert[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #b91c1c;\n}\n.stat-icon.alert-blinking[_ngcontent-%COMP%] {\n  background: #fee2e2 !important;\n  color: #0b170d;\n  border: 1px solid #fecaca;\n  animation: _ngcontent-%COMP%_iconPulseRed 1.4s infinite ease-in-out;\n}\n.warning-blink-red[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n  font-weight: 700 !important;\n  font-size: 12.5px !important;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  animation: _ngcontent-%COMP%_warningBlinkRed 1.2s infinite ease-in-out;\n}\n.alert-pulse-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background-color: #dc2626;\n  box-shadow: 0 0 6px #dc2626;\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_dotFlash 1.2s infinite ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_warningBlinkRed {\n  0%, 100% {\n    opacity: 1;\n    color: #dc2626;\n    text-shadow: 0 0 6px rgba(220, 38, 38, 0.35);\n  }\n  50% {\n    opacity: 0.35;\n    color: #ef4444;\n    text-shadow: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_dotFlash {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(0.6);\n    opacity: 0.3;\n  }\n}\n@keyframes _ngcontent-%COMP%_iconPulseRed {\n  0%, 100% {\n    transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.4);\n  }\n  50% {\n    transform: scale(1.08);\n    box-shadow: 0 0 0 7px rgba(220, 38, 38, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_barPulseRed {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n.stat-card.blue[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: #eaf3ff;\n}\n.stat-card.green[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  background: #e9f7ec;\n}\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.45fr) minmax(300px, 1fr);\n  gap: 22px;\n  margin-bottom: 24px;\n}\n.panel[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 26px;\n  background: #fff;\n  border: 1px solid #eeece5;\n  border-radius: 18px;\n  box-shadow: 0 5px 18px rgba(34, 45, 61, 0.025);\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 24px;\n}\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #293541;\n  font-size: 20px;\n  font-weight: 700;\n}\n.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #89919c;\n  font-size: 13px;\n  line-height: 1.5;\n}\n.panel-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 42px;\n  height: 42px;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background: #fff7d8;\n  font-size: 20px;\n}\n.chart-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 18px;\n  color: #707987;\n  font-size: 12px;\n}\n.chart-legend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.legend-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 9px;\n  height: 9px;\n  border-radius: 3px;\n}\n.legend-dot.received[_ngcontent-%COMP%] {\n  background: #ffca28;\n}\n.legend-dot.distributed[_ngcontent-%COMP%] {\n  background: #64748b;\n}\n.chart[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 32px minmax(0, 1fr);\n  height: 220px;\n}\n.chart-y-axis[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0 8px 25px 0;\n  color: #9ba2ac;\n  font-size: 10px;\n  text-align: right;\n}\n.chart-body[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 0;\n  height: 100%;\n}\n.chart-grid-lines[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 0 25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.chart-grid-lines[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top: 1px dashed #e9e8e2;\n}\n.chart-columns[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: space-around;\n  gap: 6px;\n  height: 100%;\n}\n.day-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-width: 0;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n}\n.bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  gap: 4px;\n  width: 100%;\n  height: calc(100% - 25px);\n}\n.bar[_ngcontent-%COMP%] {\n  width: min(36%, 20px);\n  min-height: 3px;\n  border-radius: 5px 5px 1px 1px;\n  transition: height 0.3s ease;\n}\n.bar.received[_ngcontent-%COMP%] {\n  background: #ffca28;\n}\n.bar.distributed[_ngcontent-%COMP%] {\n  background: #64748b;\n}\n.day-label[_ngcontent-%COMP%] {\n  height: 25px;\n  padding-top: 9px;\n  color: #818995;\n  font-size: 11px;\n}\n.chart-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding-top: 18px;\n  margin-top: 10px;\n  border-top: 1px solid #f0eee8;\n  color: #89919c;\n  font-size: 12px;\n}\n.activity-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.activity-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 13px;\n  padding: 15px 0;\n  border-bottom: 1px solid #f0eee8;\n}\n.activity-item[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n.activity-item[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n  border-bottom: none;\n}\n.activity-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background: #fff5ce;\n  font-size: 17px;\n}\n.activity-details[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.activity-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 1px 0 6px;\n  color: #303b49;\n  font-size: 14px;\n  font-weight: 650;\n}\n.activity-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  color: #858d99;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.activity-details[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #a0a5ae;\n  font-size: 11px;\n}\n.empty-activity-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 16px;\n  color: #858d99;\n  font-size: 13px;\n  text-align: center;\n  background: #fffdf8;\n  border: 1px dashed #f0eee8;\n  border-radius: 12px;\n}\n.low-stock-panel[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.alert-count[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  flex-shrink: 0;\n  border-radius: 9px;\n  background: #fff0e8;\n  color: #c35b25;\n  font-size: 12px;\n  font-weight: 700;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  white-space: nowrap;\n}\nthead[_ngcontent-%COMP%] {\n  background: #fffaf0;\n}\nth[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  color: #7b8490;\n  font-size: 12px;\n  font-weight: 650;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 17px 16px;\n  border-bottom: 1px solid #f0eee8;\n  color: #697483;\n  font-size: 13px;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fffdf7;\n}\n.product-name[_ngcontent-%COMP%] {\n  color: #303b49;\n  font-weight: 650;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 7px 10px;\n  border-radius: 8px;\n  background: #fff0e8;\n  color: #c35b25;\n  font-size: 11px;\n  font-weight: 700;\n}\n.status-badge.alert-blinking[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 8px;\n  background: #fee2e2;\n  color: #dc2626;\n  border: 1px solid #fca5a5;\n  font-size: 12px;\n  font-weight: 750;\n  animation: _ngcontent-%COMP%_warningBadgeBlink 1.2s infinite ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_warningBadgeBlink {\n  0%, 100% {\n    opacity: 1;\n    background: #fee2e2;\n    box-shadow: 0 0 10px rgba(220, 38, 38, 0.25);\n  }\n  50% {\n    opacity: 0.55;\n    background: #fff5f5;\n    box-shadow: none;\n  }\n}\n.alert-count.alert-active[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n  font-weight: 700;\n  animation: _ngcontent-%COMP%_iconPulseRed 1.8s infinite ease-in-out;\n}\n.stock-danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 750;\n  background: #fef2f2;\n  padding: 3px 8px;\n  border-radius: 6px;\n  display: inline-block;\n}\n.empty-stock-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 24px;\n  border-radius: 12px;\n  background: #f0fdf4;\n  border: 1px dashed #bbf7d0;\n  color: #166534;\n  font-size: 14px;\n  font-weight: 500;\n}\n.empty-stock-state[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #22c55e;\n  color: #fff;\n  font-weight: 700;\n  font-size: 14px;\n}\n@media (max-width: 1100px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .dashboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .dashboard-page[_ngcontent-%COMP%] {\n    padding: 0 20px 32px;\n  }\n  .dashboard-header[_ngcontent-%COMP%] {\n    min-height: 64px;\n  }\n  .warehouse-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .page-intro[_ngcontent-%COMP%] {\n    padding: 24px 0 20px;\n  }\n  .page-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n@media (max-width: 540px) {\n  .dashboard-page[_ngcontent-%COMP%] {\n    padding: 0 14px 24px;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 16px 18px;\n    border-radius: 14px;\n  }\n  .stat-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n    margin: 14px 0 6px;\n  }\n  .stat-icon[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n    font-size: 18px;\n  }\n  .panel[_ngcontent-%COMP%] {\n    padding: 16px 14px;\n    border-radius: 14px;\n  }\n  .panel-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .chart[_ngcontent-%COMP%] {\n    height: 190px;\n    grid-template-columns: 24px minmax(0, 1fr);\n  }\n  .bar[_ngcontent-%COMP%] {\n    width: min(44%, 18px);\n  }\n  .day-label[_ngcontent-%COMP%] {\n    font-size: 9.5px;\n  }\n  .chart-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n    font-size: 11px;\n  }\n  .table-wrapper[_ngcontent-%COMP%] {\n    -webkit-overflow-scrolling: touch;\n    border-radius: 8px;\n  }\n  table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px 10px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule], template: `
<div class="dashboard-page">



  <!-- Page introduction -->
  <section class="page-intro">
    <span class="eyebrow">1:1:1</span>
    <h1>Dashboard</h1>
    <p>Monitor your warehouse stock and daily activities.</p>
  </section>

  <!-- Summary cards -->
  <section class="stats-grid">
    <article
      class="stat-card"
      *ngFor="let stat of stats"
      [ngClass]="[stat.color, stat.isAlert ? 'has-alert' : '']">

      <div class="stat-top">
        <span class="stat-title">{{ stat.title }}</span>
        <span class="stat-icon" [class.alert-blinking]="stat.isAlert">{{ stat.icon }}</span>
      </div>

      <h2>{{ stat.value }}</h2>
      <p [class.warning-blink-red]="stat.isAlert" [class.stat-highlight-yellow]="!stat.isAlert">
        <span *ngIf="stat.isAlert" class="alert-pulse-dot"></span>
        {{ stat.description }}
      </p>
    </article>
  </section>

  <!-- Charts and activities -->
  <section class="dashboard-grid">

    <!-- Stock movement chart -->
    <article class="panel chart-panel">
      <div class="panel-header">
        <div>
          <h2>Stock Movement</h2>
          <p>Weekly stock received and distributed</p>
        </div>
        <span class="panel-icon">\u{1F4C8}</span>
      </div>

      <div class="chart-legend">
        <span><i class="legend-dot received"></i> Received</span>
        <span><i class="legend-dot distributed"></i> Distributed</span>
      </div>

      <div class="chart">
        <div class="chart-y-axis">
          <span>120</span>
          <span>90</span>
          <span>60</span>
          <span>30</span>
          <span>0</span>
        </div>

        <div class="chart-body">
          <div class="chart-grid-lines">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="chart-columns">
            <div class="day-column" *ngFor="let item of stockMovement">
              <div class="bars">
                <div
                  class="bar received"
                  [style.height.%]="getBarHeight(item.received)"
                  [title]="'Received: ' + item.received">
                </div>
                <div
                  class="bar distributed"
                  [style.height.%]="getBarHeight(item.distributed)"
                  [title]="'Distributed: ' + item.distributed">
                </div>
              </div>
              <span class="day-label">{{ item.day }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="chart-footer">
        <span>Weekly overview</span>
        <span>Sample data</span>
      </div>
    </article>

    <!-- Recent activity -->
    <article class="panel activity-panel">
      <div class="panel-header">
        <div>
          <h2>Recent Activity</h2>
          <p>Latest warehouse operations</p>
        </div>
        <span class="panel-icon">\u{1F552}</span>
      </div>

      <div class="activity-list" *ngIf="activities.length > 0; else noActivities">
        <div class="activity-item" *ngFor="let activity of activities">
          <div class="activity-icon">{{ activity.icon }}</div>
          <div class="activity-details">
            <h3>{{ activity.title }}</h3>
            <p>{{ activity.description }}</p>
            <span>{{ activity.time }}</span>
          </div>
        </div>
      </div>

      <ng-template #noActivities>
        <div class="empty-activity-state">
          <p>No recent operations recorded yet. Added or updated products will appear here.</p>
        </div>
      </ng-template>
    </article>

  </section>

  <!-- Low stock table -->
  <section class="panel low-stock-panel">
    <div class="panel-header">
      <div>
        <h2>Low Stock Alerts</h2>
        <p>Products that may need restocking (Stock below 20)</p>
      </div>
      <span class="alert-count" [class.alert-active]="lowStockProducts.length > 0">
        {{ lowStockProducts.length }} items
      </span>
    </div>

    <div class="table-wrapper" *ngIf="lowStockProducts.length > 0; else noLowStock">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Location</th>
            <th>Current Stock</th>
            <th>Minimum Stock</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr *ngFor="let product of lowStockProducts">
            <td class="product-name">{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td><span class="stock-danger">{{ product.stock }} units</span></td>
            <td>{{ product.minimum }} units</td>
            <td>
              <span class="status-badge alert-blinking">
                <span class="alert-pulse-dot"></span>
                Stock Required
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <ng-template #noLowStock>
      <div class="empty-stock-state">
        <span class="check-icon">\u2713</span>
        <p>All stock levels are adequate (all items are 20 or above). No products require updating.</p>
      </div>
    </ng-template>
  </section>

</div>
`, styles: ['/* src/app/pages/dashboard/dashboard.css */\n:host {\n  display: block;\n  width: 100%;\n  min-width: 0;\n}\n.dashboard-page {\n  width: 100%;\n  min-width: 0;\n  min-height: 80vh;\n  padding: 0 36px 36px;\n  color: #263238;\n  background: #ffffff;\n}\n.dashboard-header {\n  min-height: 88px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  border-bottom: 1px solid #f0eee7;\n}\n.breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  font-size: 14px;\n  color: #647080;\n}\n.breadcrumb strong {\n  color: #27313f;\n  font-weight: 600;\n}\n.breadcrumb-arrow {\n  color: #d6a800;\n  font-size: 24px;\n}\n.warehouse-label {\n  color: #77808d;\n  font-size: 14px;\n}\n.page-intro {\n  padding: 36px 0 28px;\n}\n.eyebrow {\n  color: #c39500;\n  font-size: 13px;\n  font-weight: 800;\n  letter-spacing: 3px;\n}\n.page-intro h1 {\n  margin: 8px 0;\n  font-size: clamp(28px, 3vw, 42px);\n  letter-spacing: -1px;\n  color: #222d3d;\n}\n.page-intro p {\n  margin: 0;\n  color: #77808d;\n  font-size: 15px;\n  line-height: 1.6;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 18px;\n  margin-bottom: 28px;\n}\n.stat-card {\n  position: relative;\n  overflow: hidden;\n  min-width: 0;\n  padding: 23px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff8dc 0%,\n      #fffdf8 52px,\n      #ffffff 100px);\n  border: 1px solid #fae69e;\n  border-radius: 18px;\n  box-shadow: 0 5px 18px rgba(34, 45, 61, 0.025);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.stat-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #ffe082,\n      #ffd54f);\n}\n.stat-card:hover {\n  transform: translateY(-3px);\n  border-color: #f3d472;\n  box-shadow: 0 9px 25px rgba(214, 168, 0, 0.12), 0 5px 18px rgba(34, 45, 61, 0.04);\n}\n.stat-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.stat-title {\n  color: #4b5563;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n}\n.stat-icon {\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  width: 42px;\n  height: 42px;\n  border-radius: 13px;\n  background: #fff4c7;\n  font-size: 21px;\n}\n.stat-card h2 {\n  margin: 20px 0 7px;\n  color: #25313d;\n  font-size: 32px;\n  font-weight: 750;\n}\n.stat-card p {\n  margin: 0;\n  font-size: 12.5px;\n  line-height: 1.45;\n}\n.stat-highlight-yellow {\n  color: #c27803;\n  font-weight: 600;\n}\n.stat-card.red .stat-icon {\n  background: #fff0e8;\n}\n.stat-card.has-alert {\n  border-color: #fca5a5;\n  background:\n    linear-gradient(\n      180deg,\n      #fff5f5 0%,\n      #fffbfb 52px,\n      #ffffff 100px);\n  box-shadow: 0 6px 20px rgba(220, 38, 38, 0.09);\n}\n.stat-card.has-alert::before {\n  background:\n    linear-gradient(\n      90deg,\n      #ef4444,\n      #dc2626) !important;\n  animation: barPulseRed 1.8s infinite ease-in-out;\n}\n.stat-card.has-alert h2 {\n  color: #b91c1c;\n}\n.stat-icon.alert-blinking {\n  background: #fee2e2 !important;\n  color: #0b170d;\n  border: 1px solid #fecaca;\n  animation: iconPulseRed 1.4s infinite ease-in-out;\n}\n.warning-blink-red {\n  color: #dc2626 !important;\n  font-weight: 700 !important;\n  font-size: 12.5px !important;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  animation: warningBlinkRed 1.2s infinite ease-in-out;\n}\n.alert-pulse-dot {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background-color: #dc2626;\n  box-shadow: 0 0 6px #dc2626;\n  flex-shrink: 0;\n  animation: dotFlash 1.2s infinite ease-in-out;\n}\n@keyframes warningBlinkRed {\n  0%, 100% {\n    opacity: 1;\n    color: #dc2626;\n    text-shadow: 0 0 6px rgba(220, 38, 38, 0.35);\n  }\n  50% {\n    opacity: 0.35;\n    color: #ef4444;\n    text-shadow: none;\n  }\n}\n@keyframes dotFlash {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(0.6);\n    opacity: 0.3;\n  }\n}\n@keyframes iconPulseRed {\n  0%, 100% {\n    transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.4);\n  }\n  50% {\n    transform: scale(1.08);\n    box-shadow: 0 0 0 7px rgba(220, 38, 38, 0);\n  }\n}\n@keyframes barPulseRed {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n.stat-card.blue .stat-icon {\n  background: #eaf3ff;\n}\n.stat-card.green .stat-icon {\n  background: #e9f7ec;\n}\n.dashboard-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1.45fr) minmax(300px, 1fr);\n  gap: 22px;\n  margin-bottom: 24px;\n}\n.panel {\n  min-width: 0;\n  padding: 26px;\n  background: #fff;\n  border: 1px solid #eeece5;\n  border-radius: 18px;\n  box-shadow: 0 5px 18px rgba(34, 45, 61, 0.025);\n}\n.panel-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 24px;\n}\n.panel-header h2 {\n  margin: 0;\n  color: #293541;\n  font-size: 20px;\n  font-weight: 700;\n}\n.panel-header p {\n  margin: 8px 0 0;\n  color: #89919c;\n  font-size: 13px;\n  line-height: 1.5;\n}\n.panel-icon {\n  display: grid;\n  place-items: center;\n  width: 42px;\n  height: 42px;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background: #fff7d8;\n  font-size: 20px;\n}\n.chart-legend {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 18px;\n  color: #707987;\n  font-size: 12px;\n}\n.chart-legend span {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.legend-dot {\n  display: inline-block;\n  width: 9px;\n  height: 9px;\n  border-radius: 3px;\n}\n.legend-dot.received {\n  background: #ffca28;\n}\n.legend-dot.distributed {\n  background: #64748b;\n}\n.chart {\n  display: grid;\n  grid-template-columns: 32px minmax(0, 1fr);\n  height: 220px;\n}\n.chart-y-axis {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0 8px 25px 0;\n  color: #9ba2ac;\n  font-size: 10px;\n  text-align: right;\n}\n.chart-body {\n  position: relative;\n  min-width: 0;\n  height: 100%;\n}\n.chart-grid-lines {\n  position: absolute;\n  inset: 0 0 25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.chart-grid-lines span {\n  width: 100%;\n  border-top: 1px dashed #e9e8e2;\n}\n.chart-columns {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  justify-content: space-around;\n  gap: 6px;\n  height: 100%;\n}\n.day-column {\n  display: flex;\n  flex: 1;\n  min-width: 0;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n}\n.bars {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  gap: 4px;\n  width: 100%;\n  height: calc(100% - 25px);\n}\n.bar {\n  width: min(36%, 20px);\n  min-height: 3px;\n  border-radius: 5px 5px 1px 1px;\n  transition: height 0.3s ease;\n}\n.bar.received {\n  background: #ffca28;\n}\n.bar.distributed {\n  background: #64748b;\n}\n.day-label {\n  height: 25px;\n  padding-top: 9px;\n  color: #818995;\n  font-size: 11px;\n}\n.chart-footer {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding-top: 18px;\n  margin-top: 10px;\n  border-top: 1px solid #f0eee8;\n  color: #89919c;\n  font-size: 12px;\n}\n.activity-list {\n  display: flex;\n  flex-direction: column;\n}\n.activity-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 13px;\n  padding: 15px 0;\n  border-bottom: 1px solid #f0eee8;\n}\n.activity-item:first-child {\n  padding-top: 0;\n}\n.activity-item:last-child {\n  padding-bottom: 0;\n  border-bottom: none;\n}\n.activity-icon {\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background: #fff5ce;\n  font-size: 17px;\n}\n.activity-details {\n  min-width: 0;\n}\n.activity-details h3 {\n  margin: 1px 0 6px;\n  color: #303b49;\n  font-size: 14px;\n  font-weight: 650;\n}\n.activity-details p {\n  margin: 0 0 7px;\n  color: #858d99;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.activity-details > span {\n  color: #a0a5ae;\n  font-size: 11px;\n}\n.empty-activity-state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 16px;\n  color: #858d99;\n  font-size: 13px;\n  text-align: center;\n  background: #fffdf8;\n  border: 1px dashed #f0eee8;\n  border-radius: 12px;\n}\n.low-stock-panel {\n  margin-bottom: 0;\n}\n.alert-count {\n  padding: 8px 12px;\n  flex-shrink: 0;\n  border-radius: 9px;\n  background: #fff0e8;\n  color: #c35b25;\n  font-size: 12px;\n  font-weight: 700;\n}\n.table-wrapper {\n  width: 100%;\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  white-space: nowrap;\n}\nthead {\n  background: #fffaf0;\n}\nth {\n  padding: 14px 16px;\n  color: #7b8490;\n  font-size: 12px;\n  font-weight: 650;\n}\ntd {\n  padding: 17px 16px;\n  border-bottom: 1px solid #f0eee8;\n  color: #697483;\n  font-size: 13px;\n}\ntbody tr:last-child td {\n  border-bottom: none;\n}\ntbody tr:hover {\n  background: #fffdf7;\n}\n.product-name {\n  color: #303b49;\n  font-weight: 650;\n}\n.status-badge {\n  display: inline-block;\n  padding: 7px 10px;\n  border-radius: 8px;\n  background: #fff0e8;\n  color: #c35b25;\n  font-size: 11px;\n  font-weight: 700;\n}\n.status-badge.alert-blinking {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 12px;\n  border-radius: 8px;\n  background: #fee2e2;\n  color: #dc2626;\n  border: 1px solid #fca5a5;\n  font-size: 12px;\n  font-weight: 750;\n  animation: warningBadgeBlink 1.2s infinite ease-in-out;\n}\n@keyframes warningBadgeBlink {\n  0%, 100% {\n    opacity: 1;\n    background: #fee2e2;\n    box-shadow: 0 0 10px rgba(220, 38, 38, 0.25);\n  }\n  50% {\n    opacity: 0.55;\n    background: #fff5f5;\n    box-shadow: none;\n  }\n}\n.alert-count.alert-active {\n  background: #fee2e2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n  font-weight: 700;\n  animation: iconPulseRed 1.8s infinite ease-in-out;\n}\n.stock-danger {\n  color: #dc2626;\n  font-weight: 750;\n  background: #fef2f2;\n  padding: 3px 8px;\n  border-radius: 6px;\n  display: inline-block;\n}\n.empty-stock-state {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 24px;\n  border-radius: 12px;\n  background: #f0fdf4;\n  border: 1px dashed #bbf7d0;\n  color: #166534;\n  font-size: 14px;\n  font-weight: 500;\n}\n.empty-stock-state .check-icon {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #22c55e;\n  color: #fff;\n  font-weight: 700;\n  font-size: 14px;\n}\n@media (max-width: 1100px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .dashboard-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .dashboard-page {\n    padding: 0 20px 32px;\n  }\n  .dashboard-header {\n    min-height: 64px;\n  }\n  .warehouse-label {\n    display: none;\n  }\n  .page-intro {\n    padding: 24px 0 20px;\n  }\n  .page-intro h1 {\n    font-size: 28px;\n  }\n}\n@media (max-width: 540px) {\n  .dashboard-page {\n    padding: 0 14px 24px;\n  }\n  .stats-grid {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .stat-card {\n    padding: 16px 18px;\n    border-radius: 14px;\n  }\n  .stat-card h2 {\n    font-size: 26px;\n    margin: 14px 0 6px;\n  }\n  .stat-icon {\n    width: 36px;\n    height: 36px;\n    font-size: 18px;\n  }\n  .panel {\n    padding: 16px 14px;\n    border-radius: 14px;\n  }\n  .panel-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .panel-header h2 {\n    font-size: 18px;\n  }\n  .chart {\n    height: 190px;\n    grid-template-columns: 24px minmax(0, 1fr);\n  }\n  .bar {\n    width: min(44%, 18px);\n  }\n  .day-label {\n    font-size: 9.5px;\n  }\n  .chart-footer {\n    flex-direction: column;\n    gap: 4px;\n    font-size: 11px;\n  }\n  .table-wrapper {\n    -webkit-overflow-scrolling: touch;\n    border-radius: 8px;\n  }\n  table th,\n  table td {\n    padding: 12px 10px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */\n'] }]
  }], () => [{ type: LccService }, { type: ReportsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/pages/dashboard/dashboard.ts", lineNumber: 30 });
})();
export {
  Dashboard
};
//# debugId=b847b80a-8b83-55f5-b8ba-fcf3fe777d97
//# sourceMappingURL=chunk-QPWOCQJ7.js.map
