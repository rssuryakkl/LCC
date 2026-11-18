import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DashboardStatsData {
  warehouseProductsCount: number;
  warehouseTotalStock: number;
  lccItemsCount: number;
  lccTotalStock: number;
  totalProducts: number;
  totalStock: number;
  categoriesCount: number;
  lowStockCount: number;
  isLowStock: boolean;
}

export interface LowStockItem {
  productId: string;
  name: string;
  category: string;
  stock: number;
  minimum: number;
}

export interface StockMovementItem {
  day: string;
  received: number;
  distributed: number;
}

export interface ActivityItem {
  title: string;
  description: string;
  time?: string;
  date?: string;
  timestamp?: number;
  icon: string;
}

export interface DashboardResponse {
  success: boolean;
  stats: DashboardStatsData;
  lowStockItems: LowStockItem[];
  stockMovement: StockMovementItem[];
  hasMovementActivity: boolean;
  recentActivities: ActivityItem[];
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private get baseUrl(): string {
    const host = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : 'localhost';
    return `http://${host}:5000/api/dashboard/stats`;
  }

  constructor(private http: HttpClient) {}

  getStats(): Observable<DashboardResponse> {
    return this.http.get<DashboardResponse>(this.baseUrl);
  }
}
