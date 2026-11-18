import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService, DashboardResponse } from '../../services/dashboard.service';
import { LccService } from '../../services/lcc.service';
import { ReportsService } from '../../services/reports.service';

export interface StatCard {
  title: string;
  value: number;
  icon: string;
  description: string;
  color: string;
  isAlert?: boolean;
}

export interface ActivityItem {
  title: string;
  description: string;
  time: string;
  icon: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  stats: StatCard[] = [
    {
      title: 'Total Products',
      value: 0,
      icon: '🏢',
      description: 'Units available in Warehouse + LCC',
      color: 'blue'
    },
    {
      title: 'Total Stocks Items',
      value: 0,
      icon: '📦',
      description: 'Inventory items (Warehouse + LCC)',
      color: 'yellow'
    },
    {
      title: 'Low Stock Items',
      value: 0,
      icon: '⚠️',
      description: 'All stocks adequate',
      color: 'red',
      isAlert: false
    },
    {
      title: 'Categories',
      value: 0,
      icon: '🗃️',
      description: 'Distinct product types',
      color: 'green'
    }
  ];

  stockMovement = [
    { day: 'Mon', received: 0, distributed: 0 },
    { day: 'Tue', received: 0, distributed: 0 },
    { day: 'Wed', received: 0, distributed: 0 },
    { day: 'Thu', received: 0, distributed: 0 },
    { day: 'Fri', received: 0, distributed: 0 },
    { day: 'Sat', received: 0, distributed: 0 },
    { day: 'Sun', received: 0, distributed: 0 }
  ];

  lowStockProducts: any[] = [];
  activities: ActivityItem[] = [];

  constructor(
    private dashboardService: DashboardService,
    private lccService: LccService,
    private reportsService: ReportsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadStats();

    // Re-fetch stats live whenever LCC inventory updates
    this.subscriptions.push(
      this.lccService.items$.subscribe(() => {
        this.loadStats();
      })
    );

    // Re-fetch stats live whenever reports update
    this.subscriptions.push(
      this.reportsService.records$.subscribe(() => {
        this.loadStats();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  loadStats(): void {
    this.dashboardService.getStats().subscribe({
      next: (res: DashboardResponse) => {
        if (res && res.success && res.stats) {
          const s = res.stats;
          const isLow = s.isLowStock || (res.lowStockItems && res.lowStockItems.length > 0);

          this.stats = [
            {
              title: 'Total Products',
              value: s.totalStock,
              icon: '🏢',
              description: `${s.warehouseTotalStock} Warehouse + ${s.lccTotalStock} LCC units`,
              color: 'blue'
            },
            {
              title: 'Total Stocks Items',
              value: s.totalProducts,
              icon: '📦',
              description: `${s.warehouseProductsCount} Products + ${s.lccItemsCount} LCC`,
              color: 'yellow'
            },
            {
              title: 'Low Stock Items',
              value: s.lowStockCount,
              icon: '⚠️',
              description: isLow ? 'Stock Required (< 20 PCS)' : 'All stocks adequate',
              color: 'red',
              isAlert: isLow
            },
            {
              title: 'Categories',
              value: s.categoriesCount,
              icon: '🗃️',
              description: 'Distinct product types',
              color: 'green'
            }
          ];

          this.lowStockProducts = res.lowStockItems || [];

          if (res.stockMovement && res.stockMovement.length > 0 && res.hasMovementActivity) {
            this.stockMovement = res.stockMovement;
          } else {
            // Baseline preview if no movement recorded yet in last 7 days
            this.stockMovement = res.stockMovement && res.stockMovement.length > 0
              ? res.stockMovement
              : [
                  { day: 'Mon', received: 70, distributed: 35 },
                  { day: 'Tue', received: 95, distributed: 55 },
                  { day: 'Wed', received: 60, distributed: 45 },
                  { day: 'Thu', received: 120, distributed: 70 },
                  { day: 'Fri', received: 85, distributed: 50 },
                  { day: 'Sat', received: 105, distributed: 65 },
                  { day: 'Sun', received: 45, distributed: 25 }
                ];
          }

          if (res.recentActivities && res.recentActivities.length > 0) {
            this.activities = res.recentActivities.slice(0, 2).map(a => ({
              title: a.title,
              description: a.description,
              time: this.formatActivityTime(a.date, a.time, a.timestamp),
              icon: a.icon || '📦'
            }));
          } else {
            this.activities = [];
          }

          this.cdr.detectChanges();
        }
      },
      error: (err) => {
        console.error('Failed to load dashboard stats from backend API:', err);
      }
    });
  }

  private formatActivityTime(dateStr?: string, timeStr?: string, timestamp?: number): string {
    const today = new Date();
    const todayYMD = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const todayDMY = `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;

    const isToday =
      dateStr === todayYMD ||
      dateStr === todayDMY ||
      (timestamp ? new Date(timestamp).toDateString() === today.toDateString() : false);

    const timePortion = timeStr ? ` at ${timeStr}` : '';
    if (isToday) {
      return `Today${timePortion}`;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yestYMD = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;
    const yestDMY = `${String(yesterday.getDate()).padStart(2, '0')}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${yesterday.getFullYear()}`;

    const isYesterday =
      dateStr === yestYMD ||
      dateStr === yestDMY ||
      (timestamp ? new Date(timestamp).toDateString() === yesterday.toDateString() : false);

    if (isYesterday) {
      return `Yesterday${timePortion}`;
    }

    return dateStr ? `${dateStr}${timePortion}` : 'Recent';
  }

  getBarHeight(value: number): number {
    if (!value || value <= 0) return 0;
    const maxVal = Math.max(
      ...this.stockMovement.map(m => Math.max(m.received, m.distributed)),
      120
    );
    return Math.min(100, Math.max(8, (value / maxVal) * 100));
  }
}
