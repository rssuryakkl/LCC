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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
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
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QKVBSWNP.js";

// src/app/pages/products/products.ts
function Products_div_30_article_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "img", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", product_r3.image)("alt", product_r3.name);
  }
}
function Products_div_30_article_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r3.productId, " ");
  }
}
function Products_div_30_article_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2, "Product ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r3.productId);
  }
}
function Products_div_30_article_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "span", 48);
    \u0275\u0275text(2, " About to update the product ");
    \u0275\u0275elementEnd();
  }
}
function Products_div_30_article_1_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2, "Updated By:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r3.updatedBy || product_r3.addedBy);
  }
}
function Products_div_30_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 32);
    \u0275\u0275template(1, Products_div_30_article_1_div_1_Template, 2, 2, "div", 33);
    \u0275\u0275elementStart(2, "div", 34);
    \u0275\u0275template(3, Products_div_30_article_1_span_3_Template, 2, 1, "span", 35);
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, Products_div_30_article_1_p_6_Template, 5, 1, "p", 36);
    \u0275\u0275elementStart(7, "p")(8, "strong");
    \u0275\u0275text(9, "Available Stock:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 37);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, Products_div_30_article_1_div_12_Template, 3, 0, "div", 38);
    \u0275\u0275elementStart(13, "p")(14, "strong");
    \u0275\u0275text(15, "Received Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, Products_div_30_article_1_p_19_Template, 5, 1, "p", 36);
    \u0275\u0275elementStart(20, "p")(21, "strong");
    \u0275\u0275text(22, "Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 39)(26, "button", 40);
    \u0275\u0275listener("click", function Products_div_30_article_1_Template_button_click_26_listener() {
      const product_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editProduct(product_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 41);
    \u0275\u0275element(28, "path", 42)(29, "path", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Edit ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r3.image);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", product_r3.productId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r3.productId);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("stock-danger", product_r3.quantity < 20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", product_r3.quantity, " PCS");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r3.quantity < 20);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 11, product_r3.receivedDate, "dd-MM-yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", product_r3.updatedBy || product_r3.addedBy);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(product_r3.location || "Not assigned");
  }
}
function Products_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275template(1, Products_div_30_article_1_Template, 31, 14, "article", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.filteredProducts)("ngForTrackBy", ctx_r3.trackByProductId);
  }
}
function Products_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.searchText ? "No matching products found" : "No products available", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.searchText ? "Try another product, ID, or location." : "Click Add Product to register your first product.", " ");
  }
}
function Products_div_41_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    \u0275\u0275property("value", product_r6.id)("disabled", product_r6.quantity < 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r6.productId + " - " + product_r6.name, " ");
  }
}
function Products_div_41_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 75);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    \u0275\u0275property("value", product_r7.id)("disabled", product_r7.quantity < 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r7.name + " - " + product_r7.productId, " ");
  }
}
function Products_div_41_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77)(2, "span", 78);
    \u0275\u0275text(3, "Available Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong", 79);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 77)(7, "span", 78);
    \u0275\u0275text(8, "Warehouse Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong", 79);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.remainingTransferStock, " PCS");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedTransferProduct.location || "Not assigned");
  }
}
function Products_div_41_small_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Maximum available to transfer: ", ctx_r3.selectedTransferProduct.quantity, " PCS ");
  }
}
function Products_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function Products_div_41_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeTransferForm());
    });
    \u0275\u0275elementStart(1, "section", 52);
    \u0275\u0275listener("click", function Products_div_41_Template_section_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 53)(3, "div")(4, "h2", 54);
    \u0275\u0275text(5, "Switch Stock to LCC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Transfer products from Warehouse to LCC Inventory.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 55);
    \u0275\u0275listener("click", function Products_div_41_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeTransferForm());
    });
    \u0275\u0275text(9, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 56, 1);
    \u0275\u0275listener("ngSubmit", function Products_div_41_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmTransfer());
    });
    \u0275\u0275elementStart(12, "div", 57)(13, "label", 58);
    \u0275\u0275text(14, " Product ID ");
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 59);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Products_div_41_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.transferForm.productId, $event) || (ctx_r3.transferForm.productId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "option", 60);
    \u0275\u0275text(19, "Select Product ID");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, Products_div_41_option_20_Template, 2, 3, "option", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 57)(22, "label", 62);
    \u0275\u0275text(23, " Product Name ");
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "select", 63);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Products_div_41_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.transferForm.productId, $event) || (ctx_r3.transferForm.productId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 60);
    \u0275\u0275text(28, "Select Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, Products_div_41_option_29_Template, 2, 3, "option", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, Products_div_41_div_30_Template, 11, 2, "div", 64);
    \u0275\u0275elementStart(31, "div", 57)(32, "label", 65);
    \u0275\u0275text(33, "Date ");
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "input", 66);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Products_div_41_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.transferForm.date, $event) || (ctx_r3.transferForm.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 57)(38, "label", 67);
    \u0275\u0275text(39, "Switched By ");
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "input", 68);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Products_div_41_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.transferForm.switchedBy, $event) || (ctx_r3.transferForm.switchedBy = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 57)(44, "label", 69);
    \u0275\u0275text(45, "Quantity (PCS) ");
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "input", 70);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Products_div_41_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.transferForm.quantity, $event) || (ctx_r3.transferForm.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(49, Products_div_41_small_49_Template, 2, 1, "small", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 72)(51, "button", 73);
    \u0275\u0275listener("click", function Products_div_41_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeTransferForm());
    });
    \u0275\u0275text(52, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 74);
    \u0275\u0275text(54, " Confirm Transfer ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const transferNgForm_r8 = \u0275\u0275reference(11);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.transferForm.productId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.products);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.transferForm.productId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.products);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedTransferProduct);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.transferForm.date);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.transferForm.switchedBy);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.transferForm.quantity);
    \u0275\u0275property("max", ctx_r3.selectedTransferProduct?.quantity ?? 1);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedTransferProduct);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", transferNgForm_r8.invalid || !ctx_r3.selectedTransferProduct || !ctx_r3.transferForm.quantity || ctx_r3.transferForm.quantity < 1 || ctx_r3.transferForm.quantity > (ctx_r3.selectedTransferProduct?.quantity ?? 0));
  }
}
function Products_div_42_option_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const location_r10 = ctx.$implicit;
    \u0275\u0275property("value", location_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", location_r10, " ");
  }
}
function Products_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275listener("click", function Products_div_42_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeForm());
    });
    \u0275\u0275elementStart(1, "section", 82);
    \u0275\u0275listener("click", function Products_div_42_Template_section_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 83)(3, "div")(4, "h2", 84);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Enter the product and stock details.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 85);
    \u0275\u0275listener("click", function Products_div_42_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeForm());
    });
    \u0275\u0275text(9, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 86, 2);
    \u0275\u0275listener("ngSubmit", function Products_div_42_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveProduct());
    });
    \u0275\u0275elementStart(12, "div", 57)(13, "label", 87);
    \u0275\u0275text(14, " Product ID ");
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 88);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Products_div_42_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.productForm.productId, $event) || (ctx_r3.productForm.productId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function Products_div_42_Template_input_input_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onProductIdInput());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 57)(19, "label", 89);
    \u0275\u0275text(20, " Product Name ");
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "input", 90);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Products_div_42_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.productForm.name, $event) || (ctx_r3.productForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function Products_div_42_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onProductNameChange($event));
    })("input", function Products_div_42_Template_input_input_23_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onProductNameChange(ctx_r3.productForm.name));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 57)(25, "label", 91);
    \u0275\u0275text(26, " Total Quantity (PCS) ");
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "input", 92);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Products_div_42_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.productForm.quantity, $event) || (ctx_r3.productForm.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 57)(31, "label", 93);
    \u0275\u0275text(32, " Received Date ");
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "input", 94);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Products_div_42_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.productForm.receivedDate, $event) || (ctx_r3.productForm.receivedDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 57)(37, "label", 95);
    \u0275\u0275text(38, " Location ");
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "select", 96);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Products_div_42_Template_select_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.productForm.location, $event) || (ctx_r3.productForm.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(42, "option", 60);
    \u0275\u0275text(43, " Select a location ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, Products_div_42_option_44_Template, 2, 2, "option", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "small", 80);
    \u0275\u0275text(46, " Select the warehouse location where the product is stored. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 57)(48, "label", 98);
    \u0275\u0275text(49);
    \u0275\u0275elementStart(50, "span");
    \u0275\u0275text(51, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "input", 99);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Products_div_42_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.productForm.updatedBy, $event) || (ctx_r3.productForm.updatedBy = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "small", 80);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 72)(56, "button", 73);
    \u0275\u0275listener("click", function Products_div_42_Template_button_click_56_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeForm());
    });
    \u0275\u0275text(57, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "button", 100);
    \u0275\u0275listener("click", function Products_div_42_Template_button_click_58_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveProduct());
    });
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r3.editingId !== null ? "Edit Product" : "Add Product", " ");
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.productForm.productId);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.productForm.name);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.productForm.quantity);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.productForm.receivedDate);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.productForm.location);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.locations);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r3.editingId !== null ? "Updated By (Whom)" : "Your Name", " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.productForm.updatedBy);
    \u0275\u0275property("placeholder", ctx_r3.editingId !== null ? "Enter name of person updating this product" : "Enter name of person adding this product");
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.editingId !== null ? "Name of staff or person updating this product." : "Name of staff or person adding/registering this product.", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r3.editingId !== null ? "Update Product" : ctx_r3.existingMatchedProduct ? " Add to Existing Stock" : "Save Product", " ");
  }
}
function Products_div_43_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prod_r12 = ctx.$implicit;
    \u0275\u0275property("ngValue", prod_r12.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4(" ", prod_r12.name, " (", prod_r12.productId, ") \u2014 Available: ", prod_r12.quantity, " PCS \u2022 ", prod_r12.location || "Warehouse", " ");
  }
}
function Products_div_43_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 122)(2, "span", 123);
    \u0275\u0275text(3, "Product ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong", 124);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 122)(7, "span", 123);
    \u0275\u0275text(8, "Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong", 124);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 122)(12, "span", 123);
    \u0275\u0275text(13, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong", 124);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 122)(17, "span", 123);
    \u0275\u0275text(18, "Current Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong", 125);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedReceiveProduct.productId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedReceiveProduct.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedReceiveProduct.location || "Not assigned");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.selectedReceiveProduct.quantity, " PCS");
  }
}
function Products_div_43_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "span", 127);
    \u0275\u0275text(2, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Please select an added product from the dropdown above to view details and restock.");
    \u0275\u0275elementEnd()();
  }
}
function Products_div_43_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128)(1, "span");
    \u0275\u0275text(2, "Current: ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 129);
    \u0275\u0275text(6, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Added: ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 129);
    \u0275\u0275text(12, "=");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 130);
    \u0275\u0275text(14, "New Available Stock: ");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.selectedReceiveProduct.quantity, " PCS");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r3.receiveStockForm.quantity, " PCS");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r3.selectedReceiveProduct.quantity + ctx_r3.receiveStockForm.quantity, " PCS");
  }
}
function Products_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275listener("click", function Products_div_43_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeReceiveStock());
    });
    \u0275\u0275elementStart(1, "section", 103);
    \u0275\u0275listener("click", function Products_div_43_Template_section_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 83)(3, "div")(4, "h2", 104);
    \u0275\u0275text(5, "Receive Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Add incoming stock and record who received and updated it.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 105);
    \u0275\u0275listener("click", function Products_div_43_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeReceiveStock());
    });
    \u0275\u0275text(9, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 86, 3);
    \u0275\u0275listener("ngSubmit", function Products_div_43_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmReceiveStock());
    });
    \u0275\u0275elementStart(12, "div", 57)(13, "label", 106);
    \u0275\u0275text(14, " Select Product ");
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 107);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Products_div_43_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedReceiveProductId, $event) || (ctx_r3.selectedReceiveProductId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function Products_div_43_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onReceiveProductChange($event));
    });
    \u0275\u0275elementStart(18, "option", 108);
    \u0275\u0275text(19, "-- Select an existing product to restock --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, Products_div_43_option_20_Template, 2, 5, "option", 109);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, Products_div_43_div_21_Template, 21, 4, "div", 110)(22, Products_div_43_div_22_Template, 5, 0, "div", 111);
    \u0275\u0275elementStart(23, "div", 57)(24, "label", 112);
    \u0275\u0275text(25, " Additional Pieces Received (PCS) ");
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "input", 113);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Products_div_43_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.receiveStockForm.quantity, $event) || (ctx_r3.receiveStockForm.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, Products_div_43_div_29_Template, 17, 3, "div", 114);
    \u0275\u0275elementStart(30, "div", 57)(31, "label", 115);
    \u0275\u0275text(32, " Updated By (Whom) ");
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "input", 116);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Products_div_43_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.receiveStockForm.updatedBy, $event) || (ctx_r3.receiveStockForm.updatedBy = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 57)(37, "label", 117);
    \u0275\u0275text(38, " Received Date ");
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "input", 118);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Products_div_43_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.receiveStockForm.date, $event) || (ctx_r3.receiveStockForm.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 72)(43, "button", 73);
    \u0275\u0275listener("click", function Products_div_43_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeReceiveStock());
    });
    \u0275\u0275text(44, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 119);
    \u0275\u0275text(46, " Confirm & Receive Stock ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const receiveNgForm_r13 = \u0275\u0275reference(11);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedReceiveProductId);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.products);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedReceiveProduct);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.selectedReceiveProduct);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.receiveStockForm.quantity);
    \u0275\u0275property("disabled", !ctx_r3.selectedReceiveProduct);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.selectedReceiveProduct && ctx_r3.receiveStockForm.quantity && ctx_r3.receiveStockForm.quantity > 0);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.receiveStockForm.updatedBy);
    \u0275\u0275property("disabled", !ctx_r3.selectedReceiveProduct);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.receiveStockForm.date);
    \u0275\u0275property("disabled", !ctx_r3.selectedReceiveProduct);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r3.selectedReceiveProduct || receiveNgForm_r13.invalid || !ctx_r3.receiveStockForm.quantity || ctx_r3.receiveStockForm.quantity < 1 || !ctx_r3.receiveStockForm.updatedBy?.trim());
  }
}
function Products_div_44_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u26A0\uFE0F ", ctx_r3.addNameError);
  }
}
function Products_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 131);
    \u0275\u0275listener("click", function Products_div_44_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAddNameModal());
    });
    \u0275\u0275elementStart(1, "section", 132);
    \u0275\u0275listener("click", function Products_div_44_Template_section_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 83)(3, "div")(4, "h2", 133);
    \u0275\u0275text(5, "Add Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Add a new product type to the selection list.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 134);
    \u0275\u0275listener("click", function Products_div_44_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAddNameModal());
    });
    \u0275\u0275text(9, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 135);
    \u0275\u0275listener("ngSubmit", function Products_div_44_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmAddName());
    });
    \u0275\u0275elementStart(11, "div", 57)(12, "label", 136);
    \u0275\u0275text(13, "Product Name ");
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 137);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Products_div_44_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.newProductNameInput, $event) || (ctx_r3.newProductNameInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, Products_div_44_div_17_Template, 3, 1, "div", 138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 72)(19, "button", 73);
    \u0275\u0275listener("click", function Products_div_44_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeAddNameModal());
    });
    \u0275\u0275text(20, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 119);
    \u0275\u0275text(22, " Add Name ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newProductNameInput);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.addNameError);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r3.newProductNameInput.trim());
  }
}
function Products_div_45_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 152);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function Products_div_45_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 153);
    \u0275\u0275text(1, "\u26A0");
    \u0275\u0275elementEnd();
  }
}
function Products_div_45_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 154);
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function Products_div_45_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 155);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.modalDialog.message);
  }
}
function Products_div_45_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 158)(1, "span", 159);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 160);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r16.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r16.value);
  }
}
function Products_div_45_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156);
    \u0275\u0275template(1, Products_div_45_div_10_div_1_Template, 5, 2, "div", 157);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.modalDialog.details);
  }
}
function Products_div_45_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function Products_div_45_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
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
function Products_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 140);
    \u0275\u0275listener("click", function Products_div_45_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.modalDialog.onCancel ? ctx_r3.modalDialog.onCancel() : ctx_r3.modalDialog.show = false);
    });
    \u0275\u0275elementStart(1, "section", 141);
    \u0275\u0275listener("click", function Products_div_45_Template_section_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 142);
    \u0275\u0275template(3, Products_div_45_span_3_Template, 2, 0, "span", 143)(4, Products_div_45_span_4_Template, 2, 0, "span", 144)(5, Products_div_45_span_5_Template, 2, 0, "span", 145);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 146)(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, Products_div_45_p_9_Template, 2, 1, "p", 147)(10, Products_div_45_div_10_Template, 2, 1, "div", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 149);
    \u0275\u0275template(12, Products_div_45_button_12_Template, 2, 1, "button", 150);
    \u0275\u0275elementStart(13, "button", 151);
    \u0275\u0275listener("click", function Products_div_45_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r15);
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
var Products = class _Products {
  constructor(lccService, reportsService) {
    this.lccService = lccService;
    this.reportsService = reportsService;
    this.loadProducts();
  }
  lccService;
  reportsService;
  // ==================== PRODUCTS ====================
  products = [];
  productNames = [
    "Saree",
    "T-Shirt",
    "Vesti",
    "Towel",
    "Soap",
    "Oil"
  ];
  locations = [
    "Vadalur",
    "Tiruppur",
    "Bangalore"
  ];
  searchText = "";
  showForm = false;
  showTransferForm = false;
  showReceiveStockModal = false;
  selectedReceiveProduct = null;
  selectedReceiveProductId = null;
  receiveStockForm = {
    quantity: null,
    updatedBy: "",
    date: ""
  };
  editingId = null;
  isCustomProductId = false;
  // Generic in-app dialog
  modalDialog = {
    show: false,
    type: "success",
    title: "",
    message: ""
  };
  // Add Product Name modal (replaces window.prompt)
  showAddNameModal = false;
  newProductNameInput = "";
  addNameError = "";
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
  // Product ID counter
  nextProductId = 102;
  loadProducts() {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const saved = localStorage.getItem("warehouse_products");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const mapped = parsed.map((p, idx) => {
              const safeName = (p.name || "Product").trim();
              const prefix = this.getPrefixFromName(safeName);
              const idNum = p.productId ? parseInt(String(p.productId).replace(/\D/g, ""), 10) : 101 + idx;
              const safeProductId = p.productId ? String(p.productId).trim() : `${prefix}_${isNaN(idNum) ? 101 + idx : idNum}`;
              const safeQty = Number(p.quantity);
              return {
                id: p.id ? Number(p.id) : Date.now() + idx,
                productId: safeProductId,
                name: safeName,
                quantity: !isNaN(safeQty) && safeQty >= 0 ? safeQty : 0,
                receivedDate: p.receivedDate || this.getTodayDate(),
                sponsorName: p.sponsorName || "",
                image: p.image || "",
                location: p.location || "Vadalur",
                updatedBy: p.updatedBy || p.addedBy || "Admin",
                addedBy: p.addedBy || p.updatedBy || "Admin"
              };
            });
            const consolidated = this.consolidateDuplicateProducts(mapped);
            this.products = consolidated.filter((p) => (Number(p.quantity) || 0) > 0);
            if (this.products.length !== parsed.length) {
              this.saveProducts();
            }
            const maxId = this.products.reduce((max, p) => {
              const num = parseInt(p.productId?.replace(/\D/g, "") || "0", 10);
              return Math.max(max, isNaN(num) ? 0 : num);
            }, 101);
            this.nextProductId = maxId + 1;
            return;
          }
        }
      }
    } catch (e) {
      console.error("Failed to load products from localStorage", e);
    }
  }
  consolidateDuplicateProducts(products) {
    const grouped = /* @__PURE__ */ new Map();
    for (const p of products) {
      const nameKey = (p.name || "").trim().toLowerCase();
      if (!nameKey)
        continue;
      if (!grouped.has(nameKey)) {
        grouped.set(nameKey, []);
      }
      grouped.get(nameKey).push(p);
    }
    const consolidated = [];
    for (const [nameKey, list] of grouped.entries()) {
      if (list.length === 1) {
        consolidated.push(list[0]);
      } else {
        list.sort((a, b) => {
          const numA = parseInt(a.productId?.replace(/\D/g, "") || String(a.id || 0), 10);
          const numB = parseInt(b.productId?.replace(/\D/g, "") || String(b.id || 0), 10);
          return (isNaN(numA) ? 0 : numA) - (isNaN(numB) ? 0 : numB);
        });
        const earliest = list[0];
        const totalQty = list.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
        const sortedByDate = [...list].sort((a, b) => {
          const timeA = new Date(a.receivedDate || 0).getTime() || a.id || 0;
          const timeB = new Date(b.receivedDate || 0).getTime() || b.id || 0;
          return timeB - timeA;
        });
        const latest = sortedByDate[0];
        consolidated.push(__spreadProps(__spreadValues({}, earliest), {
          name: latest.name || earliest.name,
          quantity: totalQty,
          receivedDate: latest.receivedDate || earliest.receivedDate,
          updatedBy: latest.updatedBy || earliest.updatedBy,
          location: latest.location || earliest.location,
          sponsorName: latest.sponsorName || earliest.sponsorName || "",
          image: latest.image || earliest.image || ""
        }));
      }
    }
    return consolidated;
  }
  saveProducts() {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        this.products = this.products.filter((p) => (Number(p.quantity) || 0) > 0);
        localStorage.setItem("warehouse_products", JSON.stringify(this.products));
      }
    } catch (e) {
      console.error("Failed to save products to localStorage", e);
    }
  }
  getPrefixFromName(name) {
    if (!name || !name.trim()) {
      return "PR";
    }
    const clean = name.trim();
    const words = clean.split(/[\s\-_]+/);
    if (words.length >= 2 && words[0].length >= 1 && words[1].length >= 1) {
      const p1 = words[0].charAt(0).toUpperCase();
      const p2 = words[1].charAt(0).toUpperCase();
      if (/[A-Z]/.test(p1) && /[A-Z]/.test(p2)) {
        return `${p1}${p2}`;
      }
    }
    const lettersOnly = clean.replace(/[^a-zA-Z]/g, "");
    if (lettersOnly.length >= 2) {
      return lettersOnly.slice(0, 2).toUpperCase();
    }
    if (lettersOnly.length === 1) {
      return (lettersOnly + "X").toUpperCase();
    }
    return "PR";
  }
  format3DigitNumber(num) {
    if (isNaN(num) || num < 1)
      return "101";
    return num < 1e3 ? String(num).padStart(3, "0") : String(num);
  }
  generateProductIdForName(name) {
    const prefix = this.getPrefixFromName(name);
    const currentMatch = (this.productForm?.productId || "").match(/\d+/);
    let targetNum = currentMatch ? parseInt(currentMatch[0], 10) : this.nextProductId || 101;
    if (isNaN(targetNum) || targetNum < 1) {
      targetNum = this.nextProductId || 101;
    }
    return `${prefix}_${this.format3DigitNumber(targetNum)}`;
  }
  generateProductId(name = "") {
    return this.generateProductIdForName(name);
  }
  get availableProductNames() {
    if (this.editingId !== null) {
      return this.productNames;
    }
    const existingNames = new Set(this.products.map((p) => (p.name || "").trim().toLowerCase()));
    return this.productNames.filter((item) => !existingNames.has(item.trim().toLowerCase()));
  }
  get existingMatchedProduct() {
    return null;
  }
  onProductNameChange(name) {
    if (!name || !name.trim()) {
      return;
    }
    this.productForm.productId = this.generateProductIdForName(name);
  }
  onProductIdInput() {
  }
  // ==================== TRANSFER FORM ====================
  transferForm = {
    productId: "",
    date: this.getTodayDate(),
    switchedBy: "",
    quantity: null
  };
  get selectedTransferProduct() {
    if (!this.transferForm.productId) {
      return void 0;
    }
    const targetId = Number(this.transferForm.productId);
    return this.products.find((product) => product.id === targetId);
  }
  get remainingTransferStock() {
    const product = this.selectedTransferProduct;
    if (!product) {
      return 0;
    }
    const qty = Number(this.transferForm.quantity);
    if (!qty || isNaN(qty) || qty <= 0) {
      return product.quantity;
    }
    const remaining = product.quantity - qty;
    return remaining >= 0 ? remaining : 0;
  }
  openTransferForm() {
    this.transferForm = {
      productId: "",
      date: this.getTodayDate(),
      switchedBy: "",
      quantity: null
    };
    this.showTransferForm = true;
  }
  closeTransferForm() {
    this.showTransferForm = false;
  }
  confirmTransfer() {
    const product = this.selectedTransferProduct;
    const quantity = Number(this.transferForm.quantity);
    const switchedBy = this.transferForm.switchedBy.trim();
    if (!product) {
      this.showWarning("Select Product", "Please select a product to transfer.");
      return;
    }
    if (!this.transferForm.date || !switchedBy || !this.transferForm.quantity) {
      this.showWarning("Required Fields", "Please complete all required fields.");
      return;
    }
    if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > product.quantity) {
      this.showWarning("Invalid Quantity", "Enter a valid quantity within available warehouse stock.");
      return;
    }
    const remainingQty = product.quantity - quantity;
    if (remainingQty <= 0) {
      this.products = this.products.filter((item) => item.id !== product.id);
    } else {
      this.products = this.products.map((item) => item.id === product.id ? __spreadProps(__spreadValues({}, item), { quantity: remainingQty }) : item);
    }
    this.saveProducts();
    this.lccService.addTransfer({
      productId: product.productId || "",
      name: product.name,
      quantity,
      date: this.transferForm.date,
      switchedBy,
      location: product.location || "Not assigned"
    });
    this.reportsService.recordEntry({
      productId: product.productId || "",
      productName: product.name,
      eventType: "STOCK_TRANSFERRED",
      eventTitle: "Stock Transferred to LCC",
      quantityChange: -quantity,
      previousStock: product.quantity,
      newStock: product.quantity - quantity,
      location: product.location || "Not assigned",
      updatedBy: switchedBy,
      remarks: `Transferred to LCC inventory`,
      date: this.transferForm.date
    });
    this.closeTransferForm();
    this.showSuccess("Transferred to LCC Successfully!", "Product stock has been transferred from warehouse to LCC inventory.", [
      { label: "Product", value: `${product.productId ? product.productId + " (" + product.name + ")" : product.name}` },
      { label: "Quantity Transferred", value: `${quantity} PCS` },
      { label: "Remaining Warehouse Stock", value: `${product.quantity - quantity} PCS` },
      { label: "Switched By", value: switchedBy }
    ]);
  }
  // ==================== DATE ====================
  getTodayDate() {
    const today = /* @__PURE__ */ new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  // ==================== EMPTY PRODUCT ====================
  emptyProduct() {
    return {
      id: 0,
      productId: this.generateProductId(),
      name: "",
      quantity: null,
      receivedDate: this.getTodayDate(),
      sponsorName: "",
      image: "",
      location: "",
      updatedBy: "",
      addedBy: ""
    };
  }
  productForm = this.emptyProduct();
  // ==================== ADD PRODUCT NAME MODAL ====================
  openAddNameModal() {
    this.newProductNameInput = "";
    this.addNameError = "";
    this.showAddNameModal = true;
  }
  closeAddNameModal() {
    this.showAddNameModal = false;
    this.newProductNameInput = "";
    this.addNameError = "";
  }
  confirmAddName() {
    const name = this.newProductNameInput.trim();
    if (!name) {
      this.addNameError = "Please enter a product name.";
      return;
    }
    const inWarehouse = this.products.some((p) => (p.name || "").trim().toLowerCase() === name.toLowerCase());
    if (inWarehouse) {
      this.addNameError = `"${name}" already exists in the warehouse. Use "Restock" to add stock.`;
      return;
    }
    const alreadyExists = this.productNames.some((item) => item.toLowerCase() === name.toLowerCase());
    if (!alreadyExists) {
      this.productNames = [...this.productNames, name];
    }
    this.productForm.name = name;
    this.onProductNameChange(name);
    this.closeAddNameModal();
  }
  addNewProductName() {
    this.openAddNameModal();
  }
  // ==================== SEARCH PRODUCTS ====================
  get filteredProducts() {
    const activeProducts = this.products.filter((p) => (Number(p.quantity) || 0) > 0);
    const search = this.searchText.trim().toLowerCase();
    if (!search) {
      return activeProducts;
    }
    return activeProducts.filter((product) => (product.productId || "").toLowerCase().includes(search) || (product.name || "").toLowerCase().includes(search) || (product.sponsorName || "").toLowerCase().includes(search) || (product.location || "").toLowerCase().includes(search));
  }
  // ==================== TOTAL STOCK ====================
  get totalPieces() {
    return this.products.filter((p) => (Number(p.quantity) || 0) > 0).reduce((total, product) => total + (Number(product.quantity) || 0), 0);
  }
  // ==================== OPEN ADD FORM ====================
  openAddForm() {
    this.editingId = null;
    this.isCustomProductId = false;
    this.productForm = this.emptyProduct();
    this.showForm = true;
  }
  // ==================== EDIT PRODUCT ====================
  editProduct(product) {
    this.editingId = product.id;
    this.isCustomProductId = true;
    this.productForm = __spreadProps(__spreadValues({}, product), {
      quantity: product.quantity,
      productId: product.productId || (product.id ? String(product.id) : "")
    });
    this.showForm = true;
  }
  // ==================== SAVE PRODUCT ====================
  saveProduct() {
    const productId = (this.productForm.productId || "").trim();
    const name = (this.productForm.name || "").trim();
    const location = (this.productForm.location || "").trim();
    const quantity = Number(this.productForm.quantity);
    const updatedBy = (this.productForm.updatedBy || this.productForm.addedBy || "").trim();
    if (!name) {
      this.showWarning("Missing Product Name", "Please select or enter a Product Name.");
      return;
    }
    if (!productId) {
      this.showWarning("Missing Product ID", "Please enter a Product ID.");
      return;
    }
    if (this.productForm.quantity === null || this.productForm.quantity === void 0 || this.productForm.quantity === "" || isNaN(quantity) || !Number.isSafeInteger(quantity) || quantity < 1) {
      this.showWarning("Invalid Quantity", "Total quantity must be a positive whole number (at least 1 PCS).");
      return;
    }
    if (!this.productForm.receivedDate) {
      this.showWarning("Missing Received Date", "Please select the date the product was received.");
      return;
    }
    if (!location) {
      this.showWarning("Missing Location", "Please select the warehouse storage location.");
      return;
    }
    if (!updatedBy) {
      this.showWarning("Missing Name", 'Please enter your name in the "Your Name" field.');
      return;
    }
    if (!this.productNames.some((item) => item.toLowerCase() === name.toLowerCase())) {
      this.productNames = [...this.productNames, name];
    }
    if (this.editingId === null) {
      const existingByName = this.products.find((p) => (p.name || "").trim().toLowerCase() === name.toLowerCase());
      if (existingByName) {
        this.showWarning("Product Already Exists", `"${existingByName.name}" already exists in the warehouse (${existingByName.productId}). "Add Products" is only for adding new products. Please use the "Restock" button to add stock.`);
        return;
      }
      const existingById = this.products.find((p) => (p.productId || "").trim().toLowerCase() === productId.toLowerCase());
      if (existingById) {
        this.showWarning("Product ID Already Exists", `Product ID "${productId}" is already used by "${existingById.name}". Please enter a unique Product ID.`);
        return;
      }
    }
    if (this.editingId !== null) {
      const conflictingProduct = this.products.find((existing) => existing.id !== this.editingId && (existing.productId || "").trim().toLowerCase() === productId.toLowerCase());
      if (conflictingProduct) {
        this.showWarning("Product ID In Use", `Product ID "${productId}" is already used by "${conflictingProduct.name}". Please enter a unique Product ID.`);
        return;
      }
      const oldProduct = this.products.find((existing) => existing.id === this.editingId);
      const prevStock = oldProduct ? oldProduct.quantity : 0;
      const addedBy = oldProduct?.addedBy || updatedBy;
      const product2 = {
        id: this.editingId,
        productId,
        name,
        quantity,
        receivedDate: this.productForm.receivedDate,
        sponsorName: this.productForm.sponsorName || "",
        image: this.productForm.image || "",
        location,
        updatedBy,
        addedBy
      };
      this.products = this.products.map((existing) => existing.id === this.editingId ? product2 : existing);
      this.saveProducts();
      if (!this.productNames.some((item) => item.toLowerCase() === name.toLowerCase())) {
        this.productNames = [...this.productNames, name];
      }
      this.reportsService.recordEntry({
        productId: product2.productId,
        productName: product2.name,
        eventType: "PRODUCT_UPDATED",
        eventTitle: "Product Updated",
        quantityChange: product2.quantity - prevStock,
        previousStock: prevStock,
        newStock: product2.quantity,
        location: product2.location,
        updatedBy,
        remarks: `Updated by ${updatedBy}`,
        date: product2.receivedDate
      });
      this.closeForm();
      this.showSuccess("Product Updated Successfully!", "Product details have been updated.", [
        { label: "Product ID", value: product2.productId },
        { label: "Product Name", value: product2.name },
        { label: "Available Stock", value: `${product2.quantity} PCS` },
        { label: "Location", value: product2.location },
        { label: "Updated By", value: updatedBy }
      ]);
      return;
    }
    const product = {
      id: Date.now(),
      productId,
      name,
      quantity,
      receivedDate: this.productForm.receivedDate,
      sponsorName: this.productForm.sponsorName || "",
      image: this.productForm.image || "",
      location,
      updatedBy,
      addedBy: updatedBy
    };
    this.products = [product, ...this.products];
    const enteredNum = parseInt(productId.replace(/\D/g, ""), 10);
    if (!isNaN(enteredNum) && enteredNum >= this.nextProductId) {
      this.nextProductId = enteredNum + 1;
    } else {
      this.nextProductId++;
    }
    this.saveProducts();
    this.reportsService.recordEntry({
      productId: product.productId,
      productName: product.name,
      eventType: "PRODUCT_ADDED",
      eventTitle: "Product Added",
      quantityChange: product.quantity,
      previousStock: 0,
      newStock: product.quantity,
      location: product.location,
      updatedBy,
      remarks: product.sponsorName ? `Sponsor: ${product.sponsorName} \u2022 Added by ${updatedBy}` : `Added by ${updatedBy}`,
      date: product.receivedDate
    });
    this.closeForm();
    this.showSuccess("Product Added Successfully!", "New product has been added to warehouse inventory.", [
      { label: "Product ID", value: product.productId },
      { label: "Product Name", value: product.name },
      { label: "Available Stock", value: `${product.quantity} PCS` },
      { label: "Location", value: product.location },
      { label: "Added By", value: updatedBy }
    ]);
  }
  // ==================== RECEIVE STOCK ====================
  // ==================== RECEIVE STOCK ====================
  openReceiveStockModal(product) {
    if (this.products.length === 0) {
      this.showWarning("No Products Available", "There are currently no products in the warehouse to restock. Please add a product first.");
      return;
    }
    if (product) {
      this.selectedReceiveProduct = product;
      this.selectedReceiveProductId = product.id;
    } else {
      this.selectedReceiveProduct = null;
      this.selectedReceiveProductId = null;
    }
    this.receiveStockForm = {
      quantity: null,
      updatedBy: "",
      date: this.getTodayDate()
    };
    this.showReceiveStockModal = true;
  }
  onReceiveProductChange(productId) {
    if (productId === null || productId === void 0 || productId === "") {
      this.selectedReceiveProduct = null;
      return;
    }
    const found = this.products.find((p) => p.id === Number(productId)) || null;
    this.selectedReceiveProduct = found;
  }
  openReceiveStock(product) {
    this.openReceiveStockModal(product);
  }
  closeReceiveStock() {
    this.showReceiveStockModal = false;
    this.selectedReceiveProduct = null;
    this.selectedReceiveProductId = null;
  }
  confirmReceiveStock() {
    if (!this.selectedReceiveProduct) {
      this.showWarning("Select Product", "Please select a product from the dropdown to restock.");
      return;
    }
    const qty = Number(this.receiveStockForm.quantity);
    const updatedBy = this.receiveStockForm.updatedBy?.trim() || "";
    if (!Number.isSafeInteger(qty) || qty < 1) {
      this.showWarning("Invalid Quantity", "Please enter a valid positive quantity.");
      return;
    }
    if (!updatedBy) {
      this.showWarning("Updated By Required", "Please enter who updated / received this stock.");
      return;
    }
    const targetId = this.selectedReceiveProduct.id;
    const previousQty = this.selectedReceiveProduct.quantity;
    const newQty = previousQty + qty;
    this.products = this.products.map((p) => p.id === targetId ? __spreadProps(__spreadValues({}, p), {
      quantity: newQty,
      updatedBy,
      receivedDate: this.receiveStockForm.date || p.receivedDate
    }) : p);
    this.saveProducts();
    const prod = this.selectedReceiveProduct;
    this.closeReceiveStock();
    this.reportsService.recordEntry({
      productId: prod.productId,
      productName: prod.name,
      eventType: "STOCK_RECEIVED",
      eventTitle: "Stock Received",
      quantityChange: qty,
      previousStock: previousQty,
      newStock: newQty,
      location: prod.location,
      updatedBy,
      remarks: `Stock updated (+${qty} PCS)`,
      date: this.receiveStockForm.date
    });
    this.showSuccess("Stock Updated Successfully!", "Warehouse stock has been received and updated.", [
      { label: "Product", value: `${prod.productId} (${prod.name})` },
      { label: "Added", value: `+${qty} PCS` },
      { label: "New Available Stock", value: `${newQty} PCS` },
      { label: "Updated by", value: updatedBy }
    ]);
  }
  addReceivedStock(product) {
    this.openReceiveStockModal(product);
  }
  // ==================== DELETE PRODUCT ====================
  deleteProduct(id) {
    const product = this.products.find((p) => p.id === id);
    const name = product ? `${product.productId} (${product.name})` : "this product";
    this.showConfirm("Delete Product?", `Are you sure you want to delete ${name}? This action cannot be undone.`, () => {
      if (product) {
        this.reportsService.recordEntry({
          productId: product.productId,
          productName: product.name,
          eventType: "PRODUCT_DELETED",
          eventTitle: "Product Deleted",
          quantityChange: -product.quantity,
          previousStock: product.quantity,
          newStock: 0,
          location: product.location,
          updatedBy: "Admin",
          remarks: "Product removed from warehouse inventory"
        });
      }
      this.products = this.products.filter((p) => p.id !== id);
      this.saveProducts();
      this.showSuccess("Product Deleted", `${name} was removed from warehouse products.`);
    }, "Delete Product", "error");
  }
  // ==================== CLOSE ADD / EDIT FORM ====================
  closeForm() {
    this.showForm = false;
    this.editingId = null;
    this.productForm = this.emptyProduct();
  }
  // ==================== TRACK PRODUCTS ====================
  trackByProductId(index, product) {
    return product.id;
  }
  static \u0275fac = function Products_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Products)(\u0275\u0275directiveInject(LccService), \u0275\u0275directiveInject(ReportsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Products, selectors: [["app-products"]], decls: 46, vars: 10, consts: [["emptyProducts", ""], ["transferNgForm", "ngForm"], ["productNgForm", "ngForm"], ["receiveNgForm", "ngForm"], [1, "products-page"], [1, "products-header"], [1, "header-text"], [1, "header-actions"], ["type", "button", 1, "restock-header-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"], ["points", "3.27 6.96 12 12.01 20.73 6.96"], ["x1", "12", "y1", "22.08", "x2", "12", "y2", "12"], ["type", "button", 1, "add-product-btn", 3, "click"], [1, "stock-register"], [1, "stock-summary"], [1, "summary-card"], [1, "summary-label"], [1, "products-toolbar"], ["type", "search", "placeholder", "Search by Product, ID, Producr Name, or location...", "aria-label", "Search products", 1, "product-search", 3, "ngModelChange", "ngModel"], ["class", "products-grid", 4, "ngIf", "ngIfElse"], [1, "switch-lcc-container"], ["type", "button", 1, "switch-lcc-btn", 3, "click"], [1, "btn-icon"], [1, "btn-arrow"], ["class", "modal-overlay transfer-overlay", 3, "click", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["class", "modal-overlay receive-stock-overlay", 3, "click", 4, "ngIf"], ["class", "modal-overlay add-name-overlay", 3, "click", 4, "ngIf"], ["class", "modal-overlay app-dialog-overlay", 3, "click", 4, "ngIf"], [1, "products-grid"], ["class", "product-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "product-card"], ["class", "product-image", 4, "ngIf"], [1, "product-details"], ["class", "product-id-badge", 4, "ngIf"], [4, "ngIf"], [1, "stock-quantity"], ["class", "product-low-stock-alert", 4, "ngIf"], [1, "product-actions"], ["type", "button", 1, "edit-product-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 20h9"], ["d", "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"], [1, "product-image"], [3, "src", "alt"], [1, "product-id-badge"], [1, "product-low-stock-alert"], [1, "alert-pulse-dot"], [1, "updated-by-name"], [1, "empty-products"], [1, "modal-overlay", "transfer-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "transferTitle", 1, "transfer-modal", 3, "click"], [1, "transfer-header"], ["id", "transferTitle"], ["type", "button", "aria-label", "Close transfer form", 1, "modal-close-btn", 3, "click"], [1, "transfer-form", 3, "ngSubmit"], [1, "form-field"], ["for", "transferProductId"], ["id", "transferProductId", "name", "transferProductId", "required", "", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["for", "transferProduct"], ["id", "transferProduct", "name", "productIdSelection", "required", "", 3, "ngModelChange", "ngModel"], ["class", "available-stock-banner", 4, "ngIf"], ["for", "transferDate"], ["id", "transferDate", "type", "date", "name", "date", "required", "", 3, "ngModelChange", "ngModel"], ["for", "switchedBy"], ["id", "switchedBy", "type", "text", "name", "switchedBy", "placeholder", "Enter person's name", "required", "", 3, "ngModelChange", "ngModel"], ["for", "transferQuantity"], ["id", "transferQuantity", "type", "number", "name", "quantity", "min", "1", "step", "1", "placeholder", "Enter quantity", "required", "", 3, "ngModelChange", "ngModel", "max"], ["class", "field-help", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "cancel-btn", 3, "click"], ["type", "submit", 1, "confirm-transfer-btn", 3, "disabled"], [3, "value", "disabled"], [1, "available-stock-banner"], [1, "stock-info-item"], [1, "stock-info-label"], [1, "stock-info-value"], [1, "field-help"], [1, "modal-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "productFormTitle", 1, "product-modal", 3, "click"], [1, "modal-header"], ["id", "productFormTitle"], ["type", "button", "aria-label", "Close form", 1, "modal-close-btn", 3, "click"], [1, "product-form", 3, "ngSubmit"], ["for", "productId"], ["id", "productId", "type", "text", "name", "productId", "required", "", "placeholder", "Enter Product ID is Auto-generated (e.g PR_101)", 3, "ngModelChange", "input", "ngModel"], ["for", "productName"], ["id", "productName", "type", "text", "name", "name", "required", "", "placeholder", "Enter product name (e.g. Saree, Towel, Soap...)", "autocomplete", "off", 3, "ngModelChange", "input", "ngModel"], ["for", "quantity"], ["id", "quantity", "type", "number", "name", "quantity", "min", "1", "step", "1", "required", "", "placeholder", "Enter quantity", 3, "ngModelChange", "ngModel"], ["for", "receivedDate"], ["id", "receivedDate", "type", "date", "name", "receivedDate", "required", "", 3, "ngModelChange", "ngModel"], ["for", "location"], ["id", "location", "name", "location", "required", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "productAddedBy"], ["id", "productAddedBy", "type", "text", "name", "productAddedBy", "required", "", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "button", 1, "save-product-btn", 3, "click"], [3, "value"], [1, "modal-overlay", "receive-stock-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "receiveStockTitle", 1, "product-modal", "receive-stock-modal", 3, "click"], ["id", "receiveStockTitle"], ["type", "button", "aria-label", "Close receive stock form", 1, "modal-close-btn", 3, "click"], ["for", "receiveProductSelect"], ["id", "receiveProductSelect", "name", "selectedProductId", "required", "", 1, "product-select-dropdown", 3, "ngModelChange", "ngModel"], ["disabled", "", "selected", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "receive-product-banner", 4, "ngIf"], ["class", "receive-select-hint", 4, "ngIf"], ["for", "receivePieces"], ["id", "receivePieces", "type", "number", "name", "additionalPieces", "min", "1", "step", "1", "required", "", "placeholder", "Enter additional quantity received (e.g. 10)", 3, "ngModelChange", "ngModel", "disabled"], ["class", "stock-calc-preview", 4, "ngIf"], ["for", "receiveUpdatedBy"], ["id", "receiveUpdatedBy", "type", "text", "name", "updatedBy", "required", "", "placeholder", "Enter name of person who received / updated the stock", 3, "ngModelChange", "ngModel", "disabled"], ["for", "receiveDate"], ["id", "receiveDate", "type", "date", "name", "receiveDate", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["type", "submit", 1, "save-product-btn", 3, "disabled"], [3, "ngValue"], [1, "receive-product-banner"], [1, "receive-banner-item"], [1, "banner-label"], [1, "banner-value"], [1, "banner-value", "stock-highlight"], [1, "receive-select-hint"], [1, "hint-icon"], [1, "stock-calc-preview"], [1, "calc-symbol"], [1, "calc-total"], [1, "modal-overlay", "add-name-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "addNameTitle", 1, "product-modal", "add-name-modal", 3, "click"], ["id", "addNameTitle"], ["type", "button", "aria-label", "Close", 1, "modal-close-btn", 3, "click"], [3, "ngSubmit"], ["for", "newProductName"], ["id", "newProductName", "type", "text", "name", "newProductName", "placeholder", "e.g. Jeans, Dhoti, Silk Saree", "required", "", "autofocus", "", 3, "ngModelChange", "ngModel"], ["class", "modal-field-error", 4, "ngIf"], [1, "modal-field-error"], [1, "modal-overlay", "app-dialog-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "product-modal", "app-dialog-modal", 3, "click"], [1, "dialog-icon-wrapper", 3, "ngClass"], ["class", "dialog-icon success", 4, "ngIf"], ["class", "dialog-icon warning", 4, "ngIf"], ["class", "dialog-icon error", 4, "ngIf"], [1, "dialog-content"], ["class", "dialog-message", 4, "ngIf"], ["class", "dialog-details-card", 4, "ngIf"], [1, "dialog-actions"], ["type", "button", "class", "cancel-btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "dialog-confirm-btn", 3, "click", "ngClass"], [1, "dialog-icon", "success"], [1, "dialog-icon", "warning"], [1, "dialog-icon", "error"], [1, "dialog-message"], [1, "dialog-details-card"], ["class", "detail-row", 4, "ngFor", "ngForOf"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"]], template: function Products_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "header", 5)(2, "div", 6)(3, "h1");
      \u0275\u0275text(4, "Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Manage warehouse products and available stock.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 7)(8, "button", 8);
      \u0275\u0275listener("click", function Products_Template_button_click_8_listener() {
        return ctx.openReceiveStockModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 9);
      \u0275\u0275element(10, "path", 10)(11, "polyline", 11)(12, "line", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " Restock ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "button", 13);
      \u0275\u0275listener("click", function Products_Template_button_click_14_listener() {
        return ctx.openAddForm();
      });
      \u0275\u0275text(15, " Add Products ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "section", 14)(17, "div", 15)(18, "div", 16)(19, "span", 17);
      \u0275\u0275text(20, "Total Pieces");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "h2");
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 16)(24, "span", 17);
      \u0275\u0275text(25, "Total Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "h2");
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 18)(29, "input", 19);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function Products_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275template(30, Products_div_30_Template, 2, 2, "div", 20)(31, Products_ng_template_31_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(33, "div", 21)(34, "button", 22);
      \u0275\u0275listener("click", function Products_Template_button_click_34_listener() {
        return ctx.openTransferForm();
      });
      \u0275\u0275elementStart(35, "span", 23);
      \u0275\u0275text(36, "\u21C4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275text(38, "Move to LCC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 24);
      \u0275\u0275text(40, "\u2192");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(41, Products_div_41_Template, 55, 11, "div", 25)(42, Products_div_42_Template, 60, 12, "div", 26)(43, Products_div_43_Template, 47, 13, "div", 27)(44, Products_div_44_Template, 23, 3, "div", 28)(45, Products_div_45_Template, 15, 10, "div", 29);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const emptyProducts_r18 = \u0275\u0275reference(32);
      \u0275\u0275advance(22);
      \u0275\u0275textInterpolate(ctx.totalPieces);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.products.length);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredProducts.length > 0)("ngIfElse", emptyProducts_r18);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.showTransferForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showReceiveStockModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAddNameModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.modalDialog.show);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, NgForm, DatePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.products-page[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  min-width: 0;\n  padding: 36px 36px 96px;\n  background: #ffffff;\n  color: #263238;\n}\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  font: inherit;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.products-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.header-text[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.products-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: #222d3d;\n  font-size: clamp(28px, 3vw, 40px);\n  font-weight: 750;\n}\n.products-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #7b8490;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.reset-data-btn[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  border: 1.5px solid #fecaca;\n  border-radius: 10px;\n  background: #fff5f5;\n  color: #dc2626;\n  font-weight: 700;\n  font-size: 13.5px;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n.reset-data-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #f87171;\n  color: #b91c1c;\n  transform: translateY(-1px);\n}\n.restock-header-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 13px 20px;\n  border: 1.5px solid #ebd74d;\n  border-radius: 10px;\n  background: #fffdf0;\n  color: #5c4800;\n  font-size: 14px;\n  font-weight: 700;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.restock-header-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: #8c7300;\n  transition: transform 0.2s ease, stroke 0.2s ease;\n}\n.restock-header-btn[_ngcontent-%COMP%]:hover {\n  background: #F9E662;\n  border-color: #dfc833;\n  color: #1e293b;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(249, 230, 98, 0.4);\n}\n.restock-header-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  stroke: #1e293b;\n  transform: rotate(12deg);\n}\n.restock-header-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.add-product-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 13px 20px;\n  border: 1px solid #ebd74d;\n  border-radius: 10px;\n  background: #F9E662;\n  color: #1e293b;\n  font-size: 14px;\n  font-weight: 700;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.add-product-btn[_ngcontent-%COMP%]:hover {\n  background: #ecd548;\n  border-color: #dfc833;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(249, 230, 98, 0.4);\n}\n.stock-register[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 28px;\n  border: 1px solid #eeece5;\n  border-radius: 20px;\n  background: #fff;\n}\n.stock-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n  margin-bottom: 26px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 20px;\n  border: 1px solid #f2e99d;\n  border-radius: 14px;\n  background: #ffffff;\n  background:\n    linear-gradient(\n      180deg,\n      #fff8dc 0%,\n      #fffdf8 45px,\n      #ffffff 90px);\n}\n.summary-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3.5px;\n  background: #F9E662;\n}\n.summary-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  color: #4b5563;\n  font-size: 13px;\n  font-weight: 600;\n}\n.summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #263442;\n  font-size: 28px;\n  font-weight: 750;\n}\n.products-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.product-search[_ngcontent-%COMP%] {\n  display: block;\n  width: min(100%, 440px);\n  min-width: 0;\n  padding: 13px 15px;\n  border: 1px solid #e6e4de;\n  border-radius: 10px;\n  background: #fff;\n  color: #263442;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.product-search[_ngcontent-%COMP%]::placeholder {\n  color: #9aa1aa;\n}\n.product-search[_ngcontent-%COMP%]:focus {\n  border-color: #d6a800;\n  box-shadow: 0 0 0 3px rgba(255, 202, 40, 0.16);\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  align-items: start;\n  gap: 22px;\n}\n.product-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #dfd8cb;\n  border-radius: 18px;\n  background: #ffffff;\n  box-shadow: 0 4px 16px rgba(34, 45, 61, 0.05), 0 1px 3px rgba(34, 45, 61, 0.04);\n  transition:\n    transform 0.22s ease,\n    box-shadow 0.22s ease,\n    border-color 0.22s ease;\n}\n.product-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3.5px;\n  background: #F9E662;\n  z-index: 2;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: #F9E662;\n  box-shadow: 0 12px 28px rgba(34, 45, 61, 0.08), 0 3px 8px rgba(249, 230, 98, 0.25);\n}\n.product-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 210px;\n  overflow: hidden;\n  background: #fff8e5;\n}\n.product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.no-image[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  color: #858d99;\n  font-size: 13px;\n}\n.product-details[_ngcontent-%COMP%] {\n  padding: 22px;\n}\n.product-id-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding: 4px 10px;\n  border-radius: 7px;\n  background: #fefad6;\n  border: 1px solid #F9E662;\n  color: #5c4800;\n  font-size: 11.5px;\n  font-weight: 750;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n}\n.product-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  color: #111827;\n  font-size: 20px;\n  font-weight: 750;\n  line-height: 1.35;\n  overflow-wrap: anywhere;\n}\n.product-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin: 0;\n  padding: 12px 0;\n  border-bottom: 1px solid #f0eee6;\n  font-size: 13px;\n  line-height: 1.5;\n}\n.product-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #374151;\n  font-weight: 650;\n}\n.product-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #1f2937;\n  font-weight: 600;\n  overflow-wrap: anywhere;\n}\n.stock-quantity[_ngcontent-%COMP%] {\n  color: #1e293b !important;\n  font-weight: 750 !important;\n  background: #fff8e1;\n  border: 1px solid #ffecb3;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.product-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.product-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 22px 20px;\n  border-top: 1px solid #f5f2eb;\n  background: #fffdfa;\n}\n.receive-stock-btn[_ngcontent-%COMP%], \n.edit-product-btn[_ngcontent-%COMP%], \n.delete-product-btn[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  border: 1px solid #d1d5db;\n  border-radius: 9px;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 650;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.receive-stock-btn[_ngcontent-%COMP%] {\n  border-color: #ebd74d;\n  background: #fefad6;\n  color: #5c4800;\n  box-shadow: 0 1px 3px rgba(249, 230, 98, 0.2);\n}\n.receive-stock-btn[_ngcontent-%COMP%]:hover {\n  background: #F9E662;\n  border-color: #ebd43f;\n  color: #1e293b;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 10px rgba(249, 230, 98, 0.35);\n}\n.edit-product-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border-color: #d1d5db;\n  background: #ffffff;\n  color: #374151;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.edit-product-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  stroke: #64748b;\n  transition: stroke 0.2s ease;\n}\n.edit-product-btn[_ngcontent-%COMP%]:hover {\n  border-color: #f0c326;\n  background: #fffdf5;\n  color: #111827;\n  transform: translateY(-1px);\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);\n}\n.edit-product-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  stroke: #b45309;\n}\n.delete-product-btn[_ngcontent-%COMP%] {\n  color: #c53636;\n  border-color: #fbcfe8;\n}\n.delete-product-btn[_ngcontent-%COMP%]:hover {\n  border-color: #f43f5e;\n  background: #fff1f2;\n}\n.empty-products[_ngcontent-%COMP%] {\n  padding: 55px 20px;\n  text-align: center;\n}\n.empty-products[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: #263442;\n  font-size: 19px;\n}\n.empty-products[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #7b8490;\n  font-size: 14px;\n  line-height: 1.7;\n}\n.switch-lcc-container[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 28px;\n  bottom: 28px;\n  z-index: 990;\n  margin: 0;\n  padding: 0;\n  border: none;\n  pointer-events: none;\n}\n.switch-lcc-btn[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  min-height: 48px;\n  padding: 12px 24px;\n  border: 1.5px solid #d4a500;\n  border-radius: 50px;\n  background:\n    linear-gradient(\n      135deg,\n      #fff9e6 0%,\n      #ffefb8 45%,\n      #ffd54f 100%);\n  color: #2b2202;\n  font-size: 14.5px;\n  font-weight: 750;\n  cursor: pointer;\n  box-shadow: 0 8px 24px rgba(217, 165, 0, 0.38), 0 3px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);\n  white-space: nowrap;\n}\n.switch-lcc-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #fff5cc 0%,\n      #ffe885 45%,\n      #ffca28 100%);\n  border-color: #bf9000;\n  box-shadow: 0 12px 30px rgba(217, 165, 0, 0.48), 0 4px 12px rgba(0, 0, 0, 0.14);\n  transform: translateY(-3px) scale(1.02);\n}\n.switch-lcc-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.98);\n  box-shadow: 0 4px 12px rgba(217, 165, 0, 0.3);\n}\n.switch-lcc-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  display: inline-block;\n}\n.switch-lcc-btn[_ngcontent-%COMP%]   .btn-arrow[_ngcontent-%COMP%] {\n  font-size: 16px;\n  transition: transform 0.2s ease;\n}\n.switch-lcc-btn[_ngcontent-%COMP%]:hover   .btn-arrow[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow-y: auto;\n  padding: 20px;\n  background: rgba(30, 24, 10, 0.42);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.transfer-overlay[_ngcontent-%COMP%] {\n  background: rgba(45, 36, 12, 0.38);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.transfer-modal[_ngcontent-%COMP%] {\n  width: min(100%, 650px);\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 30px;\n  border: 1.5px solid #fae8a4;\n  border-radius: 22px;\n  background: #ffffff;\n  color: #263238;\n  box-shadow: 0 24px 70px rgba(184, 134, 11, 0.16), 0 8px 24px rgba(0, 0, 0, 0.05);\n}\n.transfer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f9f0d4;\n}\n.transfer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  color: #263442;\n  font-size: 24px;\n  font-weight: 750;\n}\n.transfer-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #7b8490;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.transfer-header[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  flex-shrink: 0;\n  border: 1.5px solid #f2dfa0;\n  border-radius: 10px;\n  background: #fffdf5;\n  color: #5a4b16;\n  font-size: 24px;\n  line-height: 1;\n  transition: all 0.2s ease;\n}\n.transfer-header[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%]:hover {\n  border-color: #e5b300;\n  background: #ffeb99;\n  color: #263238;\n}\n.transfer-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #374151;\n  font-size: 13px;\n  font-weight: 650;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #c53636;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  min-height: 46px;\n  padding: 11px 14px;\n  border: 1.5px solid #ebdca8;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #293541;\n  font-family: inherit;\n  font-size: 14px;\n  outline: none;\n  cursor: pointer;\n  transition:\n    border-color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  appearance: auto;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover, \n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  border-color: #dfb83b;\n  background: #fffef8;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #e5a900;\n  background: #fffdf2;\n  box-shadow: 0 0 0 3.5px rgba(255, 202, 40, 0.25);\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #ffffff;\n  color: #293541;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:disabled {\n  color: #a4abb5;\n  background: #faf8f2;\n}\n.available-stock-banner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  padding: 14px 18px;\n  border: 1.5px solid #f6e3a4;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #fffdf2 0%,\n      #fff9e6 100%);\n}\n.stock-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stock-info-label[_ngcontent-%COMP%] {\n  color: #8c7830;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stock-info-value[_ngcontent-%COMP%] {\n  color: #263442;\n  font-size: 15px;\n  font-weight: 750;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 6px;\n  padding-top: 18px;\n  border-top: 1px solid #f7efd7;\n}\n.transfer-modal[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 11px 22px;\n  border: 1.5px solid #ebdca8;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #5a4b16;\n  font-size: 13.5px;\n  font-weight: 700;\n  transition: all 0.2s ease;\n}\n.transfer-modal[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #fff8e1;\n  border-color: #dfb83b;\n  color: #3b2f06;\n}\n.confirm-transfer-btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 11px 24px;\n  border: 1.5px solid #e5b800;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffd740 0%,\n      #ffca28 100%);\n  color: #263238;\n  font-size: 13.5px;\n  font-weight: 750;\n  cursor: pointer;\n  box-shadow: 0 3px 10px rgba(255, 202, 40, 0.32);\n  transition: all 0.2s ease;\n}\n.confirm-transfer-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      180deg,\n      #ffca28 0%,\n      #f2b900 100%);\n  box-shadow: 0 5px 16px rgba(242, 185, 0, 0.42);\n  transform: translateY(-1px);\n}\n.confirm-transfer-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.product-modal[_ngcontent-%COMP%] {\n  width: min(100%, 700px);\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 28px;\n  border: 1px solid #eeece5;\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.18);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 26px;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #263442;\n  font-size: 25px;\n  font-weight: 750;\n}\n.modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #7b8490;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.modal-close-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  flex-shrink: 0;\n  border: 1px solid #e6e4de;\n  border-radius: 10px;\n  background: #fff;\n  color: #263442;\n  font-size: 25px;\n  line-height: 1;\n}\n.modal-close-btn[_ngcontent-%COMP%]:hover {\n  border-color: #ffca28;\n  background: #fff5ce;\n}\n.product-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 9px;\n  color: #344054;\n  font-size: 13px;\n  font-weight: 650;\n}\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #c53636;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  min-height: 44px;\n  padding: 11px 14px;\n  border: 1px solid #e6e4de;\n  border-radius: 10px;\n  background: #fff;\n  color: #293541;\n  font-family: inherit;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #d6a800;\n  box-shadow: 0 0 0 3px rgba(255, 202, 40, 0.16);\n}\n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  appearance: auto;\n  cursor: pointer;\n}\n.product-name-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  gap: 8px;\n  width: 100%;\n}\n.product-name-row[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  width: 100%;\n}\n.add-name-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 0 15px;\n  border: 1px solid #ffca28;\n  border-radius: 10px;\n  background: #ffca28;\n  color: #293541;\n  font-size: 13px;\n  font-weight: 700;\n  white-space: nowrap;\n  transition: background 0.2s ease;\n}\n.add-name-btn[_ngcontent-%COMP%]:hover {\n  background: #f3b900;\n}\n#location[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 46px;\n  padding: 12px 14px;\n  border: 1px solid #e6e4de;\n  border-radius: 10px;\n  background-color: #fff;\n  color: #293541;\n  font-size: 14px;\n  cursor: pointer;\n}\n#location[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #d6a800;\n  box-shadow: 0 0 0 3px rgba(255, 202, 40, 0.16);\n}\n#location[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #fff;\n  color: #293541;\n}\n.field-help[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  color: #858d99;\n  font-size: 11px;\n  line-height: 1.6;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 8px;\n  padding-top: 20px;\n  border-top: 1px solid #f0eee8;\n}\n.cancel-btn[_ngcontent-%COMP%], \n.save-product-btn[_ngcontent-%COMP%] {\n  min-height: 43px;\n  padding: 11px 20px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 700;\n  transition: background 0.2s ease, border-color 0.2s ease;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  border: 1px solid #e6e4de;\n  background: #fff;\n  color: #344054;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  border-color: #ffca28;\n  background: #fff7d8;\n}\n.save-product-btn[_ngcontent-%COMP%] {\n  border: 1px solid #ffca28;\n  background: #ffca28;\n  color: #263238;\n}\n.save-product-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f2b900;\n}\n.save-product-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n@media (max-width: 1050px) {\n  .products-page[_ngcontent-%COMP%] {\n    padding: 30px 24px;\n  }\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .stock-register[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n}\n@media (max-width: 650px) {\n  .products-page[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .products-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 18px;\n    margin-bottom: 24px;\n  }\n  .restock-header-btn[_ngcontent-%COMP%], \n   .add-product-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .stock-register[_ngcontent-%COMP%] {\n    padding: 16px;\n    border-radius: 15px;\n  }\n  .stock-summary[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 12px;\n  }\n  .summary-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .products-toolbar[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .product-search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 18px;\n  }\n  .product-image[_ngcontent-%COMP%] {\n    height: 220px;\n  }\n  .switch-lcc-container[_ngcontent-%COMP%] {\n    margin-top: 22px;\n  }\n  .switch-lcc-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .modal-overlay[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    padding: 12px;\n  }\n  .product-modal[_ngcontent-%COMP%], \n   .transfer-modal[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: calc(100vh - 24px);\n    padding: 20px;\n    border-radius: 16px;\n  }\n  .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .transfer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .available-stock-banner[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 10px;\n  }\n  .product-name-row[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .add-name-btn[_ngcontent-%COMP%] {\n    padding: 0 12px;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .cancel-btn[_ngcontent-%COMP%], \n   .save-product-btn[_ngcontent-%COMP%], \n   .confirm-transfer-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 380px) {\n  .products-page[_ngcontent-%COMP%] {\n    padding: 18px 10px;\n  }\n  .stock-register[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .product-details[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .product-actions[_ngcontent-%COMP%] {\n    padding: 0 15px 15px;\n  }\n  .product-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    gap: 8px;\n    font-size: 11px;\n  }\n  .product-modal[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n.stock-quantity.stock-danger[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 800;\n}\n.product-low-stock-alert[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 8px;\n  margin-bottom: 4px;\n  padding: 5px 10px;\n  border-radius: 8px;\n  background: #fee2e2;\n  border: 1px solid #fca5a5;\n  color: #dc2626;\n  font-size: 11.5px;\n  font-weight: 750;\n  animation: _ngcontent-%COMP%_productWarningBlink 1.2s infinite ease-in-out;\n}\n.product-low-stock-alert[_ngcontent-%COMP%]   .alert-pulse-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background-color: #dc2626;\n  box-shadow: 0 0 6px #dc2626;\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_dotFlash 1.2s infinite ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_productWarningBlink {\n  0%, 100% {\n    opacity: 1;\n    background: #fee2e2;\n    box-shadow: 0 0 8px rgba(220, 38, 38, 0.25);\n  }\n  50% {\n    opacity: 0.55;\n    background: #fff5f5;\n    box-shadow: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_dotFlash {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(0.6);\n    opacity: 0.3;\n  }\n}\n.receive-stock-modal[_ngcontent-%COMP%] {\n  width: min(100%, 640px);\n}\n.product-select-dropdown[_ngcontent-%COMP%] {\n  min-height: 48px;\n  border: 1.5px solid #ebdca8 !important;\n  background-color: #fffdf8 !important;\n  font-weight: 600 !important;\n  color: #1e293b !important;\n  cursor: pointer;\n}\n.product-select-dropdown[_ngcontent-%COMP%]:focus {\n  border-color: #d6a800 !important;\n  box-shadow: 0 0 0 3px rgba(249, 230, 98, 0.3) !important;\n}\n.receive-select-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  margin-bottom: 18px;\n  border-radius: 12px;\n  background: #fffdf5;\n  border: 1.5px dashed #fae8a4;\n  color: #856a1e;\n  font-size: 13.5px;\n  font-weight: 600;\n  line-height: 1.5;\n}\n.receive-select-hint[_ngcontent-%COMP%]   .hint-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.receive-product-banner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  padding: 16px 20px;\n  margin-bottom: 22px;\n  border: 1.5px solid #fae8a4;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #fffdf2 0%,\n      #fff9e6 100%);\n}\n.receive-banner-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.banner-label[_ngcontent-%COMP%] {\n  color: #8c7830;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.banner-value[_ngcontent-%COMP%] {\n  color: #263442;\n  font-size: 15px;\n  font-weight: 750;\n}\n.banner-value.stock-highlight[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.stock-calc-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 11px 16px;\n  margin-top: 4px;\n  margin-bottom: 6px;\n  border-radius: 10px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #166534;\n  font-size: 13.5px;\n}\n.stock-calc-preview[_ngcontent-%COMP%]   .calc-symbol[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #15803d;\n}\n.stock-calc-preview[_ngcontent-%COMP%]   .calc-total[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-weight: 700;\n  color: #166534;\n}\n.updated-by-name[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 700;\n  background: #f1f5f9;\n  padding: 2px 8px;\n  border-radius: 6px;\n  border: 1px solid #e2e8f0;\n}\n.add-name-modal[_ngcontent-%COMP%] {\n  width: min(100%, 480px);\n}\n.modal-field-error[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  font-size: 12.5px;\n  font-weight: 600;\n}\n.app-dialog-modal[_ngcontent-%COMP%] {\n  width: min(100%, 480px);\n  padding: 30px 26px;\n  text-align: center;\n  border-radius: 22px;\n}\n.dialog-icon-wrapper[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto 16px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  font-size: 28px;\n}\n.dialog-icon-wrapper.success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n  border: 2px solid #86efac;\n}\n.dialog-icon-wrapper.warning[_ngcontent-%COMP%], \n.dialog-icon-wrapper.confirm[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n  border: 2px solid #fde68a;\n}\n.dialog-icon-wrapper.error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n  border: 2px solid #fca5a5;\n}\n.dialog-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #1e293b;\n  font-size: 21px;\n  font-weight: 750;\n}\n.dialog-message[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  color: #64748b;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.dialog-details-card[_ngcontent-%COMP%] {\n  text-align: left;\n  background: #fffdf2;\n  border: 1.5px solid #f6e8b8;\n  border-radius: 12px;\n  padding: 14px 18px;\n  margin: 16px 0 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.dialog-details-card[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  font-size: 13.5px;\n}\n.dialog-details-card[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  color: #78716c;\n  font-weight: 500;\n}\n.dialog-details-card[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: #1c1917;\n  font-weight: 750;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 20px;\n}\n.dialog-confirm-btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 11px 28px;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n}\n.dialog-confirm-btn.success[_ngcontent-%COMP%], \n.dialog-confirm-btn.warning[_ngcontent-%COMP%], \n.dialog-confirm-btn.confirm[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #ffd740 0%,\n      #ffca28 100%);\n  color: #263238;\n  border: 1.5px solid #e5b800;\n  box-shadow: 0 3px 10px rgba(255, 202, 40, 0.32);\n}\n.dialog-confirm-btn.success[_ngcontent-%COMP%]:hover, \n.dialog-confirm-btn.warning[_ngcontent-%COMP%]:hover, \n.dialog-confirm-btn.confirm[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      180deg,\n      #ffca28 0%,\n      #f2b900 100%);\n  box-shadow: 0 5px 16px rgba(242, 185, 0, 0.42);\n  transform: translateY(-1px);\n}\n.dialog-confirm-btn.error[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #ffffff;\n  border: 1.5px solid #b91c1c;\n  box-shadow: 0 3px 10px rgba(220, 38, 38, 0.25);\n}\n.dialog-confirm-btn.error[_ngcontent-%COMP%]:hover {\n  background: #b91c1c;\n  box-shadow: 0 5px 16px rgba(220, 38, 38, 0.35);\n  transform: translateY(-1px);\n}\n@media (max-width: 1100px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 18px;\n  }\n}\n@media (max-width: 768px) {\n  .products-page[_ngcontent-%COMP%] {\n    padding: 20px 16px 88px;\n  }\n  .products-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    margin-bottom: 24px;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n  .restock-header-btn[_ngcontent-%COMP%], \n   .add-product-btn[_ngcontent-%COMP%], \n   .reset-data-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    text-align: center;\n  }\n  .stock-register[_ngcontent-%COMP%] {\n    padding: 16px;\n    border-radius: 14px;\n  }\n  .stock-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .products-toolbar[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .product-search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .switch-lcc-container[_ngcontent-%COMP%] {\n    right: 18px;\n    bottom: 20px;\n  }\n  .switch-lcc-btn[_ngcontent-%COMP%] {\n    width: auto !important;\n    min-height: 44px;\n    padding: 10px 20px;\n    font-size: 13.5px;\n  }\n  .modal-overlay[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .modal-dialog[_ngcontent-%COMP%], \n   .transfer-modal[_ngcontent-%COMP%], \n   .receive-modal[_ngcontent-%COMP%], \n   .product-form-modal[_ngcontent-%COMP%], \n   .product-modal[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: auto;\n    padding: 20px 16px !important;\n    border-radius: 16px !important;\n    max-height: 92vh !important;\n  }\n}\n@media (max-width: 540px) {\n  .products-page[_ngcontent-%COMP%] {\n    padding: 14px 12px 80px;\n  }\n  .products-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .stock-register[_ngcontent-%COMP%] {\n    padding: 14px 12px;\n  }\n  .switch-lcc-container[_ngcontent-%COMP%] {\n    right: 14px;\n    bottom: 16px;\n  }\n  .switch-lcc-btn[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n    font-size: 13px;\n    gap: 8px;\n  }\n  .product-image[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n  .product-details[_ngcontent-%COMP%] {\n    padding: 16px 14px 12px;\n  }\n  .product-actions[_ngcontent-%COMP%] {\n    padding: 12px 14px 16px;\n    gap: 8px;\n  }\n  .receive-stock-btn[_ngcontent-%COMP%], \n   .edit-product-btn[_ngcontent-%COMP%], \n   .delete-product-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 80px;\n    text-align: center;\n    justify-content: center;\n    padding: 9px 8px;\n    font-size: 12px;\n  }\n  .available-stock-banner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 8px;\n    padding: 12px;\n  }\n  .dialog-actions[_ngcontent-%COMP%], \n   .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    gap: 8px;\n  }\n  .dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=products.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Products, [{
    type: Component,
    args: [{ selector: "app-products", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="products-page">

  <!-- Page Header -->
  <header class="products-header">
    <div class="header-text">
      <h1>Products</h1>
      <p>Manage warehouse products and available stock.</p>
    </div>

    <div class="header-actions">
      <button
        type="button"
        class="restock-header-btn"
        (click)="openReceiveStockModal()"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
        Restock
      </button>

      <button
        type="button"
        class="add-product-btn"
        (click)="openAddForm()"
      >
        Add Products
      </button>
    </div>
  </header>

  <!-- Stock Register -->
  <section class="stock-register">

    <!-- Stock Summary -->
    <div class="stock-summary">
      <div class="summary-card">
        <span class="summary-label">Total Pieces</span>
        <h2>{{ totalPieces }}</h2>
      </div>
      <div class="summary-card">
        <span class="summary-label">Total Products</span>
        <h2>{{ products.length }}</h2>
      </div>

      

      

    </div>

    <!-- Search -->
    <div class="products-toolbar">
      <input
        type="search"
        class="product-search"
        placeholder="Search by Product, ID, Producr Name, or location..."
        [(ngModel)]="searchText"
        aria-label="Search products"
      />
    </div>

    <!-- Product Cards -->
    <div
      class="products-grid"
      *ngIf="filteredProducts.length > 0; else emptyProducts"
    >

      <article
        class="product-card"
        *ngFor="
          let product of filteredProducts;
          trackBy: trackByProductId
        "
      >

        <!-- Product Image -->
        <div class="product-image" *ngIf="product.image">
          <img
            [src]="product.image"
            [alt]="product.name"
          />
        </div>

        <!-- Product Details -->
        <div class="product-details">

          <span class="product-id-badge" *ngIf="product.productId">
            {{ product.productId }}
          </span>

          <h3>{{ product.name }}</h3>

          <p *ngIf="product.productId">
            <strong>Product ID:</strong>
            <span>{{ product.productId }}</span>
          </p>

          <p>
            <strong>Available Stock:</strong>
            <span class="stock-quantity" [class.stock-danger]="product.quantity < 20">{{ product.quantity }} PCS</span>
          </p>

          <div class="product-low-stock-alert" *ngIf="product.quantity < 20">
            <span class="alert-pulse-dot"></span>
            About to update the product
          </div>

          <p>
            <strong>Received Date:</strong>
            <span>
              {{ product.receivedDate | date:'dd-MM-yyyy' }}
            </span>
          </p>

          <p *ngIf="product.updatedBy || product.addedBy">
            <strong>Updated By:</strong>
            <span class="updated-by-name">{{ product.updatedBy || product.addedBy }}</span>
          </p>

          <p>
            <strong>Location:</strong>
            <span>{{ product.location || 'Not assigned' }}</span>
          </p>

        </div>

        <!-- Product Actions -->
        <div class="product-actions">

          <button
            type="button"
            class="edit-product-btn"
            (click)="editProduct(product)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            Edit
          </button>

          <!-- <button
            type="button"
            class="delete-product-btn"
            (click)="deleteProduct(product.id)"
          >
            Delete
          </button> -->

        </div>

      </article>

    </div>

    <!-- Empty State -->
    <ng-template #emptyProducts>
      <div class="empty-products">

        <h3>
          {{
            searchText
              ? 'No matching products found'
              : 'No products available'
          }}
        </h3>

        <p>
          {{
            searchText
              ? 'Try another product, ID, or location.'
              : 'Click Add Product to register your first product.'
          }}
        </p>

      </div>
    </ng-template>

    <!-- Switch to LCC -->
    <div class="switch-lcc-container">
      <button
        type="button"
        class="switch-lcc-btn"
        (click)="openTransferForm()"
      >
        <span class="btn-icon">\u21C4</span>
        <span>Move to LCC</span>
        <span class="btn-arrow">&rarr;</span>
      </button>
    </div>

  </section>

  <!-- Switch Stock to LCC Modal -->
  <div
    class="modal-overlay transfer-overlay"
    *ngIf="showTransferForm"
    (click)="closeTransferForm()"
  >

    <section
      class="transfer-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="transferTitle"
      (click)="$event.stopPropagation()"
    >

      <!-- Modal Header -->
      <div class="transfer-header">
        <div>
          <h2 id="transferTitle">Switch Stock to LCC</h2>
          <p>Transfer products from Warehouse to LCC Inventory.</p>
        </div>

        <button
          type="button"
          class="modal-close-btn"
          aria-label="Close transfer form"
          (click)="closeTransferForm()"
        >
          &times;
        </button>
      </div>

      <!-- Transfer Form -->
      <form
        class="transfer-form"
        #transferNgForm="ngForm"
        (ngSubmit)="confirmTransfer()"
      >

        <!-- Product ID Dropdown -->
        <div class="form-field">
          <label for="transferProductId">
            Product ID <span>*</span>
          </label>

          <select
            id="transferProductId"
            name="transferProductId"
            [(ngModel)]="transferForm.productId"
            required
          >
            <option value="" disabled>Select Product ID</option>
            <option
              *ngFor="let product of products"
              [value]="product.id"
              [disabled]="product.quantity < 1"
            >
              {{ product.productId + " - " + product.name }}
            </option>
          </select>
        </div>

        <!-- Product Name Dropdown -->
        <div class="form-field">
          <label for="transferProduct">
            Product Name <span>*</span>
          </label>

          <select
            id="transferProduct"
            name="productIdSelection"
            [(ngModel)]="transferForm.productId"
            required
          >
            <option value="" disabled>Select Product Name</option>
            <option
              *ngFor="let product of products"
              [value]="product.id"
              [disabled]="product.quantity < 1"
            >
              {{ product.name + " - " + product.productId }}
            </option>
          </select>
        </div>

        <!-- Available Stock Banner -->
        <div class="available-stock-banner" *ngIf="selectedTransferProduct">
          <div class="stock-info-item">
            <span class="stock-info-label">Available Stock</span>
            <strong class="stock-info-value">{{ remainingTransferStock }} PCS</strong>
          </div>
          <div class="stock-info-item">
            <span class="stock-info-label">Warehouse Location</span>
            <strong class="stock-info-value">{{ selectedTransferProduct.location || 'Not assigned' }}</strong>
          </div>
        </div>

        <!-- Date -->
        <div class="form-field">
          <label for="transferDate">Date <span>*</span></label>

          <input
            id="transferDate"
            type="date"
            name="date"
            [(ngModel)]="transferForm.date"
            required
          />
        </div>

        <!-- Switched By -->
        <div class="form-field">
          <label for="switchedBy">Switched By <span>*</span></label>

          <input
            id="switchedBy"
            type="text"
            name="switchedBy"
            [(ngModel)]="transferForm.switchedBy"
            placeholder="Enter person's name"
            required
          />
        </div>

        <!-- Quantity -->
        <div class="form-field">
          <label for="transferQuantity">Quantity (PCS) <span>*</span></label>

          <input
            id="transferQuantity"
            type="number"
            name="quantity"
            [(ngModel)]="transferForm.quantity"
            min="1"
            [max]="selectedTransferProduct?.quantity ?? 1"
            step="1"
            placeholder="Enter quantity"
            required
          />
          <small class="field-help" *ngIf="selectedTransferProduct">
            Maximum available to transfer: {{ selectedTransferProduct.quantity }} PCS
          </small>
        </div>

        <!-- Form Actions -->
        <div class="form-actions">
          <button
            type="button"
            class="cancel-btn"
            (click)="closeTransferForm()"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="confirm-transfer-btn"
            [disabled]="
              transferNgForm.invalid ||
              !selectedTransferProduct ||
              !transferForm.quantity ||
              transferForm.quantity < 1 ||
              transferForm.quantity > (selectedTransferProduct?.quantity ?? 0)
            "
          >
            Confirm Transfer
          </button>
        </div>

      </form>

    </section>

  </div>

  <!-- Add / Edit Product Modal -->
  <div
    class="modal-overlay"
    *ngIf="showForm"
    (click)="closeForm()"
  >

    <section
      class="product-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="productFormTitle"
      (click)="$event.stopPropagation()"
    >

      <!-- Modal Header -->
      <div class="modal-header">

        <div>
          <h2 id="productFormTitle">
            {{
              editingId !== null
                ? 'Edit Product'
                : 'Add Product'
            }}
          </h2>

          <p>Enter the product and stock details.</p>
        </div>

        <button
          type="button"
          class="modal-close-btn"
          aria-label="Close form"
          (click)="closeForm()"
        >
          &times;
        </button>

      </div>

      <!-- Product Form -->
      <form
        class="product-form"
        #productNgForm="ngForm"
        (ngSubmit)="saveProduct()"
      >

        <!-- Product ID -->
        <div class="form-field">

          <label for="productId">
            Product ID <span>*</span>
          </label>

          <input
            id="productId"
            type="text"
            name="productId"
            [(ngModel)]="productForm.productId"
            (input)="onProductIdInput()"
            required
            placeholder="Enter Product ID is Auto-generated (e.g PR_101)"
          />

        </div>

        <!-- Product Name (Free text editable input with datalist suggestions) -->
        <div class="form-field">

          <label for="productName">
            Product Name <span>*</span>
          </label>

          <input
            id="productName"
            type="text"
            name="name"
            [(ngModel)]="productForm.name"
            (ngModelChange)="onProductNameChange($event)"
            (input)="onProductNameChange(productForm.name)"
            required
            placeholder="Enter product name (e.g. Saree, Towel, Soap...)"
            autocomplete="off"
          />

        </div>

        <!-- Quantity -->
        <div class="form-field">

          <label for="quantity">
            Total Quantity (PCS) <span>*</span>
          </label>

          <input
            id="quantity"
            type="number"
            name="quantity"
            [(ngModel)]="productForm.quantity"
            min="1"
            step="1"
            required
            placeholder="Enter quantity"
          />

        </div>

        <!-- Received Date -->
        <div class="form-field">

          <label for="receivedDate">
            Received Date <span>*</span>
          </label>

          <input
            id="receivedDate"
            type="date"
            name="receivedDate"
            [(ngModel)]="productForm.receivedDate"
            required
          />

        </div>


        <!-- Location Dropdown -->
        <div class="form-field">

          <label for="location">
            Location <span>*</span>
          </label>

          <select
            id="location"
            name="location"
            [(ngModel)]="productForm.location"
            required
          >
            <option value="" disabled>
              Select a location
            </option>

            <option
              *ngFor="let location of locations"
              [value]="location"
            >
              {{ location }}
            </option>

          </select>

          <small class="field-help">
            Select the warehouse location where the product is stored.
          </small>

        </div>

        <!-- Added By / Updated By (Whom) -->
        <div class="form-field">

          <label for="productAddedBy">
            {{ editingId !== null ? 'Updated By (Whom)' : 'Your Name' }} <span>*</span>
          </label>

          <input
            id="productAddedBy"
            type="text"
            name="productAddedBy"
            [(ngModel)]="productForm.updatedBy"
            required
            [placeholder]="editingId !== null ? 'Enter name of person updating this product' : 'Enter name of person adding this product'"
          />

          <small class="field-help">
            {{ editingId !== null ? 'Name of staff or person updating this product.' : 'Name of staff or person adding/registering this product.' }}
          </small>

        </div>

        <!-- Form Actions -->
        <div class="form-actions">

          <button
            type="button"
            class="cancel-btn"
            (click)="closeForm()"
          >
            Cancel
          </button>

          <button
            type="button"
            class="save-product-btn"
            (click)="saveProduct()"
          >
            {{
              editingId !== null
                ? 'Update Product'
                : (existingMatchedProduct ? ' Add to Existing Stock' : 'Save Product')
            }}
          </button>

        </div>

      </form>

    </section>

  </div>

  <!-- Receive Stock Modal -->
  <div
    class="modal-overlay receive-stock-overlay"
    *ngIf="showReceiveStockModal"
    (click)="closeReceiveStock()"
  >
    <section
      class="product-modal receive-stock-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="receiveStockTitle"
      (click)="$event.stopPropagation()"
    >
      <!-- Modal Header -->
      <div class="modal-header">
        <div>
          <h2 id="receiveStockTitle">Receive Stock</h2>
          <p>Add incoming stock and record who received and updated it.</p>
        </div>

        <button
          type="button"
          class="modal-close-btn"
          aria-label="Close receive stock form"
          (click)="closeReceiveStock()"
        >
          &times;
        </button>
      </div>

      <!-- Receive Stock Form -->
      <form
        class="product-form"
        #receiveNgForm="ngForm"
        (ngSubmit)="confirmReceiveStock()"
      >
        <!-- Product Select Dropdown -->
        <div class="form-field">
          <label for="receiveProductSelect">
            Select Product <span>*</span>
          </label>
          <select
            id="receiveProductSelect"
            name="selectedProductId"
            [(ngModel)]="selectedReceiveProductId"
            (ngModelChange)="onReceiveProductChange($event)"
            required
            class="product-select-dropdown"
          >
            <option [ngValue]="null" disabled selected>-- Select an existing product to restock --</option>
            <option *ngFor="let prod of products" [ngValue]="prod.id">
              {{ prod.name }} ({{ prod.productId }}) &mdash; Available: {{ prod.quantity }} PCS &bull; {{ prod.location || 'Warehouse' }}
            </option>
          </select>
        </div>

        <!-- Current Product Details Banner (shown when product selected) -->
        <div class="receive-product-banner" *ngIf="selectedReceiveProduct">
          <div class="receive-banner-item">
            <span class="banner-label">Product ID</span>
            <strong class="banner-value">{{ selectedReceiveProduct.productId }}</strong>
          </div>
          <div class="receive-banner-item">
            <span class="banner-label">Product Name</span>
            <strong class="banner-value">{{ selectedReceiveProduct.name }}</strong>
          </div>
          <div class="receive-banner-item">
            <span class="banner-label">Location</span>
            <strong class="banner-value">{{ selectedReceiveProduct.location || 'Not assigned' }}</strong>
          </div>
          <div class="receive-banner-item">
            <span class="banner-label">Current Stock</span>
            <strong class="banner-value stock-highlight">{{ selectedReceiveProduct.quantity }} PCS</strong>
          </div>
        </div>

        <!-- Hint when no product selected yet -->
        <div class="receive-select-hint" *ngIf="!selectedReceiveProduct">
          <span class="hint-icon">&#128230;</span>
          <span>Please select an added product from the dropdown above to view details and restock.</span>
        </div>

        <!-- Additional Pieces Received -->
        <div class="form-field">
          <label for="receivePieces">
            Additional Pieces Received (PCS) <span>*</span>
          </label>
          <input
            id="receivePieces"
            type="number"
            name="additionalPieces"
            [(ngModel)]="receiveStockForm.quantity"
            min="1"
            step="1"
            required
            [disabled]="!selectedReceiveProduct"
            placeholder="Enter additional quantity received (e.g. 10)"
          />
        </div>

        <!-- Stock Preview Calculation -->
        <div
          class="stock-calc-preview"
          *ngIf="selectedReceiveProduct && receiveStockForm.quantity && receiveStockForm.quantity > 0"
        >
          <span>Current: <strong>{{ selectedReceiveProduct.quantity }} PCS</strong></span>
          <span class="calc-symbol">+</span>
          <span>Added: <strong>{{ receiveStockForm.quantity }} PCS</strong></span>
          <span class="calc-symbol">=</span>
          <span class="calc-total">New Available Stock: <strong>{{ selectedReceiveProduct.quantity + receiveStockForm.quantity }} PCS</strong></span>
        </div>

        <!-- Updated By Whom Name -->
        <div class="form-field">
          <label for="receiveUpdatedBy">
            Updated By (Whom) <span>*</span>
          </label>
          <input
            id="receiveUpdatedBy"
            type="text"
            name="updatedBy"
            [(ngModel)]="receiveStockForm.updatedBy"
            required
            [disabled]="!selectedReceiveProduct"
            placeholder="Enter name of person who received / updated the stock"
          />
        </div>

        <!-- Received Date -->
        <div class="form-field">
          <label for="receiveDate">
            Received Date <span>*</span>
          </label>
          <input
            id="receiveDate"
            type="date"
            name="receiveDate"
            [(ngModel)]="receiveStockForm.date"
            required
            [disabled]="!selectedReceiveProduct"
          />
        </div>

        <!-- Form Actions -->
        <div class="form-actions">
          <button
            type="button"
            class="cancel-btn"
            (click)="closeReceiveStock()"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="save-product-btn"
            [disabled]="
              !selectedReceiveProduct ||
              receiveNgForm.invalid ||
              !receiveStockForm.quantity ||
              receiveStockForm.quantity < 1 ||
              !receiveStockForm.updatedBy?.trim()
            "
          >
            Confirm & Receive Stock
          </button>
        </div>
      </form>
    </section>
  </div>

  <!-- Add Product Name Modal (Replaces browser window.prompt) -->
  <div
    class="modal-overlay add-name-overlay"
    *ngIf="showAddNameModal"
    (click)="closeAddNameModal()"
  >
    <section
      class="product-modal add-name-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="addNameTitle"
      (click)="$event.stopPropagation()"
    >
      <div class="modal-header">
        <div>
          <h2 id="addNameTitle">Add Product Name</h2>
          <p>Add a new product type to the selection list.</p>
        </div>

        <button
          type="button"
          class="modal-close-btn"
          aria-label="Close"
          (click)="closeAddNameModal()"
        >
          &times;
        </button>
      </div>

      <form (ngSubmit)="confirmAddName()">
        <div class="form-field">
          <label for="newProductName">Product Name <span>*</span></label>
          <input
            id="newProductName"
            type="text"
            name="newProductName"
            [(ngModel)]="newProductNameInput"
            placeholder="e.g. Jeans, Dhoti, Silk Saree"
            required
            autofocus
          />
          <div class="modal-field-error" *ngIf="addNameError">
            <span>\u26A0\uFE0F {{ addNameError }}</span>
          </div>
        </div>

        <div class="form-actions">
          <button
            type="button"
            class="cancel-btn"
            (click)="closeAddNameModal()"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="save-product-btn"
            [disabled]="!newProductNameInput.trim()"
          >
            Add Name
          </button>
        </div>
      </form>
    </section>
  </div>

  <!-- Custom In-App Dialog / Notification / Confirm Modal (Replaces browser alert/confirm) -->
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

</div>
`, styles: ['/* src/app/pages/products/products.css */\n:host {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  box-sizing: border-box;\n}\n* {\n  box-sizing: border-box;\n}\n.products-page {\n  min-height: 80vh;\n  min-width: 0;\n  padding: 36px 36px 96px;\n  background: #ffffff;\n  color: #263238;\n}\nbutton,\ninput,\nselect {\n  font: inherit;\n}\nbutton {\n  cursor: pointer;\n}\n.products-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  margin-bottom: 32px;\n}\n.header-text {\n  min-width: 0;\n}\n.products-header h1 {\n  margin: 0 0 10px;\n  color: #222d3d;\n  font-size: clamp(28px, 3vw, 40px);\n  font-weight: 750;\n}\n.products-header p {\n  margin: 0;\n  color: #7b8490;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.reset-data-btn {\n  padding: 12px 18px;\n  border: 1.5px solid #fecaca;\n  border-radius: 10px;\n  background: #fff5f5;\n  color: #dc2626;\n  font-weight: 700;\n  font-size: 13.5px;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n}\n.reset-data-btn:hover {\n  background: #fee2e2;\n  border-color: #f87171;\n  color: #b91c1c;\n  transform: translateY(-1px);\n}\n.restock-header-btn {\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 13px 20px;\n  border: 1.5px solid #ebd74d;\n  border-radius: 10px;\n  background: #fffdf0;\n  color: #5c4800;\n  font-size: 14px;\n  font-weight: 700;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.restock-header-btn svg {\n  stroke: #8c7300;\n  transition: transform 0.2s ease, stroke 0.2s ease;\n}\n.restock-header-btn:hover {\n  background: #F9E662;\n  border-color: #dfc833;\n  color: #1e293b;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(249, 230, 98, 0.4);\n}\n.restock-header-btn:hover svg {\n  stroke: #1e293b;\n  transform: rotate(12deg);\n}\n.restock-header-btn:active {\n  transform: translateY(0);\n}\n.add-product-btn {\n  flex-shrink: 0;\n  padding: 13px 20px;\n  border: 1px solid #ebd74d;\n  border-radius: 10px;\n  background: #F9E662;\n  color: #1e293b;\n  font-size: 14px;\n  font-weight: 700;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.add-product-btn:hover {\n  background: #ecd548;\n  border-color: #dfc833;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 14px rgba(249, 230, 98, 0.4);\n}\n.stock-register {\n  min-width: 0;\n  padding: 28px;\n  border: 1px solid #eeece5;\n  border-radius: 20px;\n  background: #fff;\n}\n.stock-summary {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n  margin-bottom: 26px;\n}\n.summary-card {\n  position: relative;\n  overflow: hidden;\n  padding: 20px;\n  border: 1px solid #f2e99d;\n  border-radius: 14px;\n  background: #ffffff;\n  background:\n    linear-gradient(\n      180deg,\n      #fff8dc 0%,\n      #fffdf8 45px,\n      #ffffff 90px);\n}\n.summary-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3.5px;\n  background: #F9E662;\n}\n.summary-label {\n  display: block;\n  margin-bottom: 10px;\n  color: #4b5563;\n  font-size: 13px;\n  font-weight: 600;\n}\n.summary-card h2 {\n  margin: 0;\n  color: #263442;\n  font-size: 28px;\n  font-weight: 750;\n}\n.products-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.product-search {\n  display: block;\n  width: min(100%, 440px);\n  min-width: 0;\n  padding: 13px 15px;\n  border: 1px solid #e6e4de;\n  border-radius: 10px;\n  background: #fff;\n  color: #263442;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.product-search::placeholder {\n  color: #9aa1aa;\n}\n.product-search:focus {\n  border-color: #d6a800;\n  box-shadow: 0 0 0 3px rgba(255, 202, 40, 0.16);\n}\n.products-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  align-items: start;\n  gap: 22px;\n}\n.product-card {\n  position: relative;\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #dfd8cb;\n  border-radius: 18px;\n  background: #ffffff;\n  box-shadow: 0 4px 16px rgba(34, 45, 61, 0.05), 0 1px 3px rgba(34, 45, 61, 0.04);\n  transition:\n    transform 0.22s ease,\n    box-shadow 0.22s ease,\n    border-color 0.22s ease;\n}\n.product-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3.5px;\n  background: #F9E662;\n  z-index: 2;\n}\n.product-card:hover {\n  transform: translateY(-4px);\n  border-color: #F9E662;\n  box-shadow: 0 12px 28px rgba(34, 45, 61, 0.08), 0 3px 8px rgba(249, 230, 98, 0.25);\n}\n.product-image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 210px;\n  overflow: hidden;\n  background: #fff8e5;\n}\n.product-image img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.no-image {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  color: #858d99;\n  font-size: 13px;\n}\n.product-details {\n  padding: 22px;\n}\n.product-id-badge {\n  display: inline-block;\n  margin-bottom: 10px;\n  padding: 4px 10px;\n  border-radius: 7px;\n  background: #fefad6;\n  border: 1px solid #F9E662;\n  color: #5c4800;\n  font-size: 11.5px;\n  font-weight: 750;\n  letter-spacing: 0.6px;\n  text-transform: uppercase;\n}\n.product-details h3 {\n  margin: 0 0 18px;\n  color: #111827;\n  font-size: 20px;\n  font-weight: 750;\n  line-height: 1.35;\n  overflow-wrap: anywhere;\n}\n.product-details p {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin: 0;\n  padding: 12px 0;\n  border-bottom: 1px solid #f0eee6;\n  font-size: 13px;\n  line-height: 1.5;\n}\n.product-details p strong {\n  flex-shrink: 0;\n  color: #374151;\n  font-weight: 650;\n}\n.product-details p span {\n  text-align: right;\n  color: #1f2937;\n  font-weight: 600;\n  overflow-wrap: anywhere;\n}\n.stock-quantity {\n  color: #1e293b !important;\n  font-weight: 750 !important;\n  background: #fff8e1;\n  border: 1px solid #ffecb3;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.product-details p:last-child {\n  border-bottom: none;\n}\n.product-actions {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 22px 20px;\n  border-top: 1px solid #f5f2eb;\n  background: #fffdfa;\n}\n.receive-stock-btn,\n.edit-product-btn,\n.delete-product-btn {\n  padding: 9px 18px;\n  border: 1px solid #d1d5db;\n  border-radius: 9px;\n  background: #fff;\n  font-size: 13px;\n  font-weight: 650;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n.receive-stock-btn {\n  border-color: #ebd74d;\n  background: #fefad6;\n  color: #5c4800;\n  box-shadow: 0 1px 3px rgba(249, 230, 98, 0.2);\n}\n.receive-stock-btn:hover {\n  background: #F9E662;\n  border-color: #ebd43f;\n  color: #1e293b;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 10px rgba(249, 230, 98, 0.35);\n}\n.edit-product-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  border-color: #d1d5db;\n  background: #ffffff;\n  color: #374151;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.edit-product-btn svg {\n  stroke: #64748b;\n  transition: stroke 0.2s ease;\n}\n.edit-product-btn:hover {\n  border-color: #f0c326;\n  background: #fffdf5;\n  color: #111827;\n  transform: translateY(-1px);\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);\n}\n.edit-product-btn:hover svg {\n  stroke: #b45309;\n}\n.delete-product-btn {\n  color: #c53636;\n  border-color: #fbcfe8;\n}\n.delete-product-btn:hover {\n  border-color: #f43f5e;\n  background: #fff1f2;\n}\n.empty-products {\n  padding: 55px 20px;\n  text-align: center;\n}\n.empty-products h3 {\n  margin: 0 0 10px;\n  color: #263442;\n  font-size: 19px;\n}\n.empty-products p {\n  margin: 0;\n  color: #7b8490;\n  font-size: 14px;\n  line-height: 1.7;\n}\n.switch-lcc-container {\n  position: fixed;\n  right: 28px;\n  bottom: 28px;\n  z-index: 990;\n  margin: 0;\n  padding: 0;\n  border: none;\n  pointer-events: none;\n}\n.switch-lcc-btn {\n  pointer-events: auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  min-height: 48px;\n  padding: 12px 24px;\n  border: 1.5px solid #d4a500;\n  border-radius: 50px;\n  background:\n    linear-gradient(\n      135deg,\n      #fff9e6 0%,\n      #ffefb8 45%,\n      #ffd54f 100%);\n  color: #2b2202;\n  font-size: 14.5px;\n  font-weight: 750;\n  cursor: pointer;\n  box-shadow: 0 8px 24px rgba(217, 165, 0, 0.38), 0 3px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);\n  white-space: nowrap;\n}\n.switch-lcc-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #fff5cc 0%,\n      #ffe885 45%,\n      #ffca28 100%);\n  border-color: #bf9000;\n  box-shadow: 0 12px 30px rgba(217, 165, 0, 0.48), 0 4px 12px rgba(0, 0, 0, 0.14);\n  transform: translateY(-3px) scale(1.02);\n}\n.switch-lcc-btn:active {\n  transform: translateY(0) scale(0.98);\n  box-shadow: 0 4px 12px rgba(217, 165, 0, 0.3);\n}\n.switch-lcc-btn .btn-icon {\n  font-size: 17px;\n  display: inline-block;\n}\n.switch-lcc-btn .btn-arrow {\n  font-size: 16px;\n  transition: transform 0.2s ease;\n}\n.switch-lcc-btn:hover .btn-arrow {\n  transform: translateX(4px);\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow-y: auto;\n  padding: 20px;\n  background: rgba(30, 24, 10, 0.42);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.transfer-overlay {\n  background: rgba(45, 36, 12, 0.38);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.transfer-modal {\n  width: min(100%, 650px);\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 30px;\n  border: 1.5px solid #fae8a4;\n  border-radius: 22px;\n  background: #ffffff;\n  color: #263238;\n  box-shadow: 0 24px 70px rgba(184, 134, 11, 0.16), 0 8px 24px rgba(0, 0, 0, 0.05);\n}\n.transfer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f9f0d4;\n}\n.transfer-header h2 {\n  margin: 0 0 6px;\n  color: #263442;\n  font-size: 24px;\n  font-weight: 750;\n}\n.transfer-header p {\n  margin: 0;\n  color: #7b8490;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.transfer-header .modal-close-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  flex-shrink: 0;\n  border: 1.5px solid #f2dfa0;\n  border-radius: 10px;\n  background: #fffdf5;\n  color: #5a4b16;\n  font-size: 24px;\n  line-height: 1;\n  transition: all 0.2s ease;\n}\n.transfer-header .modal-close-btn:hover {\n  border-color: #e5b300;\n  background: #ffeb99;\n  color: #263238;\n}\n.transfer-form {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.transfer-modal .form-field label {\n  display: block;\n  margin-bottom: 8px;\n  color: #374151;\n  font-size: 13px;\n  font-weight: 650;\n}\n.transfer-modal .form-field label span {\n  color: #c53636;\n}\n.transfer-modal .form-field select,\n.transfer-modal .form-field input {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  min-height: 46px;\n  padding: 11px 14px;\n  border: 1.5px solid #ebdca8;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #293541;\n  font-family: inherit;\n  font-size: 14px;\n  outline: none;\n  cursor: pointer;\n  transition:\n    border-color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n}\n.transfer-modal .form-field select {\n  appearance: auto;\n}\n.transfer-modal .form-field select:hover,\n.transfer-modal .form-field input:hover {\n  border-color: #dfb83b;\n  background: #fffef8;\n}\n.transfer-modal .form-field select:focus,\n.transfer-modal .form-field input:focus {\n  border-color: #e5a900;\n  background: #fffdf2;\n  box-shadow: 0 0 0 3.5px rgba(255, 202, 40, 0.25);\n}\n.transfer-modal .form-field select option {\n  padding: 10px;\n  background: #ffffff;\n  color: #293541;\n}\n.transfer-modal .form-field select option:disabled {\n  color: #a4abb5;\n  background: #faf8f2;\n}\n.available-stock-banner {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  padding: 14px 18px;\n  border: 1.5px solid #f6e3a4;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #fffdf2 0%,\n      #fff9e6 100%);\n}\n.stock-info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stock-info-label {\n  color: #8c7830;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stock-info-value {\n  color: #263442;\n  font-size: 15px;\n  font-weight: 750;\n}\n.transfer-modal .form-actions {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 6px;\n  padding-top: 18px;\n  border-top: 1px solid #f7efd7;\n}\n.transfer-modal .cancel-btn {\n  min-height: 44px;\n  padding: 11px 22px;\n  border: 1.5px solid #ebdca8;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #5a4b16;\n  font-size: 13.5px;\n  font-weight: 700;\n  transition: all 0.2s ease;\n}\n.transfer-modal .cancel-btn:hover {\n  background: #fff8e1;\n  border-color: #dfb83b;\n  color: #3b2f06;\n}\n.confirm-transfer-btn {\n  min-height: 44px;\n  padding: 11px 24px;\n  border: 1.5px solid #e5b800;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffd740 0%,\n      #ffca28 100%);\n  color: #263238;\n  font-size: 13.5px;\n  font-weight: 750;\n  cursor: pointer;\n  box-shadow: 0 3px 10px rgba(255, 202, 40, 0.32);\n  transition: all 0.2s ease;\n}\n.confirm-transfer-btn:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      180deg,\n      #ffca28 0%,\n      #f2b900 100%);\n  box-shadow: 0 5px 16px rgba(242, 185, 0, 0.42);\n  transform: translateY(-1px);\n}\n.confirm-transfer-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  box-shadow: none;\n}\n.product-modal {\n  width: min(100%, 700px);\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 28px;\n  border: 1px solid #eeece5;\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.18);\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 26px;\n}\n.modal-header h2 {\n  margin: 0 0 8px;\n  color: #263442;\n  font-size: 25px;\n  font-weight: 750;\n}\n.modal-header p {\n  margin: 0;\n  color: #7b8490;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.modal-close-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  flex-shrink: 0;\n  border: 1px solid #e6e4de;\n  border-radius: 10px;\n  background: #fff;\n  color: #263442;\n  font-size: 25px;\n  line-height: 1;\n}\n.modal-close-btn:hover {\n  border-color: #ffca28;\n  background: #fff5ce;\n}\n.product-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.form-field label {\n  display: block;\n  margin-bottom: 9px;\n  color: #344054;\n  font-size: 13px;\n  font-weight: 650;\n}\n.form-field label span {\n  color: #c53636;\n}\n.form-field input,\n.form-field select {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  min-height: 44px;\n  padding: 11px 14px;\n  border: 1px solid #e6e4de;\n  border-radius: 10px;\n  background: #fff;\n  color: #293541;\n  font-family: inherit;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.form-field input:focus,\n.form-field select:focus {\n  border-color: #d6a800;\n  box-shadow: 0 0 0 3px rgba(255, 202, 40, 0.16);\n}\n.form-field select {\n  appearance: auto;\n  cursor: pointer;\n}\n.product-name-row {\n  display: flex;\n  align-items: stretch;\n  gap: 8px;\n  width: 100%;\n}\n.product-name-row select {\n  flex: 1;\n  min-width: 0;\n  width: 100%;\n}\n.add-name-btn {\n  flex-shrink: 0;\n  padding: 0 15px;\n  border: 1px solid #ffca28;\n  border-radius: 10px;\n  background: #ffca28;\n  color: #293541;\n  font-size: 13px;\n  font-weight: 700;\n  white-space: nowrap;\n  transition: background 0.2s ease;\n}\n.add-name-btn:hover {\n  background: #f3b900;\n}\n#location {\n  width: 100%;\n  min-height: 46px;\n  padding: 12px 14px;\n  border: 1px solid #e6e4de;\n  border-radius: 10px;\n  background-color: #fff;\n  color: #293541;\n  font-size: 14px;\n  cursor: pointer;\n}\n#location:focus {\n  outline: none;\n  border-color: #d6a800;\n  box-shadow: 0 0 0 3px rgba(255, 202, 40, 0.16);\n}\n#location option {\n  padding: 10px;\n  background: #fff;\n  color: #293541;\n}\n.field-help {\n  display: block;\n  margin-top: 8px;\n  color: #858d99;\n  font-size: 11px;\n  line-height: 1.6;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 8px;\n  padding-top: 20px;\n  border-top: 1px solid #f0eee8;\n}\n.cancel-btn,\n.save-product-btn {\n  min-height: 43px;\n  padding: 11px 20px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 700;\n  transition: background 0.2s ease, border-color 0.2s ease;\n}\n.cancel-btn {\n  border: 1px solid #e6e4de;\n  background: #fff;\n  color: #344054;\n}\n.cancel-btn:hover {\n  border-color: #ffca28;\n  background: #fff7d8;\n}\n.save-product-btn {\n  border: 1px solid #ffca28;\n  background: #ffca28;\n  color: #263238;\n}\n.save-product-btn:hover:not(:disabled) {\n  background: #f2b900;\n}\n.save-product-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n@media (max-width: 1050px) {\n  .products-page {\n    padding: 30px 24px;\n  }\n  .products-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .stock-register {\n    padding: 24px;\n  }\n}\n@media (max-width: 650px) {\n  .products-page {\n    padding: 24px 16px;\n  }\n  .products-header {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 18px;\n    margin-bottom: 24px;\n  }\n  .restock-header-btn,\n  .add-product-btn {\n    width: 100%;\n  }\n  .stock-register {\n    padding: 16px;\n    border-radius: 15px;\n  }\n  .stock-summary {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 12px;\n  }\n  .summary-card {\n    padding: 16px;\n  }\n  .products-toolbar {\n    margin-bottom: 20px;\n  }\n  .product-search {\n    width: 100%;\n  }\n  .products-grid {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 18px;\n  }\n  .product-image {\n    height: 220px;\n  }\n  .switch-lcc-container {\n    margin-top: 22px;\n  }\n  .switch-lcc-btn {\n    width: 100%;\n  }\n  .modal-overlay {\n    align-items: flex-start;\n    padding: 12px;\n  }\n  .product-modal,\n  .transfer-modal {\n    width: 100%;\n    max-height: calc(100vh - 24px);\n    padding: 20px;\n    border-radius: 16px;\n  }\n  .modal-header h2,\n  .transfer-header h2 {\n    font-size: 22px;\n  }\n  .available-stock-banner {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 10px;\n  }\n  .product-name-row {\n    gap: 6px;\n  }\n  .add-name-btn {\n    padding: 0 12px;\n  }\n  .form-actions {\n    flex-direction: column-reverse;\n  }\n  .cancel-btn,\n  .save-product-btn,\n  .confirm-transfer-btn {\n    width: 100%;\n  }\n}\n@media (max-width: 380px) {\n  .products-page {\n    padding: 18px 10px;\n  }\n  .stock-register {\n    padding: 12px;\n  }\n  .product-details {\n    padding: 15px;\n  }\n  .product-actions {\n    padding: 0 15px 15px;\n  }\n  .product-details p {\n    gap: 8px;\n    font-size: 11px;\n  }\n  .product-modal {\n    padding: 16px;\n  }\n}\n.stock-quantity.stock-danger {\n  color: #dc2626;\n  font-weight: 800;\n}\n.product-low-stock-alert {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 8px;\n  margin-bottom: 4px;\n  padding: 5px 10px;\n  border-radius: 8px;\n  background: #fee2e2;\n  border: 1px solid #fca5a5;\n  color: #dc2626;\n  font-size: 11.5px;\n  font-weight: 750;\n  animation: productWarningBlink 1.2s infinite ease-in-out;\n}\n.product-low-stock-alert .alert-pulse-dot {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background-color: #dc2626;\n  box-shadow: 0 0 6px #dc2626;\n  flex-shrink: 0;\n  animation: dotFlash 1.2s infinite ease-in-out;\n}\n@keyframes productWarningBlink {\n  0%, 100% {\n    opacity: 1;\n    background: #fee2e2;\n    box-shadow: 0 0 8px rgba(220, 38, 38, 0.25);\n  }\n  50% {\n    opacity: 0.55;\n    background: #fff5f5;\n    box-shadow: none;\n  }\n}\n@keyframes dotFlash {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(0.6);\n    opacity: 0.3;\n  }\n}\n.receive-stock-modal {\n  width: min(100%, 640px);\n}\n.product-select-dropdown {\n  min-height: 48px;\n  border: 1.5px solid #ebdca8 !important;\n  background-color: #fffdf8 !important;\n  font-weight: 600 !important;\n  color: #1e293b !important;\n  cursor: pointer;\n}\n.product-select-dropdown:focus {\n  border-color: #d6a800 !important;\n  box-shadow: 0 0 0 3px rgba(249, 230, 98, 0.3) !important;\n}\n.receive-select-hint {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  margin-bottom: 18px;\n  border-radius: 12px;\n  background: #fffdf5;\n  border: 1.5px dashed #fae8a4;\n  color: #856a1e;\n  font-size: 13.5px;\n  font-weight: 600;\n  line-height: 1.5;\n}\n.receive-select-hint .hint-icon {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.receive-product-banner {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  padding: 16px 20px;\n  margin-bottom: 22px;\n  border: 1.5px solid #fae8a4;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #fffdf2 0%,\n      #fff9e6 100%);\n}\n.receive-banner-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.banner-label {\n  color: #8c7830;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.banner-value {\n  color: #263442;\n  font-size: 15px;\n  font-weight: 750;\n}\n.banner-value.stock-highlight {\n  color: #b45309;\n}\n.stock-calc-preview {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 11px 16px;\n  margin-top: 4px;\n  margin-bottom: 6px;\n  border-radius: 10px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #166534;\n  font-size: 13.5px;\n}\n.stock-calc-preview .calc-symbol {\n  font-weight: 700;\n  color: #15803d;\n}\n.stock-calc-preview .calc-total {\n  margin-left: auto;\n  font-weight: 700;\n  color: #166534;\n}\n.updated-by-name {\n  color: #0f172a;\n  font-weight: 700;\n  background: #f1f5f9;\n  padding: 2px 8px;\n  border-radius: 6px;\n  border: 1px solid #e2e8f0;\n}\n.add-name-modal {\n  width: min(100%, 480px);\n}\n.modal-field-error {\n  margin-top: 8px;\n  padding: 8px 12px;\n  border-radius: 8px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  font-size: 12.5px;\n  font-weight: 600;\n}\n.app-dialog-modal {\n  width: min(100%, 480px);\n  padding: 30px 26px;\n  text-align: center;\n  border-radius: 22px;\n}\n.dialog-icon-wrapper {\n  width: 60px;\n  height: 60px;\n  margin: 0 auto 16px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  font-size: 28px;\n}\n.dialog-icon-wrapper.success {\n  background: #dcfce7;\n  color: #15803d;\n  border: 2px solid #86efac;\n}\n.dialog-icon-wrapper.warning,\n.dialog-icon-wrapper.confirm {\n  background: #fef3c7;\n  color: #b45309;\n  border: 2px solid #fde68a;\n}\n.dialog-icon-wrapper.error {\n  background: #fee2e2;\n  color: #dc2626;\n  border: 2px solid #fca5a5;\n}\n.dialog-content h3 {\n  margin: 0 0 8px;\n  color: #1e293b;\n  font-size: 21px;\n  font-weight: 750;\n}\n.dialog-message {\n  margin: 0 0 16px;\n  color: #64748b;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.dialog-details-card {\n  text-align: left;\n  background: #fffdf2;\n  border: 1.5px solid #f6e8b8;\n  border-radius: 12px;\n  padding: 14px 18px;\n  margin: 16px 0 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.dialog-details-card .detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  font-size: 13.5px;\n}\n.dialog-details-card .detail-label {\n  color: #78716c;\n  font-weight: 500;\n}\n.dialog-details-card .detail-value {\n  color: #1c1917;\n  font-weight: 750;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 20px;\n}\n.dialog-confirm-btn {\n  min-height: 44px;\n  padding: 11px 28px;\n  border-radius: 10px;\n  font-weight: 700;\n  font-size: 14px;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s ease;\n}\n.dialog-confirm-btn.success,\n.dialog-confirm-btn.warning,\n.dialog-confirm-btn.confirm {\n  background:\n    linear-gradient(\n      180deg,\n      #ffd740 0%,\n      #ffca28 100%);\n  color: #263238;\n  border: 1.5px solid #e5b800;\n  box-shadow: 0 3px 10px rgba(255, 202, 40, 0.32);\n}\n.dialog-confirm-btn.success:hover,\n.dialog-confirm-btn.warning:hover,\n.dialog-confirm-btn.confirm:hover {\n  background:\n    linear-gradient(\n      180deg,\n      #ffca28 0%,\n      #f2b900 100%);\n  box-shadow: 0 5px 16px rgba(242, 185, 0, 0.42);\n  transform: translateY(-1px);\n}\n.dialog-confirm-btn.error {\n  background: #dc2626;\n  color: #ffffff;\n  border: 1.5px solid #b91c1c;\n  box-shadow: 0 3px 10px rgba(220, 38, 38, 0.25);\n}\n.dialog-confirm-btn.error:hover {\n  background: #b91c1c;\n  box-shadow: 0 5px 16px rgba(220, 38, 38, 0.35);\n  transform: translateY(-1px);\n}\n@media (max-width: 1100px) {\n  .products-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 18px;\n  }\n}\n@media (max-width: 768px) {\n  .products-page {\n    padding: 20px 16px 88px;\n  }\n  .products-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n    margin-bottom: 24px;\n  }\n  .header-actions {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n  .restock-header-btn,\n  .add-product-btn,\n  .reset-data-btn {\n    width: 100%;\n    justify-content: center;\n    text-align: center;\n  }\n  .stock-register {\n    padding: 16px;\n    border-radius: 14px;\n  }\n  .stock-summary {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .products-toolbar {\n    margin-bottom: 20px;\n  }\n  .product-search {\n    width: 100%;\n  }\n  .products-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .switch-lcc-container {\n    right: 18px;\n    bottom: 20px;\n  }\n  .switch-lcc-btn {\n    width: auto !important;\n    min-height: 44px;\n    padding: 10px 20px;\n    font-size: 13.5px;\n  }\n  .modal-overlay {\n    padding: 12px;\n  }\n  .modal-dialog,\n  .transfer-modal,\n  .receive-modal,\n  .product-form-modal,\n  .product-modal {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin: auto;\n    padding: 20px 16px !important;\n    border-radius: 16px !important;\n    max-height: 92vh !important;\n  }\n}\n@media (max-width: 540px) {\n  .products-page {\n    padding: 14px 12px 80px;\n  }\n  .products-header h1 {\n    font-size: 26px;\n  }\n  .stock-register {\n    padding: 14px 12px;\n  }\n  .switch-lcc-container {\n    right: 14px;\n    bottom: 16px;\n  }\n  .switch-lcc-btn {\n    padding: 10px 16px;\n    font-size: 13px;\n    gap: 8px;\n  }\n  .product-image {\n    height: 180px;\n  }\n  .product-details {\n    padding: 16px 14px 12px;\n  }\n  .product-actions {\n    padding: 12px 14px 16px;\n    gap: 8px;\n  }\n  .receive-stock-btn,\n  .edit-product-btn,\n  .delete-product-btn {\n    flex: 1;\n    min-width: 80px;\n    text-align: center;\n    justify-content: center;\n    padding: 9px 8px;\n    font-size: 12px;\n  }\n  .available-stock-banner {\n    grid-template-columns: 1fr;\n    gap: 8px;\n    padding: 12px;\n  }\n  .dialog-actions,\n  .form-actions {\n    flex-direction: column-reverse;\n    gap: 8px;\n  }\n  .dialog-actions button,\n  .form-actions button {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=products.css.map */\n'] }]
  }], () => [{ type: LccService }, { type: ReportsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Products, { className: "Products", filePath: "src/app/pages/products/products.ts", lineNumber: 53 });
})();
export {
  Products
};
//# debugId=452cf4ff-ac50-5fb7-84ad-c370c4b89c30
//# sourceMappingURL=chunk-5PVHKU7C.js.map
