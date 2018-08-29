(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-user-user-module"],{

/***/ "./src/app/user/createaccount/createaccount.component.css":
/*!****************************************************************!*\
  !*** ./src/app/user/createaccount/createaccount.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/createaccount/createaccount.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/user/createaccount/createaccount.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-headersecondary></app-headersecondary> -->\n<app-header-common></app-header-common>\n<div class=\"main-content shop-page login-page\">\n\t<div class=\"container\">\n\t\t<div class=\"breadcrumbs\">\n\t\t\t<a href=\"#\">Home</a> \\\n\t\t\t<span class=\"current\"> Login or create an account</span>\n\t\t</div>\n\t\t<div class=\"login-register-form content-form row\">\n\t\t\t<!--\t\t\tlogin tag-->\n\t\t\t<app-login></app-login>\n\t\t\t<!--\t\t\tregister tag-->\n\t\t\t<app-register></app-register>\n\t\t</div>\n\t</div>\n\t<!--\n\t\t<div class=\"brand\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"owl-carousel\" data-autoplay=\"false\" data-nav=\"false\" data-dots=\"false\" data-loop=\"false\" data-slidespeed=\"800\" data-margin=\"30\"  data-responsive = '{\"0\":{\"items\":2}, \"640\":{\"items\":3}, \"768\":{\"items\":3}, \"1024\":{\"items\":4}, \"1200\":{\"items\":5}}'>\n\t\t\t\t\t<div class=\"brand-item\"><a href=\"#\"><img src=\"images/brand1.jpg\" alt=\"\"></a></div>\n\t\t\t\t\t<div class=\"brand-item\"><a href=\"#\"><img src=\"images/brand1.jpg\" alt=\"\"></a></div>\n\t\t\t\t\t<div class=\"brand-item\"><a href=\"#\"><img src=\"images/brand1.jpg\" alt=\"\"></a></div>\n\t\t\t\t\t<div class=\"brand-item\"><a href=\"#\"><img src=\"images/brand1.jpg\" alt=\"\"></a></div>\n\t\t\t\t\t<div class=\"brand-item\"><a href=\"#\"><img src=\"images/brand1.jpg\" alt=\"\"></a></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n-->\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/createaccount/createaccount.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/createaccount/createaccount.component.ts ***!
  \***************************************************************/
/*! exports provided: CreateaccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateaccountComponent", function() { return CreateaccountComponent; });
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

var CreateaccountComponent = /** @class */ (function () {
    function CreateaccountComponent() {
    }
    CreateaccountComponent.prototype.ngOnInit = function () {
    };
    CreateaccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createaccount',
            template: __webpack_require__(/*! ./createaccount.component.html */ "./src/app/user/createaccount/createaccount.component.html"),
            styles: [__webpack_require__(/*! ./createaccount.component.css */ "./src/app/user/createaccount/createaccount.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateaccountComponent);
    return CreateaccountComponent;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-msg {\r\n    /* font-size:11px; */\r\n}\r\n.loading {\r\n    display: inline-block;\r\n    left: 25px;\r\n    position: relative;\r\n}"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n    <div class=\"login-form\">\n      <h4 class=\"main-title\">Login</h4>\n      <h5 class=\"note-title\">All ( * ) fields are required</h5>\n      <!-- <div>\n        <a href=\"#\" class=\"social facebook\"><img src=\"images/facebook.jpg\" alt=\"\"></a><a class=\"twitter social\" href=\"#\"><img src=\"images/twitter.jpg\" alt=\"\"></a>\n      </div> -->\n      <form [formGroup]=\"loginForm\" method=\"POST\">\n      <span class=\"label-text\">Email <span>*</span></span>\n      <input type=\"email\" class=\"input-info\" formControlName=\"email\" required>\n      <div *ngIf=\"loginForm.invalid && formsubmitted\" class=\"error-msg\">\n       \n          <div class=\"text-danger\" *ngIf=\"!!loginForm.controls['email'].pristine || !!loginForm.controls['email'].errors?.required\">Email is required.</div>\n          <div class=\"text-danger\" *ngIf=\"loginForm.controls['email'].dirty && !!loginForm.controls['email'].errors?.patternInvalid?.regexp\">Email is invalid.</div>\n          <!-- {{!!loginForm.controls['email'].errors.required | json}} -->\n      </div>\n      <span class=\"label-text\">Password <span>*</span></span>\n      <input type=\"password\"  formControlName=\"password\" required class=\"input-info\">\n      <div *ngIf=\"loginForm.invalid && formsubmitted\" class=\"error-msg\">\n          <div class=\"text-danger\" *ngIf=\"!!loginForm.controls['password'].errors?.required\">Password is required.</div>\n      </div>\n      <div class=\"check-box\">\n        <input type=\"checkbox\" class=\"login-check\" id=\"login-check\"> <label class=\"text-label\" for=\"login-check\">Remember me</label>\n        <!-- <a href=\"#\" class=\"forgot\">Fogot your password ?</a> -->\n      </div>\n      <div class=\"group-button\">\n        <button class=\"button submit\" (click)=\"login()\">Login <span class=\"loading\" *ngIf=\"showloading\"><img src=\"assets/images/loader.gif\"></span></button> \n      </div>\n    </form>\n    </div>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\"> <strong>Error : </strong> Invalid Username / Password </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sharedfn_userfn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sharedfn/userfn */ "./src/app/sharedfn/userfn.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
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





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authservice, route, router) {
        this.authservice = authservice;
        this.route = route;
        this.router = router;
        this.error = false;
        this.formsubmitted = false;
        this.showloading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            // tslint:disable-next-line
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_sharedfn_userfn__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        }); // remove updateon to change the event to onchange
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.formsubmitted = true;
        if (this.loginForm.valid) {
            this.showloading = true;
            this.authservice.doLogin(this.loginForm.value).subscribe(function (res) {
                if (res['status'] === 'success') {
                    _this.showloading = false;
                    localStorage.setItem('firstname', res.data.firstname);
                    localStorage.setItem('email', res.data.email);
                    localStorage.setItem('lastname', res.data.lastname);
                    localStorage.setItem('isadmin', res.data.is_admin);
                    localStorage.setItem('id', res.data.id);
                    _this.router.navigate(['/']);
                }
                else {
                    _this.showloading = false;
                    _this.error = true;
                }
            }, function (error) {
                _this.showloading = false;
                console.log(error);
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span.successmsg {\r\n    padding: 10px;\r\n    left: 5px;\r\n    position: relative;\r\n}"

/***/ }),

/***/ "./src/app/user/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n    <form [formGroup]=\"registerForm\">\n    <div class=\"register-form\">\n      <h4 class=\"main-title\">Creat an Account</h4>\n      <h5 class=\"note-title\">All ( * ) fields are required</h5>\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n          <span class=\"label-text\">Fist name <span>*</span></span>\n          <input type=\"text\"  class=\"input-info\" formControlName=\"firstname\" required>\n          <div *ngIf=\"registerForm.invalid && formsubmitted\" class=\"error-msg\">\n              <div class=\"text-danger\" *ngIf=\"!!registerForm.controls['firstname'].pristine || !!registerForm.controls['firstname'].errors?.required\">First Name is required.</div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n          <span class=\"label-text\">Last name <span>*</span></span>\n          <input type=\"text\"  class=\"input-info\" formControlName=\"lastname\" required>\n      <div *ngIf=\"registerForm.invalid && formsubmitted\" class=\"error-msg\">\n          <div class=\"text-danger\" *ngIf=\"!!registerForm.controls['lastname'].pristine || !!registerForm.controls['lastname'].errors?.required\">Last Name is required.</div>\n      </div>\n        </div>\n      </div>\n      <div class=\"row\">\n      \n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n          <span class=\"label-text\">Phone Number <span>*</span></span>\n          <input type=\"number\"  class=\"input-info\" formControlName=\"phoneno\" required min=\"0\" oninput=\"validity.valid||(value='');\">\n          <div *ngIf=\"registerForm.invalid && formsubmitted\" class=\"error-msg\">\n              <div class=\"text-danger\" *ngIf=\"!!registerForm.controls['phoneno'].pristine || !!registerForm.controls['phoneno'].errors?.required\">Phone number is required.</div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 regionoption\">\n          <span class=\"label-text\">Region<span>*</span></span>\n          <ng-select [searchable]=\"false\" #regionSelect [items]=\"regions\" [selectOnTab]=\"true\" bindLabel=\"regionname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Select region\" formControlName=\"region\">\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n                        <div *ngIf=\"registerForm.invalid && formsubmitted\" class=\"error-msg top-minus-4\">\n                            <div class=\"text-danger\" *ngIf=\"!!registerForm.controls['region'].pristine || !!registerForm.controls['region'].errors?.required\">Region is required.</div> \n                        </div>\n      \n        </div>\n      </div>\n      <!-- <span class=\"label-text\">Last name <span>*</span></span>\n      <input type=\"text\"  class=\"input-info\" formControlName=\"lastname\" required>\n      <div *ngIf=\"registerForm.controls['lastname'].errors && !registerForm.controls['lastname'].pristine\" class=\"error-msg\">\n          <div class=\"text-danger\" [hidden]=\"!registerForm.controls['lastname'].errors.required\">Last Name is required.</div>\n      </div> -->\n      <span class=\"label-text\">Email Address <span>*</span></span>\n      <input type=\"email\" class=\"input-info\" formControlName=\"email\" required>\n      <div *ngIf=\"registerForm.invalid && formsubmitted\" class=\"error-msg\">\n          <div class=\"text-danger\" *ngIf=\"!!registerForm.controls['email'].pristine || !!registerForm.controls['email'].errors?.required\">Email is required.</div>\n          <div class=\"text-danger\" *ngIf=\"registerForm.controls['email'].dirty && !!registerForm.controls['email'].errors?.patternInvalid?.regexp\">Email is invalid.</div>\n      </div>\n      <div class=\"check-box\">\n        <input type=\"checkbox\" formControlName=\"newsletter\" class=\"login-check\" id=\"register-check\"> <label class=\"text-label\" for=\"register-check\">Sign Up for Newsletter</label>\n      </div>\n      <h5 class=\"title\">Login Information</h5>\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n          <span class=\"label-text\">Password <span>*</span></span>\n          <input type=\"password\"  formControlName=\"password\"  class=\"input-info\">\n          <div *ngIf=\"registerForm.invalid && formsubmitted\" class=\"error-msg\">\n              <div class=\"text-danger\" *ngIf=\"!!registerForm.controls['password'].pristine || !!registerForm.controls['password'].errors?.required\">Password is required.</div>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n          <span class=\"label-text\">Confirm Password <span>*</span></span>\n          <input type=\"password\"  formControlName=\"confirm_password\"  class=\"input-info\">\n          <div *ngIf=\"registerForm.invalid && formsubmitted\" class=\"error-msg\">\n              <div class=\"text-danger\" *ngIf=\"!!registerForm.controls['confirm_password'].pristine || !!registerForm.controls['confirm_password'].errors?.required\">Confirm Password is required.</div>\n          </div>\n          <div *ngIf=\"registerForm.invalid && formsubmitted && registerForm.controls['confirm_password'].dirty\" class=\"error-msg\">\n              <div class=\"text-danger\" *ngIf=\"!!registerForm.errors?.mismatch && !!registerForm.controls['confirm_password'].errors?.required === false\">Password & Confirm Password should be same.</div>\n         </div>\n        \n        </div>\n    \n      </div>\n      <div class=\"group-button\">\n        <button class=\"button submit\"  (click)=\"register()\">SUBMIT <span class=\"loading\" *ngIf=\"showloading\"><img src=\"assets/images/loader.gif\"></span></button>\n        <span class=\"successmsg\" [ngClass]=\"{'bg-danger': error, 'bg-success': success}\"  *ngIf=\"!!usermsg\" >{{usermsg}}</span>\n      </div>\t\t\n    </div>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sharedfn_userfn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sharedfn/userfn */ "./src/app/sharedfn/userfn.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/home.service */ "./src/app/service/home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authservice, homepage) {
        this.authservice = authservice;
        this.homepage = homepage;
        this.formsubmitted = false;
        this.showloading = false;
        this.error = false;
        this.success = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
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
        this.createForm();
    };
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            // tslint:disable-next-line
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_sharedfn_userfn__WEBPACK_IMPORTED_MODULE_2__["patternValidator"])(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            phoneno: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            region: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            newsletter: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        }, _sharedfn_userfn__WEBPACK_IMPORTED_MODULE_2__["passwordMatchValidator"]);
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.formsubmitted = true;
        if (this.registerForm.valid) {
            this.showloading = true;
            this.authservice.newUserRegister(this.registerForm.value).subscribe(function (res) {
                if (res['status'] === 'success') {
                    _this.usermsg = 'You have successfully registered.';
                    _this.showloading = false;
                    _this.success = true;
                    _this.error = false;
                    _this.registerForm.reset();
                }
                else {
                    _this.showloading = false;
                    _this.usermsg = res.dup;
                    _this.success = false;
                    _this.error = true;
                }
            }, function (err) {
                _this.showloading = false;
                console.log(err);
            });
        }
        // console.log(this.registerForm.value);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _service_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _createaccount_createaccount_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createaccount/createaccount.component */ "./src/app/user/createaccount/createaccount.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _createaccount_createaccount_component__WEBPACK_IMPORTED_MODULE_2__["CreateaccountComponent"]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _createaccount_createaccount_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createaccount/createaccount.component */ "./src/app/user/createaccount/createaccount.component.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _header_common_header_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../header-common/header-common.module */ "./src/app/header-common/header-common.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { HeadersecondaryModule } from '../headersecondary/headersecondary.module';




var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"],
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_6__["FooterModule"],
                // HeadersecondaryModule,
                _header_common_header_common_module__WEBPACK_IMPORTED_MODULE_8__["HeaderCommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _createaccount_createaccount_component__WEBPACK_IMPORTED_MODULE_5__["CreateaccountComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-user-user-module.js.map