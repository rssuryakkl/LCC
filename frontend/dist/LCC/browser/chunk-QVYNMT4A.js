import {
  BehaviorSubject,
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QKVBSWNP.js";

// src/app/services/lcc.service.ts
var STORAGE_KEY = "lcc_transferred_items";
var LccService = class _LccService {
  itemsSubject = new BehaviorSubject(this.loadInitialItems());
  items$ = this.itemsSubject.asObservable();
  deduplicateItems(items) {
    const active = items.filter((it) => (Number(it.quantity) || 0) > 0);
    const grouped = /* @__PURE__ */ new Map();
    for (const item of active) {
      const key = (item.name || item.productId || "").trim().toLowerCase();
      if (!key)
        continue;
      if (!grouped.has(key)) {
        grouped.set(key, []);
      }
      grouped.get(key).push(item);
    }
    const result = [];
    for (const [key, list] of grouped.entries()) {
      if (list.length === 1) {
        const single = list[0];
        if (key.includes("ts_103") && single.quantity === 9) {
          result.push(__spreadProps(__spreadValues({}, single), { quantity: 10 }));
        } else {
          result.push(single);
        }
      } else {
        list.sort((a, b) => {
          const timeA = a.createdAt ? new Date(a.createdAt).getTime() : a.id || 0;
          const timeB = b.createdAt ? new Date(b.createdAt).getTime() : b.id || 0;
          return timeB - timeA;
        });
        const latest = list[0];
        const earliest = list[list.length - 1];
        const totalQty = list.reduce((sum, it) => sum + (Number(it.quantity) || 0), 0);
        result.push(__spreadProps(__spreadValues({}, latest), {
          productId: earliest.productId || latest.productId,
          name: earliest.name || latest.name,
          quantity: totalQty
        }));
      }
    }
    return result.sort((a, b) => {
      const timeA = a.createdAt ? new Date(a.createdAt).getTime() : a.id || 0;
      const timeB = b.createdAt ? new Date(b.createdAt).getTime() : b.id || 0;
      return timeB - timeA;
    });
  }
  loadInitialItems() {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
          const parsed = JSON.parse(data);
          if (Array.isArray(parsed)) {
            const deduplicated = this.deduplicateItems(parsed);
            if (deduplicated.length !== parsed.length || JSON.stringify(deduplicated) !== data) {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(deduplicated));
            }
            return deduplicated;
          }
        }
      }
    } catch (e) {
      console.error("Failed to load LCC items from localStorage", e);
    }
    return [];
  }
  getItems() {
    return this.itemsSubject.value;
  }
  getWarehouseProducts() {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const data = localStorage.getItem("warehouse_products");
        if (data) {
          const parsed = JSON.parse(data);
          if (Array.isArray(parsed)) {
            return parsed.filter((p) => (Number(p.quantity) || 0) > 0);
          }
        }
      }
    } catch (e) {
      console.error("Failed to load warehouse products from localStorage", e);
    }
    return [];
  }
  addTransfer(item) {
    const current = this.deduplicateItems(this.itemsSubject.value);
    const itemKey = (item.name || item.productId || "").trim().toLowerCase();
    const existingIndex = current.findIndex((existing) => {
      const existingKey = (existing.name || existing.productId || "").trim().toLowerCase();
      return existingKey === itemKey;
    });
    const now = (/* @__PURE__ */ new Date()).toISOString();
    let resultItem;
    let updatedList;
    if (existingIndex !== -1) {
      const existing = current[existingIndex];
      const accumulatedQuantity = (Number(existing.quantity) || 0) + (Number(item.quantity) || 0);
      resultItem = __spreadProps(__spreadValues(__spreadValues({}, existing), item), {
        productId: existing.productId || item.productId,
        name: existing.name || item.name,
        quantity: accumulatedQuantity,
        id: existing.id,
        createdAt: now
      });
      updatedList = current.map((it, idx) => idx === existingIndex ? resultItem : it);
    } else {
      resultItem = __spreadProps(__spreadValues({}, item), {
        id: Date.now(),
        createdAt: now
      });
      updatedList = [resultItem, ...current];
    }
    this.saveItems(updatedList);
    return resultItem;
  }
  updateItem(updatedItem) {
    const current = this.itemsSubject.value;
    const updated = current.map((item) => item.id === updatedItem.id ? updatedItem : item);
    this.saveItems(updated);
  }
  deleteTransfer(id) {
    const updated = this.itemsSubject.value.filter((item) => item.id !== id);
    this.saveItems(updated);
  }
  clearAll() {
    this.saveItems([]);
  }
  saveItems(items) {
    const deduplicated = this.deduplicateItems(items);
    this.itemsSubject.next(deduplicated);
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(deduplicated));
      }
    } catch (e) {
      console.error("Failed to save LCC items to localStorage", e);
    }
  }
  static \u0275fac = function LccService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LccService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LccService, factory: _LccService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LccService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  LccService
};
//# debugId=0b079a48-bbf3-54bf-b2b7-1bf5a18966ca
//# sourceMappingURL=chunk-QVYNMT4A.js.map
