import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-STUIIXEF.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
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

// src/app/pages/members/members.ts
function MembersComponent_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "div", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 22)(12, "div", 23)(13, "span", 24);
    \u0275\u0275text(14, "Role:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 25);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 23)(18, "span", 24);
    \u0275\u0275text(19, "Department:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 26);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 23)(23, "span", 24);
    \u0275\u0275text(24, "Contact:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 26);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 23)(28, "span", 24);
    \u0275\u0275text(29, "Joined:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 26);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", m_r2.name.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r2.id);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", m_r2.status === "Active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r2.status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(m_r2.role);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(m_r2.department);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(m_r2.phone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(m_r2.joinedDate);
  }
}
function MembersComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, MembersComponent_div_40_div_1_Template, 32, 10, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredMembers);
  }
}
function MembersComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "h3");
    \u0275\u0275text(2, "No staff members found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Try searching with another name or reset the role filter.");
    \u0275\u0275elementEnd()();
  }
}
var MembersComponent = class _MembersComponent {
  searchText = "";
  roleFilter = "All";
  members = [
    {
      id: "MBR-001",
      name: "M. Senthil Nathan",
      role: "Warehouse Lead",
      department: "Main Inventory",
      phone: "+91 98765 43210",
      status: "Active",
      joinedDate: "12-01-2024"
    },
    {
      id: "MBR-002",
      name: "R. Vigneshwar",
      role: "Stock Incharge",
      department: "LCC Operations",
      phone: "+91 98765 43211",
      status: "Active",
      joinedDate: "15-03-2024"
    },
    {
      id: "MBR-003",
      name: "K. Anand Kumar",
      role: "Dispatch Supervisor",
      department: "Logistics",
      phone: "+91 98765 43212",
      status: "Active",
      joinedDate: "01-06-2024"
    },
    {
      id: "MBR-004",
      name: "P. Deepa",
      role: "Auditor & Data Analyst",
      department: "Reports & Audits",
      phone: "+91 98765 43213",
      status: "On-Leave",
      joinedDate: "20-08-2024"
    },
    {
      id: "MBR-005",
      name: "S. Rajesh",
      role: "Warehouse Operator",
      department: "Loading & Storing",
      phone: "+91 98765 43214",
      status: "Active",
      joinedDate: "10-11-2024"
    }
  ];
  ngOnInit() {
  }
  get filteredMembers() {
    return this.members.filter((m) => {
      const matchesSearch = !this.searchText || m.name.toLowerCase().includes(this.searchText.toLowerCase()) || m.role.toLowerCase().includes(this.searchText.toLowerCase()) || m.department.toLowerCase().includes(this.searchText.toLowerCase()) || m.id.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesRole = this.roleFilter === "All" || m.role.toLowerCase().includes(this.roleFilter.toLowerCase());
      return matchesSearch && matchesRole;
    });
  }
  get totalMembers() {
    return this.members.length;
  }
  get activeMembersCount() {
    return this.members.filter((m) => m.status === "Active").length;
  }
  static \u0275fac = function MembersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MembersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MembersComponent, selectors: [["app-members"]], decls: 43, vars: 14, consts: [["emptyState", ""], [1, "members-page"], [1, "page-header"], [1, "header-text"], [1, "members-register"], [1, "stats-summary"], [1, "summary-card"], [1, "summary-label"], [1, "text-active"], [1, "toolbar-section"], ["type", "search", "placeholder", "Search by Member Name, Role, ID, or Department...", "aria-label", "Search members", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "filter-pills"], ["type", "button", 1, "pill-btn", 3, "click"], ["class", "members-grid", 4, "ngIf", "ngIfElse"], [1, "members-grid"], ["class", "member-card", 4, "ngFor", "ngForOf"], [1, "member-card"], [1, "card-header"], [1, "avatar-circle"], [1, "member-title-info"], [1, "member-id"], [1, "status-indicator"], [1, "card-body"], [1, "info-row"], [1, "info-label"], [1, "info-val", "font-bold"], [1, "info-val"], [1, "empty-state"]], template: function MembersComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "div", 3)(3, "h1");
      \u0275\u0275text(4, "Members");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Warehouse personnel, shift supervisors, operators, and logistics teams.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "section", 4)(8, "div", 5)(9, "div", 6)(10, "span", 7);
      \u0275\u0275text(11, "Total Registered Staff");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "h2");
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 6)(15, "span", 7);
      \u0275\u0275text(16, "Active On-Duty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "h2", 8);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 6)(20, "span", 7);
      \u0275\u0275text(21, "Warehouse Leads");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "h2");
      \u0275\u0275text(23, "2");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 6)(25, "span", 7);
      \u0275\u0275text(26, "Operations & Dispatch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "h2");
      \u0275\u0275text(28, "3");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 9)(30, "input", 10);
      \u0275\u0275controlCreate();
      \u0275\u0275twoWayListener("ngModelChange", function MembersComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 11)(32, "button", 12);
      \u0275\u0275listener("click", function MembersComponent_Template_button_click_32_listener() {
        return ctx.roleFilter = "All";
      });
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 12);
      \u0275\u0275listener("click", function MembersComponent_Template_button_click_34_listener() {
        return ctx.roleFilter = "Lead";
      });
      \u0275\u0275text(35, " Leads ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 12);
      \u0275\u0275listener("click", function MembersComponent_Template_button_click_36_listener() {
        return ctx.roleFilter = "Supervisor";
      });
      \u0275\u0275text(37, " Supervisors ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 12);
      \u0275\u0275listener("click", function MembersComponent_Template_button_click_38_listener() {
        return ctx.roleFilter = "Operator";
      });
      \u0275\u0275text(39, " Operators ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(40, MembersComponent_div_40_Template, 2, 1, "div", 13)(41, MembersComponent_ng_template_41_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const emptyState_r4 = \u0275\u0275reference(42);
      \u0275\u0275advance(13);
      \u0275\u0275textInterpolate(ctx.totalMembers);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.activeMembersCount);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.roleFilter === "All");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" All (", ctx.members.length, ") ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.roleFilter === "Lead");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.roleFilter === "Supervisor");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.roleFilter === "Operator");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.filteredMembers.length > 0)("ngIfElse", emptyState_r4);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  box-sizing: border-box;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-family: "Roboto", sans-serif;\n}\n.members-page[_ngcontent-%COMP%] {\n  min-height: 80vh;\n  min-width: 0;\n  padding: 36px 36px 48px;\n  background: #ffffff;\n  color: #1e293b;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  color: #1e293b;\n  font-size: clamp(26px, 3vw, 38px);\n  font-weight: 750;\n}\n.header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.members-register[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 28px;\n  border: 1px solid #eeece5;\n  border-radius: 20px;\n  background: #ffffff;\n}\n.stats-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 18px;\n  margin-bottom: 28px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 20px;\n  border: 1px solid #f2e99d;\n  border-radius: 14px;\n  background: #ffffff;\n}\n.summary-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3.5px;\n  background: #F9E662;\n}\n.summary-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #64748b;\n  font-size: 13px;\n  font-weight: 600;\n}\n.summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1e293b;\n  font-size: 28px;\n  font-weight: 750;\n}\n.text-active[_ngcontent-%COMP%] {\n  color: #16a34a !important;\n}\n.toolbar-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.search-input[_ngcontent-%COMP%] {\n  display: block;\n  width: min(100%, 420px);\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #1e293b;\n  font-size: 14px;\n  outline: none;\n  transition: all 0.2s ease;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #ebd74d;\n  box-shadow: 0 0 0 3px rgba(249, 230, 98, 0.25);\n}\n.filter-pills[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.pill-btn[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.pill-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #1e293b;\n}\n.pill-btn.active[_ngcontent-%COMP%] {\n  background: #F9E662;\n  border-color: #ebd74d;\n  color: #1e293b;\n  font-weight: 700;\n}\n.members-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n}\n.member-card[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 20px;\n  background: #ffffff;\n  transition: all 0.2s ease;\n  position: relative;\n  overflow: hidden;\n}\n.member-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: #F9E662;\n}\n.member-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: #F9E662;\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background: #F9E662;\n  color: #0b3b60;\n  display: grid;\n  place-items: center;\n  font-size: 18px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.member-title-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.member-title-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.member-id[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  font-weight: 500;\n}\n.status-indicator[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 12px;\n  background: #fee2e2;\n  color: #dc2626;\n}\n.status-indicator.active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.card-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 14px;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.info-label[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.info-val[_ngcontent-%COMP%] {\n  color: #1e293b;\n  font-weight: 500;\n  text-align: right;\n}\n.info-val.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #1e293b;\n  font-size: 18px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 14px;\n}\n@media (max-width: 1100px) {\n  .stats-summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .members-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .members-page[_ngcontent-%COMP%] {\n    padding: 20px 16px 36px;\n  }\n  .members-register[_ngcontent-%COMP%] {\n    padding: 16px;\n    border-radius: 14px;\n  }\n  .stats-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .members-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .toolbar-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .search-input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 540px) {\n  .members-page[_ngcontent-%COMP%] {\n    padding: 14px 12px 28px;\n  }\n  .header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .members-register[_ngcontent-%COMP%] {\n    padding: 14px 12px;\n  }\n  .summary-card[_ngcontent-%COMP%] {\n    padding: 16px 14px;\n  }\n  .summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .filter-pills[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    padding-bottom: 4px;\n    -webkit-overflow-scrolling: touch;\n    width: 100%;\n  }\n  .pill-btn[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    white-space: nowrap;\n    font-size: 12px;\n    padding: 7px 12px;\n  }\n}\n/*# sourceMappingURL=members.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MembersComponent, [{
    type: Component,
    args: [{ selector: "app-members", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="members-page">
  <!-- Page Header -->
  <header class="page-header">
    <div class="header-text">
      <h1>Members</h1>
      <p>Warehouse personnel, shift supervisors, operators, and logistics teams.</p>
    </div>
  </header>

  <!-- Members Register -->
  <section class="members-register">
    <!-- Summary Cards -->
    <div class="stats-summary">
      <div class="summary-card">
        <span class="summary-label">Total Registered Staff</span>
        <h2>{{ totalMembers }}</h2>
      </div>

      <div class="summary-card">
        <span class="summary-label">Active On-Duty</span>
        <h2 class="text-active">{{ activeMembersCount }}</h2>
      </div>

      <div class="summary-card">
        <span class="summary-label">Warehouse Leads</span>
        <h2>2</h2>
      </div>

      <div class="summary-card">
        <span class="summary-label">Operations & Dispatch</span>
        <h2>3</h2>
      </div>
    </div>

    <!-- Toolbar: Search & Filters -->
    <div class="toolbar-section">
      <input
        type="search"
        class="search-input"
        placeholder="Search by Member Name, Role, ID, or Department..."
        [(ngModel)]="searchText"
        aria-label="Search members"
      />

      <div class="filter-pills">
        <button
          type="button"
          class="pill-btn"
          [class.active]="roleFilter === 'All'"
          (click)="roleFilter = 'All'"
        >
          All ({{ members.length }})
        </button>
        <button
          type="button"
          class="pill-btn"
          [class.active]="roleFilter === 'Lead'"
          (click)="roleFilter = 'Lead'"
        >
          Leads
        </button>
        <button
          type="button"
          class="pill-btn"
          [class.active]="roleFilter === 'Supervisor'"
          (click)="roleFilter = 'Supervisor'"
        >
          Supervisors
        </button>
        <button
          type="button"
          class="pill-btn"
          [class.active]="roleFilter === 'Operator'"
          (click)="roleFilter = 'Operator'"
        >
          Operators
        </button>
      </div>
    </div>

    <!-- Members Grid -->
    <div class="members-grid" *ngIf="filteredMembers.length > 0; else emptyState">
      <div class="member-card" *ngFor="let m of filteredMembers">
        <div class="card-header">
          <div class="avatar-circle">
            {{ m.name.charAt(0) }}
          </div>
          <div class="member-title-info">
            <h3>{{ m.name }}</h3>
            <span class="member-id">{{ m.id }}</span>
          </div>
          <span class="status-indicator" [class.active]="m.status === 'Active'">
            {{ m.status }}
          </span>
        </div>

        <div class="card-body">
          <div class="info-row">
            <span class="info-label">Role:</span>
            <span class="info-val font-bold">{{ m.role }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Department:</span>
            <span class="info-val">{{ m.department }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Contact:</span>
            <span class="info-val">{{ m.phone }}</span>
          </div>
          <div class="info-row">
            <span class="info-label">Joined:</span>
            <span class="info-val">{{ m.joinedDate }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <ng-template #emptyState>
      <div class="empty-state">
        <h3>No staff members found</h3>
        <p>Try searching with another name or reset the role filter.</p>
      </div>
    </ng-template>
  </section>
</div>
`, styles: ['/* src/app/pages/members/members.css */\n:host {\n  display: block;\n  width: 100%;\n  min-width: 0;\n  box-sizing: border-box;\n}\n* {\n  box-sizing: border-box;\n  font-family: "Roboto", sans-serif;\n}\n.members-page {\n  min-height: 80vh;\n  min-width: 0;\n  padding: 36px 36px 48px;\n  background: #ffffff;\n  color: #1e293b;\n}\n.page-header {\n  margin-bottom: 30px;\n}\n.header-text h1 {\n  margin: 0 0 10px;\n  color: #1e293b;\n  font-size: clamp(26px, 3vw, 38px);\n  font-weight: 750;\n}\n.header-text p {\n  margin: 0;\n  color: #64748b;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.members-register {\n  min-width: 0;\n  padding: 28px;\n  border: 1px solid #eeece5;\n  border-radius: 20px;\n  background: #ffffff;\n}\n.stats-summary {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 18px;\n  margin-bottom: 28px;\n}\n.summary-card {\n  position: relative;\n  overflow: hidden;\n  padding: 20px;\n  border: 1px solid #f2e99d;\n  border-radius: 14px;\n  background: #ffffff;\n}\n.summary-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3.5px;\n  background: #F9E662;\n}\n.summary-label {\n  display: block;\n  margin-bottom: 8px;\n  color: #64748b;\n  font-size: 13px;\n  font-weight: 600;\n}\n.summary-card h2 {\n  margin: 0;\n  color: #1e293b;\n  font-size: 28px;\n  font-weight: 750;\n}\n.text-active {\n  color: #16a34a !important;\n}\n.toolbar-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.search-input {\n  display: block;\n  width: min(100%, 420px);\n  padding: 12px 16px;\n  border: 1px solid #cbd5e1;\n  border-radius: 10px;\n  background: #ffffff;\n  color: #1e293b;\n  font-size: 14px;\n  outline: none;\n  transition: all 0.2s ease;\n}\n.search-input:focus {\n  border-color: #ebd74d;\n  box-shadow: 0 0 0 3px rgba(249, 230, 98, 0.25);\n}\n.filter-pills {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.pill-btn {\n  padding: 8px 14px;\n  border-radius: 20px;\n  border: 1px solid #e2e8f0;\n  background: #f8fafc;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.pill-btn:hover {\n  background: #f1f5f9;\n  color: #1e293b;\n}\n.pill-btn.active {\n  background: #F9E662;\n  border-color: #ebd74d;\n  color: #1e293b;\n  font-weight: 700;\n}\n.members-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n}\n.member-card {\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 20px;\n  background: #ffffff;\n  transition: all 0.2s ease;\n  position: relative;\n  overflow: hidden;\n}\n.member-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: #F9E662;\n}\n.member-card:hover {\n  transform: translateY(-3px);\n  border-color: #F9E662;\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n.avatar-circle {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background: #F9E662;\n  color: #0b3b60;\n  display: grid;\n  place-items: center;\n  font-size: 18px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.member-title-info {\n  flex: 1;\n  min-width: 0;\n}\n.member-title-info h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #0f172a;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.member-id {\n  font-size: 12px;\n  color: #64748b;\n  font-weight: 500;\n}\n.status-indicator {\n  font-size: 11.5px;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: 12px;\n  background: #fee2e2;\n  color: #dc2626;\n}\n.status-indicator.active {\n  background: #dcfce7;\n  color: #15803d;\n}\n.card-body {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 14px;\n}\n.info-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.info-label {\n  color: #64748b;\n}\n.info-val {\n  color: #1e293b;\n  font-weight: 500;\n  text-align: right;\n}\n.info-val.font-bold {\n  font-weight: 700;\n  color: #0f172a;\n}\n.empty-state {\n  text-align: center;\n  padding: 48px 24px;\n}\n.empty-state h3 {\n  margin: 0 0 8px;\n  color: #1e293b;\n  font-size: 18px;\n}\n.empty-state p {\n  margin: 0;\n  color: #64748b;\n  font-size: 14px;\n}\n@media (max-width: 1100px) {\n  .stats-summary {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .members-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 768px) {\n  .members-page {\n    padding: 20px 16px 36px;\n  }\n  .members-register {\n    padding: 16px;\n    border-radius: 14px;\n  }\n  .stats-summary {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .members-grid {\n    grid-template-columns: 1fr;\n  }\n  .toolbar-section {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .search-input {\n    width: 100%;\n  }\n}\n@media (max-width: 540px) {\n  .members-page {\n    padding: 14px 12px 28px;\n  }\n  .header-text h1 {\n    font-size: 24px;\n  }\n  .members-register {\n    padding: 14px 12px;\n  }\n  .summary-card {\n    padding: 16px 14px;\n  }\n  .summary-card h2 {\n    font-size: 24px;\n  }\n  .filter-pills {\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    padding-bottom: 4px;\n    -webkit-overflow-scrolling: touch;\n    width: 100%;\n  }\n  .pill-btn {\n    flex-shrink: 0;\n    white-space: nowrap;\n    font-size: 12px;\n    padding: 7px 12px;\n  }\n}\n/*# sourceMappingURL=members.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MembersComponent, { className: "MembersComponent", filePath: "src/app/pages/members/members.ts", lineNumber: 22 });
})();
export {
  MembersComponent
};
//# debugId=e9f11675-7828-517e-a96d-f62f3148c9a5
//# sourceMappingURL=chunk-L6KBFMEW.js.map
