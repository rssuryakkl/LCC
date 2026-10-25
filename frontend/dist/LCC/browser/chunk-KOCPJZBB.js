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
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QKVBSWNP.js";

// src/app/pages/distribution/distribution.ts
function Distribution_tr_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 20);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const distribution_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", distribution_r1.id, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", distribution_r1.product, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", distribution_r1.quantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", distribution_r1.volunteer, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", distribution_r1.receiver, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", distribution_r1.location, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", distribution_r1.date, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", distribution_r1.status, " ");
  }
}
function Distribution_tr_72_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(' No distributions found for "', ctx_r1.searchText, '" ');
  }
}
function Distribution_tr_72_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " No distribution records available. ");
  }
}
function Distribution_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275template(2, Distribution_tr_72_span_2_Template, 2, 1, "span", 22)(3, Distribution_tr_72_ng_template_3_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const noDistributionData_r3 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.searchText.trim())("ngIfElse", noDistributionData_r3);
  }
}
function Distribution_div_73_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    \u0275\u0275property("value", product_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r5.productId + " - " + product_r5.name, " ");
  }
}
function Distribution_div_73_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    \u0275\u0275property("value", product_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r6.name + " - " + product_r6.productId, " ");
  }
}
function Distribution_div_73_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "span", 52);
    \u0275\u0275text(3, "Available LCC Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 51)(7, "span", 52);
    \u0275\u0275text(8, "Warehouse / LCC Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong", 53);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.availableQuantity, " PCS");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedProductDetails.location || "Vadalur");
  }
}
function Distribution_div_73_small_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Maximum available to transfer: ", ctx_r1.availableQuantity, " PCS ");
  }
}
function Distribution_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275listener("click", function Distribution_div_73_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "section", 24);
    \u0275\u0275listener("click", function Distribution_div_73_Template_section_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 25)(3, "div")(4, "h2", 26);
    \u0275\u0275text(5, "Switch Stock to Distribution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Transfer products from LCC to Distribution inventory.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 27);
    \u0275\u0275listener("click", function Distribution_div_73_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(9, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 28, 1);
    \u0275\u0275listener("ngSubmit", function Distribution_div_73_Template_form_ngSubmit_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createDistribution());
    });
    \u0275\u0275elementStart(12, "div", 29)(13, "label", 30);
    \u0275\u0275text(14, " Product ID ");
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "select", 31);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Distribution_div_73_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedProduct, $event) || (ctx_r1.selectedProduct = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "option", 32);
    \u0275\u0275text(19, "Select Product ID");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, Distribution_div_73_option_20_Template, 2, 2, "option", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 29)(22, "label", 34);
    \u0275\u0275text(23, " Product Name ");
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "select", 35);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Distribution_div_73_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedProduct, $event) || (ctx_r1.selectedProduct = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 32);
    \u0275\u0275text(28, "Select Product Name");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, Distribution_div_73_option_29_Template, 2, 2, "option", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, Distribution_div_73_div_30_Template, 11, 2, "div", 36);
    \u0275\u0275elementStart(31, "div", 29)(32, "label", 37);
    \u0275\u0275text(33, "Date ");
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "input", 38);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Distribution_div_73_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.distributionDate, $event) || (ctx_r1.distributionDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 29)(38, "label", 39);
    \u0275\u0275text(39, "Transferred By / Volunteer ");
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "input", 40);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Distribution_div_73_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedVolunteer, $event) || (ctx_r1.selectedVolunteer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 29)(44, "label", 41);
    \u0275\u0275text(45, "Receiver / Destination ");
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "input", 42);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Distribution_div_73_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.receiverName, $event) || (ctx_r1.receiverName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 29)(50, "label", 43);
    \u0275\u0275text(51, "Quantity (PCS) ");
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "input", 44);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function Distribution_div_73_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.distributionQuantity, $event) || (ctx_r1.distributionQuantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, Distribution_div_73_small_55_Template, 2, 1, "small", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 46)(57, "button", 47);
    \u0275\u0275listener("click", function Distribution_div_73_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275text(58, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 48);
    \u0275\u0275text(60, " Confirm Transfer ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const newDistForm_r7 = \u0275\u0275reference(11);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedProduct);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.products);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedProduct);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.products);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedProductDetails);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.distributionDate);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedVolunteer);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.receiverName);
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.distributionQuantity);
    \u0275\u0275property("max", ctx_r1.availableQuantity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedProductDetails);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", newDistForm_r7.invalid || !ctx_r1.selectedProduct || !ctx_r1.distributionQuantity || ctx_r1.distributionQuantity < 1 || ctx_r1.distributionQuantity > ctx_r1.availableQuantity);
  }
}
var Distribution = class _Distribution {
  // =====================================================
  // CONSTRUCTOR
  // =====================================================
  constructor(lccService, distributionService, reportsService) {
    this.lccService = lccService;
    this.distributionService = distributionService;
    this.reportsService = reportsService;
  }
  lccService;
  distributionService;
  reportsService;
  subscription;
  // =====================================================
  // MODAL
  // =====================================================
  showModal = false;
  // =====================================================
  // SEARCH
  // =====================================================
  searchText = "";
  // =====================================================
  // FORM DATA
  // =====================================================
  selectedVolunteer = "";
  selectedProduct = "";
  receiverName = "";
  distributionQuantity = null;
  distributionDate = this.getToday();
  // =====================================================
  // PRODUCTS
  // Products come from LCC Service
  // =====================================================
  products = [];
  // =====================================================
  // LOADING / ERROR
  // =====================================================
  loadingProducts = false;
  productError = "";
  // =====================================================
  // DISTRIBUTION HISTORY
  // =====================================================
  distributions = [];
  // =====================================================
  // ON INIT
  // =====================================================
  ngOnInit() {
    this.loadLccProducts();
    this.subscription = this.distributionService.records$.subscribe((records) => {
      this.distributions = records;
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  // =====================================================
  // LOAD PRODUCTS FROM LCC
  // =====================================================
  loadLccProducts() {
    this.loadingProducts = true;
    this.productError = "";
    try {
      const lccItems = this.lccService.getItems();
      this.products = lccItems.filter((item) => Number(item.quantity) > 0).map((item) => ({
        id: item.id,
        productId: item.productId,
        name: item.name,
        availableQty: Number(item.quantity) || 0,
        location: item.location || "LCC Building",
        date: item.date || "",
        switchedBy: item.switchedBy || "",
        createdAt: item.createdAt || ""
      }));
      this.loadingProducts = false;
    } catch (error) {
      console.error("Failed to load LCC products:", error);
      this.products = [];
      this.productError = "Unable to load products from LCC.";
      this.loadingProducts = false;
    }
  }
  // =====================================================
  // OPEN DISTRIBUTION MODAL
  // =====================================================
  openDistributionModal() {
    this.loadLccProducts();
    this.resetForm();
    this.showModal = true;
  }
  // =====================================================
  // CLOSE MODAL
  // =====================================================
  closeModal() {
    this.showModal = false;
  }
  // =====================================================
  // RESET FORM
  // =====================================================
  resetForm() {
    this.selectedVolunteer = "";
    this.selectedProduct = this.products.length > 0 ? String(this.products[0].id) : "";
    this.receiverName = "";
    this.distributionQuantity = null;
    this.distributionDate = this.getToday();
  }
  // =====================================================
  // GET SELECTED PRODUCT
  // =====================================================
  get selectedProductDetails() {
    return this.products.find((product) => String(product.id) === String(this.selectedProduct));
  }
  // =====================================================
  // GET AVAILABLE QUANTITY
  // =====================================================
  get availableQuantity() {
    return this.selectedProductDetails?.availableQty ?? 0;
  }
  // =====================================================
  // GET NEW BALANCE
  // =====================================================
  get newBalance() {
    const product = this.selectedProductDetails;
    if (!product) {
      return 0;
    }
    const quantity = Number(this.distributionQuantity) || 0;
    return Math.max(0, product.availableQty - quantity);
  }
  // =====================================================
  // STOCK PERCENTAGE
  // =====================================================
  get stockPercentage() {
    const product = this.selectedProductDetails;
    if (!product) {
      return 0;
    }
    return product.availableQty > 0 ? 100 : 0;
  }
  // =====================================================
  // TOTAL DISTRIBUTIONS
  // =====================================================
  get totalDistributions() {
    return this.distributions.length;
  }
  // =====================================================
  // TOTAL UNITS DISTRIBUTED
  // =====================================================
  get lccToDistribution() {
    return this.distributions.reduce((total, distribution) => {
      return total + Number(distribution.quantity);
    }, 0);
  }
  // =====================================================
  // TODAY DISTRIBUTION
  // =====================================================
  get todayDistribution() {
    const today = this.getToday();
    return this.distributions.filter((distribution) => distribution.date === today).reduce((total, distribution) => {
      return total + Number(distribution.quantity);
    }, 0);
  }
  // =====================================================
  // FILTER DISTRIBUTION HISTORY
  // =====================================================
  get filteredDistributions() {
    const search = this.searchText.toLowerCase().trim();
    if (!search) {
      return this.distributions;
    }
    return this.distributions.filter((distribution) => distribution.id.toLowerCase().includes(search) || distribution.product.toLowerCase().includes(search) || distribution.volunteer.toLowerCase().includes(search) || distribution.receiver.toLowerCase().includes(search) || distribution.date.toLowerCase().includes(search) || distribution.status.toLowerCase().includes(search) || distribution.location.toLowerCase().includes(search));
  }
  // =====================================================
  // CREATE DISTRIBUTION
  // =====================================================
  createDistribution() {
    if (!this.selectedVolunteer.trim()) {
      alert("Please enter volunteer name.");
      return;
    }
    if (!this.selectedProduct) {
      alert("Please select a product from LCC.");
      return;
    }
    if (this.distributionQuantity === null || Number(this.distributionQuantity) <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }
    const quantity = Number(this.distributionQuantity);
    if (quantity > this.availableQuantity) {
      alert(`Only ${this.availableQuantity} units are available in LCC.`);
      return;
    }
    if (!this.receiverName.trim()) {
      alert("Please enter receiver name.");
      return;
    }
    if (!this.distributionDate) {
      alert("Please select distribution date.");
      return;
    }
    const product = this.selectedProductDetails;
    if (!product) {
      alert("Selected product was not found.");
      return;
    }
    const newBalance = product.availableQty - quantity;
    const updatedLccItem = {
      id: product.id,
      productId: product.productId,
      name: product.name,
      quantity: newBalance,
      date: product.date,
      switchedBy: product.switchedBy,
      location: product.location,
      createdAt: product.createdAt
    };
    try {
      if (newBalance <= 0) {
        this.lccService.deleteTransfer(product.id);
      } else {
        this.lccService.updateItem(updatedLccItem);
      }
      const newId = `DIST-${String(this.distributions.length + 1).padStart(4, "0")}`;
      const newDistribution = {
        id: newId,
        product: product.name,
        quantity,
        volunteer: this.selectedVolunteer.trim(),
        receiver: this.receiverName.trim(),
        date: this.distributionDate,
        status: "Assigned",
        location: product.location
      };
      this.distributionService.addDistribution(newDistribution);
      this.reportsService.recordEntry({
        productId: product.productId || "",
        productName: product.name,
        eventType: "STOCK_TRANSFERRED",
        eventTitle: "Transferred to Distribution",
        quantityChange: -quantity,
        previousStock: product.availableQty,
        newStock: Math.max(0, newBalance),
        location: product.location || "LCC",
        updatedBy: this.selectedVolunteer.trim(),
        remarks: `Assigned to ${this.receiverName.trim()}`,
        date: this.distributionDate
      });
      this.loadLccProducts();
      this.closeModal();
      this.resetForm();
      this.closeModal();
      this.resetForm();
    } catch (error) {
      console.error("Failed to update LCC stock:", error);
      alert("Failed to update LCC stock. Distribution was not created.");
    }
  }
  // =====================================================
  // GET TODAY
  // =====================================================
  getToday() {
    const today = /* @__PURE__ */ new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  }
  static \u0275fac = function Distribution_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Distribution)(\u0275\u0275directiveInject(LccService), \u0275\u0275directiveInject(DistributionService), \u0275\u0275directiveInject(ReportsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Distribution, selectors: [["app-distribution"]], decls: 74, vars: 7, consts: [["noDistributionData", ""], ["newDistForm", "ngForm"], [1, "distribution-page"], [1, "page-header"], [1, "header-row"], [1, "page-description"], ["type", "button", 1, "new-distribution-btn", 3, "click"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon", "yellow"], [1, "stat-content"], [1, "history-card"], [1, "history-header"], [1, "search-box"], ["type", "text", "placeholder", "Search distribution...", 3, "ngModelChange", "ngModel"], [1, "table-container"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "modal-overlay transfer-overlay", 3, "click", 4, "ngIf"], [1, "distribution-id"], [1, "status-badge", "assigned"], ["colspan", "8", 1, "no-data"], [4, "ngIf", "ngIfElse"], [1, "modal-overlay", "transfer-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "distModalTitle", 1, "transfer-modal", 3, "click"], [1, "transfer-header"], ["id", "distModalTitle"], ["type", "button", "aria-label", "Close transfer form", 1, "modal-close-btn", 3, "click"], [1, "transfer-form", 3, "ngSubmit"], [1, "form-field"], ["for", "distProductId"], ["id", "distProductId", "name", "distProductId", "required", "", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "distProductName"], ["id", "distProductName", "name", "distProductName", "required", "", 3, "ngModelChange", "ngModel"], ["class", "available-stock-banner", 4, "ngIf"], ["for", "distDate"], ["id", "distDate", "type", "date", "name", "distributionDate", "required", "", 3, "ngModelChange", "ngModel"], ["for", "distVolunteer"], ["id", "distVolunteer", "type", "text", "name", "selectedVolunteer", "placeholder", "Enter volunteer or staff name (e.g., Madhan)", "required", "", 3, "ngModelChange", "ngModel"], ["for", "distReceiver"], ["id", "distReceiver", "type", "text", "name", "receiverName", "placeholder", "Enter receiver name or distribution center", "required", "", 3, "ngModelChange", "ngModel"], ["for", "distQty"], ["id", "distQty", "type", "number", "name", "distributionQuantity", "min", "1", "step", "1", "placeholder", "Enter quantity", "required", "", 3, "ngModelChange", "ngModel", "max"], ["class", "field-help", 4, "ngIf"], [1, "form-actions"], ["type", "button", 1, "cancel-btn", 3, "click"], ["type", "submit", 1, "confirm-transfer-btn", 3, "disabled"], [3, "value"], [1, "available-stock-banner"], [1, "stock-info-item"], [1, "stock-info-label"], [1, "stock-info-value"], [1, "field-help"]], template: function Distribution_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div")(4, "h1");
      \u0275\u0275text(5, " Distribution ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, " Manage product distribution to volunteers\n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 6);
      \u0275\u0275listener("click", function Distribution_Template_button_click_8_listener() {
        return ctx.openDistributionModal();
      });
      \u0275\u0275text(9, " New Distribution ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9);
      \u0275\u0275text(13, " \u{1F4E6} ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10)(15, "span");
      \u0275\u0275text(16, " Total Distributions ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "strong");
      \u0275\u0275text(18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "small");
      \u0275\u0275text(20, " All distributions ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 8)(22, "div", 9);
      \u0275\u0275text(23, " \u{1F504} ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 10)(25, "span");
      \u0275\u0275text(26, " LCC to Distribution ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "strong");
      \u0275\u0275text(28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "small");
      \u0275\u0275text(30, " Total units distributed ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 8)(32, "div", 9);
      \u0275\u0275text(33, " \u{1F4C5} ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 10)(35, "span");
      \u0275\u0275text(36, " Today Distribution ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "strong");
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "small");
      \u0275\u0275text(40, " Units distributed today ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(41, "div", 11)(42, "div", 12)(43, "div")(44, "h2");
      \u0275\u0275text(45, " Distribution History ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p");
      \u0275\u0275text(47, " Track all product distributions. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 13)(49, "input", 14);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function Distribution_Template_input_ngModelChange_49_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 15)(51, "table")(52, "thead")(53, "tr")(54, "th");
      \u0275\u0275text(55, " Distribution ID ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th");
      \u0275\u0275text(57, " Product ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th");
      \u0275\u0275text(59, " Qty ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th");
      \u0275\u0275text(61, " Volunteer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th");
      \u0275\u0275text(63, " Receiver ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th");
      \u0275\u0275text(65, " Location ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th");
      \u0275\u0275text(67, " Date ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th");
      \u0275\u0275text(69, " Status ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "tbody");
      \u0275\u0275template(71, Distribution_tr_71_Template, 20, 8, "tr", 16)(72, Distribution_tr_72_Template, 5, 2, "tr", 17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(73, Distribution_div_73_Template, 61, 12, "div", 18);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275textInterpolate1(" ", ctx.totalDistributions, " ");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.lccToDistribution, " ");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1(" ", ctx.todayDistribution, " ");
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275control();
      \u0275\u0275advance(22);
      \u0275\u0275property("ngForOf", ctx.filteredDistributions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredDistributions.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, MaxValidator, NgModel, NgForm], styles: ['@import "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap";\n\n\n.distribution-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding: 42px 38px;\n  box-sizing: border-box;\n  background: #ffffff;\n  font-family: "Roboto", sans-serif;\n  color: #263548;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 34px;\n}\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 30px;\n}\n.header-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 42px;\n  line-height: 1.15;\n  font-weight: 700;\n  color: #263548;\n  letter-spacing: -0.8px;\n}\n.page-description[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  font-size: 16px;\n  line-height: 1.5;\n  font-weight: 400;\n  color: #718096;\n}\n.new-distribution-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: #ffe95f;\n  color: #263548;\n  padding: 12px 22px;\n  border-radius: 10px;\n  font-family: "Roboto", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);\n  transition:\n    background 0.2s ease,\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n.new-distribution-btn[_ngcontent-%COMP%]:hover {\n  background: #ffdf32;\n  transform: translateY(-1px);\n  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.10);\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n  margin-bottom: 30px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 150px;\n  padding: 28px 30px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff8dc 0%,\n      #fffdf8 45px,\n      #ffffff 90px);\n  background: #ffffff;\n  border: 1px solid #eeeeee;\n  border-top: 5px solid #F9E662;\n  border-radius: 17px;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n  background:\n    linear-gradient(\n      180deg,\n      #fff8dc 0%,\n      #fffdf8 52px,\n      #ffffff 100px);\n}\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.08);\n}\n.stat-icon[_ngcontent-%COMP%] {\n  order: 2;\n  width: 46px;\n  height: 46px;\n  min-width: 46px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background: #fff4c7;\n  font-size: 21px;\n}\n.stat-icon.yellow[_ngcontent-%COMP%] {\n  background: #fff4c7;\n}\n.stat-content[_ngcontent-%COMP%] {\n  order: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.stat-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #263548;\n}\n.stat-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 32px;\n  line-height: 1;\n  font-weight: 700;\n  color: #263548;\n}\n.stat-content[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #c47b00;\n}\n.history-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #eeeeee;\n  border-top: 5px solid #F9E662;\n  border-radius: 17px;\n  overflow: hidden;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);\n}\n.history-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 25px;\n  padding: 25px 28px;\n  border-bottom: 1px solid #eeeeee;\n  background: #ffffff;\n  background:\n    linear-gradient(\n      180deg,\n      #fff8dc 0%,\n      #fffdf8 45px,\n      #ffffff 90px);\n}\n.history-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 21px;\n  font-weight: 700;\n  color: #263548;\n}\n.history-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  font-size: 13px;\n  font-weight: 400;\n  color: #7a8797;\n}\n.search-box[_ngcontent-%COMP%] {\n  width: 285px;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  padding: 0 14px;\n  border: 1px solid #d9dee5;\n  border-radius: 9px;\n  background: #ffffff;\n  color: #263548;\n  font-family: "Roboto", sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9aa4b2;\n  font-family: "Roboto", sans-serif;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #e5a900;\n  box-shadow: 0 0 0 3px rgba(229, 169, 0, 0.12);\n}\n.table-container[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 950px;\n  border-collapse: collapse;\n  font-family: "Roboto", sans-serif;\n}\nthead[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\nth[_ngcontent-%COMP%] {\n  padding: 15px 18px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #5d6978;\n  white-space: nowrap;\n  border-bottom: 1px solid #eeeeee;\n}\ntd[_ngcontent-%COMP%] {\n  padding: 18px;\n  font-size: 13px;\n  font-weight: 400;\n  color: #465365;\n  border-bottom: 1px solid #f0f0f0;\n  white-space: nowrap;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.2s ease;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fffdf2;\n}\ntd[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #263548;\n}\n.distribution-id[_ngcontent-%COMP%] {\n  color: #9a7900;\n  font-weight: 600;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-family: "Roboto", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n}\n.status-badge.assigned[_ngcontent-%COMP%] {\n  background: #e4f7eb;\n  color: #21834a;\n}\n.no-data[_ngcontent-%COMP%] {\n  padding: 45px 20px;\n  text-align: center;\n  color: #9aa4b2;\n  font-size: 13px;\n  font-weight: 400;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(24, 37, 52, 0.48);\n}\n.modal[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 610px;\n  max-height: 90vh;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background: #ffffff;\n  border-radius: 16px;\n  font-family: "Roboto", sans-serif;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.20);\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 22px 24px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  border-top: 5px solid #e5a900;\n  border-bottom: 1px solid #eeeeee;\n  background: #ffffff;\n}\n.modal-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n  color: #a37e00;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 21px;\n  font-weight: 700;\n  color: #263548;\n}\n.modal-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 400;\n  color: #7a8797;\n}\n.close-btn[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  color: #7b8794;\n  font-family: "Roboto", sans-serif;\n  font-size: 25px;\n  line-height: 1;\n  cursor: pointer;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n  color: #263548;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  overflow-y: auto;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 7px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #354255;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 42px;\n  box-sizing: border-box;\n  padding: 0 12px;\n  border: 1px solid #d9dee5;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #263548;\n  font-family: "Roboto", sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9aa4b2;\n  font-family: "Roboto", sans-serif;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #e5a900;\n  box-shadow: 0 0 0 3px rgba(229, 169, 0, 0.12);\n}\n.product-message[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 7px;\n  font-size: 11px;\n  font-weight: 400;\n  color: #7c8795;\n}\n.product-message.error[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n.selected-stock[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  padding: 18px;\n  background: #ffffff;\n  border: 1px solid #eeeeee;\n  border-top: 4px solid #e5a900;\n  border-radius: 12px;\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.04);\n}\n.selected-stock-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n}\n.stock-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.7px;\n  color: #a08321;\n}\n.selected-stock[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 17px;\n  font-weight: 700;\n  color: #263548;\n}\n.selected-stock[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  color: #7d8896;\n}\n.available-number[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.available-number[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 26px;\n  font-weight: 700;\n  color: #263548;\n}\n.available-number[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  color: #7d8896;\n}\n.stock-progress[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 7px;\n  margin-top: 16px;\n  overflow: hidden;\n  border-radius: 20px;\n  background: #ececec;\n}\n.stock-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 20px;\n  background: #e5a900;\n  transition: width 0.3s ease;\n}\n.stock-progress-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 7px;\n  font-size: 10px;\n  font-weight: 500;\n  color: #7d8896;\n}\n.quantity-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 7px;\n  font-size: 11px;\n  font-weight: 400;\n  color: #7b8794;\n}\n.quantity-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #263548;\n  font-weight: 600;\n}\n.info-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 13px;\n  background: #fff9df;\n  border: 1px solid #f1d86b;\n  border-radius: 9px;\n}\n.info-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  min-width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: #ffe45b;\n  color: #665400;\n  font-size: 11px;\n  font-weight: 700;\n}\n.info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  line-height: 1.55;\n  color: #667384;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  border-top: 1px solid #eeeeee;\n  background: #ffffff;\n}\n.cancel-btn[_ngcontent-%COMP%], \n.assign-btn[_ngcontent-%COMP%] {\n  min-height: 40px;\n  padding: 0 18px;\n  border-radius: 8px;\n  font-family: "Roboto", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s ease, transform 0.2s ease;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  border: 1px solid #d9dee5;\n  background: #ffffff;\n  color: #536171;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #f7f8f9;\n}\n.assign-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: #ffe45b;\n  color: #263548;\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);\n}\n.assign-btn[_ngcontent-%COMP%]:hover {\n  background: #ffda2e;\n  transform: translateY(-1px);\n}\n@media (max-width: 1000px) {\n  .distribution-page[_ngcontent-%COMP%] {\n    padding: 32px 25px;\n    background:\n      linear-gradient(\n        180deg,\n        #fff8dc 0%,\n        #fffdf8 52px,\n        #ffffff 100px);\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .header-row[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n}\n@media (max-width: 700px) {\n  .distribution-page[_ngcontent-%COMP%] {\n    padding: 25px 16px;\n  }\n  .header-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 18px;\n  }\n  .header-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .page-description[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .new-distribution-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .history-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 20px;\n  }\n  .search-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    min-height: 135px;\n    padding: 22px;\n  }\n  .stat-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .modal[_ngcontent-%COMP%] {\n    max-height: 95vh;\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .selected-stock-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .available-number[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .modal-footer[_ngcontent-%COMP%] {\n    padding: 14px 18px;\n  }\n}\n.transfer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(30, 24, 10, 0.42);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.transfer-modal[_ngcontent-%COMP%] {\n  width: min(100%, 650px);\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 30px;\n  border: 1.5px solid #fae8a4;\n  border-radius: 22px;\n  background: #ffffff;\n  color: #263238;\n  box-shadow: 0 24px 70px rgba(184, 134, 11, 0.16), 0 8px 24px rgba(0, 0, 0, 0.05);\n}\n.transfer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f9f0d4;\n}\n.transfer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  color: #263442;\n  font-size: 24px;\n  font-weight: 750;\n}\n.transfer-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #7b8490;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.transfer-header[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  flex-shrink: 0;\n  border: 1.5px solid #f2dfa0;\n  border-radius: 10px;\n  background: #fffdf5;\n  color: #5a4b16;\n  font-size: 24px;\n  line-height: 1;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.transfer-header[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%]:hover {\n  border-color: #e5b300;\n  background: #ffeb99;\n  color: #263238;\n}\n.transfer-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #374151;\n  font-size: 13px;\n  font-weight: 650;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #c53636;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  min-height: 46px;\n  padding: 11px 14px;\n  border: 1.5px solid #ebdca8;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #293541;\n  font-family: inherit;\n  font-size: 14px;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  appearance: auto;\n  cursor: pointer;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover, \n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  border-color: #dfb83b;\n  background: #fffef8;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #e5a900;\n  background: #fffdf2;\n  box-shadow: 0 0 0 3.5px rgba(255, 202, 40, 0.25);\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #ffffff;\n  color: #293541;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:disabled {\n  color: #a4abb5;\n  background: #faf8f2;\n}\n.available-stock-banner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  padding: 14px 18px;\n  border: 1.5px solid #f6e3a4;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #fffdf2 0%,\n      #fff9e6 100%);\n}\n.stock-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stock-info-label[_ngcontent-%COMP%] {\n  color: #8c7830;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stock-info-value[_ngcontent-%COMP%] {\n  color: #263442;\n  font-size: 15px;\n  font-weight: 750;\n}\n.field-help[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  color: #8c7830;\n  font-size: 12px;\n  font-weight: 600;\n}\n.transfer-modal[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 6px;\n  padding-top: 18px;\n  border-top: 1px solid #f7efd7;\n}\n.transfer-modal[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 11px 22px;\n  border: 1.5px solid #ebdca8;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #5a4b16;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.transfer-modal[_ngcontent-%COMP%]   .cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #fff8e1;\n  border-color: #dfb83b;\n  color: #3b2f06;\n}\n.confirm-transfer-btn[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 11px 24px;\n  border: 1.5px solid #e5b800;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffd740 0%,\n      #ffca28 100%);\n  color: #263238;\n  font-size: 13.5px;\n  font-weight: 750;\n  cursor: pointer;\n  box-shadow: 0 3px 10px rgba(255, 202, 40, 0.32);\n  transition: all 0.2s ease;\n}\n.confirm-transfer-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      180deg,\n      #ffca28 0%,\n      #f2b900 100%);\n  border-color: #cc9600;\n  box-shadow: 0 6px 18px rgba(242, 185, 0, 0.45);\n  transform: translateY(-1px);\n}\n.confirm-transfer-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  box-shadow: none;\n  transform: none;\n}\n/*# sourceMappingURL=distribution.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Distribution, [{
    type: Component,
    args: [{ selector: "app-distribution", standalone: true, imports: [
      CommonModule,
      FormsModule
    ], template: `<div class="distribution-page">

  <!-- =====================================================
       PAGE HEADER
  ====================================================== -->

  <div class="page-header">

   

    <div class="header-row">

      <div>

        <h1>
          Distribution
        </h1>

        <p class="page-description">
  Manage product distribution to volunteers
</p>

      </div>

      <button
        class="new-distribution-btn"
        type="button"
        (click)="openDistributionModal()"
      >
        New Distribution
      </button>

    </div>

  </div>


  <!-- =====================================================
       STATISTICS
  ====================================================== -->

  <div class="stats-grid">

    <!-- Total Distributions -->

    <div class="stat-card">

      <div class="stat-icon yellow">
        \u{1F4E6}
      </div>

      <div class="stat-content">

        <span>
          Total Distributions
        </span>

        <strong>
          {{ totalDistributions }}
        </strong>

        <small>
          All distributions
        </small>

      </div>

    </div>


    <!-- LCC To Distribution -->

    <div class="stat-card">

      <div class="stat-icon yellow">
        \u{1F504}
      </div>

      <div class="stat-content">

        <span>
          LCC to Distribution
        </span>

        <strong>
          {{ lccToDistribution }}
        </strong>

        <small>
          Total units distributed
        </small>

      </div>

    </div>


    <!-- Today Distribution -->

    <div class="stat-card">

      <div class="stat-icon yellow">
        \u{1F4C5}
      </div>

      <div class="stat-content">

        <span>
          Today Distribution
        </span>

        <strong>
          {{ todayDistribution }}
        </strong>

        <small>
          Units distributed today
        </small>

      </div>

    </div>

  </div>


  <!-- =====================================================
       DISTRIBUTION HISTORY
  ====================================================== -->

  <div class="history-card">

    <div class="history-header">

      <div>

        <h2>
          Distribution History
        </h2>

        <p>
          Track all product distributions.
        </p>

      </div>


      <!-- Search -->

      <div class="search-box">

        <input
          type="text"
          placeholder="Search distribution..."
          [(ngModel)]="searchText"
        />

      </div>

    </div>


    <!-- ===================================================
         TABLE
    ==================================================== -->

    <div class="table-container">

      <table>

        <thead>

          <tr>

            <th>
              Distribution ID
            </th>

            <th>
              Product
            </th>

            <th>
              Qty
            </th>

            <th>
              Volunteer
            </th>

            <th>
              Receiver
            </th>

            <th>
              Location
            </th>

            <th>
              Date
            </th>

            <th>
              Status
            </th>

          </tr>

        </thead>


        <tbody>

          <!-- Distribution Rows -->

          <tr
            *ngFor="
              let distribution of filteredDistributions
            "
          >

            <!-- Distribution ID -->

            <td>

              <strong class="distribution-id">
                {{ distribution.id }}
              </strong>

            </td>


            <!-- Product -->

            <td>
              {{ distribution.product }}
            </td>


            <!-- Quantity -->

            <td>

              <strong>
                {{ distribution.quantity }}
              </strong>

            </td>


            <!-- Volunteer -->

            <td>
              {{ distribution.volunteer }}
            </td>


            <!-- Receiver -->

            <td>
              {{ distribution.receiver }}
            </td>


            <!-- Location -->

            <td>
              {{ distribution.location }}
            </td>


            <!-- Date -->

            <td>
              {{ distribution.date }}
            </td>


            <!-- Status -->

            <td>

              <span
                class="status-badge assigned"
              >
                {{ distribution.status }}
              </span>

            </td>

          </tr>


          <!-- =================================================
               NO DATA
          ================================================== -->

          <tr
            *ngIf="
              filteredDistributions.length === 0
            "
          >

            <td
              colspan="8"
              class="no-data"
            >

              <!-- Search Result Empty -->

              <span
                *ngIf="
                  searchText.trim();
                  else noDistributionData
                "
              >

                No distributions found for
                "{{ searchText }}"

              </span>


              <!-- No Distribution Records -->

              <ng-template
                #noDistributionData
              >

                No distribution records available.

              </ng-template>

            </td>

          </tr>

        </tbody>

      </table>

    </div>

  </div>


  <!-- =====================================================
       NEW DISTRIBUTION / TRANSFER MODAL
  ====================================================== -->
  <div
    class="modal-overlay transfer-overlay"
    *ngIf="showModal"
    (click)="closeModal()"
  >
    <section
      class="transfer-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="distModalTitle"
      (click)="$event.stopPropagation()"
    >
      <!-- Modal Header -->
      <div class="transfer-header">
        <div>
          <h2 id="distModalTitle">Switch Stock to Distribution</h2>
          <p>Transfer products from LCC to Distribution inventory.</p>
        </div>

        <button
          type="button"
          class="modal-close-btn"
          aria-label="Close transfer form"
          (click)="closeModal()"
        >
          &times;
        </button>
      </div>

      <!-- Transfer Form -->
      <form
        class="transfer-form"
        #newDistForm="ngForm"
        (ngSubmit)="createDistribution()"
      >
        <!-- Product ID Dropdown -->
        <div class="form-field">
          <label for="distProductId">
            Product ID <span>*</span>
          </label>

          <select
            id="distProductId"
            name="distProductId"
            [(ngModel)]="selectedProduct"
            required
          >
            <option value="" disabled>Select Product ID</option>
            <option
              *ngFor="let product of products"
              [value]="product.id"
            >
              {{ product.productId + " - " + product.name }}
            </option>
          </select>
        </div>

        <!-- Product Name Dropdown -->
        <div class="form-field">
          <label for="distProductName">
            Product Name <span>*</span>
          </label>

          <select
            id="distProductName"
            name="distProductName"
            [(ngModel)]="selectedProduct"
            required
          >
            <option value="" disabled>Select Product Name</option>
            <option
              *ngFor="let product of products"
              [value]="product.id"
            >
              {{ product.name + " - " + product.productId }}
            </option>
          </select>
        </div>

        <!-- Available Stock Banner -->
        <div class="available-stock-banner" *ngIf="selectedProductDetails">
          <div class="stock-info-item">
            <span class="stock-info-label">Available LCC Stock</span>
            <strong class="stock-info-value">{{ availableQuantity }} PCS</strong>
          </div>
          <div class="stock-info-item">
            <span class="stock-info-label">Warehouse / LCC Location</span>
            <strong class="stock-info-value">{{ selectedProductDetails.location || 'Vadalur' }}</strong>
          </div>
        </div>

        <!-- Date -->
        <div class="form-field">
          <label for="distDate">Date <span>*</span></label>
          <input
            id="distDate"
            type="date"
            name="distributionDate"
            [(ngModel)]="distributionDate"
            required
          />
        </div>

        <!-- Transferred By / Volunteer -->
        <div class="form-field">
          <label for="distVolunteer">Transferred By / Volunteer <span>*</span></label>
          <input
            id="distVolunteer"
            type="text"
            name="selectedVolunteer"
            [(ngModel)]="selectedVolunteer"
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
            name="receiverName"
            [(ngModel)]="receiverName"
            placeholder="Enter receiver name or distribution center"
            required
          />
        </div>

        <!-- Quantity (PCS) -->
        <div class="form-field">
          <label for="distQty">Quantity (PCS) <span>*</span></label>
          <input
            id="distQty"
            type="number"
            name="distributionQuantity"
            [(ngModel)]="distributionQuantity"
            min="1"
            [max]="availableQuantity"
            step="1"
            placeholder="Enter quantity"
            required
          />
          <small class="field-help" *ngIf="selectedProductDetails">
            Maximum available to transfer: {{ availableQuantity }} PCS
          </small>
        </div>

        <!-- Form Actions -->
        <div class="form-actions">
          <button
            type="button"
            class="cancel-btn"
            (click)="closeModal()"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="confirm-transfer-btn"
            [disabled]="
              newDistForm.invalid ||
              !selectedProduct ||
              !distributionQuantity ||
              distributionQuantity < 1 ||
              distributionQuantity > availableQuantity
            "
          >
            Confirm Transfer
          </button>
        </div>
      </form>
    </section>
  </div>


</div>`, styles: ['@import "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap";\n\n/* src/app/pages/distribution/distribution.css */\n.distribution-page {\n  min-height: 100vh;\n  padding: 42px 38px;\n  box-sizing: border-box;\n  background: #ffffff;\n  font-family: "Roboto", sans-serif;\n  color: #263548;\n}\n.page-header {\n  margin-bottom: 34px;\n}\n.header-row {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 30px;\n}\n.header-row h1 {\n  margin: 0;\n  font-size: 42px;\n  line-height: 1.15;\n  font-weight: 700;\n  color: #263548;\n  letter-spacing: -0.8px;\n}\n.page-description {\n  margin: 12px 0 0;\n  font-size: 16px;\n  line-height: 1.5;\n  font-weight: 400;\n  color: #718096;\n}\n.new-distribution-btn {\n  border: none;\n  background: #ffe95f;\n  color: #263548;\n  padding: 12px 22px;\n  border-radius: 10px;\n  font-family: "Roboto", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);\n  transition:\n    background 0.2s ease,\n    transform 0.2s ease,\n    box-shadow 0.2s ease;\n}\n.new-distribution-btn:hover {\n  background: #ffdf32;\n  transform: translateY(-1px);\n  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.10);\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n  margin-bottom: 30px;\n}\n.stat-card {\n  position: relative;\n  min-height: 150px;\n  padding: 28px 30px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff8dc 0%,\n      #fffdf8 45px,\n      #ffffff 90px);\n  background: #ffffff;\n  border: 1px solid #eeeeee;\n  border-top: 5px solid #F9E662;\n  border-radius: 17px;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n  background:\n    linear-gradient(\n      180deg,\n      #fff8dc 0%,\n      #fffdf8 52px,\n      #ffffff 100px);\n}\n.stat-card:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.08);\n}\n.stat-icon {\n  order: 2;\n  width: 46px;\n  height: 46px;\n  min-width: 46px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background: #fff4c7;\n  font-size: 21px;\n}\n.stat-icon.yellow {\n  background: #fff4c7;\n}\n.stat-content {\n  order: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.stat-content span {\n  font-size: 15px;\n  font-weight: 500;\n  color: #263548;\n}\n.stat-content strong {\n  margin-top: 8px;\n  font-size: 32px;\n  line-height: 1;\n  font-weight: 700;\n  color: #263548;\n}\n.stat-content small {\n  margin-top: 8px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #c47b00;\n}\n.history-card {\n  background: #ffffff;\n  border: 1px solid #eeeeee;\n  border-top: 5px solid #F9E662;\n  border-radius: 17px;\n  overflow: hidden;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);\n}\n.history-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 25px;\n  padding: 25px 28px;\n  border-bottom: 1px solid #eeeeee;\n  background: #ffffff;\n  background:\n    linear-gradient(\n      180deg,\n      #fff8dc 0%,\n      #fffdf8 45px,\n      #ffffff 90px);\n}\n.history-header h2 {\n  margin: 0;\n  font-size: 21px;\n  font-weight: 700;\n  color: #263548;\n}\n.history-header p {\n  margin: 7px 0 0;\n  font-size: 13px;\n  font-weight: 400;\n  color: #7a8797;\n}\n.search-box {\n  width: 285px;\n}\n.search-box input {\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  padding: 0 14px;\n  border: 1px solid #d9dee5;\n  border-radius: 9px;\n  background: #ffffff;\n  color: #263548;\n  font-family: "Roboto", sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.search-box input::placeholder {\n  color: #9aa4b2;\n  font-family: "Roboto", sans-serif;\n}\n.search-box input:focus {\n  border-color: #e5a900;\n  box-shadow: 0 0 0 3px rgba(229, 169, 0, 0.12);\n}\n.table-container {\n  width: 100%;\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  min-width: 950px;\n  border-collapse: collapse;\n  font-family: "Roboto", sans-serif;\n}\nthead {\n  background: #fafafa;\n}\nth {\n  padding: 15px 18px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 600;\n  color: #5d6978;\n  white-space: nowrap;\n  border-bottom: 1px solid #eeeeee;\n}\ntd {\n  padding: 18px;\n  font-size: 13px;\n  font-weight: 400;\n  color: #465365;\n  border-bottom: 1px solid #f0f0f0;\n  white-space: nowrap;\n}\ntbody tr {\n  transition: background 0.2s ease;\n}\ntbody tr:hover {\n  background: #fffdf2;\n}\ntd strong {\n  font-weight: 600;\n  color: #263548;\n}\n.distribution-id {\n  color: #9a7900;\n  font-weight: 600;\n}\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-family: "Roboto", sans-serif;\n  font-size: 11px;\n  font-weight: 600;\n}\n.status-badge.assigned {\n  background: #e4f7eb;\n  color: #21834a;\n}\n.no-data {\n  padding: 45px 20px;\n  text-align: center;\n  color: #9aa4b2;\n  font-size: 13px;\n  font-weight: 400;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(24, 37, 52, 0.48);\n}\n.modal {\n  width: 100%;\n  max-width: 610px;\n  max-height: 90vh;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  background: #ffffff;\n  border-radius: 16px;\n  font-family: "Roboto", sans-serif;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.20);\n}\n.modal-header {\n  padding: 22px 24px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  border-top: 5px solid #e5a900;\n  border-bottom: 1px solid #eeeeee;\n  background: #ffffff;\n}\n.modal-label {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n  color: #a37e00;\n}\n.modal-header h2 {\n  margin: 0 0 6px;\n  font-size: 21px;\n  font-weight: 700;\n  color: #263548;\n}\n.modal-header p {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 400;\n  color: #7a8797;\n}\n.close-btn {\n  width: 34px;\n  height: 34px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  color: #7b8794;\n  font-family: "Roboto", sans-serif;\n  font-size: 25px;\n  line-height: 1;\n  cursor: pointer;\n}\n.close-btn:hover {\n  background: #f5f5f5;\n  color: #263548;\n}\n.modal-body {\n  padding: 24px;\n  overflow-y: auto;\n}\n.form-group {\n  margin-bottom: 18px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 7px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #354255;\n}\n.form-group input,\n.form-group select {\n  width: 100%;\n  height: 42px;\n  box-sizing: border-box;\n  padding: 0 12px;\n  border: 1px solid #d9dee5;\n  border-radius: 8px;\n  background: #ffffff;\n  color: #263548;\n  font-family: "Roboto", sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.form-group input::placeholder {\n  color: #9aa4b2;\n  font-family: "Roboto", sans-serif;\n}\n.form-group input:focus,\n.form-group select:focus {\n  border-color: #e5a900;\n  box-shadow: 0 0 0 3px rgba(229, 169, 0, 0.12);\n}\n.product-message {\n  display: block;\n  margin-top: 7px;\n  font-size: 11px;\n  font-weight: 400;\n  color: #7c8795;\n}\n.product-message.error {\n  color: #c62828;\n}\n.selected-stock {\n  margin-bottom: 18px;\n  padding: 18px;\n  background: #ffffff;\n  border: 1px solid #eeeeee;\n  border-top: 4px solid #e5a900;\n  border-radius: 12px;\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.04);\n}\n.selected-stock-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n}\n.stock-label {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.7px;\n  color: #a08321;\n}\n.selected-stock h3 {\n  margin: 0 0 4px;\n  font-size: 17px;\n  font-weight: 700;\n  color: #263548;\n}\n.selected-stock p {\n  margin: 0;\n  font-size: 11px;\n  color: #7d8896;\n}\n.available-number {\n  text-align: right;\n}\n.available-number strong {\n  display: block;\n  font-size: 26px;\n  font-weight: 700;\n  color: #263548;\n}\n.available-number span {\n  font-size: 10px;\n  font-weight: 500;\n  color: #7d8896;\n}\n.stock-progress {\n  width: 100%;\n  height: 7px;\n  margin-top: 16px;\n  overflow: hidden;\n  border-radius: 20px;\n  background: #ececec;\n}\n.stock-progress-fill {\n  height: 100%;\n  border-radius: 20px;\n  background: #e5a900;\n  transition: width 0.3s ease;\n}\n.stock-progress-info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 7px;\n  font-size: 10px;\n  font-weight: 500;\n  color: #7d8896;\n}\n.quantity-info {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 7px;\n  font-size: 11px;\n  font-weight: 400;\n  color: #7b8794;\n}\n.quantity-info strong {\n  color: #263548;\n  font-weight: 600;\n}\n.info-box {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 13px;\n  background: #fff9df;\n  border: 1px solid #f1d86b;\n  border-radius: 9px;\n}\n.info-icon {\n  width: 20px;\n  height: 20px;\n  min-width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: #ffe45b;\n  color: #665400;\n  font-size: 11px;\n  font-weight: 700;\n}\n.info-box p {\n  margin: 0;\n  font-size: 11px;\n  line-height: 1.55;\n  color: #667384;\n}\n.modal-footer {\n  padding: 16px 24px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  border-top: 1px solid #eeeeee;\n  background: #ffffff;\n}\n.cancel-btn,\n.assign-btn {\n  min-height: 40px;\n  padding: 0 18px;\n  border-radius: 8px;\n  font-family: "Roboto", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s ease, transform 0.2s ease;\n}\n.cancel-btn {\n  border: 1px solid #d9dee5;\n  background: #ffffff;\n  color: #536171;\n}\n.cancel-btn:hover {\n  background: #f7f8f9;\n}\n.assign-btn {\n  border: none;\n  background: #ffe45b;\n  color: #263548;\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);\n}\n.assign-btn:hover {\n  background: #ffda2e;\n  transform: translateY(-1px);\n}\n@media (max-width: 1000px) {\n  .distribution-page {\n    padding: 32px 25px;\n    background:\n      linear-gradient(\n        180deg,\n        #fff8dc 0%,\n        #fffdf8 52px,\n        #ffffff 100px);\n  }\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n  .header-row {\n    align-items: flex-start;\n  }\n}\n@media (max-width: 700px) {\n  .distribution-page {\n    padding: 25px 16px;\n  }\n  .header-row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 18px;\n  }\n  .header-row h1 {\n    font-size: 34px;\n  }\n  .page-description {\n    font-size: 14px;\n  }\n  .new-distribution-btn {\n    width: 100%;\n  }\n  .history-header {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 20px;\n  }\n  .search-box {\n    width: 100%;\n  }\n  .stat-card {\n    min-height: 135px;\n    padding: 22px;\n  }\n  .stat-content strong {\n    font-size: 28px;\n  }\n  .modal {\n    max-height: 95vh;\n  }\n  .modal-body {\n    padding: 18px;\n  }\n  .selected-stock-header {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .available-number {\n    text-align: left;\n  }\n  .modal-footer {\n    padding: 14px 18px;\n  }\n}\n.transfer-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  background: rgba(30, 24, 10, 0.42);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.transfer-modal {\n  width: min(100%, 650px);\n  max-height: calc(100vh - 40px);\n  overflow-y: auto;\n  padding: 30px;\n  border: 1.5px solid #fae8a4;\n  border-radius: 22px;\n  background: #ffffff;\n  color: #263238;\n  box-shadow: 0 24px 70px rgba(184, 134, 11, 0.16), 0 8px 24px rgba(0, 0, 0, 0.05);\n}\n.transfer-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 16px;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #f9f0d4;\n}\n.transfer-header h2 {\n  margin: 0 0 6px;\n  color: #263442;\n  font-size: 24px;\n  font-weight: 750;\n}\n.transfer-header p {\n  margin: 0;\n  color: #7b8490;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.transfer-header .modal-close-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  flex-shrink: 0;\n  border: 1.5px solid #f2dfa0;\n  border-radius: 10px;\n  background: #fffdf5;\n  color: #5a4b16;\n  font-size: 24px;\n  line-height: 1;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.transfer-header .modal-close-btn:hover {\n  border-color: #e5b300;\n  background: #ffeb99;\n  color: #263238;\n}\n.transfer-form {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.transfer-modal .form-field label {\n  display: block;\n  margin-bottom: 8px;\n  color: #374151;\n  font-size: 13px;\n  font-weight: 650;\n}\n.transfer-modal .form-field label span {\n  color: #c53636;\n}\n.transfer-modal .form-field select,\n.transfer-modal .form-field input {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  min-height: 46px;\n  padding: 11px 14px;\n  border: 1.5px solid #ebdca8;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #293541;\n  font-family: inherit;\n  font-size: 14px;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    background 0.2s ease,\n    box-shadow 0.2s ease;\n}\n.transfer-modal .form-field select {\n  appearance: auto;\n  cursor: pointer;\n}\n.transfer-modal .form-field select:hover,\n.transfer-modal .form-field input:hover {\n  border-color: #dfb83b;\n  background: #fffef8;\n}\n.transfer-modal .form-field select:focus,\n.transfer-modal .form-field input:focus {\n  border-color: #e5a900;\n  background: #fffdf2;\n  box-shadow: 0 0 0 3.5px rgba(255, 202, 40, 0.25);\n}\n.transfer-modal .form-field select option {\n  padding: 10px;\n  background: #ffffff;\n  color: #293541;\n}\n.transfer-modal .form-field select option:disabled {\n  color: #a4abb5;\n  background: #faf8f2;\n}\n.available-stock-banner {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  padding: 14px 18px;\n  border: 1.5px solid #f6e3a4;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #fffdf2 0%,\n      #fff9e6 100%);\n}\n.stock-info-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.stock-info-label {\n  color: #8c7830;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.stock-info-value {\n  color: #263442;\n  font-size: 15px;\n  font-weight: 750;\n}\n.field-help {\n  display: block;\n  margin-top: 5px;\n  color: #8c7830;\n  font-size: 12px;\n  font-weight: 600;\n}\n.transfer-modal .form-actions {\n  display: flex;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 6px;\n  padding-top: 18px;\n  border-top: 1px solid #f7efd7;\n}\n.transfer-modal .cancel-btn {\n  min-height: 44px;\n  padding: 11px 22px;\n  border: 1.5px solid #ebdca8;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #5a4b16;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.transfer-modal .cancel-btn:hover {\n  background: #fff8e1;\n  border-color: #dfb83b;\n  color: #3b2f06;\n}\n.confirm-transfer-btn {\n  min-height: 44px;\n  padding: 11px 24px;\n  border: 1.5px solid #e5b800;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffd740 0%,\n      #ffca28 100%);\n  color: #263238;\n  font-size: 13.5px;\n  font-weight: 750;\n  cursor: pointer;\n  box-shadow: 0 3px 10px rgba(255, 202, 40, 0.32);\n  transition: all 0.2s ease;\n}\n.confirm-transfer-btn:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      180deg,\n      #ffca28 0%,\n      #f2b900 100%);\n  border-color: #cc9600;\n  box-shadow: 0 6px 18px rgba(242, 185, 0, 0.45);\n  transform: translateY(-1px);\n}\n.confirm-transfer-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  box-shadow: none;\n  transform: none;\n}\n/*# sourceMappingURL=distribution.css.map */\n'] }]
  }], () => [{ type: LccService }, { type: DistributionService }, { type: ReportsService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Distribution, { className: "Distribution", filePath: "src/app/pages/distribution/distribution.ts", lineNumber: 47 });
})();
export {
  Distribution
};
//# debugId=68852abb-8245-58ef-8af5-ad62c5a1c931
//# sourceMappingURL=chunk-KOCPJZBB.js.map
