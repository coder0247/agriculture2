(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-account-account-module"],{

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/account/popup/popup.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/account/dashboard/dashboard.component.ts");
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inbox/inbox.component */ "./src/app/account/inbox/inbox.component.ts");
/* harmony import */ var _newad_newad_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newad/newad.component */ "./src/app/account/newad/newad.component.ts");
/* harmony import */ var _activeads_activeads_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activeads/activeads.component */ "./src/app/account/activeads/activeads.component.ts");
/* harmony import */ var _archiveads_archiveads_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./archiveads/archiveads.component */ "./src/app/account/archiveads/archiveads.component.ts");
/* harmony import */ var _sent_sent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sent/sent.component */ "./src/app/account/sent/sent.component.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/account/editprofile/editprofile.component.ts");
/* harmony import */ var _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./quickview/quickview.component */ "./src/app/account/quickview/quickview.component.ts");
/* harmony import */ var _viewmsg_viewmsg_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./viewmsg/viewmsg.component */ "./src/app/account/viewmsg/viewmsg.component.ts");
/* harmony import */ var _sentmsg_sentmsg_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sentmsg/sentmsg.component */ "./src/app/account/sentmsg/sentmsg.component.ts");
/* harmony import */ var _editad_editad_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./editad/editad.component */ "./src/app/account/editad/editad.component.ts");
/* harmony import */ var _editads_editads_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./editads/editads.component */ "./src/app/account/editads/editads.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/account/changepassword/changepassword.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: 'inbox',
        component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_4__["InboxComponent"],
    },
    {
        path: 'newad',
        component: _newad_newad_component__WEBPACK_IMPORTED_MODULE_5__["NewadComponent"]
    },
    {
        path: 'editad',
        component: _editad_editad_component__WEBPACK_IMPORTED_MODULE_13__["EditadComponent"]
    },
    {
        // show list of ads to edit
        path: 'editads',
        component: _editads_editads_component__WEBPACK_IMPORTED_MODULE_14__["EditadsComponent"]
    },
    {
        path: 'activeads',
        component: _activeads_activeads_component__WEBPACK_IMPORTED_MODULE_6__["ActiveadsComponent"]
    },
    {
        path: 'archiveads',
        component: _archiveads_archiveads_component__WEBPACK_IMPORTED_MODULE_7__["ArchiveadsComponent"]
    },
    {
        path: 'sent',
        component: _sent_sent_component__WEBPACK_IMPORTED_MODULE_8__["SentComponent"]
    },
    {
        path: 'profile',
        component: _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_9__["EditprofileComponent"]
    },
    {
        path: 'changepassword',
        component: _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_15__["ChangepasswordComponent"]
    },
    {
        path: 'quickview',
        component: _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_10__["QuickviewComponent"]
    },
    {
        path: 'popup',
        component: _popup_popup_component__WEBPACK_IMPORTED_MODULE_0__["PopupComponent"]
    },
    {
        path: 'view',
        component: _viewmsg_viewmsg_component__WEBPACK_IMPORTED_MODULE_11__["ViewmsgComponent"]
    },
    {
        path: 'viewsent',
        component: _sentmsg_sentmsg_component__WEBPACK_IMPORTED_MODULE_12__["SentmsgComponent"]
    }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/account/dashboard/dashboard.component.ts");
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inbox/inbox.component */ "./src/app/account/inbox/inbox.component.ts");
/* harmony import */ var _newad_newad_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newad/newad.component */ "./src/app/account/newad/newad.component.ts");
/* harmony import */ var _header_common_header_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../header-common/header-common.module */ "./src/app/header-common/header-common.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/account/sidebar/sidebar.component.ts");
/* harmony import */ var _activeads_activeads_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./activeads/activeads.component */ "./src/app/account/activeads/activeads.component.ts");
/* harmony import */ var _archiveads_archiveads_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./archiveads/archiveads.component */ "./src/app/account/archiveads/archiveads.component.ts");
/* harmony import */ var _sent_sent_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sent/sent.component */ "./src/app/account/sent/sent.component.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/account/editprofile/editprofile.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _directive_image_preview_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../directive/image-preview.directive */ "./src/app/directive/image-preview.directive.ts");
/* harmony import */ var _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./quickview/quickview.component */ "./src/app/account/quickview/quickview.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _viewmsg_viewmsg_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./viewmsg/viewmsg.component */ "./src/app/account/viewmsg/viewmsg.component.ts");
/* harmony import */ var _sentmsg_sentmsg_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sentmsg/sentmsg.component */ "./src/app/account/sentmsg/sentmsg.component.ts");
/* harmony import */ var _editad_editad_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./editad/editad.component */ "./src/app/account/editad/editad.component.ts");
/* harmony import */ var _editads_editads_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./editads/editads.component */ "./src/app/account/editads/editads.component.ts");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/account/popup/popup.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/account/changepassword/changepassword.component.ts");
/* harmony import */ var _service_pager_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./../service/pager.service */ "./src/app/service/pager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountRoutingModule"],
                _header_common_header_common_module__WEBPACK_IMPORTED_MODULE_6__["HeaderCommonModule"],
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__["ModalModule"].forRoot()
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_4__["InboxComponent"],
                _newad_newad_component__WEBPACK_IMPORTED_MODULE_5__["NewadComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _activeads_activeads_component__WEBPACK_IMPORTED_MODULE_9__["ActiveadsComponent"],
                _archiveads_archiveads_component__WEBPACK_IMPORTED_MODULE_10__["ArchiveadsComponent"],
                _sent_sent_component__WEBPACK_IMPORTED_MODULE_11__["SentComponent"],
                _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_12__["EditprofileComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_13__["FileSelectDirective"],
                _directive_image_preview_directive__WEBPACK_IMPORTED_MODULE_16__["ImagePreview"],
                _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_17__["QuickviewComponent"],
                _viewmsg_viewmsg_component__WEBPACK_IMPORTED_MODULE_20__["ViewmsgComponent"],
                _sentmsg_sentmsg_component__WEBPACK_IMPORTED_MODULE_21__["SentmsgComponent"],
                _editad_editad_component__WEBPACK_IMPORTED_MODULE_22__["EditadComponent"],
                _editads_editads_component__WEBPACK_IMPORTED_MODULE_23__["EditadsComponent"],
                _popup_popup_component__WEBPACK_IMPORTED_MODULE_24__["PopupComponent"],
                _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_25__["ChangepasswordComponent"]
            ],
            providers: [_service_product_service__WEBPACK_IMPORTED_MODULE_19__["ProductService"], _service_pager_service__WEBPACK_IMPORTED_MODULE_26__["PagerService"]],
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/activeads/activeads.component.css":
/*!***********************************************************!*\
  !*** ./src/app/account/activeads/activeads.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productloading{\r\n    display: inline-block;\r\n    position: relative;\r\n    left: 20px;\r\n    background-color: green;\r\n    padding: 0 10px;\r\n    color: #fff;\r\n}\r\n.shop-page .shop-title {\r\n    display: inline;\r\n}\r\n.product-item .group-button .add-to-cart{\r\n    width: 100%;\r\n}\r\n.product-container {\r\n    border-right: solid 1px #e6e6e6;\r\n    border-bottom: solid 1px #e6e6e6;\r\n  }\r\n.disabled>a:hover {\r\n    color: #777;\r\n    cursor: not-allowed;\r\n    background-color: #fff;\r\n    border-color: #ddd;\r\n}"

/***/ }),

/***/ "./src/app/account/activeads/activeads.component.html":
/*!************************************************************!*\
  !*** ./src/app/account/activeads/activeads.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-common></app-header-common>\r\n<div class=\"main-content shop-page main-content-grid\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"breadcrumbs\">\r\n\t\t\t\t\t<a href=\"user/account\">My Account</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-xs-12 col-sm-7 col-md-8 col-lg-9 content-offset\">\r\n\t\t\t\t\t<div class=\"categories-content\">\r\n\t\t\t\t\t\t<h4 class=\"shop-title\">Active Ads</h4>\r\n\t\t\t\t\t\t<div class=\"productloading\" *ngIf=\"showloading\">Loading...</div>\r\n\t\t\t\t\t\t<div class=\"product-container auto-clear grid-style equal-container box-has-content\" *ngIf=\"pagedItems\">\r\n\t\t\t\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th>#</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Product Image</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Price</th>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <th>Category</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Sub Category</th> -->\r\n\t\t\t\t\t\t\t\t\t\t<th>Added on</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t\t </tr>\r\n\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of pagedItems; let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t<th scope=\"row\">{{i + 1}}</th>\r\n\t\t\t\t\t\t\t\t\t\t<td><img src=\"{{item.pimage}}\" width=\"100\" alt=\"\"></td> \r\n\t\t\t\t\t\t\t\t\t\t<td>{{item.pname}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>$ {{item.saleamount}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <td>{{item.category}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>{{item.subcategory}}</td> -->\r\n\t\t\t\t\t\t\t\t\t\t<td>{{item.created_at | date:'MM-dd-y'}}</td>\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"archivead(item._id)\"><span class=\"text\">Archive</span></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"editproductdetails(item)\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i> Edit</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteproduct(item)\"><i class=\"fa fa-trash-alt\" aria-hidden=\"true\"></i> Delete</button> -->\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"product-item layout1 col-ts-12 col-xs-6 col-sm-6 col-md-4 col-lg-4 no-padding\" *ngFor=\"let item of products\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"product-inner equal-elem\" >\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button href=\"#\" class=\"quickview-button\" (click)=\"quickview(item.pname, item.pimage, item.saleamount,  item.amtunit, item.unitprice)\"><span class=\"icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></span> Quick View</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(item._id)\"  class=\"thumb-link\"><img src=\"assets/images/products/{{item.pimage}}\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"info\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(item._id)\"  class=\"product-name\">{{item.pname}}</a>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>$ {{item.saleamount}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"group-button\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inner\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"add-to-cart\" (click)=\"archivead(item._id)\"><span class=\"text\">Archive</span></a>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"pagination\" *ngIf=\"pagedItems?.length\" >\r\n\t\t\t\t\t\t\t<ul class=\"list-page\" *ngIf=\"pager.pages && pager.pages.length\">\r\n\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-button\" (click)=\"setPage(1)\">First</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-button\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let page of pager.pages\" >\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" [ngClass]=\"{'page-number current':pager.currentPage === page}\" (click)=\"setPage(page)\">{{page}}</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-button\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-button\" (click)=\"setPage(pager.totalPages)\">Last</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t<span  *ngIf=\"pagedItems?.length\" class=\"note\">Showing {{pager.startIndex + 1}}-{{pager.endIndex + 1}}  of {{pager.totalItems}} result</span>\r\n\t\t\t\t\t\t<!-- <div class=\"product-container auto-clear grid-style equal-container box-has-content\" *ngIf=\"products\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"product-item layout1 col-ts-12 col-xs-6 col-sm-6 col-md-4 col-lg-4 no-padding\" *ngFor=\"let item of products\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-inner equal-elem\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button href=\"#\" class=\"quickview-button\" (click)=\"quickview(item.pname, item.pimage, item.saleamount,  item.amtunit, item.unitprice)\"><span class=\"icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></span> Quick View</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(item._id)\"  class=\"thumb-link\"><img src=\"assets/images/products/{{item.pimage}}\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"info\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(item._id)\"  class=\"product-name\">{{item.pname}}</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>$ {{item.saleamount}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"group-button\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inner\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"add-to-cart\" (click)=\"archivead(item._id)\"><span class=\"text\">Archive</span></a>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n      <!-- sidebar -->\r\n      <app-sidebar></app-sidebar>\r\n      <!-- /sidebar-->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/account/activeads/activeads.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/account/activeads/activeads.component.ts ***!
  \**********************************************************/
/*! exports provided: ActiveadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveadsComponent", function() { return ActiveadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quickview/quickview.component */ "./src/app/account/quickview/quickview.component.ts");
/* harmony import */ var _service_pager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pager.service */ "./src/app/service/pager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActiveadsComponent = /** @class */ (function () {
    function ActiveadsComponent(product, route, router, modalService, pageservice) {
        this.product = product;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.pageservice = pageservice;
        this.showloading = false;
        this.notfound = false;
        this.pager = {};
        this.pageSize = 9;
    }
    ActiveadsComponent.prototype.quickview = function (pname, pimage, saleamount, amtunit, unitprice) {
        var initialState = {
            modaldata: [pname, pimage, saleamount, amtunit, unitprice]
        };
        this.bsModalRef = this.modalService.show(_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_4__["QuickviewComponent"], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    ActiveadsComponent.prototype.setPage = function (page) {
        var _this = this;
        // get pager object from service
        this.pager = this.pageservice.getPager(this.products.length, page, this.pageSize);
        setTimeout(function () {
            _this.pagedItems = _this.products.slice(_this.pager.startIndex, _this.pager.endIndex + 1);
        }, 500);
    };
    ActiveadsComponent.prototype.activeads = function () {
        var _this = this;
        var userid = localStorage.getItem('id');
        this.showloading = true;
        this.product.getProductListByUser(userid)
            .subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.showloading = false;
                _this.notfound = false;
                _this.products = res.data.product;
                _this.setPage(1);
            }
            else {
                if (_this.products) {
                    _this.products.length = 0;
                }
                _this.showloading = false;
                _this.notfound = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ActiveadsComponent.prototype.ngOnInit = function () {
        this.activeads();
    };
    ActiveadsComponent.prototype.archivead = function (productid) {
        var _this = this;
        this.showloading = true;
        this.product.setAdArchive(productid)
            .subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.showloading = false;
                //  this.notfound = false;
                _this.activeads();
                //  this.products = res.data.product;
            }
            else {
                // this.router.navigate(['/cropnotfound']);
                // if (this.products) {
                //   this.products.length = 0;
                // }
                _this.showloading = false;
                // this.notfound = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ActiveadsComponent.prototype.showproductdetails = function (itemid) {
        this.router.navigate(['product/detail/' + itemid]);
    };
    ActiveadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activeads',
            template: __webpack_require__(/*! ./activeads.component.html */ "./src/app/account/activeads/activeads.component.html"),
            styles: [__webpack_require__(/*! ./activeads.component.css */ "./src/app/account/activeads/activeads.component.css")]
        }),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _service_pager_service__WEBPACK_IMPORTED_MODULE_5__["PagerService"]])
    ], ActiveadsComponent);
    return ActiveadsComponent;
}());



/***/ }),

/***/ "./src/app/account/archiveads/archiveads.component.css":
/*!*************************************************************!*\
  !*** ./src/app/account/archiveads/archiveads.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productloading{\r\n    display: inline-block;\r\n    position: relative;\r\n    left: 20px;\r\n    background-color: green;\r\n    padding: 0 10px;\r\n    color: #fff;\r\n}\r\n.shop-page .shop-title {\r\n    display: inline;\r\n}\r\n.product-item .group-button .add-to-cart{\r\n    width: 100%;\r\n}\r\n.product-container {\r\n    border-right: solid 1px #e6e6e6;\r\n    border-bottom: solid 1px #e6e6e6;\r\n  }\r\n.disabled>a:hover {\r\n    color: #777;\r\n    cursor: not-allowed;\r\n    background-color: #fff;\r\n    border-color: #ddd;\r\n}"

/***/ }),

/***/ "./src/app/account/archiveads/archiveads.component.html":
/*!**************************************************************!*\
  !*** ./src/app/account/archiveads/archiveads.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-common></app-header-common>\r\n<div class=\"main-content shop-page main-content-grid\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"breadcrumbs\">\r\n\t\t\t\t\t<a href=\"user/account\">My Account</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-xs-12 col-sm-7 col-md-8 col-lg-9 content-offset\">\r\n\t\t\t\t\t<div class=\"categories-content\">\r\n\t\t\t\t\t\t<h4 class=\"shop-title\">Archive Ads</h4>\r\n\t\t\t\t\t\t<div class=\"productloading\" *ngIf=\"showloading\">Loading...</div>\r\n\t\t\t\t\t\t<div class=\"product-container auto-clear grid-style equal-container box-has-content\" *ngIf=\"pagedItems\">\r\n\t\t\t\t\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Product Image</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Price</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <th>Category</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Sub Category</th> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Added on</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t\t\t\t\t </tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of pagedItems; let i = index\">\r\n\t\t\t\t\t\t\t\t\t\t\t<th scope=\"row\">{{i + 1}}</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<td><img src=\"{{item.pimage}}\" width=\"100\" alt=\"\"></td> \r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.pname}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>$ {{item.saleamount}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <td>{{item.category}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.subcategory}}</td> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.created_at | date:'MM-dd-y'}}</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"makeadactive(item._id)\"><span class=\"text\">Activate Ad</span></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"editproductdetails(item)\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i> Edit</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteproduct(item)\"><i class=\"fa fa-trash-alt\" aria-hidden=\"true\"></i> Delete</button> -->\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"product-item layout1 col-ts-12 col-xs-6 col-sm-6 col-md-4 col-lg-4 no-padding\" *ngFor=\"let item of products\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-inner equal-elem\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button href=\"#\" class=\"quickview-button\" (click)=\"quickview(item.pname, item.pimage, item.saleamount,  item.amtunit, item.unitprice)\"><span class=\"icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></span> Quick View</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(item._id)\"  class=\"thumb-link\"><img src=\"assets/images/products/{{item.pimage}}\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"info\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(item._id)\"  class=\"product-name\">{{item.pname}}</a>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>$ {{item.saleamount}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"group-button\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inner\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"add-to-cart\" (click)=\"archivead(item._id)\"><span class=\"text\">Archive</span></a>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"pagination\" *ngIf=\"pagedItems?.length\" >\r\n\t\t\t\t\t\t\t\t<ul class=\"list-page\" *ngIf=\"pager.pages && pager.pages.length\">\r\n\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-button\" (click)=\"setPage(1)\">First</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-button\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let page of pager.pages\" >\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" [ngClass]=\"{'page-number current':pager.currentPage === page}\" (click)=\"setPage(page)\">{{page}}</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-button\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-button\" (click)=\"setPage(pager.totalPages)\">Last</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span  *ngIf=\"pagedItems?.length\" class=\"note\">Showing {{pager.startIndex + 1}}-{{pager.endIndex + 1}}  of {{pager.totalItems}} result</span>\r\n\t\t\t\t\t\t<!-- <div class=\"product-container auto-clear grid-style equal-container box-has-content\" *ngIf=\"products\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"product-item layout1 col-ts-12 col-xs-6 col-sm-6 col-md-4 col-lg-4 no-padding\" *ngFor=\"let item of products\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-inner equal-elem\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button href=\"#\" class=\"quickview-button\" (click)=\"quickview(item.pname, item.pimage, item.saleamount,  item.amtunit, item.unitprice)\"><span class=\"icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></span> Quick View</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(item._id)\"  class=\"thumb-link\"><img src=\"assets/images/products/{{item.pimage}}\" alt=\"\"></a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"info\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(item._id)\"  class=\"product-name\">{{item.pname}}</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>$ {{item.saleamount}}</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"group-button\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inner\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"add-to-cart\" (click)=\"makeadactive(item._id)\"><span class=\"text\">Activate Ad</span></a>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div> -->\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n      <!-- sidebar -->\r\n      <app-sidebar></app-sidebar>\r\n      <!-- /sidebar-->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/account/archiveads/archiveads.component.ts":
/*!************************************************************!*\
  !*** ./src/app/account/archiveads/archiveads.component.ts ***!
  \************************************************************/
