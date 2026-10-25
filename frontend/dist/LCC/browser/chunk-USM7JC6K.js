import {
  BehaviorSubject,
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QKVBSWNP.js";

// src/app/services/distribution.service.ts
var STORAGE_KEY = "lcc_distribution_records";
var DistributionService = class _DistributionService {
  recordsSubject = new BehaviorSubject(this.loadInitialRecords());
  records$ = this.recordsSubject.asObservable();
  loadInitialRecords() {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
          const parsed = JSON.parse(data);
          if (Array.isArray(parsed)) {
            return parsed;
          }
        }
      }
    } catch (e) {
      console.error("Failed to load distribution records from localStorage", e);
    }
    return [];
  }
  getRecords() {
    return this.recordsSubject.value;
  }
  addDistribution(record) {
    const current = this.recordsSubject.value;
    const newId = record.id || `DIST-${String(current.length + 1).padStart(4, "0")}`;
    const newRecord = __spreadProps(__spreadValues({}, record), {
      id: newId,
      status: record.status || "Assigned",
      createdAt: record.createdAt || (/* @__PURE__ */ new Date()).toISOString()
    });
    const updated = [newRecord, ...current];
    this.saveRecords(updated);
    return newRecord;
  }
  clearAll() {
    this.saveRecords([]);
  }
  saveRecords(records) {
    this.recordsSubject.next(records);
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
      }
    } catch (e) {
      console.error("Failed to save distribution records to localStorage", e);
    }
  }
  static \u0275fac = function DistributionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DistributionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DistributionService, factory: _DistributionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DistributionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  DistributionService
};
//# debugId=1ac813c8-5d07-5715-8848-6fdaadb531cd
//# sourceMappingURL=chunk-USM7JC6K.js.map
