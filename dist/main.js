(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../app/about/about.module": [
		"./src/app/about/about.module.ts",
		"app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~f8796ed1",
		"app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~4235a603",
		"common",
		"app-about-about-module"
	],
	"../app/account/account.module": [
		"./src/app/account/account.module.ts",
		"app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~f8796ed1",
		"app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~4235a603",
		"app-account-account-module~app-category-category-module~app-home-home-module~app-products-products-m~dbc04460",
		"app-account-account-module~app-admin-admin-module",
		"common",
		"app-account-account-module"
	],
	"../app/admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"app-account-account-module~app-admin-admin-module",
		"common",
		"app-admin-admin-module"
	],
	"../app/category/category.module": [
		"./src/app/category/category.module.ts",
		"app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~f8796ed1",
		"app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~4235a603",
		"app-account-account-module~app-category-category-module~app-home-home-module~app-products-products-m~dbc04460",
		"app-category-category-module~app-home-home-module",
		"common",
		"app-category-category-module"
	],
	"../app/contact/contact.module": [
		"./src/app/contact/contact.module.ts",
		"app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~f8796ed1",
		"app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~4235a603",
		"common",
		"app-contact-contact-module"
	],
	"../app/home/home.module": [
		"./src/app/home/home.module.ts",
		"app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~f8796ed1",
		"app-account-account-module~app-category-category-module~app-home-home-module~app-products-products-m~dbc04460",
		"app-category-category-module~app-home-home-module",
		"common",
		"app-home-home-module"
	],
	"../app/notfound/notfound.module": [
		"./src/app/notfound/notfound.module.ts",
		"app-notfound-notfound-module"
	],
	"../app/orders/orders.module": [
		"./src/app/orders/orders.module.ts",
		"app-orders-orders-module"
	],
	"../app/products/products.module": [
		"./src/app/products/products.module.ts",
		"app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~f8796ed1",
		"app-account-account-module~app-category-category-module~app-home-home-module~app-products-products-m~dbc04460",
		"common",
		"app-products-products-module"
	],
	"../app/search/search.module": [
		"./src/app/search/search.module.ts",
		"app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~f8796ed1",
		"app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~4235a603",
		"app-account-account-module~app-category-category-module~app-home-home-module~app-products-products-m~dbc04460",
		"common",
		"app-search-search-module"
	],
	"../app/singleproduct/singleproduct.module": [
		"./src/app/singleproduct/singleproduct.module.ts",
		"app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~f8796ed1",
		"app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~4235a603",
		"common",
		"app-singleproduct-singleproduct-module"
	],
	"../app/user/user.module": [
		"./src/app/user/user.module.ts",
		"app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~f8796ed1",
		"app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~4235a603",
		"common",
		"app-user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        loadChildren: '../app/home/home.module#HomeModule'
    },
    {
        path: 'user/register',
        loadChildren: '../app/user/user.module#UserModule'
    },
    {
        path: 'user/account',
        loadChildren: '../app/account/account.module#AccountModule'
    },
    {
        path: 'user/signin',
        loadChildren: '../app/user/user.module#UserModule'
    },
    {
        path: 'search/subcategory/:subcatid/region/:regionid',
        loadChildren: '../app/search/search.module#SearchModule'
    },
    {
        path: 'crop/:id',
        loadChildren: '../app/products/products.module#ProductsModule'
    },
    {
        path: 'orders',
        loadChildren: '../app/orders/orders.module#OrdersModule'
    },
    {
        path: 'product/detail/:id',
        loadChildren: '../app/singleproduct/singleproduct.module#SingleproductModule'
    },
    {
        path: 'category/:catid',
        loadChildren: '../app/category/category.module#CategoryModule'
    },
    {
        path: 'admin',
        loadChildren: '../app/admin/admin.module#AdminModule'
    },
    {
        path: 'about',
        loadChildren: '../app/about/about.module#AboutModule'
    },
    {
        path: 'contact',
        loadChildren: '../app/contact/contact.module#ContactModule'
    },
    // {
    //   path: '',
    //   redirectTo: '',
    //   pathMatch: 'full'
    // },
    {
        path: '**',
        loadChildren: '../app/notfound/notfound.module#NotfoundModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _service_routingState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/routingState */ "./src/app/service/routingState.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(formBuilder, modalService, routingState) {
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.routingState = routingState;
        this.title = 'Agriculture';
        this.isCollapsed = true;
        routingState.loadRouting();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.signinForm = this.formBuilder.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    AppComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    AppComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _service_routingState__WEBPACK_IMPORTED_MODULE_3__["RoutingState"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _service_routingState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/routingState */ "./src/app/service/routingState.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import {FooterModule} from './footer/footer.module';

// bootstrap


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot()
            ],
            providers: [_service_routingState__WEBPACK_IMPORTED_MODULE_8__["RoutingState"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/service/routingState.ts":
/*!*****************************************!*\
  !*** ./src/app/service/routingState.ts ***!
  \*****************************************/
/*! exports provided: RoutingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingState", function() { return RoutingState; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoutingState = /** @class */ (function () {
    function RoutingState(router) {
        this.router = router;
        this.history = [];
    }
    RoutingState.prototype.loadRouting = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (_a) {
            var urlAfterRedirects = _a.urlAfterRedirects;
            // this.history = [...this.history, urlAfterRedirects];
            _this.history.push(urlAfterRedirects);
        });
    };
    RoutingState.prototype.getHistory = function () {
        return this.history;
    };
    RoutingState.prototype.getPreviousUrl = function () {
        return this.history[this.history.length - 2] || '/index';
    };
    RoutingState = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoutingState);
    return RoutingState;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");



Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ngproject\main\heroku\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map