/*! exports provided: ArchiveadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveadsComponent", function() { return ArchiveadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quickview/quickview.component */ "./src/app/account/quickview/quickview.component.ts");
/* harmony import */ var _service_pager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pager.service */ "./src/app/service/pager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArchiveadsComponent = /** @class */ (function () {
    function ArchiveadsComponent(product, route, router, modalService, pageservice) {
        this.product = product;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.pageservice = pageservice;
        this.showloading = false;
        this.notfound = false;
        this.pager = {};
        this.pageSize = 9;
    }
    ArchiveadsComponent.prototype.quickview = function (pname, pimage, saleamount, amtunit, unitprice) {
        var initialState = {
            modaldata: [pname, pimage, saleamount, amtunit, unitprice]
        };
        this.bsModalRef = this.modalService.show(_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_4__["QuickviewComponent"], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    ArchiveadsComponent.prototype.setPage = function (page) {
        var _this = this;
        // get pager object from service
        this.pager = this.pageservice.getPager(this.products.length, page, this.pageSize);
        setTimeout(function () {
            _this.pagedItems = _this.products.slice(_this.pager.startIndex, _this.pager.endIndex + 1);
        }, 500);
    };
    ArchiveadsComponent.prototype.archiveproducts = function () {
        var _this = this;
        var userid = localStorage.getItem('id');
        // if (!userid) {
        //   this.router.navigate(['user/signin']);
        //   }
        this.showloading = true; // console.log('params[id]', params['id']);
        this.product.getArchiveProductByUser(userid)
            .subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.showloading = false;
                _this.notfound = false;
                _this.products = res.data.product;
                _this.setPage(1);
            }
            else {
                // this.router.navigate(['/cropnotfound']);
                if (_this.products) {
                    _this.products.length = 0;
                }
                _this.showloading = false;
                _this.notfound = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ArchiveadsComponent.prototype.ngOnInit = function () {
        this.archiveproducts();
    };
    ArchiveadsComponent.prototype.makeadactive = function (productid) {
        var _this = this;
        this.showloading = false;
        this.product.setAdActive(productid)
            .subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.showloading = false;
                //  this.notfound = false;
                _this.archiveproducts();
                //  this.products = res.data.product;
            }
            else {
                // this.router.navigate(['/cropnotfound']);
                // if (this.products) {
                //   this.products.length = 0;
                // }
                _this.showloading = false;
                // this.notfound = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ArchiveadsComponent.prototype.showproductdetails = function (itemid) {
        this.router.navigate(['product/detail/' + itemid]);
    };
    ArchiveadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-archiveads',
            template: __webpack_require__(/*! ./archiveads.component.html */ "./src/app/account/archiveads/archiveads.component.html"),
            styles: [__webpack_require__(/*! ./archiveads.component.css */ "./src/app/account/archiveads/archiveads.component.css")]
        }),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _service_pager_service__WEBPACK_IMPORTED_MODULE_5__["PagerService"]])
    ], ArchiveadsComponent);
    return ArchiveadsComponent;
}());



/***/ }),

/***/ "./src/app/account/changepassword/changepassword.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/account/changepassword/changepassword.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-container {\r\n    border-top: solid 0px #e6e6e6 !important;\r\n    border-left: solid 0px #e6e6e6 !important;\r\n    margin-right: -1px;\r\n}\r\nspan.successmsg {\r\n    padding: 10px;\r\n    left: 5px;\r\n    position: relative;\r\n}"

/***/ }),

/***/ "./src/app/account/changepassword/changepassword.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/account/changepassword/changepassword.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-common></app-header-common>\r\n<div class=\"main-content shop-page main-content-grid\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"breadcrumbs\">\r\n\t\t\t\t\t<a href=\"user/account\">My Account</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 col-md-8 col-lg-9 content-offset\">\r\n\t\t\t\t\t\t\t<div class=\"categories-content\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"login-register-form content-form\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"shop-title\">Change Password</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-container auto-clear grid-style equal-container box-has-content\">\r\n                     \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<form [formGroup]=\"passwordresetForm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"register-form\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-8\">\r\n                                        <h5 class=\"note-title\">All ( * ) fields are required</h5>\r\n                                        <span class=\"label-text\">Email Address <span>*</span></span>\r\n                                        <input type=\"email\" class=\"input-info\" formControlName=\"email\" required>\r\n                                        <div *ngIf=\"passwordresetForm.invalid && formsubmitted\" class=\"error-msg\">\r\n                                            <div class=\"text-danger\" *ngIf=\"!!passwordresetForm.controls['email'].pristine || !!passwordresetForm.controls['email'].errors?.required\">Email is required.</div>\r\n                                            <div class=\"text-danger\" *ngIf=\"passwordresetForm.controls['email'].dirty && !!passwordresetForm.controls['email'].errors?.patternInvalid?.regexp\">Email is invalid.</div>\r\n                                          </div>\r\n                                        <span class=\"label-text\">Current Password<span>*</span></span>\r\n                                        <input type=\"email\" class=\"input-info\" formControlName=\"currentpassword\" required>\r\n                                        <div *ngIf=\"passwordresetForm.invalid && formsubmitted\" class=\"error-msg\">\r\n                                            <div class=\"text-danger\" *ngIf=\"!!passwordresetForm.controls['currentpassword'].pristine || !!passwordresetForm.controls['currentpassword'].errors?.required\">Current password is required.</div>\r\n                                          </div>\r\n                                        <small>We need your current password to confirm your changes</small>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\r\n                                          <span class=\"label-text\">New Password <span>*</span></span>\r\n                                          <input type=\"password\"  formControlName=\"password\"  class=\"input-info\">\r\n                                          <div *ngIf=\"passwordresetForm.invalid && formsubmitted\" class=\"error-msg\">\r\n                                            <div class=\"text-danger\" *ngIf=\"!!passwordresetForm.controls['password'].pristine || !!passwordresetForm.controls['password'].errors?.required\">Password is required.</div>\r\n                                          </div>\r\n                                        </div>\r\n                                        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\r\n                                          <span class=\"label-text\">Confirm Password <span>*</span></span>\r\n                                          <input type=\"password\"  formControlName=\"confirm_password\"  class=\"input-info\">\r\n                                          <div *ngIf=\"passwordresetForm.invalid && formsubmitted\" class=\"error-msg\">\r\n                                            <div class=\"text-danger\" *ngIf=\"!!passwordresetForm.controls['confirm_password'].pristine || !!passwordresetForm.controls['confirm_password'].errors?.required\">Confirm Password is required.</div>\r\n                                          </div>\r\n                                          <div *ngIf=\"passwordresetForm.invalid && formsubmitted && passwordresetForm.controls['confirm_password'].dirty\" class=\"error-msg\">\r\n                                            <div class=\"text-danger\" *ngIf=\"!!passwordresetForm.errors?.mismatch && !!passwordresetForm.controls['confirm_password'].errors?.required === false\">Password & Confirm Password should be same.</div>\r\n                                         </div>\r\n                                        \r\n                                        </div>\r\n                                      \r\n                                        </div>\r\n                                        <div class=\"group-button\">\r\n                                        <button class=\"button submit\"  (click)=\"resetPassword()\">SUBMIT <span class=\"loading\" *ngIf=\"showloading\"><img src=\"assets/images/loader.gif\"></span></button>\r\n                                        <span class=\"successmsg\" [ngClass]=\"{'bg-danger': error, 'bg-success': success}\"  *ngIf=\"!!usermsg\" >{{usermsg}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                  </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  \t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t  </div>\r\n      <!-- sidebar -->\r\n      <app-sidebar></app-sidebar>\r\n      <!-- /sidebar-->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/account/changepassword/changepassword.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/account/changepassword/changepassword.component.ts ***!
  \********************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sharedfn_userfn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sharedfn/userfn */ "./src/app/sharedfn/userfn.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/home.service */ "./src/app/service/home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangepasswordComponent = /** @class */ (function () {
    function ChangepasswordComponent(route, router, authservice, homepage) {
        this.route = route;
        this.router = router;
        this.authservice = authservice;
        this.homepage = homepage;
        this.formsubmitted = false;
        this.showloading = false;
        this.error = false;
        this.success = false;
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
        // this.authservice.currentUserDetail()
        // .subscribe(res => {
        //   if (res.status === 'success') {
        //     console.log(res);
        //     // this.regions = res.data.regions;
        //   }
        // }, (err) => {
        //   console.log(err);
        // });
        this.createForm();
    };
    ChangepasswordComponent.prototype.createForm = function () {
        this.passwordresetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            // tslint:disable-next-line
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_sharedfn_userfn__WEBPACK_IMPORTED_MODULE_3__["patternValidator"])(/^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            currentpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        }, _sharedfn_userfn__WEBPACK_IMPORTED_MODULE_3__["passwordMatchValidator"]);
    };
    ChangepasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        this.formsubmitted = true;
        this.showloading = false;
        this.usermsg = '';
        this.success = false;
        this.error = false;
        if (this.passwordresetForm.valid) {
            this.showloading = true;
            this.authservice.resetUserPassword(this.passwordresetForm.value).subscribe(function (res) {
                if (res['status'] === 'success') {
                    _this.usermsg = 'Password Updated successfully.';
                    _this.showloading = false;
                    _this.success = true;
                    _this.error = false;
                    // setTimeout(() => {
                    //   this.router.navigate(['user/sigin']);
                    // }, 2000);
                    // this.passwordresetForm.reset();
                }
                else {
                    _this.showloading = false;
                    _this.usermsg = res.data;
                    _this.success = false;
                    _this.error = true;
                }
            }, function (err) {
                _this.showloading = false;
                console.log(err);
            });
        }
        this.validateAllFormFields(this.passwordresetForm);
        // console.log(this.passwordresetForm.value);
    };
    ChangepasswordComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ChangepasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/account/changepassword/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./changepassword.component.css */ "./src/app/account/changepassword/changepassword.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _service_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());



/***/ }),

