import {
  ReportsService
} from "./chunk-OLCIBYMR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-STUIIXEF.js";
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
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QKVBSWNP.js";

// src/app/pages/reports/reports.ts
function ReportsComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 75);
    \u0275\u0275listener("click", function ReportsComponent_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearAllRecords());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 76);
    \u0275\u0275element(2, "polyline", 77)(3, "path", 78)(4, "line", 79)(5, "line", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Clear Logs ");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_button_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function ReportsComponent_button_104_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(1, " \u2715 Reset Filters ");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_option_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r4 = ctx.$implicit;
    \u0275\u0275property("value", size_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", size_r4, " rows");
  }
}
function ReportsComponent_tr_150_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 83)(1, "td", 59)(2, "span", 84);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 60)(5, "div", 85)(6, "span", 86);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 87);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td", 61)(11, "span", 88);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 62)(14, "strong", 89);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 63)(17, "span", 90);
    \u0275\u0275element(18, "span", 91);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 64)(21, "span", 92);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 65)(24, "div", 93)(25, "span", 94);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 95);
    \u0275\u0275text(28, "\u2794");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 96)(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "td", 66)(33, "span", 97);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "td", 67)(36, "span", 98)(37, "span", 99);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 100);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "td", 68)(42, "span", 101);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "td", 69)(45, "button", 102);
    \u0275\u0275listener("click", function ReportsComponent_tr_150_Template_button_click_45_listener() {
      const r_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteSingleRecord(r_r6));
    });
    \u0275\u0275text(46, " \u{1F5D1} ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r6.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r6.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.time);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r6.productId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r6.productName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getBadgeClass(r_r6.eventType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", r_r6.eventTitle, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("qty-positive", r_r6.quantityChange > 0)("qty-negative", r_r6.quantityChange < 0)("qty-neutral", r_r6.quantityChange === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r6.quantityChange > 0 ? "+" + r_r6.quantityChange : r_r6.quantityChange, " PCS ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Prev: ", r_r6.previousStock);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", r_r6.newStock, " PCS");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", r_r6.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r6.updatedBy ? r_r6.updatedBy.charAt(0).toUpperCase() : "U");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", r_r6.remarks);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r6.remarks || "\u2014");
  }
}
function ReportsComponent_tr_151_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Report history is clean. Transaction records will be logged automatically as warehouse and LCC operations occur.");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_tr_151_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No transaction records match your search or filter criteria.");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_tr_151_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 107);
    \u0275\u0275listener("click", function ReportsComponent_tr_151_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(1, " Clear Filters ");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_tr_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 103)(2, "div", 104)(3, "div", 105);
    \u0275\u0275text(4, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ReportsComponent_tr_151_p_7_Template, 2, 0, "p", 71)(8, ReportsComponent_tr_151_p_8_Template, 2, 0, "p", 71)(9, ReportsComponent_tr_151_button_9_Template, 2, 0, "button", 106);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.totalRecords === 0 ? "No Report History" : "No Report Records Found");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalRecords === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.totalRecords > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchText || ctx_r1.selectedEventType !== "ALL" || ctx_r1.selectedDate);
  }
}
function ReportsComponent_div_152_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "button", 109);
    \u0275\u0275listener("click", function ReportsComponent_div_152_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPage(ctx_r1.currentPage - 1));
    });
    \u0275\u0275text(2, " \u2190 Previous ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 110)(4, "span", 111);
    \u0275\u0275text(5, " Page ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " of ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 109);
    \u0275\u0275listener("click", function ReportsComponent_div_152_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPage(ctx_r1.currentPage + 1));
    });
    \u0275\u0275text(12, " Next \u2192 ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.currentPage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function ReportsComponent_div_153_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r1.manualFormError);
  }
}
function ReportsComponent_div_153_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275listener("click", function ReportsComponent_div_153_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeManualEntryModal());
    });
    \u0275\u0275elementStart(1, "div", 113);
    \u0275\u0275listener("click", function ReportsComponent_div_153_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 114)(3, "div", 115);
    \u0275\u0275text(4, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h2");
    \u0275\u0275text(7, "Record Report Entry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Add a line-by-line audit record directly into the reports file");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 116);
    \u0275\u0275listener("click", function ReportsComponent_div_153_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeManualEntryModal());
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 117);
    \u0275\u0275template(13, ReportsComponent_div_153_div_13_Template, 3, 1, "div", 118);
    \u0275\u0275elementStart(14, "div", 119)(15, "div", 120)(16, "label", 121);
    \u0275\u0275text(17, "Product ID *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 122);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_153_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.manualForm.productId, $event) || (ctx_r1.manualForm.productId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 120)(20, "label", 123);
    \u0275\u0275text(21, "Product Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 124);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_153_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.manualForm.productName, $event) || (ctx_r1.manualForm.productName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 120)(24, "label", 125);
    \u0275\u0275text(25, "Action Type *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 126);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_153_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.manualForm.eventType, $event) || (ctx_r1.manualForm.eventType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 36);
    \u0275\u0275text(28, "Stock Received");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 37);
    \u0275\u0275text(30, "Product Added");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 38);
    \u0275\u0275text(32, "Stock Transferred to LCC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 39);
    \u0275\u0275text(34, "Product Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 40);
    \u0275\u0275text(36, "Product Deleted");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 120)(38, "label", 127);
    \u0275\u0275text(39, "Quantity (PCS) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 128);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_153_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.manualForm.quantity, $event) || (ctx_r1.manualForm.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 120)(42, "label", 129);
    \u0275\u0275text(43, "Updated By (Whom) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 130);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_153_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.manualForm.updatedBy, $event) || (ctx_r1.manualForm.updatedBy = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 120)(46, "label", 131);
    \u0275\u0275text(47, "Date *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 132);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_153_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.manualForm.date, $event) || (ctx_r1.manualForm.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 120)(50, "label", 133);
    \u0275\u0275text(51, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 134);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_153_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.manualForm.location, $event) || (ctx_r1.manualForm.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 135)(54, "label", 136);
    \u0275\u0275text(55, "Remarks / Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "input", 137);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_153_Template_input_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.manualForm.remarks, $event) || (ctx_r1.manualForm.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "div", 138)(58, "button", 139);
    \u0275\u0275listener("click", function ReportsComponent_div_153_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeManualEntryModal());
    });
    \u0275\u0275text(59, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 140);
    \u0275\u0275listener("click", function ReportsComponent_div_153_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveManualEntry());
    });
    \u0275\u0275text(61, "Save Record");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r1.manualFormError);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.manualForm.productId);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.manualForm.productName);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.manualForm.eventType);
    \u0275\u0275control();
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.manualForm.quantity);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.manualForm.updatedBy);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.manualForm.date);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.manualForm.location);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.manualForm.remarks);
    \u0275\u0275control();
  }
}
function ReportsComponent_div_154_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 152);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_div_154_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 152);
    \u0275\u0275text(1, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_div_154_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 152);
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_div_154_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 152);
    \u0275\u0275text(1, "\u2753");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_div_154_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155)(1, "span", 156);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 157);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r11.label, ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.value);
  }
}
function ReportsComponent_div_154_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153);
    \u0275\u0275template(1, ReportsComponent_div_154_div_11_div_1_Template, 5, 2, "div", 154);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.modalDialog.details);
  }
}
function ReportsComponent_div_154_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 158);
    \u0275\u0275listener("click", function ReportsComponent_div_154_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.modalDialog.onCancel ? ctx_r1.modalDialog.onCancel() : ctx_r1.modalDialog.show = false);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.modalDialog.cancelText, " ");
  }
}
function ReportsComponent_div_154_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 142)(1, "div", 143)(2, "div", 144);
    \u0275\u0275template(3, ReportsComponent_div_154_span_3_Template, 2, 0, "span", 145)(4, ReportsComponent_div_154_span_4_Template, 2, 0, "span", 145)(5, ReportsComponent_div_154_span_5_Template, 2, 0, "span", 145)(6, ReportsComponent_div_154_span_6_Template, 2, 0, "span", 145);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 146);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 147);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ReportsComponent_div_154_div_11_Template, 2, 1, "div", 148);
    \u0275\u0275elementStart(12, "div", 149);
    \u0275\u0275template(13, ReportsComponent_div_154_button_13_Template, 2, 1, "button", 150);
    \u0275\u0275elementStart(14, "button", 151);
    \u0275\u0275listener("click", function ReportsComponent_div_154_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.modalDialog.onConfirm ? ctx_r1.modalDialog.onConfirm() : ctx_r1.modalDialog.show = false);
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "dialog-" + ctx_r1.modalDialog.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.modalDialog.type === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.modalDialog.type === "warning");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.modalDialog.type === "error");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.modalDialog.type === "confirm");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.modalDialog.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.modalDialog.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.modalDialog.details && ctx_r1.modalDialog.details.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.modalDialog.cancelText);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "btn-" + ctx_r1.modalDialog.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.modalDialog.confirmText || "OK", " ");
  }
}
var ReportsComponent = class _ReportsComponent {
  constructor(reportsService) {
    this.reportsService = reportsService;
  }
  reportsService;
  records = [];
  subscription;
  // Filter controls
  searchText = "";
  selectedEventType = "ALL";
  selectedDate = "";
  sortOrder = "newest";
  // Pagination
  currentPage = 1;
  pageSize = 15;
  pageSizes = [10, 15, 25, 50, 100];
  // In-app modal dialog
  modalDialog = {
    show: false,
    type: "success",
    title: "",
    message: ""
  };
  // Manual Entry Modal
  showManualEntryModal = false;
  manualForm = {
    productId: "",
    productName: "",
    eventType: "STOCK_RECEIVED",
    quantity: 1,
    location: "Vadalur",
    updatedBy: "",
    date: this.getTodayDate(),
    remarks: ""
  };
  manualFormError = "";
  ngOnInit() {
    this.subscription = this.reportsService.records$.subscribe((records) => {
      this.records = records;
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  // ==================== METRICS ====================
  get totalRecords() {
    return this.records.length;
  }
  get totalReceivedQty() {
    return this.records.filter((r) => r.eventType === "STOCK_RECEIVED").reduce((sum, r) => sum + Math.abs(r.quantityChange), 0);
  }
  get totalTransferredQty() {
    return this.records.filter((r) => r.eventType === "STOCK_TRANSFERRED").reduce((sum, r) => sum + Math.abs(r.quantityChange), 0);
  }
  get uniqueProductsCount() {
    const ids = new Set(this.records.map((r) => r.productId).filter(Boolean));
    return ids.size;
  }
  // ==================== FILTERING & SEARCH ====================
  get filteredRecords() {
    const search = this.searchText.trim().toLowerCase();
    let list = this.records.filter((r) => {
      if (this.selectedEventType !== "ALL" && r.eventType !== this.selectedEventType) {
        return false;
      }
      if (this.selectedDate && r.date !== this.selectedDate) {
        return false;
      }
      if (search) {
        const matchId = (r.productId || "").toLowerCase().includes(search);
        const matchName = (r.productName || "").toLowerCase().includes(search);
        const matchUser = (r.updatedBy || "").toLowerCase().includes(search);
        const matchLoc = (r.location || "").toLowerCase().includes(search);
        const matchTitle = (r.eventTitle || "").toLowerCase().includes(search);
        const matchRptId = (r.id || "").toLowerCase().includes(search);
        const matchRemarks = (r.remarks || "").toLowerCase().includes(search);
        if (!matchId && !matchName && !matchUser && !matchLoc && !matchTitle && !matchRptId && !matchRemarks) {
          return false;
        }
      }
      return true;
    });
    list = [...list].sort((a, b) => {
      if (this.sortOrder === "newest") {
        return b.timestamp - a.timestamp;
      } else {
        return a.timestamp - b.timestamp;
      }
    });
    return list;
  }
  get paginatedRecords() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredRecords.slice(start, start + this.pageSize);
  }
  get totalPages() {
    return Math.max(1, Math.ceil(this.filteredRecords.length / this.pageSize));
  }
  setPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  onFilterChange() {
    this.currentPage = 1;
  }
  clearFilters() {
    this.searchText = "";
    this.selectedEventType = "ALL";
    this.selectedDate = "";
    this.sortOrder = "newest";
    this.currentPage = 1;
  }
  // ==================== EXPORT ACTIONS ====================
  exportCsv() {
    const recordsToExport = this.filteredRecords;
    if (recordsToExport.length === 0) {
      this.showWarning("No Records", "There are no records to export matching your filter criteria.");
      return;
    }
    this.reportsService.exportToCsv(recordsToExport);
    this.showSuccess("Report Downloaded", `Successfully exported ${recordsToExport.length} line-by-line records as CSV file.`);
  }
  exportJson() {
    const recordsToExport = this.filteredRecords;
    if (recordsToExport.length === 0) {
      this.showWarning("No Records", "There are no records to export.");
      return;
    }
    this.reportsService.exportToJson(recordsToExport);
    this.showSuccess("JSON Exported", `Successfully exported ${recordsToExport.length} records as JSON file.`);
  }
  printReport() {
    window.print();
  }
  // ==================== MANUAL REPORT ENTRY MODAL ====================
  openManualEntryModal() {
    this.manualForm = {
      productId: "",
      productName: "",
      eventType: "STOCK_RECEIVED",
      quantity: 1,
      location: "Vadalur",
      updatedBy: "",
      date: this.getTodayDate(),
      remarks: ""
    };
    this.manualFormError = "";
    this.showManualEntryModal = true;
  }
  closeManualEntryModal() {
    this.showManualEntryModal = false;
    this.manualFormError = "";
  }
  saveManualEntry() {
    const pId = this.manualForm.productId.trim();
    const pName = this.manualForm.productName.trim();
    const user = this.manualForm.updatedBy.trim();
    const qty = Number(this.manualForm.quantity);
    if (!pId || !pName || !user) {
      this.manualFormError = "Please fill in Product ID, Product Name, and Updated By.";
      return;
    }
    if (!Number.isSafeInteger(qty) || qty < 1) {
      this.manualFormError = "Please enter a valid positive quantity.";
      return;
    }
    this.reportsService.recordEntry({
      productId: pId,
      productName: pName,
      eventType: this.manualForm.eventType,
      quantityChange: this.manualForm.eventType === "STOCK_TRANSFERRED" ? -qty : qty,
      previousStock: 0,
      newStock: qty,
      location: this.manualForm.location,
      updatedBy: user,
      remarks: this.manualForm.remarks || "Manual report log entry",
      date: this.manualForm.date
    });
    this.closeManualEntryModal();
    this.showSuccess("Record Added", `Report entry for ${pId} (${pName}) was successfully saved.`);
  }
  // ==================== CLEAR RECORDS ====================
  clearAllRecords() {
    this.showConfirm("Clear All Report Logs?", "Are you sure you want to delete all line-by-line recorded history from reports? This action cannot be undone.", () => {
      this.reportsService.clearAllRecords();
      this.showSuccess("Reports Cleared", "All report records have been cleared successfully.");
    }, "Yes, Clear All", "error");
  }
  deleteSingleRecord(record) {
    this.showConfirm("Delete Record?", `Are you sure you want to delete report record #${record.id}?`, () => {
      this.reportsService.deleteRecord(record.id);
      this.showSuccess("Record Removed", `Report record #${record.id} was deleted.`);
    }, "Delete Record", "error");
  }
  // ==================== HELPERS ====================
  getBadgeClass(type) {
    switch (type) {
      case "STOCK_RECEIVED":
        return "badge-received";
      case "PRODUCT_ADDED":
        return "badge-added";
      case "STOCK_TRANSFERRED":
        return "badge-transferred";
      case "PRODUCT_UPDATED":
        return "badge-updated";
      case "PRODUCT_DELETED":
      case "LCC_TRANSFER_DELETED":
        return "badge-deleted";
      default:
        return "badge-default";
    }
  }
  getTodayDate() {
    const today = /* @__PURE__ */ new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  showSuccess(title, message, details) {
    this.modalDialog = {
      show: true,
      type: "success",
      title,
      message,
      details,
      confirmText: "OK",
      onConfirm: () => {
        this.modalDialog.show = false;
      }
    };
  }
  showWarning(title, message) {
    this.modalDialog = {
      show: true,
      type: "warning",
      title,
      message,
      confirmText: "OK",
      onConfirm: () => {
        this.modalDialog.show = false;
      }
    };
  }
  showConfirm(title, message, onConfirm, confirmText = "Confirm", type = "warning") {
    this.modalDialog = {
      show: true,
      type,
      title,
      message,
      confirmText,
      cancelText: "Cancel",
      onConfirm: () => {
        this.modalDialog.show = false;
        onConfirm();
      },
      onCancel: () => {
        this.modalDialog.show = false;
      }
    };
  }
  static \u0275fac = function ReportsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsComponent)(\u0275\u0275directiveInject(ReportsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], decls: 155, vars: 19, consts: [[1, "reports-page"], [1, "reports-header"], [1, "header-text"], [1, "header-actions"], ["type", "button", "title", "Download CSV report file", 1, "action-btn", "btn-export-csv", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], ["type", "button", "title", "Print or save as PDF", 1, "action-btn", "btn-print", 3, "click"], ["points", "6 9 6 2 18 2 18 9"], ["d", "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"], ["x", "6", "y", "14", "width", "12", "height", "8"], ["type", "button", "class", "action-btn btn-clear-logs", "title", "Clear all recorded report logs", 3, "click", 4, "ngIf"], [1, "summary-section"], [1, "summary-grid"], [1, "summary-card"], [1, "summary-icon", "icon-records"], [1, "summary-info"], [1, "summary-label"], [1, "summary-sub"], [1, "summary-icon", "icon-received"], [1, "unit"], [1, "summary-icon", "icon-transferred"], [1, "summary-icon", "icon-products"], [1, "reports-toolbar-card"], [1, "toolbar-row"], [1, "search-box"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["type", "search", "placeholder", "Search by Product ID, Name, Updated By, Location, Record ID...", "aria-label", "Search report records", 3, "ngModelChange", "ngModel"], [1, "filter-group"], ["for", "eventFilter"], ["id", "eventFilter", 3, "ngModelChange", "ngModel"], ["value", "ALL"], ["value", "STOCK_RECEIVED"], ["value", "PRODUCT_ADDED"], ["value", "STOCK_TRANSFERRED"], ["value", "PRODUCT_UPDATED"], ["value", "PRODUCT_DELETED"], ["value", "LCC_TRANSFER_DELETED"], ["for", "dateFilter"], ["id", "dateFilter", "type", "date", 3, "ngModelChange", "ngModel"], ["for", "sortOrder"], ["id", "sortOrder", 3, "ngModelChange", "ngModel"], ["value", "newest"], ["value", "oldest"], ["type", "button", "class", "clear-filters-btn", "title", "Clear all active filters", 3, "click", 4, "ngIf"], [1, "table-container-card"], [1, "table-header-meta"], [1, "meta-left"], [1, "meta-count"], [1, "meta-right"], ["for", "pageSizeSelect"], ["id", "pageSizeSelect", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "table-responsive"], [1, "reports-table"], [1, "col-id"], [1, "col-datetime"], [1, "col-product-id"], [1, "col-product-name"], [1, "col-event"], [1, "col-qty"], [1, "col-balance"], [1, "col-location"], [1, "col-updated-by"], [1, "col-remarks"], [1, "col-action"], ["class", "report-row", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "table-pagination", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["class", "modal-overlay app-dialog-overlay", 4, "ngIf"], ["type", "button", "title", "Clear all recorded report logs", 1, "action-btn", "btn-clear-logs", 3, "click"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], ["x1", "10", "y1", "11", "x2", "10", "y2", "17"], ["x1", "14", "y1", "11", "x2", "14", "y2", "17"], ["type", "button", "title", "Clear all active filters", 1, "clear-filters-btn", 3, "click"], [3, "value"], [1, "report-row"], [1, "record-id-code"], [1, "date-time-cell"], [1, "cell-date"], [1, "cell-time"], [1, "product-id-tag"], [1, "product-name-text"], [1, "event-badge", 3, "ngClass"], [1, "badge-dot"], [1, "qty-tag"], [1, "balance-cell"], [1, "prev-stock"], [1, "arrow-sep"], [1, "new-stock"], [1, "location-badge"], [1, "updated-by-badge"], [1, "user-avatar-tiny"], [1, "user-name-text"], [1, "remarks-text", 3, "title"], ["type", "button", "title", "Delete this record", 1, "btn-delete-record", 3, "click"], ["colspan", "11", 1, "empty-table-cell"], [1, "empty-state-content"], [1, "empty-state-icon"], ["type", "button", "class", "btn-reset-empty", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-reset-empty", 3, "click"], [1, "table-pagination"], ["type", "button", 1, "page-btn", "nav-btn", 3, "click", "disabled"], [1, "page-numbers"], [1, "page-indicator"], [1, "modal-overlay", 3, "click"], [1, "modal-card", "manual-entry-modal", 3, "click"], [1, "modal-header"], [1, "modal-header-icon"], ["type", "button", 1, "modal-close-btn", 3, "click"], [1, "modal-body"], ["class", "form-error-banner", 4, "ngIf"], [1, "form-grid"], [1, "form-group"], ["for", "manualPId"], ["id", "manualPId", "type", "text", "placeholder", "e.g. SA_102, TS_103", "required", "", 3, "ngModelChange", "ngModel"], ["for", "manualPName"], ["id", "manualPName", "type", "text", "placeholder", "e.g. Saree, T-Shirt", "required", "", 3, "ngModelChange", "ngModel"], ["for", "manualEvent"], ["id", "manualEvent", 3, "ngModelChange", "ngModel"], ["for", "manualQty"], ["id", "manualQty", "type", "number", "min", "1", "required", "", 3, "ngModelChange", "ngModel"], ["for", "manualUser"], ["id", "manualUser", "type", "text", "placeholder", "Enter name (e.g. Abi)", "required", "", 3, "ngModelChange", "ngModel"], ["for", "manualDate"], ["id", "manualDate", "type", "date", "required", "", 3, "ngModelChange", "ngModel"], ["for", "manualLoc"], ["id", "manualLoc", "type", "text", "placeholder", "e.g. Vadalur", 3, "ngModelChange", "ngModel"], [1, "form-group", "full-span"], ["for", "manualRemarks"], ["id", "manualRemarks", "type", "text", "placeholder", "e.g. Verified by team lead, special replenishment", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], ["type", "button", 1, "btn-cancel", 3, "click"], ["type", "button", 1, "btn-submit", 3, "click"], [1, "form-error-banner"], [1, "modal-overlay", "app-dialog-overlay"], [1, "modal-card", "app-dialog-modal", 3, "ngClass"], [1, "dialog-icon-wrapper"], ["class", "dialog-icon", 4, "ngIf"], [1, "dialog-title"], [1, "dialog-message"], ["class", "dialog-details-card", 4, "ngIf"], [1, "dialog-actions"], ["type", "button", "class", "dialog-cancel-btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "dialog-confirm-btn", 3, "click", "ngClass"], [1, "dialog-icon"], [1, "dialog-details-card"], ["class", "dialog-detail-row", 4, "ngFor", "ngForOf"], [1, "dialog-detail-row"], [1, "detail-label"], [1, "detail-value"], ["type", "button", 1, "dialog-cancel-btn", 3, "click"]], template: function ReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Reports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Audit records of every single data entry, stock update, and transfer.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "button", 4);
      \u0275\u0275listener("click", function ReportsComponent_Template_button_click_8_listener() {
        return ctx.exportCsv();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 5);
      \u0275\u0275element(10, "path", 6)(11, "polyline", 7)(12, "line", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " Export CSV ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "button", 9);
      \u0275\u0275listener("click", function ReportsComponent_Template_button_click_14_listener() {
        return ctx.printReport();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 5);
      \u0275\u0275element(16, "polyline", 10)(17, "path", 11)(18, "rect", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " Print ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, ReportsComponent_button_20_Template, 7, 0, "button", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "section", 14)(22, "div", 15)(23, "div", 16)(24, "div", 17);
      \u0275\u0275text(25, "\u{1F4CB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 18)(27, "span", 19);
      \u0275\u0275text(28, "Total Data Entries");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "h2");
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 20);
      \u0275\u0275text(32, "All line-by-line entries");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 16)(34, "div", 21);
      \u0275\u0275text(35, "\u{1F4E5}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 18)(37, "span", 19);
      \u0275\u0275text(38, "Total Stock Received");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "h2");
      \u0275\u0275text(40);
      \u0275\u0275elementStart(41, "span", 22);
      \u0275\u0275text(42, "PCS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "span", 20);
      \u0275\u0275text(44, "Recorded replenishments");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 16)(46, "div", 23);
      \u0275\u0275text(47, "\u{1F504}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 18)(49, "span", 19);
      \u0275\u0275text(50, "Stock Transferred");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "h2");
      \u0275\u0275text(52);
      \u0275\u0275elementStart(53, "span", 22);
      \u0275\u0275text(54, "PCS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "span", 20);
      \u0275\u0275text(56, "Transferred to LCC");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "div", 16)(58, "div", 24);
      \u0275\u0275text(59, "\u{1F4E6}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 18)(61, "span", 19);
      \u0275\u0275text(62, "Products Logged");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "h2");
      \u0275\u0275text(64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "span", 20);
      \u0275\u0275text(66, "Distinct product IDs");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(67, "section", 25)(68, "div", 26)(69, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(70, "svg", 28);
      \u0275\u0275element(71, "circle", 29)(72, "line", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(73, "input", 31);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_Template_input_ngModelChange_73_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ReportsComponent_Template_input_ngModelChange_73_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 32)(75, "label", 33);
      \u0275\u0275text(76, "Action Type:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "select", 34);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_Template_select_ngModelChange_77_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedEventType, $event) || (ctx.selectedEventType = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ReportsComponent_Template_select_ngModelChange_77_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(78, "option", 35);
      \u0275\u0275text(79, "All Actions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "option", 36);
      \u0275\u0275text(81, "Stock Received");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "option", 37);
      \u0275\u0275text(83, "Product Added");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "option", 38);
      \u0275\u0275text(85, "Stock Transferred to LCC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "option", 39);
      \u0275\u0275text(87, "Product Updated");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "option", 40);
      \u0275\u0275text(89, "Product Deleted");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "option", 41);
      \u0275\u0275text(91, "LCC Transfer Removed");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "div", 32)(93, "label", 42);
      \u0275\u0275text(94, "Date:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "input", 43);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_Template_input_ngModelChange_95_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedDate, $event) || (ctx.selectedDate = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ReportsComponent_Template_input_ngModelChange_95_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "div", 32)(97, "label", 44);
      \u0275\u0275text(98, "Sort:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "select", 45);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_Template_select_ngModelChange_99_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.sortOrder, $event) || (ctx.sortOrder = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ReportsComponent_Template_select_ngModelChange_99_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(100, "option", 46);
      \u0275\u0275text(101, "Newest First");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "option", 47);
      \u0275\u0275text(103, "Oldest First");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(104, ReportsComponent_button_104_Template, 2, 0, "button", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "section", 49)(106, "div", 50)(107, "div", 51)(108, "h3");
      \u0275\u0275text(109, "Line-by-Line Transaction Log");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "span", 52);
      \u0275\u0275text(111, " Showing ");
      \u0275\u0275elementStart(112, "strong");
      \u0275\u0275text(113);
      \u0275\u0275elementEnd();
      \u0275\u0275text(114, " of ");
      \u0275\u0275elementStart(115, "strong");
      \u0275\u0275text(116);
      \u0275\u0275elementEnd();
      \u0275\u0275text(117, " records ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 53)(119, "label", 54);
      \u0275\u0275text(120, "Show rows:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "select", 55);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_Template_select_ngModelChange_121_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.pageSize, $event) || (ctx.pageSize = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ReportsComponent_Template_select_ngModelChange_121_listener() {
        return ctx.currentPage = 1;
      });
      \u0275\u0275template(122, ReportsComponent_option_122_Template, 2, 2, "option", 56);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "div", 57)(124, "table", 58)(125, "thead")(126, "tr")(127, "th", 59);
      \u0275\u0275text(128, "Record ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "th", 60);
      \u0275\u0275text(130, "Date & Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "th", 61);
      \u0275\u0275text(132, "Product ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "th", 62);
      \u0275\u0275text(134, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "th", 63);
      \u0275\u0275text(136, "Action / Event");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "th", 64);
      \u0275\u0275text(138, "Quantity Change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "th", 65);
      \u0275\u0275text(140, "Stock Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "th", 66);
      \u0275\u0275text(142, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "th", 67);
      \u0275\u0275text(144, "Updated By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "th", 68);
      \u0275\u0275text(146, "Remarks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "th", 69);
      \u0275\u0275text(148, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(149, "tbody");
      \u0275\u0275template(150, ReportsComponent_tr_150_Template, 47, 21, "tr", 70)(151, ReportsComponent_tr_151_Template, 10, 4, "tr", 71);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(152, ReportsComponent_div_152_Template, 13, 4, "div", 72);
      \u0275\u0275elementEnd();
      \u0275\u0275template(153, ReportsComponent_div_153_Template, 62, 9, "div", 73)(154, ReportsComponent_div_154_Template, 16, 11, "div", 74);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275property("ngIf", ctx.totalRecords > 0);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.totalRecords);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", ctx.totalReceivedQty, " ");
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1("", ctx.totalTransferredQty, " ");
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.uniqueProductsCount);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedEventType);
      \u0275\u0275control();
      \u0275\u0275advance(18);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedDate);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.sortOrder);
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.searchText || ctx.selectedEventType !== "ALL" || ctx.selectedDate);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.paginatedRecords.length);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.filteredRecords.length);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.pageSize);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.pageSizes);
      \u0275\u0275advance(28);
      \u0275\u0275property("ngForOf", ctx.paginatedRecords);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.paginatedRecords.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.totalPages > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showManualEntryModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.modalDialog.show);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, RequiredValidator, MinValidator, NgModel], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.reports-page[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  min-width: 0;\n  padding: 36px 36px 60px;\n  background: #ffffff;\n  color: #263238;\n  font-family: "Roboto", sans-serif;\n}\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  font: inherit;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.reports-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n}\n.header-text[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.reports-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #222d3d;\n  font-size: clamp(26px, 2.8vw, 36px);\n  font-weight: 750;\n  letter-spacing: -0.02em;\n}\n.reports-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 14.5px;\n  line-height: 1.5;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 16px;\n  border-radius: 9px;\n  font-size: 13.5px;\n  font-weight: 600;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  border: 1px solid transparent;\n}\n.btn-export-csv[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #ffffff;\n  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);\n}\n.btn-export-csv[_ngcontent-%COMP%]:hover {\n  background: #047857;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(5, 150, 105, 0.35);\n}\n.btn-export-json[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #ffffff;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);\n}\n.btn-export-json[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n}\n.btn-print[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #334155;\n  border: 1px solid #cbd5e1;\n}\n.btn-print[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #94a3b8;\n  color: #0f172a;\n}\n.btn-manual[_ngcontent-%COMP%] {\n  background: #ffd54f;\n  color: #5d4037;\n  border: 1px solid #ffca28;\n  font-weight: 700;\n  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.25);\n}\n.btn-manual[_ngcontent-%COMP%]:hover {\n  background: #ffca28;\n  transform: translateY(-1px);\n}\n.btn-clear-logs[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.btn-clear-logs[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  border-color: #f87171;\n}\n.summary-section[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));\n  gap: 16px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 20px 22px;\n  border-radius: 14px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.07);\n}\n.summary-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.icon-records[_ngcontent-%COMP%] {\n  background: #eff6ff;\n}\n.icon-received[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n}\n.icon-transferred[_ngcontent-%COMP%] {\n  background: #fffbeb;\n}\n.icon-products[_ngcontent-%COMP%] {\n  background: #fef3c7;\n}\n.summary-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.summary-label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 4px;\n}\n.summary-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 26px;\n  font-weight: 800;\n  color: #1e293b;\n  line-height: 1.1;\n}\n.summary-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: #94a3b8;\n  margin-left: 2px;\n}\n.summary-sub[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.reports-toolbar-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 16px 20px;\n  border-radius: 14px;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);\n  border: 1px solid #e2e8f0;\n  margin-bottom: 20px;\n}\n.toolbar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.search-box[_ngcontent-%COMP%] {\n  flex: 1 1 280px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 8px 14px;\n  transition: all 0.2s ease;\n}\n.search-box[_ngcontent-%COMP%]:focus-within {\n  border-color: #ffd54f;\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(255, 213, 79, 0.25);\n}\n.search-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: #94a3b8;\n  flex-shrink: 0;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  width: 100%;\n  font-size: 13.5px;\n  color: #1e293b;\n  outline: none;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.filter-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #64748b;\n  white-space: nowrap;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filter-group[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 9px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1e293b;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.filter-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.filter-group[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]:focus {\n  border-color: #ffd54f;\n  background: #ffffff;\n}\n.clear-filters-btn[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  padding: 7px 12px;\n  font-size: 12.5px;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n.clear-filters-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.table-container-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.table-header-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f1f5f9;\n  background: #fafbfe;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.meta-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 3px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.meta-count[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #64748b;\n}\n.meta-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12.5px;\n  color: #64748b;\n}\n.meta-right[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  border-radius: 7px;\n  padding: 5px 10px;\n  font-size: 12.5px;\n  color: #1e293b;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.reports-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  font-size: 13.5px;\n}\n.reports-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #475569;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 14px 16px;\n  border-bottom: 1.5px solid #e2e8f0;\n  white-space: nowrap;\n}\n.reports-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.report-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f5f9;\n  transition: background-color 0.15s ease;\n}\n.reports-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.report-row[_ngcontent-%COMP%]:hover {\n  background-color: #fffdf5;\n}\n.reports-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 16px;\n  vertical-align: middle;\n  color: #334155;\n}\n.record-id-code[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n  font-size: 11.5px;\n  background: #f1f5f9;\n  color: #475569;\n  padding: 3px 7px;\n  border-radius: 5px;\n  border: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.date-time-cell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  white-space: nowrap;\n}\n.cell-date[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1e293b;\n}\n.cell-time[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #94a3b8;\n}\n.product-id-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #fff3c4;\n  color: #92400e;\n  font-weight: 800;\n  font-size: 12px;\n  padding: 3px 9px;\n  border-radius: 6px;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n}\n.product-name-text[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 14px;\n  white-space: nowrap;\n}\n.event-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n  border: 1px solid transparent;\n}\n.badge-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.badge-received[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #047857;\n  border-color: #a7f3d0;\n}\n.badge-added[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #1d4ed8;\n  border-color: #bfdbfe;\n}\n.badge-transferred[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #b45309;\n  border-color: #fde68a;\n}\n.badge-updated[_ngcontent-%COMP%] {\n  background: #f5f3ff;\n  color: #6d28d9;\n  border-color: #ddd6fe;\n}\n.badge-deleted[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.badge-default[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  border-color: #cbd5e1;\n}\n.qty-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-weight: 700;\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.qty-positive[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.qty-negative[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.qty-neutral[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.balance-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n}\n.prev-stock[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.arrow-sep[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  font-size: 10px;\n}\n.new-stock[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1e293b;\n}\n.location-badge[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #475569;\n  white-space: nowrap;\n}\n.updated-by-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: #fff8e1;\n  border: 1px solid #ffe082;\n  padding: 3px 8px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.user-avatar-tiny[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #ffb300;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10.5px;\n  font-weight: 800;\n}\n.user-name-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #795548;\n}\n.remarks-text[_ngcontent-%COMP%] {\n  max-width: 220px;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 12.5px;\n  color: #64748b;\n}\n.btn-delete-record[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 15px;\n  opacity: 0.45;\n  transition: opacity 0.2s, transform 0.2s;\n  padding: 4px;\n  border-radius: 4px;\n}\n.btn-delete-record[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: scale(1.15);\n  background: #fee2e2;\n}\n.empty-table-cell[_ngcontent-%COMP%] {\n  padding: 50px 20px;\n  text-align: center;\n}\n.empty-state-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.empty-state-icon[_ngcontent-%COMP%] {\n  font-size: 38px;\n  margin-bottom: 4px;\n}\n.empty-state-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  color: #1e293b;\n  font-weight: 700;\n}\n.empty-state-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13.5px;\n  color: #94a3b8;\n}\n.btn-reset-empty[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background: #ffd54f;\n  color: #5d4037;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 13px;\n}\n.table-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px 24px;\n  border-top: 1px solid #f1f5f9;\n  background: #fafbfe;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #e2e8f0;\n  color: #334155;\n  padding: 6px 14px;\n  border-radius: 7px;\n  font-size: 13px;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n.nav-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #ffd54f;\n  background: #fffcf0;\n  color: #1e293b;\n}\n.nav-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.page-indicator[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_modalBackdropFade 0.2s ease-out;\n}\n@keyframes _ngcontent-%COMP%_modalBackdropFade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 18px;\n  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.22);\n  width: 100%;\n  max-width: 580px;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_modalScaleUp 0.22s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes _ngcontent-%COMP%_modalScaleUp {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.modal-header-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  background: #fef3c7;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  color: #1e293b;\n  font-weight: 750;\n}\n.modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 12.5px;\n  color: #64748b;\n}\n.modal-close-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: transparent;\n  border: none;\n  font-size: 18px;\n  color: #94a3b8;\n  padding: 6px;\n  border-radius: 6px;\n}\n.modal-close-btn[_ngcontent-%COMP%]:hover {\n  color: #0f172a;\n  background: #f1f5f9;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.form-error-banner[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1.5px solid #fca5a5;\n  color: #dc2626;\n  padding: 10px 14px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group.full-span[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #475569;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13.5px;\n  color: #1e293b;\n  outline: none;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #ffd54f;\n  background: #ffffff;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  background: #fafbfe;\n  border-top: 1px solid #f1f5f9;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  color: #475569;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-weight: 600;\n  font-size: 13.5px;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  background: #ffd54f;\n  border: 1px solid #ffca28;\n  color: #5d4037;\n  padding: 9px 20px;\n  border-radius: 9px;\n  font-weight: 750;\n  font-size: 13.5px;\n  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.25);\n}\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background: #ffca28;\n}\n.app-dialog-modal[_ngcontent-%COMP%] {\n  max-width: 440px;\n  text-align: center;\n  padding: 28px 24px 22px;\n}\n.dialog-icon-wrapper[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  margin: 0 auto 16px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n}\n.dialog-success[_ngcontent-%COMP%]   .dialog-icon-wrapper[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n  border: 2px solid #a7f3d0;\n}\n.dialog-warning[_ngcontent-%COMP%]   .dialog-icon-wrapper[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n  border: 2px solid #fde68a;\n}\n.dialog-error[_ngcontent-%COMP%]   .dialog-icon-wrapper[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n  border: 2px solid #fecaca;\n}\n.dialog-title[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 19px;\n  font-weight: 750;\n  color: #1e293b;\n}\n.dialog-message[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  font-size: 13.5px;\n  color: #64748b;\n  line-height: 1.5;\n}\n.dialog-details-card[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px 14px;\n  margin-bottom: 20px;\n  text-align: left;\n}\n.dialog-detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 4px 0;\n  font-size: 13px;\n  border-bottom: 1px dashed #e2e8f0;\n}\n.dialog-detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-label[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1e293b;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n.dialog-cancel-btn[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #cbd5e1;\n  color: #475569;\n  padding: 10px 20px;\n  border-radius: 9px;\n  font-size: 13.5px;\n  font-weight: 600;\n}\n.dialog-confirm-btn[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  border-radius: 9px;\n  font-size: 13.5px;\n  font-weight: 700;\n  border: none;\n}\n.dialog-confirm-btn.btn-success[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #ffffff;\n}\n.dialog-confirm-btn.btn-warning[_ngcontent-%COMP%] {\n  background: #d97706;\n  color: #ffffff;\n}\n.dialog-confirm-btn.btn-error[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #ffffff;\n}\n@media print {\n  body[_ngcontent-%COMP%] {\n    background: #ffffff !important;\n  }\n  .reports-page[_ngcontent-%COMP%] {\n    padding: 0 !important;\n    background: #ffffff !important;\n  }\n  .header-actions[_ngcontent-%COMP%], \n   .reports-toolbar-card[_ngcontent-%COMP%], \n   .table-pagination[_ngcontent-%COMP%], \n   .btn-delete-record[_ngcontent-%COMP%], \n   .meta-right[_ngcontent-%COMP%], \n   .modal-overlay[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .table-container-card[_ngcontent-%COMP%] {\n    box-shadow: none !important;\n    border: none !important;\n  }\n  .reports-table[_ngcontent-%COMP%] {\n    border: 1px solid #000000 !important;\n  }\n  .reports-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .reports-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    border: 1px solid #cccccc !important;\n    font-size: 11px !important;\n    padding: 6px 8px !important;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .reports-stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n    gap: 14px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .reports-page[_ngcontent-%COMP%] {\n    padding: 20px 16px 36px;\n  }\n  .reports-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    margin-bottom: 20px;\n  }\n  .reports-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 130px;\n    justify-content: center;\n  }\n  .reports-stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    gap: 10px;\n  }\n  .reports-filters-card[_ngcontent-%COMP%] {\n    padding: 16px;\n    border-radius: 14px;\n  }\n  .filters-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-box-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .table-container-card[_ngcontent-%COMP%] {\n    border-radius: 14px;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media screen and (max-width: 540px) {\n  .reports-page[_ngcontent-%COMP%] {\n    padding: 14px 12px 28px;\n  }\n  .reports-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .reports-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .action-btn[_ngcontent-%COMP%] {\n    flex: 1 1 calc(50% - 6px);\n    min-width: 110px;\n    font-size: 12px;\n    padding: 8px 10px;\n  }\n  .reports-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .reports-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px 8px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=reports.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsComponent, [{
    type: Component,
    args: [{ selector: "app-reports", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="reports-page">

    <!-- Page Header -->
    <header class="reports-header">
        <div class="header-text">
            <h1>Reports</h1>
            <p>Audit records of every single data entry, stock update, and transfer.</p>
        </div>

        <div class="header-actions">
            <button type="button" class="action-btn btn-export-csv" (click)="exportCsv()"
                title="Download CSV report file">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Export CSV
            </button>

            <!-- <button type="button" class="action-btn btn-export-json" (click)="exportJson()" title="Download JSON file">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                JSON File
            </button> -->

            <button type="button" class="action-btn btn-print" (click)="printReport()" title="Print or save as PDF">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                Print
            </button>

            <!-- <button type="button" class="action-btn btn-manual" (click)="openManualEntryModal()"
                title="Add a manual audit entry">
                + Record Entry
            </button> -->

            <button type="button" class="action-btn btn-clear-logs" (click)="clearAllRecords()"
                title="Clear all recorded report logs" *ngIf="totalRecords > 0">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
                Clear Logs
            </button>
        </div>
    </header>

    <!-- Summary Cards -->
    <section class="summary-section">
        <div class="summary-grid">

            <div class="summary-card">
                <div class="summary-icon icon-records">\u{1F4CB}</div>
                <div class="summary-info">
                    <span class="summary-label">Total Data Entries</span>
                    <h2>{{ totalRecords }}</h2>
                    <span class="summary-sub">All line-by-line entries</span>
                </div>
            </div>

            <div class="summary-card">
                <div class="summary-icon icon-received">\u{1F4E5}</div>
                <div class="summary-info">
                    <span class="summary-label">Total Stock Received</span>
                    <h2>{{ totalReceivedQty }} <span class="unit">PCS</span></h2>
                    <span class="summary-sub">Recorded replenishments</span>
                </div>
            </div>

            <div class="summary-card">
                <div class="summary-icon icon-transferred">\u{1F504}</div>
                <div class="summary-info">
                    <span class="summary-label">Stock Transferred</span>
                    <h2>{{ totalTransferredQty }} <span class="unit">PCS</span></h2>
                    <span class="summary-sub">Transferred to LCC</span>
                </div>
            </div>

            <div class="summary-card">
                <div class="summary-icon icon-products">\u{1F4E6}</div>
                <div class="summary-info">
                    <span class="summary-label">Products Logged</span>
                    <h2>{{ uniqueProductsCount }}</h2>
                    <span class="summary-sub">Distinct product IDs</span>
                </div>
            </div>

        </div>
    </section>

    <!-- Reports Filter & Toolbar -->
    <section class="reports-toolbar-card">
        <div class="toolbar-row">

            <!-- Search Input -->
            <div class="search-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input type="search" placeholder="Search by Product ID, Name, Updated By, Location, Record ID..."
                    [(ngModel)]="searchText" (ngModelChange)="onFilterChange()" aria-label="Search report records" />
            </div>

            <!-- Event Type Filter -->
            <div class="filter-group">
                <label for="eventFilter">Action Type:</label>
                <select id="eventFilter" [(ngModel)]="selectedEventType" (ngModelChange)="onFilterChange()">
                    <option value="ALL">All Actions</option>
                    <option value="STOCK_RECEIVED">Stock Received</option>
                    <option value="PRODUCT_ADDED">Product Added</option>
                    <option value="STOCK_TRANSFERRED">Stock Transferred to LCC</option>
                    <option value="PRODUCT_UPDATED">Product Updated</option>
                    <option value="PRODUCT_DELETED">Product Deleted</option>
                    <option value="LCC_TRANSFER_DELETED">LCC Transfer Removed</option>
                </select>
            </div>

            <!-- Date Filter -->
            <div class="filter-group">
                <label for="dateFilter">Date:</label>
                <input id="dateFilter" type="date" [(ngModel)]="selectedDate" (ngModelChange)="onFilterChange()" />
            </div>

            <!-- Sort Order -->
            <div class="filter-group">
                <label for="sortOrder">Sort:</label>
                <select id="sortOrder" [(ngModel)]="sortOrder" (ngModelChange)="onFilterChange()">
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                </select>
            </div>

            <!-- Clear Filters -->
            <button *ngIf="searchText || selectedEventType !== 'ALL' || selectedDate" type="button"
                class="clear-filters-btn" (click)="clearFilters()" title="Clear all active filters">
                \u2715 Reset Filters
            </button>

        </div>
    </section>

    <!-- Reports Table Section -->
    <section class="table-container-card">

        <div class="table-header-meta">
            <div class="meta-left">
                <h3>Line-by-Line Transaction Log</h3>
                <span class="meta-count">
                    Showing <strong>{{ paginatedRecords.length }}</strong> of <strong>{{ filteredRecords.length
                        }}</strong> records
                </span>
            </div>

            <div class="meta-right">
                <label for="pageSizeSelect">Show rows:</label>
                <select id="pageSizeSelect" [(ngModel)]="pageSize" (ngModelChange)="currentPage = 1">
                    <option *ngFor="let size of pageSizes" [value]="size">{{ size }} rows</option>
                </select>
            </div>
        </div>

        <!-- The Responsive Data Table -->
        <div class="table-responsive">
            <table class="reports-table">
                <thead>
                    <tr>
                        <th class="col-id">Record ID</th>
                        <th class="col-datetime">Date &amp; Time</th>
                        <th class="col-product-id">Product ID</th>
                        <th class="col-product-name">Product Name</th>
                        <th class="col-event">Action / Event</th>
                        <th class="col-qty">Quantity Change</th>
                        <th class="col-balance">Stock Balance</th>
                        <th class="col-location">Location</th>
                        <th class="col-updated-by">Updated By</th>
                        <th class="col-remarks">Remarks</th>
                        <th class="col-action">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let r of paginatedRecords" class="report-row">

                        <!-- Record ID -->
                        <td class="col-id">
                            <span class="record-id-code">{{ r.id }}</span>
                        </td>

                        <!-- Date & Time -->
                        <td class="col-datetime">
                            <div class="date-time-cell">
                                <span class="cell-date">{{ r.date }}</span>
                                <span class="cell-time">{{ r.time }}</span>
                            </div>
                        </td>

                        <!-- Product ID Badge -->
                        <td class="col-product-id">
                            <span class="product-id-tag">{{ r.productId }}</span>
                        </td>

                        <!-- Product Name -->
                        <td class="col-product-name">
                            <strong class="product-name-text">{{ r.productName }}</strong>
                        </td>

                        <!-- Event / Action Badge -->
                        <td class="col-event">
                            <span class="event-badge" [ngClass]="getBadgeClass(r.eventType)">
                                <span class="badge-dot"></span>
                                {{ r.eventTitle }}
                            </span>
                        </td>

                        <!-- Quantity Change -->
                        <td class="col-qty">
                            <span class="qty-tag" [class.qty-positive]="r.quantityChange > 0"
                                [class.qty-negative]="r.quantityChange < 0"
                                [class.qty-neutral]="r.quantityChange === 0">
                                {{ r.quantityChange > 0 ? '+' + r.quantityChange : r.quantityChange }} PCS
                            </span>
                        </td>

                        <!-- Stock Balance -->
                        <td class="col-balance">
                            <div class="balance-cell">
                                <span class="prev-stock">Prev: {{ r.previousStock }}</span>
                                <span class="arrow-sep">\u2794</span>
                                <span class="new-stock"><strong>{{ r.newStock }} PCS</strong></span>
                            </div>
                        </td>

                        <!-- Location -->
                        <td class="col-location">
                            <span class="location-badge">\u{1F4CD} {{ r.location }}</span>
                        </td>

                        <!-- Updated By (Whom) -->
                        <td class="col-updated-by">
                            <span class="updated-by-badge">
                                <span class="user-avatar-tiny">{{ r.updatedBy ? r.updatedBy.charAt(0).toUpperCase() :
                                    'U' }}</span>
                                <span class="user-name-text">{{ r.updatedBy }}</span>
                            </span>
                        </td>

                        <!-- Remarks -->
                        <td class="col-remarks">
                            <span class="remarks-text" [title]="r.remarks">{{ r.remarks || '\u2014' }}</span>
                        </td>

                        <!-- Action -->
                        <td class="col-action">
                            <button type="button" class="btn-delete-record" (click)="deleteSingleRecord(r)"
                                title="Delete this record">
                                \u{1F5D1}
                            </button>
                        </td>

                    </tr>

                    <!-- Empty State -->
                    <tr *ngIf="paginatedRecords.length === 0">
                        <td colspan="11" class="empty-table-cell">
                            <div class="empty-state-content">
                                <div class="empty-state-icon">\u{1F4CB}</div>
                                <h4>{{ totalRecords === 0 ? 'No Report History' : 'No Report Records Found' }}</h4>
                                <p *ngIf="totalRecords === 0">Report history is clean. Transaction records will be logged automatically as warehouse and LCC operations occur.</p>
                                <p *ngIf="totalRecords > 0">No transaction records match your search or filter criteria.</p>
                                <button *ngIf="searchText || selectedEventType !== 'ALL' || selectedDate" type="button"
                                    class="btn-reset-empty" (click)="clearFilters()">
                                    Clear Filters
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Table Pagination -->
        <div class="table-pagination" *ngIf="totalPages > 1">
            <button type="button" class="page-btn nav-btn" [disabled]="currentPage === 1"
                (click)="setPage(currentPage - 1)">
                \u2190 Previous
            </button>

            <div class="page-numbers">
                <span class="page-indicator">
                    Page <strong>{{ currentPage }}</strong> of <strong>{{ totalPages }}</strong>
                </span>
            </div>

            <button type="button" class="page-btn nav-btn" [disabled]="currentPage === totalPages"
                (click)="setPage(currentPage + 1)">
                Next \u2192
            </button>
        </div>

    </section>

    <!-- ==================== MANUAL REPORT ENTRY MODAL ==================== -->
    <div class="modal-overlay" *ngIf="showManualEntryModal" (click)="closeManualEntryModal()">
        <div class="modal-card manual-entry-modal" (click)="$event.stopPropagation()">

            <div class="modal-header">
                <div class="modal-header-icon">\u{1F4DD}</div>
                <div>
                    <h2>Record Report Entry</h2>
                    <p>Add a line-by-line audit record directly into the reports file</p>
                </div>
                <button type="button" class="modal-close-btn" (click)="closeManualEntryModal()">\u2715</button>
            </div>

            <div class="modal-body">

                <div class="form-error-banner" *ngIf="manualFormError">
                    <span>\u26A0\uFE0F {{ manualFormError }}</span>
                </div>

                <div class="form-grid">

                    <div class="form-group">
                        <label for="manualPId">Product ID *</label>
                        <input id="manualPId" type="text" placeholder="e.g. SA_102, TS_103"
                            [(ngModel)]="manualForm.productId" required />
                    </div>

                    <div class="form-group">
                        <label for="manualPName">Product Name *</label>
                        <input id="manualPName" type="text" placeholder="e.g. Saree, T-Shirt"
                            [(ngModel)]="manualForm.productName" required />
                    </div>

                    <div class="form-group">
                        <label for="manualEvent">Action Type *</label>
                        <select id="manualEvent" [(ngModel)]="manualForm.eventType">
                            <option value="STOCK_RECEIVED">Stock Received</option>
                            <option value="PRODUCT_ADDED">Product Added</option>
                            <option value="STOCK_TRANSFERRED">Stock Transferred to LCC</option>
                            <option value="PRODUCT_UPDATED">Product Updated</option>
                            <option value="PRODUCT_DELETED">Product Deleted</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="manualQty">Quantity (PCS) *</label>
                        <input id="manualQty" type="number" min="1" [(ngModel)]="manualForm.quantity" required />
                    </div>

                    <div class="form-group">
                        <label for="manualUser">Updated By (Whom) *</label>
                        <input id="manualUser" type="text" placeholder="Enter name (e.g. Abi)"
                            [(ngModel)]="manualForm.updatedBy" required />
                    </div>

                    <div class="form-group">
                        <label for="manualDate">Date *</label>
                        <input id="manualDate" type="date" [(ngModel)]="manualForm.date" required />
                    </div>

                    <div class="form-group">
                        <label for="manualLoc">Location</label>
                        <input id="manualLoc" type="text" placeholder="e.g. Vadalur"
                            [(ngModel)]="manualForm.location" />
                    </div>

                    <div class="form-group full-span">
                        <label for="manualRemarks">Remarks / Notes</label>
                        <input id="manualRemarks" type="text"
                            placeholder="e.g. Verified by team lead, special replenishment"
                            [(ngModel)]="manualForm.remarks" />
                    </div>

                </div>

            </div>

            <div class="modal-footer">
                <button type="button" class="btn-cancel" (click)="closeManualEntryModal()">Cancel</button>
                <button type="button" class="btn-submit" (click)="saveManualEntry()">Save Record</button>
            </div>

        </div>
    </div>

    <!-- ==================== IN-APP MODAL CONFIRM / NOTIFICATION DIALOG ==================== -->
    <div class="modal-overlay app-dialog-overlay" *ngIf="modalDialog.show">
        <div class="modal-card app-dialog-modal" [ngClass]="'dialog-' + modalDialog.type">
            <div class="dialog-icon-wrapper">
                <span *ngIf="modalDialog.type === 'success'" class="dialog-icon">\u2713</span>
                <span *ngIf="modalDialog.type === 'warning'" class="dialog-icon">\u26A0\uFE0F</span>
                <span *ngIf="modalDialog.type === 'error'" class="dialog-icon">\u2715</span>
                <span *ngIf="modalDialog.type === 'confirm'" class="dialog-icon">\u2753</span>
            </div>

            <h3 class="dialog-title">{{ modalDialog.title }}</h3>
            <p class="dialog-message">{{ modalDialog.message }}</p>

            <div class="dialog-details-card" *ngIf="modalDialog.details && modalDialog.details.length > 0">
                <div class="dialog-detail-row" *ngFor="let item of modalDialog.details">
                    <span class="detail-label">{{ item.label }}:</span>
                    <span class="detail-value">{{ item.value }}</span>
                </div>
            </div>

            <div class="dialog-actions">
                <button *ngIf="modalDialog.cancelText" type="button" class="dialog-cancel-btn"
                    (click)="modalDialog.onCancel ? modalDialog.onCancel() : modalDialog.show = false">
                    {{ modalDialog.cancelText }}
                </button>

                <button type="button" class="dialog-confirm-btn" [ngClass]="'btn-' + modalDialog.type"
                    (click)="modalDialog.onConfirm ? modalDialog.onConfirm() : modalDialog.show = false">
                    {{ modalDialog.confirmText || 'OK' }}
                </button>
            </div>
        </div>
    </div>

</div>`, styles: ['/* src/app/pages/reports/reports.css */\n:host {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  box-sizing: border-box;\n}\n* {\n  box-sizing: border-box;\n}\n.reports-page {\n  min-height: 80vh;\n  min-width: 0;\n  padding: 36px 36px 60px;\n  background: #ffffff;\n  color: #263238;\n  font-family: "Roboto", sans-serif;\n}\nbutton,\ninput,\nselect {\n  font: inherit;\n}\nbutton {\n  cursor: pointer;\n}\n.reports-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n}\n.header-text {\n  min-width: 0;\n}\n.reports-header h1 {\n  margin: 0 0 8px;\n  color: #222d3d;\n  font-size: clamp(26px, 2.8vw, 36px);\n  font-weight: 750;\n  letter-spacing: -0.02em;\n}\n.reports-header p {\n  margin: 0;\n  color: #64748b;\n  font-size: 14.5px;\n  line-height: 1.5;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 10px 16px;\n  border-radius: 9px;\n  font-size: 13.5px;\n  font-weight: 600;\n  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  border: 1px solid transparent;\n}\n.btn-export-csv {\n  background: #059669;\n  color: #ffffff;\n  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);\n}\n.btn-export-csv:hover {\n  background: #047857;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(5, 150, 105, 0.35);\n}\n.btn-export-json {\n  background: #2563eb;\n  color: #ffffff;\n  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);\n}\n.btn-export-json:hover {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n}\n.btn-print {\n  background: #ffffff;\n  color: #334155;\n  border: 1px solid #cbd5e1;\n}\n.btn-print:hover {\n  background: #f8fafc;\n  border-color: #94a3b8;\n  color: #0f172a;\n}\n.btn-manual {\n  background: #ffd54f;\n  color: #5d4037;\n  border: 1px solid #ffca28;\n  font-weight: 700;\n  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.25);\n}\n.btn-manual:hover {\n  background: #ffca28;\n  transform: translateY(-1px);\n}\n.btn-clear-logs {\n  background: #ffffff;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.btn-clear-logs:hover {\n  background: #fef2f2;\n  border-color: #f87171;\n}\n.summary-section {\n  margin-bottom: 24px;\n}\n.summary-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));\n  gap: 16px;\n}\n.summary-card {\n  background: #ffffff;\n  padding: 20px 22px;\n  border-radius: 14px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);\n  border: 1px solid rgba(226, 232, 240, 0.8);\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.summary-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.07);\n}\n.summary-icon {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.icon-records {\n  background: #eff6ff;\n}\n.icon-received {\n  background: #ecfdf5;\n}\n.icon-transferred {\n  background: #fffbeb;\n}\n.icon-products {\n  background: #fef3c7;\n}\n.summary-info {\n  display: flex;\n  flex-direction: column;\n}\n.summary-label {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  margin-bottom: 4px;\n}\n.summary-info h2 {\n  margin: 0;\n  font-size: 26px;\n  font-weight: 800;\n  color: #1e293b;\n  line-height: 1.1;\n}\n.summary-info h2 .unit {\n  font-size: 15px;\n  font-weight: 600;\n  color: #94a3b8;\n  margin-left: 2px;\n}\n.summary-sub {\n  font-size: 11.5px;\n  color: #94a3b8;\n  margin-top: 4px;\n}\n.reports-toolbar-card {\n  background: #ffffff;\n  padding: 16px 20px;\n  border-radius: 14px;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);\n  border: 1px solid #e2e8f0;\n  margin-bottom: 20px;\n}\n.toolbar-row {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.search-box {\n  flex: 1 1 280px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 8px 14px;\n  transition: all 0.2s ease;\n}\n.search-box:focus-within {\n  border-color: #ffd54f;\n  background: #ffffff;\n  box-shadow: 0 0 0 3px rgba(255, 213, 79, 0.25);\n}\n.search-box svg {\n  stroke: #94a3b8;\n  flex-shrink: 0;\n}\n.search-box input {\n  border: none;\n  background: transparent;\n  width: 100%;\n  font-size: 13.5px;\n  color: #1e293b;\n  outline: none;\n}\n.search-box input::placeholder {\n  color: #94a3b8;\n}\n.filter-group {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.filter-group label {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #64748b;\n  white-space: nowrap;\n}\n.filter-group select,\n.filter-group input[type=date] {\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 9px;\n  padding: 8px 12px;\n  font-size: 13px;\n  color: #1e293b;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.filter-group select:focus,\n.filter-group input[type=date]:focus {\n  border-color: #ffd54f;\n  background: #ffffff;\n}\n.clear-filters-btn {\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fca5a5;\n  border-radius: 8px;\n  padding: 7px 12px;\n  font-size: 12.5px;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n.clear-filters-btn:hover {\n  background: #fee2e2;\n}\n.table-container-card {\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n}\n.table-header-meta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f1f5f9;\n  background: #fafbfe;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.meta-left h3 {\n  margin: 0 0 3px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.meta-count {\n  font-size: 12.5px;\n  color: #64748b;\n}\n.meta-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12.5px;\n  color: #64748b;\n}\n.meta-right select {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  border-radius: 7px;\n  padding: 5px 10px;\n  font-size: 12.5px;\n  color: #1e293b;\n}\n.table-responsive {\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.reports-table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n  font-size: 13.5px;\n}\n.reports-table thead th {\n  background: #f8fafc;\n  color: #475569;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  padding: 14px 16px;\n  border-bottom: 1.5px solid #e2e8f0;\n  white-space: nowrap;\n}\n.reports-table tbody tr.report-row {\n  border-bottom: 1px solid #f1f5f9;\n  transition: background-color 0.15s ease;\n}\n.reports-table tbody tr.report-row:hover {\n  background-color: #fffdf5;\n}\n.reports-table tbody td {\n  padding: 13px 16px;\n  vertical-align: middle;\n  color: #334155;\n}\n.record-id-code {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n  font-size: 11.5px;\n  background: #f1f5f9;\n  color: #475569;\n  padding: 3px 7px;\n  border-radius: 5px;\n  border: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.date-time-cell {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  white-space: nowrap;\n}\n.cell-date {\n  font-weight: 600;\n  color: #1e293b;\n}\n.cell-time {\n  font-size: 11.5px;\n  color: #94a3b8;\n}\n.product-id-tag {\n  display: inline-block;\n  background: #fff3c4;\n  color: #92400e;\n  font-weight: 800;\n  font-size: 12px;\n  padding: 3px 9px;\n  border-radius: 6px;\n  letter-spacing: 0.02em;\n  white-space: nowrap;\n}\n.product-name-text {\n  color: #0f172a;\n  font-size: 14px;\n  white-space: nowrap;\n}\n.event-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n  border: 1px solid transparent;\n}\n.badge-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.badge-received {\n  background: #ecfdf5;\n  color: #047857;\n  border-color: #a7f3d0;\n}\n.badge-added {\n  background: #eff6ff;\n  color: #1d4ed8;\n  border-color: #bfdbfe;\n}\n.badge-transferred {\n  background: #fffbeb;\n  color: #b45309;\n  border-color: #fde68a;\n}\n.badge-updated {\n  background: #f5f3ff;\n  color: #6d28d9;\n  border-color: #ddd6fe;\n}\n.badge-deleted {\n  background: #fef2f2;\n  color: #b91c1c;\n  border-color: #fecaca;\n}\n.badge-default {\n  background: #f1f5f9;\n  color: #475569;\n  border-color: #cbd5e1;\n}\n.qty-tag {\n  display: inline-block;\n  padding: 3px 8px;\n  border-radius: 6px;\n  font-weight: 700;\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.qty-positive {\n  background: #dcfce7;\n  color: #15803d;\n}\n.qty-negative {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.qty-neutral {\n  background: #f1f5f9;\n  color: #475569;\n}\n.balance-cell {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  white-space: nowrap;\n}\n.prev-stock {\n  color: #94a3b8;\n}\n.arrow-sep {\n  color: #cbd5e1;\n  font-size: 10px;\n}\n.new-stock strong {\n  color: #1e293b;\n}\n.location-badge {\n  font-size: 12.5px;\n  color: #475569;\n  white-space: nowrap;\n}\n.updated-by-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: #fff8e1;\n  border: 1px solid #ffe082;\n  padding: 3px 8px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.user-avatar-tiny {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #ffb300;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10.5px;\n  font-weight: 800;\n}\n.user-name-text {\n  font-size: 12px;\n  font-weight: 700;\n  color: #795548;\n}\n.remarks-text {\n  max-width: 220px;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 12.5px;\n  color: #64748b;\n}\n.btn-delete-record {\n  background: transparent;\n  border: none;\n  font-size: 15px;\n  opacity: 0.45;\n  transition: opacity 0.2s, transform 0.2s;\n  padding: 4px;\n  border-radius: 4px;\n}\n.btn-delete-record:hover {\n  opacity: 1;\n  transform: scale(1.15);\n  background: #fee2e2;\n}\n.empty-table-cell {\n  padding: 50px 20px;\n  text-align: center;\n}\n.empty-state-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.empty-state-icon {\n  font-size: 38px;\n  margin-bottom: 4px;\n}\n.empty-state-content h4 {\n  margin: 0;\n  font-size: 17px;\n  color: #1e293b;\n  font-weight: 700;\n}\n.empty-state-content p {\n  margin: 0;\n  font-size: 13.5px;\n  color: #94a3b8;\n}\n.btn-reset-empty {\n  margin-top: 10px;\n  background: #ffd54f;\n  color: #5d4037;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 13px;\n}\n.table-pagination {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 14px 24px;\n  border-top: 1px solid #f1f5f9;\n  background: #fafbfe;\n}\n.nav-btn {\n  background: #ffffff;\n  border: 1.5px solid #e2e8f0;\n  color: #334155;\n  padding: 6px 14px;\n  border-radius: 7px;\n  font-size: 13px;\n  font-weight: 600;\n  transition: all 0.2s;\n}\n.nav-btn:hover:not(:disabled) {\n  border-color: #ffd54f;\n  background: #fffcf0;\n  color: #1e293b;\n}\n.nav-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.page-indicator {\n  font-size: 13px;\n  color: #64748b;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  z-index: 1000;\n  animation: modalBackdropFade 0.2s ease-out;\n}\n@keyframes modalBackdropFade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-card {\n  background: #ffffff;\n  border-radius: 18px;\n  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.22);\n  width: 100%;\n  max-width: 580px;\n  overflow: hidden;\n  animation: modalScaleUp 0.22s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes modalScaleUp {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 24px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.modal-header-icon {\n  font-size: 26px;\n  background: #fef3c7;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-header h2 {\n  margin: 0;\n  font-size: 18px;\n  color: #1e293b;\n  font-weight: 750;\n}\n.modal-header p {\n  margin: 2px 0 0;\n  font-size: 12.5px;\n  color: #64748b;\n}\n.modal-close-btn {\n  margin-left: auto;\n  background: transparent;\n  border: none;\n  font-size: 18px;\n  color: #94a3b8;\n  padding: 6px;\n  border-radius: 6px;\n}\n.modal-close-btn:hover {\n  color: #0f172a;\n  background: #f1f5f9;\n}\n.modal-body {\n  padding: 20px 24px;\n  max-height: 70vh;\n  overflow-y: auto;\n}\n.form-error-banner {\n  background: #fef2f2;\n  border: 1.5px solid #fca5a5;\n  color: #dc2626;\n  padding: 10px 14px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group.full-span {\n  grid-column: 1 / -1;\n}\n.form-group label {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #475569;\n}\n.form-group input,\n.form-group select {\n  background: #f8fafc;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 9px;\n  padding: 9px 13px;\n  font-size: 13.5px;\n  color: #1e293b;\n  outline: none;\n}\n.form-group input:focus,\n.form-group select:focus {\n  border-color: #ffd54f;\n  background: #ffffff;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px;\n  background: #fafbfe;\n  border-top: 1px solid #f1f5f9;\n}\n.btn-cancel {\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  color: #475569;\n  padding: 9px 18px;\n  border-radius: 9px;\n  font-weight: 600;\n  font-size: 13.5px;\n}\n.btn-submit {\n  background: #ffd54f;\n  border: 1px solid #ffca28;\n  color: #5d4037;\n  padding: 9px 20px;\n  border-radius: 9px;\n  font-weight: 750;\n  font-size: 13.5px;\n  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.25);\n}\n.btn-submit:hover {\n  background: #ffca28;\n}\n.app-dialog-modal {\n  max-width: 440px;\n  text-align: center;\n  padding: 28px 24px 22px;\n}\n.dialog-icon-wrapper {\n  width: 56px;\n  height: 56px;\n  margin: 0 auto 16px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n}\n.dialog-success .dialog-icon-wrapper {\n  background: #ecfdf5;\n  color: #059669;\n  border: 2px solid #a7f3d0;\n}\n.dialog-warning .dialog-icon-wrapper {\n  background: #fffbeb;\n  color: #d97706;\n  border: 2px solid #fde68a;\n}\n.dialog-error .dialog-icon-wrapper {\n  background: #fef2f2;\n  color: #dc2626;\n  border: 2px solid #fecaca;\n}\n.dialog-title {\n  margin: 0 0 8px;\n  font-size: 19px;\n  font-weight: 750;\n  color: #1e293b;\n}\n.dialog-message {\n  margin: 0 0 18px;\n  font-size: 13.5px;\n  color: #64748b;\n  line-height: 1.5;\n}\n.dialog-details-card {\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 10px 14px;\n  margin-bottom: 20px;\n  text-align: left;\n}\n.dialog-detail-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 4px 0;\n  font-size: 13px;\n  border-bottom: 1px dashed #e2e8f0;\n}\n.dialog-detail-row:last-child {\n  border-bottom: none;\n}\n.detail-label {\n  color: #64748b;\n}\n.detail-value {\n  font-weight: 700;\n  color: #1e293b;\n}\n.dialog-actions {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n}\n.dialog-cancel-btn {\n  background: #ffffff;\n  border: 1.5px solid #cbd5e1;\n  color: #475569;\n  padding: 10px 20px;\n  border-radius: 9px;\n  font-size: 13.5px;\n  font-weight: 600;\n}\n.dialog-confirm-btn {\n  padding: 10px 22px;\n  border-radius: 9px;\n  font-size: 13.5px;\n  font-weight: 700;\n  border: none;\n}\n.dialog-confirm-btn.btn-success {\n  background: #059669;\n  color: #ffffff;\n}\n.dialog-confirm-btn.btn-warning {\n  background: #d97706;\n  color: #ffffff;\n}\n.dialog-confirm-btn.btn-error {\n  background: #dc2626;\n  color: #ffffff;\n}\n@media print {\n  body {\n    background: #ffffff !important;\n  }\n  .reports-page {\n    padding: 0 !important;\n    background: #ffffff !important;\n  }\n  .header-actions,\n  .reports-toolbar-card,\n  .table-pagination,\n  .btn-delete-record,\n  .meta-right,\n  .modal-overlay {\n    display: none !important;\n  }\n  .table-container-card {\n    box-shadow: none !important;\n    border: none !important;\n  }\n  .reports-table {\n    border: 1px solid #000000 !important;\n  }\n  .reports-table thead th,\n  .reports-table tbody td {\n    border: 1px solid #cccccc !important;\n    font-size: 11px !important;\n    padding: 6px 8px !important;\n  }\n}\n@media screen and (max-width: 1100px) {\n  .reports-stats-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n    gap: 14px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .reports-page {\n    padding: 20px 16px 36px;\n  }\n  .reports-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    margin-bottom: 20px;\n  }\n  .reports-header .header-actions {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n  .action-btn {\n    flex: 1;\n    min-width: 130px;\n    justify-content: center;\n  }\n  .reports-stats-grid {\n    grid-template-columns: 1fr !important;\n    gap: 10px;\n  }\n  .reports-filters-card {\n    padding: 16px;\n    border-radius: 14px;\n  }\n  .filters-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-box-wrapper {\n    width: 100%;\n  }\n  .table-container-card {\n    border-radius: 14px;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media screen and (max-width: 540px) {\n  .reports-page {\n    padding: 14px 12px 28px;\n  }\n  .reports-header h1 {\n    font-size: 24px;\n  }\n  .reports-header .header-actions {\n    gap: 8px;\n  }\n  .action-btn {\n    flex: 1 1 calc(50% - 6px);\n    min-width: 110px;\n    font-size: 12px;\n    padding: 8px 10px;\n  }\n  .reports-table th,\n  .reports-table td {\n    padding: 10px 8px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=reports.css.map */\n'] }]
  }], () => [{ type: ReportsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "src/app/pages/reports/reports.ts", lineNumber: 26 });
})();
export {
  ReportsComponent
};
//# debugId=51c106f2-c517-5c62-9ab1-e26fc21664c4
//# sourceMappingURL=chunk-QR5QZ4D4.js.map
