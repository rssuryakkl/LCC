import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-QKVBSWNP.js";

// src/app/services/reports.service.ts
var STORAGE_KEY = "lcc_reports_records";
var CLEANUP_KEY = "lcc_reports_history_reset_v1";
var ReportsService = class _ReportsService {
  recordsSubject = new BehaviorSubject(this.loadInitialRecords());
  records$ = this.recordsSubject.asObservable();
  constructor() {
  }
  loadInitialRecords() {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        if (!localStorage.getItem(CLEANUP_KEY)) {
          localStorage.removeItem(STORAGE_KEY);
          localStorage.setItem(CLEANUP_KEY, "true");
          return [];
        }
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            return parsed.filter((r) => !r.id?.startsWith("RPT-INIT-"));
          }
        }
      }
    } catch (e) {
      console.error("Failed to load reports records from localStorage", e);
    }
    return [];
  }
  getRecords() {
    return this.recordsSubject.value;
  }
  saveRecords(records) {
    this.recordsSubject.next(records);
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
      }
    } catch (e) {
      console.error("Failed to save reports records to localStorage", e);
    }
  }
  getFormattedDate() {
    const d = /* @__PURE__ */ new Date();
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${year}-${month}-${day}`;
  }
  getFormattedTime() {
    const d = /* @__PURE__ */ new Date();
    return d.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    });
  }
  generateRecordId() {
    const count = this.recordsSubject.value.length + 1;
    const random = Math.floor(Math.random() * 900 + 100);
    return `RPT-${count.toString().padStart(4, "0")}-${random}`;
  }
  /**
   * Record every single data entry row-by-row
   */
  recordEntry(entry) {
    const prev = entry.previousStock ?? 0;
    const newStk = entry.newStock ?? Math.max(0, prev + entry.quantityChange);
    const titleMap = {
      STOCK_RECEIVED: "Stock Received",
      PRODUCT_ADDED: "Product Added",
      STOCK_TRANSFERRED: "Stock Transferred to LCC",
      PRODUCT_UPDATED: "Product Updated",
      PRODUCT_DELETED: "Product Deleted",
      LCC_TRANSFER_DELETED: "LCC Transfer Removed"
    };
    const newRecord = {
      id: this.generateRecordId(),
      date: entry.date || this.getFormattedDate(),
      time: entry.time || this.getFormattedTime(),
      productId: entry.productId || "N/A",
      productName: entry.productName || "Unknown Product",
      eventType: entry.eventType,
      eventTitle: entry.eventTitle || titleMap[entry.eventType] || "Inventory Action",
      quantityChange: entry.quantityChange,
      previousStock: prev,
      newStock: newStk,
      location: entry.location || "Vadalur",
      updatedBy: entry.updatedBy?.trim() || "System",
      remarks: entry.remarks || "",
      timestamp: Date.now()
    };
    const updated = [newRecord, ...this.recordsSubject.value];
    this.saveRecords(updated);
    return newRecord;
  }
  /**
   * Delete a single record from reports
   */
  deleteRecord(id) {
    const updated = this.recordsSubject.value.filter((r) => r.id !== id);
    this.saveRecords(updated);
  }
  /**
   * Clear all records
   */
  clearAllRecords() {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {
      console.error("Failed to clear reports from localStorage", e);
    }
    this.recordsSubject.next([]);
  }
  /**
   * Export all records as CSV file
   */
  exportToCsv(customRecords) {
    const records = customRecords || this.recordsSubject.value;
    if (records.length === 0) {
      return;
    }
    const headers = [
      "Record ID",
      "Date",
      "Time",
      "Product ID",
      "Product Name",
      "Event / Action",
      "Quantity Change",
      "Previous Stock",
      "New Stock",
      "Location",
      "Updated By",
      "Remarks"
    ];
    const escapeCsv = (val) => {
      const str = String(val ?? "");
      if (str.includes(",") || str.includes('"') || str.includes("\n")) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    };
    const rows = records.map((r) => [
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
    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map((row) => row.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const now = /* @__PURE__ */ new Date();
    const dateStr = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}_${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}`;
    link.setAttribute("download", `lcc_inventory_report_${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
  /**
   * Export all records as formatted JSON file
   */
  exportToJson(customRecords) {
    const records = customRecords || this.recordsSubject.value;
    if (records.length === 0) {
      return;
    }
    const jsonStr = JSON.stringify(records, null, 2);
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const now = /* @__PURE__ */ new Date();
    const dateStr = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
    link.setAttribute("download", `lcc_reports_records_${dateStr}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function ReportsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportsService, factory: _ReportsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  ReportsService
};
//# debugId=567503d1-d19c-5274-b670-f1572cfd5f63
//# sourceMappingURL=chunk-OLCIBYMR.js.map