/***/ "./src/app/account/dashboard/dashboard.component.css":
/*!***********************************************************!*\
  !*** ./src/app/account/dashboard/dashboard.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-container {\r\n    border-top: solid 0px #e6e6e6 !important;\r\n    border-left: solid 0px #e6e6e6 !important;\r\n    margin-right: -1px;\r\n}\r\n.container-1:after,\r\n.container-2:before,\r\n{\r\n  display: table;\r\n  content: \" \";\r\n}\r\n.container-1:after,\r\n.container-2:after,\r\n{clear: both;}\r\n.container-1{display: none;}\r\n/*navbar-right=====START==========*/\r\n.social-icon{margin:0px;padding:0px;}\r\n.social-icon li {margin: 0px;padding: 0px;list-style-type: none;}\r\n.social-icon li a {\r\n    display: block;\r\n    padding: 15px 14px;\r\n    text-decoration:none;\r\n}\r\n.social-icon li a:focus{\r\n   color:#fff;\r\n    text-decoration:none;\r\n}\r\n.messages-link{\r\n        color: #fff !important;\r\n    background: #16a085 !important;\r\n\r\n}\r\n.alerts-link{\r\n        color: #fff !important;\r\n    background: #f39c12 !important;\r\n\r\n}\r\n.tasks-link{\r\n        color: #fff !important;\r\n    background: #2980b9 !important;\r\n\r\n}\r\n.user-link{\r\n        color: #fff !important;\r\n    background: #E74C3C !important;\r\n\r\n}\r\n.number {\r\n    position: absolute;\r\n    bottom: 25px;\r\n    left: 3px;\r\n    width: 20px;\r\n    height: 20px;\r\n    padding-right: 1px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    font-size: 11px;\r\n    line-height: 20px;\r\n    background-color: #2c3e50;\r\n}\r\n.close-btn {\r\n    position: absolute;\r\n    z-index: 99;\r\n    color: #fff;\r\n    font-size: 31px;\r\n    top: 0px;\r\n    left: 223px;    \r\n    display: none;\r\n    padding: 0px;\r\n    cursor: pointer;\r\n}\r\n.close-btn .fa-window-close{color:#fff;font-size: 25px;}\r\n.welcome {\r\n    margin: 0;\r\n    font-style: italic;\r\n    color: #9aa4af;\r\n}\r\n.name {\r\n    margin: 0;\r\n    font-family: \"Ubuntu\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    color: #ccd1d7;\r\n}\r\n.date-picker{    \r\n    border-color: #138871;\r\n    color: #fff;\r\n    background-color: #149077;\r\n    margin-top: -7px;\r\n    border-radius: 0px;\r\n    margin-right: -15px;\r\n}\r\n#page-wrapper .breadcrumb {\r\n    padding: 8px 15px;\r\n    margin-bottom: 20px;\r\n    list-style: none;\r\n    background-color: #e0e7e8;\r\n    border-radius: 0px;\r\n    \r\n}\r\n@media (min-width: 768px){\r\n.circle-tile {\r\n    margin-bottom: 30px;\r\n}\r\n}\r\n.circle-tile {\r\n    margin-bottom: 15px;\r\n    text-align: center;\r\n}\r\n.circle-tile-heading {\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n    margin: 0 auto -40px;\r\n    border: 3px solid rgba(255,255,255,0.3);\r\n    border-radius: 100%;\r\n    color: #fff;\r\n    transition: all ease-in-out .3s;\r\n}\r\n/* -- Background Helper Classes */\r\n/* Use these to cuztomize the background color of a div. These are used along with tiles, or any other div you want to customize. */\r\n.dark-blue {\r\n    background-color: #34495e;\r\n}\r\n.green {\r\n    background-color: #16a085;\r\n}\r\n.blue {\r\n    background-color: #2980b9;\r\n}\r\n.orange {\r\n    background-color: #f39c12;\r\n}\r\n.red {\r\n    background-color: #e74c3c;\r\n}\r\n.purple {\r\n    background-color: #8e44ad;\r\n}\r\n.dark-gray {\r\n    background-color: #7f8c8d;\r\n}\r\n.gray {\r\n    background-color: #95a5a6;\r\n}\r\n.light-gray {\r\n    background-color: #bdc3c7;\r\n}\r\n.yellow {\r\n    background-color: #f1c40f;\r\n}\r\n/* -- Text Color Helper Classes */\r\n.text-dark-blue {\r\n    color: #34495e;\r\n}\r\n.text-green {\r\n    color: #16a085;\r\n}\r\n.text-blue {\r\n    color: #2980b9;\r\n}\r\n.text-orange {\r\n    color: #f39c12;\r\n}\r\n.text-red {\r\n    color: #e74c3c;\r\n}\r\n.text-purple {\r\n    color: #8e44ad;\r\n}\r\n.text-faded {\r\n    color: rgba(255,255,255,0.7);\r\n}\r\n.circle-tile-heading .fa {\r\n    line-height: 80px;\r\n}\r\n.circle-tile-content {\r\n    padding-top: 50px;\r\n}\r\n.circle-tile-description {\r\n    text-transform: uppercase;\r\n}\r\n.text-faded {\r\n    color: rgba(255,255,255,0.7);\r\n}\r\n.circle-tile-number {\r\n    padding: 5px 0 15px;\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n}\r\n.circle-tile-footer {\r\n    display: block;\r\n    padding: 5px;\r\n    color: rgba(255,255,255,0.5);\r\n    background-color: rgba(0,0,0,0.1);\r\n    transition: all ease-in-out .3s;\r\n}\r\n.circle-tile-footer:hover {\r\n    text-decoration: none;\r\n    color: rgba(255,255,255,0.5);\r\n    background-color: rgba(0,0,0,0.2);\r\n}\r\n.morning {\r\n    background: url(https://lh3.googleusercontent.com/-1YbV7nsVnX8/WMugaq-6BEI/AAAAAAAADSg/0wPfQ84vMUcCle_SkgiUDOumUKscMaA8QCL0B/w530-d-h353-p-rw/widget-bg-morning.jpg) center bottom no-repeat;\r\n    background-size: cover;\r\n}\r\n.time-widget {\r\n    margin-top: 5px;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    font-size: 1.75em;\r\n}\r\n.time-widget-heading {\r\n    text-transform: uppercase;\r\n    font-size: .5em;\r\n    font-weight: 400;\r\n    color: #fff;\r\n}\r\n#datetime{color:#fff;}\r\n.tile-img {\r\n    text-shadow: 2px 2px 3px rgba(0,0,0,0.9);\r\n}\r\n.tile {\r\n    margin-bottom: 15px;\r\n    padding: 15px;\r\n    overflow: hidden;\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/account/dashboard/dashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/account/dashboard/dashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-common></app-header-common>\r\n<div class=\"main-content shop-page main-content-grid\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"breadcrumbs\">\r\n\t\t\t\t<a href=\"user/account\">My Account</a>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-xs-12 col-sm-7 col-md-8 col-lg-9 content-offset\">\r\n\t\t\t\t<div class=\"categories-content\">\r\n\t\t\t\t\t<h4 class=\"shop-title\">Dashboard</h4>\r\n\t\t\t\t\t<!-- <div class=\"productloading\" *ngIf=\"showloading\">Loading...</div> -->\r\n\r\n\t\t\t\t\t<div class=\"product-container auto-clear grid-style equal-container box-has-content\">\r\n\t\t\t\t\t\t<!-- dashboard content -->\r\n\t\t\t\t\t\t<div class=\"row\" >\r\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"circle-tile\">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"circle-tile-heading dark-blue\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-check-square-o fa-fw fa-3x\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"circle-tile-content dark-blue\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"circle-tile-description text-faded\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tActive Ads\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"circle-tile-number text-faded\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div  *ngIf=\"showloading; else activeads\"><img src=\"assets/images/loader.gif\" alt=\"loading\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #activeads>{{dashboardata.activeadscount}}</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"circle-tile\">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"circle-tile-heading green\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-circle-o-notch fa-fw fa-3x\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"circle-tile-content green\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"circle-tile-description text-faded\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tArchive Ads\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"circle-tile-number text-faded\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div  *ngIf=\"showloading; else archivedata\"><img src=\"assets/images/loader.gif\" alt=\"loading\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #archivedata>{{archiveadslength}}</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 col-sm-6\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"circle-tile\">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"circle-tile-heading orange\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inbox fa-fw fa-3x\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"circle-tile-content orange\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"circle-tile-description text-faded\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tInbox\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"circle-tile-number text-faded\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div  *ngIf=\"showloading; else newmsgs\"><img src=\"assets/images/loader.gif\" alt=\"loading\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #newmsgs>New {{dashboardata.inboxnewmsg}}</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- /end dashboard content -->\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- sidebar -->\r\n\t\t\t<div class=\"col-xs-12 col-sm-5 col-md-4 col-lg-3 sidebar\">\r\n\t\t\t\t<div class=\"widget widget-categories\">\r\n\t\t\t\t\t<h5 class=\"widgettitle\">New Ad</h5>\r\n\t\t\t\t\t<ul class=\"list-categories dashboardmenu\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-plus-square\"></i>\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['newad']\" class=\"label-text\">Create New Ad</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"widget widget-categories\">\r\n\t\t\t\t\t<h5 class=\"widgettitle\">Ads</h5>\r\n\t\t\t\t\t<ul class=\"list-categories dashboardmenu\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['editads']\" class=\"label-text\"> Edit Ads</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-eye\"></i>\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['activeads']\" class=\"label-text\"> Active Ads</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-archive\"></i>\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['archiveads']\" class=\"label-text\">Archive</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"widget widget-categories\">\r\n\t\t\t\t\t<h5 class=\"widgettitle\">Messages</h5>\r\n\t\t\t\t\t<ul class=\"list-categories\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-inbox\"></i>\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['inbox']\" class=\"label-text\"> Inbox</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-paper-plane\"></i>\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['sent']\" class=\"label-text\">Sent</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"widget widget-categories\">\r\n\t\t\t\t\t<h5 class=\"widgettitle\">Profile</h5>\r\n\t\t\t\t\t<ul class=\"list-categories dashboardmenu\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['profile']\" class=\"label-text\">Edit Profile</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i> <a  [routerLink]=\"['../changepassword']\" class=\"label-text\">Change Password</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- /sidebar-->\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/account/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/account/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(route, router, product) {
        this.route = route;
        this.router = router;
        this.product = product;
        this.showloading = true;
        this.archiveadslength = 0;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userid = localStorage.getItem('id');
        this.product.userdashboard(userid)
            .subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.showloading = false;
                _this.dashboardata = res.data;
            }
            else {
                _this.showloading = false;
            }
        }, function (err) {
            console.log(err);
        });
        this.product.getArchiveProductByUser(userid)
            .subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.archiveadslength = res.data.product.length;
            }
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/account/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/account/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/account/editad/editad.component.css":
/*!*****************************************************!*\
  !*** ./src/app/account/editad/editad.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-form .input-info {\r\n    padding: 0 5px;\r\n}\r\n\r\n.buttonblock button {\r\n    margin-bottom:5px;  \r\n    display: block;\r\n}\r\n\r\n.ng-select .ng-placeholder {\r\n    display: none;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/account/editad/editad.component.html":
/*!******************************************************!*\
  !*** ./src/app/account/editad/editad.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-common></app-header-common>\n<div class=\"main-content shop-page main-content-grid\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"breadcrumbs\">\n                    <a href=\"user/account\">My Account</a>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-7 col-md-8 col-lg-9 content-offset\">\n\t\t\t\t\t<div class=\"categories-content\">\n\t\t\t\t\t\t<h4 class=\"shop-title\">Edit Ad</h4>\n                        <div class=\"row content-form \">\n                        \n                              \n                                <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 info-content\">\n                                    <form [formGroup]=\"newadForm\" class=\"addnewproduct register-form editproductdetail\" (ngSubmit)=\"addnewproduct()\"> \n                                    <div class=\"contact-form\">\n                                        <h4 class=\"main-title\">Product Details</h4>\n                                        <h5 class=\"note-title\">( * ) Required fields</h5>\n                                        <div class=\"row\">\n                                                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                                                        <span class=\"label-text\">Category <span>*</span></span>\n                                                        <ng-select [searchable]=\"false\" #categorySelect [items]=\"mainCats\" [selectOnTab]=\"true\" bindLabel=\"catname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Select category\" formControlName=\"category\" (change)=\"getSubcatList($event._id)\">\n                                                </ng-select>\n                                                <div *ngIf=\"!newadForm.valid && forcevalidation\" class=\"error-msg\">\n                                                    <div *ngIf=\"newadForm.controls['category'].pristine && newadForm.controls['category'].errors.required\">Category is required.</div>\n                                                  </div>\n                                                    </div>\n                                                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                                                            <span class=\"label-text\">Sub Category <span>*</span></span>\n                                                            <ng-select [searchable]=\"false\" #cropsSelect [items]=\"subCats\" [selectOnTab]=\"true\" bindLabel=\"subcatname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Select subcategory\" formControlName=\"subcatnames\" (change)=\"getSubcatimages($event)\">\n                                                </ng-select>\n                                                <div *ngIf=\"!newadForm.valid && forcevalidation\" class=\"error-msg\">\n                                                        <div *ngIf=\"newadForm.controls['subcatnames'].pristine && newadForm.controls['subcatnames'].errors.required\">Subcategory is required.</div>\n                                                      </div>\n                                                        </div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <!-- <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                                                <span class=\"label-text\">Crop</span>\n                                                <ng-select [searchable]=\"false\"  #cropsSelect [items]=\"crops\"\n                                                        [selectOnTab]=\"true\"\n                                                        bindLabel=\"cropname\"\n                                                        bindValue=\"_id\"\n                                                        placeholder=\"Select crop\"\n                                                        formControlName=\"crop\">\n                                                        </ng-select>\n                                            </div> -->\n                                            <div class=\"col-xs-12 \">\n                                                <span class=\"label-text\">Region <span>*</span></span>\n                                             \n                                                        <ng-select [searchable]=\"false\"  #regionSelect [items]=\"regions\"\n                                                        [selectOnTab]=\"true\"\n                                                        bindLabel=\"regionname\"\n                                                        bindValue=\"_id\"\n                                                        placeholder=\"Select region\"\n                                                        formControlName=\"region\">\n                                                      </ng-select>\n                                                      <div *ngIf=\"!newadForm.valid && forcevalidation\" class=\"error-msg\">\n                                                            <div *ngIf=\"newadForm.controls['region'].pristine && newadForm.controls['region'].errors.required\">Region is required.</div>\n                                                          </div>\n                                                \n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                                                    <span class=\"label-text\">Name <span>*</span></span>\n                                                    <input type=\"text\" class=\"input-info\"  formControlName=\"productname\">\n                                                    <div *ngIf=\"!newadForm.valid && forcevalidation\" class=\"error-msg\">\n                                                            <div *ngIf=\"newadForm.controls['productname'].pristine && newadForm.controls['productname'].errors?.required\">Name is required.</div>\n                                                            <div *ngIf=\"newadForm.controls['productname'].dirty && newadForm.controls['productname'].errors?.required\">Name is required.</div>\n                                                          </div>\n                                                          <!-- <div *ngIf=\"newadForm.controls['productname'].errors && !newadForm.controls['productname'].pristine\" class=\"error-msg\">\n                                                                <div [hidden]=\"!newadForm.controls['productname'].errors.required\">Name is required.</div>\n                                                              </div> -->\n                                            </div>\n                                           \n                                        </div>\n                                        <div class=\"row\">\n                                                <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n                                                        <span class=\"label-text\">Amount For Sale <span>*</span></span>\n                                                        <input type=\"number\" class=\"input-info\"  formControlName=\"saleamount\">\n                                                        <div *ngIf=\"!newadForm.valid && forcevalidation\" class=\"error-msg\">\n                                                                <div *ngIf=\"newadForm.controls['saleamount'].pristine && newadForm.controls['saleamount'].errors.required\">Amount For Sale is required.</div>\n                                                                <div *ngIf=\"newadForm.controls['saleamount'].dirty && newadForm.controls['saleamount'].errors?.required\">Amount For Sale is required.</div>\n                                                              </div>  \n                                                </div>\n                                                <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n                                                        <span class=\"label-text\">Amount Unit <span>*</span></span>\n                                                        <ng-select [searchable]=\"false\"  #amountforsale [items]=\"amtforsale\"\n                                                        [selectOnTab]=\"true\"\n                                                        bindLabel=\"amountunit\"\n                                                        bindValue=\"_id\"\n                                                        placeholder=\"Select Amount Unit\"\n                                                        formControlName=\"amtunit\">\n                                                    </ng-select>\n                                                    <div *ngIf=\"!newadForm.valid && forcevalidation\" class=\"error-msg\">\n                                                            <div *ngIf=\"newadForm.controls['amtunit'].pristine && newadForm.controls['amtunit'].errors.required\">Amount Unit is required.</div>\n                                                          </div>  \n                                                    </div>\n                                                <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n                                                        <span class=\"label-text\">Price Per Unit <span>*</span></span>\n                                                        <input type=\"number\" class=\"input-info\"  formControlName=\"unitprice\">\n                                                        <div *ngIf=\"!newadForm.valid && forcevalidation\" class=\"error-msg\">\n                                                                <div *ngIf=\"newadForm.controls['unitprice'].pristine && newadForm.controls['unitprice'].errors.required\">Price Per Unit is required.</div>\n                                                                <div *ngIf=\"newadForm.controls['unitprice'].dirty && newadForm.controls['unitprice'].errors?.required\">Price Per Unit is required.</div>\n                                                              </div>  \n                                                </div>\n                                        </div>\n                                        \n                                        \n                                    </div>\n                                    <div class=\"group-button\">\n                                            <button href=\"#\" class=\"button submit\" >\n                                                <span *ngIf=\"updatingstatus\">Updating...</span>\n                                                <span *ngIf=\"!updatingstatus\">Submit</span>\n                                            </button>\n                                          </div>\n                          \n                                </form>\n                                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"uploadsuccess\">\n                                        <strong>New Ad : </strong> New Ad Posted Successfully \n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 map-content\" *ngIf=\"!!defaultproductimage\">\n                                    <div *ngIf=\"!uploader?.queue?.length\">\n                                            <h3>Current product image</h3>\n                                            <!-- <small>If you dont' have product image then this will the default products image.</small> -->\n                                            <img src=\"{{defaultproductimage}}\" alt=\"default product image\">\n                                    </div>\n                                    <h3>Upload product image</h3>\n                                    <small>I want to upload New product image.</small>\n                                    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showimageerror\">\n                                            <strong>Image Error : </strong> Please upload product image (Allowed Extension: .JPG) \n                                        </div>\n                                        \n                                        \n                                    <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\"  *ngIf=\"uploader?.queue?.length < 1\"/>\n                                    <table class=\"table\" *ngIf=\"uploader?.queue?.length\">\n                                            <thead>\n                                            <tr>\n                                                <th width=\"50%\">Name</th>\n                                               \n                                                \n                                                <th>Status</th>\n                                                <th>Actions</th>\n                                            </tr>\n                                            </thead>\n                                            <tbody>\n                                            <tr *ngFor=\"let item of uploader.queue\">\n                                                    <div class=\"map\" *ngIf=\"uploader?.queue?.length\">\n                                        \n                                                            <img src=\"\" imgPreview [image]=\"item?._file\" class=\"media-object\" />\n                                                            <div class=\"media-body\">\n                                                                   <p>{{ item?.file?.name }}</p>\n                                                               </div>\n                                                           </div>\n                                                \n                                                <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                                                <!-- <td *ngIf=\"uploader.isHTML5\">\n                                                    <div class=\"progress\" style=\"margin-bottom: 0;\">\n                                                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                                                    </div>\n                                                </td> -->\n                                                <td class=\"text-center\">\n                                                   <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>   \n                                                    <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                                                    <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                                                </td>\n                                                <td nowrap class=\"buttonblock\">\n                                                    <button type=\"button\" class=\"btn btn-success btn-xs\"\n                                                            (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                                                        <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                                                    </button> \n                                                    <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                                                            (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                                                        <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                                                    </button> \n                                                    <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                                                            (click)=\"item.remove()\">\n                                                        <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            </tbody>\n                                        </table>\n                                           <div *ngIf=\"uploader?.queue?.length\">\n                                                <div>\n\n                                                    <div class=\"progress\" >\n                                                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                    \n                                </div>\n                            </div>\n                        <!-- <div class=\"product-container auto-clear grid-style equal-container box-has-content\">\n                        \n                            <h5>Product Image</h5>\n                            <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showimageerror\">\n                                <strong>Image Error : </strong> Please upload product image (Allowed Extension: .JPG) </div>\n                        \n                        \n                        </div> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n      <!-- sidebar -->\n      <app-sidebar></app-sidebar>\n      <!-- /sidebar-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/account/editad/editad.component.ts":
/*!****************************************************!*\
  !*** ./src/app/account/editad/editad.component.ts ***!
  \****************************************************/
