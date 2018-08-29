(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-singleproduct-singleproduct-module"],{

/***/ "./src/app/service/utils.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/utils.service.ts ***!
  \******************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UtilsService = /** @class */ (function () {
    function UtilsService(http) {
        this.http = http;
    }
    UtilsService.prototype.getClientIPAddress = function () {
        return this.http.get('https://jsonip.com/', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    UtilsService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    UtilsService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    UtilsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UtilsService);
    return UtilsService;
}());



/***/ }),

/***/ "./src/app/singleproduct/product/product.component.css":
/*!*************************************************************!*\
  !*** ./src/app/singleproduct/product/product.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-text {\r\n    display: block;\r\n}\r\nh4.imgloading {\r\n    left: 0;\r\n    right: 0px;\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 192px;\r\n    color: #ffffff;\r\n    font-size: 23px;\r\n    background: #d27430;\r\n    width: 138px;\r\n    padding: 5px;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/singleproduct/product/product.component.html":
/*!**************************************************************!*\
  !*** ./src/app/singleproduct/product/product.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-headersecondary></app-headersecondary> -->\n<app-header-common></app-header-common>\n<div class=\"main-content shop-page main-content-detail\">\n\t<div class=\"container\">\n\t\t<div class=\"breadcrumbs\">\n\t\t\t<a href=\"#\">Home</a> \\\n\t\t\t<span class=\"current\">Detail</span>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12 col-sm-7 col-md-8 col-lg-9 content-offset\" *ngIf=\"singleproduct\">\n\t\t\t\t<div class=\"about-product row\">\n\t\t\t\t\t<!-- {{singleproduct | json}} -->\n\t\t\t\t\t<div class=\"details-thumb col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n\t\t\t\t\t\t<h4 class=\"imgloading\" *ngIf=\"showloading\">Loading...</h4>\n\t\t\t\t\t\t<div class=\"details-item\">\n\t\t\t\t\t\t\t<img src=\"assets/images/products/{{singleproduct.pimage}}\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"owl-carousel nav-style3 has-thumbs\" data-autoplay=\"false\" data-nav=\"true\" data-dots=\"false\" data-loop=\"true\" data-slidespeed=\"800\" data-margin=\"0\"  data-responsive = '{\"0\":{\"items\":1}, \"480\":{\"items\":2}, \"768\":{\"items\":1}, \"1024\":{\"items\":1}, \"1200\":{\"items\":1}}'>\n              <div class=\"details-item\"><img src=\"images/detail1.jpg\" alt=\"\"></div>\n              <div class=\"details-item\"><img src=\"images/detail1.jpg\" alt=\"\"></div>\n              <div class=\"details-item\"><img src=\"images/detail1.jpg\" alt=\"\"></div>\n              <div class=\"details-item\"><img src=\"images/detail1.jpg\" alt=\"\"></div>\n              <div class=\"details-item\"><img src=\"images/detail1.jpg\" alt=\"\"></div>\n            </div> -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"details-info col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"product-name\">{{singleproduct.pname}}</a>\n\t\t\t\t\t\t<!-- <div class=\"rating\">\n              <ul class=\"list-star\">\n                <li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n                <li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n                <li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n                <li><a href=\"#\"><i class=\"fa fa-star\" aria-hidden=\"true\"></i></a></li>\n                <li><a href=\"#\"><i class=\"fa fa-star-half-o\" aria-hidden=\"true\"></i></a></li>\n              </ul>\n              <span class=\"count\">5 Review(s)</span>\n            </div> -->\n\t\t\t\t\t\t<!-- <p class=\"description\">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 making it over 2000 years old. Richard McClintock, a Latin at Hampden-Sydney College in Virginia.</p> -->\n\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t<span>${{singleproduct.saleamount}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"availability\">Availability: <a href=\"#\">in Stock</a></div> -->\n\t\t\t\t\t\t<div class=\"group-social\">\n\t\t\t\t\t\t\t<ul class=\"list-socials\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"quantity\">\n              <div class=\"group-quantity-button\">\n                <a class=\"minus\" href=\"#\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></a>\n                <input class=\"input-text qty text\" type=\"text\" size=\"4\" title=\"Qty\" value=\"1\" name=\"quantity\">\n                                <a class=\"plus\" href=\"#\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div> -->\n\t\t\t\t\t\t<div class=\"group-button\">\n\t\t\t\t\t\t\t<div class=\"inner\" *ngIf=\"!showsellerDetails\">\n\t\t\t\t\t\t\t\t<a (click)=\"gotosigin()\" class=\"add-to-cart\">\n\t\t\t\t\t\t\t\t\t<span class=\"text\">Show Seller Details</span>\n\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-cart-arrow-down\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<!-- <a href=\"#\" class=\"compare-button\"><i class=\"fa fa-exchange\" aria-hidden=\"true\"></i></a>\n                <a href=\"#\" class=\"wishlist-button\"><i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i></a> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"content-form\" *ngIf=\"showsellerDetails\">\n\t\t\t\t\t\t\t<div class=\" info-content\">\n\t\t\t\t\t\t\t\t<div class=\"contact-form\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"main-title\">Seller Info</h4>\n\t\t\t\t\t\t\t\t\t<!-- <p class=\"des\">Maecenas dolor elit, semper a sem sed, pulvinar molestie lacus. Aliquam dignissim, elit non mattis ultrices, neque odio ultricies tellus, eu porttitor nisl ipsum eu massa.</p> -->\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t<strong class=\"label-text\">Seller Name</strong>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"label-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{sellerdetails.name}}\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t\t<strong class=\"label-text\">Seller Email Address </strong>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"label-text\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{sellerdetails.email}}\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <span class=\"label-text\">Phone Number</span>\n\t\t\t\t\t  <input type=\"text\" class=\"input-info\">\t -->\n\t\t\t\t\t  <h3 *ngIf=\"showmsgsent\" class=\"thank-you\">Thank you for contacting.</h3>\n\t\t\t\t\t\t\t\t\t<form [formGroup]=\"sendMsgForm\" method=\"POST\">\n\t\t\t\t\t\t\t\t\t\t<strong class=\"label-text\">Your Message <span>*</span></strong>\n\t\t\t\t\t\t\t\t\t\t<textarea rows=\"8\" class=\"input-info input-note\" formControlName=\"comment\" required></textarea>\n\t\t\t\t\t\t\t\t\t\t<div *ngIf=\"sendMsgForm.invalid\" class=\"error-msg\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-danger\" *ngIf=\"msgerror\">Comment is required.</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"group-button margin-0\">\n\t\t\t\t\t\t\t\t\t\t\t<button href=\"#\" class=\"button submit\"  (click)=\"sendMsg()\">Send Message</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- <div class=\"kt-tab nav-tab-style2\">\n\t\t\t\t\t<ul class=\"nav list-nav\">\n\t\t\t\t\t\t<li class=\"active\">\n\t\t\t\t\t\t\t<a data-animated=\"fadeIn\" data-toggle=\"pill\" href=\"#tab1\">Description</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a data-animated=\"zoomInUp\" data-toggle=\"pill\" href=\"#tab2\">Addtional Infomation</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a data-animated=\"rotateInDownLeft\" data-toggle=\"pill\" href=\"#tab3\">Reviews</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t\t<div id=\"tab1\" class=\"tab-panel active \">\n\t\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, at everti meliore erroribus\n\t\t\t\t\t\t\t\t\tsea. Vero graeco cotidieque ea duo, in eirmod insolens interpretaris nam. Pro at nostrud percipit definitiones,\n\t\t\t\t\t\t\t\t\teu tale porro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores\n\t\t\t\t\t\t\t\t\tofficiis torquatos cum ei.</p>\n\t\t\t\t\t\t\t\t<p>Cum altera mandamus in, mea verear disputationi et. Vel regione discere ut, legere expetenda ut eos. In nam nibh\n\t\t\t\t\t\t\t\t\tinvenire similique. Atqui mollis ea his, ius graecis accommodare te. No eam tota nostrum cotidieque. Est cu nibh\n\t\t\t\t\t\t\t\t\tclita. Sed an nominavi, et duo corrumpit constituto, duo id rebum lucilius. Te eam iisque deseruisse, ipsum euismod\n\t\t\t\t\t\t\t\t\this at. Eu putent habemus voluptua sit, sit cu rationibus scripserit, modus voluptaria ex per. Aeque dicam consulatu\n\t\t\t\t\t\t\t\t\teu his, probatus neglegentur disputationi sit et. Ei nec ludus epicuri petentium, vis appetere maluisset ad. Et\n\t\t\t\t\t\t\t\t\thinc exerci utinam cum. Sonet saperet nominavi est at, vel eu sumo tritani. Cum ex minim legere.</p>\n\t\t\t\t\t\t\t\t<p>Eos cu utroque inermis invenire, eu pri alterum antiopam. Nisl erroribus definitiones nec an, ne mutat scripserit\n\t\t\t\t\t\t\t\t\test. Eros veri ad pri. An soleat maluisset per. Has eu idque similique, et blandit scriptorem necessitatibus mea.\n\t\t\t\t\t\t\t\t\tVis quaeque ocurreret ea.cu bus scripserit, modus voluptaria ex per. Aeque dicam consulatu eu his, probatus neglegentur\n\t\t\t\t\t\t\t\t\tdisputationi sit et. Ei nec ludus epicuri petentium, vis appetere maluisset ad. Et hinc exerci utinam cum. Sonet\n\t\t\t\t\t\t\t\t\tsaperet nominavi est at, vel eu sumo tritani.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"tab2\" class=\"tab-panel\">\n\t\t\t\t\t\t\t<div class=\"additional\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n\t\t\t\t\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet isse potenti sesquam ante aliquet lacusemper elit. Cras neque nulla convallis non comodo\n\t\t\t\t\t\t\t\t\t\t\teuismod nonsese isse potent.</p>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>Soft-touch jersey</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>Crew neck </li>\n\t\t\t\t\t\t\t\t\t\t\t<li>Logo print</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>Regular fit - true to size</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>Machine wash</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>100% Cotton</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>Our model wears a size Medium and is 185.5cm/6'1\" tall</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div id=\"tab3\" class=\"tab-panel\">\n\t\t\t\t\t\t\t<div class=\"custom-review\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"customer-review\">\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"title supper-title\">CUSTOMER REVIEWS\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"count\">( 2 Reviews )</span>\n\t\t\t\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-review\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"review-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"character\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-star\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-half-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"author\">Christiana Doe</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"time-review\">20 Dec 2015</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"review-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"title\">What a Beautiful Design</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content\">Cras neque nulla, convallis non commodo et, euismod nonsese. At vero eos et accusamus et iusto odio dignimos\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tducimus qui blanditiis praesentium voluptatum</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"review-item\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"character\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-star\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-half-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"author\">Jonathan Doe</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"time-review\">20 Dec 2015</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"review-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"title\">Amazing Minimal theme</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"content\">Cras neque nulla, convallis non commodo et, euismod nonsese. At vero eos et accusamus et iusto odio dignimos\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tducimus qui blanditiis praesentium voluptatum</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"add-review\">\n\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"title supper-title\">ADD A REVIEW</h3>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"input-info\" placeholder=\"Your name\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"input-info\" placeholder=\"Your email\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<textarea rows=\"6\" class=\"input-info input-content\" placeholder=\"Your review\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"rating\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"text\">Your rating</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"list-star\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"submit\">SUBMIT</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-12 col-sm-5 col-md-4 col-lg-3 sidebar\">\n\t\t\t\t<!-- <div class=\"equal-container widget-featrue-box\">\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-ts-12 col-xs-4 col-sm-12 col-md-12 col-lg-12 featrue-item\">\n\t\t\t\t\t\t\t<div class=\"featrue-box layout2 equal-elem\">\n\t\t\t\t\t\t\t\t<div class=\"block-icon\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"fa fa-retweet\"></span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"block-inner\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"title\">Money back guarantee</a>\n\t\t\t\t\t\t\t\t\t<p class=\"des\">100% money back guarantee</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-ts-12 col-xs-4 col-sm-12 col-md-12 col-lg-12 featrue-item\">\n\t\t\t\t\t\t\t<div class=\"featrue-box layout2 equal-elem\">\n\t\t\t\t\t\t\t\t<div class=\"block-icon\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"fa fa-life-ring\"></span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"block-inner\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"title\">Online support 24/7</a>\n\t\t\t\t\t\t\t\t\t<p class=\"des\">Online support 24/7</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t\t<!-- <div class=\"widget widget-banner row-banner\">\n\t\t\t\t\t<div class=\"banner banner-effect1\">\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<img src=\"images/banner23.jpg\" alt=\"\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t\t<div class=\"widget widget-recent-post\">\n\t\t\t\t\t<h5 class=\"widgettitle\">Bestseller</h5>\n\t\t\t\t\t<ul class=\"list-recent-posts\">\n\t\t\t\t\t\t<li class=\"product-item\" *ngFor=\"let item of best_sell_products; let i = index;\">\n\t\t\t\t\t\t\t<div class=\"thumb\">  \n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(item.productid._id)\" >\n\t\t\t\t\t\t\t\t\t<img src=\"assets/images/products/{{ item.productid.pimage }}\" alt=\"\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t<!-- <div class=\"rating\">\n\t\t\t\t\t\t\t\t\t<ul class=\"list-star\">\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-half-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<span class=\"count\">5 Review(s)</span>\n\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<a routerLink=\"product/detail/{{ item.productid._id }}\" class=\"product-name\">\n\t\t\t\t\t\t\t\t\t{{ item.productid.pname }}\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t<span class=\"ins\">${{ item.productid.saleamount }}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- <div class=\"products-arrivals\">\n\t\t\t<div class=\"section-head box-has-content\">\n\t\t\t\t<h4 class=\"section-title\">Related Products</h4>\n\t\t\t</div>\n\t\t\t<div class=\"section-content\">\n\t\t\t\t<div class=\"owl-carousel product-list-owl nav-style2 equal-container\" data-autoplay=\"false\" data-nav=\"true\" data-dots=\"false\"\n\t\t\t\t data-loop=\"false\" data-slidespeed=\"800\" data-margin=\"0\" data-responsive='{\"0\":{\"items\":1}, \"480\":{\"items\":2}, \"650\":{\"items\":3}, \"1024\":{\"items\":4}, \"1200\":{\"items\":5}}'>\n\t\t\t\t\t<div class=\"product-item layout1\">\n\t\t\t\t\t\t<div class=\"product-inner equal-elem\">\n\t\t\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"quickview-button\">\n\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</span> Quick View</a>\n\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"thumb-link\">\n\t\t\t\t\t\t\t\t\t<img src=\"images/product1.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"product-name\">Rubberized Hard Case Older MacBook Pro 13.3\"</a>\n\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t<span>$350.00</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"group-button\">\n\t\t\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"text\">ADD TO CART</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-cart-arrow-down\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"compare-button\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-exchange\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"wishlist-button\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"product-item layout1\">\n\t\t\t\t\t\t<div class=\"product-inner equal-elem\">\n\t\t\t\t\t\t\t<ul class=\"group-flash\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span class=\"new flash\">NEW</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"quickview-button\">\n\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</span> Quick View</a>\n\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"thumb-link\">\n\t\t\t\t\t\t\t\t\t<img src=\"images/product4.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"product-name\">Smartphone RAM 4 GB New</a>\n\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t<span>$350.00</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"group-button\">\n\t\t\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"text\">ADD TO CART</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-cart-arrow-down\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"compare-button\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-exchange\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"wishlist-button\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"product-item layout1\">\n\t\t\t\t\t\t<div class=\"product-inner equal-elem\">\n\t\t\t\t\t\t\t<ul class=\"group-flash\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span class=\"sale flash\">-50%</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span class=\"best flash\">Bestseller</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"quickview-button\">\n\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</span> Quick View</a>\n\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"thumb-link\">\n\t\t\t\t\t\t\t\t\t<img src=\"images/product5.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"product-name\">Fujifilm INSTAX Mini 8 Instant Camera (White)</a>\n\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t<span class=\"del\">$700.00</span>\n\t\t\t\t\t\t\t\t\t<span class=\"ins\">$350.00</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"group-button\">\n\t\t\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"text\">ADD TO CART</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-cart-arrow-down\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"compare-button\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-exchange\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"wishlist-button\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"product-item layout1\">\n\t\t\t\t\t\t<div class=\"product-inner equal-elem\">\n\t\t\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"quickview-button\">\n\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</span> Quick View</a>\n\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"thumb-link\">\n\t\t\t\t\t\t\t\t\t<img src=\"images/product6.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"product-name\">PC Prox 21.5-inch and 27-inch (Late 2018) reviews</a>\n\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t<span>$550.00</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"group-button\">\n\t\t\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"text\">ADD TO CART</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-cart-arrow-down\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"compare-button\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-exchange\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"wishlist-button\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"product-item layout1\">\n\t\t\t\t\t\t<div class=\"product-inner equal-elem\">\n\t\t\t\t\t\t\t<ul class=\"group-flash\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span class=\"sale flash\">-50%</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"quickview-button\">\n\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</span> Quick View</a>\n\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"thumb-link\">\n\t\t\t\t\t\t\t\t\t<img src=\"images/product7.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"product-name\">Best Accessories- SteelSeries NIMBUS Controlle</a>\n\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t<span class=\"del\">$500.00</span>\n\t\t\t\t\t\t\t\t\t<span class=\"ins\">$250.00</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"group-button\">\n\t\t\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"text\">ADD TO CART</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-cart-arrow-down\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"compare-button\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-exchange\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"wishlist-button\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"product-item layout1\">\n\t\t\t\t\t\t<div class=\"product-inner equal-elem\">\n\t\t\t\t\t\t\t<ul class=\"group-flash\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span class=\"sale flash\">-50%</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<span class=\"best flash\">Bestseller</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"quickview-button\">\n\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</span> Quick View</a>\n\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"thumb-link\">\n\t\t\t\t\t\t\t\t\t<img src=\"images/product24.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"product-name\">Fujifilm INSTAX Mini 8 Instant Camera (White)</a>\n\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t<span class=\"del\">$700.00</span>\n\t\t\t\t\t\t\t\t\t<span class=\"ins\">$350.00</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"group-button\">\n\t\t\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"text\">ADD TO CART</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-cart-arrow-down\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"compare-button\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-exchange\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"wishlist-button\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div> -->\n\t</div>\n\n\t<!-- <div class=\"brand\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"owl-carousel\" data-autoplay=\"false\" data-nav=\"false\" data-dots=\"false\" data-loop=\"false\" data-slidespeed=\"800\"\n\t\t\t data-margin=\"30\" data-responsive='{\"0\":{\"items\":2}, \"640\":{\"items\":3}, \"768\":{\"items\":3}, \"1024\":{\"items\":4}, \"1200\":{\"items\":5}}'>\n\t\t\t\t<div class=\"brand-item\">\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<img src=\"images/brand1.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"brand-item\">\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<img src=\"images/brand1.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"brand-item\">\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<img src=\"images/brand1.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"brand-item\">\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<img src=\"images/brand1.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"brand-item\">\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<img src=\"images/brand1.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div> -->\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/singleproduct/product/product.component.ts":
/*!************************************************************!*\
  !*** ./src/app/singleproduct/product/product.component.ts ***!
  \************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_msg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/msg.service */ "./src/app/service/msg.service.ts");
