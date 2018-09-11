(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~f8796ed1"],{

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n\n<footer>\n\t<div class=\"footer layout2\">\n\t\t<div class=\"\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"main-footer\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-3 col-ss-12\">\n\t\t\t\t\t\t\t<div class=\"widget widget-text\">\n\t\t\t\t\t\t\t\t<h3 class=\"widgettitle\">Contact information</h3>\n\t\t\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t\t\t<h5 class=\"subtitle\">Address</h5>\n\t\t\t\t\t\t\t\t\t<p class=\"des\">218 Fifth Avenue, HeavenTower NewYork City</p>\n\t\t\t\t\t\t\t\t\t<h5 class=\"subtitle\">Phone</h5>\n\t\t\t\t\t\t\t\t\t<p class=\"des\">(+68) 123 456 7890</p>\n\t\t\t\t\t\t\t\t\t<h5 class=\"subtitle\">Email</h5>\n\t\t\t\t\t\t\t\t\t<p class=\"des\">Support@techone.com\n\t\t\t\t\t\t\t\t\t\t<br> Hot-Support@techone.com</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ul class=\"list-socials\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-9 col-ss-12\">\n\t\t\t\t\t\t\t<div class=\"newsletter-form layout1 box-has-content\">\n\t\t\t\t\t\t\t\t<div class=\"widget widget-newsletter\">\n\t\t\t\t\t\t\t\t\t<h3 class=\"widgettitle\">Newsletter</h3>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"des\">Get all the latest information on Events, Sales and Offers. Sign up for newsletter today.</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<form [formGroup]=\"subsForm\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-ts-12 col-xs-8 col-sm-12 col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"newsletter-block\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"newsletter-inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"newsletter-info\" placeholder=\"Enter Your e-mail...\" formControlName=\"email\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"submit\" (click)=\"subscribe()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!checking\">Subscribe</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"checking\"><img src=\"assets/images/loader.gif\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"error\" *ngIf=\"validationerror\">Enter a valid email</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"success\" *ngIf=\"!validationerror && success\">Subscribed successfully</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"error\" *ngIf=\"alreadysubs\">Your are already subscribed</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row auto-clear\">\n\t\t\t\t\t\t\t\t<!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6 col-ts-12 \">\n\t\t\t\t\t\t\t\t\t<div class=\"widget widget-custom-menu\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"widgettitle\">My account</h3>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"login.html\">Sign In</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"shopping-cart.html\">View Cart</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">My Wishlist</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Helps</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6 col-ts-12 \">\n\t\t\t\t\t\t\t\t\t<div class=\"widget widget-custom-menu\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"widgettitle\">Information</h3>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/privacy\">Privacy Policy</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/termsconditions\">Terms & Conditions</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Sitemap</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6 col-ts-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"widget widget-custom-menu\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"widgettitle\">Customer Services</h3>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<!-- <li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Secure Shopping</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Affiliates</a>\n\t\t\t\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t    <a routerLink=\"/contact\">Contact Us</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/termsofuse\">Terms of Use</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-6 col-ts-12\">\n\t\t\t\t\t\t\t\t\t<div class=\"widget widget-custom-menu\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"widgettitle\">Payment & Shipping</h3>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Terms of Use</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\">Payment Methods</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"footer-note\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-7 col-lg-8 left-content\">\n\t\t\t\t\t\t\t<div class=\"coppy-right\">\n\t\t\t\t\t\t\t\t<h3 class=\"content\">© Copyright 2018\n\t\t\t\t\t\t\t\t\t<span class=\"site-name\"> Agriculture</span>\n\t\t\t\t\t\t\t\t\tAll rights reserved</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-4 right-content\">\n\t\t\t\t\t\t\t<!-- <ul class=\"list-payment\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/payment1.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/payment2.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/payment3.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/payment4.png\" alt=\"\">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n<!--/Footer-->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/home.service */ "./src/app/service/home.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sharedfn_userfn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedfn/userfn */ "./src/app/sharedfn/userfn.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FooterComponent = /** @class */ (function () {
    function FooterComponent(homepage, route, router) {
        this.homepage = homepage;
        this.route = route;
        this.router = router;
        this.success = false;
        this.alreadysubs = false;
        this.checking = false;
        this.validationerror = false;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    FooterComponent.prototype.createForm = function () {
        this.subsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            // tslint:disable-next-line
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_sharedfn_userfn__WEBPACK_IMPORTED_MODULE_3__["patternValidator"])(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
        });
    };
    FooterComponent.prototype.subscribe = function () {
        var _this = this;
        if (this.subsForm.valid) {
            this.validationerror = false;
            this.checking = true;
            this.homepage.checksubscription(this.subsForm.value).subscribe(function (res) {
                if (res['status'] === 'success') {
                    _this.checking = false;
                    _this.alreadysubs = true;
                    _this.success = false;
                }
                else {
                    _this.homepage.subscribeemail(_this.subsForm.value).subscribe(function (response) {
                        if (response['status'] === 'success') {
                            _this.success = true;
                            _this.alreadysubs = false;
                            _this.checking = false;
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.validationerror = true;
        }
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_service_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]
    }
];
var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
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
// const user = JSON.parse(localStorage.getItem('user'));
var apiUrl = '/api/';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.doLogin = function (data) {
        return this.http.post(apiUrl + 'user/signin', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AuthService.prototype.getUserDetails = function (userid) {
        // console.log('service userid', userid);
        return this.http.get(apiUrl + 'user/details/' + userid, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AuthService.prototype.resetUserPassword = function (data) {
        // console.log('service userid', userid);
        return this.http.post(apiUrl + 'user/resetuserpass/', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AuthService.prototype.editProfile = function (data) {
        return this.http.post(apiUrl + 'user/editprofile', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AuthService.prototype.newUserRegister = function (data) {
        return this.http.post(apiUrl + 'user/register', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AuthService.prototype.dologout = function () {
        return this.http.get(apiUrl + 'user/logout', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AuthService.prototype.authsession = function () {
        return this.http.get(apiUrl + 'auth', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // getProducts(): Observable<any> {
    //   return this.http.get(apiUrl, httpOptions).pipe(
    //     map(this.extractData),
    //     catchError(this.handleError));
    // }
    // getProduct(id: string): Observable<any> {
    //   const url = `${apiUrl}/${id}`;
    //   return this.http.get(url, httpOptions).pipe(
    //     map(this.extractData),
    //     catchError(this.handleError));
    // }
    // postProduct(data): Observable<any> {
    //   return this.http.post(apiUrl, data, httpOptions)
    //     .pipe(
    //       catchError(this.handleError)
    //     );
    // }
    // updateProduct(data): Observable<any> {
    //   return this.http.put(apiUrl, data, httpOptions)
    //     .pipe(
    //       catchError(this.handleError)
    //     );
    // }
    // deleteProduct(id: string): Observable<{}> {
    //   const url = `${apiUrl}/${id}`;
    //   return this.http.delete(url, httpOptions)
    //     .pipe(
    //       catchError(this.handleError)
    //     );
    // }
    AuthService.prototype.extractData = function (res) {
        // console.log(res.headers);
        var body = res;
        return body || {};
    };
    AuthService.prototype.handleError = function (error) {
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
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/home.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/home.service.ts ***!
  \*****************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
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
var apiUrl = '/api/';
var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.contactus = function (data) {
        return this.http.post(apiUrl + 'contact', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // getSubCatList(): Observable<any> {
    //   return this.http.get(apiUrl + 'croplist', httpOptions).pipe(
    //     map(this.extractData),
    //     catchError(this.handleError)
    //   );
    // }
    HomeService.prototype.getCatList = function () {
        return this.http.get(apiUrl + 'catlist', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HomeService.prototype.getSubcatListByCatID = function (catid) {
        return this.http
            .get(apiUrl + 'category/' + catid + '/subcatlist', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HomeService.prototype.getAmountUnitList = function () {
        return this.http.get(apiUrl + 'amountunitlist', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HomeService.prototype.getRegionList = function () {
        return this.http.get(apiUrl + 'regionlist', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HomeService.prototype.checksubscription = function (data) {
        return this.http.get(apiUrl + 'newsletterSubs/' + data.email, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HomeService.prototype.subscribeemail = function (data) {
        return this.http.post(apiUrl + 'subscribe', data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // getProducts(): Observable<any> {
    //   return this.http.get(apiUrl, httpOptions).pipe(
    //     map(this.extractData),
    //     catchError(this.handleError));
    // }
    // getProduct(id: string): Observable<any> {
    //   const url = `${apiUrl}/${id}`;
    //   return this.http.get(url, httpOptions).pipe(
    //     map(this.extractData),
    //     catchError(this.handleError));
    // }
    // postProduct(data): Observable<any> {
    //   return this.http.post(apiUrl, data, httpOptions)
    //     .pipe(
    //       catchError(this.handleError)
    //     );
    // }
    // updateProduct(data): Observable<any> {
    //   return this.http.put(apiUrl, data, httpOptions)
    //     .pipe(
    //       catchError(this.handleError)
    //     );
    // }
    // deleteProduct(id: string): Observable<{}> {
    //   const url = `${apiUrl}/${id}`;
    //   return this.http.delete(url, httpOptions)
    //     .pipe(
    //       catchError(this.handleError)
    //     );
    // }
    HomeService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    HomeService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/service/product.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/product.service.ts ***!
  \********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
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
// const user = JSON.parse(localStorage.getItem('user'));
// console.log(user.name); + 'token/' + user.token +
var apiUrl = '/api/';
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProductList = function (id) {
        return this.http.get(apiUrl + 'crop/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.getProductListByCat = function (id) {
        return this.http.get(apiUrl + 'productlistbycat/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.getProductListBySubCat = function (subcatlist) {
        return this.http.post(apiUrl + 'getProductListBySubCat', subcatlist)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.getProductListByUser = function (id) {
        return this.http.get(apiUrl + 'cropbyuser/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.userdashboard = function (id) {
        return this.http.get(apiUrl + 'user/dashboard/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.getSellerByProductID = function (sellerid) {
        return this.http
            .get(apiUrl + 'getsellerinfo/' + sellerid, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.getCatList = function () {
        return this.http.get(apiUrl + 'catlist', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.setAdArchive = function (productid) {
        return this.http
            .get(apiUrl + 'setproductarchive/' + productid, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.deleteProduct = function (product_id) {
        return this.http
            .delete(apiUrl + 'removeproduct/' + product_id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.getArchiveProductByUser = function (id) {
        return this.http.get(apiUrl + 'archiveads/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.setAdActive = function (productid) {
        return this.http
            .get(apiUrl + 'setproductactive/' + productid, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.getSearchResult = function (subcatid, regionid) {
        return this.http
            .get(apiUrl + 'search/subcategory/' + subcatid + '/region/' + regionid, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.getProductDetail = function (productid) {
        return this.http.get(apiUrl + 'product/' + productid, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.saveProductViewedStatus = function (productid, client_ip) {
        return this.http
            .post(apiUrl + 'product/' + productid + '/client/' + client_ip + '/viewed', {}, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.addNewProduct = function (newproduct) {
        return this.http.post(apiUrl + 'addnewproduct', newproduct).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.updateProduct = function (productdetails) {
        return this.http.post(apiUrl + 'updateproduct', productdetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.getSFeaturedProductList = function () {
        return this.http.get(apiUrl + 'featuredlist/', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.getBestSellProductList = function (limit) {
        limit = limit || '';
        return this.http.get(apiUrl + 'bestselllist/' + limit, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.getMostViewedProductList = function (limit) {
        limit = limit || '';
        return this.http.get(apiUrl + 'mostviewed/' + limit, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ProductService.prototype.getNewProductList = function (limit) {
        limit = limit || '';
        return this.http.get(apiUrl + 'newarrival/' + limit, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    //   getRegionList(): Observable<any> {
    //     return this.http.get(apiUrl + 'regionlist', httpOptions).pipe(
    //         map(this.extractData),
    //         catchError(this.handleError)
    //     );
    //   }
    // getProducts(): Observable<any> {
    //   return this.http.get(apiUrl, httpOptions).pipe(
    //     map(this.extractData),
    //     catchError(this.handleError));
    // }
    // getProduct(id: string): Observable<any> {
    //   const url = `${apiUrl}/${id}`;
    //   return this.http.get(url, httpOptions).pipe(
    //     map(this.extractData),
    //     catchError(this.handleError));
    // }
    // postProduct(data): Observable<any> {
    //   return this.http.post(apiUrl, data, httpOptions)
    //     .pipe(
    //       catchError(this.handleError)
    //     );
    // }
    // updateProduct(data): Observable<any> {
    //   return this.http.put(apiUrl, data, httpOptions)
    //     .pipe(
    //       catchError(this.handleError)
    //     );
    // }
    // deleteProduct(id: string): Observable<{}> {
    //   const url = `${apiUrl}/${id}`;
    //   return this.http.delete(url, httpOptions)
    //     .pipe(
    //       catchError(this.handleError)
    //     );
    // }
    ProductService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ProductService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/sharedfn/userfn.ts":
/*!************************************!*\
  !*** ./src/app/sharedfn/userfn.ts ***!
  \************************************/
/*! exports provided: patternValidator, passwordMatchValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternValidator", function() { return patternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordMatchValidator", function() { return passwordMatchValidator; });
function patternValidator(regexp) {
    return function (control) {
        var value = control.value;
        if (value === '') {
            return null;
        }
        return !regexp.test(value) ? { 'patternInvalid': { regexp: regexp } } : null;
    };
}
function passwordMatchValidator(g) {
    return g.get('password').value === g.get('confirm_password').value
        ? null : { 'mismatch': true };
}


/***/ })

}]);
//# sourceMappingURL=app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~f8796ed1.js.map