/*! exports provided: EditadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditadComponent", function() { return EditadComponent; });
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/home.service */ "./src/app/service/home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var URL = '/api/upload';
var EditadComponent = /** @class */ (function () {
    function EditadComponent(productservice, route, router, homepage) {
        var _this = this;
        this.productservice = productservice;
        this.route = route;
        this.router = router;
        this.homepage = homepage;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.showimageerror = false;
        this.uploadsuccess = false;
        this.forcevalidation = false;
        // subCats: Array<any> = [];
        this.selectedCategory = '';
        this.updatingstatus = false;
        // this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
        this.uploader.onSuccessItem = function (item, response, status, headers) { return _this.onSuccessItem(item, response, status, headers); };
    }
    EditadComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        this.imagedata = JSON.parse(response); // success server response
        // this.tempimagename = 'assets/images/products/' + this.imagedata.data.filename;
    };
    // onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    //   let error = JSON.parse(response); //error server response
    // }
    EditadComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (typeof localStorage.getItem('productinfo') === 'undefined' || localStorage.getItem('productinfo') === null) {
            this.router.navigate(['user/account/editads']);
        }
        this.homepage.getCatList().subscribe(function (res) {
            if (res.status === 'success') {
                _this.mainCats = res.data.category;
                if (_this.mainCats.length > 0) {
                    _this.selectedCategory = _this.mainCats[0]._id;
                }
            }
        }, function (err) {
            console.log(err);
        });
        this.createForm();
        var userid = localStorage.getItem('id');
        if (!userid) {
            this.router.navigate(['user/signin']);
        }
        // croplist
        // this.homepage.getCropList()
        // .subscribe(res => {
        //    if (res.status === 'success') {
        //      this.subcatsnames = res.data.crops;
        //    }
        //   }, (err) => {
        //     console.log(err);
        //   });
        // region list
        this.getRegionList();
        // amounit list
        this.getAmountUnit();
    };
    EditadComponent.prototype.getAmountUnit = function () {
        var _this = this;
        this.homepage.getAmountUnitList()
            .subscribe(function (res) {
            if (res.status === 'success') {
                // console.log(res);
                _this.amtforsale = res.data.amountunit;
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditadComponent.prototype.getSubcatList = function (catid) {
        var _this = this;
        this.homepage.getSubcatListByCatID(catid).subscribe(function (res) {
            if (res.status === 'success') {
                _this.subCats = res.data.subcategory;
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditadComponent.prototype.getSubcatimages = function (e) {
        this.productimage = e.defaultimage;
        this.defaultproductimage = e.defaultimage;
    };
    EditadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    EditadComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    EditadComponent.prototype.createForm = function () {
        this.productdetails = JSON.parse(localStorage.getItem('productinfo'));
        this.defaultproductimage = this.productdetails === null ? '' : this.productdetails.pimage;
        var formprefilled = {
            pimage: this.productdetails === null ? '' : this.productdetails.pimage,
            category_id: this.productdetails === null ? '' : this.productdetails.category_id,
            subcatid: this.productdetails === null ? '' : this.productdetails.subcatid,
            amtunit: this.productdetails === null ? '' : this.productdetails.amtunit,
            unitprice: this.productdetails === null ? '' : this.productdetails.unitprice,
            regionid: this.productdetails === null ? '' : this.productdetails.regionid,
            saleamount: this.productdetails === null ? '' : this.productdetails.saleamount,
            pname: this.productdetails === null ? '' : this.productdetails.pname,
        };
        this.newadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            // tslint:disable-next-line
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](formprefilled.category_id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            subcatnames: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](formprefilled.subcatid, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            amtunit: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](formprefilled.amtunit, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            unitprice: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](formprefilled.unitprice, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            region: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](formprefilled.regionid, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            saleamount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](formprefilled.saleamount, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            productname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](formprefilled.pname, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        }); // remove updateon to change the event to onchange
        this.getSubcatList(this.productdetails === null ? 111111111111111111111111111 : this.productdetails.category_id);
        this.getRegionList();
        this.getAmountUnit();
    };
    EditadComponent.prototype.getRegionList = function () {
        var _this = this;
        this.homepage.getRegionList()
            .subscribe(function (res) {
            if (res.status === 'success') {
                // console.log(res);
                _this.regions = res.data.regions;
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditadComponent.prototype.addnewproduct = function () {
        var _this = this;
        var userid = localStorage.getItem('id');
        // if (!userid) {
        //   this.router.navigate(['user/signin']);
        //   }
        var productimage;
        if (typeof this.imagedata !== undefined && this.imagedata) {
            productimage = this.imagedata.data;
        }
        else {
            if (this.productimage === '' || typeof this.productimage === 'undefined') {
                console.log('---undefined');
                productimage = this.productdetails.pimage;
            }
            else {
                productimage = this.productimage;
            }
        }
        this.forcevalidation = true;
        var productdetails = {
            'productid': this.productdetails.productid,
            'subcat': this.newadForm.value.subcatnames,
            'region': this.newadForm.value.region,
            'saleamount': this.newadForm.value.saleamount,
            'amtunit': this.newadForm.value.amtunit,
            'unitprice': this.newadForm.value.unitprice,
            'productname': this.newadForm.value.productname,
            'productimage': productimage,
            'userid': userid
        };
        // console.log('productdetails' , productdetails, this.productdetails.pimage , this.productimage, this.newadForm.valid);
        if (this.newadForm.valid) {
            this.uploadsuccess = false;
            this.updatingstatus = true;
            this.productservice.updateProduct(productdetails).subscribe(function (res) {
                if (res['status'] === true) {
                    _this.showimageerror = false;
                    _this.uploadsuccess = true;
                    _this.uploader.queue.length = 0;
                    _this.forcevalidation = false;
                    _this.updatingstatus = false;
                    localStorage.removeItem('productinfo');
                    // this.newadForm.reset();
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    EditadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editad',
            template: __webpack_require__(/*! ./editad.component.html */ "./src/app/account/editad/editad.component.html"),
            styles: [__webpack_require__(/*! ./editad.component.css */ "./src/app/account/editad/editad.component.css")]
        }),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_0__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]])
    ], EditadComponent);
    return EditadComponent;
}());



/***/ }),

/***/ "./src/app/account/editads/editads.component.css":
/*!*******************************************************!*\
  !*** ./src/app/account/editads/editads.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productloading{\r\n    display: inline-block;\r\n    position: relative;\r\n    left: 20px;\r\n    background-color: green;\r\n    padding: 0 10px;\r\n    color: #fff;\r\n}\r\n.shop-page .shop-title {\r\n    display: inline;\r\n}\r\n.product-item .group-button .add-to-cart{\r\n    width: 100%;\r\n}\r\n.btn {\r\n    padding: 6px !important;\r\n}"

/***/ }),

/***/ "./src/app/account/editads/editads.component.html":
/*!********************************************************!*\
  !*** ./src/app/account/editads/editads.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-common></app-header-common>\n<div class=\"main-content shop-page main-content-grid\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"breadcrumbs\">\n\t\t\t\t\t<a href=\"user/account\">My Account</a>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-7 col-md-8 col-lg-9 content-offset\">\n\t\t\t\t\t<div class=\"categories-content\">\n\t\t\t\t\t\t<h4 class=\"shop-title\">Edit Ads</h4>\n\t\t\t\t\t\t<div class=\"productloading\" *ngIf=\"showloading\">Loading...</div>\n\t\t\t\t\t\t<div class=\"product-container auto-clear grid-style equal-container box-has-content\" *ngIf=\"pagedItems\">\n\t\t\t\t\t\t\t\t<table class=\"table table-hover\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>#</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Product Image</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Name</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Price</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Category</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Sub Category</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Added on</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t </tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of pagedItems; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t<th scope=\"row\">{{i + 1}}</th>\n\t\t\t\t\t\t\t\t\t\t\t<td><img src=\"{{item.pimage}}\" width=\"100\" alt=\"\"></td> \n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.pname}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>$ {{item.saleamount}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.category}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.subcategory}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{item.created_at | date:'MM-dd-y'}}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"editproductdetails(item)\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i> Edit</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\"  class=\"btn btn-danger\" (click)=\"deleteproduct(item.productid, $event, i)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"editproductdetails(item)\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i> Edit</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteproduct(item)\"><i class=\"fa fa-trash-alt\" aria-hidden=\"true\"></i> Delete</button> -->\n\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"product-item layout1 col-ts-12 col-xs-6 col-sm-6 col-md-4 col-lg-4 no-padding\" *ngFor=\"let item of products\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-inner equal-elem\" >\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button href=\"#\" class=\"quickview-button\" (click)=\"quickview(item.pname, item.pimage, item.saleamount,  item.amtunit, item.unitprice)\"><span class=\"icon\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></span> Quick View</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(item._id)\"  class=\"thumb-link\"><img src=\"assets/images/products/{{item.pimage}}\" alt=\"\"></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(item._id)\"  class=\"product-name\">{{item.pname}}</a>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>$ {{item.saleamount}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"group-button\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"add-to-cart\" (click)=\"archivead(item._id)\"><span class=\"text\">Archive</span></a>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<div class=\"pagination\" *ngIf=\"pagedItems?.length\" >\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-page\" *ngIf=\"pager.pages && pager.pages.length\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-button\" (click)=\"setPage(1)\">First</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-button\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let page of pager.pages\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" [ngClass]=\"{'page-number current':pager.currentPage === page}\" (click)=\"setPage(page)\">{{page}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-button\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-button\" (click)=\"setPage(pager.totalPages)\">Last</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<span  *ngIf=\"pagedItems?.length\" class=\"note\">Showing {{pager.startIndex + 1}}-{{pager.endIndex + 1}}  of {{pager.totalItems}} result</span>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n      <!-- sidebar -->\n      <app-sidebar></app-sidebar>\n      <!-- /sidebar-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/account/editads/editads.component.ts":
/*!******************************************************!*\
  !*** ./src/app/account/editads/editads.component.ts ***!
  \******************************************************/
/*! exports provided: EditadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditadsComponent", function() { return EditadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popup/popup.component */ "./src/app/account/popup/popup.component.ts");
/* harmony import */ var _service_pager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pager.service */ "./src/app/service/pager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditadsComponent = /** @class */ (function () {
    function EditadsComponent(product, route, router, modalService, renderer, pageservice) {
        this.product = product;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.renderer = renderer;
        this.pageservice = pageservice;
        this.showloading = false;
        this.notfound = false;
        this.catsubcat = [];
        this.pager = {};
        this.pageSize = 9;
    }
    EditadsComponent.prototype.deleteproduct = function (productid, event, productindex) {
        var _this = this;
        var initialState = {
            modaldata: [productid]
        };
        this.bsModalRef = this.modalService.show(_popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
        this.bsModalRef.content.onClose.subscribe(function (result) {
            if (result === true) {
                // console.log(event.srcElement.attributes.id);
                // console.log(event);
                _this.renderer.setAttribute(event.srcElement, 'disabled', 'disabled');
                _this.confirmdelete(productid, productindex);
            }
        });
    };
    EditadsComponent.prototype.setPage = function (page) {
        var _this = this;
        // get pager object from service
        this.pager = this.pageservice.getPager(this.catsubcat.length, page, this.pageSize);
        setTimeout(function () {
            _this.pagedItems = _this.catsubcat.slice(_this.pager.startIndex, _this.pager.endIndex + 1);
        }, 500);
        // get current page of items
    };
    EditadsComponent.prototype.confirmdelete = function (productid, productindex) {
        this.catsubcat.splice(productindex, 1);
        this.product.deleteProduct(productid)
            .subscribe(function (res) {
            if (res['status'] === 'success') {
            }
            else {
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditadsComponent.prototype.editproductdetails = function (productinfo) {
        //  console.log('productid', productid);
        localStorage.setItem('productinfo', JSON.stringify(productinfo));
        this.router.navigate(['user/account/editad']);
    };
    EditadsComponent.prototype.activeads = function () {
        var _this = this;
        var userid = localStorage.getItem('id');
        // if (!userid) {
        //   this.router.navigate(['user/signin']);
        //   }
        this.showloading = true;
        // console.log('params[id]', params['id']);
        this.product.getProductListByUser(userid).subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.showloading = false;
                _this.notfound = false;
                _this.products = res.data['product'];
                for (var _i = 0, _a = res.mapping; _i < _a.length; _i++) {
                    var item = _a[_i];
                    // let productinfo = _.find(res.data['product'], function(producta) {
                    //   return producta._id === item.productid;
                    // });
                    for (var pitem in _this.products) {
                        // console.log(this.products[pitem]._id);
                        if (_this.products[pitem]._id === item.productid) {
                            var productinfo = _this.products[pitem];
                            var catsubcat = {
                                productid: item.productid,
                                regionid: item.regionid,
                                category: item.subcatid.catid.catname,
                                subcategory: item.subcatid.subcatname,
                                pimage: productinfo.pimage,
                                pname: productinfo.pname,
                                amtunit: productinfo.amtunit,
                                unitprice: productinfo.unitprice,
                                saleamount: productinfo.saleamount,
                                category_id: item.subcatid.catid._id,
                                subcatid: item.subcatid._id,
                                created_at: productinfo.created_at
                            };
                            _this.catsubcat.push(catsubcat);
                        }
                    }
                    // let catsubcat = {
                    //   productid: item.productid,
                    //   regionid: item.regionid,
                    //   category: item.subcatid.catid.catname,
                    //   subcategory: item.subcatid.subcatname,
                    //   pimage: productinfo.pimage,
                    //   pname: productinfo.pname,
                    //   amtunit: productinfo.amtunit,
                    //   unitprice: productinfo.unitprice,
                    //   saleamount: productinfo.saleamount,
                    //   category_id: item.subcatid.catid._id,
                    //   subcatid: item.subcatid._id,
                    //   created_at: productinfo.created_at
                    // };
                    // this.catsubcat.push(catsubcat);
                }
                _this.setPage(1);
                // console.log(this.catsubcat);
            }
            else {
                // this.router.navigate(['/cropnotfound']);
                if (_this.products) {
                    _this.products.length = 0;
                }
                if (!!_this.pagedItems && !!_this.pagedItems.length) {
                    _this.pagedItems.length = 0;
                }
                _this.showloading = false;
                _this.notfound = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditadsComponent.prototype.ngOnInit = function () {
        this.activeads();
    };
    EditadsComponent.prototype.archivead = function (productid) {
        var _this = this;
        this.showloading = true;
        this.product.setAdArchive(productid).subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.showloading = false;
                //  this.notfound = false;
                _this.activeads();
                //  this.products = res.data.product;
            }
            else {
                // this.router.navigate(['/cropnotfound']);
                // if (this.products) {
                //   this.products.length = 0;
                // }
                _this.showloading = false;
                // this.notfound = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditadsComponent.prototype.showproductdetails = function (itemid) {
        this.router.navigate(['product/detail/' + itemid]);
    };
    EditadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editads',
            template: __webpack_require__(/*! ./editads.component.html */ "./src/app/account/editads/editads.component.html"),
            styles: [__webpack_require__(/*! ./editads.component.css */ "./src/app/account/editads/editads.component.css")]
        }),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _service_pager_service__WEBPACK_IMPORTED_MODULE_5__["PagerService"]])
    ], EditadsComponent);
    return EditadsComponent;
}());



/***/ }),

/***/ "./src/app/account/editprofile/editprofile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/account/editprofile/editprofile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-container {\r\n    border-top: solid 0px #e6e6e6 !important;\r\n    border-left: solid 0px #e6e6e6 !important;\r\n    margin-right: -1px;\r\n}\r\nspan.successmsg {\r\n    padding: 10px;\r\n    left: 5px;\r\n    position: relative;\r\n}"

/***/ }),

/***/ "./src/app/account/editprofile/editprofile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/account/editprofile/editprofile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-common></app-header-common>\n<div class=\"main-content shop-page main-content-grid\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"breadcrumbs\">\n\t\t\t\t\t<a href=\"user/account\">My Account</a>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xs-12 col-sm-7 col-md-8 col-lg-9 content-offset\">\n\t\t\t\t\t\t\t<div class=\"categories-content\">\n\t\t\t\t\t\t\t\t\t<div class=\"login-register-form content-form\">\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"shop-title\">Edit Profile</h4>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"product-container auto-clear grid-style equal-container box-has-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<form [formGroup]=\"editProfileForm\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"register-form\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <h5 class=\"note-title\">All ( * ) fields are required</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span class=\"label-text\">Fist name <span>*</span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <input type=\"text\"  class=\"input-info\" formControlName=\"firstname\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div *ngIf=\"editProfileForm.invalid && formsubmitted\" class=\"error-msg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"text-danger\" *ngIf=\"!!editProfileForm.controls['firstname'].errors?.required\">First Name is required.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span class=\"label-text\">Last name <span>*</span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <input type=\"text\"  class=\"input-info\" formControlName=\"lastname\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div *ngIf=\"editProfileForm.invalid && formsubmitted\" class=\"error-msg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"text-danger\" *ngIf=\"!!editProfileForm.controls['lastname'].errors?.required\">Last Name is required.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span class=\"label-text\">Phone Number <span>*</span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <input type=\"number\"  class=\"input-info\" formControlName=\"phoneno\" required min=\"0\" oninput=\"validity.valid||(value='');\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div *ngIf=\"editProfileForm.invalid && formsubmitted\" class=\"error-msg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"text-danger\" *ngIf=\"!!editProfileForm.controls['phoneno'].errors?.required\">Phone number is required.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 regionoption\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span class=\"label-text\">Region<span>*</span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <ng-select [searchable]=\"false\" #regionSelect [items]=\"regions\" [selectOnTab]=\"true\" bindLabel=\"regionname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"\" formControlName=\"region\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"editProfileForm.invalid && formsubmitted\" class=\"error-msg top-minus-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-danger\" *ngIf=\"!!editProfileForm.controls['region'].errors?.required\">Region is required.</div> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <!-- <span class=\"label-text\">Last name <span>*</span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <input type=\"text\"  class=\"input-info\" formControlName=\"lastname\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div *ngIf=\"editProfileForm.controls['lastname'].errors && !editProfileForm.controls['lastname'].pristine\" class=\"error-msg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"text-danger\" [hidden]=\"!editProfileForm.controls['lastname'].errors.required\">Last Name is required.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span class=\"label-text\">Email Address <span>*</span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <input type=\"email\" class=\"input-info\" formControlName=\"email\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div *ngIf=\"editProfileForm.invalid && formsubmitted\" class=\"error-msg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"text-danger\" *ngIf=\"!!editProfileForm.controls['email'].errors?.required\">Email is required.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"text-danger\" *ngIf=\"editProfileForm.controls['email'].dirty && !!editProfileForm.controls['email'].errors?.patternInvalid?.regexp\">Email is invalid.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <!-- <div class=\"check-box\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" formControlName=\"newsletter\" class=\"login-check\" id=\"register-check\"> <label class=\"text-label\" for=\"register-check\">Sign Up for Newsletter</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <h5 class=\"title\">Login Information</h5>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span class=\"label-text\">Password <span>*</span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <input type=\"password\"  formControlName=\"password\"  class=\"input-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div *ngIf=\"editProfileForm.invalid && formsubmitted\" class=\"error-msg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"text-danger\" *ngIf=\"!!editProfileForm.controls['password'].pristine || !!editProfileForm.controls['password'].errors?.required\">Password is required.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <span class=\"label-text\">Confirm Password <span>*</span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <input type=\"password\"  formControlName=\"confirm_password\"  class=\"input-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div *ngIf=\"editProfileForm.invalid && formsubmitted\" class=\"error-msg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"text-danger\" *ngIf=\"!!editProfileForm.controls['confirm_password'].pristine || !!editProfileForm.controls['confirm_password'].errors?.required\">Confirm Password is required.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div *ngIf=\"editProfileForm.invalid && formsubmitted && editProfileForm.controls['confirm_password'].dirty\" class=\"error-msg\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"text-danger\" *ngIf=\"!!editProfileForm.errors?.mismatch && !!editProfileForm.controls['confirm_password'].errors?.required === false\">Password & Confirm Password should be same.</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <div class=\"group-button\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"button submit\"  [disabled]= \"detailsloading\" (click)=\"editprofile()\">SUBMIT <span class=\"loading\" *ngIf=\"showloading\"><img src=\"assets/images/loader.gif\"></span></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"successmsg\" [ngClass]=\"{'bg-danger': error, 'bg-success': success}\"  *ngIf=\"!!usermsg\" >{{usermsg}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </div>\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t  </div>\n      <!-- sidebar -->\n      <app-sidebar></app-sidebar>\n      <!-- /sidebar-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/account/editprofile/editprofile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/account/editprofile/editprofile.component.ts ***!
  \**************************************************************/