/* harmony import */ var _service_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/utils.service */ "./src/app/service/utils.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, router, product, utils, msgservice) {
        this.route = route;
        this.router = router;
        this.product = product;
        this.utils = utils;
        this.msgservice = msgservice;
        this.showloading = false;
        this.showsellerDetails = false;
        this.sellerdetails = {
            name: '',
            email: '',
            userid: '',
            productid: ''
        };
        this.showmsgsent = false;
        this.best_sell_products = [];
        this.limit = 6;
        this.msgerror = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showsellerDetails = false;
        var userid = localStorage.getItem('id');
        this.fetchBestSellProductList();
        this.utils.getClientIPAddress().subscribe(function (res) {
            _this.clientIP = res['ip'];
            _this.route.params.subscribe(function (params) {
                //console.log('params[id]', params['id']);
                _this.product.saveProductViewedStatus(params['id'], _this.clientIP).subscribe(function (res) {
                    console.log(res);
                }, function (err) {
                    console.log(err);
                });
            });
        }, function (err) {
            console.log(err);
        });
        if (userid) {
            this.route.params.subscribe(function (params) {
                _this.product.getSellerByProductID(params['id'])
                    .subscribe(function (res) {
                    if (res['status'] === 'success') {
                        _this.showloading = false;
                        var seller = res.data.sellerinfo[0];
                        _this.showsellerDetails = true;
                        _this.sellerdetails.name = seller.firstname + ' ' + seller.lastname;
                        _this.sellerdetails.email = seller.email;
                        _this.sellerdetails.userid = seller._id;
                    }
                    else {
                        // this.router.navigate(['/cropnotfound']);
                        if (_this.singleproduct) {
                            _this.singleproduct.length = 0;
                        }
                        _this.showloading = false;
                    }
                }, function (err) {
                    console.log(err);
                });
            });
        }
        this.createForm();
        this.route.params.subscribe(function (params) {
            _this.showloading = true;
            // console.log('params[id]', params['id']);
            _this.showmsgsent = false;
            _this.msgerror = false;
            _this.product.getProductDetail(params['id'])
                .subscribe(function (res) {
                if (res['status'] === 'success') {
                    _this.showloading = false;
                    _this.singleproduct = res['data'].singleproduct[0];
                    _this.sellerdetails.productid = _this.singleproduct._id;
                }
                else {
                    // this.router.navigate(['/cropnotfound']);
                    if (!!res['pagenotfound']) {
                        _this.router.navigate(['/notfound']);
                    }
                    if (_this.singleproduct) {
                        _this.singleproduct.length = 0;
                    }
                    _this.showloading = false;
                }
            }, function (err) {
                console.log(err);
            });
        });
    };
    ProductComponent.prototype.sendMsg = function () {
        var _this = this;
        var msgdata = {
            from: localStorage.getItem('id'),
            comment: this.sendMsgForm.value.comment,
            sellerid: this.sellerdetails.userid,
            productid: this.sellerdetails.productid
        };
        if (this.sendMsgForm.valid) {
            this.msgservice.postMsg(msgdata).subscribe(function (res) {
                if (res['status'] === 'success') {
                    _this.sendMsgForm.reset();
                    _this.showmsgsent = true;
                    _this.msgerror = false;
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.msgerror = true;
        }
    };
    ProductComponent.prototype.createForm = function () {
        this.sendMsgForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            // tslint:disable-next-line
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        }); // remove updateon to change the event to onchange
    };
    ProductComponent.prototype.fetchBestSellProductList = function () {
        var _this = this;
        this.product.getBestSellProductList(this.limit).subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.best_sell_products = res['data'].bestselllist;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductComponent.prototype.showproductdetails = function (itemid) {
        this.router.navigate(['product/detail/' + itemid]);
    };
    ProductComponent.prototype.gotosigin = function () {
        var userid = localStorage.getItem('id');
        if (!userid) {
            this.router.navigate(['/user/signin']);
        }
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/singleproduct/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/singleproduct/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _service_utils_service__WEBPACK_IMPORTED_MODULE_5__["UtilsService"],
            _service_msg_service__WEBPACK_IMPORTED_MODULE_4__["MsgService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/singleproduct/singleproduct-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/singleproduct/singleproduct-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SingleproductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleproductRoutingModule", function() { return SingleproductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.component */ "./src/app/singleproduct/product/product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]
    }
];
var SingleproductRoutingModule = /** @class */ (function () {
    function SingleproductRoutingModule() {
    }
    SingleproductRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SingleproductRoutingModule);
    return SingleproductRoutingModule;
}());



/***/ }),

/***/ "./src/app/singleproduct/singleproduct.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/singleproduct/singleproduct.module.ts ***!
  \*******************************************************/
/*! exports provided: SingleproductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleproductModule", function() { return SingleproductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _singleproduct_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./singleproduct-routing.module */ "./src/app/singleproduct/singleproduct-routing.module.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product.component */ "./src/app/singleproduct/product/product.component.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _header_common_header_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../header-common/header-common.module */ "./src/app/header-common/header-common.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import {HeadersecondaryModule} from '../headersecondary/headersecondary.module';



var SingleproductModule = /** @class */ (function () {
    function SingleproductModule() {
    }
    SingleproductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _singleproduct_routing_module__WEBPACK_IMPORTED_MODULE_3__["SingleproductRoutingModule"],
                // HeadersecondaryModule,
                _header_common_header_common_module__WEBPACK_IMPORTED_MODULE_7__["HeaderCommonModule"],
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            declarations: [_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"]],
            providers: [_service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]],
        })
    ], SingleproductModule);
    return SingleproductModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-singleproduct-singleproduct-module.js.map