(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-search-search-module"],{

/***/ "./src/app/search/quickview/quickview.component.css":
/*!**********************************************************!*\
  !*** ./src/app/search/quickview/quickview.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.close{\r\n    cursor: pointer;\r\n    /* background: 0 0; */\r\n    border: 0;\r\n    position: relative;\r\n    right: -28px;\r\n    top: -33px;\r\n    background: white;\r\n    padding: 5px 10px;\r\n    border-radius: 100%;\r\n    text-shadow: none;\r\n    opacity: 1;\r\n    outline: none;  \r\n}\r\n"

/***/ }),

/***/ "./src/app/search/quickview/quickview.component.html":
/*!***********************************************************!*\
  !*** ./src/app/search/quickview/quickview.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal-header\">\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div> -->\n\n\n<div class=\"modal-content modal-lg\">\n  <div class=\"modal-body\">\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n       </button>\n    <!-- {{modaldata | json}} -->\n    <!-- [ \"Green Okra\", \"file-1531900835736.jpg\", \"100\", \"5b4debdd5580971bc49e89d4\", \"22\" ] -->\n    <!-- <ul *ngIf=\"list.length\">\n      <li *ngFor=\"let item of list\">{{item}}</li>\n    </ul> -->\n    <div class=\"row\">\n      <div class=\"details-info col-xs-12 col-sm-6\">\n        <a href=\"javascript:void(0)\" (click)=\"showproductdetails(item._id)\" class=\"product-name\">\n          <img src=\"{{modaldata[1]}}\" alt=\"{{modaldata[0]}}\" />\n          </a>\n      </div>\n      <div class=\"details-info col-xs-12 col-sm-6\">\n        <a href=\"detail.html\" class=\"product-name\">{{modaldata[0]}}</a>\n\n        <div class=\"price\">\n          <span>$ {{modaldata[2]}}</span>\n        </div>\n\n        <div class=\"group-button\">\n          <div class=\"inner\">\n            <a href=\"#\" class=\"add-to-cart\">\n              <span class=\"text\">CONTACT</span>\n              <span class=\"icon\">\n                <i class=\"fa fa-cart-arrow-down\" aria-hidden=\"true\"></i>\n              </span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/search/quickview/quickview.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/search/quickview/quickview.component.ts ***!
  \*********************************************************/
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
            template: __webpack_require__(/*! ./quickview.component.html */ "./src/app/search/quickview/quickview.component.html"),
            styles: [__webpack_require__(/*! ./quickview.component.css */ "./src/app/search/quickview/quickview.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], QuickviewComponent);
    return QuickviewComponent;
}());



/***/ }),

