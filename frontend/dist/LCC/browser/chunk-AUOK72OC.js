import {
  Router
} from "./chunk-QEGN6UXF.js";
import {
  DistributionService
} from "./chunk-USM7JC6K.js";
import {
  LccService
} from "./chunk-QVYNMT4A.js";
import {
  ReportsService
} from "./chunk-OLCIBYMR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-STUIIXEF.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QKVBSWNP.js";

// src/app/pages/lcc/lcc.component.ts
function LccComponent_div_24_article_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.productId, " ");
  }
}
function LccComponent_div_24_article_1_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2, "Product ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r3.productId);
  }
}
function LccComponent_div_24_article_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275element(1, "span", 33);
    \u0275\u0275text(2, " About to update the product ");
    \u0275\u0275elementEnd();
  }
}
function LccComponent_div_24_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 23)(1, "div", 24);
    \u0275\u0275template(2, LccComponent_div_24_article_1_span_2_Template, 2, 1, "span", 25);
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, LccComponent_div_24_article_1_p_5_Template, 5, 1, "p", 26);
    \u0275\u0275elementStart(6, "p")(7, "strong");
    \u0275\u0275text(8, "LCC Stock:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 27);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, LccComponent_div_24_article_1_div_11_Template, 3, 0, "div", 28);
    \u0275\u0275elementStart(12, "p")(13, "strong");
    \u0275\u0275text(14, "Transfer Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p")(19, "strong");
    \u0275\u0275text(20, "Switched By:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "p")(24, "strong");
    \u0275\u0275text(25, "Warehouse Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 29)(29, "button", 30);
    \u0275\u0275listener("click", function LccComponent_div_24_article_1_Template_button_click_29_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openEditModal(item_r3));
    });
    \u0275\u0275text(30, " Edit ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r3.productId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.productId);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("stock-danger", item_r3.quantity < 20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r3.quantity, " PCS");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.quantity < 20);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 10, item_r3.date, "dd-MM-yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r3.switchedBy);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r3.location || "Not assigned");
  }
}
function LccComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, LccComponent_div_24_article_1_Template, 31, 13, "article", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.filteredItems)("ngForTrackBy", ctx_r3.trackByTransferId);
  }
}
function LccComponent_ng_template_25_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function LccComponent_ng_template_25_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.goBackToProducts());
    });
    \u0275\u0275text(1, " Go to Products ");
    \u0275\u0275elementEnd();
  }
}
function LccComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, LccComponent_ng_template_25_button_7_Template, 2, 0, "button", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.searchText ? "No matching LCC items found" : "No LCC items transferred yet", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.searchText ? "Try searching by another product name, ID, or switched by." : 'Transfer products from the warehouse using "Switch to LCC" on the Products page.', " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.searchText);
  }
}
function LccComponent_div_35_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275property("value", item_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (item_r7.productId || "N/A") + " - " + item_r7.name, " ");
  }
}
function LccComponent_div_35_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275property("value", item_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r8.name + (item_r8.productId ? " - " + item_r8.productId : ""), " ");
  }
}
function LccComponent_div_35_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "span", 67);
    \u0275\u0275text(3, "Available LCC Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong", 68);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 66)(7, "span", 67);
    \u0275\u0275text(8, "Warehouse / LCC Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong", 68);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.remainingDistTransferStock, " PCS");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedDistTransferProduct.location || "LCC Inventory");
  }
}
function LccComponent_div_35_small_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 69);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Maximum available to transfer: ", ctx_r3.selectedDistTransferProduct.quantity, " PCS ");
  }
}
function LccComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function LccComponent_div_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDistributionTransferModal());
    });
    \u0275\u0275elementStart(1, "section", 39);
    \u0275\u0275listener("click", function LccComponent_div_35_Template_section_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 40)(3, "div")(4, "h2", 41);
    \u0275\u0275text(5, "Switch Stock to Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Transfer products from LCC to Distribution inventory.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 42);
    \u0275\u0275listener("click", function LccComponent_div_35_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDistributionTransferModal());
    });
    \u0275\u0275text(9, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 43, 1);
    \u0275\u0275listener("ngSubmit", function LccComponent_div_35_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmDistributionTransfer());
    });
    \u0275\u0275elementStart(12, "div", 44)(13, "label", 45);
    \u0275\u0275text(14, " Product ID ");
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 46);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LccComponent_div_35_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.distTransferForm.selectedItemId, $event) || (ctx_r3.distTransferForm.selectedItemId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "option", 47);
    \u0275\u0275text(19, "Select Product ID");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, LccComponent_div_35_option_20_Template, 2, 2, "option", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 44)(22, "label", 49);
    \u0275\u0275text(23, " Product Name ");
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "select", 50);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LccComponent_div_35_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.distTransferForm.selectedItemId, $event) || (ctx_r3.distTransferForm.selectedItemId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 47);
    \u0275\u0275text(28, "Select Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, LccComponent_div_35_option_29_Template, 2, 2, "option", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, LccComponent_div_35_div_30_Template, 11, 2, "div", 51);
    \u0275\u0275elementStart(31, "div", 44)(32, "label", 52);
    \u0275\u0275text(33, "Date ");
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "input", 53);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LccComponent_div_35_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.distTransferForm.date, $event) || (ctx_r3.distTransferForm.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 44)(38, "label", 54);
    \u0275\u0275text(39, "Transferred By / Volunteer ");
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "input", 55);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LccComponent_div_35_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.distTransferForm.transferredBy, $event) || (ctx_r3.distTransferForm.transferredBy = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 44)(44, "label", 56);
    \u0275\u0275text(45, "Receiver / Destination ");
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "input", 57);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LccComponent_div_35_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.distTransferForm.receiver, $event) || (ctx_r3.distTransferForm.receiver = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 44)(50, "label", 58);
    \u0275\u0275text(51, "Quantity (PCS) ");
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "input", 59);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LccComponent_div_35_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.distTransferForm.quantity, $event) || (ctx_r3.distTransferForm.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, LccComponent_div_35_small_55_Template, 2, 1, "small", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 61)(57, "button", 62);
    \u0275\u0275listener("click", function LccComponent_div_35_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeDistributionTransferModal());
    });
    \u0275\u0275text(58, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 63);
    \u0275\u0275text(60, " Confirm Transfer ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const distTransferNgForm_r9 = \u0275\u0275reference(11);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.distTransferForm.selectedItemId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.availableLccItems);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.distTransferForm.selectedItemId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.availableLccItems);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedDistTransferProduct);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.distTransferForm.date);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.distTransferForm.transferredBy);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.distTransferForm.receiver);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.distTransferForm.quantity);
    \u0275\u0275property("max", ctx_r3.selectedDistTransferProduct?.quantity ?? 1);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedDistTransferProduct);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", distTransferNgForm_r9.invalid || !ctx_r3.selectedDistTransferProduct || !ctx_r3.distTransferForm.quantity || ctx_r3.distTransferForm.quantity < 1 || ctx_r3.distTransferForm.quantity > (ctx_r3.selectedDistTransferProduct?.quantity ?? 0));
  }
}
function LccComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275listener("click", function LccComponent_div_36_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeEditModal());
    });
    \u0275\u0275elementStart(1, "section", 71);
    \u0275\u0275listener("click", function LccComponent_div_36_Template_section_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 72)(3, "div")(4, "h2", 73);
    \u0275\u0275text(5, "Edit LCC Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 74);
    \u0275\u0275listener("click", function LccComponent_div_36_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeEditModal());
    });
    \u0275\u0275text(9, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 75);
    \u0275\u0275listener("ngSubmit", function LccComponent_div_36_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmSaveEdit());
    });
    \u0275\u0275elementStart(11, "div", 44)(12, "label");
    \u0275\u0275text(13, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 44)(16, "label", 77);
    \u0275\u0275text(17, "LCC Stock (PCS) ");
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 78);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LccComponent_div_36_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.quantity, $event) || (ctx_r3.editForm.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 44)(22, "label", 79);
    \u0275\u0275text(23, "Switched / Updated By ");
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "input", 80);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LccComponent_div_36_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.switchedBy, $event) || (ctx_r3.editForm.switchedBy = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 44)(28, "label", 81);
    \u0275\u0275text(29, "Transfer Date ");
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "input", 82);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LccComponent_div_36_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.date, $event) || (ctx_r3.editForm.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 44)(34, "label", 83);
    \u0275\u0275text(35, "Warehouse Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 84);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LccComponent_div_36_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.location, $event) || (ctx_r3.editForm.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 61)(38, "button", 62);
    \u0275\u0275listener("click", function LccComponent_div_36_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeEditModal());
    });
    \u0275\u0275text(39, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 85);
    \u0275\u0275text(41, " Save Changes ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("Update stock quantity or details for ", ctx_r3.selectedEditItem?.productId, " (", ctx_r3.selectedEditItem?.name, ").");
    \u0275\u0275advance(7);
    \u0275\u0275property("value", (ctx_r3.selectedEditItem?.productId || "") + " - " + (ctx_r3.selectedEditItem?.name || ""));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.quantity);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.switchedBy);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.date);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.location);
    \u0275\u0275control();
  }
}
function LccComponent_div_37_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function LccComponent_div_37_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1, "\u26A0");
    \u0275\u0275elementEnd();
  }
}
function LccComponent_div_37_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 100);
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function LccComponent_div_37_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.modalDialog.message);
  }
}
function LccComponent_div_37_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "span", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 106);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r12.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r12.value);
  }
}
function LccComponent_div_37_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275template(1, LccComponent_div_37_div_10_div_1_Template, 5, 2, "div", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.modalDialog.details);
  }
}
function LccComponent_div_37_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275listener("click", function LccComponent_div_37_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.modalDialog.onCancel ? ctx_r3.modalDialog.onCancel() : ctx_r3.modalDialog.show = false);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.modalDialog.cancelText, " ");
  }
}
function LccComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275listener("click", function LccComponent_div_37_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.modalDialog.onCancel ? ctx_r3.modalDialog.onCancel() : ctx_r3.modalDialog.show = false);
    });
    \u0275\u0275elementStart(1, "section", 87);
    \u0275\u0275listener("click", function LccComponent_div_37_Template_section_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 88);
    \u0275\u0275template(3, LccComponent_div_37_span_3_Template, 2, 0, "span", 89)(4, LccComponent_div_37_span_4_Template, 2, 0, "span", 90)(5, LccComponent_div_37_span_5_Template, 2, 0, "span", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 92)(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, LccComponent_div_37_p_9_Template, 2, 1, "p", 93)(10, LccComponent_div_37_div_10_Template, 2, 1, "div", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 95);
    \u0275\u0275template(12, LccComponent_div_37_button_12_Template, 2, 1, "button", 96);
    \u0275\u0275elementStart(13, "button", 97);
    \u0275\u0275listener("click", function LccComponent_div_37_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.modalDialog.onConfirm ? ctx_r3.modalDialog.onConfirm() : ctx_r3.modalDialog.show = false);
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r3.modalDialog.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.modalDialog.type === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.modalDialog.type === "warning" || ctx_r3.modalDialog.type === "confirm");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.modalDialog.type === "error");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.modalDialog.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.modalDialog.message);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.modalDialog.details && ctx_r3.modalDialog.details.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.modalDialog.cancelText);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.modalDialog.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.modalDialog.confirmText || "OK", " ");
  }
}
var LccComponent = class _LccComponent {
  constructor(lccService, reportsService, distributionService, router) {
    this.lccService = lccService;
    this.reportsService = reportsService;
    this.distributionService = distributionService;
    this.router = router;
  }
  lccService;
  reportsService;
  distributionService;
  router;
  items = [];
  searchText = "";
  subscription;
  modalDialog = {
    show: false,
    type: "success",
    title: "",
    message: ""
  };
  ngOnInit() {
    this.subscription = this.lccService.items$.subscribe((items) => {
      this.items = items;
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  get totalItems() {
    return this.items.length;
  }
  get totalPieces() {
    return this.items.reduce((total, item) => total + (Number(item.quantity) || 0), 0);
  }
  get filteredItems() {
    const search = this.searchText.trim().toLowerCase();
    if (!search) {
      return this.items;
    }
    return this.items.filter((item) => item.productId && item.productId.toLowerCase().includes(search) || item.name && item.name.toLowerCase().includes(search) || item.switchedBy && item.switchedBy.toLowerCase().includes(search) || item.location && item.location.toLowerCase().includes(search) || item.date && item.date.toLowerCase().includes(search));
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
  // ==================== EDIT LCC ITEM ====================
  showEditModal = false;
  selectedEditItem = null;
  editForm = {
    quantity: 1,
    switchedBy: "",
    date: "",
    location: ""
  };
  openEditModal(item) {
    this.selectedEditItem = item;
    this.editForm = {
      quantity: item.quantity,
      switchedBy: item.switchedBy || "",
      date: item.date || "",
      location: item.location || ""
    };
    this.showEditModal = true;
  }
  closeEditModal() {
    this.showEditModal = false;
    this.selectedEditItem = null;
  }
  confirmSaveEdit() {
    if (!this.selectedEditItem) {
      return;
    }
    const qty = Number(this.editForm.quantity);
    const switchedBy = this.editForm.switchedBy.trim();
    if (!Number.isSafeInteger(qty) || qty < 1) {
      this.showWarning("Invalid Quantity", "Please enter a valid positive quantity.");
      return;
    }
    if (!switchedBy) {
      this.showWarning("Switched By Required", "Please enter who updated/switched this stock.");
      return;
    }
    const prevQty = this.selectedEditItem.quantity;
    const updatedItem = __spreadProps(__spreadValues({}, this.selectedEditItem), {
      quantity: qty,
      switchedBy,
      date: this.editForm.date || this.selectedEditItem.date,
      location: this.editForm.location || this.selectedEditItem.location,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    this.lccService.updateItem(updatedItem);
    this.reportsService.recordEntry({
      productId: updatedItem.productId || "",
      productName: updatedItem.name,
      eventType: "STOCK_TRANSFERRED",
      eventTitle: "LCC Stock Updated",
      quantityChange: qty - prevQty,
      previousStock: prevQty,
      newStock: qty,
      location: updatedItem.location,
      updatedBy: switchedBy,
      remarks: `LCC record updated by ${switchedBy}`,
      date: updatedItem.date
    });
    const label = `${updatedItem.productId} (${updatedItem.name})`;
    this.closeEditModal();
    this.showSuccess("LCC Record Updated", `${label} details have been updated successfully.`, [
      { label: "Product", value: label },
      { label: "LCC Stock", value: `${qty} PCS` },
      { label: "Switched By", value: switchedBy }
    ]);
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
  deleteTransfer(id) {
    const item = this.items.find((i) => i.id === id);
    const label = item ? `${item.productId ? item.productId + " (" + item.name + ")" : item.name}` : "this transfer record";
    this.showConfirm("Remove LCC Record?", `Are you sure you want to remove ${label} from LCC?`, () => {
      if (item) {
        this.reportsService.recordEntry({
          productId: item.productId || "",
          productName: item.name,
          eventType: "LCC_TRANSFER_DELETED",
          eventTitle: "LCC Transfer Removed",
          quantityChange: item.quantity,
          previousStock: 0,
          newStock: item.quantity,
          location: item.location || "LCC",
          updatedBy: item.switchedBy || "Admin",
          remarks: "Record deleted from LCC"
        });
      }
      this.lccService.deleteTransfer(id);
      this.showSuccess("Record Removed", `${label} was removed from LCC inventory.`);
    }, "Remove Record", "error");
  }
  // ==================== TRANSFER TO DISTRIBUTION ====================
  showDistributionTransferModal = false;
  distTransferForm = {
    selectedItemId: "",
    date: this.getTodayDate(),
    transferredBy: "",
    receiver: "",
    quantity: null
  };
  get availableLccItems() {
    return this.items.filter((item) => (Number(item.quantity) || 0) > 0);
  }
  get selectedDistTransferProduct() {
    if (!this.distTransferForm.selectedItemId) {
      return void 0;
    }
    return this.items.find((item) => String(item.id) === String(this.distTransferForm.selectedItemId));
  }
  get remainingDistTransferStock() {
    const product = this.selectedDistTransferProduct;
    if (!product)
      return 0;
    const qty = Number(this.distTransferForm.quantity) || 0;
    const remaining = product.quantity - qty;
    return remaining >= 0 ? remaining : 0;
  }
  getTodayDate() {
    const today = /* @__PURE__ */ new Date();
    return today.toISOString().split("T")[0];
  }
  formatDateForDistribution(dateStr) {
    if (!dateStr)
      return "";
    const parts = dateStr.split("-");
    if (parts.length === 3 && parts[0].length === 4) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return dateStr;
  }
  openDistributionTransferModal() {
    const available = this.availableLccItems;
    this.distTransferForm = {
      selectedItemId: available.length > 0 ? available[0].id : "",
      date: this.getTodayDate(),
      transferredBy: "",
      receiver: "",
      quantity: null
    };
    this.showDistributionTransferModal = true;
  }
  closeDistributionTransferModal() {
    this.showDistributionTransferModal = false;
  }
  confirmDistributionTransfer() {
    const product = this.selectedDistTransferProduct;
    const quantity = Number(this.distTransferForm.quantity);
    const transferredBy = this.distTransferForm.transferredBy.trim();
    const receiver = this.distTransferForm.receiver.trim();
    const transferDate = this.distTransferForm.date;
    if (!product) {
      this.showWarning("Select Product", "Please select a product from LCC inventory to transfer.");
      return;
    }
    if (!transferDate || !transferredBy || !receiver || !this.distTransferForm.quantity) {
      this.showWarning("Required Fields", "Please complete all required fields.");
      return;
    }
    if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > product.quantity) {
      this.showWarning("Invalid Quantity", `Enter a valid quantity within available LCC stock (${product.quantity} PCS).`);
      return;
    }
    const remainingQty = product.quantity - quantity;
    if (remainingQty <= 0) {
      this.lccService.deleteTransfer(product.id);
    } else {
      this.lccService.updateItem(__spreadProps(__spreadValues({}, product), {
        quantity: remainingQty
      }));
    }
    this.distributionService.addDistribution({
      product: product.name,
      productId: product.productId || "",
      quantity,
      volunteer: transferredBy,
      receiver,
      date: this.formatDateForDistribution(transferDate),
      status: "Assigned",
      location: product.location || "LCC"
    });
    this.reportsService.recordEntry({
      productId: product.productId || "",
      productName: product.name,
      eventType: "STOCK_TRANSFERRED",
      eventTitle: "Transferred to Distribution",
      quantityChange: -quantity,
      previousStock: product.quantity,
      newStock: Math.max(0, remainingQty),
      location: product.location || "LCC",
      updatedBy: transferredBy,
      remarks: `Transferred to Distribution (${receiver})`,
      date: transferDate
    });
    this.closeDistributionTransferModal();
    this.showSuccess("Transferred to Distribution Successfully!", "Product stock has been transferred from LCC to Distribution.", [
      { label: "Product", value: `${product.productId ? product.productId + " (" + product.name + ")" : product.name}` },
      { label: "Quantity Transferred", value: `${quantity} PCS` },
      { label: "Remaining LCC Stock", value: `${Math.max(0, remainingQty)} PCS` },
      { label: "Transferred By", value: transferredBy },
      { label: "Receiver / Destination", value: receiver }
    ]);
  }
  resetAllData() {
    this.showConfirm("Reset All Data?", "Are you sure you want to reset and clear all entered products and transfer data? This action cannot be undone.", () => {
      try {
        if (typeof window !== "undefined" && window.localStorage) {
          localStorage.removeItem("warehouse_products");
          localStorage.removeItem("lcc_transferred_items");
          localStorage.removeItem("lcc_distribution_records");
          localStorage.removeItem("lcc_reports_records");
        }
      } catch (e) {
        console.error("Failed to clear data", e);
      }
      this.items = [];
      this.lccService.clearAll();
      this.distributionService.clearAll();
      this.reportsService.clearAllRecords();
      this.showSuccess("Data Reset Complete", "All entered products, LCC items, and report records have been cleared successfully.");
    }, "Yes, Reset All", "error");
  }
  goBackToProducts() {
    this.router.navigate(["/products"]);
  }
  trackByTransferId(index, item) {
    return item.id;
  }
  static \u0275fac = function LccComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LccComponent)(\u0275\u0275directiveInject(LccService), \u0275\u0275directiveInject(ReportsService), \u0275\u0275directiveInject(DistributionService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LccComponent, selectors: [["app-lcc"]], decls: 38, vars: 8, consts: [["emptyLcc", ""], ["distTransferNgForm", "ngForm"], [1, "lcc-page"], [1, "lcc-header"], [1, "header-text"], [1, "header-actions"], ["type", "button", "title", "Reset and clear all entered data", 1, "reset-data-btn", 3, "click"], [1, "lcc-register"], [1, "stock-summary"], [1, "summary-card"], [1, "summary-label"], [1, "lcc-toolbar"], ["type", "search", "placeholder", "Search by Product, ID, Switched By, or location...", "aria-label", "Search LCC items", 1, "lcc-search", 3, "ngModelChange", "ngModel"], ["class", "products-grid", 4, "ngIf", "ngIfElse"], [1, "switch-distribution-container"], ["type", "button", 1, "switch-distribution-btn", 3, "click"], [1, "btn-icon"], [1, "btn-arrow"], ["class", "modal-overlay transfer-overlay", 3, "click", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["class", "modal-overlay app-dialog-overlay", 3, "click", 4, "ngIf"], [1, "products-grid"], ["class", "product-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "product-card"], [1, "product-details"], ["class", "product-id-badge", 4, "ngIf"], [4, "ngIf"], [1, "stock-value-highlight"], ["class", "product-low-stock-alert", 4, "ngIf"], [1, "product-actions"], ["type", "button", 1, "edit-lcc-btn", 3, "click"], [1, "product-id-badge"], [1, "product-low-stock-alert"], [1, "alert-pulse-dot"], [1, "empty-state"], [1, "empty-icon"], ["type", "button", "class", "empty-action-btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "empty-action-btn", 3, "click"], [1, "modal-overlay", "transfer-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "distTransferTitle", 1, "transfer-modal", 3, "click"], [1, "transfer-header"], ["id", "distTransferTitle"], ["type", "button", "aria-label", "Close transfer form", 1, "modal-close-btn", 3, "click"], [1, "transfer-form", 3, "ngSubmit"], [1, "form-field"], ["for", "distTransferProductId"], ["id", "distTransferProductId", "name", "distTransferProductId", "required", "", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "distTransferProduct"], ["id", "distTransferProduct", "name", "distTransferProduct", "required", "", 3, "ngModelChange", "ngModel"], ["class", "available-stock-banner", 4, "ngIf"], ["for", "distTransferDate"], ["id", "distTransferDate", "type", "date", "name", "date", "required", "", 3, "ngModelChange", "ngModel"], ["for", "distTransferredBy"], ["id", "distTransferredBy", "type", "text", "name", "transferredBy", "placeholder", "Enter volunteer or staff name (e.g., Madhan)", "required", "", 3, "ngModelChange", "ngModel"], ["for", "distReceiver"], ["id", "distReceiver", "type", "text", "name", "receiver", "placeholder", "Enter receiver name or distribution center", "required", "", 3, "ngModelChange", "ngModel"], ["for", "distTransferQuantity"], ["id", "distTransferQuantity", "type", "number", "name", "quantity", "min", "1", "step", "1", "placeholder", "Enter quantity", "required", "", 3, "ngModelChange", "ngModel", "max"], ["class", "field-help", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "cancel-btn", 3, "click"], ["type", "submit", 1, "confirm-transfer-btn", 3, "disabled"], [3, "value"], [1, "available-stock-banner"], [1, "stock-info-item"], [1, "stock-info-label"], [1, "stock-info-value"], [1, "field-help"], [1, "modal-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "editLccTitle", 1, "product-modal", "edit-lcc-modal", 3, "click"], [1, "modal-header"], ["id", "editLccTitle"], ["type", "button", "aria-label", "Close edit form", 1, "modal-close-btn", 3, "click"], [1, "product-form", 3, "ngSubmit"], ["type", "text", "disabled", "", 1, "input-disabled", 3, "value"], ["for", "editQuantity"], ["id", "editQuantity", "type", "number", "min", "1", "name", "quantity", "required", "", 3, "ngModelChange", "ngModel"], ["for", "editSwitchedBy"], ["id", "editSwitchedBy", "type", "text", "name", "switchedBy", "required", "", "placeholder", "Enter name (e.g., Madhan)", 3, "ngModelChange", "ngModel"], ["for", "editDate"], ["id", "editDate", "type", "date", "name", "date", "required", "", 3, "ngModelChange", "ngModel"], ["for", "editLocation"], ["id", "editLocation", "type", "text", "name", "location", "placeholder", "Enter location", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "save-btn"], [1, "modal-overlay", "app-dialog-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "product-modal", "app-dialog-modal", 3, "click"], [1, "dialog-icon-wrapper", 3, "ngClass"], ["class", "dialog-icon success", 4, "ngIf"], ["class", "dialog-icon warning", 4, "ngIf"], ["class", "dialog-icon error", 4, "ngIf"], [1, "dialog-content"], ["class", "dialog-message", 4, "ngIf"], ["class", "dialog-details-card", 4, "ngIf"], [1, "dialog-actions"], ["type", "button", "class", "cancel-btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "dialog-confirm-btn", 3, "click", "ngClass"], [1, "dialog-icon", "success"], [1, "dialog-icon", "warning"], [1, "dialog-icon", "error"], [1, "dialog-message"], [1, "dialog-details-card"], ["class", "detail-row", 4, "ngFor", "ngForOf"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"]], template: function LccComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "header", 3)(2, "div", 4)(3, "h1");
      \u0275\u0275text(4, "LCC Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Manage and track products transferred from warehouse to LCC inventory.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
      \u0275\u0275listener("click", function LccComponent_Template_button_click_8_listener() {
        return ctx.resetAllData();
      });
      \u0275\u0275text(9, " \u21BA Reset Data ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "section", 7)(11, "div", 8)(12, "div", 9)(13, "span", 10);
      \u0275\u0275text(14, "Total Pieces in LCC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h2");
      \u0275\u0275text(16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 9)(18, "span", 10);
      \u0275\u0275text(19, "Total LCC Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "h2");
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 11)(23, "input", 12);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function LccComponent_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(24, LccComponent_div_24_Template, 2, 2, "div", 13)(25, LccComponent_ng_template_25_Template, 8, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(27, "div", 14)(28, "button", 15);
      \u0275\u0275listener("click", function LccComponent_Template_button_click_28_listener() {
        return ctx.openDistributionTransferModal();
      });
      \u0275\u0275elementStart(29, "span", 16);
      \u0275\u0275text(30, "\u21C4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span");
      \u0275\u0275text(32, "Move to Distribution");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span", 17);
      \u0275\u0275text(34, "\u2192");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(35, LccComponent_div_35_Template, 61, 12, "div", 18)(36, LccComponent_div_36_Template, 42, 7, "div", 19)(37, LccComponent_div_37_Template, 15, 10, "div", 20);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const emptyLcc_r14 = \u0275\u0275reference(26);
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate(ctx.totalPieces);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.totalItems);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredItems.length > 0)("ngIfElse", emptyLcc_r14);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.showDistributionTransferModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEditModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.modalDialog.show);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, NgForm, DatePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.lcc-page[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  min-width: 0;\n  padding: 40px 36px;\n  background: #ffffff;\n  color: #263238;\n}\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%] {\n  font: inherit;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.lcc-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.header-text[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.lcc-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: #222d3d;\n  font-size: clamp(28px, 3vw, 40px);\n  font-weight: 750;\n}\n.lcc-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #7b8490;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.reset-data-btn[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  border: 1.5px solid #fecaca;\n  border-radius: 10px;\n  background: #fff5f5;\n  color: #dc2626;\n  font-weight: 700;\n  font-size: 13.5px;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n.reset-data-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #f87171;\n  color: #b91c1c;\n  transform: translateY(-1px);\n}\n.switch-stock-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 13px 20px;\n  border: 1px solid #ffca28;\n  border-radius: 10px;\n  background: #ffca28;\n  color: #263238;\n  font-weight: 700;\n  white-space: nowrap;\n  transition: background 0.2s ease, transform 0.15s ease;\n}\n.switch-stock-btn[_ngcontent-%COMP%]:hover {\n  background: #f2b900;\n  transform: translateY(-1px);\n}\n.lcc-register[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 28px;\n  border: 1px solid #eeece5;\n  border-radius: 20px;\n  background: #ffffff;\n}\n.stock-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n  margin-bottom: 26px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 20px;\n  border: 1px solid #fae69e;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff8dc 0%,\n      #fffdf8 45px,\n      #ffffff 90px);\n}\n.summary-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3.5px;\n  background:\n    linear-gradient(\n      90deg,\n      #ffe082,\n      #ffd54f);\n}\n.summary-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  color: #4b5563;\n  font-size: 13px;\n  font-weight: 600;\n}\n.summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #263442;\n  font-size: 28px;\n  font-weight: 750;\n}\n.lcc-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.lcc-search[_ngcontent-%COMP%] {\n  display: block;\n  width: min(100%, 460px);\n  min-width: 0;\n  padding: 13px 15px;\n  border: 1px solid #e6e4de;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #263442;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.lcc-search[_ngcontent-%COMP%]::placeholder {\n  color: #9aa1aa;\n}\n.lcc-search[_ngcontent-%COMP%]:focus {\n  border-color: #d6a800;\n  box-shadow: 0 0 0 3px rgba(255, 202, 40, 0.16);\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  align-items: start;\n  gap: 22px;\n}\n.product-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #dfd8cb;\n  border-radius: 18px;\n  background: #ffffff;\n  box-shadow: 0 4px 16px rgba(34, 45, 61, 0.05), 0 1px 3px rgba(34, 45, 61, 0.04);\n  transition:\n    transform 0.22s ease,\n    box-shadow 0.22s ease,\n    border-color 0.22s ease;\n}\n.product-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3.5px;\n  background:\n    linear-gradient(\n      90deg,\n      #ffe082,\n      #ffd54f);\n  z-index: 2;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: #ffd54f;\n  box-shadow: 0 12px 28px rgba(34, 45, 61, 0.1), 0 3px 8px rgba(214, 168, 0, 0.14);\n}\n.product-details[_ngcontent-%COMP%] {\n  padding: 22px;\n}\n.product-id-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding: 4px 10px;\n  border-radius: 7px;\n  background: #fff3c4;\n  border: 1px solid #ffe082;\n  color: #785b00;\n  font-size: 11.5px;\n  font-weight: 750;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n}\n.product-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  color: #111827;\n  font-size: 20px;\n  font-weight: 750;\n  line-height: 1.35;\n  overflow-wrap: anywhere;\n}\n.product-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin: 0;\n  padding: 12px 0;\n  border-bottom: 1px solid #f0eee6;\n  font-size: 13px;\n  line-height: 1.5;\n}\n.product-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #374151;\n  font-weight: 650;\n}\n.product-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #1f2937;\n  font-weight: 600;\n  overflow-wrap: anywhere;\n}\n.stock-value-highlight[_ngcontent-%COMP%] {\n  font-weight: 750 !important;\n  color: #1e293b !important;\n  background: #fff8e1;\n  border: 1px solid #ffecb3;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.product-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 14px 22px 18px;\n  border-top: 1px solid #f5f2eb;\n  background: #fffdfa;\n  display: flex;\n  gap: 10px;\n}\n.edit-lcc-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 9px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #374151;\n  font-size: 12px;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.edit-lcc-btn[_ngcontent-%COMP%]:hover {\n  border-color: #f0c326;\n  background: #fffdf5;\n  color: #111827;\n  transform: translateY(-1px);\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);\n}\n.remove-record-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 9px 14px;\n  border: 1px solid #e5dcc7;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #8a7345;\n  font-size: 12px;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.remove-record-btn[_ngcontent-%COMP%]:hover {\n  background: #fff3cd;\n  color: #5d4615;\n  border-color: #ffd875;\n}\n.empty-state[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  text-align: center;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 46px;\n  margin-bottom: 14px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #263442;\n  font-size: 20px;\n  font-weight: 700;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 440px;\n  margin: 0 auto 20px;\n  color: #7b8490;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.empty-action-btn[_ngcontent-%COMP%] {\n  padding: 11px 22px;\n  border: 1px solid #ffca28;\n  border-radius: 10px;\n  background: #ffca28;\n  color: #263238;\n  font-size: 13.5px;\n  font-weight: 700;\n  transition: background 0.2s ease;\n}\n.empty-action-btn[_ngcontent-%COMP%]:hover {\n  background: #f2b900;\n}\n@media (max-width: 1100px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .lcc-page[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .lcc-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .switch-stock-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .stock-summary[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .lcc-search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.stock-value-highlight.stock-danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 800;\n}\n.product-low-stock-alert[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 8px;\n  margin-bottom: 4px;\n  padding: 5px 10px;\n  border-radius: 8px;\n  background: #fee2e2;\n  border: 1px solid #fca5a5;\n  color: #dc2626;\n  font-size: 11.5px;\n  font-weight: 750;\n  animation: _ngcontent-%COMP%_lccWarningBlink 1.2s infinite ease-in-out;\n}\n.product-low-stock-alert[_ngcontent-%COMP%]   .alert-pulse-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background-color: #dc2626;\n  box-shadow: 0 0 6px #dc2626;\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_dotFlash 1.2s infinite ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_lccWarningBlink {\n  0%, 100% {\n    opacity: 1;\n    background: #fee2e2;\n    box-shadow: 0 0 8px rgba(220, 38, 38, 0.25);\n  }\n  50% {\n    opacity: 0.55;\n    background: #fff5f5;\n    box-shadow: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_dotFlash {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(0.6);\n    opacity: 0.3;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(30, 24, 10, 0.42);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.product-modal[_ngcontent-%COMP%] {\n  width: min(100%, 700px);\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 28px;\n  border: 1px solid #eeece5;\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.18);\n}\n.app-dialog-modal[_ngcontent-%COMP%] {\n  width: min(100%, 480px);\n  padding: 30px 26px;\n  text-align: center;\n  border-radius: 22px;\n}\n.dialog-icon-wrapper[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto 16px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  font-size: 28px;\n}\n.dialog-icon-wrapper.success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n  border: 2px solid #86efac;\n}\n.dialog-icon-wrapper.warning[_ngcontent-%COMP%], \n.dialog-icon-wrapper.confirm[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n  border: 2px solid #fde68a;\n}\n.dialog-icon-wrapper.error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n  border: 2px solid #fca5a5;\n}\n.dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #1e293b;\n  font-size: 21px;\n  font-weight: 750;\n}\n.dialog-message[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  color: #64748b;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.dialog-details-card[_ngcontent-%COMP%] {\n  text-align: left;\n  background: #fffdf2;\n  border: 1.5px solid #f6e8b8;\n  border-radius: 12px;\n  padding: 14px 18px;\n  margin: 16px 0 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.dialog-details-card[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  font-size: 13.5px;\n}\n.dialog-details-card[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-weight: 500;\n}\n.dialog-details-card[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: #1c1917;\n  font-weight: 750;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 20px;\n}\n.dialog-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 11px 22px;\n  border: 1.5px solid #d1d5db;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #4b5563;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.dialog-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.dialog-confirm-btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 11px 28px;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n}\n.dialog-confirm-btn.success[_ngcontent-%COMP%], \n.dialog-confirm-btn.warning[_ngcontent-%COMP%], \n.dialog-confirm-btn.confirm[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ffd740 0%,\n      #ffca28 100%);\n  color: #263238;\n  border: 1.5px solid #e5b800;\n  box-shadow: 0 3px 10px rgba(255, 202, 40, 0.32);\n}\n.dialog-confirm-btn.success[_ngcontent-%COMP%]:hover, \n.dialog-confirm-btn.warning[_ngcontent-%COMP%]:hover, \n.dialog-confirm-btn.confirm[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      180deg,\n      #ffca28 0%,\n      #f2b900 100%);\n  box-shadow: 0 5px 16px rgba(242, 185, 0, 0.42);\n  transform: translateY(-1px);\n}\n.dialog-confirm-btn.error[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #ffffff;\n  border: 1.5px solid #b91c1c;\n  box-shadow: 0 3px 10px rgba(220, 38, 38, 0.25);\n}\n.dialog-confirm-btn.error[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n  box-shadow: 0 5px 16px rgba(220, 38, 38, 0.35);\n  transform: translateY(-1px);\n}\n.edit-lcc-modal[_ngcontent-%COMP%] {\n  width: min(100%, 540px);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 22px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 20px;\n  font-weight: 750;\n  color: #1e293b;\n}\n.modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #64748b;\n}\n.modal-close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 24px;\n  line-height: 1;\n  color: #94a3b8;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n}\n.modal-close-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #1e293b;\n}\n.product-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1.5px solid #d1d5db;\n  border-radius: 9px;\n  background: #f9fafb;\n  font-size: 14px;\n  color: #111827;\n  outline: none;\n  transition: all 0.2s ease;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background: #ffffff;\n  border-color: #ffd54f;\n  box-shadow: 0 0 0 3px rgba(255, 213, 79, 0.25);\n}\n.form-field[_ngcontent-%COMP%]   input.input-disabled[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n  border-color: #e2e8f0;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 8px;\n  padding-top: 16px;\n  border-top: 1px solid #f1f5f9;\n}\n.form-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  border: 1px solid #d1d5db;\n  border-radius: 9px;\n  background: #ffffff;\n  color: #4b5563;\n  font-size: 13.5px;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.form-actions[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.form-actions[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  border: 1px solid #ffca28;\n  border-radius: 9px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffd740 0%,\n      #ffca28 100%);\n  color: #263238;\n  font-size: 13.5px;\n  font-weight: 700;\n  box-shadow: 0 3px 10px rgba(255, 202, 40, 0.32);\n  transition: all 0.2s ease;\n}\n.form-actions[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      180deg,\n      #ffca28 0%,\n      #f2b900 100%);\n  transform: translateY(-1px);\n}\n@media (max-width: 1100px) {\n  .lcc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n    gap: 18px;\n  }\n}\n@media (max-width: 768px) {\n  .lcc-page[_ngcontent-%COMP%] {\n    padding: 20px 16px 36px;\n  }\n  .lcc-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    margin-bottom: 24px;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n  .switch-stock-btn[_ngcontent-%COMP%], \n   .reset-data-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    text-align: center;\n  }\n  .lcc-register[_ngcontent-%COMP%] {\n    padding: 16px;\n    border-radius: 14px;\n  }\n  .stock-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .lcc-toolbar[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .lcc-search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .lcc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n    gap: 16px;\n  }\n  .modal-overlay[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .modal-dialog[_ngcontent-%COMP%], \n   .transfer-modal[_ngcontent-%COMP%], \n   .edit-modal[_ngcontent-%COMP%], \n   .lcc-modal[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: auto;\n    padding: 20px 16px !important;\n    border-radius: 16px !important;\n    max-height: 92vh !important;\n  }\n}\n@media (max-width: 540px) {\n  .lcc-page[_ngcontent-%COMP%] {\n    padding: 14px 12px 28px;\n  }\n  .lcc-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .lcc-register[_ngcontent-%COMP%] {\n    padding: 14px 12px;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    padding: 12px 14px 16px;\n    gap: 8px;\n  }\n  .card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 80px;\n    text-align: center;\n    justify-content: center;\n    padding: 9px 8px;\n    font-size: 12px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    gap: 8px;\n  }\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .switch-distribution-container[_ngcontent-%COMP%] {\n    right: 14px;\n    bottom: 16px;\n  }\n  .switch-distribution-btn[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n    font-size: 13px;\n    gap: 8px;\n  }\n}\n@media (max-width: 900px) {\n  .switch-distribution-container[_ngcontent-%COMP%] {\n    right: 18px;\n    bottom: 20px;\n  }\n  .switch-distribution-btn[_ngcontent-%COMP%] {\n    width: auto !important;\n    min-height: 44px;\n    padding: 10px 20px;\n    font-size: 13.5px;\n  }\n}\n.switch-distribution-container[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 28px;\n  bottom: 28px;\n  z-index: 990;\n  margin: 0;\n  padding: 0;\n  border: none;\n  pointer-events: none;\n}\n.switch-distribution-btn[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  min-height: 48px;\n  padding: 12px 24px;\n  border: 1.5px solid #d4a500;\n  border-radius: 50px;\n  background:\n    linear-gradient(\n      135deg,\n      #fff9e6 0%,\n      #ffefb8 45%,\n      #ffd54f 100%);\n  color: #2b2202;\n  font-size: 14.5px;\n  font-weight: 750;\n  cursor: pointer;\n  box-shadow: 0 8px 24px rgba(217, 165, 0, 0.38), 0 3px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);\n  white-space: nowrap;\n}\n.switch-distribution-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #fff5cc 0%,\n      #ffe885 45%,\n      #ffca28 100%);\n  border-color: #bf9000;\n  box-shadow: 0 12px 30px rgba(217, 165, 0, 0.48), 0 4px 12px rgba(0, 0, 0, 0.14);\n  transform: translateY(-3px) scale(1.02);\n}\n.switch-distribution-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.98);\n  box-shadow: 0 4px 12px rgba(217, 165, 0, 0.3);\n}\n.switch-distribution-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  display: inline-block;\n}\n.switch-distribution-btn[_ngcontent-%COMP%]   .btn-arrow[_ngcontent-%COMP%] {\n  font-size: 16px;\n  transition: transform 0.2s ease;\n}\n.switch-distribution-btn[_ngcontent-%COMP%]:hover   .btn-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.transfer-overlay[_ngcontent-%COMP%] {\n  background: rgba(45, 36, 12, 0.38);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.transfer-modal[_ngcontent-%COMP%] {\n  width: min(100%, 650px);\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 30px;\n  border: 1.5px solid #fae8a4;\n  border-radius: 22px;\n  background: #ffffff;\n  color: #263238;\n  box-shadow: 0 24px 70px rgba(184, 134, 11, 0.16), 0 8px 24px rgba(0, 0, 0, 0.05);\n}\n.transfer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f9f0d4;\n}\n.transfer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  color: #263442;\n  font-size: 24px;\n  font-weight: 750;\n}\n.transfer-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #7b8490;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.transfer-header[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  flex-shrink: 0;\n  border: 1.5px solid #f2dfa0;\n  border-radius: 10px;\n  background: #fffdf5;\n  color: #5a4b16;\n  font-size: 24px;\n  line-height: 1;\n  transition: all 0.2s ease;\n}\n.transfer-header[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%]:hover {\n  border-color: #e5b300;\n  background: #ffeb99;\n  color: #263238;\n}\n.transfer-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #374151;\n  font-size: 13px;\n  font-weight: 650;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #c53636;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  min-height: 46px;\n  padding: 11px 14px;\n  border: 1.5px solid #ebdca8;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #293541;\n  font-family: inherit;\n  font-size: 14px;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  appearance: auto;\n  cursor: pointer;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover, \n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  border-color: #dfb83b;\n  background: #fffef8;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #e5a900;\n  background: #fffdf2;\n  box-shadow: 0 0 0 3.5px rgba(255, 202, 40, 0.25);\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #ffffff;\n  color: #293541;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:disabled {\n  color: #a4abb5;\n  background: #faf8f2;\n}\n.available-stock-banner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  padding: 14px 18px;\n  border: 1.5px solid #f6e3a4;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #fffdf2 0%,\n      #fff9e6 100%);\n}\n.stock-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stock-info-label[_ngcontent-%COMP%] {\n  color: #8c7830;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stock-info-value[_ngcontent-%COMP%] {\n  color: #263442;\n  font-size: 15px;\n  font-weight: 750;\n}\n.field-help[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  color: #8c7830;\n  font-size: 12px;\n  font-weight: 600;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 6px;\n  padding-top: 18px;\n  border-top: 1px solid #f7efd7;\n}\n.transfer-modal[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 11px 22px;\n  border: 1.5px solid #ebdca8;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #5a4b16;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.transfer-modal[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #fff8e1;\n  border-color: #dfb83b;\n  color: #3b2f06;\n}\n.confirm-transfer-btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 11px 24px;\n  border: 1.5px solid #e5b800;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffd740 0%,\n      #ffca28 100%);\n  color: #263238;\n  font-size: 13.5px;\n  font-weight: 750;\n  cursor: pointer;\n  box-shadow: 0 3px 10px rgba(255, 202, 40, 0.32);\n  transition: all 0.2s ease;\n}\n.confirm-transfer-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      180deg,\n      #ffca28 0%,\n      #f2b900 100%);\n  border-color: #cc9600;\n  box-shadow: 0 6px 18px rgba(242, 185, 0, 0.45);\n  transform: translateY(-1px);\n}\n.confirm-transfer-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  box-shadow: none;\n  transform: none;\n}\n/*# sourceMappingURL=lcc.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LccComponent, [{
    type: Component,
    args: [{ selector: "app-lcc", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="lcc-page">

  <!-- Page Header -->
  <header class="lcc-header">
    <div class="header-text">
      <h1>LCC Management</h1>
      <p>Manage and track products transferred from warehouse to LCC inventory.</p>
    </div>

    <div class="header-actions">
      <button
        type="button"
        class="reset-data-btn"
        (click)="resetAllData()"
        title="Reset and clear all entered data"
      >
        \u21BA Reset Data
      </button>
    </div>
  </header>

  <!-- LCC Register -->
  <section class="lcc-register">

    <!-- Stock Summary -->
    <div class="stock-summary">
        <div class="summary-card">
        <span class="summary-label">Total Pieces in LCC</span>
        <h2>{{ totalPieces }}</h2>
      </div>

      <div class="summary-card">
        <span class="summary-label">Total LCC Items</span>
        <h2>{{ totalItems }}</h2>
      </div>

      
    </div>

    <!-- Search Toolbar -->
    <div class="lcc-toolbar">
      <input
        type="search"
        class="lcc-search"
        placeholder="Search by Product, ID, Switched By, or location..."
        [(ngModel)]="searchText"
        aria-label="Search LCC items"
      />
    </div>

    <!-- Transferred Products Grid (as per Product Page) -->
    <div
      class="products-grid"
      *ngIf="filteredItems.length > 0; else emptyLcc"
    >
      <article
        class="product-card"
        *ngFor="let item of filteredItems; trackBy: trackByTransferId"
      >
        <!-- Product Details -->
        <div class="product-details">

          <span class="product-id-badge" *ngIf="item.productId">
            {{ item.productId }}
          </span>

          <h3>{{ item.name }}</h3>

          <p *ngIf="item.productId">
            <strong>Product ID:</strong>
            <span>{{ item.productId }}</span>
          </p>

          <p>
            <strong>LCC Stock:</strong>
            <span class="stock-value-highlight" [class.stock-danger]="item.quantity < 20">{{ item.quantity }} PCS</span>
          </p>

          <div class="product-low-stock-alert" *ngIf="item.quantity < 20">
            <span class="alert-pulse-dot"></span>
            About to update the product
          </div>

          <p>
            <strong>Transfer Date:</strong>
            <span>{{ item.date | date:'dd-MM-yyyy' }}</span>
          </p>

          <p>
            <strong>Switched By:</strong>
            <span>{{ item.switchedBy }}</span>
          </p>

          <p>
            <strong>Warehouse Location:</strong>
            <span>{{ item.location || 'Not assigned' }}</span>
          </p>

        </div>

        <!-- Card Actions -->
        <div class="product-actions">
          <button
            type="button"
            class="edit-lcc-btn"
            (click)="openEditModal(item)"
          >
            Edit
          </button>
          <!-- <button
            type="button"
            class="remove-record-btn"
            (click)="deleteTransfer(item.id)"
          >
            Split Record
          </button> -->
        </div>
      </article>
    </div>

    <!-- Empty State -->
    <ng-template #emptyLcc>
      <div class="empty-state">
        <div class="empty-icon">&#128230;</div>
        <h3>
          {{ searchText ? 'No matching LCC items found' : 'No LCC items transferred yet' }}
        </h3>
        <p>
          {{
            searchText
              ? 'Try searching by another product name, ID, or switched by.'
              : 'Transfer products from the warehouse using "Switch to LCC" on the Products page.'
          }}
        </p>
        <button
          type="button"
          class="empty-action-btn"
          *ngIf="!searchText"
          (click)="goBackToProducts()"
        >
          Go to Products
        </button>
      </div>
    </ng-template>

    <!-- Move to Distribution (Floating Button) -->
    <div class="switch-distribution-container">
      <button
        type="button"
        class="switch-distribution-btn"
        (click)="openDistributionTransferModal()"
      >
        <span class="btn-icon">\u21C4</span>
        <span>Move to Distribution</span>
        <span class="btn-arrow">&rarr;</span>
      </button>
    </div>

  </section>

  <!-- Switch Stock to Distribution Modal -->
  <div
    class="modal-overlay transfer-overlay"
    *ngIf="showDistributionTransferModal"
    (click)="closeDistributionTransferModal()"
  >
    <section
      class="transfer-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="distTransferTitle"
      (click)="$event.stopPropagation()"
    >
      <!-- Modal Header -->
      <div class="transfer-header">
        <div>
          <h2 id="distTransferTitle">Switch Stock to Distribution</h2>
          <p>Transfer products from LCC to Distribution inventory.</p>
        </div>

        <button
          type="button"
          class="modal-close-btn"
          aria-label="Close transfer form"
          (click)="closeDistributionTransferModal()"
        >
          &times;
        </button>
      </div>

      <!-- Transfer Form -->
      <form
        class="transfer-form"
        #distTransferNgForm="ngForm"
        (ngSubmit)="confirmDistributionTransfer()"
      >
        <!-- Product ID Dropdown -->
        <div class="form-field">
          <label for="distTransferProductId">
            Product ID <span>*</span>
          </label>

          <select
            id="distTransferProductId"
            name="distTransferProductId"
            [(ngModel)]="distTransferForm.selectedItemId"
            required
          >
            <option value="" disabled>Select Product ID</option>
            <option
              *ngFor="let item of availableLccItems"
              [value]="item.id"
            >
              {{ (item.productId || 'N/A') + " - " + item.name }}
            </option>
          </select>
        </div>

        <!-- Product Name Dropdown -->
        <div class="form-field">
          <label for="distTransferProduct">
            Product Name <span>*</span>
          </label>

          <select
            id="distTransferProduct"
            name="distTransferProduct"
            [(ngModel)]="distTransferForm.selectedItemId"
            required
          >
            <option value="" disabled>Select Product Name</option>
            <option
              *ngFor="let item of availableLccItems"
              [value]="item.id"
            >
              {{ item.name + (item.productId ? ' - ' + item.productId : '') }}
            </option>
          </select>
        </div>

        <!-- Available Stock Banner -->
        <div class="available-stock-banner" *ngIf="selectedDistTransferProduct">
          <div class="stock-info-item">
            <span class="stock-info-label">Available LCC Stock</span>
            <strong class="stock-info-value">{{ remainingDistTransferStock }} PCS</strong>
          </div>
          <div class="stock-info-item">
            <span class="stock-info-label">Warehouse / LCC Location</span>
            <strong class="stock-info-value">{{ selectedDistTransferProduct.location || 'LCC Inventory' }}</strong>
          </div>
        </div>

        <!-- Date -->
        <div class="form-field">
          <label for="distTransferDate">Date <span>*</span></label>
          <input
            id="distTransferDate"
            type="date"
            name="date"
            [(ngModel)]="distTransferForm.date"
            required
          />
        </div>

        <!-- Transferred By / Volunteer -->
        <div class="form-field">
          <label for="distTransferredBy">Transferred By / Volunteer <span>*</span></label>
          <input
            id="distTransferredBy"
            type="text"
            name="transferredBy"
            [(ngModel)]="distTransferForm.transferredBy"
            placeholder="Enter volunteer or staff name (e.g., Madhan)"
            required
          />
        </div>

        <!-- Receiver / Destination -->
        <div class="form-field">
          <label for="distReceiver">Receiver / Destination <span>*</span></label>
          <input
            id="distReceiver"
            type="text"
            name="receiver"
            [(ngModel)]="distTransferForm.receiver"
            placeholder="Enter receiver name or distribution center"
            required
          />
        </div>

        <!-- Quantity -->
        <div class="form-field">
          <label for="distTransferQuantity">Quantity (PCS) <span>*</span></label>
          <input
            id="distTransferQuantity"
            type="number"
            name="quantity"
            [(ngModel)]="distTransferForm.quantity"
            min="1"
            [max]="selectedDistTransferProduct?.quantity ?? 1"
            step="1"
            placeholder="Enter quantity"
            required
          />
          <small class="field-help" *ngIf="selectedDistTransferProduct">
            Maximum available to transfer: {{ selectedDistTransferProduct.quantity }} PCS
          </small>
        </div>

        <!-- Form Actions -->
        <div class="form-actions">
          <button
            type="button"
            class="cancel-btn"
            (click)="closeDistributionTransferModal()"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="confirm-transfer-btn"
            [disabled]="
              distTransferNgForm.invalid ||
              !selectedDistTransferProduct ||
              !distTransferForm.quantity ||
              distTransferForm.quantity < 1 ||
              distTransferForm.quantity > (selectedDistTransferProduct?.quantity ?? 0)
            "
          >
            Confirm Transfer
          </button>
        </div>
      </form>
    </section>
  </div>

  <!-- Edit LCC Item Modal -->
  <div
    class="modal-overlay"
    *ngIf="showEditModal"
    (click)="closeEditModal()"
  >
    <section
      class="product-modal edit-lcc-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="editLccTitle"
      (click)="$event.stopPropagation()"
    >
      <div class="modal-header">
        <div>
          <h2 id="editLccTitle">Edit LCC Item</h2>
          <p>Update stock quantity or details for {{ selectedEditItem?.productId }} ({{ selectedEditItem?.name }}).</p>
        </div>
        <button
          type="button"
          class="modal-close-btn"
          aria-label="Close edit form"
          (click)="closeEditModal()"
        >
          &times;
        </button>
      </div>

      <form class="product-form" (ngSubmit)="confirmSaveEdit()">
        <div class="form-field">
          <label>Product</label>
          <input
            type="text"
            [value]="(selectedEditItem?.productId || '') + ' - ' + (selectedEditItem?.name || '')"
            disabled
            class="input-disabled"
          />
        </div>

        <div class="form-field">
          <label for="editQuantity">LCC Stock (PCS) <span>*</span></label>
          <input
            id="editQuantity"
            type="number"
            min="1"
            name="quantity"
            [(ngModel)]="editForm.quantity"
            required
          />
        </div>

        <div class="form-field">
          <label for="editSwitchedBy">Switched / Updated By <span>*</span></label>
          <input
            id="editSwitchedBy"
            type="text"
            name="switchedBy"
            [(ngModel)]="editForm.switchedBy"
            required
            placeholder="Enter name (e.g., Madhan)"
          />
        </div>

        <div class="form-field">
          <label for="editDate">Transfer Date <span>*</span></label>
          <input
            id="editDate"
            type="date"
            name="date"
            [(ngModel)]="editForm.date"
            required
          />
        </div>

        <div class="form-field">
          <label for="editLocation">Warehouse Location</label>
          <input
            id="editLocation"
            type="text"
            name="location"
            [(ngModel)]="editForm.location"
            placeholder="Enter location"
          />
        </div>

        <div class="form-actions">
          <button
            type="button"
            class="cancel-btn"
            (click)="closeEditModal()"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="save-btn"
          >
            Save Changes
          </button>
        </div>
      </form>
    </section>
  </div>

  <!-- Custom In-App Dialog / Notification / Confirm Modal -->
  <div
    class="modal-overlay app-dialog-overlay"
    *ngIf="modalDialog.show"
    (click)="modalDialog.onCancel ? modalDialog.onCancel() : modalDialog.show = false"
  >
    <section
      class="product-modal app-dialog-modal"
      role="dialog"
      aria-modal="true"
      (click)="$event.stopPropagation()"
    >
      <!-- Dialog Icon -->
      <div class="dialog-icon-wrapper" [ngClass]="modalDialog.type">
        <span *ngIf="modalDialog.type === 'success'" class="dialog-icon success">&#10003;</span>
        <span *ngIf="modalDialog.type === 'warning' || modalDialog.type === 'confirm'" class="dialog-icon warning">&#9888;</span>
        <span *ngIf="modalDialog.type === 'error'" class="dialog-icon error">&#10005;</span>
      </div>

      <div class="dialog-content">
        <h3>{{ modalDialog.title }}</h3>
        <p class="dialog-message" *ngIf="modalDialog.message">{{ modalDialog.message }}</p>

        <!-- Structured Details Card -->
        <div class="dialog-details-card" *ngIf="modalDialog.details && modalDialog.details.length > 0">
          <div class="detail-row" *ngFor="let item of modalDialog.details">
            <span class="detail-label">{{ item.label }}</span>
            <strong class="detail-value">{{ item.value }}</strong>
          </div>
        </div>
      </div>

      <!-- Dialog Action Buttons -->
      <div class="dialog-actions">
        <button
          type="button"
          class="cancel-btn"
          *ngIf="modalDialog.cancelText"
          (click)="modalDialog.onCancel ? modalDialog.onCancel() : modalDialog.show = false"
        >
          {{ modalDialog.cancelText }}
        </button>


        
        <button
          type="button"
          class="dialog-confirm-btn"
          [ngClass]="modalDialog.type"
          (click)="modalDialog.onConfirm ? modalDialog.onConfirm() : modalDialog.show = false"
        >
          {{ modalDialog.confirmText || 'OK' }}
        </button>
      </div>
    </section>
  </div>

</div>`, styles: ['/* src/app/pages/lcc/lcc.component.css */\n:host {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  box-sizing: border-box;\n}\n* {\n  box-sizing: border-box;\n}\n.lcc-page {\n  min-height: 80vh;\n  min-width: 0;\n  padding: 40px 36px;\n  background: #ffffff;\n  color: #263238;\n}\nbutton,\ninput {\n  font: inherit;\n}\nbutton {\n  cursor: pointer;\n}\n.lcc-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.header-text {\n  min-width: 0;\n}\n.lcc-header h1 {\n  margin: 0 0 10px;\n  color: #222d3d;\n  font-size: clamp(28px, 3vw, 40px);\n  font-weight: 750;\n}\n.lcc-header p {\n  margin: 0;\n  color: #7b8490;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.reset-data-btn {\n  padding: 12px 18px;\n  border: 1.5px solid #fecaca;\n  border-radius: 10px;\n  background: #fff5f5;\n  color: #dc2626;\n  font-weight: 700;\n  font-size: 13.5px;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n.reset-data-btn:hover {\n  background: #fee2e2;\n  border-color: #f87171;\n  color: #b91c1c;\n  transform: translateY(-1px);\n}\n.switch-stock-btn {\n  flex-shrink: 0;\n  padding: 13px 20px;\n  border: 1px solid #ffca28;\n  border-radius: 10px;\n  background: #ffca28;\n  color: #263238;\n  font-weight: 700;\n  white-space: nowrap;\n  transition: background 0.2s ease, transform 0.15s ease;\n}\n.switch-stock-btn:hover {\n  background: #f2b900;\n  transform: translateY(-1px);\n}\n.lcc-register {\n  min-width: 0;\n  padding: 28px;\n  border: 1px solid #eeece5;\n  border-radius: 20px;\n  background: #ffffff;\n}\n.stock-summary {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n  margin-bottom: 26px;\n}\n.summary-card {\n  position: relative;\n  overflow: hidden;\n  padding: 20px;\n  border: 1px solid #fae69e;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff8dc 0%,\n      #fffdf8 45px,\n      #ffffff 90px);\n}\n.summary-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3.5px;\n  background:\n    linear-gradient(\n      90deg,\n      #ffe082,\n      #ffd54f);\n}\n.summary-label {\n  display: block;\n  margin-bottom: 10px;\n  color: #4b5563;\n  font-size: 13px;\n  font-weight: 600;\n}\n.summary-card h2 {\n  margin: 0;\n  color: #263442;\n  font-size: 28px;\n  font-weight: 750;\n}\n.lcc-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.lcc-search {\n  display: block;\n  width: min(100%, 460px);\n  min-width: 0;\n  padding: 13px 15px;\n  border: 1px solid #e6e4de;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #263442;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.lcc-search::placeholder {\n  color: #9aa1aa;\n}\n.lcc-search:focus {\n  border-color: #d6a800;\n  box-shadow: 0 0 0 3px rgba(255, 202, 40, 0.16);\n}\n.products-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  align-items: start;\n  gap: 22px;\n}\n.product-card {\n  position: relative;\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #dfd8cb;\n  border-radius: 18px;\n  background: #ffffff;\n  box-shadow: 0 4px 16px rgba(34, 45, 61, 0.05), 0 1px 3px rgba(34, 45, 61, 0.04);\n  transition:\n    transform 0.22s ease,\n    box-shadow 0.22s ease,\n    border-color 0.22s ease;\n}\n.product-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3.5px;\n  background:\n    linear-gradient(\n      90deg,\n      #ffe082,\n      #ffd54f);\n  z-index: 2;\n}\n.product-card:hover {\n  transform: translateY(-4px);\n  border-color: #ffd54f;\n  box-shadow: 0 12px 28px rgba(34, 45, 61, 0.1), 0 3px 8px rgba(214, 168, 0, 0.14);\n}\n.product-details {\n  padding: 22px;\n}\n.product-id-badge {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding: 4px 10px;\n  border-radius: 7px;\n  background: #fff3c4;\n  border: 1px solid #ffe082;\n  color: #785b00;\n  font-size: 11.5px;\n  font-weight: 750;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n}\n.product-details h3 {\n  margin: 0 0 18px;\n  color: #111827;\n  font-size: 20px;\n  font-weight: 750;\n  line-height: 1.35;\n  overflow-wrap: anywhere;\n}\n.product-details p {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin: 0;\n  padding: 12px 0;\n  border-bottom: 1px solid #f0eee6;\n  font-size: 13px;\n  line-height: 1.5;\n}\n.product-details p strong {\n  flex-shrink: 0;\n  color: #374151;\n  font-weight: 650;\n}\n.product-details p span {\n  text-align: right;\n  color: #1f2937;\n  font-weight: 600;\n  overflow-wrap: anywhere;\n}\n.stock-value-highlight {\n  font-weight: 750 !important;\n  color: #1e293b !important;\n  background: #fff8e1;\n  border: 1px solid #ffecb3;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.product-actions {\n  display: flex;\n  gap: 10px;\n  padding: 14px 22px 18px;\n  border-top: 1px solid #f5f2eb;\n  background: #fffdfa;\n  display: flex;\n  gap: 10px;\n}\n.edit-lcc-btn {\n  flex: 1;\n  padding: 9px 14px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #374151;\n  font-size: 12px;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.edit-lcc-btn:hover {\n  border-color: #f0c326;\n  background: #fffdf5;\n  color: #111827;\n  transform: translateY(-1px);\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);\n}\n.remove-record-btn {\n  flex: 1;\n  padding: 9px 14px;\n  border: 1px solid #e5dcc7;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #8a7345;\n  font-size: 12px;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.remove-record-btn:hover {\n  background: #fff3cd;\n  color: #5d4615;\n  border-color: #ffd875;\n}\n.empty-state {\n  padding: 60px 20px;\n  text-align: center;\n}\n.empty-icon {\n  font-size: 46px;\n  margin-bottom: 14px;\n}\n.empty-state h3 {\n  margin: 0 0 8px;\n  color: #263442;\n  font-size: 20px;\n  font-weight: 700;\n}\n.empty-state p {\n  max-width: 440px;\n  margin: 0 auto 20px;\n  color: #7b8490;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.empty-action-btn {\n  padding: 11px 22px;\n  border: 1px solid #ffca28;\n  border-radius: 10px;\n  background: #ffca28;\n  color: #263238;\n  font-size: 13.5px;\n  font-weight: 700;\n  transition: background 0.2s ease;\n}\n.empty-action-btn:hover {\n  background: #f2b900;\n}\n@media (max-width: 1100px) {\n  .products-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .lcc-page {\n    padding: 24px 16px;\n  }\n  .lcc-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .switch-stock-btn {\n    width: 100%;\n  }\n  .stock-summary {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .products-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .lcc-search {\n    width: 100%;\n  }\n}\n.stock-value-highlight.stock-danger {\n  color: #dc2626;\n  font-weight: 800;\n}\n.product-low-stock-alert {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 8px;\n  margin-bottom: 4px;\n  padding: 5px 10px;\n  border-radius: 8px;\n  background: #fee2e2;\n  border: 1px solid #fca5a5;\n  color: #dc2626;\n  font-size: 11.5px;\n  font-weight: 750;\n  animation: lccWarningBlink 1.2s infinite ease-in-out;\n}\n.product-low-stock-alert .alert-pulse-dot {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background-color: #dc2626;\n  box-shadow: 0 0 6px #dc2626;\n  flex-shrink: 0;\n  animation: dotFlash 1.2s infinite ease-in-out;\n}\n@keyframes lccWarningBlink {\n  0%, 100% {\n    opacity: 1;\n    background: #fee2e2;\n    box-shadow: 0 0 8px rgba(220, 38, 38, 0.25);\n  }\n  50% {\n    opacity: 0.55;\n    background: #fff5f5;\n    box-shadow: none;\n  }\n}\n@keyframes dotFlash {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(0.6);\n    opacity: 0.3;\n  }\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(30, 24, 10, 0.42);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.product-modal {\n  width: min(100%, 700px);\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 28px;\n  border: 1px solid #eeece5;\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.18);\n}\n.app-dialog-modal {\n  width: min(100%, 480px);\n  padding: 30px 26px;\n  text-align: center;\n  border-radius: 22px;\n}\n.dialog-icon-wrapper {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto 16px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  font-size: 28px;\n}\n.dialog-icon-wrapper.success {\n  background: #dcfce7;\n  color: #15803d;\n  border: 2px solid #86efac;\n}\n.dialog-icon-wrapper.warning,\n.dialog-icon-wrapper.confirm {\n  background: #fef3c7;\n  color: #b45309;\n  border: 2px solid #fde68a;\n}\n.dialog-icon-wrapper.error {\n  background: #fee2e2;\n  color: #dc2626;\n  border: 2px solid #fca5a5;\n}\n.dialog-content h3 {\n  margin: 0 0 8px;\n  color: #1e293b;\n  font-size: 21px;\n  font-weight: 750;\n}\n.dialog-message {\n  margin: 0 0 16px;\n  color: #64748b;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.dialog-details-card {\n  text-align: left;\n  background: #fffdf2;\n  border: 1.5px solid #f6e8b8;\n  border-radius: 12px;\n  padding: 14px 18px;\n  margin: 16px 0 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.dialog-details-card .detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  font-size: 13.5px;\n}\n.dialog-details-card .detail-label {\n  color: #78716c;\n  font-weight: 500;\n}\n.dialog-details-card .detail-value {\n  color: #1c1917;\n  font-weight: 750;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 20px;\n}\n.dialog-actions .cancel-btn {\n  min-height: 44px;\n  padding: 11px 22px;\n  border: 1.5px solid #d1d5db;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #4b5563;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.dialog-actions .cancel-btn:hover {\n  background: #f3f4f6;\n  border-color: #9ca3af;\n}\n.dialog-confirm-btn {\n  min-height: 44px;\n  padding: 11px 28px;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n}\n.dialog-confirm-btn.success,\n.dialog-confirm-btn.warning,\n.dialog-confirm-btn.confirm {\n  background:\n    linear-gradient(\n      180deg,\n      #ffd740 0%,\n      #ffca28 100%);\n  color: #263238;\n  border: 1.5px solid #e5b800;\n  box-shadow: 0 3px 10px rgba(255, 202, 40, 0.32);\n}\n.dialog-confirm-btn.success:hover,\n.dialog-confirm-btn.warning:hover,\n.dialog-confirm-btn.confirm:hover {\n  background:\n    linear-gradient(\n      180deg,\n      #ffca28 0%,\n      #f2b900 100%);\n  box-shadow: 0 5px 16px rgba(242, 185, 0, 0.42);\n  transform: translateY(-1px);\n}\n.dialog-confirm-btn.error {\n  background: #dc2626;\n  color: #ffffff;\n  border: 1.5px solid #b91c1c;\n  box-shadow: 0 3px 10px rgba(220, 38, 38, 0.25);\n}\n.dialog-confirm-btn.error:hover {\n  background: #b91c1c;\n  box-shadow: 0 5px 16px rgba(220, 38, 38, 0.35);\n  transform: translateY(-1px);\n}\n.edit-lcc-modal {\n  width: min(100%, 540px);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 22px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f1f5f9;\n}\n.modal-header h2 {\n  margin: 0 0 4px;\n  font-size: 20px;\n  font-weight: 750;\n  color: #1e293b;\n}\n.modal-header p {\n  margin: 0;\n  font-size: 13px;\n  color: #64748b;\n}\n.modal-close-btn {\n  background: transparent;\n  border: none;\n  font-size: 24px;\n  line-height: 1;\n  color: #94a3b8;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: all 0.15s ease;\n}\n.modal-close-btn:hover {\n  background: #f1f5f9;\n  color: #1e293b;\n}\n.product-form {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-field label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-field label span {\n  color: #dc2626;\n}\n.form-field input {\n  padding: 10px 14px;\n  border: 1.5px solid #d1d5db;\n  border-radius: 9px;\n  background: #f9fafb;\n  font-size: 14px;\n  color: #111827;\n  outline: none;\n  transition: all 0.2s ease;\n}\n.form-field input:focus {\n  background: #ffffff;\n  border-color: #ffd54f;\n  box-shadow: 0 0 0 3px rgba(255, 213, 79, 0.25);\n}\n.form-field input.input-disabled {\n  background: #f1f5f9;\n  color: #64748b;\n  border-color: #e2e8f0;\n  cursor: not-allowed;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 8px;\n  padding-top: 16px;\n  border-top: 1px solid #f1f5f9;\n}\n.form-actions .cancel-btn {\n  padding: 10px 18px;\n  border: 1px solid #d1d5db;\n  border-radius: 9px;\n  background: #ffffff;\n  color: #4b5563;\n  font-size: 13.5px;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n.form-actions .cancel-btn:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.form-actions .save-btn {\n  padding: 10px 22px;\n  border: 1px solid #ffca28;\n  border-radius: 9px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffd740 0%,\n      #ffca28 100%);\n  color: #263238;\n  font-size: 13.5px;\n  font-weight: 700;\n  box-shadow: 0 3px 10px rgba(255, 202, 40, 0.32);\n  transition: all 0.2s ease;\n}\n.form-actions .save-btn:hover {\n  background:\n    linear-gradient(\n      180deg,\n      #ffca28 0%,\n      #f2b900 100%);\n  transform: translateY(-1px);\n}\n@media (max-width: 1100px) {\n  .lcc-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n    gap: 18px;\n  }\n}\n@media (max-width: 768px) {\n  .lcc-page {\n    padding: 20px 16px 36px;\n  }\n  .lcc-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    margin-bottom: 24px;\n  }\n  .header-actions {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n  .switch-stock-btn,\n  .reset-data-btn {\n    width: 100%;\n    justify-content: center;\n    text-align: center;\n  }\n  .lcc-register {\n    padding: 16px;\n    border-radius: 14px;\n  }\n  .stock-summary {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .lcc-toolbar {\n    margin-bottom: 20px;\n  }\n  .lcc-search {\n    width: 100%;\n  }\n  .lcc-grid {\n    grid-template-columns: 1fr !important;\n    gap: 16px;\n  }\n  .modal-overlay {\n    padding: 12px;\n  }\n  .modal-dialog,\n  .transfer-modal,\n  .edit-modal,\n  .lcc-modal {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: auto;\n    padding: 20px 16px !important;\n    border-radius: 16px !important;\n    max-height: 92vh !important;\n  }\n}\n@media (max-width: 540px) {\n  .lcc-page {\n    padding: 14px 12px 28px;\n  }\n  .lcc-header h1 {\n    font-size: 26px;\n  }\n  .lcc-register {\n    padding: 14px 12px;\n  }\n  .card-actions {\n    padding: 12px 14px 16px;\n    gap: 8px;\n  }\n  .card-actions button {\n    flex: 1;\n    min-width: 80px;\n    text-align: center;\n    justify-content: center;\n    padding: 9px 8px;\n    font-size: 12px;\n  }\n  .form-actions {\n    flex-direction: column-reverse;\n    gap: 8px;\n  }\n  .form-actions button {\n    width: 100%;\n    justify-content: center;\n  }\n  .switch-distribution-container {\n    right: 14px;\n    bottom: 16px;\n  }\n  .switch-distribution-btn {\n    padding: 10px 16px;\n    font-size: 13px;\n    gap: 8px;\n  }\n}\n@media (max-width: 900px) {\n  .switch-distribution-container {\n    right: 18px;\n    bottom: 20px;\n  }\n  .switch-distribution-btn {\n    width: auto !important;\n    min-height: 44px;\n    padding: 10px 20px;\n    font-size: 13.5px;\n  }\n}\n.switch-distribution-container {\n  position: fixed;\n  right: 28px;\n  bottom: 28px;\n  z-index: 990;\n  margin: 0;\n  padding: 0;\n  border: none;\n  pointer-events: none;\n}\n.switch-distribution-btn {\n  pointer-events: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  min-height: 48px;\n  padding: 12px 24px;\n  border: 1.5px solid #d4a500;\n  border-radius: 50px;\n  background:\n    linear-gradient(\n      135deg,\n      #fff9e6 0%,\n      #ffefb8 45%,\n      #ffd54f 100%);\n  color: #2b2202;\n  font-size: 14.5px;\n  font-weight: 750;\n  cursor: pointer;\n  box-shadow: 0 8px 24px rgba(217, 165, 0, 0.38), 0 3px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);\n  white-space: nowrap;\n}\n.switch-distribution-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #fff5cc 0%,\n      #ffe885 45%,\n      #ffca28 100%);\n  border-color: #bf9000;\n  box-shadow: 0 12px 30px rgba(217, 165, 0, 0.48), 0 4px 12px rgba(0, 0, 0, 0.14);\n  transform: translateY(-3px) scale(1.02);\n}\n.switch-distribution-btn:active {\n  transform: translateY(0) scale(0.98);\n  box-shadow: 0 4px 12px rgba(217, 165, 0, 0.3);\n}\n.switch-distribution-btn .btn-icon {\n  font-size: 17px;\n  display: inline-block;\n}\n.switch-distribution-btn .btn-arrow {\n  font-size: 16px;\n  transition: transform 0.2s ease;\n}\n.switch-distribution-btn:hover .btn-arrow {\n  transform: translateX(4px);\n}\n.transfer-overlay {\n  background: rgba(45, 36, 12, 0.38);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.transfer-modal {\n  width: min(100%, 650px);\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 30px;\n  border: 1.5px solid #fae8a4;\n  border-radius: 22px;\n  background: #ffffff;\n  color: #263238;\n  box-shadow: 0 24px 70px rgba(184, 134, 11, 0.16), 0 8px 24px rgba(0, 0, 0, 0.05);\n}\n.transfer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f9f0d4;\n}\n.transfer-header h2 {\n  margin: 0 0 6px;\n  color: #263442;\n  font-size: 24px;\n  font-weight: 750;\n}\n.transfer-header p {\n  margin: 0;\n  color: #7b8490;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.transfer-header .modal-close-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  flex-shrink: 0;\n  border: 1.5px solid #f2dfa0;\n  border-radius: 10px;\n  background: #fffdf5;\n  color: #5a4b16;\n  font-size: 24px;\n  line-height: 1;\n  transition: all 0.2s ease;\n}\n.transfer-header .modal-close-btn:hover {\n  border-color: #e5b300;\n  background: #ffeb99;\n  color: #263238;\n}\n.transfer-form {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.transfer-modal .form-field label {\n  display: block;\n  margin-bottom: 8px;\n  color: #374151;\n  font-size: 13px;\n  font-weight: 650;\n}\n.transfer-modal .form-field label span {\n  color: #c53636;\n}\n.transfer-modal .form-field select,\n.transfer-modal .form-field input {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  min-height: 46px;\n  padding: 11px 14px;\n  border: 1.5px solid #ebdca8;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #293541;\n  font-family: inherit;\n  font-size: 14px;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n}\n.transfer-modal .form-field select {\n  appearance: auto;\n  cursor: pointer;\n}\n.transfer-modal .form-field select:hover,\n.transfer-modal .form-field input:hover {\n  border-color: #dfb83b;\n  background: #fffef8;\n}\n.transfer-modal .form-field select:focus,\n.transfer-modal .form-field input:focus {\n  border-color: #e5a900;\n  background: #fffdf2;\n  box-shadow: 0 0 0 3.5px rgba(255, 202, 40, 0.25);\n}\n.transfer-modal .form-field select option {\n  padding: 10px;\n  background: #ffffff;\n  color: #293541;\n}\n.transfer-modal .form-field select option:disabled {\n  color: #a4abb5;\n  background: #faf8f2;\n}\n.available-stock-banner {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  padding: 14px 18px;\n  border: 1.5px solid #f6e3a4;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #fffdf2 0%,\n      #fff9e6 100%);\n}\n.stock-info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stock-info-label {\n  color: #8c7830;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stock-info-value {\n  color: #263442;\n  font-size: 15px;\n  font-weight: 750;\n}\n.field-help {\n  display: block;\n  margin-top: 5px;\n  color: #8c7830;\n  font-size: 12px;\n  font-weight: 600;\n}\n.transfer-modal .form-actions {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 6px;\n  padding-top: 18px;\n  border-top: 1px solid #f7efd7;\n}\n.transfer-modal .cancel-btn {\n  min-height: 44px;\n  padding: 11px 22px;\n  border: 1.5px solid #ebdca8;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #5a4b16;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.transfer-modal .cancel-btn:hover {\n  background: #fff8e1;\n  border-color: #dfb83b;\n  color: #3b2f06;\n}\n.confirm-transfer-btn {\n  min-height: 44px;\n  padding: 11px 24px;\n  border: 1.5px solid #e5b800;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffd740 0%,\n      #ffca28 100%);\n  color: #263238;\n  font-size: 13.5px;\n  font-weight: 750;\n  cursor: pointer;\n  box-shadow: 0 3px 10px rgba(255, 202, 40, 0.32);\n  transition: all 0.2s ease;\n}\n.confirm-transfer-btn:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      180deg,\n      #ffca28 0%,\n      #f2b900 100%);\n  border-color: #cc9600;\n  box-shadow: 0 6px 18px rgba(242, 185, 0, 0.45);\n  transform: translateY(-1px);\n}\n.confirm-transfer-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  box-shadow: none;\n  transform: none;\n}\n/*# sourceMappingURL=lcc.component.css.map */\n'] }]
  }], () => [{ type: LccService }, { type: ReportsService }, { type: DistributionService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LccComponent, { className: "LccComponent", filePath: "src/app/pages/lcc/lcc.component.ts", lineNumber: 29 });
})();
export {
  LccComponent
};
//# debugId=35a08ff1-1b42-5114-9782-d2f14fd82afe
//# sourceMappingURL=chunk-AUOK72OC.js.map
