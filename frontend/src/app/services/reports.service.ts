import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export type ReportEventType =
  | 'STOCK_RECEIVED'
  | 'PRODUCT_ADDED'
  | 'STOCK_TRANSFERRED'
  | 'PRODUCT_UPDATED'
  | 'PRODUCT_DELETED'
  | 'LCC_TRANSFER_DELETED'
  | 'LCC_STOCK_UPDATED'
  | 'DISTRIBUTION';

export interface ReportRecord {
  id: string;              // e.g. "RPT-0001-123"
  date: string;            // e.g. "2026-11-18"
  time: string;            // e.g. "03:15:30 PM"
  productId: string;       // e.g. "SA_102"
  productName: string;     // e.g. "Saree"
  eventType: ReportEventType;
  eventTitle: string;      // e.g. "Stock Received", "Product Added", "Stock Transferred"
  quantityChange: number;  // e.g. +10, -5, +50
  previousStock: number;   // stock before transaction
  newStock: number;        // stock after transaction
  location: string;        // e.g. "Vadalur"
  updatedBy: string;       // e.g. "Abi"
  remarks: string;         // e.g. "Stock replenished", "Initial entry"
  timestamp: number;       // Date.now() for chronological sorting
}

const STORAGE_KEY = 'lcc_reports_records';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private recordsSubject = new BehaviorSubject<ReportRecord[]>(this.loadCachedRecords());
  records$: Observable<ReportRecord[]> = this.recordsSubject.asObservable();

  private get baseUrl(): string {
    const host = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : 'localhost';
    return `http://${host}:5000/api/reports`;
  }

  constructor(private http: HttpClient) {
    this.fetchReportsFromBackend();
  }

  private loadCachedRecords(): ReportRecord[] {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            return parsed;
          }
        }
      }
    } catch (e) {
      console.error('Failed to load cached reports from localStorage', e);
    }
    return [];
  }

  fetchReportsFromBackend(): void {
    this.http.get<{ success: boolean; count: number; reports: any[] }>(this.baseUrl).subscribe({
      next: (res) => {
        if (res && res.success && Array.isArray(res.reports)) {
          const loaded: ReportRecord[] = res.reports.map((r: any) => ({
            id: r.recordId || r._id,
            date: r.date,
            time: r.time,
            productId: r.productId,
            productName: r.productName,
            eventType: r.eventType,
            eventTitle: r.eventTitle,
            quantityChange: Number(r.quantityChange) || 0,
            previousStock: Number(r.previousStock) || 0,
            newStock: Number(r.newStock) || 0,
            location: r.location || 'Vadalur',
            updatedBy: r.updatedBy || 'System',
            remarks: r.remarks || '',
            timestamp: r.timestamp || (r.createdAt ? new Date(r.createdAt).getTime() : Date.now())
          }));

          // Sort newest first
          loaded.sort((a, b) => b.timestamp - a.timestamp);
          this.saveRecords(loaded);
        }
      },
      error: (err) => {
        console.error('Failed to load reports from backend:', err);
      }
    });
  }

  getRecords(): ReportRecord[] {
    return this.recordsSubject.value;
  }

  private saveRecords(records: ReportRecord[]): void {
    this.recordsSubject.next(records);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
      }
    } catch (e) {
      console.error('Failed to save reports records to localStorage', e);
    }
  }

  private getFormattedDate(): string {
    const d = new Date();
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  }

  private getFormattedTime(): string {
    const d = new Date();
    return d.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  }

  private generateRecordId(): string {
    const count = this.recordsSubject.value.length + 1;
    const random = Math.floor(Math.random() * 900 + 100);
    return `RPT-${count.toString().padStart(4, '0')}-${random}`;
  }

  /**
   * Record every single data entry row-by-row in MongoDB and state
   */
  recordEntry(entry: {
    productId: string;
    productName: string;
    eventType: ReportEventType;
    eventTitle?: string;
    quantityChange: number;
    previousStock?: number;
    newStock?: number;
    location?: string;
    updatedBy?: string;
    remarks?: string;
    date?: string;
    time?: string;
  }): ReportRecord {
    const prev = entry.previousStock ?? 0;
    const newStk = entry.newStock ?? Math.max(0, prev + entry.quantityChange);

    const titleMap: Record<string, string> = {
      STOCK_RECEIVED: 'Stock Received',
      PRODUCT_ADDED: 'Product Added',
      STOCK_TRANSFERRED: 'Stock Transferred to LCC',
      PRODUCT_UPDATED: 'Product Updated',
      PRODUCT_DELETED: 'Product Deleted',
      LCC_TRANSFER_DELETED: 'LCC Transfer Removed',
      LCC_STOCK_UPDATED: 'LCC Stock Updated',
      DISTRIBUTION: 'Transferred to Distribution'
    };

    const recordId = this.generateRecordId();
    const newRecord: ReportRecord = {
      id: recordId,
      date: entry.date || this.getFormattedDate(),
      time: entry.time || this.getFormattedTime(),
      productId: (entry.productId || 'N/A').toUpperCase(),
      productName: entry.productName || 'Unknown Product',
      eventType: entry.eventType,
      eventTitle: entry.eventTitle || titleMap[entry.eventType] || 'Inventory Action',
      quantityChange: entry.quantityChange,
      previousStock: prev,
      newStock: newStk,
      location: entry.location || 'Vadalur',
      updatedBy: entry.updatedBy?.trim() || 'System',
      remarks: entry.remarks || '',
      timestamp: Date.now()
    };

    // Update state and cache optimistically
    const updated = [newRecord, ...this.recordsSubject.value];
    this.saveRecords(updated);

    // Save asynchronously to backend MongoDB
    this.http.post<{ success: boolean; report: any }>(this.baseUrl, newRecord).subscribe({
      next: (res) => {
        // Successfully persisted to MongoDB
      },
      error: (err) => {
        console.error('Failed to persist report entry to backend MongoDB:', err);
      }
    });

    return newRecord;
  }

  /**
   * Delete a single record from reports
   */
  deleteRecord(id: string): void {
    const updated = this.recordsSubject.value.filter(r => r.id !== id);
    this.saveRecords(updated);

    this.http.delete(`${this.baseUrl}/${encodeURIComponent(id)}`).subscribe({
      next: () => {},
      error: (err) => console.error('Failed to delete report on backend:', err)
    });
  }

  /**
   * Clear all records
   */
  clearAllRecords(): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {
      console.error('Failed to clear reports from localStorage', e);
    }
    this.recordsSubject.next([]);

    this.http.delete(this.baseUrl).subscribe({
      next: () => {},
      error: (err) => console.error('Failed to clear reports on backend:', err)
    });
  }

  /**
   * Export all records as CSV file
   */
  exportToCsv(customRecords?: ReportRecord[]): void {
    const records = customRecords || this.recordsSubject.value;
    if (records.length === 0) {
      return;
    }

    const headers = [
      'Record ID',
      'Date',
      'Time',
      'Product ID',
      'Product Name',
      'Event / Action',
      'Quantity Change',
      'Previous Stock',
      'New Stock',
      'Location',
      'Updated By',
      'Remarks'
    ];

    const escapeCsv = (val: string | number) => {
      const str = String(val ?? '');
      if (str.includes(',') || str.includes('"') || str.includes('\n')) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    };

    const rows = records.map(r => [
      escapeCsv(r.id),
      escapeCsv(r.date),
      escapeCsv(r.time),
      escapeCsv(r.productId),
      escapeCsv(r.productName),
      escapeCsv(r.eventTitle),
      escapeCsv(r.quantityChange > 0 ? `+${r.quantityChange}` : `${r.quantityChange}`),
      escapeCsv(r.previousStock),
      escapeCsv(r.newStock),
      escapeCsv(r.location),
      escapeCsv(r.updatedBy),
      escapeCsv(r.remarks)
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(row => row.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const now = new Date();
    const dateStr = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;
    link.setAttribute('download', `lcc_inventory_report_${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /**
   * Export all records as formatted JSON file
   */
  exportToJson(customRecords?: ReportRecord[]): void {
    const records = customRecords || this.recordsSubject.value;
    if (records.length === 0) {
      return;
    }
    const jsonStr = JSON.stringify(records, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const now = new Date();
    const dateStr = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
    link.setAttribute('download', `lcc_reports_records_${dateStr}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