/*! exports provided: EditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofileComponent", function() { return EditprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sharedfn_userfn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sharedfn/userfn */ "./src/app/sharedfn/userfn.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/home.service */ "./src/app/service/home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditprofileComponent = /** @class */ (function () {
    function EditprofileComponent(route, router, authservice, homepage) {
        this.route = route;
        this.router = router;
        this.authservice = authservice;
        this.homepage = homepage;
        this.formsubmitted = false;
        this.showloading = false;
        this.error = false;
        this.success = false;
        this.detailsloading = true;
    }
    EditprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userid = localStorage.getItem('id');
        this.homepage.getRegionList()
            .subscribe(function (res) {
            if (res.status === 'success') {
                // console.log(res);
                _this.regions = res.data.regions;
            }
        }, function (err) {
            console.log(err);
        });
        this.createForm();
        this.authservice.getUserDetails(userid)
            .subscribe(function (res) {
            if (res.status === 'success') {
                _this.detailsloading = false;
                _this.editProfileForm.patchValue({
                    'email': res.data[0].email,
                    'firstname': res.data[0].firstname,
                    'lastname': res.data[0].lastname,
                    'phoneno': res.data[0].phonenumber,
                    'region': res.data[0].region
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditprofileComponent.prototype.createForm = function () {
        this.editProfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            // tslint:disable-next-line
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Loading...', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_sharedfn_userfn__WEBPACK_IMPORTED_MODULE_3__["patternValidator"])(/^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Loading...', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Loading...', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phoneno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            region: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Loading...', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    };
    EditprofileComponent.prototype.editprofile = function () {
        var _this = this;
        this.formsubmitted = true;
        var userid = localStorage.getItem('id');
        var profiledata = {
            'userid': userid,
            'email': this.editProfileForm.value.email,
            'firstname': this.editProfileForm.value.firstname,
            'lastname': this.editProfileForm.value.lastname,
            'phoneno': this.editProfileForm.value.phoneno,
            'region': this.editProfileForm.value.region
        };
        this.showloading = false;
        this.usermsg = '';
        this.success = false;
        this.error = true;
        if (this.editProfileForm.valid) {
            this.showloading = true;
            this.authservice.editProfile(profiledata).subscribe(function (res) {
                if (res['status'] === true) {
                    _this.usermsg = 'Profile updated successfully.';
                    _this.showloading = false;
                    _this.success = true;
                    _this.error = false;
                }
                else {
                    _this.showloading = false;
                    _this.usermsg = 'Please resubit form';
                    _this.success = false;
                    _this.error = true;
                }
            }, function (err) {
                _this.showloading = false;
                console.log(err);
            });
        }
        this.validateAllFormFields(this.editProfileForm);
        // console.log('editProfileForm', profiledata);
    };
    EditprofileComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    EditprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editprofile',
            template: __webpack_require__(/*! ./editprofile.component.html */ "./src/app/account/editprofile/editprofile.component.html"),
            styles: [__webpack_require__(/*! ./editprofile.component.css */ "./src/app/account/editprofile/editprofile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _service_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]])
    ], EditprofileComponent);
    return EditprofileComponent;
}());



/***/ }),

/***/ "./src/app/account/inbox/inbox.component.css":
/*!***************************************************!*\
  !*** ./src/app/account/inbox/inbox.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mail-box {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    display: table;\r\n    table-layout: fixed;\r\n    width: 100%;\r\n}\r\n.mail-box aside {\r\n    display: table-cell;\r\n    float: none;\r\n    height: 100%;\r\n    padding: 0;\r\n    vertical-align: top;\r\n}\r\n.mail-box .sm-side {\r\n    background: none repeat scroll 0 0 #e5e8ef;\r\n    border-radius: 4px 0 0 4px;\r\n    width: 25%;\r\n}\r\n.mail-box .lg-side {\r\n    background: none repeat scroll 0 0 #fff;\r\n    border-radius: 0 4px 4px 0;\r\n    width: 75%;\r\n}\r\n.mail-box .sm-side .user-head {\r\n    background: none repeat scroll 0 0 #00a8b3;\r\n    border-radius: 4px 0 0;\r\n    color: #fff;\r\n    min-height: 80px;\r\n    padding: 10px;\r\n}\r\n.user-head .inbox-avatar {\r\n    float: left;\r\n    width: 65px;\r\n}\r\n.user-head .inbox-avatar img {\r\n    border-radius: 4px;\r\n}\r\n.user-head .user-name {\r\n    display: inline-block;\r\n    margin: 0 0 0 10px;\r\n}\r\n.user-head .user-name h5 {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    margin-bottom: 0;\r\n    margin-top: 15px;\r\n}\r\n.user-head .user-name h5 a {\r\n    color: #fff;\r\n}\r\n.user-head .user-name span a {\r\n    color: #87e2e7;\r\n    font-size: 12px;\r\n}\r\na.mail-dropdown {\r\n    background: none repeat scroll 0 0 #80d3d9;\r\n    border-radius: 2px;\r\n    color: #01a7b3;\r\n    font-size: 10px;\r\n    margin-top: 20px;\r\n    padding: 3px 5px;\r\n}\r\n.inbox-body {\r\n    padding: 2px;\r\n}\r\n.btn-compose {\r\n    background: none repeat scroll 0 0 #ff6c60;\r\n    color: #fff;\r\n    padding: 12px 0;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n.btn-compose:hover {\r\n    background: none repeat scroll 0 0 #f5675c;\r\n    color: #fff;\r\n}\r\nul.inbox-nav {\r\n    display: inline-block;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n}\r\n.inbox-divider {\r\n    border-bottom: 1px solid #d5d8df;\r\n}\r\nul.inbox-nav li {\r\n    display: inline-block;\r\n    line-height: 45px;\r\n    width: 100%;\r\n}\r\nul.inbox-nav li a {\r\n    color: #6a6a6a;\r\n    display: inline-block;\r\n    line-height: 45px;\r\n    padding: 0 20px;\r\n    width: 100%;\r\n}\r\nul.inbox-nav li a:hover, ul.inbox-nav li.active a, ul.inbox-nav li a:focus {\r\n    background: none repeat scroll 0 0 #d5d7de;\r\n    color: #6a6a6a;\r\n}\r\nul.inbox-nav li a i {\r\n    color: #6a6a6a;\r\n    font-size: 16px;\r\n    padding-right: 10px;\r\n}\r\nul.inbox-nav li a span.label {\r\n    margin-top: 13px;\r\n}\r\nul.labels-info li h4 {\r\n    color: #5c5c5e;\r\n    font-size: 13px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    padding-top: 5px;\r\n    text-transform: uppercase;\r\n}\r\nul.labels-info li {\r\n    margin: 0;\r\n}\r\nul.labels-info li a {\r\n    border-radius: 0;\r\n    color: #6a6a6a;\r\n}\r\nul.labels-info li a:hover, ul.labels-info li a:focus {\r\n    background: none repeat scroll 0 0 #d5d7de;\r\n    color: #6a6a6a;\r\n}\r\nul.labels-info li a i {\r\n    padding-right: 10px;\r\n}\r\n.nav.nav-pills.nav-stacked.labels-info p {\r\n    color: #9d9f9e;\r\n    font-size: 11px;\r\n    margin-bottom: 0;\r\n    padding: 0 22px;\r\n}\r\n.inbox-head {\r\n    background: none repeat scroll 0 0 #35b035;\r\n    border-radius: 0 0px 0 0;\r\n    color: #fff;\r\n    /* min-height: 80px; */\r\n    padding: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n.inbox-head h3 {\r\n    display: inline-block;\r\n    font-weight: 300;\r\n    margin: 0;\r\n    padding-top: 6px;\r\n}\r\n.inbox-head .sr-input {\r\n    border: medium none;\r\n    border-radius: 4px 0 0 4px;\r\n    box-shadow: none;\r\n    color: #8a8a8a;\r\n    float: left;\r\n    height: 40px;\r\n    padding: 0 10px;\r\n}\r\n.inbox-head .sr-btn {\r\n    background: none repeat scroll 0 0 #00a6b2;\r\n    border: medium none;\r\n    border-radius: 0;\r\n    color: #fff;\r\n    height: 40px;\r\n    padding: 0 20px;\r\n}\r\n.table-inbox {\r\n    border: 1px solid #d3d3d3;\r\n    margin-bottom: 0;\r\n}\r\n.table-inbox tr td ,.table-inbox tr th{\r\n    padding: 12px !important;\r\n}\r\n.table-inbox tr td:hover {\r\n    cursor: pointer;\r\n}\r\n.table-inbox tr td .fa-star.inbox-started, .table-inbox tr td .fa-star:hover {\r\n    color: #f78a09;\r\n}\r\n.table-inbox tr td .fa-star {\r\n    color: #d5d5d5;\r\n}\r\n.table-inbox tr.unread td {\r\n    background: none repeat scroll 0 0 #f7f7f7;\r\n    font-weight: 600;\r\n}\r\n.table-inbox tr td.unread {\r\n    background: none repeat scroll 0 0 #f7f7f7;\r\n    font-weight: 600;\r\n}\r\nul.inbox-pagination {\r\n    float: right;\r\n}\r\nul.inbox-pagination li {\r\n    float: left;\r\n}\r\n.mail-option {\r\n    display: inline-block;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n}\r\n.mail-option .chk-all, .mail-option .btn-group {\r\n    margin-right: 5px;\r\n}\r\n.mail-option .chk-all, .mail-option .btn-group a.btn {\r\n    background: none repeat scroll 0 0 #fcfcfc;\r\n    border: 1px solid #e7e7e7;\r\n    border-radius: 3px !important;\r\n    color: #afafaf;\r\n    display: inline-block;\r\n    padding: 5px 10px;\r\n}\r\n.inbox-pagination a.np-btn {\r\n    background: none repeat scroll 0 0 #fcfcfc;\r\n    border: 1px solid #e7e7e7;\r\n    border-radius: 3px !important;\r\n    color: #afafaf;\r\n    display: inline-block;\r\n    padding: 5px 15px;\r\n}\r\n.mail-option .chk-all input[type=\"checkbox\"] {\r\n    margin-top: 0;\r\n}\r\n.mail-option .btn-group a.all {\r\n    border: medium none;\r\n    padding: 0;\r\n}\r\n.inbox-pagination a.np-btn {\r\n    margin-left: 5px;\r\n}\r\n.inbox-pagination li span {\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n    margin-top: 7px;\r\n}\r\n.fileinput-button {\r\n    background: none repeat scroll 0 0 #eeeeee;\r\n    border: 1px solid #e6e6e6;\r\n}\r\n.inbox-body .modal .modal-body input, .inbox-body .modal .modal-body textarea {\r\n    border: 1px solid #e6e6e6;\r\n    box-shadow: none;\r\n}\r\n.btn-send, .btn-send:hover {\r\n    background: none repeat scroll 0 0 #00a8b3;\r\n    color: #fff;\r\n}\r\n.btn-send:hover {\r\n    background: none repeat scroll 0 0 #009da7;\r\n}\r\n.modal-header h4.modal-title {\r\n    font-family: \"Open Sans\",sans-serif;\r\n    font-weight: 300;\r\n}\r\n.modal-body label {\r\n    font-family: \"Open Sans\",sans-serif;\r\n    font-weight: 400;\r\n}\r\n.heading-inbox h4 {\r\n    border-bottom: 1px solid #ddd;\r\n    color: #444;\r\n    font-size: 18px;\r\n    margin-top: 20px;\r\n    padding-bottom: 10px;\r\n}\r\n.sender-info {\r\n    margin-bottom: 20px;\r\n}\r\n.sender-info img {\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n.sender-dropdown {\r\n    background: none repeat scroll 0 0 #eaeaea;\r\n    color: #777;\r\n    font-size: 10px;\r\n    padding: 0 3px;\r\n}\r\n.view-mail a {\r\n    color: #ff6c60;\r\n}\r\n.attachment-mail {\r\n    margin-top: 30px;\r\n}\r\n.attachment-mail ul {\r\n    display: inline-block;\r\n    margin-bottom: 30px;\r\n    width: 100%;\r\n}\r\n.attachment-mail ul li {\r\n    float: left;\r\n    margin-bottom: 10px;\r\n    margin-right: 10px;\r\n    width: 150px;\r\n}\r\n.attachment-mail ul li img {\r\n    width: 100%;\r\n}\r\n.attachment-mail ul li span {\r\n    float: right;\r\n}\r\n.attachment-mail .file-name {\r\n    float: left;\r\n}\r\n.attachment-mail .links {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n.fileinput-button {\r\n    float: left;\r\n    margin-right: 4px;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.fileinput-button input {\r\n    cursor: pointer;\r\n    direction: ltr;\r\n    font-size: 23px;\r\n    margin: 0;\r\n    opacity: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    -webkit-transform: translate(-300px, 0px) scale(4);\r\n            transform: translate(-300px, 0px) scale(4);\r\n}\r\n.fileupload-buttonbar .btn, .fileupload-buttonbar .toggle {\r\n    margin-bottom: 5px;\r\n}\r\n.files .progress {\r\n    width: 200px;\r\n}\r\n.fileupload-processing .fileupload-loading {\r\n    display: block;\r\n}\r\n* html .fileinput-button {\r\n    line-height: 24px;\r\n    margin: 1px -3px 0 0;\r\n}\r\n* + html .fileinput-button {\r\n    margin: 1px 0 0;\r\n    padding: 2px 15px;\r\n}\r\n@media (max-width: 767px) {\r\n.files .btn span {\r\n    display: none;\r\n}\r\n.files .preview * {\r\n    width: 40px;\r\n}\r\n.files .name * {\r\n    display: inline-block;\r\n    width: 80px;\r\n    word-wrap: break-word;\r\n}\r\n.files .progress {\r\n    width: 20px;\r\n}\r\n.files .delete {\r\n    width: 60px;\r\n}\r\n}\r\nul {\r\n    list-style-type: none;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n "

/***/ }),

/***/ "./src/app/account/inbox/inbox.component.html":
/*!****************************************************!*\
  !*** ./src/app/account/inbox/inbox.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-common></app-header-common>\n<div class=\"main-content shop-page main-content-grid\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"breadcrumbs\">\n\t\t\t\t\t<a href=\"user/account\">My Account</a>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-7 col-md-8 col-lg-9 content-offset\">\n\t\t\t\t\t<div class=\"categories-content\">\n\t\t\t\t\t\t<!-- <h4 class=\"shop-title\">Inbox Messages</h4> -->\n\t\t\t\t\t\t<aside class=\"lg-side\">\n\t\t\t\t\t\t\t<div class=\"inbox-head\">\n\t\t\t\t\t\t\t\t<h3>Inbox</h3>\n\t\t\t\t\t\t\t\t<!-- <form action=\"#\" class=\"pull-right position\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-append\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"sr-input\" placeholder=\"Search Mail\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn sr-btn\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"inbox-body\">\n\t\t\t\t\t\t\t   <!-- <div class=\"mail-option\">\n\t\t\t\t\t\t\t\t   <div class=\"chk-all\">\n\t\t\t\t\t\t\t\t\t   <input type=\"checkbox\" class=\"mail-checkbox mail-group-checkbox\">\n\t\t\t\t\t\t\t\t\t   <div class=\"btn-group\">\n\t\t\t\t\t\t\t\t\t\t   <a data-toggle=\"dropdown\" href=\"#\" class=\"btn mini all\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t\t\t   All\n\t\t\t\t\t\t\t\t\t\t\t   <i class=\"fa fa-angle-down \"></i>\n\t\t\t\t\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t\t\t\t\t   <ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"> None</a></li>\n\t\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"> Read</a></li>\n\t\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"> Unread</a></li>\n\t\t\t\t\t\t\t\t\t\t   </ul>\n\t\t\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t\t   </div>\n\t  \n\t\t\t\t\t\t\t\t   <div class=\"btn-group\">\n\t\t\t\t\t\t\t\t\t   <a data-original-title=\"Refresh\" data-placement=\"top\" data-toggle=\"dropdown\" href=\"#\" class=\"btn mini tooltips\">\n\t\t\t\t\t\t\t\t\t\t   <i class=\" fa fa-refresh\"></i>\n\t\t\t\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t\t   <div class=\"btn-group hidden-phone\">\n\t\t\t\t\t\t\t\t\t   <a data-toggle=\"dropdown\" href=\"#\" class=\"btn mini blue\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t\t   More\n\t\t\t\t\t\t\t\t\t\t   <i class=\"fa fa-angle-down \"></i>\n\t\t\t\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t\t\t\t   <ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"><i class=\"fa fa-pencil\"></i> Mark as Read</a></li>\n\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"><i class=\"fa fa-ban\"></i> Spam</a></li>\n\t\t\t\t\t\t\t\t\t\t   <li class=\"divider\"></li>\n\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"><i class=\"fa fa-trash-o\"></i> Delete</a></li>\n\t\t\t\t\t\t\t\t\t   </ul>\n\t\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t\t   <div class=\"btn-group\">\n\t\t\t\t\t\t\t\t\t   <a data-toggle=\"dropdown\" href=\"#\" class=\"btn mini blue\">\n\t\t\t\t\t\t\t\t\t\t   Move to\n\t\t\t\t\t\t\t\t\t\t   <i class=\"fa fa-angle-down \"></i>\n\t\t\t\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t\t\t\t   <ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"><i class=\"fa fa-pencil\"></i> Mark as Read</a></li>\n\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"><i class=\"fa fa-ban\"></i> Spam</a></li>\n\t\t\t\t\t\t\t\t\t\t   <li class=\"divider\"></li>\n\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"><i class=\"fa fa-trash-o\"></i> Delete</a></li>\n\t\t\t\t\t\t\t\t\t   </ul>\n\t\t\t\t\t\t\t\t   </div>\n\t  \n\t\t\t\t\t\t\t\t   <ul class=\"unstyled inbox-pagination\">\n\t\t\t\t\t\t\t\t\t   <li><span>1-50 of 234</span></li>\n\t\t\t\t\t\t\t\t\t   <li>\n\t\t\t\t\t\t\t\t\t\t   <a class=\"np-btn\" href=\"#\"><i class=\"fa fa-angle-left  pagination-left\"></i></a>\n\t\t\t\t\t\t\t\t\t   </li>\n\t\t\t\t\t\t\t\t\t   <li>\n\t\t\t\t\t\t\t\t\t\t   <a class=\"np-btn\" href=\"#\"><i class=\"fa fa-angle-right pagination-right\"></i></a>\n\t\t\t\t\t\t\t\t\t   </li>\n\t\t\t\t\t\t\t\t   </ul>\n\t\t\t\t\t\t\t   </div> -->\n\t\t\t\t\t\t\t\t<table class=\"table table-inbox table-hover\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-left\">From</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-left\">Message</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Date</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t  <tbody>\n\t\t\t\t\t\t\t\t\t<tr  *ngFor=\"let msg of inbox\">\n\t\t\t\t\t\t\t\t\t\t<td [ngClass]=\"{'unread': msg.status, 'view-message': true}\" (click)=\"viewmsg(msg._id)\">{{msg.from.firstname}} {{msg.from.lastname}}</td>\n\t\t\t\t\t\t\t\t\t\t<td [ngClass]=\"{'unread': msg.status, 'view-message': true}\" (click)=\"viewmsg(msg._id)\">{{msg.comment}}</td>\n\t\t\t\t\t\t\t\t\t\t<td [ngClass]=\"{'unread': msg.status, 'view-message': true, 'text-right': true}\" (click)=\"viewmsg(msg._id)\">{{msg.created_at | date:'y-MM-dd'}}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</aside>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n      <!-- sidebar -->\n      <app-sidebar></app-sidebar>\n      <!-- /sidebar-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/account/inbox/inbox.component.ts":
/*!**************************************************!*\
  !*** ./src/app/account/inbox/inbox.component.ts ***!
  \**************************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_msg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/msg.service */ "./src/app/service/msg.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InboxComponent = /** @class */ (function () {
    function InboxComponent(route, router, msg) {
        this.route = route;
        this.router = router;
        this.msg = msg;
        this.inbox = [];
    }
    InboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userid = localStorage.getItem('id');
        // if (typeof userid === undefined) {
        //   this.router.navigate(['user/signin']);
        // }
        this.msg.getInboxMsg(userid)
            .subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.inbox = res.data.inbox;
            }
        }, function (err) {
            console.log(err);
        });
    };
    InboxComponent.prototype.viewmsg = function (id) {
        localStorage.setItem('msgid', id);
        this.router.navigate(['user/account/view']);
    };
    InboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__(/*! ./inbox.component.html */ "./src/app/account/inbox/inbox.component.html"),
            styles: [__webpack_require__(/*! ./inbox.component.css */ "./src/app/account/inbox/inbox.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_msg_service__WEBPACK_IMPORTED_MODULE_2__["MsgService"]])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "./src/app/account/newad/newad.component.css":
/*!***************************************************!*\
  !*** ./src/app/account/newad/newad.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-form .input-info {\r\n    padding: 0 5px;\r\n}\r\n\r\n.buttonblock button {\r\n    margin-bottom:5px;  \r\n    display: block;\r\n}\r\n\r\n.ng-select .ng-placeholder {\r\n    display: none;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/account/newad/newad.component.html":
/*!****************************************************!*\
  !*** ./src/app/account/newad/newad.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-common></app-header-common>\n<div class=\"main-content shop-page main-content-grid\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"breadcrumbs\">\n\t\t\t\t<a href=\"user/account\">My Account</a>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-7 col-md-8 col-lg-9 content-offset\">\n\t\t\t\t\t<div class=\"categories-content\">\n\t\t\t\t\t\t<h4 class=\"shop-title\">Create Ad</h4>\n                        <div class=\"row content-form \">\n\n\n                                <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 info-content\">\n                                    <form [formGroup]=\"newadForm\" class=\"addnewproduct register-form\" (ngSubmit)=\"addnewproduct()\">\n                                    <div class=\"contact-form\">\n                                        <h4 class=\"main-title\">Product Details</h4>\n                                        <h5 class=\"note-title\">( * ) Required fields</h5>\n                                        <div class=\"row\">\n                                                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                                                        <span class=\"label-text\">Category <span>*</span></span>\n                                                        <ng-select [searchable]=\"false\" #categorySelect [items]=\"mainCats\" [selectOnTab]=\"true\" bindLabel=\"catname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Select category\" formControlName=\"category\" (change)=\"getSubcatList($event._id)\">\n                                                </ng-select>\n                                                <div *ngIf=\"!newadForm.valid && forcevalidation\" class=\"error-msg\">\n                                                    <div *ngIf=\"newadForm.controls['category'].pristine && newadForm.controls['category'].errors.required\">Category is required.</div>\n                                                  </div>\n                                                    </div>\n                                                    <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                                                            <span class=\"label-text\">Sub Category <span>*</span></span>\n                                                            <ng-select [searchable]=\"false\" #cropsSelect [items]=\"subCats\" [selectOnTab]=\"true\" bindLabel=\"subcatname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Select subcategory\" formControlName=\"subcatnames\" (change)=\"getSubcatimages($event)\">\n                                                </ng-select>\n                                                <div *ngIf=\"!newadForm.valid && forcevalidation\" class=\"error-msg\">\n                                                        <div *ngIf=\"newadForm.controls['subcatnames'].pristine && newadForm.controls['subcatnames'].errors.required\">Subcategory is required.</div>\n                                                      </div>\n                                                        </div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <!-- <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n                                                <span class=\"label-text\">Crop</span>\n                                                <ng-select [searchable]=\"false\"  #cropsSelect [items]=\"crops\"\n                                                        [selectOnTab]=\"true\"\n                                                        bindLabel=\"cropname\"\n                                                        bindValue=\"_id\"\n                                                        placeholder=\"Select crop\"\n                                                        formControlName=\"crop\">\n                                                        </ng-select>\n                                            </div> -->\n                                            <div class=\"col-xs-12 \">\n                                                <span class=\"label-text\">Region <span>*</span></span>\n\n                                                        <ng-select [searchable]=\"false\"  #regionSelect [items]=\"regions\"\n                                                        [selectOnTab]=\"true\"\n                                                        bindLabel=\"regionname\"\n                                                        bindValue=\"_id\"\n                                                        placeholder=\"Select region\"\n                                                        formControlName=\"region\">\n                                                      </ng-select>\n                                                      <div *ngIf=\"!newadForm.valid && forcevalidation\" class=\"error-msg\">\n                                                            <div *ngIf=\"newadForm.controls['region'].pristine && newadForm.controls['region'].errors.required\">Region is required.</div>\n                                                          </div>\n\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                                                    <span class=\"label-text\">Name <span>*</span></span>\n                                                    <input type=\"text\" class=\"input-info\"  formControlName=\"productname\">\n                                                    <div *ngIf=\"!newadForm.valid && forcevalidation\" class=\"error-msg\">\n                                                            <div *ngIf=\"newadForm.controls['productname'].pristine && newadForm.controls['productname'].errors?.required\">Name is required.</div>\n                                                            <div *ngIf=\"newadForm.controls['productname'].dirty && newadForm.controls['productname'].errors?.required\">Name is required.</div>\n                                                          </div>\n                                                          <!-- <div *ngIf=\"newadForm.controls['productname'].errors && !newadForm.controls['productname'].pristine\" class=\"error-msg\">\n                                                                <div [hidden]=\"!newadForm.controls['productname'].errors.required\">Name is required.</div>\n                                                              </div> -->\n                                            </div>\n\n                                        </div>\n                                        <div class=\"row\">\n                                                <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n                                                        <span class=\"label-text\">Amount For Sale <span>*</span></span>\n                                                        <input type=\"number\" class=\"input-info\"  formControlName=\"saleamount\">\n                                                        <div *ngIf=\"!newadForm.valid && forcevalidation\" class=\"error-msg\">\n                                                                <div *ngIf=\"newadForm.controls['saleamount'].pristine && newadForm.controls['saleamount'].errors.required\">Amount For Sale is required.</div>\n                                                                <div *ngIf=\"newadForm.controls['saleamount'].dirty && newadForm.controls['saleamount'].errors?.required\">Amount For Sale is required.</div>\n                                                              </div>\n                                                </div>\n                                                <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n                                                        <span class=\"label-text\">Amount Unit <span>*</span></span>\n                                                        <ng-select [searchable]=\"false\"  #amountforsale [items]=\"amtforsale\"\n                                                        [selectOnTab]=\"true\"\n                                                        bindLabel=\"amountunit\"\n                                                        bindValue=\"_id\"\n                                                        placeholder=\"Select Amount Unit\"\n                                                        formControlName=\"amtunit\">\n                                                    </ng-select>\n                                                    <div *ngIf=\"!newadForm.valid && forcevalidation\" class=\"error-msg\">\n                                                            <div *ngIf=\"newadForm.controls['amtunit'].pristine && newadForm.controls['amtunit'].errors.required\">Amount Unit is required.</div>\n                                                          </div>\n                                                    </div>\n                                                <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n                                                        <span class=\"label-text\">Price Per Unit <span>*</span></span>\n                                                        <input type=\"number\" class=\"input-info\"  formControlName=\"unitprice\">\n                                                        <div *ngIf=\"!newadForm.valid && forcevalidation\" class=\"error-msg\">\n                                                                <div *ngIf=\"newadForm.controls['unitprice'].pristine && newadForm.controls['unitprice'].errors.required\">Price Per Unit is required.</div>\n                                                                <div *ngIf=\"newadForm.controls['unitprice'].dirty && newadForm.controls['unitprice'].errors?.required\">Price Per Unit is required.</div>\n                                                              </div>\n                                                </div>\n                                        </div>\n\n\n                                    </div>\n                                    <div class=\"group-button\">\n                                            <button href=\"#\" class=\"button submit\" >Submit</button>\n                                          </div>\n\n                                </form>\n                                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"uploadsuccess\">\n                                        <strong>New Ad : </strong> New Ad Posted Successfully\n                                    </div>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 map-content\" *ngIf=\"!!defaultproductimage\">\n                                    <div *ngIf=\"!uploader?.queue?.length\">\n                                            <h3>Default product image</h3>\n                                            <small>If you dont' have product image then this will the default products image.</small>\n                                            <img src=\"{{defaultproductimage}}\" alt=\"default product image\">\n                                    </div>\n                                    <h3>Upload product image</h3>\n                                    <small>I want to upload my product image.</small>\n                                    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showimageerror\">\n                                            <strong>Image Error : </strong> Please upload product image (Allowed Extension: .JPG)\n                                        </div>\n\n\n                                    <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\"  *ngIf=\"uploader?.queue?.length < 1\"/>\n                                    <table class=\"table\" *ngIf=\"uploader?.queue?.length\">\n                                            <thead>\n                                            <tr>\n                                                <th width=\"50%\">Name</th>\n\n\n                                                <th>Status</th>\n                                                <th>Actions</th>\n                                            </tr>\n                                            </thead>\n                                            <tbody>\n                                            <tr *ngFor=\"let item of uploader.queue\">\n                                                    <div class=\"map\" *ngIf=\"uploader?.queue?.length\">\n\n                                                            <img src=\"\" imgPreview [image]=\"item?._file\" class=\"media-object\" />\n                                                            <div class=\"media-body\">\n                                                                   <p>{{ item?.file?.name }}</p>\n                                                               </div>\n                                                           </div>\n\n                                                <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n                                                <!-- <td *ngIf=\"uploader.isHTML5\">\n                                                    <div class=\"progress\" style=\"margin-bottom: 0;\">\n                                                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                                                    </div>\n                                                </td> -->\n                                                <td class=\"text-center\">\n                                                   <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                                                    <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                                                    <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                                                </td>\n                                                <td nowrap class=\"buttonblock\">\n                                                    <button type=\"button\" class=\"btn btn-success btn-xs\"\n                                                            (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                                                        <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                                                    </button>\n                                                    <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                                                            (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                                                        <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                                                    </button>\n                                                    <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                                                            (click)=\"item.remove()\">\n                                                        <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            </tbody>\n                                        </table>\n                                           <div *ngIf=\"uploader?.queue?.length\">\n                                                <div>\n\n                                                    <div class=\"progress\" >\n                                                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n                                </div>\n                            </div>\n                        <!-- <div class=\"product-container auto-clear grid-style equal-container box-has-content\">\n\n                            <h5>Product Image</h5>\n                            <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showimageerror\">\n                                <strong>Image Error : </strong> Please upload product image (Allowed Extension: .JPG) </div>\n\n\n                        </div> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n      <!-- sidebar -->\n      <app-sidebar></app-sidebar>\n      <!-- /sidebar-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/account/newad/newad.component.ts":
/*!**************************************************!*\
  !*** ./src/app/account/newad/newad.component.ts ***!
  \**************************************************/
/*! exports provided: NewadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewadComponent", function() { return NewadComponent; });
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/home.service */ "./src/app/service/home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var URL = '/api/upload';
var NewadComponent = /** @class */ (function () {
    function NewadComponent(productservice, route, router, homepage) {
        var _this = this;
        this.productservice = productservice;
        this.route = route;
        this.router = router;
        this.homepage = homepage;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.showimageerror = false;
        this.uploadsuccess = false;
        this.forcevalidation = false;
        // subCats: Array<any> = [];
        this.selectedCategory = '';
        // this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
        this.uploader.onSuccessItem = function (item, response, status, headers) { return _this.onSuccessItem(item, response, status, headers); };
    }
    NewadComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        this.imagedata = JSON.parse(response); // success server response
        // this.tempimagename = 'assets/images/products/' + this.imagedata.data.filename;
    };
    // onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    //   let error = JSON.parse(response); //error server response
    // }
    NewadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homepage.getCatList().subscribe(function (res) {
            if (res.status === 'success') {
                _this.mainCats = res.data.category;
                if (_this.mainCats.length > 0) {
                    _this.selectedCategory = _this.mainCats[0]._id;
                }
            }
        }, function (err) {
            console.log(err);
        });
        this.createForm();
        var userid = localStorage.getItem('id');
        if (!userid) {
            this.router.navigate(['user/signin']);
        }
        // croplist
        // this.homepage.getCropList()
        // .subscribe(res => {
        //    if (res.status === 'success') {
        //      this.subcatsnames = res.data.crops;
        //    }
        //   }, (err) => {
        //     console.log(err);
        //   });
        // region list
        this.homepage.getRegionList()
            .subscribe(function (res) {
            if (res.status === 'success') {
                // console.log(res);
                _this.regions = res.data.regions;
            }
        }, function (err) {
            console.log(err);
        });
        // amounit list
        this.homepage.getAmountUnitList()
            .subscribe(function (res) {
            if (res.status === 'success') {
                // console.log(res);
                _this.amtforsale = res.data.amountunit;
            }
        }, function (err) {
            console.log(err);
        });
    };
    NewadComponent.prototype.getSubcatList = function (catid) {
        var _this = this;
        console.log(catid);
        this.homepage.getSubcatListByCatID(catid).subscribe(function (res) {
            if (res.status === 'success') {
                _this.subCats = res.data.subcategory;
            }
        }, function (err) {
            console.log(err);
        });
    };
    NewadComponent.prototype.getSubcatimages = function (e) {
        this.productimage = e.defaultimage;
        this.defaultproductimage = e.defaultimage;
    };
    NewadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    NewadComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    NewadComponent.prototype.createForm = function () {
        this.newadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            // tslint:disable-next-line
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            subcatnames: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            amtunit: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            unitprice: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            region: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            saleamount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            productname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        }); // remove updateon to change the event to onchange
    };
    NewadComponent.prototype.addnewproduct = function () {
        var _this = this;
        var userid = localStorage.getItem('id');
        // if (!userid) {
        //   this.router.navigate(['user/signin']);
        //   }
        var productimage;
        if (typeof this.imagedata !== undefined && this.imagedata) {
            productimage = this.imagedata.data;
        }
        else {
            productimage = this.productimage;
        }
        this.forcevalidation = true;
        var newproduct = {
            'subcat': this.newadForm.value.subcatnames,
            'region': this.newadForm.value.region,
            'saleamount': this.newadForm.value.saleamount,
            'amtunit': this.newadForm.value.amtunit,
            'unitprice': this.newadForm.value.unitprice,
            'productname': this.newadForm.value.productname,
            'productimage': productimage,
            'userid': userid
        };
        if (this.newadForm.valid) {
            this.productservice.addNewProduct(newproduct).subscribe(function (res) {
                if (res['status'] === 'success') {
                    _this.showimageerror = false;
                    _this.uploadsuccess = true;
                    _this.uploader.queue.length = 0;
                    _this.forcevalidation = false;
                    _this.newadForm.reset();
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    NewadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newad',
            template: __webpack_require__(/*! ./newad.component.html */ "./src/app/account/newad/newad.component.html"),
            styles: [__webpack_require__(/*! ./newad.component.css */ "./src/app/account/newad/newad.component.css")]
        }),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_0__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]])
    ], NewadComponent);
    return NewadComponent;
}());



