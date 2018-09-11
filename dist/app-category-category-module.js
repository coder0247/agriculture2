(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-category-category-module"],{

/***/ "./src/app/category/banner/banner.component.css":
/*!******************************************************!*\
  !*** ./src/app/category/banner/banner.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/banner/banner.component.html":
/*!*******************************************************!*\
  !*** ./src/app/category/banner/banner.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  banner works!\n</p>\n"

/***/ }),

/***/ "./src/app/category/banner/banner.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/category/banner/banner.component.ts ***!
  \*****************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
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

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/category/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/category/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/category/category-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/category/category-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRoutingModule", function() { return CategoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/category/product-list/product-list.component.ts");
/* harmony import */ var _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quickview/quickview.component */ "./src/app/category/quickview/quickview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"],
    },
    {
        path: 'quickview',
        component: _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_3__["QuickviewComponent"]
    }
];
var CategoryRoutingModule = /** @class */ (function () {
    function CategoryRoutingModule() {
    }
    CategoryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CategoryRoutingModule);
    return CategoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/category/category.module.ts":
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/category/product-list/product-list.component.ts");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/category/category-routing.module.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/category/banner/banner.component.ts");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quickview/quickview.component */ "./src/app/category/quickview/quickview.component.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _header_common_header_common_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../header-common/header-common.module */ "./src/app/header-common/header-common.module.ts");
/* harmony import */ var _service_pager_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../service/pager.service */ "./src/app/service/pager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// End of dependices for common header

var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _category_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoryRoutingModule"],
                _header_common_header_common_module__WEBPACK_IMPORTED_MODULE_11__["HeaderCommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"]
            ],
            declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"], _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_7__["QuickviewComponent"]],
            providers: [_service_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], _service_pager_service__WEBPACK_IMPORTED_MODULE_12__["PagerService"]],
        })
    ], CategoryModule);
    return CategoryModule;
}());



/***/ }),