/***/ "./src/app/search/result/result.component.css":
/*!****************************************************!*\
  !*** ./src/app/search/result/result.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productloading{\r\n    display: inline-block;\r\n    position: relative;\r\n    left: 20px;\r\n    background-color: green;\r\n    padding: 0 10px;\r\n    color: #fff;\r\n}\r\n.shop-page .shop-title {\r\n    display: inline;\r\n}\r\n.product-item .group-button .add-to-cart{\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/search/result/result.component.html":
/*!*****************************************************!*\
  !*** ./src/app/search/result/result.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-headersecondary></app-headersecondary> -->\n<!-- <app-headerprimary></app-headerprimary> -->\n<app-header-common></app-header-common>\n\n<!-- <div class=\"main-content shop-page main-content-search-result\"> -->\n<div class=\"main-content shop-page \">\n\t<div class=\"container\">\n\t\t<div class=\"breadcrumbs\">\n\t\t\t<a href=\"#\">Home</a> \\\n\t\t\t<span class=\"current\">Search</span>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12 col-sm-7 col-md-8 col-lg-9 \">\n\t\t\t\t<!-- <div class=\"main-banner\">\n\t\t\t\t\t\t<div class=\"banner banner-effect1\">\n\t\t\t\t\t\t\t<a href=\"#\"><img src=\"images/banner22.jpg\" alt=\"\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t<div class=\"categories-content\">\n\t\t\t\t\t<h4 class=\"shop-title\">Search Result</h4>\n\t\t\t\t\t<div class=\"productloading\" *ngIf=\"showloading\">Loading...</div>\n\t\t\t\t\t<!-- <div class=\"top-control box-has-content\">\n\t\t\t\t\t\t\t<div class=\"control\">\n\t\t\t\t\t\t\t\t<div class=\"filter-choice\">\n\t\t\t\t\t\t\t\t\t<select data-placeholder=\"All Categories\" class=\"chosen-select\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"1\">Sort by popularity</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"2\">Size</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"3\">Type</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"4\">Name</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"5\">Data Modified</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"select-item\">\n\t\t\t\t\t\t\t\t\t<select data-placeholder=\"All Categories\" class=\"chosen-select\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"1\">12 per page</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"2\">9 per page</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"3\">12 per page</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"4\">15 per page</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"5\">18 per page</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"5\">21 per page</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"control-button\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"grid-button active\"><span class=\"icon\"><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i> </span>Grid</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"list-button\"><span class=\"icon\"><i class=\"fa fa-th-list\" aria-hidden=\"true\"></i></span> List</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t<div class=\"product-container auto-clear equal-container box-has-content grid-style\">\n\t\t\t\t\t\t<h3 *ngIf=\"noresultfound\">No Search Result</h3>\n\n\t\t\t\t\t\t<div class=\"product-item layout1 col-ts-12 col-xs-6 col-sm-6 col-md-4 col-lg-4 no-padding\" *ngFor=\"let item of products\">\n\t\t\t\t\t\t\t<div class=\"product-inner equal-elem\">\n\t\t\t\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t\t\t\t<button href=\"#\" class=\"quickview-button\" (click)=\"quickview(item.pname, item.pimage, item.saleamount,  item.amtunit, item.unitprice)\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t</span> Quick View</button>\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(item._id)\" class=\"thumb-link\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{item.pimage}}\" alt=\"\">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"rating\">\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-star\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-star-half-o\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"count\">5 Review(s)</span>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(item._id)\" class=\"product-name\">{{item.pname}}</a>\n\t\t\t\t\t\t\t\t\t<!-- <p class=\"description\">Lorem Ipsum is simply dummy text of the printing and try. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer.</p> -->\n\t\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t\t<span>$ {{item.saleamount}}</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"availability\">Availability: <a href=\"#\">in Stock</a></div> -->\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"group-button\">\n\t\t\t\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"add-to-cart\" (click)=\"showproductdetails(item._id)\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text\">Contact</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"pagination\">\n\t\t\t\t\t\t\t<ul class=\"list-page\">\n\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"page-number current\">1</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"page-number\">2</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"page-number\">3</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\" class=\"nav-button\">Next</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<span class=\"note\">Showing 1-8 of 12 result</span> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-12 col-sm-5 col-md-4 col-lg-3 sidebar\">\n\t\t\t\t<!-- <h4 class=\"main-title\">Shop by</h4> -->\n\t\t\t\t<!-- <div class=\"widget widget-categories\">\n\t\t\t\t\t\t<h5 class=\"widgettitle\">Categories</h5>\n\t\t\t\t\t\t<ul class=\"list-categories\">\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb1\"><label for=\"cb1\" class=\"label-text\">Home Audio & Theater</label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb2\"><label for=\"cb2\" class=\"label-text\">TV & Video</label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb3\"><label for=\"cb3\" class=\"label-text\">Camera, Photo & Video</label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb4\"><label for=\"cb4\" class=\"label-text\">Cell Phones & Accessories</label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb5\"><label for=\"cb5\" class=\"label-text\">Headphones</label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb6\"><label for=\"cb6\" class=\"label-text\">Video Games</label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb7\"><label for=\"cb7\" class=\"label-text\">Bluetooth & Wireless Speakers</label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb8\"><label for=\"cb8\" class=\"label-text\">Gaming Console</label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb9\"><label for=\"cb9\" class=\"label-text\">Computers & Tablets</label></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div> -->\n\t\t\t\t<!-- <div class=\"widget widget-brand\">\n\t\t\t\t\t\t<h5 class=\"widgettitle\">Brand</h5>\n\t\t\t\t\t\t<ul class=\"list-categories\">\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb10\"><label for=\"cb10\" class=\"label-text\">Cameras</label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb11\"><label for=\"cb11\" class=\"label-text\">Smartphone</label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb12\"><label for=\"cb12\" class=\"label-text\">Printer & Ink</label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb13\"><label for=\"cb13\" class=\"label-text\">Game & Consoles</label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb14\"><label for=\"cb14\" class=\"label-text\">Sound & Speaker</label></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div> -->\n\t\t\t\t<!-- <div class=\"widget widget_filter_price box-has-content\">\n\t\t\t\t\t<h3 class=\"widgettitle\">Filter by price</h3>\n\t\t\t\t\t<div class=\"price-filter\">\n\t\t\t\t\t\t<div data-label-reasult=\"price:\" data-min=\"0\" data-max=\"3000\" data-unit=\"$\" class=\"slider-range-price \" data-value-min=\"185\"\n\t\t\t\t\t\t data-value-max=\"2000\"></div>\n\t\t\t\t\t\t<div class=\"amount-range-price\">Price:\n\t\t\t\t\t\t\t<span class=\"from\">$85</span> -\n\t\t\t\t\t\t\t<span class=\"to\">$2000</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a href=\"#\" class=\"filter\">Filter</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t\t<!-- <div class=\"widget widget_filter_size\">\n\t\t\t\t\t\t<h3 class=\"widgettitle\">size</h3>\n\t\t\t\t\t\t<ul class=\"list-size\">\n\t\t\t\t\t\t\t<li><a href=\"#\">S</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\">M</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\">L</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\">xl</a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\">XXL</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div> -->\n\t\t\t\t<!-- <div class=\"widget widget_filter_color box-has-content\">\n\t\t\t\t\t\t<h3 class=\"widgettitle\">color</h3>\n\t\t\t\t\t\t<ul class=\"list-color\">\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb15\"><label for=\"cb15\" class=\"label-text\">Red<span class=\"count\">(12)</span></label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb16\"><label for=\"cb16\" class=\"label-text\">Black<span class=\"count\">(34)</span></label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb17\"><label for=\"cb17\" class=\"label-text\">Pink<span class=\"count\">(52)</span></label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb18\"><label for=\"cb18\" class=\"label-text\">Grey<span class=\"count\">(55)</span></label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb19\"><label for=\"cb19\" class=\"label-text\">White<span class=\"count\">(16)</span></label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb20\"><label for=\"cb20\" class=\"label-text\">Yellow<span class=\"count\">(21)</span></label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb21\"><label for=\"cb21\" class=\"label-text\">Blue<span class=\"count\">(19)</span></label></li>\n\t\t\t\t\t\t\t<li><input type=\"checkbox\" id=\"cb22\"><label for=\"cb22\" class=\"label-text\">Green<span class=\"count\">(31)</span></label></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div> -->\n\t\t\t\t<!-- <div class=\"widget widget-banner row-banner\">\n\t\t\t\t\t<div class=\"banner banner-effect2\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<img src=\"images/banner21.jpg\" alt=\"\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t\t<div class=\"widget widget-recent-post\">\n\t\t\t\t\t<h5 class=\"widgettitle\">New Products</h5>\n\t\t\t\t\t<ul class=\"list-recent-posts\">\n\t\t\t\t\t\t<li class=\"product-item\" *ngFor=\"let product of new_products\">\n\t\t\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void()\" (click)=\"showproductdetails(product._id)\">\n\t\t\t\t\t\t\t\t\t<img src=\"{{ product.pimage }}\" alt=\"\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t<a routerLink=\"product/detail/{{ product._id }}\" class=\"product-name\">\n\t\t\t\t\t\t\t\t\t{{ product.pname }}\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t<span class=\"ins\">${{ product.saleamount }}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- <div class=\"brand\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"owl-carousel\" data-autoplay=\"false\" data-nav=\"false\" data-dots=\"false\" data-loop=\"false\" data-slidespeed=\"800\"\n\t\t\t data-margin=\"30\" data-responsive='{\"0\":{\"items\":2}, \"640\":{\"items\":3}, \"768\":{\"items\":3}, \"1024\":{\"items\":4}, \"1200\":{\"items\":5}}'>\n\t\t\t\t<div class=\"brand-item\">\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<img src=\"images/brand1.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"brand-item\">\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<img src=\"images/brand1.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"brand-item\">\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<img src=\"images/brand1.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"brand-item\">\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<img src=\"images/brand1.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"brand-item\">\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<img src=\"images/brand1.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div> -->\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/search/result/result.component.ts":
/*!***************************************************!*\
  !*** ./src/app/search/result/result.component.ts ***!
  \***************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quickview/quickview.component */ "./src/app/search/quickview/quickview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultComponent = /** @class */ (function () {
    function ResultComponent(product, route, router, modalService) {
        this.product = product;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.showloading = false;
        this.noresultfound = false;
        this.new_products = [];
        this.limit = 6;
    }
    ResultComponent.prototype.quickview = function (image, pname, pprice) {
        var initialState = {
            modaldata: [image, pname, pprice]
        };
        this.bsModalRef = this.modalService.show(_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_4__["QuickviewComponent"], {
            initialState: initialState
        });
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    ResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchNewProductList();
        this.route.params.subscribe(function (params) {
            // console.log('params[id]', params['id']);
            // // this.router.navigate(['/cropnotfound']);
            // this.imageurl =  'assets/images/crop/small/' + params['id'] + '.jpeg';
            // console.log(params); // log the entire params object
            // console.log(params['id']); // log the value of id
            _this.showloading = true;
            // console.log('search params', params);
            _this.product
                .getSearchResult(params['subcatid'], params['regionid'])
                .subscribe(function (res) {
                console.log('search result response', res);
                if (res['status'] === 'success') {
                    _this.showloading = false;
                    _this.noresultfound = false;
                    _this.products = res['data'].product;
                }
                else {
                    // this.router.navigate(['/cropnotfound']);
                    if (_this.products) {
                        _this.products.length = 0;
                    }
                    _this.showloading = false;
                    _this.noresultfound = true;
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    ResultComponent.prototype.fetchNewProductList = function () {
        var _this = this;
        this.product.getNewProductList(this.limit).subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.new_products = res['data'].newarrival;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ResultComponent.prototype.showproductdetails = function (itemid) {
        this.router.navigate(['product/detail/' + itemid]);
    };
    ResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/search/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.css */ "./src/app/search/result/result.component.css")]
        }),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/search/search-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result/result.component */ "./src/app/search/result/result.component.ts");
/* harmony import */ var _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quickview/quickview.component */ "./src/app/search/quickview/quickview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _result_result_component__WEBPACK_IMPORTED_MODULE_2__["ResultComponent"],
    },
    {
        path: 'quickview',
        component: _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_3__["QuickviewComponent"]
    }
];
var SearchRoutingModule = /** @class */ (function () {
    function SearchRoutingModule() {
    }
    SearchRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SearchRoutingModule);
    return SearchRoutingModule;
}());



/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/search/search-routing.module.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./result/result.component */ "./src/app/search/result/result.component.ts");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quickview/quickview.component */ "./src/app/search/quickview/quickview.component.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _header_common_header_common_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../header-common/header-common.module */ "./src/app/header-common/header-common.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { HeadersecondaryModule } from '../headersecondary/headersecondary.module';





//import { HeaderprimaryComponent } from '../home/headerprimary/headerprimary.component';
//Dependent modules for common header


//import { HeaderCommonComponent } from '../header-common/header-common.component';

// End of dependices for common header
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _search_routing_module__WEBPACK_IMPORTED_MODULE_2__["SearchRoutingModule"],
                //HeadersecondaryModule,
                //HeaderCommonComponent,
                _header_common_header_common_module__WEBPACK_IMPORTED_MODULE_10__["HeaderCommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"]
            ],
            declarations: [_result_result_component__WEBPACK_IMPORTED_MODULE_3__["ResultComponent"], _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_6__["QuickviewComponent"]],
            providers: [_service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]],
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-search-search-module.js.map