/***/ }),

/***/ "./src/app/account/popup/popup.component.css":
/*!***************************************************!*\
  !*** ./src/app/account/popup/popup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.close{\r\n    cursor: pointer;\r\n    /* background: 0 0; */\r\n    border: 0;\r\n    position: relative;\r\n    right: -28px;\r\n    top: -33px;\r\n    background: white;\r\n    padding: 5px 10px;\r\n    border-radius: 100%;\r\n    text-shadow: none;\r\n    opacity: 1;\r\n    outline: none;  \r\n}\r\n.modal-body .btn {\r\n    margin-right:25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/account/popup/popup.component.html":
/*!****************************************************!*\
  !*** ./src/app/account/popup/popup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"modal-content modal-md text-center\">\n    <div class=\"modal-body\">\n        <!-- <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n         </button> -->\n      <!-- <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h4>Are you sure to delete this item?</h4>\n            {{modaldata | json}}\n        </div>\n       \n      </div> -->\n      <h4>Are you sure to delete this item?</h4>\n    <button type=\"button\" class=\"btn btn-success\" (click)=\"confirmdelete()\" >Yes</button>  \n    <button type=\"button\" class=\"btn btn-info\" (click)=\"bsModalRef.hide()\" >No</button>\n      <!-- <div class=\"row\">\n          <div class=\"col-sm-6 text-right\">\n              <button class=\"btn btn-success\" (click)=\"confirmdelete()\">Yes</button>\n          </div>\n          <div class=\"col-sm-6 text-left\">\n              <button class=\"btn btn-info\" (click)=\"bsModalRef.hide()\">No</button>\n          </div>\n      </div> -->\n    </div>\n    </div>\n    \n    "

/***/ }),

