import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter
} from "./chunk-QEGN6UXF.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-STUIIXEF.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QKVBSWNP.js";

// src/app/pages/login/login.component.ts
function LoginComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "img", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", image_r1);
  }
}
function LoginComponent_button_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function LoginComponent_button_60_Template_button_click_0_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToSlide(i_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.currentSlide === i_r3);
    \u0275\u0275attribute("aria-label", "Slide " + (i_r3 + 1));
  }
}
function LoginComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 48);
    \u0275\u0275element(2, "circle", 49)(3, "line", 50)(4, "line", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.errorMessage);
  }
}
function LoginComponent__svg_svg_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 52);
    \u0275\u0275element(1, "path", 53)(2, "circle", 54);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent__svg_svg_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 52);
    \u0275\u0275element(1, "path", 55)(2, "path", 56)(3, "path", 57);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_112__svg_svg_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 71);
    \u0275\u0275element(1, "path", 72)(2, "circle", 54);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_112__svg_svg_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 71);
    \u0275\u0275element(1, "path", 55)(2, "path", 56)(3, "path", 57);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_112__svg_svg_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 71);
    \u0275\u0275element(1, "path", 72)(2, "circle", 54);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_112__svg_svg_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 71);
    \u0275\u0275element(1, "path", 55)(2, "path", 56)(3, "path", 57);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function LoginComponent_div_112_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeSignup());
    });
    \u0275\u0275elementStart(1, "div", 59);
    \u0275\u0275listener("click", function LoginComponent_div_112_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "button", 60);
    \u0275\u0275listener("click", function LoginComponent_div_112_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeSignup());
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Create Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label");
    \u0275\u0275text(7, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 61);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_112_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.signupData.fullName, $event) || (ctx_r3.signupData.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label");
    \u0275\u0275text(10, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 62);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_112_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.signupData.username, $event) || (ctx_r3.signupData.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label");
    \u0275\u0275text(13, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 63);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_112_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.signupData.email, $event) || (ctx_r3.signupData.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label");
    \u0275\u0275text(16, "Mobile Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 64);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_112_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.signupData.mobile, $event) || (ctx_r3.signupData.mobile = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "label");
    \u0275\u0275text(19, "Create Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 65)(21, "input", 66);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_112_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.signupData.createPassword, $event) || (ctx_r3.signupData.createPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 67);
    \u0275\u0275listener("click", function LoginComponent_div_112_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showCreatePassword = !ctx_r3.showCreatePassword);
    });
    \u0275\u0275template(23, LoginComponent_div_112__svg_svg_23_Template, 3, 0, "svg", 68)(24, LoginComponent_div_112__svg_svg_24_Template, 4, 0, "svg", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "label");
    \u0275\u0275text(26, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 65)(28, "input", 69);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_112_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.signupData.confirmPassword, $event) || (ctx_r3.signupData.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 67);
    \u0275\u0275listener("click", function LoginComponent_div_112_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showConfirmPassword = !ctx_r3.showConfirmPassword);
    });
    \u0275\u0275template(30, LoginComponent_div_112__svg_svg_30_Template, 3, 0, "svg", 68)(31, LoginComponent_div_112__svg_svg_31_Template, 4, 0, "svg", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "button", 70);
    \u0275\u0275listener("click", function LoginComponent_div_112_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.submitSignup());
    });
    \u0275\u0275text(33, " Create Account ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.signupData.fullName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.signupData.username);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.signupData.email);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.signupData.mobile);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r3.showCreatePassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.signupData.createPassword);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r3.showCreatePassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showCreatePassword);
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r3.showConfirmPassword ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.signupData.confirmPassword);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r3.showConfirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showConfirmPassword);
  }
}
function LoginComponent_div_113_input_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 79);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_113_input_8_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.forgotEmail, $event) || (ctx_r3.forgotEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.forgotEmail);
    \u0275\u0275control();
  }
}
function LoginComponent_div_113_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function LoginComponent_div_113_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.sendForgotOtp());
    });
    \u0275\u0275text(1, " Send OTP\n");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_113_div_10_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 83);
    \u0275\u0275controlCreate();
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_113_div_10_input_4_Template_input_ngModelChange_0_listener($event) {
      const i_r11 = \u0275\u0275restoreView(_r10).index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r3.otp[i_r11], $event) || (ctx_r3.otp[i_r11] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function LoginComponent_div_113_div_10_input_4_Template_input_input_0_listener() {
      const i_r11 = \u0275\u0275restoreView(_r10).index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.otp[i_r11] = ctx_r3.otp[i_r11].replace(/[^0-9]/g, "").slice(-1));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r11 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.otp[i_r11]);
    \u0275\u0275property("name", "otp" + i_r11);
    \u0275\u0275control();
  }
}
function LoginComponent_div_113_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "p");
    \u0275\u0275text(2, "Enter the 6-digit OTP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 81);
    \u0275\u0275template(4, LoginComponent_div_113_div_10_input_4_Template, 1, 2, "input", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 70);
    \u0275\u0275listener("click", function LoginComponent_div_113_div_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.verifyOtp());
    });
    \u0275\u0275text(6, " Verify OTP ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.otp);
  }
}
function LoginComponent_div_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275listener("click", function LoginComponent_div_113_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeForgotPassword());
    });
    \u0275\u0275elementStart(1, "div", 73);
    \u0275\u0275listener("click", function LoginComponent_div_113_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "button", 60);
    \u0275\u0275listener("click", function LoginComponent_div_113_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeForgotPassword());
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Forgot Password?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 74);
    \u0275\u0275text(7, " Enter your registered email to reset your password. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, LoginComponent_div_113_input_8_Template, 1, 1, "input", 75)(9, LoginComponent_div_113_button_9_Template, 2, 0, "button", 76)(10, LoginComponent_div_113_div_10_Template, 7, 1, "div", 77);
    \u0275\u0275elementStart(11, "button", 78);
    \u0275\u0275listener("click", function LoginComponent_div_113_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeForgotPassword());
    });
    \u0275\u0275text(12, " Back to Login ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", !ctx_r3.otpSent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.otpSent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.otpSent);
  }
}
var LoginComponent = class _LoginComponent {
  constructor(router) {
    this.router = router;
  }
  router;
  username = "";
  password = "";
  rememberMe = false;
  showPassword = false;
  showForgotPassword = false;
  forgotEmail = "";
  forgotOtp = "";
  errorMessage = "";
  otpSent = false;
  otp = ["", "", "", "", "", ""];
  showSignup = false;
  signupData = {
    fullName: "",
    username: "",
    email: "",
    mobile: "",
    createPassword: "",
    confirmPassword: ""
  };
  showCreatePassword = false;
  showConfirmPassword = false;
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  images = [
    "/asset/helping-person1.png",
    "/asset/helping-person2.png",
    "/asset/helping-person3.png"
  ];
  currentSlide = 0;
  sliderInterval;
  ngOnInit() {
    this.startSliderTimer();
  }
  // Existing auth & slider logic
  startSliderTimer() {
    this.sliderInterval = setInterval(() => {
      this.currentSlide++;
      if (this.currentSlide >= this.images.length) {
        this.currentSlide = 0;
      }
    }, 5e3);
  }
  goToSlide(index) {
    this.currentSlide = index;
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
    this.startSliderTimer();
  }
  openSignup(event) {
    event.preventDefault();
    this.showSignup = true;
  }
  closeSignup() {
    this.showSignup = false;
  }
  openForgotPassword(event) {
    event.preventDefault();
    this.showSignup = false;
    this.showForgotPassword = true;
    this.otpSent = false;
    this.otp = ["", "", "", "", "", ""];
  }
  closeForgotPassword() {
    this.showForgotPassword = false;
  }
  sendForgotOtp() {
    if (!this.forgotEmail.trim()) {
      alert("Please enter your email address");
      return;
    }
    this.otpSent = true;
  }
  verifyOtp() {
    const enteredOtp = this.otp.join("");
    if (enteredOtp.length !== 6) {
      alert("Please enter all 6 digits");
      return;
    }
    alert("OTP verification API connect \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD.");
  }
  submitSignup() {
    if (!this.signupData.fullName.trim() || !this.signupData.username.trim() || !this.signupData.email.trim() || !this.signupData.mobile.trim() || !this.signupData.createPassword || !this.signupData.confirmPassword) {
      alert("Please fill all fields");
      return;
    }
    if (!/^\d{10}$/.test(this.signupData.mobile)) {
      alert("Enter a valid 10-digit mobile number");
      return;
    }
    if (this.signupData.createPassword !== this.signupData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("All fields validated successfully!");
  }
  loginUser() {
    if (!this.username || !this.password) {
      this.errorMessage = "Please enter your username and password";
      return;
    }
    this.errorMessage = "";
    this.router.navigate(["/dashboard"]);
  }
  refreshPage() {
    window.location.reload();
  }
  ngOnDestroy() {
    if (this.sliderInterval) {
      clearInterval(this.sliderInterval);
    }
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 114, vars: 13, consts: [[1, "page"], [1, "site-header"], [1, "header-brand"], ["src", "/asset/logo.png", "alt", "Sanmarkkam Logo"], [1, "header-badge"], ["src", "/asset/logo111.png", "alt", "Logo"], [1, "content-layout"], [1, "left"], ["aria-hidden", "true", 1, "dots"], [1, "message"], [1, "impact-tags"], [1, "impact-tag"], [1, "photo-slider"], [1, "slides-track"], ["class", "slide", 4, "ngFor", "ngForOf"], [1, "wave"], [1, "slider-dots"], ["type", "button", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "right"], [1, "right-container"], [1, "card"], [1, "welcome"], [1, "desc"], [3, "ngSubmit"], ["class", "login-error-banner", 4, "ngIf"], [1, "input-box"], ["for", "username"], ["id", "username", "name", "username", "type", "text", "placeholder", "Enter username", "autocomplete", "username", "required", "", 3, "ngModelChange", "ngModel"], ["for", "password"], [1, "password-wrapper"], ["id", "password", "name", "password", "placeholder", "Enter password", "autocomplete", "current-password", "required", "", 3, "ngModelChange", "type", "ngModel"], ["type", "button", "aria-label", "Show or hide password", 1, "eye", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "19", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngIf"], [1, "remember-row"], [1, "remember-label"], ["type", "checkbox", "name", "rememberMe", 3, "ngModelChange", "ngModel"], ["href", "#", 1, "forgot-link", 3, "click"], ["type", "submit", 1, "login"], [1, "divider"], [1, "signup-text"], ["href", "#", 3, "click"], [1, "tamil-quote"], [1, "lamp"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "slide"], ["alt", "Helping person", 3, "src"], ["type", "button", 3, "click"], [1, "login-error-banner"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], ["xmlns", "http://www.w3.org/2000/svg", "width", "19", "height", "19", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M3 3l18 18"], ["d", "M10.6 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a16 16 0 0 1-3.2 4.1"], ["d", "M6.2 6.2C3.5 8 2 12 2 12s3.6 7 10 7c1.5 0 2.8-.4 4-1"], [1, "modal-overlay", 3, "click"], [1, "signup-popup", 3, "click"], ["type", "button", 1, "close-btn", 3, "click"], ["type", "text", "placeholder", "Enter full name", "name", "fullName", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Enter username", "name", "username", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "Enter email address", "name", "email", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "Enter mobile number", "name", "mobile", "maxlength", "10", 3, "ngModelChange", "ngModel"], [1, "password-field"], ["placeholder", "Create password", "name", "createPassword", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "password-eye", 3, "click"], ["viewBox", "0 0 24 24", "width", "20", "height", "20", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", 4, "ngIf"], ["placeholder", "Confirm password", "name", "confirmPassword", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "signup-submit", 3, "click"], ["viewBox", "0 0 24 24", "width", "20", "height", "20", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8"], ["d", "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"], [1, "signup-popup", "forgot-popup", 3, "click"], [1, "forgot-description"], ["type", "email", "name", "forgotEmail", "placeholder", "Enter your email", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "button", "class", "signup-submit", 3, "click", 4, "ngIf"], ["class", "otp-section", 4, "ngIf"], ["type", "button", 1, "back-login", 3, "click"], ["type", "email", "name", "forgotEmail", "placeholder", "Enter your email", 3, "ngModelChange", "ngModel"], [1, "otp-section"], [1, "otp-boxes"], ["type", "text", "inputmode", "numeric", "maxlength", "1", "class", "otp-input", 3, "ngModel", "name", "ngModelChange", "input", 4, "ngFor", "ngForOf"], ["type", "text", "inputmode", "numeric", "maxlength", "1", 1, "otp-input", 3, "ngModelChange", "input", "ngModel", "name"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementStart(4, "div")(5, "h1");
      \u0275\u0275text(6, "Sanmarkkam");
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, ".org");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, " \u2022Share \xA0 \u2022 Support \xA0 \u2022 Build a Better Tomorrow");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 4);
      \u0275\u0275element(12, "img", 5);
      \u0275\u0275elementStart(13, "div")(14, "strong");
      \u0275\u0275text(15, "Give With Love");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "hr");
      \u0275\u0275elementStart(17, "strong");
      \u0275\u0275text(18, "change A Life");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 6)(20, "section", 7)(21, "div", 8);
      \u0275\u0275element(22, "i")(23, "i")(24, "i")(25, "i")(26, "i")(27, "i")(28, "i")(29, "i")(30, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 9)(32, "h2");
      \u0275\u0275text(33, " Your Kindness");
      \u0275\u0275element(34, "br");
      \u0275\u0275text(35, " Creates ");
      \u0275\u0275elementStart(36, "span");
      \u0275\u0275text(37, "Change");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 10)(39, "span", 11)(40, "b");
      \u0275\u0275text(41, "\u2022");
      \u0275\u0275elementEnd();
      \u0275\u0275text(42, " Together");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 11)(44, "b");
      \u0275\u0275text(45, "\u2022");
      \u0275\u0275elementEnd();
      \u0275\u0275text(46, " support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span", 11)(48, "b");
      \u0275\u0275text(49, "\u2022");
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, " Spread Hope");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 11)(52, "b");
      \u0275\u0275text(53, "\u2022");
      \u0275\u0275elementEnd();
      \u0275\u0275text(54, " Your Gift");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "div", 12)(56, "div", 13);
      \u0275\u0275template(57, LoginComponent_div_57_Template, 2, 1, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "div", 15);
      \u0275\u0275elementStart(59, "div", 16);
      \u0275\u0275template(60, LoginComponent_button_60_Template, 1, 3, "button", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "section", 18)(62, "div", 19)(63, "div", 20)(64, "div", 21);
      \u0275\u0275text(65, " WELCOME BACK ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "h2");
      \u0275\u0275text(67, "Sign In");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p", 22);
      \u0275\u0275text(69, " Enter your username and password to continue ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "form", 23);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_70_listener() {
        return ctx.loginUser();
      });
      \u0275\u0275template(71, LoginComponent_div_71_Template, 7, 1, "div", 24);
      \u0275\u0275elementStart(72, "div", 25)(73, "label", 26);
      \u0275\u0275text(74, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "input", 27);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_75_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 25)(77, "label", 28);
      \u0275\u0275text(78, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 29)(80, "input", 30);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_80_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "button", 31);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_81_listener() {
        return ctx.togglePassword();
      });
      \u0275\u0275template(82, LoginComponent__svg_svg_82_Template, 3, 0, "svg", 32)(83, LoginComponent__svg_svg_83_Template, 4, 0, "svg", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 33)(85, "label", 34)(86, "input", 35);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_86_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.rememberMe, $event) || (ctx.rememberMe = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "span");
      \u0275\u0275text(88, "Remember me");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "a", 36);
      \u0275\u0275listener("click", function LoginComponent_Template_a_click_89_listener($event) {
        return ctx.openForgotPassword($event);
      });
      \u0275\u0275text(90, " Forgot password?\n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "button", 37);
      \u0275\u0275text(92, " Login \xA0 \u2192 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 38);
      \u0275\u0275element(94, "span");
      \u0275\u0275elementStart(95, "div");
      \u0275\u0275text(96, "OR");
      \u0275\u0275elementEnd();
      \u0275\u0275element(97, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 39);
      \u0275\u0275text(99, " Don't have an account? ");
      \u0275\u0275elementStart(100, "a", 40);
      \u0275\u0275listener("click", function LoginComponent_Template_a_click_100_listener($event) {
        return ctx.openSignup($event);
      });
      \u0275\u0275text(101, "Sign Up");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(102, "br");
      \u0275\u0275elementStart(103, "div", 41)(104, "span", 42);
      \u0275\u0275text(105, "\u{1FA94}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p");
      \u0275\u0275text(107, '"\u0B85\u0BB1\u0BBF\u0BB5\u0BC1 \u0BB5\u0BBF\u0BB3\u0B99\u0BCD\u0B95\u0BBF\u0BAF \u0B9C\u0BC0\u0BB5\u0BB0\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1');
      \u0275\u0275element(108, "br");
      \u0275\u0275text(109, ' \u0B9C\u0BC0\u0BB5\u0B95\u0BBE\u0BB0\u0BC1\u0BA3\u0BCD\u0BAF\u0BAE\u0BC7 \u0B95\u0B9F\u0BB5\u0BC1\u0BB3\u0BCD \u0BB5\u0BB4\u0BBF\u0BAA\u0BBE\u0B9F\u0BC1"');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "span", 42);
      \u0275\u0275text(111, "\u{1FA94}");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(112, LoginComponent_div_112_Template, 34, 12, "div", 43)(113, LoginComponent_div_113_Template, 13, 3, "div", 43);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(56);
      \u0275\u0275styleProp("transform", "translateX(-" + ctx.currentSlide * 100 + "%)");
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.images);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.images);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.showPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPassword);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.rememberMe);
      \u0275\u0275control();
      \u0275\u0275advance(26);
      \u0275\u0275property("ngIf", ctx.showSignup);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showForgotPassword);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MaxLengthValidator, NgModel, NgForm, CommonModule, NgForOf, NgIf], styles: ['\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 100vh;\n}\n.page[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n  background: #ffffff;\n  color: #172033;\n}\n.left[_ngcontent-%COMP%] {\n  width: 52%;\n  min-height: 100vh;\n  position: relative;\n  padding: 44px 6.5%;\n  display: flex;\n  flex-direction: column;\n  background: #ffffff;\n  overflow: hidden;\n}\n.dots[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 36px;\n  right: 40px;\n  display: grid;\n  grid-template-columns: repeat(3, 6px);\n  gap: 8px;\n  opacity: 0.35;\n  z-index: 5;\n  pointer-events: none;\n}\n.dots[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #f3b000;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  z-index: 10;\n  position: relative;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  flex-shrink: 0;\n  cursor: pointer;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.2s ease;\n}\n.logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: block;\n}\n.brand-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.brand-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 2.4vw, 32px);\n  font-weight: 750;\n  color: #14213d;\n  letter-spacing: -0.5px;\n  line-height: 1.2;\n}\n.brand-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f3b000;\n}\n.brand-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  color: #687184;\n  font-size: 13px;\n  line-height: 1.4;\n  font-weight: 500;\n}\n.message[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 12px 32px 16px 48px;\n  margin: 0;\n  text-align: left;\n  z-index: 2;\n}\n.message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 800;\n  line-height: 1.2;\n  letter-spacing: -0.5px;\n  color: #172B4D;\n}\n.message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #F5A900;\n}\n.impact-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 10px 18px;\n  margin: 0;\n  padding: 0;\n}\n.impact-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  margin: 0;\n  padding: 0;\n  font-size: 13px;\n  line-height: 1.5;\n  white-space: nowrap;\n  color: #263858;\n}\n.impact-tag[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #F5A900;\n  font-weight: 800;\n}\n.photo-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 56%;\n  overflow: hidden;\n  z-index: 2;\n}\n.slides-track[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.85s cubic-bezier(0.25, 1, 0.5, 1);\n  will-change: transform;\n}\n.slide[_ngcontent-%COMP%] {\n  flex: 0 0 100%;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 35%;\n  display: block;\n}\n.wave[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -5%;\n  bottom: -92%;\n  width: 110%;\n  height: 115%;\n  background: #ffd33d;\n  border-radius: 50%;\n  z-index: 5;\n  pointer-events: none;\n}\n.slider-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  bottom: 16px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.slider-dots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.85);\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.slider-dots[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  width: 22px;\n  border-radius: 10px;\n  background: #14213d;\n}\n.right[_ngcontent-%COMP%] {\n  width: 48%;\n  min-height: 100vh;\n  padding: 40px 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow-y: auto;\n  background:\n    radial-gradient(\n      circle at top left,\n      #fff8dc 0%,\n      transparent 55%),\n    #ffffff;\n}\n.right-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: auto 0;\n}\n.logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  padding: 8px 14px;\n  background: #ffffff;\n  border: 1px solid #f2e9cb;\n  border-radius: 40px;\n  box-shadow: 0 4px 16px rgba(20, 33, 61, 0.05);\n}\n.company-logo[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  object-fit: contain;\n  border-radius: 50%;\n  display: block;\n}\n.logo-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n.logo-sub[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: #7b8494;\n  line-height: 1.25;\n}\n.logo-main[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 750;\n  color: #14213d;\n  line-height: 1.25;\n}\n.card[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #ffffff;\n  border: 1.5px solid #f2ece0;\n  border-radius: 20px;\n  padding: 34px 34px 28px;\n  box-shadow: 0 16px 45px rgba(20, 33, 61, 0.07), 0 2px 8px rgba(20, 33, 61, 0.03);\n}\n.welcome[_ngcontent-%COMP%] {\n  color: #d49b00;\n  font-size: 11px;\n  font-weight: 750;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  color: #14213d;\n  margin-bottom: 6px;\n  letter-spacing: -0.4px;\n}\n.desc[_ngcontent-%COMP%] {\n  color: #687184;\n  font-size: 13.5px;\n  line-height: 1.5;\n  margin-bottom: 22px;\n}\n.input-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 16px;\n}\n.input-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2d3748;\n}\n.input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 46px;\n  box-sizing: border-box;\n  padding: 0 14px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 14.5px;\n  color: #1a202c;\n  background: #ffffff;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #a0aec0;\n}\n.input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #f0b600;\n  box-shadow: 0 0 0 3px rgba(240, 182, 0, 0.16);\n}\n.password-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.password-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 44px;\n}\n.password-wrapper[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: #718096;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n  border-radius: 4px;\n  outline: none;\n  transition: color 0.15s ease;\n}\n.password-wrapper[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:hover {\n  color: #14213d;\n}\n.password-wrapper[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #f4b400;\n}\n.remember-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 4px 0 20px;\n}\n.remember-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #4a5568;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.remember-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  accent-color: #f5b400;\n  cursor: pointer;\n  margin: 0;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  color: #d49b00;\n  font-size: 13px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: color 0.15s ease;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  color: #b58400;\n  text-decoration: underline;\n}\n.login[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  border: none;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      #F9E662,\n      #ffd83e);\n  font-size: 15px;\n  font-weight: 700;\n  color: #172033;\n  cursor: pointer;\n  box-shadow: 0 8px 20px rgba(238, 180, 0, 0.24);\n  transition:\n    transform 0.15s ease,\n    box-shadow 0.15s ease,\n    background 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.login[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 24px rgba(238, 180, 0, 0.32);\n  background:\n    linear-gradient(\n      90deg,\n      #f5bc00,\n      #ffcf29);\n}\n.login[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.signup-text[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n  color: #687184;\n  font-size: 13px;\n}\n.signup-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d49b00;\n  font-weight: 600;\n  text-decoration: none;\n  margin-left: 4px;\n}\n.signup-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin: 18px 0 14px;\n  color: #a0aec0;\n  font-size: 11.5px;\n  font-weight: 600;\n}\n.divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #edf2f7;\n  flex: 1;\n}\n.footer[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #8fa0b5;\n  font-size: 11.5px;\n  font-weight: 500;\n}\n.footer[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #ffca28;\n  margin: 0 5px;\n}\n@media (max-width: 1050px) {\n  .page[_ngcontent-%COMP%] {\n    flex-direction: column;\n    min-height: 100vh;\n  }\n  .left[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 480px;\n    height: 480px;\n    padding: 36px 5%;\n  }\n  .right[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: auto;\n    padding: 40px 24px 60px;\n  }\n  .right-container[_ngcontent-%COMP%] {\n    max-width: 440px;\n  }\n}\n@media (max-width: 600px) {\n  .left[_ngcontent-%COMP%] {\n    min-height: 420px;\n    height: 420px;\n    padding: 28px 20px;\n  }\n  .brand[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .logo[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .brand-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .brand-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .message[_ngcontent-%COMP%] {\n    margin-top: 24px;\n  }\n  .message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: 26px 20px;\n    border-radius: 16px;\n  }\n  .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .right[_ngcontent-%COMP%] {\n    padding: 24px 16px 40px;\n  }\n}\n.login-error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #fef2f2;\n  border: 1.5px solid #fca5a5;\n  color: #dc2626;\n  padding: 10px 14px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 13.5px;\n  font-weight: 500;\n  animation: _ngcontent-%COMP%_bannerFadeIn 0.25s ease-out;\n}\n.login-error-banner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  stroke: #dc2626;\n}\n@keyframes _ngcontent-%COMP%_bannerFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.tamil-quote[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  margin-top: 20px;\n  padding: -10px 10px;\n  width: 100%;\n  box-sizing: border-box;\n  background:\n    linear-gradient(\n      135deg,\n      #fff4bd 0%,\n      #ffffff 50%,\n      #ffdf55 100%);\n  border-radius: 12px;\n  border: 1px solid #ffe38a;\n}\n.tamil-quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.5;\n  text-align: center;\n  color: #111827;\n  margin: 0;\n}\n.lamp[_ngcontent-%COMP%] {\n  font-size: 8px;\n  flex-shrink: 0;\n}\n.site-header[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 80px;\n  padding: 12px 5%;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  background: #F9E662;\n  color: #172B4D;\n  position: relative;\n  z-index: 10;\n}\n.header-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-left: 0;\n}\n.header-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  object-fit: contain;\n  flex-shrink: 0;\n}\n.header-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(22px, 2.5vw, 30px);\n  font-weight: 800;\n  color: #172B4D;\n  line-height: 1.15;\n}\n.header-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n.header-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 3px 0 0;\n  font-size: 13px;\n  color: #172B4D;\n}\n.header-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 18px;\n  border-radius: 50px;\n  background: #FFFFFF;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  flex-shrink: 0;\n}\n.header-badge[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  object-fit: contain;\n}\n.header-badge[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.header-badge[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #172B4D;\n  text-transform: capitalize;\n}\n.header-badge[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 1px 0;\n  border: none;\n  border-top: 1px solid #e2e8f0;\n}\n.page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100vh;\n  margin: 0;\n  padding: 0;\n  background: #ffffff;\n  box-sizing: border-box;\n}\n.content-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 52% 48%;\n  align-items: center;\n  width: 100%;\n  flex: 1;\n  min-height: calc(100vh - 80px);\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.content-layout[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-width: 0;\n  height: 100%;\n  min-height: 540px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 40px 6% 30px;\n  box-sizing: border-box;\n  overflow: hidden;\n  background: #ffffff;\n}\n.content-layout[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-width: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px 6%;\n  box-sizing: border-box;\n  background: #ffffff;\n}\n.right-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 440px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  box-sizing: border-box;\n}\n.card[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 30px;\n  border-radius: 20px;\n  background: #ffffff;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);\n  border: 1px solid #f1f3f7;\n  box-sizing: border-box;\n}\n@media (max-width: 992px) {\n  .content-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    min-height: auto;\n  }\n  .content-layout[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    min-height: 380px;\n    height: auto;\n    padding: 30px 24px 10px;\n  }\n  .content-layout[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .photo-slider[_ngcontent-%COMP%] {\n    position: relative !important;\n    height: 220px !important;\n    margin-top: 16px !important;\n    bottom: auto !important;\n  }\n  .content-layout[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .yellow-curve[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .content-layout[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    padding: 24px 20px 48px;\n    height: auto;\n  }\n}\n@media (max-width: 768px) {\n  .site-header[_ngcontent-%COMP%] {\n    padding: 10px 16px;\n    min-height: 68px;\n  }\n  .header-brand[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .header-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 44px;\n  }\n  .header-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n  .header-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 11.5px;\n  }\n  .header-badge[_ngcontent-%COMP%] {\n    padding: 6px 14px;\n  }\n  .header-badge[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n  }\n  .header-badge[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 11.5px;\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: 22px 18px;\n    border-radius: 16px;\n  }\n}\n@media (max-width: 520px) {\n  .site-header[_ngcontent-%COMP%] {\n    padding: 8px 14px;\n    min-height: 60px;\n  }\n  .header-badge[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .content-layout[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    min-height: auto;\n    padding: 20px 16px 0;\n  }\n  .content-layout[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .content-layout[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .photo-slider[_ngcontent-%COMP%] {\n    height: 180px !important;\n  }\n  .content-layout[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    padding: 16px 14px 36px;\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: 18px 14px;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);\n  }\n  .tamil-quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.6);\n  padding: 20px;\n}\n.signup-popup[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 400px;\n  padding: 30px;\n  background: white;\n  border-radius: 18px;\n  box-sizing: border-box;\n}\n.signup-popup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin: 12px 0 5px;\n}\n.signup-popup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 42px;\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-sizing: border-box;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 12px;\n  border: none;\n  background: none;\n  font-size: 26px;\n  cursor: pointer;\n}\n.signup-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20px;\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  background: #ffd33d;\n  cursor: pointer;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.60);\n  padding: 20px;\n  box-sizing: border-box;\n}\n.signup-popup[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 440px;\n  max-height: 90vh;\n  overflow-y: auto;\n  padding: 30px;\n  background: #ffffff;\n  border-radius: 20px;\n  box-sizing: border-box;\n  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.20);\n}\n.signup-popup[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: #14213d;\n  font-size: 24px;\n  font-weight: 700;\n  text-align: left;\n}\n.signup-popup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin: 13px 0 6px;\n  color: #14213d;\n  font-size: 14px;\n  font-weight: 500;\n}\n.signup-popup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 43px;\n  padding: 10px;\n  border: 1px solid #d8dce5;\n  border-radius: 9px;\n  outline: none;\n  background: #ffffff;\n  color: #172033;\n  font-size: 14px;\n  box-sizing: border-box;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.signup-popup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #ffc928;\n  box-shadow: 0 0 0 3px rgba(255, 201, 40, 0.18);\n}\n.password-field[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.password-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 45px;\n}\n.password-eye[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n  border: none;\n  background: transparent;\n  color: #30384a;\n  cursor: pointer;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 15px;\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: 50%;\n  background: transparent;\n  color: #111827;\n  font-size: 25px;\n  line-height: 1;\n  cursor: pointer;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f2f5;\n}\n.signup-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 44px;\n  margin-top: 22px;\n  padding: 12px;\n  border: none;\n  border-radius: 9px;\n  background: #ffd33d;\n  color: #171717;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.2s;\n}\n.signup-submit[_ngcontent-%COMP%]:hover {\n  background: #f5c21b;\n}\n.signup-submit[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n@media (max-width: 480px) {\n  .modal-overlay[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .signup-popup[_ngcontent-%COMP%] {\n    max-width: 100%;\n    max-height: 92vh;\n    padding: 25px 20px;\n    border-radius: 16px;\n  }\n  .signup-popup[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.forgot-description[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  color: #666;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.back-login[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 12px;\n  padding: 10px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: #333;\n}\n.otp-section[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 100%;\n}\n.otp-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n.otp-boxes[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  margin-bottom: 20px;\n}\n.otp-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  max-width: 48px;\n  height: 48px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n  border: 1px solid #d5d9e2;\n  border-radius: 10px;\n  outline: none;\n  box-sizing: border-box;\n}\n.otp-input[_ngcontent-%COMP%]:focus {\n  border-color: #ffcc32;\n  box-shadow: 0 0 0 2px #ffcc3240;\n}\n@media (min-width: 993px) {\n  .left[_ngcontent-%COMP%]   .photo-slider[_ngcontent-%COMP%] {\n    position: absolute !important;\n    left: 0 !important;\n    bottom: 0 !important;\n    width: 100% !important;\n    height: 60% !important;\n    overflow: hidden !important;\n    z-index: 2 !important;\n  }\n  .left[_ngcontent-%COMP%]   .photo-slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100% !important;\n    height: 100% !important;\n    object-fit: cover !important;\n    object-position: center bottom !important;\n  }\n  .left[_ngcontent-%COMP%]   .yellow-curve[_ngcontent-%COMP%] {\n    position: absolute !important;\n    left: -5% !important;\n    bottom: -45px !important;\n    width: 110% !important;\n    height: 170px !important;\n    z-index: 3 !important;\n  }\n}\n@media (max-width: 992px) {\n  .left[_ngcontent-%COMP%]   .photo-slider[_ngcontent-%COMP%] {\n    position: relative !important;\n    width: 100% !important;\n    max-width: 440px !important;\n    height: 220px !important;\n    margin: 16px auto 0 !important;\n    overflow: hidden !important;\n    border-radius: 14px;\n    z-index: 2 !important;\n  }\n  .left[_ngcontent-%COMP%]   .photo-slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100% !important;\n    height: 100% !important;\n    object-fit: contain !important;\n    object-position: center !important;\n  }\n  .left[_ngcontent-%COMP%]   .yellow-curve[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [FormsModule, CommonModule], template: `<div class="page">

  
<!-- \u0BAE\u0B9E\u0BCD\u0B9A\u0BB3\u0BCD \u0BA8\u0BBF\u0BB1 \u0BAE\u0BC1\u0BB4\u0BC1 Header -->
<header class="site-header">

  <div class="header-brand">
    <img src="/asset/logo.png" alt="Sanmarkkam Logo">

    <div>
      <h1>Sanmarkkam<span>.org</span></h1>
      <p> \u2022Share &nbsp; \u2022 Support  &nbsp; \u2022 Build a Better Tomorrow</p>
    </div>
  </div>

  <div class="header-badge">
    <img src="/asset/logo111.png" alt="Logo">

    <div>
      <strong>Give With Love</strong> 
      <hr>
      <strong>change A Life</strong>
    </div>
  </div>

</header>

  <!-- ================= LEFT SIDE (BRAND & HERO) ================= -->
  <div class="content-layout">
     <section class="left">

    <!-- Decorative dots -->
    <div class="dots" aria-hidden="true">
      <i></i><i></i><i></i>
      <i></i><i></i><i></i>
      <i></i><i></i><i></i>
    </div>
    

    <!-- Message Content -->
    <div class="message">
      <h2>
        Your Kindness<br>
        Creates <span>Change</span>
      </h2>

      <div class="impact-tags">
        <span class="impact-tag"><b>\u2022</b> Together</span>
        <span class="impact-tag"><b>\u2022</b> support</span>
        <span class="impact-tag"><b>\u2022</b> Spread Hope</span>
        <span class="impact-tag"><b>\u2022</b> Your Gift</span>
      </div>
    </div>

    <!-- Image Slider -->
    <div class="photo-slider">
      <div
        class="slides-track"
        [style.transform]="'translateX(-' + (currentSlide * 100) + '%)'">
        <div
          class="slide"
          *ngFor="let image of images; let i = index">
          <img
            [src]="image"
            alt="Helping person">
        </div>
      </div>

      <div class="wave"></div>

      <div class="slider-dots">
        <button
          *ngFor="let image of images; let i = index"
          type="button"
          [class.active]="currentSlide === i"
          (click)="goToSlide(i)"
          [attr.aria-label]="'Slide ' + (i + 1)">
        </button>
      </div>
    </div>

  </section>

  <!-- ================= RIGHT SIDE (AUTH FORM) ================= -->
  <section class="right">

    <div class="right-container">

      

      <!-- Login Card -->
      <div class="card">

        <div class="welcome">
          WELCOME BACK
        </div>

        <h2>Sign In</h2>

        <p class="desc">
          Enter your username and password to continue
        </p>

        <form (ngSubmit)="loginUser()">
          <!-- Error Banner -->
          <div class="login-error-banner" *ngIf="errorMessage">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>{{ errorMessage }}</span>
          </div>

          <!-- Username -->
          <div class="input-box">
            <label for="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              [(ngModel)]="username"
              placeholder="Enter username"
              autocomplete="username"
              required>
          </div>

          <!-- Password -->
          <div class="input-box">
            <label for="password">Password</label>
            <div class="password-wrapper">
              <input
                id="password"
                name="password"
                [type]="showPassword ? 'text' : 'password'"
                [(ngModel)]="password"
                placeholder="Enter password"
                autocomplete="current-password"
                required>
              <button
                class="eye"
                type="button"
                (click)="togglePassword()"
                aria-label="Show or hide password">
                <svg
                  *ngIf="!showPassword"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <svg
                  *ngIf="showPassword"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M3 3l18 18"/>
                  <path d="M10.6 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a16 16 0 0 1-3.2 4.1"/>
                  <path d="M6.2 6.2C3.5 8 2 12 2 12s3.6 7 10 7c1.5 0 2.8-.4 4-1"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Options Row -->
          <div class="remember-row">
            <label class="remember-label">
              <input
                type="checkbox"
                name="rememberMe"
                [(ngModel)]="rememberMe">
              <span>Remember me</span>
            </label>
            
            <a href="#"
   class="forgot-link"
   (click)="openForgotPassword($event)">
  Forgot password?
</a>
          </div>

          <!-- Login Button -->
          <button
            class="login"
            type="submit">
            Login &nbsp; \u2192
          </button>

        </form>

        <!-- Divider -->
        <div class="divider">
          <span></span>
          <div>OR</div>
          <span></span>
        </div>

        <!-- Sign Up Link -->
<div class="signup-text">
  Don't have an account?
  <a href="#" (click)="openSignup($event)">Sign Up</a>
</div>
<br>
  

        <!-- Footer -->
        
<div class="tamil-quote">
  <span class="lamp">\u{1FA94}</span>
  <p>"\u0B85\u0BB1\u0BBF\u0BB5\u0BC1 \u0BB5\u0BBF\u0BB3\u0B99\u0BCD\u0B95\u0BBF\u0BAF \u0B9C\u0BC0\u0BB5\u0BB0\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1<br>
  \u0B9C\u0BC0\u0BB5\u0B95\u0BBE\u0BB0\u0BC1\u0BA3\u0BCD\u0BAF\u0BAE\u0BC7 \u0B95\u0B9F\u0BB5\u0BC1\u0BB3\u0BCD \u0BB5\u0BB4\u0BBF\u0BAA\u0BBE\u0B9F\u0BC1"</p>
  <span class="lamp">\u{1FA94}</span>
</div>


      </div>

    </div>

  </section>
 
<!-- SIGNUP POPUP -->
<div class="modal-overlay"
     *ngIf="showSignup"
     (click)="closeSignup()">

  <div class="signup-popup"
       (click)="$event.stopPropagation()">

    <button
      type="button"
      class="close-btn"
      (click)="closeSignup()">\xD7</button>

    <h2>Create Account</h2>

    <!-- Full Name -->
    <label>Full Name</label>
    <input
      type="text"
      placeholder="Enter full name"
      name="fullName"
      [(ngModel)]="signupData.fullName">

    <!-- Username -->
    <label>Username</label>
    <input
      type="text"
      placeholder="Enter username"
      name="username"
      [(ngModel)]="signupData.username">

    <!-- Email -->
    <label>Email</label>
    <input
      type="email"
      placeholder="Enter email address"
      name="email"
      [(ngModel)]="signupData.email">

    <!-- Mobile -->
    <label>Mobile Number</label>
    <input
      type="tel"
      placeholder="Enter mobile number"
      name="mobile"
      [(ngModel)]="signupData.mobile"
      maxlength="10">

    <!-- Create Password -->
    <label>Create Password</label>
    <div class="password-field">
      <input
        [type]="showCreatePassword ? 'text' : 'password'"
        placeholder="Create password"
        name="createPassword"
        [(ngModel)]="signupData.createPassword">

      <button
        type="button"
        class="password-eye"
        (click)="showCreatePassword = !showCreatePassword">
        <svg *ngIf="!showCreatePassword"
             viewBox="0 0 24 24" width="20" height="20"
             fill="none" stroke="currentColor"
             stroke-width="1.8">
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>

        <svg *ngIf="showCreatePassword"
             viewBox="0 0 24 24" width="20" height="20"
             fill="none" stroke="currentColor"
             stroke-width="1.8">
          <path d="M3 3l18 18"/>
          <path d="M10.6 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a16 16 0 0 1-3.2 4.1"/>
          <path d="M6.2 6.2C3.5 8 2 12 2 12s3.6 7 10 7c1.5 0 2.8-.4 4-1"/>
        </svg>
      </button>
    </div>

    <!-- Confirm Password -->
    <label>Confirm Password</label>
    <div class="password-field">
      <input
        [type]="showConfirmPassword ? 'text' : 'password'"
        placeholder="Confirm password"
        name="confirmPassword"
        [(ngModel)]="signupData.confirmPassword">

      <button
        type="button"
        class="password-eye"
        (click)="showConfirmPassword = !showConfirmPassword">
        <svg *ngIf="!showConfirmPassword"
             viewBox="0 0 24 24" width="20" height="20"
             fill="none" stroke="currentColor"
             stroke-width="1.8">
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>

        <svg *ngIf="showConfirmPassword"
             viewBox="0 0 24 24" width="20" height="20"
             fill="none" stroke="currentColor"
             stroke-width="1.8">
          <path d="M3 3l18 18"/>
          <path d="M10.6 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a16 16 0 0 1-3.2 4.1"/>
          <path d="M6.2 6.2C3.5 8 2 12 2 12s3.6 7 10 7c1.5 0 2.8-.4 4-1"/>
        </svg>
      </button>
    </div>

    <button
      type="button"
      class="signup-submit"
      (click)="submitSignup()">
      Create Account
    </button>

  </div>
</div>

<!-- FORGOT PASSWORD POPUP -->
<div
  class="modal-overlay"
  *ngIf="showForgotPassword"
  (click)="closeForgotPassword()">

  <div
    class="signup-popup forgot-popup"
    (click)="$event.stopPropagation()">

    <button
      type="button"
      class="close-btn"
      (click)="closeForgotPassword()">\xD7</button>

    <h2>Forgot Password?</h2>

    <p class="forgot-description">
      Enter your registered email to reset your password.
    </p>

    
<!-- EMAIL INPUT -->
<input
  *ngIf="!otpSent"
  type="email"
  name="forgotEmail"
  [(ngModel)]="forgotEmail"
  placeholder="Enter your email">

<!-- SEND OTP BUTTON -->
<button
  *ngIf="!otpSent"
  type="button"
  class="signup-submit"
  (click)="sendForgotOtp()">
  Send OTP
</button>

<!-- SIX OTP BOXES -->
<div *ngIf="otpSent" class="otp-section">

  <p>Enter the 6-digit OTP</p>

  <div class="otp-boxes">
    <input
      *ngFor="let digit of otp; let i = index"
      type="text"
      inputmode="numeric"
      maxlength="1"
      [(ngModel)]="otp[i]"
      [name]="'otp' + i"
      (input)="otp[i] = otp[i].replace(/[^0-9]/g, '').slice(-1)"
      class="otp-input">
  </div>

  <button
    type="button"
    class="signup-submit"
    (click)="verifyOtp()">
    Verify OTP
  </button>

</div>


    <button
      type="button"
      class="back-login"
      (click)="closeForgotPassword()">
      Back to Login
    </button>

  </div>
</div>


</div>`, styles: ['/* src/app/pages/login/login.component.css */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n:host {\n  display: block;\n  width: 100%;\n  min-height: 100vh;\n}\n.page {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Helvetica,\n    Arial,\n    sans-serif;\n  background: #ffffff;\n  color: #172033;\n}\n.left {\n  width: 52%;\n  min-height: 100vh;\n  position: relative;\n  padding: 44px 6.5%;\n  display: flex;\n  flex-direction: column;\n  background: #ffffff;\n  overflow: hidden;\n}\n.dots {\n  position: absolute;\n  top: 36px;\n  right: 40px;\n  display: grid;\n  grid-template-columns: repeat(3, 6px);\n  gap: 8px;\n  opacity: 0.35;\n  z-index: 5;\n  pointer-events: none;\n}\n.dots i {\n  display: block;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #f3b000;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  z-index: 10;\n  position: relative;\n}\n.logo {\n  width: 60px;\n  height: 60px;\n  flex-shrink: 0;\n  cursor: pointer;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.2s ease;\n}\n.logo:hover {\n  transform: scale(1.05);\n}\n.logo img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: block;\n}\n.brand-content {\n  flex: 1;\n  min-width: 0;\n}\n.brand-content h1 {\n  font-size: clamp(24px, 2.4vw, 32px);\n  font-weight: 750;\n  color: #14213d;\n  letter-spacing: -0.5px;\n  line-height: 1.2;\n}\n.brand-content h1 span {\n  color: #f3b000;\n}\n.brand-content p {\n  margin-top: 5px;\n  color: #687184;\n  font-size: 13px;\n  line-height: 1.4;\n  font-weight: 500;\n}\n.message {\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 12px 32px 16px 48px;\n  margin: 0;\n  text-align: left;\n  z-index: 2;\n}\n.message h2 {\n  margin: 0 0 10px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 800;\n  line-height: 1.2;\n  letter-spacing: -0.5px;\n  color: #172B4D;\n}\n.message h2 span {\n  color: #F5A900;\n}\n.impact-tags {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 10px 18px;\n  margin: 0;\n  padding: 0;\n}\n.impact-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  margin: 0;\n  padding: 0;\n  font-size: 13px;\n  line-height: 1.5;\n  white-space: nowrap;\n  color: #263858;\n}\n.impact-tag b {\n  color: #F5A900;\n  font-weight: 800;\n}\n.photo-slider {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 56%;\n  overflow: hidden;\n  z-index: 2;\n}\n.slides-track {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.85s cubic-bezier(0.25, 1, 0.5, 1);\n  will-change: transform;\n}\n.slide {\n  flex: 0 0 100%;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.slide img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center 35%;\n  display: block;\n}\n.wave {\n  position: absolute;\n  left: -5%;\n  bottom: -92%;\n  width: 110%;\n  height: 115%;\n  background: #ffd33d;\n  border-radius: 50%;\n  z-index: 5;\n  pointer-events: none;\n}\n.slider-dots {\n  position: absolute;\n  z-index: 10;\n  bottom: 16px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.slider-dots button {\n  width: 8px;\n  height: 8px;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.85);\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.slider-dots button.active {\n  width: 22px;\n  border-radius: 10px;\n  background: #14213d;\n}\n.right {\n  width: 48%;\n  min-height: 100vh;\n  padding: 40px 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow-y: auto;\n  background:\n    radial-gradient(\n      circle at top left,\n      #fff8dc 0%,\n      transparent 55%),\n    #ffffff;\n}\n.right-container {\n  width: 100%;\n  max-width: 440px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: auto 0;\n}\n.logo-container {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n  padding: 8px 14px;\n  background: #ffffff;\n  border: 1px solid #f2e9cb;\n  border-radius: 40px;\n  box-shadow: 0 4px 16px rgba(20, 33, 61, 0.05);\n}\n.company-logo {\n  width: 60px;\n  height: 60px;\n  object-fit: contain;\n  border-radius: 50%;\n  display: block;\n}\n.logo-text {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n.logo-sub {\n  font-size: 11.5px;\n  font-weight: 600;\n  color: #7b8494;\n  line-height: 1.25;\n}\n.logo-main {\n  font-size: 14.5px;\n  font-weight: 750;\n  color: #14213d;\n  line-height: 1.25;\n}\n.card {\n  width: 100%;\n  background: #ffffff;\n  border: 1.5px solid #f2ece0;\n  border-radius: 20px;\n  padding: 34px 34px 28px;\n  box-shadow: 0 16px 45px rgba(20, 33, 61, 0.07), 0 2px 8px rgba(20, 33, 61, 0.03);\n}\n.welcome {\n  color: #d49b00;\n  font-size: 11px;\n  font-weight: 750;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n.card h2 {\n  font-size: 28px;\n  font-weight: 800;\n  color: #14213d;\n  margin-bottom: 6px;\n  letter-spacing: -0.4px;\n}\n.desc {\n  color: #687184;\n  font-size: 13.5px;\n  line-height: 1.5;\n  margin-bottom: 22px;\n}\n.input-box {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 16px;\n}\n.input-box label {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #2d3748;\n}\n.input-box input {\n  width: 100%;\n  height: 46px;\n  box-sizing: border-box;\n  padding: 0 14px;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 10px;\n  font-size: 14.5px;\n  color: #1a202c;\n  background: #ffffff;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.input-box input::placeholder {\n  color: #a0aec0;\n}\n.input-box input:focus {\n  border-color: #f0b600;\n  box-shadow: 0 0 0 3px rgba(240, 182, 0, 0.16);\n}\n.password-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.password-wrapper input {\n  padding-right: 44px;\n}\n.password-wrapper .eye {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: #718096;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n  border-radius: 4px;\n  outline: none;\n  transition: color 0.15s ease;\n}\n.password-wrapper .eye:hover {\n  color: #14213d;\n}\n.password-wrapper .eye:focus-visible {\n  outline: 2px solid #f4b400;\n}\n.remember-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 4px 0 20px;\n}\n.remember-label {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #4a5568;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.remember-label input[type=checkbox] {\n  width: 15px;\n  height: 15px;\n  accent-color: #f5b400;\n  cursor: pointer;\n  margin: 0;\n}\n.forgot-link {\n  color: #d49b00;\n  font-size: 13px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: color 0.15s ease;\n}\n.forgot-link:hover {\n  color: #b58400;\n  text-decoration: underline;\n}\n.login {\n  width: 100%;\n  height: 48px;\n  border: none;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      90deg,\n      #F9E662,\n      #ffd83e);\n  font-size: 15px;\n  font-weight: 700;\n  color: #172033;\n  cursor: pointer;\n  box-shadow: 0 8px 20px rgba(238, 180, 0, 0.24);\n  transition:\n    transform 0.15s ease,\n    box-shadow 0.15s ease,\n    background 0.2s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.login:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 24px rgba(238, 180, 0, 0.32);\n  background:\n    linear-gradient(\n      90deg,\n      #f5bc00,\n      #ffcf29);\n}\n.login:active {\n  transform: translateY(0);\n}\n.signup-text {\n  text-align: center;\n  margin-top: 10px;\n  color: #687184;\n  font-size: 13px;\n}\n.signup-text a {\n  color: #d49b00;\n  font-weight: 600;\n  text-decoration: none;\n  margin-left: 4px;\n}\n.signup-text a:hover {\n  text-decoration: underline;\n}\n.divider {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin: 18px 0 14px;\n  color: #a0aec0;\n  font-size: 11.5px;\n  font-weight: 600;\n}\n.divider span {\n  height: 1px;\n  background: #edf2f7;\n  flex: 1;\n}\n.footer {\n  text-align: center;\n  color: #8fa0b5;\n  font-size: 11.5px;\n  font-weight: 500;\n}\n.footer b {\n  color: #ffca28;\n  margin: 0 5px;\n}\n@media (max-width: 1050px) {\n  .page {\n    flex-direction: column;\n    min-height: 100vh;\n  }\n  .left {\n    width: 100%;\n    min-height: 480px;\n    height: 480px;\n    padding: 36px 5%;\n  }\n  .right {\n    width: 100%;\n    min-height: auto;\n    padding: 40px 24px 60px;\n  }\n  .right-container {\n    max-width: 440px;\n  }\n}\n@media (max-width: 600px) {\n  .left {\n    min-height: 420px;\n    height: 420px;\n    padding: 28px 20px;\n  }\n  .brand {\n    gap: 12px;\n  }\n  .logo {\n    width: 50px;\n    height: 50px;\n  }\n  .brand-content h1 {\n    font-size: 22px;\n  }\n  .brand-content p {\n    font-size: 11px;\n  }\n  .message {\n    margin-top: 24px;\n  }\n  .message h2 {\n    font-size: 26px;\n  }\n  .card {\n    padding: 26px 20px;\n    border-radius: 16px;\n  }\n  .card h2 {\n    font-size: 24px;\n  }\n  .right {\n    padding: 24px 16px 40px;\n  }\n}\n.login-error-banner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #fef2f2;\n  border: 1.5px solid #fca5a5;\n  color: #dc2626;\n  padding: 10px 14px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 13.5px;\n  font-weight: 500;\n  animation: bannerFadeIn 0.25s ease-out;\n}\n.login-error-banner svg {\n  flex-shrink: 0;\n  stroke: #dc2626;\n}\n@keyframes bannerFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.tamil-quote {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  margin-top: 20px;\n  padding: -10px 10px;\n  width: 100%;\n  box-sizing: border-box;\n  background:\n    linear-gradient(\n      135deg,\n      #fff4bd 0%,\n      #ffffff 50%,\n      #ffdf55 100%);\n  border-radius: 12px;\n  border: 1px solid #ffe38a;\n}\n.tamil-quote p {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.5;\n  text-align: center;\n  color: #111827;\n  margin: 0;\n}\n.lamp {\n  font-size: 8px;\n  flex-shrink: 0;\n}\n.site-header {\n  width: 100%;\n  min-height: 80px;\n  padding: 12px 5%;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  background: #F9E662;\n  color: #172B4D;\n  position: relative;\n  z-index: 10;\n}\n.header-brand {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-left: 0;\n}\n.header-brand img {\n  width: 52px;\n  height: 52px;\n  object-fit: contain;\n  flex-shrink: 0;\n}\n.header-brand h1 {\n  margin: 0;\n  font-size: clamp(22px, 2.5vw, 30px);\n  font-weight: 800;\n  color: #172B4D;\n  line-height: 1.15;\n}\n.header-brand h1 span {\n  color: #FFFFFF;\n}\n.header-brand p {\n  margin: 3px 0 0;\n  font-size: 13px;\n  color: #172B4D;\n}\n.header-badge {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 18px;\n  border-radius: 50px;\n  background: #FFFFFF;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  flex-shrink: 0;\n}\n.header-badge img {\n  width: 38px;\n  height: 38px;\n  object-fit: contain;\n}\n.header-badge div {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.header-badge strong {\n  font-size: 13px;\n  color: #172B4D;\n  text-transform: capitalize;\n}\n.header-badge hr {\n  margin: 1px 0;\n  border: none;\n  border-top: 1px solid #e2e8f0;\n}\n.page {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100vh;\n  margin: 0;\n  padding: 0;\n  background: #ffffff;\n  box-sizing: border-box;\n}\n.content-layout {\n  display: grid;\n  grid-template-columns: 52% 48%;\n  align-items: center;\n  width: 100%;\n  flex: 1;\n  min-height: calc(100vh - 80px);\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.content-layout .left {\n  position: relative;\n  width: 100%;\n  min-width: 0;\n  height: 100%;\n  min-height: 540px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 40px 6% 30px;\n  box-sizing: border-box;\n  overflow: hidden;\n  background: #ffffff;\n}\n.content-layout .right {\n  position: relative;\n  width: 100%;\n  min-width: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px 6%;\n  box-sizing: border-box;\n  background: #ffffff;\n}\n.right-container {\n  width: 100%;\n  max-width: 440px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  box-sizing: border-box;\n}\n.card {\n  width: 100%;\n  padding: 30px;\n  border-radius: 20px;\n  background: #ffffff;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);\n  border: 1px solid #f1f3f7;\n  box-sizing: border-box;\n}\n@media (max-width: 992px) {\n  .content-layout {\n    grid-template-columns: 1fr;\n    min-height: auto;\n  }\n  .content-layout .left {\n    min-height: 380px;\n    height: auto;\n    padding: 30px 24px 10px;\n  }\n  .content-layout .left .photo-slider {\n    position: relative !important;\n    height: 220px !important;\n    margin-top: 16px !important;\n    bottom: auto !important;\n  }\n  .content-layout .left .yellow-curve {\n    display: none !important;\n  }\n  .content-layout .right {\n    padding: 24px 20px 48px;\n    height: auto;\n  }\n}\n@media (max-width: 768px) {\n  .site-header {\n    padding: 10px 16px;\n    min-height: 68px;\n  }\n  .header-brand {\n    gap: 12px;\n  }\n  .header-brand img {\n    width: 44px;\n    height: 44px;\n  }\n  .header-brand h1 {\n    font-size: 21px;\n  }\n  .header-brand p {\n    font-size: 11.5px;\n  }\n  .header-badge {\n    padding: 6px 14px;\n  }\n  .header-badge img {\n    width: 32px;\n    height: 32px;\n  }\n  .header-badge strong {\n    font-size: 11.5px;\n  }\n  .card {\n    padding: 22px 18px;\n    border-radius: 16px;\n  }\n}\n@media (max-width: 520px) {\n  .site-header {\n    padding: 8px 14px;\n    min-height: 60px;\n  }\n  .header-badge {\n    display: none;\n  }\n  .header-brand h1 {\n    font-size: 19px;\n  }\n  .content-layout .left {\n    min-height: auto;\n    padding: 20px 16px 0;\n  }\n  .content-layout .left .message h2 {\n    font-size: 24px;\n  }\n  .content-layout .left .photo-slider {\n    height: 180px !important;\n  }\n  .content-layout .right {\n    padding: 16px 14px 36px;\n  }\n  .card {\n    padding: 18px 14px;\n    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);\n  }\n  .tamil-quote p {\n    font-size: 13px;\n  }\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.6);\n  padding: 20px;\n}\n.signup-popup {\n  position: relative;\n  width: 100%;\n  max-width: 400px;\n  padding: 30px;\n  background: white;\n  border-radius: 18px;\n  box-sizing: border-box;\n}\n.signup-popup label {\n  display: block;\n  margin: 12px 0 5px;\n}\n.signup-popup input {\n  width: 100%;\n  height: 42px;\n  padding: 10px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-sizing: border-box;\n}\n.close-btn {\n  position: absolute;\n  top: 8px;\n  right: 12px;\n  border: none;\n  background: none;\n  font-size: 26px;\n  cursor: pointer;\n}\n.signup-submit {\n  width: 100%;\n  margin-top: 20px;\n  padding: 12px;\n  border: none;\n  border-radius: 8px;\n  background: #ffd33d;\n  cursor: pointer;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.60);\n  padding: 20px;\n  box-sizing: border-box;\n}\n.signup-popup {\n  position: relative;\n  width: 100%;\n  max-width: 440px;\n  max-height: 90vh;\n  overflow-y: auto;\n  padding: 30px;\n  background: #ffffff;\n  border-radius: 20px;\n  box-sizing: border-box;\n  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.20);\n}\n.signup-popup h2 {\n  margin: 0 0 20px;\n  color: #14213d;\n  font-size: 24px;\n  font-weight: 700;\n  text-align: left;\n}\n.signup-popup label {\n  display: block;\n  margin: 13px 0 6px;\n  color: #14213d;\n  font-size: 14px;\n  font-weight: 500;\n}\n.signup-popup input {\n  display: block;\n  width: 100%;\n  height: 43px;\n  padding: 10px;\n  border: 1px solid #d8dce5;\n  border-radius: 9px;\n  outline: none;\n  background: #ffffff;\n  color: #172033;\n  font-size: 14px;\n  box-sizing: border-box;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.signup-popup input:focus {\n  border-color: #ffc928;\n  box-shadow: 0 0 0 3px rgba(255, 201, 40, 0.18);\n}\n.password-field {\n  position: relative;\n  width: 100%;\n}\n.password-field input {\n  padding-right: 45px;\n}\n.password-eye {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n  border: none;\n  background: transparent;\n  color: #30384a;\n  cursor: pointer;\n}\n.close-btn {\n  position: absolute;\n  top: 12px;\n  right: 15px;\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: 50%;\n  background: transparent;\n  color: #111827;\n  font-size: 25px;\n  line-height: 1;\n  cursor: pointer;\n}\n.close-btn:hover {\n  background: #f1f2f5;\n}\n.signup-submit {\n  width: 100%;\n  min-height: 44px;\n  margin-top: 22px;\n  padding: 12px;\n  border: none;\n  border-radius: 9px;\n  background: #ffd33d;\n  color: #171717;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, transform 0.2s;\n}\n.signup-submit:hover {\n  background: #f5c21b;\n}\n.signup-submit:active {\n  transform: scale(0.98);\n}\n@media (max-width: 480px) {\n  .modal-overlay {\n    padding: 12px;\n  }\n  .signup-popup {\n    max-width: 100%;\n    max-height: 92vh;\n    padding: 25px 20px;\n    border-radius: 16px;\n  }\n  .signup-popup h2 {\n    font-size: 22px;\n  }\n}\n.forgot-description {\n  margin-bottom: 18px;\n  color: #666;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.back-login {\n  width: 100%;\n  margin-top: 12px;\n  padding: 10px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: #333;\n}\n.otp-section {\n  margin-top: 20px;\n  width: 100%;\n}\n.otp-section p {\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n.otp-boxes {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  margin-bottom: 20px;\n}\n.otp-input {\n  flex: 1;\n  min-width: 0;\n  max-width: 48px;\n  height: 48px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n  border: 1px solid #d5d9e2;\n  border-radius: 10px;\n  outline: none;\n  box-sizing: border-box;\n}\n.otp-input:focus {\n  border-color: #ffcc32;\n  box-shadow: 0 0 0 2px #ffcc3240;\n}\n@media (min-width: 993px) {\n  .left .photo-slider {\n    position: absolute !important;\n    left: 0 !important;\n    bottom: 0 !important;\n    width: 100% !important;\n    height: 60% !important;\n    overflow: hidden !important;\n    z-index: 2 !important;\n  }\n  .left .photo-slider img {\n    width: 100% !important;\n    height: 100% !important;\n    object-fit: cover !important;\n    object-position: center bottom !important;\n  }\n  .left .yellow-curve {\n    position: absolute !important;\n    left: -5% !important;\n    bottom: -45px !important;\n    width: 110% !important;\n    height: 170px !important;\n    z-index: 3 !important;\n  }\n}\n@media (max-width: 992px) {\n  .left .photo-slider {\n    position: relative !important;\n    width: 100% !important;\n    max-width: 440px !important;\n    height: 220px !important;\n    margin: 16px auto 0 !important;\n    overflow: hidden !important;\n    border-radius: 14px;\n    z-index: 2 !important;\n  }\n  .left .photo-slider img {\n    width: 100% !important;\n    height: 100% !important;\n    object-fit: contain !important;\n    object-position: center !important;\n  }\n  .left .yellow-curve {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/login/login.component.ts", lineNumber: 18 });
})();

// src/app/layout/sidebar/sidebar.ts
var _c0 = () => ({ exact: true });
function Sidebar_a_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275listener("click", function Sidebar_a_11_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r3.route)("routerLinkActiveOptions", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.name, " ");
  }
}
var Sidebar = class _Sidebar {
  constructor(router) {
    this.router = router;
  }
  router;
  menuItems = [
    { name: "Dashboard", route: "/dashboard" },
    { name: "Products", route: "/products" },
    { name: "LCC", route: "/lcc" },
    { name: "Distribution", route: "/distribution" },
    // { name: 'Members', route: '/members' },
    { name: "Reports", route: "/reports" }
  ];
  isMobileMenuOpen = false;
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  goToDashboard(event) {
    if (event) {
      event.preventDefault();
    }
    this.router.navigate(["/dashboard"]);
  }
  onLogout() {
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function Sidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Sidebar)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Sidebar, selectors: [["app-sidebar"]], decls: 21, vars: 10, consts: [[1, "sidebar", "top-navbar"], [1, "nav-container"], ["routerLink", "/dashboard", "title", "Go to Dashboard", 1, "brand", 3, "click"], [1, "brand-logo"], ["src", "images/LCC.jpeg", "alt", "LCC Warehouse Logo"], [1, "brand-text"], [1, "nav-links"], ["routerLinkActive", "active", "class", "nav-link", 3, "routerLink", "routerLinkActiveOptions", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "nav-link", "logout-btn", "mobile-logout", 3, "click"], [1, "nav-actions"], ["type", "button", 1, "nav-link", "logout-btn", "desktop-logout", 3, "click"], ["type", "button", "aria-label", "Toggle navigation menu", 1, "mobile-toggle-btn", 3, "click"], [1, "bar", "bar-1"], [1, "bar", "bar-2"], [1, "bar", "bar-3"], ["routerLinkActive", "active", 1, "nav-link", 3, "click", "routerLink", "routerLinkActiveOptions"]], template: function Sidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275listener("click", function Sidebar_Template_a_click_2_listener($event) {
        ctx.goToDashboard($event);
        return ctx.closeMobileMenu();
      });
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "h2");
      \u0275\u0275text(7, "1:1:1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "WAREHOUSE");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "nav", 6);
      \u0275\u0275template(11, Sidebar_a_11_Template, 2, 4, "a", 7);
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275listener("click", function Sidebar_Template_button_click_12_listener() {
        return ctx.onLogout();
      });
      \u0275\u0275text(13, " Logout ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9)(15, "button", 10);
      \u0275\u0275listener("click", function Sidebar_Template_button_click_15_listener() {
        return ctx.onLogout();
      });
      \u0275\u0275text(16, " Logout ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 11);
      \u0275\u0275listener("click", function Sidebar_Template_button_click_17_listener() {
        return ctx.toggleMobileMenu();
      });
      \u0275\u0275element(18, "span", 12)(19, "span", 13)(20, "span", 14);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275classProp("mobile-open", ctx.isMobileMenuOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.menuItems);
      \u0275\u0275advance(6);
      \u0275\u0275attribute("aria-expanded", ctx.isMobileMenuOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("bar-1-open", ctx.isMobileMenuOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("bar-2-open", ctx.isMobileMenuOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("bar-3-open", ctx.isMobileMenuOpen);
    }
  }, dependencies: [CommonModule, NgForOf, RouterLink, RouterLinkActive], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.sidebar.top-navbar[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 120px;\n  background-color: #F9E662;\n  border-bottom: 2px solid #ecd548;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  position: sticky;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  padding: 22px 36px;\n}\n.nav-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1440px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 32px;\n  box-sizing: border-box;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  flex-shrink: 0;\n  text-decoration: none;\n  transition: transform 0.18s ease, opacity 0.18s ease;\n}\n.brand[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  opacity: 0.92;\n}\n.brand[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 66px;\n  height: 66px;\n  border-radius: 50%;\n  background: #e30000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);\n  border: 2px solid #ffffff;\n}\n.brand-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.brand-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 27px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  color: #0b3b60;\n  line-height: 1.1;\n}\n.brand-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 3px 0 0;\n  font-size: 15px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  color: #2c5282;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 34px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: #0b3b60;\n  font-size: 18px;\n  font-weight: 600;\n  text-decoration: none;\n  background: transparent;\n  border: none;\n  padding: 6px 4px;\n  cursor: pointer;\n  letter-spacing: 0.2px;\n  position: relative;\n  transition: color 0.2s ease, transform 0.15s ease;\n  font-family: inherit;\n  display: inline-flex;\n  align-items: center;\n  white-space: nowrap;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: #001f3f;\n  transform: translateY(-1px);\n}\n.nav-link.active[_ngcontent-%COMP%] {\n  color: #001a35;\n  font-weight: 750;\n}\n.nav-link.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: #0b3b60;\n  border-radius: 2px;\n}\n.nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  color: #0b3b60;\n  font-size: 17px;\n  font-weight: 600;\n  padding: 8px 18px;\n  border-radius: 22px;\n  border: 1.5px solid rgba(11, 59, 96, 0.4);\n  background: rgba(255, 255, 255, 0.25);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: #0b3b60;\n  color: #ffffff;\n  border-color: #0b3b60;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(11, 59, 96, 0.2);\n}\n.mobile-logout[_ngcontent-%COMP%] {\n  display: none;\n}\n.mobile-toggle-btn[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  width: 42px;\n  height: 42px;\n  background: rgba(255, 255, 255, 0.45);\n  border: 1.5px solid rgba(11, 59, 96, 0.35);\n  border-radius: 10px;\n  cursor: pointer;\n  padding: 0;\n  transition: all 0.2s ease;\n}\n.mobile-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.75);\n}\n.mobile-toggle-btn[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  display: block;\n  width: 22px;\n  height: 2.5px;\n  background-color: #0b3b60;\n  border-radius: 2px;\n  transition: all 0.25s ease;\n}\n.bar-1-open[_ngcontent-%COMP%] {\n  transform: translateY(7.5px) rotate(45deg);\n}\n.bar-2-open[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.bar-3-open[_ngcontent-%COMP%] {\n  transform: translateY(-7.5px) rotate(-45deg);\n}\n@media (max-width: 1200px) {\n  .nav-links[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  .nav-link[_ngcontent-%COMP%] {\n    font-size: 15.5px;\n  }\n}\n@media (max-width: 1024px) {\n  .sidebar.top-navbar[_ngcontent-%COMP%] {\n    min-height: 86px;\n    position: sticky;\n    top: 0;\n    padding: 14px 24px;\n  }\n  .nav-container[_ngcontent-%COMP%] {\n    position: relative;\n  }\n  .desktop-logout[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-toggle-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .mobile-logout[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin-top: 10px;\n    background: rgba(220, 38, 38, 0.12);\n    color: #dc2626;\n    border-color: rgba(220, 38, 38, 0.3);\n  }\n  .mobile-logout[_ngcontent-%COMP%]:hover {\n    background: #dc2626;\n    color: #ffffff;\n  }\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n    position: absolute;\n    top: calc(100% + 12px);\n    left: -24px;\n    right: -24px;\n    background: #F9E662;\n    border-top: 1.5px solid rgba(0, 0, 0, 0.06);\n    border-bottom: 2px solid rgba(0, 0, 0, 0.08);\n    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.14);\n    flex-direction: column;\n    align-items: stretch;\n    padding: 18px 24px 22px;\n    gap: 12px;\n    z-index: 1001;\n  }\n  .nav-links.mobile-open[_ngcontent-%COMP%] {\n    display: flex;\n    animation: _ngcontent-%COMP%_slideDown 0.25s ease forwards;\n  }\n  .nav-link[_ngcontent-%COMP%] {\n    font-size: 17px;\n    padding: 10px 14px;\n    border-radius: 8px;\n    width: 100%;\n    min-height: 44px;\n    box-sizing: border-box;\n  }\n  .nav-link[_ngcontent-%COMP%]:hover {\n    background: rgba(255, 255, 255, 0.4);\n  }\n  .nav-link.active[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.6);\n  }\n  .nav-link.active[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n  .sidebar.top-navbar[_ngcontent-%COMP%] {\n    min-height: 72px;\n    padding: 12px 16px;\n  }\n  .brand[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .brand-logo[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n  }\n  .brand-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .brand-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 11.5px;\n    letter-spacing: 1.2px;\n  }\n  .mobile-toggle-btn[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n  }\n  .nav-links[_ngcontent-%COMP%] {\n    left: -16px;\n    right: -16px;\n    padding: 16px 18px 20px;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=sidebar.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Sidebar, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], template: '<header class="sidebar top-navbar">\r\n  <div class="nav-container">\r\n    <a\r\n      class="brand"\r\n      routerLink="/dashboard"\r\n      (click)="goToDashboard($event); closeMobileMenu()"\r\n      title="Go to Dashboard"\r\n    >\r\n      <div class="brand-logo">\r\n        <img src="images/LCC.jpeg" alt="LCC Warehouse Logo" />\r\n      </div>\r\n      <div class="brand-text">\r\n        <h2>1:1:1</h2>\r\n        <p>WAREHOUSE</p>\r\n        <!-- <p>The Joy of giving</p> -->\r\n      </div>\r\n    </a>\r\n\r\n    <!-- Navigation links (Desktop & Mobile Dropdown) -->\r\n    <nav class="nav-links" [class.mobile-open]="isMobileMenuOpen">\r\n      <a\r\n        *ngFor="let item of menuItems"\r\n        [routerLink]="item.route"\r\n        routerLinkActive="active"\r\n        [routerLinkActiveOptions]="{ exact: true }"\r\n        class="nav-link"\r\n        (click)="closeMobileMenu()"\r\n      >\r\n        {{ item.name }}\r\n      </a>\r\n      <button class="nav-link logout-btn mobile-logout" type="button" (click)="onLogout()">\r\n        Logout\r\n      </button>\r\n    </nav>\r\n\r\n    <div class="nav-actions">\r\n      <button class="nav-link logout-btn desktop-logout" type="button" (click)="onLogout()">\r\n        Logout\r\n      </button>\r\n\r\n      <!-- Mobile Hamburger Toggle -->\r\n      <button\r\n        type="button"\r\n        class="mobile-toggle-btn"\r\n        (click)="toggleMobileMenu()"\r\n        [attr.aria-expanded]="isMobileMenuOpen"\r\n        aria-label="Toggle navigation menu"\r\n      >\r\n        <span class="bar bar-1" [class.bar-1-open]="isMobileMenuOpen"></span>\r\n        <span class="bar bar-2" [class.bar-2-open]="isMobileMenuOpen"></span>\r\n        <span class="bar bar-3" [class.bar-3-open]="isMobileMenuOpen"></span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</header>\r\n', styles: ['/* src/app/layout/sidebar/sidebar.css */\n:host {\n  display: block;\n  width: 100%;\n}\n.sidebar.top-navbar {\n  width: 100%;\n  min-height: 120px;\n  background-color: #F9E662;\n  border-bottom: 2px solid #ecd548;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  position: sticky;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  padding: 22px 36px;\n}\n.nav-container {\n  width: 100%;\n  max-width: 1440px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 32px;\n  box-sizing: border-box;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  flex-shrink: 0;\n  text-decoration: none;\n  transition: transform 0.18s ease, opacity 0.18s ease;\n}\n.brand:hover {\n  transform: translateY(-1px);\n  opacity: 0.92;\n}\n.brand:active {\n  transform: translateY(0);\n}\n.brand-logo {\n  width: 66px;\n  height: 66px;\n  border-radius: 50%;\n  background: #e30000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);\n  border: 2px solid #ffffff;\n}\n.brand-logo img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.brand-text h2 {\n  margin: 0;\n  font-size: 27px;\n  font-weight: 800;\n  letter-spacing: 0.5px;\n  color: #0b3b60;\n  line-height: 1.1;\n}\n.brand-text p {\n  margin: 3px 0 0;\n  font-size: 15px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  color: #2c5282;\n}\n.nav-links {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 34px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nav-link {\n  color: #0b3b60;\n  font-size: 18px;\n  font-weight: 600;\n  text-decoration: none;\n  background: transparent;\n  border: none;\n  padding: 6px 4px;\n  cursor: pointer;\n  letter-spacing: 0.2px;\n  position: relative;\n  transition: color 0.2s ease, transform 0.15s ease;\n  font-family: inherit;\n  display: inline-flex;\n  align-items: center;\n  white-space: nowrap;\n}\n.nav-link:hover {\n  color: #001f3f;\n  transform: translateY(-1px);\n}\n.nav-link.active {\n  color: #001a35;\n  font-weight: 750;\n}\n.nav-link.active::after {\n  content: "";\n  position: absolute;\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: #0b3b60;\n  border-radius: 2px;\n}\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.logout-btn {\n  color: #0b3b60;\n  font-size: 17px;\n  font-weight: 600;\n  padding: 8px 18px;\n  border-radius: 22px;\n  border: 1.5px solid rgba(11, 59, 96, 0.4);\n  background: rgba(255, 255, 255, 0.25);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.logout-btn:hover {\n  background: #0b3b60;\n  color: #ffffff;\n  border-color: #0b3b60;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(11, 59, 96, 0.2);\n}\n.mobile-logout {\n  display: none;\n}\n.mobile-toggle-btn {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  width: 42px;\n  height: 42px;\n  background: rgba(255, 255, 255, 0.45);\n  border: 1.5px solid rgba(11, 59, 96, 0.35);\n  border-radius: 10px;\n  cursor: pointer;\n  padding: 0;\n  transition: all 0.2s ease;\n}\n.mobile-toggle-btn:hover {\n  background: rgba(255, 255, 255, 0.75);\n}\n.mobile-toggle-btn .bar {\n  display: block;\n  width: 22px;\n  height: 2.5px;\n  background-color: #0b3b60;\n  border-radius: 2px;\n  transition: all 0.25s ease;\n}\n.bar-1-open {\n  transform: translateY(7.5px) rotate(45deg);\n}\n.bar-2-open {\n  opacity: 0;\n}\n.bar-3-open {\n  transform: translateY(-7.5px) rotate(-45deg);\n}\n@media (max-width: 1200px) {\n  .nav-links {\n    gap: 20px;\n  }\n  .nav-link {\n    font-size: 15.5px;\n  }\n}\n@media (max-width: 1024px) {\n  .sidebar.top-navbar {\n    min-height: 86px;\n    position: sticky;\n    top: 0;\n    padding: 14px 24px;\n  }\n  .nav-container {\n    position: relative;\n  }\n  .desktop-logout {\n    display: none;\n  }\n  .mobile-toggle-btn {\n    display: flex;\n  }\n  .mobile-logout {\n    display: block;\n    width: 100%;\n    text-align: center;\n    margin-top: 10px;\n    background: rgba(220, 38, 38, 0.12);\n    color: #dc2626;\n    border-color: rgba(220, 38, 38, 0.3);\n  }\n  .mobile-logout:hover {\n    background: #dc2626;\n    color: #ffffff;\n  }\n  .nav-links {\n    display: none;\n    position: absolute;\n    top: calc(100% + 12px);\n    left: -24px;\n    right: -24px;\n    background: #F9E662;\n    border-top: 1.5px solid rgba(0, 0, 0, 0.06);\n    border-bottom: 2px solid rgba(0, 0, 0, 0.08);\n    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.14);\n    flex-direction: column;\n    align-items: stretch;\n    padding: 18px 24px 22px;\n    gap: 12px;\n    z-index: 1001;\n  }\n  .nav-links.mobile-open {\n    display: flex;\n    animation: slideDown 0.25s ease forwards;\n  }\n  .nav-link {\n    font-size: 17px;\n    padding: 10px 14px;\n    border-radius: 8px;\n    width: 100%;\n    min-height: 44px;\n    box-sizing: border-box;\n  }\n  .nav-link:hover {\n    background: rgba(255, 255, 255, 0.4);\n  }\n  .nav-link.active {\n    background: rgba(255, 255, 255, 0.6);\n  }\n  .nav-link.active::after {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n  .sidebar.top-navbar {\n    min-height: 72px;\n    padding: 12px 16px;\n  }\n  .brand {\n    gap: 12px;\n  }\n  .brand-logo {\n    width: 48px;\n    height: 48px;\n  }\n  .brand-text h2 {\n    font-size: 20px;\n  }\n  .brand-text p {\n    font-size: 11.5px;\n    letter-spacing: 1.2px;\n  }\n  .mobile-toggle-btn {\n    width: 38px;\n    height: 38px;\n  }\n  .nav-links {\n    left: -16px;\n    right: -16px;\n    padding: 16px 18px 20px;\n  }\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=sidebar.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Sidebar, { className: "Sidebar", filePath: "src/app/layout/sidebar/sidebar.ts", lineNumber: 12 });
})();

// src/app/layout/main-layout/main-layout.ts
var MainLayout = class _MainLayout {
  static \u0275fac = function MainLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MainLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainLayout, selectors: [["app-main-layout"]], decls: 4, vars: 0, consts: [[1, "app-layout"], [1, "page-content"]], template: function MainLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "main", 1);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [Sidebar, RouterOutlet], styles: ["\n.app-layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n}\n.page-content[_ngcontent-%COMP%] {\n  margin-left: 0;\n  padding: 0;\n  min-height: 80vh;\n  min-width: 0;\n  width: 100%;\n  background: #ffffff;\n  flex: 1;\n}\n@media (max-width: 600px) {\n  .page-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=main-layout.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MainLayout, [{
    type: Component,
    args: [{ selector: "app-main-layout", standalone: true, imports: [Sidebar, RouterOutlet], template: '<div class="app-layout">\n  <app-sidebar></app-sidebar>\n\n  <main class="page-content">\n    <router-outlet></router-outlet>\n  </main>\n</div>', styles: ["/* src/app/layout/main-layout/main-layout.css */\n.app-layout {\n  min-height: 100vh;\n  width: 100%;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n}\n.page-content {\n  margin-left: 0;\n  padding: 0;\n  min-height: 80vh;\n  min-width: 0;\n  width: 100%;\n  background: #ffffff;\n  flex: 1;\n}\n@media (max-width: 600px) {\n  .page-content {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=main-layout.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainLayout, { className: "MainLayout", filePath: "src/app/layout/main-layout/main-layout.ts", lineNumber: 12 });
})();

// src/app/app.routes.ts
var routes = [
  // 1. Authentication routes (without sidebar)
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  // 2. Application routes (with sidebar)
  {
    path: "",
    component: MainLayout,
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./chunk-QPWOCQJ7.js").then((m) => m.Dashboard)
      },
      {
        path: "products",
        loadComponent: () => import("./chunk-5PVHKU7C.js").then((m) => m.Products)
      },
      {
        path: "lcc",
        loadComponent: () => import("./chunk-AUOK72OC.js").then((m) => m.LccComponent)
      },
      {
        path: "reports",
        loadComponent: () => import("./chunk-QR5QZ4D4.js").then((m) => m.ReportsComponent)
      },
      {
        path: "distribution",
        loadComponent: () => import("./chunk-KOCPJZBB.js").then((m) => m.Distribution)
      },
      {
        path: "members",
        loadComponent: () => import("./chunk-L6KBFMEW.js").then((m) => m.MembersComponent)
      }
    ]
  },
  // 3. Fallback route (unknown URLs)
  { path: "**", redirectTo: "login" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet], template: "<router-outlet></router-outlet>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# debugId=8a15469a-a293-5cea-9c2e-66eb8bbd8ebe
//# sourceMappingURL=main.js.map
