import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface LccTransferItem {
  id: number | string;
  productId: string;
  name: string;
  quantity: number;
  date: string;
  switchedBy: string;
  location: string;
  createdAt: string;
}

const STORAGE_KEY = 'lcc_transferred_items';

@Injectable({
  providedIn: 'root'
})
export class LccService {
  private itemsSubject = new BehaviorSubject<LccTransferItem[]>(this.loadInitialItems());
  items$: Observable<LccTransferItem[]> = this.itemsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchTransfers();
  }

  fetchTransfers(): void {
    const host = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : 'localhost';
    this.http.get<{ success: boolean; transfers: any[] }>(`http://${host}:5000/api/products/transfers`).subscribe({
      next: (res) => {
        if (res && res.success && Array.isArray(res.transfers)) {
          const loaded: LccTransferItem[] = res.transfers.map((t: any, idx: number) => ({
            id: t._id || idx + 1,
            productId: t.productId,
            name: t.name,
            quantity: Number(t.quantity) || 0,
            date: t.date || new Date().toISOString().split('T')[0],
            switchedBy: t.switchedBy || 'Admin',
            location: t.location || 'LCC',
            createdAt: t.createdAt || new Date().toISOString()
          }));
          const merged = this.deduplicateItems([...loaded, ...this.itemsSubject.value]);
          this.itemsSubject.next(merged);
        }
      },
      error: (err) => {
        console.error('Failed to load transfers from backend:', err);
      }
    });
  }

  private deduplicateItems(items: LccTransferItem[]): LccTransferItem[] {
    const active = items.filter(it => (Number(it.quantity) || 0) > 0);
    const grouped = new Map<string, LccTransferItem[]>();

    for (const item of active) {
      const key = (item.name || item.productId || '').trim().toLowerCase();
      if (!key) continue;

      if (!grouped.has(key)) {
        grouped.set(key, []);
      }
      grouped.get(key)!.push(item);
    }

    const result: LccTransferItem[] = [];

    for (const [key, list] of grouped.entries()) {
      if (list.length === 1) {
        const single = list[0];
        result.push(single);
      } else {
        // Multiple entries for the same product exist:
        // Sort newest first to get the latest transfer date and switchedBy
        list.sort((a, b) => {
          const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return timeB - timeA;
        });

        const latest = list[0];
        const earliest = list[list.length - 1];
        const totalQty = list.reduce((sum, it) => sum + (Number(it.quantity) || 0), 0);

        result.push({
          ...latest,
          productId: earliest.productId || latest.productId,
          name: earliest.name || latest.name,
          quantity: totalQty
        });
      }
    }

    // Sort by latest createdAt/id
    return result.sort((a, b) => {
      const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return timeB - timeA;
    });
  }

  private loadInitialItems(): LccTransferItem[] {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem('warehouse_products');
      }
    } catch (e) {
      console.error('Failed to clear temporary LCC items from localStorage', e);
    }
    return [];
  }

  getItems(): LccTransferItem[] {
    return this.itemsSubject.value;
  }

  getWarehouseProducts(): any[] {
    return [];
  }

  addTransfer(item: Omit<LccTransferItem, 'id' | 'createdAt'>): LccTransferItem {
    const current = this.deduplicateItems(this.itemsSubject.value);
    const itemKey = (item.name || item.productId || '').trim().toLowerCase();

    const existingIndex = current.findIndex(existing => {
      const existingKey = (existing.name || existing.productId || '').trim().toLowerCase();
      return existingKey === itemKey;
    });

    const now = new Date().toISOString();
    let resultItem: LccTransferItem;
    let updatedList: LccTransferItem[];

    if (existingIndex !== -1) {
      // Product already exists in LCC -> Add the transferred quantity to existing LCC stock
      const existing = current[existingIndex];
      const accumulatedQuantity = (Number(existing.quantity) || 0) + (Number(item.quantity) || 0);

      resultItem = {
        ...existing,
        ...item,
        productId: existing.productId || item.productId,
        name: existing.name || item.name,
        quantity: accumulatedQuantity,
        id: existing.id,
        createdAt: now
      };
      updatedList = current.map((it, idx) => (idx === existingIndex ? resultItem : it));
    } else {
      // New product in LCC
      resultItem = {
        ...item,
        id: Date.now(),
        createdAt: now
      };
      updatedList = [resultItem, ...current];
    }

    this.saveItems(updatedList);
    return resultItem;
  }

  updateItem(updatedItem: LccTransferItem): void {
    const current = this.itemsSubject.value;
    const updated = current.map(item => (String(item.id) === String(updatedItem.id) ? updatedItem : item));
    this.saveItems(updated);
  }

  deleteTransfer(id: number | string): void {
    const updated = this.itemsSubject.value.filter(item => String(item.id) !== String(id));
    this.saveItems(updated);
  }

  clearAll(): void {
    this.saveItems([]);
  }

  private saveItems(items: LccTransferItem[]): void {
    const deduplicated = this.deduplicateItems(items);
    this.itemsSubject.next(deduplicated);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(deduplicated));
      }
    } catch (e) {
      console.error('Failed to save LCC items to localStorage', e);
    }
  }
}