/***/ "./src/app/account/popup/popup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/account/popup/popup.component.ts ***!
  \**************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopupComponent = /** @class */ (function () {
    function PopupComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.modaldata = [];
    }
    PopupComponent.prototype.ngOnInit = function () {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    };
    PopupComponent.prototype.confirmdelete = function () {
        this.onClose.next(true);
        this.bsModalRef.hide();
    };
    PopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/account/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.css */ "./src/app/account/popup/popup.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/account/quickview/quickview.component.css":
/*!***********************************************************!*\
  !*** ./src/app/account/quickview/quickview.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.close{\r\n    cursor: pointer;\r\n    /* background: 0 0; */\r\n    border: 0;\r\n    position: relative;\r\n    right: -28px;\r\n    top: -33px;\r\n    background: white;\r\n    padding: 5px 10px;\r\n    border-radius: 100%;\r\n    text-shadow: none;\r\n    opacity: 1;\r\n    outline: none;  \r\n}\r\n"

/***/ }),

/***/ "./src/app/account/quickview/quickview.component.html":
/*!************************************************************!*\
  !*** ./src/app/account/quickview/quickview.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal-header\">\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div> -->\n\n\n    <div class=\"modal-content modal-lg\">\n<div class=\"modal-body\">\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n     </button>\n  <!-- {{modaldata | json}} -->\n  <!-- [ \"Green Okra\", \"file-1531900835736.jpg\", \"100\", \"5b4debdd5580971bc49e89d4\", \"22\" ] -->\n  <!-- <ul *ngIf=\"list.length\">\n    <li *ngFor=\"let item of list\">{{item}}</li>\n  </ul> -->\n  <div class=\"row\">\n    <div class=\"details-info col-xs-12 col-sm-6\">\n      <a href=\"javascript:void(0)\" (click)=\"showproductdetails(item._id)\" class=\"product-name\">\n        <img src=\"{{modaldata[1]}}\" alt=\"{{modaldata[0]}}\" />\n        </a>\n    </div>\n    <div class=\"details-info col-xs-12 col-sm-6\">\n      <a href=\"detail.html\" class=\"product-name\">{{modaldata[0]}}</a>\n\n      <div class=\"price\">\n        <span>$ {{modaldata[2]}}</span>\n      </div>\n\n      <div class=\"group-button\">\n        <div class=\"inner\">\n          <a href=\"#\" class=\"add-to-cart\">\n            <span class=\"text\">Archive</span>\n            <span class=\"icon\">\n              <i class=\"fa fa-cart-arrow-down\" aria-hidden=\"true\"></i>\n            </span>\n          </a>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/account/quickview/quickview.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/account/quickview/quickview.component.ts ***!
  \**********************************************************/
/*! exports provided: QuickviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickviewComponent", function() { return QuickviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuickviewComponent = /** @class */ (function () {
    function QuickviewComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.modaldata = [];
    }
    QuickviewComponent.prototype.ngOnInit = function () {
        // this.list.push('PROFIT!!!');
    };
    QuickviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quickview',
            template: __webpack_require__(/*! ./quickview.component.html */ "./src/app/account/quickview/quickview.component.html"),
            styles: [__webpack_require__(/*! ./quickview.component.css */ "./src/app/account/quickview/quickview.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], QuickviewComponent);
    return QuickviewComponent;
}());



/***/ }),

/***/ "./src/app/account/sent/sent.component.css":
/*!*************************************************!*\
  !*** ./src/app/account/sent/sent.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mail-box {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    display: table;\r\n    table-layout: fixed;\r\n    width: 100%;\r\n}\r\n.mail-box aside {\r\n    display: table-cell;\r\n    float: none;\r\n    height: 100%;\r\n    padding: 0;\r\n    vertical-align: top;\r\n}\r\n.mail-box .sm-side {\r\n    background: none repeat scroll 0 0 #e5e8ef;\r\n    border-radius: 4px 0 0 4px;\r\n    width: 25%;\r\n}\r\n.mail-box .lg-side {\r\n    background: none repeat scroll 0 0 #fff;\r\n    border-radius: 0 4px 4px 0;\r\n    width: 75%;\r\n}\r\n.mail-box .sm-side .user-head {\r\n    background: none repeat scroll 0 0 #00a8b3;\r\n    border-radius: 4px 0 0;\r\n    color: #fff;\r\n    min-height: 80px;\r\n    padding: 10px;\r\n}\r\n.user-head .inbox-avatar {\r\n    float: left;\r\n    width: 65px;\r\n}\r\n.user-head .inbox-avatar img {\r\n    border-radius: 4px;\r\n}\r\n.user-head .user-name {\r\n    display: inline-block;\r\n    margin: 0 0 0 10px;\r\n}\r\n.user-head .user-name h5 {\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    margin-bottom: 0;\r\n    margin-top: 15px;\r\n}\r\n.user-head .user-name h5 a {\r\n    color: #fff;\r\n}\r\n.user-head .user-name span a {\r\n    color: #87e2e7;\r\n    font-size: 12px;\r\n}\r\na.mail-dropdown {\r\n    background: none repeat scroll 0 0 #80d3d9;\r\n    border-radius: 2px;\r\n    color: #01a7b3;\r\n    font-size: 10px;\r\n    margin-top: 20px;\r\n    padding: 3px 5px;\r\n}\r\n.inbox-body {\r\n    padding: 2px;\r\n}\r\n.btn-compose {\r\n    background: none repeat scroll 0 0 #ff6c60;\r\n    color: #fff;\r\n    padding: 12px 0;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n.btn-compose:hover {\r\n    background: none repeat scroll 0 0 #f5675c;\r\n    color: #fff;\r\n}\r\nul.inbox-nav {\r\n    display: inline-block;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 100%;\r\n}\r\n.inbox-divider {\r\n    border-bottom: 1px solid #d5d8df;\r\n}\r\nul.inbox-nav li {\r\n    display: inline-block;\r\n    line-height: 45px;\r\n    width: 100%;\r\n}\r\nul.inbox-nav li a {\r\n    color: #6a6a6a;\r\n    display: inline-block;\r\n    line-height: 45px;\r\n    padding: 0 20px;\r\n    width: 100%;\r\n}\r\nul.inbox-nav li a:hover, ul.inbox-nav li.active a, ul.inbox-nav li a:focus {\r\n    background: none repeat scroll 0 0 #d5d7de;\r\n    color: #6a6a6a;\r\n}\r\nul.inbox-nav li a i {\r\n    color: #6a6a6a;\r\n    font-size: 16px;\r\n    padding-right: 10px;\r\n}\r\nul.inbox-nav li a span.label {\r\n    margin-top: 13px;\r\n}\r\nul.labels-info li h4 {\r\n    color: #5c5c5e;\r\n    font-size: 13px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    padding-top: 5px;\r\n    text-transform: uppercase;\r\n}\r\nul.labels-info li {\r\n    margin: 0;\r\n}\r\nul.labels-info li a {\r\n    border-radius: 0;\r\n    color: #6a6a6a;\r\n}\r\nul.labels-info li a:hover, ul.labels-info li a:focus {\r\n    background: none repeat scroll 0 0 #d5d7de;\r\n    color: #6a6a6a;\r\n}\r\nul.labels-info li a i {\r\n    padding-right: 10px;\r\n}\r\n.nav.nav-pills.nav-stacked.labels-info p {\r\n    color: #9d9f9e;\r\n    font-size: 11px;\r\n    margin-bottom: 0;\r\n    padding: 0 22px;\r\n}\r\n.inbox-head {\r\n    background: none repeat scroll 0 0 #35b035;\r\n    border-radius: 0 0px 0 0;\r\n    color: #fff;\r\n    /* min-height: 80px; */\r\n    padding: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n.inbox-head h3 {\r\n    display: inline-block;\r\n    font-weight: 300;\r\n    margin: 0;\r\n    padding-top: 6px;\r\n}\r\n.inbox-head .sr-input {\r\n    border: medium none;\r\n    border-radius: 4px 0 0 4px;\r\n    box-shadow: none;\r\n    color: #8a8a8a;\r\n    float: left;\r\n    height: 40px;\r\n    padding: 0 10px;\r\n}\r\n.inbox-head .sr-btn {\r\n    background: none repeat scroll 0 0 #00a6b2;\r\n    border: medium none;\r\n    border-radius: 0;\r\n    color: #fff;\r\n    height: 40px;\r\n    padding: 0 20px;\r\n}\r\n.table-inbox {\r\n    border: 1px solid #d3d3d3;\r\n    margin-bottom: 0;\r\n}\r\n.table-inbox tr td ,.table-inbox tr th{\r\n    padding: 12px !important;\r\n}\r\n.table-inbox tr td:hover {\r\n    cursor: pointer;\r\n}\r\n.table-inbox tr td .fa-star.inbox-started, .table-inbox tr td .fa-star:hover {\r\n    color: #f78a09;\r\n}\r\n.table-inbox tr td .fa-star {\r\n    color: #d5d5d5;\r\n}\r\n.table-inbox tr.unread td {\r\n    background: none repeat scroll 0 0 #f7f7f7;\r\n    font-weight: 600;\r\n}\r\n.table-inbox tr td.unread {\r\n    background: none repeat scroll 0 0 #f7f7f7;\r\n    font-weight: 600;\r\n}\r\nul.inbox-pagination {\r\n    float: right;\r\n}\r\nul.inbox-pagination li {\r\n    float: left;\r\n}\r\n.mail-option {\r\n    display: inline-block;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n}\r\n.mail-option .chk-all, .mail-option .btn-group {\r\n    margin-right: 5px;\r\n}\r\n.mail-option .chk-all, .mail-option .btn-group a.btn {\r\n    background: none repeat scroll 0 0 #fcfcfc;\r\n    border: 1px solid #e7e7e7;\r\n    border-radius: 3px !important;\r\n    color: #afafaf;\r\n    display: inline-block;\r\n    padding: 5px 10px;\r\n}\r\n.inbox-pagination a.np-btn {\r\n    background: none repeat scroll 0 0 #fcfcfc;\r\n    border: 1px solid #e7e7e7;\r\n    border-radius: 3px !important;\r\n    color: #afafaf;\r\n    display: inline-block;\r\n    padding: 5px 15px;\r\n}\r\n.mail-option .chk-all input[type=\"checkbox\"] {\r\n    margin-top: 0;\r\n}\r\n.mail-option .btn-group a.all {\r\n    border: medium none;\r\n    padding: 0;\r\n}\r\n.inbox-pagination a.np-btn {\r\n    margin-left: 5px;\r\n}\r\n.inbox-pagination li span {\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n    margin-top: 7px;\r\n}\r\n.fileinput-button {\r\n    background: none repeat scroll 0 0 #eeeeee;\r\n    border: 1px solid #e6e6e6;\r\n}\r\n.inbox-body .modal .modal-body input, .inbox-body .modal .modal-body textarea {\r\n    border: 1px solid #e6e6e6;\r\n    box-shadow: none;\r\n}\r\n.btn-send, .btn-send:hover {\r\n    background: none repeat scroll 0 0 #00a8b3;\r\n    color: #fff;\r\n}\r\n.btn-send:hover {\r\n    background: none repeat scroll 0 0 #009da7;\r\n}\r\n.modal-header h4.modal-title {\r\n    font-family: \"Open Sans\",sans-serif;\r\n    font-weight: 300;\r\n}\r\n.modal-body label {\r\n    font-family: \"Open Sans\",sans-serif;\r\n    font-weight: 400;\r\n}\r\n.heading-inbox h4 {\r\n    border-bottom: 1px solid #ddd;\r\n    color: #444;\r\n    font-size: 18px;\r\n    margin-top: 20px;\r\n    padding-bottom: 10px;\r\n}\r\n.sender-info {\r\n    margin-bottom: 20px;\r\n}\r\n.sender-info img {\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n.sender-dropdown {\r\n    background: none repeat scroll 0 0 #eaeaea;\r\n    color: #777;\r\n    font-size: 10px;\r\n    padding: 0 3px;\r\n}\r\n.view-mail a {\r\n    color: #ff6c60;\r\n}\r\n.attachment-mail {\r\n    margin-top: 30px;\r\n}\r\n.attachment-mail ul {\r\n    display: inline-block;\r\n    margin-bottom: 30px;\r\n    width: 100%;\r\n}\r\n.attachment-mail ul li {\r\n    float: left;\r\n    margin-bottom: 10px;\r\n    margin-right: 10px;\r\n    width: 150px;\r\n}\r\n.attachment-mail ul li img {\r\n    width: 100%;\r\n}\r\n.attachment-mail ul li span {\r\n    float: right;\r\n}\r\n.attachment-mail .file-name {\r\n    float: left;\r\n}\r\n.attachment-mail .links {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n.fileinput-button {\r\n    float: left;\r\n    margin-right: 4px;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.fileinput-button input {\r\n    cursor: pointer;\r\n    direction: ltr;\r\n    font-size: 23px;\r\n    margin: 0;\r\n    opacity: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    -webkit-transform: translate(-300px, 0px) scale(4);\r\n            transform: translate(-300px, 0px) scale(4);\r\n}\r\n.fileupload-buttonbar .btn, .fileupload-buttonbar .toggle {\r\n    margin-bottom: 5px;\r\n}\r\n.files .progress {\r\n    width: 200px;\r\n}\r\n.fileupload-processing .fileupload-loading {\r\n    display: block;\r\n}\r\n* html .fileinput-button {\r\n    line-height: 24px;\r\n    margin: 1px -3px 0 0;\r\n}\r\n* + html .fileinput-button {\r\n    margin: 1px 0 0;\r\n    padding: 2px 15px;\r\n}\r\n@media (max-width: 767px) {\r\n.files .btn span {\r\n    display: none;\r\n}\r\n.files .preview * {\r\n    width: 40px;\r\n}\r\n.files .name * {\r\n    display: inline-block;\r\n    width: 80px;\r\n    word-wrap: break-word;\r\n}\r\n.files .progress {\r\n    width: 20px;\r\n}\r\n.files .delete {\r\n    width: 60px;\r\n}\r\n}\r\nul {\r\n    list-style-type: none;\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n "

/***/ }),