/***/ "./src/app/category/product-list/product-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/category/product-list/product-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productloading{\r\n    display: inline-block;\r\n    position: relative;\r\n    left: 20px;\r\n    background-color: green;\r\n    padding: 0 10px;\r\n    color: #fff;\r\n}\r\n.shop-page .shop-title {\r\n    display: inline;\r\n}\r\n.product-item .group-button .add-to-cart{\r\n    width: 100%;\r\n}\r\n.sidebar .widget_filter_size .list-size li {\r\n    display: block;\r\n}\r\n.disabled>a:hover {\r\n    color: #777;\r\n    cursor: not-allowed;\r\n    background-color: #fff;\r\n    border-color: #ddd;\r\n}\r\n.sidebar .label-text {\r\n    padding-left: 25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/category/product-list/product-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/category/product-list/product-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-headersecondary></app-headersecondary> -->\n<app-header-common></app-header-common>\n<div class=\"main-content shop-page main-content-grid\">\n\t<div class=\"container\">\n\t\t<div class=\"breadcrumbs\">\n\t\t\t<a href=\"#\">Home</a> \\\n\t\t\t<span class=\"current\">Category</span>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12 col-sm-7 col-md-8 col-lg-9 content-offset\">\n\t\t\t\t<!-- <div class=\"main-banner\">\n\t\t\t\t\t\t<div class=\"banner banner-effect1\">\n\t\t\t\t\t\t\t<a href=\"#\"><img src=\"images/banner22.jpg\" alt=\"\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t<div class=\"categories-content\">\n\t\t\t\t\t<h4 class=\"shop-title\">Products</h4>\n\t\t\t\t\t<div class=\"productloading\" *ngIf=\"showloading\">Loading...</div>\n\t\t\t\t\t<div class=\"top-control box-has-content\">\n\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t<div class=\"filter-choice\"> \n\t\t\t\t\t\t\t\t\t   <ng-select [searchable]=\"false\"  [items]=\"filterchoice\" [selectOnTab]=\"true\" bindLabel=\"sortbyfilter\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t   [(ngModel)]=\"filterdefault\" (change)=\"getfilteritem($event._id)\">\n\t\t\t\t\t\t\t\t\t  </ng-select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"filter-choice\">\n\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"false\"  [items]=\"perpageitems\" [selectOnTab]=\"true\" bindLabel=\"perpagevalue\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t [(ngModel)]=\"pagevaluedefault\" (change)=\"getitembypagevalue($event._id)\">\n\t\t\t\t\t\t\t\t   </ng-select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"control-button\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"togglegrid()\" [ngClass]=\"{'grid-button': true, 'active': gridstatus}\"><span class=\"icon\"><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i> </span>Grid</a>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"togglelist()\" [ngClass]=\"{'list-button': true, 'active': liststatus}\"><span class=\"icon\"><i class=\"fa fa-th-list\" aria-hidden=\"true\"></i></span> List</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"auto-clear grid-style equal-container box-has-content\" *ngIf=\"notfound\">\n\t\t\t\t\t\t<h3>Found nothing to show</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div [ngClass]=\"{'product-container auto-clear box-has-content  equal-container': true, 'grid-style': gridstatus, 'list-style': liststatus}\"  *ngIf=\"pagedItems\">\n\n\t\t\t\t\t\t<div class=\"product-item layout1 col-ts-12 col-xs-6 col-sm-6 col-md-4 col-lg-4 no-padding\" *ngFor=\"let item of pagedItems\">\n\t\t\t\t\t\t\t<div [ngClass]=\"{'product-inner equal-elem': true, 'togglelist': togglestatus}\" >\n\t\t\t\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t\t\t\t<!-- {{item | json}} -->\n\t\t\t\t\t\t\t\t\t<button href=\"#\" class=\"quickview-button\" (click)=\"quickview(item._id, item.pname, item.pimage, item.saleamount,  item.amtunit, item.unitprice)\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t</span> Quick View</button>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(item._id)\" class=\"thumb-link\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{item.pimage}}\" alt=\"\">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"rating\">\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-star\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star-half-o\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"count\">5 Review(s)</span>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(item._id)\" class=\"product-name\">{{item.pname | titlecase }}</a>\n\t\t\t\t\t\t\t\t\t<!-- <p class=\"description\">Lorem Ipsum is simply dummy text of the printing and try. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer.</p> -->\n\t\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t\t<span>$ {{item.saleamount}}</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"availability\">Availability: <a href=\"#\">in Stock</a></div> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"group-button\">\n\t\t\t\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"add-to-cart\" (click)=\"showproductdetails(item._id)\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text\">Contact</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"pagination\" *ngIf=\"pagedItems?.length\" >\n\t\t\t\t\t\t\t\t<ul class=\"list-page\" *ngIf=\"pager.pages && pager.pages.length\">\n\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-button\" (click)=\"setPage(1)\">First</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-button\" (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let page of pager.pages\" >\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" [ngClass]=\"{'page-number current':pager.currentPage === page}\" (click)=\"setPage(page)\">{{page}}</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-button\" (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"nav-button\" (click)=\"setPage(pager.totalPages)\">Last</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span  *ngIf=\"pagedItems?.length\" class=\"note\">Showing {{pager.startIndex + 1}}-{{pager.endIndex + 1}}  of {{pager.totalItems}} result</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-12 col-sm-5 col-md-4 col-lg-3 sidebar\">\n\t\t\t\t<!-- <h4 class=\"main-title\">Shop by</h4> -->\n\t\t\t\t<div class=\"widget widget-categories\">\n\t\t\t\t\t\t<h5 class=\"widgettitle\">{{catname}}</h5>\n\t\t\t\t\t\t<ul class=\"list-categories\">\n\t\t\t\t\t\t\t<li *ngFor=\"let item of sidecorps\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"{{item._id}}\" name=\"{{item._id}}\" value=\"{{item._id}}\" (change)=\"getproductbysubcat($event)\">\n\t\t\t\t\t\t\t\t<label for=\"{{item._id}}\" class=\"label-text\">{{item.subcatname}}</label>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t<!-- <div class=\"widget widget-brand\">\n\t\t\t\t\t\t<h5 class=\"widgettitle\">Brand</h5>\n\t\t\t\t\t\t<ul class=\"list-categories\">\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb10\"><label for=\"cb10\" class=\"label-text\">Cameras</label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb11\"><label for=\"cb11\" class=\"label-text\">Smartphone</label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb12\"><label for=\"cb12\" class=\"label-text\">Printer & Ink</label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb13\"><label for=\"cb13\" class=\"label-text\">Game & Consoles</label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb14\"><label for=\"cb14\" class=\"label-text\">Sound & Speaker</label></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div> -->\n\t\t\t\t<!-- <div class=\"widget widget_filter_price box-has-content\">\n\t\t\t\t\t\t<h3 class=\"widgettitle\">Filter by Crop Type </h3>\n\t\t\t\t\t\t<div class=\"price-filter\">\n\t\t                    <div data-label-reasult=\"price:\" data-min=\"0\" data-max=\"3000\" data-unit=\"$\" class=\"slider-range-price \" data-value-min=\"185\" data-value-max=\"2000\"></div>\n\t\t                    <div class=\"amount-range-price\">Price: <span class=\"from\">$85</span> - <span class=\"to\">$2000</span></div>\n\t\t                    <a href=\"#\" class=\"filter\">Filter</a>\n\t\t                </div>\n\t\t\t\t\t</div> -->\n\t\t\t\t<!-- <div class=\"widget widget_filter_size\">\n\t\t\t\t\t<h3 class=\"widgettitle\">{{catname}}</h3>\n\t\t\t\t\t<ul class=\"list-color\" *ngFor=\"let item of sidecorps\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a routerLink=\"/{{catname}}/{{item._id}}\">{{item.subcatname}}</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div> -->\n\t\t\t\t<!-- <div class=\"widget widget_filter_color box-has-content\">\n\t\t\t\t\t\t<h3 class=\"widgettitle\">color</h3>\n\t\t\t\t\t\t<ul class=\"list-color\">\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb15\"><label for=\"cb15\" class=\"label-text\">Red<span class=\"count\">(12)</span></label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb16\"><label for=\"cb16\" class=\"label-text\">Black<span class=\"count\">(34)</span></label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb17\"><label for=\"cb17\" class=\"label-text\">Pink<span class=\"count\">(52)</span></label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb18\"><label for=\"cb18\" class=\"label-text\">Grey<span class=\"count\">(55)</span></label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb19\"><label for=\"cb19\" class=\"label-text\">White<span class=\"count\">(16)</span></label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb20\"><label for=\"cb20\" class=\"label-text\">Yellow<span class=\"count\">(21)</span></label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb21\"><label for=\"cb21\" class=\"label-text\">Blue<span class=\"count\">(19)</span></label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb22\"><label for=\"cb22\" class=\"label-text\">Green<span class=\"count\">(31)</span></label></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div> -->\n\t\t\t\t<!-- <div class=\"widget widget-banner row-banner\">\n\t\t\t\t\t<div class=\"banner banner-effect2\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<img src=\"images/banner21.jpg\" alt=\"\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t\t<!-- <div class=\"widget widget-recent-post\">\n\t\t\t\t\t\t<h5 class=\"widgettitle\">New Products</h5>\n\t\t\t\t\t\t<ul class=\"list-recent-posts\">\n\t\t\t\t\t\t\t<li class=\"product-item\">\n\t\t\t\t\t\t\t\t<div class=\"thumb\"><a href=\"detail.html\"><img src=\"images/small-product14.jpg\" alt=\"\"></a></div>\n\t\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-star\">\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star-half-o\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<span class=\"count\">5 Review(s)</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"product-name\">Instant Camera</a>\n\t\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"del\">$700.00</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"ins\">$350</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"product-item\">\n\t\t\t\t\t\t\t\t<div class=\"thumb\"><a href=\"detail.html\"><img src=\"images/small-product15.jpg\" alt=\"\"></a></div>\n\t\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-star\">\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star-half-o\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<span class=\"count\">5 Review(s)</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"product-name\">SteelSeries NIMBUS Controlle</a>\n\t\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t\t<span>$100</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"product-item\">\n\t\t\t\t\t\t\t\t<div class=\"thumb\"><a href=\"detail.html\"><img src=\"images/small-product16.jpg\" alt=\"\"></a></div>\n\t\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"product-name\">Smartphone RAM 4 GB New</a>\n\t\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t\t<span >$350.00</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"product-item\">\n\t\t\t\t\t\t\t\t<div class=\"thumb\"><a href=\"detail.html\"><img src=\"images/small-product15.jpg\" alt=\"\"></a></div>\n\t\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"list-star\">\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star-half-o\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<span class=\"count\">5 Review(s)</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"product-name\">SteelSeries NIMBUS Controlle</a>\n\t\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t\t<span>$100</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div> -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- <div class=\"brand\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"owl-carousel\" data-autoplay=\"false\" data-nav=\"false\" data-dots=\"false\" data-loop=\"false\" data-slidespeed=\"800\"\n\t\t\t data-margin=\"30\" data-responsive='{\"0\":{\"items\":2}, \"640\":{\"items\":3}, \"768\":{\"items\":3}, \"1024\":{\"items\":4}, \"1200\":{\"items\":5}}'>\n\t\t\t\t<div class=\"brand-item\">\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<img src=\"images/brand1.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"brand-item\">\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<img src=\"images/brand1.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"brand-item\">\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<img src=\"images/brand1.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"brand-item\">\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<img src=\"images/brand1.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"brand-item\">\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<img src=\"images/brand1.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div> -->\n\t<div  [ngClass]=\"{'overlaypanelscreen': blockui}\"><img src=\"assets/images/ajax-loader.gif\" alt=\"loading\" *ngIf=\"blockui\"></div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/category/product-list/product-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/category/product-list/product-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quickview/quickview.component */ "./src/app/category/quickview/quickview.component.ts");
/* harmony import */ var _service_pager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pager.service */ "./src/app/service/pager.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(product, route, router, modalService, pageservice) {
        this.product = product;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.pageservice = pageservice;
        this.showloading = false;
        this.blockui = false;
        this.notfound = false;
        // pager object
        this.pager = {};
        this.pageSize = 9;
        this.filtersubcat = [];
        this.gridstatus = true;
        this.liststatus = false;
        this.togglestatus = false;
        this.filterdefault = '1';
        this.pagevaluedefault = '9';
        this.filterchoice = [
            {
                '_id': '1',
                'sortbyfilter': 'Sort by Name'
            },
            {
                '_id': '2',
                'sortbyfilter': 'Price -- High to Low'
            },
            {
                '_id': '3',
                'sortbyfilter': 'Price -- Low to High'
            },
            {
                '_id': '4',
                'sortbyfilter': 'Newest First'
            },
        ];
        this.perpageitems = [
            {
                '_id': '9',
                'perpagevalue': '9 per page'
            },
            {
                '_id': '12',
                'perpagevalue': '12 per page'
            },
            {
                '_id': '15',
                'perpagevalue': '15 per page'
            },
            {
                '_id': '18',
                'perpagevalue': '18 per page'
            }
        ];
    }
    ProductListComponent.prototype.quickview = function (pname, pimage, saleamount, amtunit, unitprice) {
        var initialState = {
            modaldata: [pname, pimage, saleamount, amtunit, unitprice]
        };
        this.bsModalRef = this.modalService.show(_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_4__["QuickviewComponent"], {
            initialState: initialState
        });
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    ProductListComponent.prototype.togglegrid = function () {
        this.gridstatus = true;
        this.liststatus = false;
        this.togglestatus = false;
    };
    ProductListComponent.prototype.togglelist = function () {
        this.gridstatus = false;
        this.liststatus = true;
        this.togglestatus = true;
    };
    ProductListComponent.prototype.setPage = function (page) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // get pager object from service
        this.pager = this.pageservice.getPager(this.products.length, page, this.pageSize);
        // sorting logic
        // end sorting logic
        // get current page of items
        this.pagedItems = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ProductListComponent.prototype.ngOnInit = function () {
        this.products = '';
        this.getAllProductbycat();
    };
    ProductListComponent.prototype.getAllProductbycat = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.showloading = true;
            _this.products = '';
            _this.filtersubcat.length = 0;
            // console.log('init', this.filtersubcat);
            if (!!_this.pagedItems && !!_this.pagedItems.length) {
                _this.pagedItems.length = 0;
            }
            _this.product.getProductListByCat(params['catid']).subscribe(function (res) {
                // console.log(res);
                if (res['status'] === 'success') {
                    _this.showloading = false;
                    _this.notfound = false;
                    _this.products = res.data.product;
                    _this.products.sort(function (a, b) {
                        var nameA = a.pname.toUpperCase(); // ignore upper and lowercase
                        var nameB = b.pname.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        // names must be equal
                        return 0;
                    });
                    // const newsortedProducts =  _.sortBy(this.products, [function(o) { return o.pname; }]);
                    // console.log('newsortedProducts', newsortedProducts);
                    // this.products = newsortedProducts[0];
                    _this.setPage(1);
                    _this.sidecorps = res.subcat.subcat;
                    _this.catname = res.cat.cat.catname;
                }
                else {
                    // console.log('notfond ................', res);
                    // this.router.navigate(['/cropnotfound']);
                    if (!!res.pagenotfound) {
                        // console.log('notfond ................');
                        _this.router.navigate(['/notfound']);
                    }
                    if (!!_this.pagedItems && !!_this.pagedItems.length) {
                        _this.pagedItems.length = 0;
                        _this.sidecorps.length = 0;
                        _this.catname = '';
                    }
                    _this.showloading = false;
                    _this.notfound = true;
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    ProductListComponent.prototype.showproductdetails = function (itemid) {
        this.router.navigate(['product/detail/' + itemid]);
    };
    ProductListComponent.prototype.getproductbysubcat = function (subcatid) {
        var _this = this;
        var searchstart = false;
        this.products = '';
        if (subcatid.target.checked) {
            if (!this.filtersubcat.includes(subcatid.target.defaultValue)) {
                this.filtersubcat.push(subcatid.target.defaultValue);
                searchstart = true;
            }
        }
        else {
            // remove value
            var index = this.filtersubcat.findIndex(function (subcat) { return subcat === subcatid.target.defaultValue; });
            this.filtersubcat.splice(index, 1);
            searchstart = true;
        }
        console.log('searchstart', searchstart, 'this.filtersubcat', this.filtersubcat.length, this.filterchange);
        if (searchstart && this.filtersubcat.length > 0) {
            this.showloading = true;
            this.blockui = true;
            // console.log('params[id]', params['id']);
            var subcatlist = {
                subcatlist: this.filtersubcat
            };
            this.product.getProductListBySubCat(subcatlist).subscribe(function (res) {
                if (res['status'] === 'success') {
                    _this.showloading = false;
                    _this.blockui = false;
                    _this.notfound = false;
                    var data = res['data'].prodlist;
                    var subCategoryItem = [];
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var item = data_1[_i];
                        subCategoryItem.push(item.productid);
                    }
                    // this.products = subCategoryItem;
                    if (typeof _this.filterchange !== 'undefined') {
                        // console.log('subCategoryItem1', subCategoryItem);
                        _this.products = subCategoryItem;
                        _this.setProductSortOrder(_this.filterchange);
                    }
                    else {
                        subCategoryItem.sort(function (a, b) {
                            var nameA = a.pname.toUpperCase(); // ignore upper and lowercase
                            var nameB = b.pname.toUpperCase(); // ignore upper and lowercase
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }
                            // names must be equal
                            return 0;
                        });
                        _this.products = subCategoryItem;
                        console.log('subCategoryItem', subCategoryItem);
                        _this.setPage(1);
                    }
                }
                else {
                    if (!!_this.pagedItems && !!_this.pagedItems.length) {
                        _this.pagedItems.length = 0;
                    }
                    _this.showloading = false;
                    _this.notfound = true;
                    _this.blockui = false;
                }
            }, function (err) {
                console.log(err);
            });
        }
        else if (this.filtersubcat.length === 0) {
            this.getAllProductbycat();
        }
    };
    ProductListComponent.prototype.getfilteritem = function (_id) {
        this.filterchange = _id;
        this.setProductSortOrder(this.filterchange);
    };
    ProductListComponent.prototype.setProductSortOrder = function (ordertype) {
        // _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
        // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
        var productCollection;
        switch (ordertype) {
            case '1':
                // Sort by Name
                this.products.sort(function (a, b) {
                    var nameA = a.pname.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.pname.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                });
                this.setPage(1);
                break;
            case '2':
                // Price -- High to Low
                this.products.sort(function (a, b) { return a.saleamount - b.saleamount; });
                var reversed = this.products.reverse();
                this.products = reversed;
                this.setPage(1);
                break;
            case '3':
                // Price -- Low to High
                this.products.sort(function (a, b) { return a.saleamount - b.saleamount; });
                this.setPage(1);
                break;
            case '4':
                // Newest First
                productCollection = lodash__WEBPACK_IMPORTED_MODULE_6__["orderBy"](this.products, ['created_at'], ['desc']);
                this.products = productCollection;
                this.setPage(1);
                break;
            default:
                break;
        }
    };
    ProductListComponent.prototype.getitembypagevalue = function (_id) {
        this.pagevaluechange = _id;
        this.pageSize = _id;
        this.setPage(1);
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/category/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/category/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _service_pager_service__WEBPACK_IMPORTED_MODULE_5__["PagerService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/category/quickview/quickview.component.css":
/*!************************************************************!*\
  !*** ./src/app/category/quickview/quickview.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.close{\r\n    cursor: pointer;\r\n    /* background: 0 0; */\r\n    border: 0;\r\n    position: relative;\r\n    right: -28px;\r\n    top: -33px;\r\n    background: white;\r\n    padding: 5px 10px;\r\n    border-radius: 100%;\r\n    text-shadow: none;\r\n    opacity: 1;\r\n    outline: none;  \r\n}\r\n"

/***/ }),

/***/ "./src/app/category/quickview/quickview.component.html":
/*!*************************************************************!*\
  !*** ./src/app/category/quickview/quickview.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal-header\">\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div> -->\n\n\n    <div class=\"modal-content modal-lg\">\n<div class=\"modal-body\">\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n     </button>\n  <!-- {{modaldata| json}} -->\n  <!-- [ \"Green Okra\", \"file-1531900835736.jpg\", \"100\", \"5b4debdd5580971bc49e89d4\", \"22\" ] -->\n  <!-- <ul *ngIf=\"list.length\">\n    <li *ngFor=\"let item of list\">{{item}}</li>\n  </ul> -->\n  <div class=\"row\">\n    <div class=\"details-info col-xs-12 col-sm-6\">\n      <a href=\"javascript:void(0)\" (click)=\"showproductdetails(modaldata[0])\" class=\"product-name\">\n        <img src=\"{{modaldata[2]}}\" alt=\"{{modaldata[2]}}\" />\n        </a>\n    </div>\n    <div class=\"details-info col-xs-12 col-sm-6\">\n      <span class=\"product-name\">{{modaldata[1]}}</span>\n\n      <div class=\"price\">\n        <span>$ {{modaldata[3]}}</span>\n      </div>\n\n      <div class=\"group-button\">\n        <div class=\"inner\">\n          <a href=\"javascript:void(0)\" class=\"add-to-cart\" (click)=\"showproductdetails(modaldata[0])\">\n            <span class=\"text\">CONTACT</span>\n            <span class=\"icon\">\n              <i class=\"fa fa-cart-arrow-down\" aria-hidden=\"true\"></i>\n            </span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/category/quickview/quickview.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/category/quickview/quickview.component.ts ***!
  \***********************************************************/
/*! exports provided: QuickviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickviewComponent", function() { return QuickviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function QuickviewComponent(bsModalRef, route, router) {
        this.bsModalRef = bsModalRef;
        this.route = route;
        this.router = router;
        this.modaldata = [];
    }
    QuickviewComponent.prototype.ngOnInit = function () {
        // this.list.push('PROFIT!!!');
    };
    QuickviewComponent.prototype.showproductdetails = function (itemid) {
        this.bsModalRef.hide();
        this.router.navigate(['product/detail/' + itemid]);
    };
    QuickviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quickview',
            template: __webpack_require__(/*! ./quickview.component.html */ "./src/app/category/quickview/quickview.component.html"),
            styles: [__webpack_require__(/*! ./quickview.component.css */ "./src/app/category/quickview/quickview.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuickviewComponent);
    return QuickviewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-category-category-module.js.map