/***/ "./src/app/account/sent/sent.component.html":
/*!**************************************************!*\
  !*** ./src/app/account/sent/sent.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-common></app-header-common>\n<div class=\"main-content shop-page main-content-grid\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"breadcrumbs\">\n\t\t\t\t\t<a href=\"user/account\">My Account</a>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-7 col-md-8 col-lg-9 content-offset\">\n\t\t\t\t\t<div class=\"categories-content\">\n\t\t\t\t\t\t<!-- <h4 class=\"shop-title\">Inbox Messages</h4> -->\n\t\t\t\t\t\t<aside class=\"lg-side\">\n\t\t\t\t\t\t\t<div class=\"inbox-head\">\n\t\t\t\t\t\t\t\t<h3>Sent</h3>\n\t\t\t\t\t\t\t\t<!-- <form action=\"#\" class=\"pull-right position\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-append\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"sr-input\" placeholder=\"Search Mail\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn sr-btn\" type=\"button\"><i class=\"fa fa-search\"></i></button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"inbox-body\">\n\t\t\t\t\t\t\t   <!-- <div class=\"mail-option\">\n\t\t\t\t\t\t\t\t   <div class=\"chk-all\">\n\t\t\t\t\t\t\t\t\t   <input type=\"checkbox\" class=\"mail-checkbox mail-group-checkbox\">\n\t\t\t\t\t\t\t\t\t   <div class=\"btn-group\">\n\t\t\t\t\t\t\t\t\t\t   <a data-toggle=\"dropdown\" href=\"#\" class=\"btn mini all\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t\t\t   All\n\t\t\t\t\t\t\t\t\t\t\t   <i class=\"fa fa-angle-down \"></i>\n\t\t\t\t\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t\t\t\t\t   <ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"> None</a></li>\n\t\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"> Read</a></li>\n\t\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"> Unread</a></li>\n\t\t\t\t\t\t\t\t\t\t   </ul>\n\t\t\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t\t   </div>\n\t  \n\t\t\t\t\t\t\t\t   <div class=\"btn-group\">\n\t\t\t\t\t\t\t\t\t   <a data-original-title=\"Refresh\" data-placement=\"top\" data-toggle=\"dropdown\" href=\"#\" class=\"btn mini tooltips\">\n\t\t\t\t\t\t\t\t\t\t   <i class=\" fa fa-refresh\"></i>\n\t\t\t\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t\t   <div class=\"btn-group hidden-phone\">\n\t\t\t\t\t\t\t\t\t   <a data-toggle=\"dropdown\" href=\"#\" class=\"btn mini blue\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t\t   More\n\t\t\t\t\t\t\t\t\t\t   <i class=\"fa fa-angle-down \"></i>\n\t\t\t\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t\t\t\t   <ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"><i class=\"fa fa-pencil\"></i> Mark as Read</a></li>\n\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"><i class=\"fa fa-ban\"></i> Spam</a></li>\n\t\t\t\t\t\t\t\t\t\t   <li class=\"divider\"></li>\n\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"><i class=\"fa fa-trash-o\"></i> Delete</a></li>\n\t\t\t\t\t\t\t\t\t   </ul>\n\t\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t\t   <div class=\"btn-group\">\n\t\t\t\t\t\t\t\t\t   <a data-toggle=\"dropdown\" href=\"#\" class=\"btn mini blue\">\n\t\t\t\t\t\t\t\t\t\t   Move to\n\t\t\t\t\t\t\t\t\t\t   <i class=\"fa fa-angle-down \"></i>\n\t\t\t\t\t\t\t\t\t   </a>\n\t\t\t\t\t\t\t\t\t   <ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"><i class=\"fa fa-pencil\"></i> Mark as Read</a></li>\n\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"><i class=\"fa fa-ban\"></i> Spam</a></li>\n\t\t\t\t\t\t\t\t\t\t   <li class=\"divider\"></li>\n\t\t\t\t\t\t\t\t\t\t   <li><a href=\"#\"><i class=\"fa fa-trash-o\"></i> Delete</a></li>\n\t\t\t\t\t\t\t\t\t   </ul>\n\t\t\t\t\t\t\t\t   </div>\n\t  \n\t\t\t\t\t\t\t\t   <ul class=\"unstyled inbox-pagination\">\n\t\t\t\t\t\t\t\t\t   <li><span>1-50 of 234</span></li>\n\t\t\t\t\t\t\t\t\t   <li>\n\t\t\t\t\t\t\t\t\t\t   <a class=\"np-btn\" href=\"#\"><i class=\"fa fa-angle-left  pagination-left\"></i></a>\n\t\t\t\t\t\t\t\t\t   </li>\n\t\t\t\t\t\t\t\t\t   <li>\n\t\t\t\t\t\t\t\t\t\t   <a class=\"np-btn\" href=\"#\"><i class=\"fa fa-angle-right pagination-right\"></i></a>\n\t\t\t\t\t\t\t\t\t   </li>\n\t\t\t\t\t\t\t\t   </ul>\n\t\t\t\t\t\t\t   </div> -->\n\t\t\t\t\t\t\t\t<table class=\"table table-inbox table-hover\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-left\">From</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-left\">Message</th>\n\t\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Date</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t  <tbody>\n\t\t\t\t\t\t\t\t\t<tr  *ngFor=\"let msg of sentmsg\">\n\t\t\t\t\t\t\t\t\t\t<td [ngClass]=\"{'unread': msg.status, 'view-message': true}\" (click)=\"viewmsg(msg._id)\">{{msg.from.firstname}} {{msg.from.lastname}}</td>\n\t\t\t\t\t\t\t\t\t\t<td [ngClass]=\"{'unread': msg.status, 'view-message': true}\" (click)=\"viewmsg(msg._id)\">{{msg.comment}}</td>\n\t\t\t\t\t\t\t\t\t\t<td [ngClass]=\"{'unread': msg.status, 'view-message': true, 'text-right': true}\" (click)=\"viewmsg(msg._id)\">{{msg.created_at | date:'y-MM-dd'}}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</aside>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n      <!-- sidebar -->\n      <app-sidebar></app-sidebar>\n      <!-- /sidebar-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/account/sent/sent.component.ts":
/*!************************************************!*\
  !*** ./src/app/account/sent/sent.component.ts ***!
  \************************************************/
/*! exports provided: SentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentComponent", function() { return SentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_msg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/msg.service */ "./src/app/service/msg.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SentComponent = /** @class */ (function () {
    function SentComponent(route, router, msg) {
        this.route = route;
        this.router = router;
        this.msg = msg;
        this.sentmsg = [];
    }
    SentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userid = localStorage.getItem('id');
        // if (typeof userid === undefined) {
        //   this.router.navigate(['user/signin']);
        // }
        this.msg.getSentMsg(userid)
            .subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.sentmsg = res.data.sentmsg;
            }
        }, function (err) {
            console.log(err);
        });
    };
    SentComponent.prototype.viewmsg = function (id) {
        localStorage.setItem('msgid', id);
        this.router.navigate(['user/account/viewsent']);
    };
    SentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sent',
            template: __webpack_require__(/*! ./sent.component.html */ "./src/app/account/sent/sent.component.html"),
            styles: [__webpack_require__(/*! ./sent.component.css */ "./src/app/account/sent/sent.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_msg_service__WEBPACK_IMPORTED_MODULE_2__["MsgService"]])
    ], SentComponent);
    return SentComponent;
}());



/***/ }),

/***/ "./src/app/account/sentmsg/sentmsg.component.css":
/*!*******************************************************!*\
  !*** ./src/app/account/sentmsg/sentmsg.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-row {\r\n    margin-bottom: 14px;\r\n}\r\n\r\n.user-row:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.dropdown-user {\r\n    margin: 13px 0;\r\n    padding: 5px;\r\n    height: 100%;\r\n}\r\n\r\n.dropdown-user:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.table-user-information > tbody > tr {\r\n    border-top: 1px solid rgb(221, 221, 221);\r\n}\r\n\r\n.table-user-information > tbody > tr:first-child {\r\n    border-top: 0;\r\n}\r\n\r\n.table-user-information > tbody > tr > td {\r\n    border-top: 0;\r\n}\r\n\r\n.toppad\r\n{margin-top:20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/account/sentmsg/sentmsg.component.html":
/*!********************************************************!*\
  !*** ./src/app/account/sentmsg/sentmsg.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-common></app-header-common>\n<div class=\"main-content shop-page main-content-grid\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"breadcrumbs\">\n          <a href=\"user/account\">My Account</a>\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngIf=\"msgs\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-7 col-md-8 col-lg-9 content-offset\">\n\t\t\t\t\t<div class=\"categories-content\">\n\t\t\t\t\t\t<h4 class=\"shop-title\">Message</h4>\n            <div class=\"panel panel-info\">\n              <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">To : {{msgs?.sellerid?.firstname}}  {{msgs?.sellerid?.lastname}} < {{ msgs?.sellerid?.email }} > <span *ngIf=\"!msgs?.sellerid?.firstname\">Loading...</span></h3>\n              </div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-3 col-lg-3 \" align=\"center\"> <img alt=\"User Pic\" src=\"{{msgs?.productid?.pimage}}\" class=\"img-responsive\"> </div>\n\n                  <div class=\" col-md-9 col-lg-9 \">\n                    <table class=\"table table-user-information\">\n                      <tbody>\n\n                        <tr>\n                          <td>Name:</td>\n                          <td>{{msgs?.sellerid?.firstname}}  {{msgs?.sellerid?.lastname}}</td>\n                        </tr>\n                        <tr>\n                          <td>Email</td>\n                          <td>{{ msgs?.sellerid?.email }}</td>\n                        </tr>\n                        <tr>\n                          <td>Message</td>\n                          <td>{{ msgs?.comment }}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n\n                    <!-- <a href=\"#\" class=\"btn btn-primary\">any event</a>\n                    <a href=\"#\" class=\"btn btn-primary\">any event</a> -->\n                  </div>\n                </div>\n              </div>\n                   <div class=\"panel-footer\">\n                          <!-- <a data-original-title=\"Broadcast Message\" data-toggle=\"tooltip\" type=\"button\" class=\"btn btn-sm btn-primary\"><i class=\"glyphicon glyphicon-envelope\"></i></a>\n                          <span class=\"pull-right\">\n                              <a href=\"edit.html\" data-original-title=\"Edit this user\" data-toggle=\"tooltip\" type=\"button\" class=\"btn btn-sm btn-warning\"><i class=\"glyphicon glyphicon-edit\"></i></a>\n                              <a data-original-title=\"Remove this user\" data-toggle=\"tooltip\" type=\"button\" class=\"btn btn-sm btn-danger\"><i class=\"glyphicon glyphicon-remove\"></i></a>\n                          </span> -->\n                      </div>\n\n            </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n      <!-- sidebar -->\n      <app-sidebar></app-sidebar>\n      <!-- /sidebar-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/account/sentmsg/sentmsg.component.ts":
/*!******************************************************!*\
  !*** ./src/app/account/sentmsg/sentmsg.component.ts ***!
  \******************************************************/
/*! exports provided: SentmsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentmsgComponent", function() { return SentmsgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_msg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/msg.service */ "./src/app/service/msg.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SentmsgComponent = /** @class */ (function () {
    function SentmsgComponent(route, router, msg) {
        this.route = route;
        this.router = router;
        this.msg = msg;
        this.msgs = [];
    }
    SentmsgComponent.prototype.ngOnInit = function () {
        var _this = this;
        var msgid = localStorage.getItem('msgid');
        if (msgid) {
            this.msg.getMsg(msgid, 'sent/')
                .subscribe(function (res) {
                if (res['status'] === 'success') {
                    _this.msgs = res.data.msgs[0];
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.router.navigate(['user/account/sent']);
        }
    };
    SentmsgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sentmsg',
            template: __webpack_require__(/*! ./sentmsg.component.html */ "./src/app/account/sentmsg/sentmsg.component.html"),
            styles: [__webpack_require__(/*! ./sentmsg.component.css */ "./src/app/account/sentmsg/sentmsg.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_msg_service__WEBPACK_IMPORTED_MODULE_2__["MsgService"]])
    ], SentmsgComponent);
    return SentmsgComponent;
}());



/***/ }),

/***/ "./src/app/account/sidebar/sidebar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/account/sidebar/sidebar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar .label-text {\r\n    padding-left: 5px;\r\n}"

/***/ }),

/***/ "./src/app/account/sidebar/sidebar.component.html":
/*!********************************************************!*\
  !*** ./src/app/account/sidebar/sidebar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-5 col-md-4 col-lg-3 sidebar\">\n    <div class=\"widget widget-categories\">\n        <h5 class=\"widgettitle\">New Ad</h5>\n        <ul class=\"list-categories dashboardmenu\">\n          <li>\n              <i class=\"fa fa-plus-square\"></i> <a  [routerLink]=\"['../newad']\" class=\"label-text\">Create New Ad</a>\n          </li>\n        </ul>\n      </div>\n  <div class=\"widget widget-categories\">\n    <h5 class=\"widgettitle\">Ads</h5>\n    <ul class=\"list-categories dashboardmenu\">\n            <li>\n                    <i class=\"fa fa-edit\"></i> <a  [routerLink]=\"['../editads']\" class=\"label-text\"> Edit Ads</a>\n                </li>\n      <li>\n          <i class=\"fa fa-eye\"></i> <a  [routerLink]=\"['../activeads']\" class=\"label-text\"> Active Ads</a>\n      </li>\n      <li>\n          <i class=\"fa fa-archive\"></i> <a  [routerLink]=\"['../archiveads']\" class=\"label-text\">Archive</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"widget widget-categories\">\n    <h5 class=\"widgettitle\">Messages</h5>\n    <ul class=\"list-categories\">\n        <li>\n            <i class=\"fa fa-inbox\"></i> <a  [routerLink]=\"['../inbox']\"  class=\"label-text\"> Inbox</a>\n        </li>\n        <li>\n            <i class=\"fa fa-paper-plane\"></i> <a  [routerLink]=\"['../sent']\" class=\"label-text\">Sent</a>\n        </li>\n    </ul>\n  </div>\n  <div class=\"widget widget-categories\">\n      <h5 class=\"widgettitle\">Profile</h5>\n      <ul class=\"list-categories dashboardmenu\">\n        <li>\n            <i class=\"fa fa-user\"></i> <a  [routerLink]=\"['../profile']\" class=\"label-text\">Edit Profile</a>\n        </li>\n        <li>\n                <i class=\"fa fa-user\"></i> <a  [routerLink]=\"['../changepassword']\" class=\"label-text\">Change Password</a>\n            </li>\n      </ul>\n    </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/account/sidebar/sidebar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/account/sidebar/sidebar.component.ts ***!
  \******************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/account/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/account/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/account/viewmsg/viewmsg.component.css":
/*!*******************************************************!*\
  !*** ./src/app/account/viewmsg/viewmsg.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-row {\r\n    margin-bottom: 14px;\r\n}\r\n\r\n.user-row:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.dropdown-user {\r\n    margin: 13px 0;\r\n    padding: 5px;\r\n    height: 100%;\r\n}\r\n\r\n.dropdown-user:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.table-user-information > tbody > tr {\r\n    border-top: 1px solid rgb(221, 221, 221);\r\n}\r\n\r\n.table-user-information > tbody > tr:first-child {\r\n    border-top: 0;\r\n}\r\n\r\n.table-user-information > tbody > tr > td {\r\n    border-top: 0;\r\n}\r\n\r\n.toppad\r\n{margin-top:20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/account/viewmsg/viewmsg.component.html":
/*!********************************************************!*\
  !*** ./src/app/account/viewmsg/viewmsg.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-common></app-header-common>\n<div class=\"main-content shop-page main-content-grid\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"breadcrumbs\">\n          <a href=\"user/account\">My Account</a>\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngIf=\"msgs\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-7 col-md-8 col-lg-9 content-offset\">\n\t\t\t\t\t<div class=\"categories-content\">\n\t\t\t\t\t\t<h4 class=\"shop-title\">Message</h4>\n            <div class=\"panel panel-info\">\n              <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">From : {{msgs?.from?.firstname}}  {{msgs?.from?.lastname}} < {{ msgs?.from?.email }} > <span *ngIf=\"!msgs?.from?.firstname\">Loading...</span></h3>\n              </div>\n              <div class=\"panel-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-3 col-lg-3 \" align=\"center\"> <img alt=\"User Pic\" src=\"{{msgs?.productid?.pimage}}\" class=\"img-responsive\"> </div>\n\n                  <div class=\" col-md-9 col-lg-9 \">\n                    <table class=\"table table-user-information\">\n                      <tbody>\n\n                        <tr>\n                          <td>Name:</td>\n                          <td>{{msgs?.from?.firstname}}  {{msgs?.from?.lastname}}</td>\n                        </tr>\n                        <tr>\n                          <td>Email</td>\n                          <td>{{ msgs?.from?.email }}</td>\n                        </tr>\n                        <tr>\n                          <td>Message</td>\n                          <td>{{ msgs?.comment }}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n\n                    <!-- <a href=\"#\" class=\"btn btn-primary\">any event</a>\n                    <a href=\"#\" class=\"btn btn-primary\">any event</a> -->\n                  </div>\n                </div>\n              </div>\n                   <div class=\"panel-footer\">\n                          <!-- <a data-original-title=\"Broadcast Message\" data-toggle=\"tooltip\" type=\"button\" class=\"btn btn-sm btn-primary\"><i class=\"glyphicon glyphicon-envelope\"></i></a>\n                          <span class=\"pull-right\">\n                              <a href=\"edit.html\" data-original-title=\"Edit this user\" data-toggle=\"tooltip\" type=\"button\" class=\"btn btn-sm btn-warning\"><i class=\"glyphicon glyphicon-edit\"></i></a>\n                              <a data-original-title=\"Remove this user\" data-toggle=\"tooltip\" type=\"button\" class=\"btn btn-sm btn-danger\"><i class=\"glyphicon glyphicon-remove\"></i></a>\n                          </span> -->\n                      </div>\n\n            </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n      <!-- sidebar -->\n      <app-sidebar></app-sidebar>\n      <!-- /sidebar-->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/account/viewmsg/viewmsg.component.ts":
/*!******************************************************!*\
  !*** ./src/app/account/viewmsg/viewmsg.component.ts ***!
  \******************************************************/
/*! exports provided: ViewmsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewmsgComponent", function() { return ViewmsgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_msg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/msg.service */ "./src/app/service/msg.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewmsgComponent = /** @class */ (function () {
    function ViewmsgComponent(route, router, msg) {
        this.route = route;
        this.router = router;
        this.msg = msg;
        this.msgs = [];
    }
    ViewmsgComponent.prototype.ngOnInit = function () {
        var _this = this;
        var msgid = localStorage.getItem('msgid');
        if (msgid) {
            this.msg.getMsg(msgid, 'inbox/')
                .subscribe(function (res) {
                if (res['status'] === 'success') {
                    _this.msgs = res.data.msgs[0];
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.router.navigate(['user/account/inbox']);
        }
    };
    ViewmsgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewmsg',
            template: __webpack_require__(/*! ./viewmsg.component.html */ "./src/app/account/viewmsg/viewmsg.component.html"),
            styles: [__webpack_require__(/*! ./viewmsg.component.css */ "./src/app/account/viewmsg/viewmsg.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_msg_service__WEBPACK_IMPORTED_MODULE_2__["MsgService"]])
    ], ViewmsgComponent);
    return ViewmsgComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-account-account-module.js.map