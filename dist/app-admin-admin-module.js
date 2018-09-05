(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-admin-admin-module"],{

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-category/create-category.component */ "./src/app/admin/create-category/create-category.component.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/admin/category-list/category-list.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/admin/layout/layout.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-category/edit-category.component */ "./src/app/admin/edit-category/edit-category.component.ts");
/* harmony import */ var _create_sub_category_create_sub_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-sub-category/create-sub-category.component */ "./src/app/admin/create-sub-category/create-sub-category.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/user-list/user-list.component.ts");
/* harmony import */ var _edit_sub_category_edit_sub_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-sub-category/edit-sub-category.component */ "./src/app/admin/edit-sub-category/edit-sub-category.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/admin/product-list/product-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/admin/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        children: [
            {
                path: '',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
            },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
            },
            {
                path: 'category/list',
                component: _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__["CategoryListComponent"]
            },
            {
                path: 'category/add',
                component: _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_2__["CreateCategoryComponent"]
            },
            {
                path: 'category/:id',
                component: _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_6__["EditCategoryComponent"]
            },
            {
                path: 'subcategory/add',
                component: _create_sub_category_create_sub_category_component__WEBPACK_IMPORTED_MODULE_7__["CreateSubCategoryComponent"]
            },
            {
                path: 'subcategory/:id',
                component: _edit_sub_category_edit_sub_category_component__WEBPACK_IMPORTED_MODULE_9__["EditSubCategoryComponent"]
            },
            {
                path: 'user/list',
                component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__["UserListComponent"]
            },
            {
                path: 'product/list',
                component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"]
            }
        ]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/admin/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/admin/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/admin/footer/footer.component.ts");
/* harmony import */ var _leftmenu_leftmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leftmenu/leftmenu.component */ "./src/app/admin/leftmenu/leftmenu.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/admin/category-list/category-list.component.ts");
/* harmony import */ var _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create-category/create-category.component */ "./src/app/admin/create-category/create-category.component.ts");
/* harmony import */ var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-category/edit-category.component */ "./src/app/admin/edit-category/edit-category.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./message/message.component */ "./src/app/admin/message/message.component.ts");
/* harmony import */ var _create_sub_category_create_sub_category_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-sub-category/create-sub-category.component */ "./src/app/admin/create-sub-category/create-sub-category.component.ts");
/* harmony import */ var _edit_sub_category_edit_sub_category_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-sub-category/edit-sub-category.component */ "./src/app/admin/edit-sub-category/edit-sub-category.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/admin/user-list/user-list.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/admin/product-list/product-list.component.ts");
/* harmony import */ var _service_routingState__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../service/routingState */ "./src/app/service/routingState.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _directive_image_preview_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../directive/image-preview.directive */ "./src/app/directive/image-preview.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' })
            ],
            declarations: [
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _leftmenu_leftmenu_component__WEBPACK_IMPORTED_MODULE_6__["LeftmenuComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_10__["CategoryListComponent"],
                _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_11__["CreateCategoryComponent"],
                _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_12__["EditCategoryComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_14__["MessageComponent"],
                _create_sub_category_create_sub_category_component__WEBPACK_IMPORTED_MODULE_15__["CreateSubCategoryComponent"],
                _edit_sub_category_edit_sub_category_component__WEBPACK_IMPORTED_MODULE_16__["EditSubCategoryComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_17__["UserListComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_18__["ProductListComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_20__["FileSelectDirective"],
                _directive_image_preview_directive__WEBPACK_IMPORTED_MODULE_21__["ImagePreview"],
            ],
            providers: [_service_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"], _service_routingState__WEBPACK_IMPORTED_MODULE_19__["RoutingState"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/category-list/category-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/category-list/category-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/category-list/category-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/category-list/category-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\n\t<a href=\"#\">Category</a> >\n\t<span class=\"current\"> List</span>\n</div>\n\n<app-message *ngIf=\"message\" [message]=\"message\" [type]=\"message_type\"></app-message>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n\t<div class=\"alert alert-info\">\n\t\t<strong>Info!</strong> Click on\n\t\t<a class=\"btn btn-primary btn-xs\">\n\t\t\t<i class=\"glyphicon glyphicon-align-justify\"></i>\n\t\t</a> icon to see the subcategories of that category\n\t</div>\n</div>\n\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n\t<div class=\"table-responsive\">\n\t\t<table class=\"table table-bordered table-striped\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th class=\"text-center\">Category Name</th>\n\t\t\t\t\t<th class=\"text-center\" style=\"width: 100px;\">Status</th>\n\t\t\t\t\t<th class=\"text-center\" style=\"width: 110px;\">Action</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngIf=\"!categoryLoaded; else elseBlock\">\n\t\t\t\t\t<td colspan=\"3\" class=\"text-center\">\n\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t<i class=\"fa fa-spinner fa-spin fa-lg\"></i> Loading categories ...\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t<tr *ngIf=\"categories.length == 0; else elseBlock\">\n\t\t\t\t\t\t<td colspan=\"3\" class=\"text-center\">\n\t\t\t\t\t\t\t<h5>No category found</h5>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t\t<tr *ngFor=\"let category of categories\">\n\t\t\t\t\t\t\t<td>{{category.catname}}</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t<span class=\"label label-success\" *ngIf=\"category.status; else elseBlock\">Active</span>\n\t\t\t\t\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t\t\t\t\t<span class=\"label label-danger\">In-Active</span>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t<a class=\"btn btn-success btn-xs\" title=\"Edit\" routerLink=\"../{{category._id}}\">\n\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-pencil\"></i>\n\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-pencil-square-o fa-lg\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t\t\t\t<a class=\"btn btn-primary btn-xs\" title=\"Subcategory list\" (click)=\"showSubcategoryList(category._id)\">\n\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-align-justify\"></i>\n\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-bars fa-lg\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t\t\t\t<a class=\"btn btn-danger btn-xs\" title=\"Delete\" (click)=\"deleteCategory(category)\">\n\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-trash\"></i>\n\t\t\t\t\t\t\t\t\t<!-- <i class=\"fa fa-trash-o fa-lg\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ng-template>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n\t<div class=\"table-responsive\">\n\t\t<table class=\"table table-bordered table-striped\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th class=\"text-center\">Sub-Category Name</th>\n\t\t\t\t\t<th class=\"text-center\" style=\"width: 100px;\">Status</th>\n\t\t\t\t\t<th class=\"text-center\" style=\"width: 110px;\">Action</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngIf=\"!categorySelected; else subCatElseBlock\">\n\t\t\t\t\t<td colspan=\"3\" class=\"text-center\">\n\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\tSelect category\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<ng-template #subCatElseBlock>\n\t\t\t\t\t<tr *ngIf=\"!subCategoryLoaded; else subCatElseBlock\">\n\t\t\t\t\t\t<td colspan=\"3\" class=\"text-center\">\n\t\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t\t<i class=\"fa fa-spinner fa-spin fa-lg\"></i> Loading sub-categories ...\n\t\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<ng-template #subCatElseBlock>\n\t\t\t\t\t\t<tr *ngIf=\"subcategories.length == 0; else subCatElseBlock\">\n\t\t\t\t\t\t\t<td colspan=\"3\" class=\"text-center\">\n\t\t\t\t\t\t\t\t<h5>No sub-category found</h5>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<ng-template #subCatElseBlock>\n\t\t\t\t\t\t\t<tr *ngFor=\"let subcategory of subcategories\">\n\t\t\t\t\t\t\t\t<td>{{subcategory.subcatname}}</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t<span class=\"label label-success\" *ngIf=\"subcategory.status; else elseBlock\">Active</span>\n\t\t\t\t\t\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t\t\t\t\t\t<span class=\"label label-danger\">In-Active</span>\n\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t\t\t<a class=\"btn btn-success btn-xs\" title=\"Edit\" routerLink=\"../../subcategory/{{subcategory._id}}\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-pencil\"></i>\n\t\t\t\t\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t\t\t\t\t<a class=\"btn btn-danger btn-xs\" title=\"Delete\" (click)=\"deleteSubcategory(subcategory)\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-trash\"></i>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ng-template>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/admin/category-list/category-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/category-list/category-list.component.ts ***!
  \****************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/app/admin/utils/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(admin) {
        this.admin = admin;
        this.categories = [];
        this.categoryLoaded = false;
        this.categorySelected = false;
        this.subcategories = [];
        this.subCategoryLoaded = false;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin.getCategoryList().subscribe(function (response) {
            if (response.status) {
                _this.categories = response.data.categories;
            }
            else {
                _this.categories = [];
            }
            _this.categoryLoaded = true;
        }, function (error) {
            console.log(error);
        });
    };
    CategoryListComponent.prototype.showSubcategoryList = function (category_id) {
        var _this = this;
        this.subCategoryLoaded = false;
        this.categorySelected = true;
        this.admin.getSubcategoryListByCategory(category_id).subscribe(function (response) {
            if (response.status) {
                _this.subcategories = response.data.subcategories;
            }
            else {
                _this.subcategories = [];
            }
            _this.subCategoryLoaded = true;
        }, function (error) {
            console.log(error);
        });
    };
    CategoryListComponent.prototype.deleteCategory = function (category) {
        var _this = this;
        var ans = confirm('Are you sure you want to delete category : "' + category.catname + '" ?');
        if (ans) {
            this.message = '';
            this.message_type = '';
            this.admin.deleteCategory(category._id).subscribe(function (response) {
                _this.message = response.message;
                _this.message_type = response.status ? 'success' : 'error';
                if (response.status) {
                    _this.categories = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].removeObjectFromArray(_this.categories, category, '_id');
                    _this.subcategories = [];
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    CategoryListComponent.prototype.deleteSubcategory = function (subcategory) {
        var _this = this;
        var ans = confirm('Are you sure you want to delete subcategory : "' + subcategory.subcatname + '" ?');
        if (ans) {
            this.message = '';
            this.message_type = '';
            this.admin.deleteSubcategory(subcategory._id).subscribe(function (response) {
                _this.message = response.message;
                _this.message_type = response.status ? 'success' : 'error';
                if (response.status) {
                    _this.subcategories = _utils_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].removeObjectFromArray(_this.subcategories, subcategory, '_id');
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    CategoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-list',
            template: __webpack_require__(/*! ./category-list.component.html */ "./src/app/admin/category-list/category-list.component.html"),
            styles: [__webpack_require__(/*! ./category-list.component.css */ "./src/app/admin/category-list/category-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "./src/app/admin/create-category/create-category.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/create-category/create-category.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/create-category/create-category.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/create-category/create-category.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\n\t<a href=\"#\">Category</a> >\n\t<span class=\"current\"> Add</span>\n</div>\n\n<app-message *ngIf=\"message\" [message]=\"message\" [type]=\"message_type\"></app-message>\n\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n\t<form [formGroup]=\"categoryForm\" (submit)=\"addCategory()\" class=\"form-horizontal\">\n\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss(categoryForm, 'catname')\">\n\t\t\t<label class=\"control-label col-sm-3\" for=\"catname\">Category Name:</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"catname\" placeholder=\"Enter category name\" formControlName=\"catname\" id=\"catname\">\n\t\t\t\t<span class=\"help-block\" *ngIf=\"isFieldValid(categoryForm, 'catname')\">Category name is required</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss(categoryForm, 'status')\">\n\t\t\t<label class=\"control-label col-sm-3\" for=\"status\">Status:</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<select class=\"form-control\" formControlName=\"status\" id=\"status\">\n\t\t\t\t\t<option value=\"1\">Active</option>\n\t\t\t\t\t<option value=\"0\">In-Active</option>\n\t\t\t\t</select>\n\t\t\t\t<span class=\"help-block\" *ngIf=\"isFieldValid(categoryForm, 'status')\">Category status is required</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"col-sm-offset-2 col-sm-10\">\n\t\t\t\t<!-- <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!categoryForm.valid\">Submit</button> -->\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/admin/create-category/create-category.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/create-category/create-category.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCategoryComponent", function() { return CreateCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./src/app/admin/utils/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateCategoryComponent = /** @class */ (function () {
    function CreateCategoryComponent(admin, route, router, formBuilder) {
        this.admin = admin;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.category = [];
        this.categoryForm = this.formBuilder.group({
            'catname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'status': ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    CreateCategoryComponent.prototype.ngOnInit = function () {
    };
    CreateCategoryComponent.prototype.addCategory = function () {
        var _this = this;
        if (this.categoryForm.dirty && this.categoryForm.valid) {
            this.message = '';
            this.message_type = '';
            this.admin.addCategory(this.categoryForm.value).subscribe(function (response) {
                _this.message = response.message;
                _this.message_type = response.status ? 'success' : 'error';
                if (response.status) {
                    window.setTimeout(function () {
                        _this.router.navigate(['admin/category/list']);
                    }, 2000);
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].validateAllFormFields(this.categoryForm);
        }
    };
    CreateCategoryComponent.prototype.isFieldValid = function (formGroup, field) {
        return _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isFieldValid(formGroup, field);
    };
    CreateCategoryComponent.prototype.displayFieldCss = function (formGroup, field) {
        return _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].displayFieldCss(formGroup, field);
    };
    CreateCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-category',
            template: __webpack_require__(/*! ./create-category.component.html */ "./src/app/admin/create-category/create-category.component.html"),
            styles: [__webpack_require__(/*! ./create-category.component.css */ "./src/app/admin/create-category/create-category.component.css")]
        }),
        __metadata("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CreateCategoryComponent);
    return CreateCategoryComponent;
}());



/***/ }),

/***/ "./src/app/admin/create-sub-category/create-sub-category.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/create-sub-category/create-sub-category.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonblock button {\r\n    margin-bottom:5px;  \r\n    display: block;\r\n}\r\nh3 {\r\n    margin: 0 0 5px 0;\r\n    font-size: 15px;\r\n    background: #35b035;\r\n    padding: 5px;\r\n    color: #fff;\r\n}\r\n.top-mar-5{\r\n    margin-top: 5px; \r\n}"

/***/ }),

/***/ "./src/app/admin/create-sub-category/create-sub-category.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin/create-sub-category/create-sub-category.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\n\t<a href=\"#\">Subcategory</a> >\n\t<span class=\"current\"> Add</span>\n</div>\n\n<app-message *ngIf=\"message\" [message]=\"message\" [type]=\"message_type\"></app-message>\n\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n\t<form [formGroup]=\"subcategoryForm\" (submit)=\"addSubcategory()\" class=\"form-horizontal\">\n\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss(subcategoryForm, 'subcatname')\">\n\t\t\t<label class=\"control-label col-sm-3\" for=\"subcatname\">Subcategory Name:</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter category name\" formControlName=\"subcatname\" id=\"subcatname\">\n\t\t\t\t<span class=\"help-block\" *ngIf=\"isFieldValid(subcategoryForm, 'subcatname')\">Subcategory name is required</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss(subcategoryForm, 'catid')\">\n\t\t\t<label class=\"control-label col-sm-3\" for=\"catid\">Category:</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<select class=\"form-control\" formControlName=\"catid\" id=\"catid\">\n\t\t\t\t\t<option value=\"\">-- Select category --</option>\n\t\t\t\t\t<option *ngFor=\"let category of categories\" value=\"{{category._id}}\">{{category.catname}}</option>\n\t\t\t\t</select>\n\t\t\t\t<span class=\"help-block\" *ngIf=\"isFieldValid(subcategoryForm, 'catid')\">Category is required</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss(subcategoryForm, 'status')\">\n\t\t\t<label class=\"control-label col-sm-3\" for=\"status\">Status:</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<select class=\"form-control\" formControlName=\"status\" id=\"status\">\n\t\t\t\t\t<option value=\"1\">Active</option>\n\t\t\t\t\t<option value=\"0\">In-Active</option>\n\t\t\t\t</select>\n\t\t\t\t<span class=\"help-block\" *ngIf=\"isFieldValid(subcategoryForm, 'status')\">Subcategory status is required</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"col-sm-offset-2 col-sm-10\">\n\t\t\t\t<!-- <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!subcategoryForm.valid\">Submit</button> -->\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n<div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\n\t<h3>Subcategory Image</h3>\n\t<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showimageerror\">\n\t\t\t<strong>Image Error : </strong> Please upload subcategory image (Allowed Extension: .JPG) \n\t\t</div>\n\t\t<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"uploadsuccess\">\n\t\t\t Subcategory image updated Successfully. \n\t\t\t</div>\n\t\t\t\n\t<input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\"  *ngIf=\"uploader?.queue?.length < 1\"/>\n\t<table class=\"table\" *ngIf=\"uploader?.queue?.length\">\n\t\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th width=\"50%\">Name</th>\n\t\t\t\t<th>Status</th>\n\t\t\t\t<th>Actions</th>\n\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t<tr *ngFor=\"let item of uploader.queue\">\n\t\t\t\t\t<div class=\"map\" *ngIf=\"uploader?.queue?.length\">\n\t\t\n\t\t\t\t\t\t\t<img src=\"\" imgPreview [image]=\"item?._file\" class=\"media-object\" />\n\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t   <p>{{ item?.file?.name }}</p>\n\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t   </div>\n\t\t\t\t\n\t\t\t\t<td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n\t\t\t\t<!-- <td *ngIf=\"uploader.isHTML5\">\n\t\t\t\t\t<div class=\"progress\" style=\"margin-bottom: 0;\">\n\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</td> -->\n\t\t\t\t<td class=\"text-center\">\n\t\t\t\t   <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>   \n\t\t\t\t\t<span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n\t\t\t\t\t<span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n\t\t\t\t</td>\n\t\t\t\t<td nowrap class=\"buttonblock\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-xs\"\n\t\t\t\t\t\t\t(click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-upload\"></span> Upload\n\t\t\t\t\t</button> \n\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-xs\"\n\t\t\t\t\t\t\t(click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n\t\t\t\t\t</button> \n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-xs\"\n\t\t\t\t\t\t\t(click)=\"item.remove()\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span> Remove\n\t\t\t\t\t</button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t\t   <div *ngIf=\"uploader?.queue?.length\">\n\t\t\t\t<div>\n\n\t\t\t\t\t<div class=\"progress\" >\n\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/create-sub-category/create-sub-category.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/create-sub-category/create-sub-category.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreateSubCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubCategoryComponent", function() { return CreateSubCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./src/app/admin/utils/utils.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var URL = 'http://localhost:3000/api/upload';
var CreateSubCategoryComponent = /** @class */ (function () {
    function CreateSubCategoryComponent(admin, route, router, formBuilder) {
        var _this = this;
        this.admin = admin;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.categories = [];
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.showimageerror = false;
        this.uploadsuccess = false;
        this.subcategoryForm = this.formBuilder.group({
            'subcatname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'catid': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'status': ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.uploader.onSuccessItem = function (item, response, status, headers) { return _this.onSuccessItem(item, response, status, headers); };
    }
    CreateSubCategoryComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        this.imagedata = JSON.parse(response); // success server response
        // this.tempimagename = 'assets/images/products/' + this.imagedata.data.filename;
    };
    CreateSubCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin.getActiveCategories().subscribe(function (response) {
            console.log(response);
            if (response.status) {
                _this.categories = response.data.categories;
            }
            else {
                _this.categories = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    CreateSubCategoryComponent.prototype.addSubcategory = function () {
        var _this = this;
        if (typeof this.imagedata !== undefined && this.imagedata) {
            this.showimageerror = false;
            if (this.subcategoryForm.dirty && this.subcategoryForm.valid) {
                this.message = '';
                this.message_type = '';
                var data = {
                    catid: this.subcategoryForm.value.catid,
                    subcatname: this.subcategoryForm.value.subcatname,
                    status: this.subcategoryForm.value.status,
                    defaultimage: this.imagedata.data.filename,
                };
                this.admin.addSubcategory(data).subscribe(function (response) {
                    _this.message = response.message;
                    _this.message_type = response.status ? 'success' : 'error';
                    if (response.status) {
                        _this.showimageerror = false;
                        _this.uploadsuccess = true;
                        window.setTimeout(function () {
                            _this.router.navigate(['admin/category/list']);
                        }, 2000);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].validateAllFormFields(this.subcategoryForm);
            }
        }
        else {
            this.showimageerror = true;
        }
    };
    CreateSubCategoryComponent.prototype.isFieldValid = function (formGroup, field) {
        return _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isFieldValid(formGroup, field);
    };
    CreateSubCategoryComponent.prototype.displayFieldCss = function (formGroup, field) {
        return _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].displayFieldCss(formGroup, field);
    };
    CreateSubCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-sub-category',
            template: __webpack_require__(/*! ./create-sub-category.component.html */ "./src/app/admin/create-sub-category/create-sub-category.component.html"),
            styles: [__webpack_require__(/*! ./create-sub-category.component.css */ "./src/app/admin/create-sub-category/create-sub-category.component.css")]
        }),
        __metadata("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CreateSubCategoryComponent);
    return CreateSubCategoryComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"breadcrumbs\">\n\t<a href=\"#\">Subcategory</a> >\n\t<span class=\"current\"> Add</span>\n</div> -->\n\n<!-- <app-message *ngIf=\"message\" [message]=\"message\" [type]=\"message_type\"></app-message> -->\n\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n\t<h3>\n\t\tDashboard\n\t</h3>\n</div>"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/admin/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-category/edit-category.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/edit-category/edit-category.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/edit-category/edit-category.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/edit-category/edit-category.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\n\t<a href=\"#\">Category</a> >\n\t<span class=\"current\"> Add</span>\n</div>\n\n<app-message *ngIf=\"message\" [message]=\"message\" [type]=\"message_type\"></app-message>\n\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n\t<form [formGroup]=\"categoryForm\" (submit)=\"updateCategoryDetails()\" class=\"form-horizontal\">\n\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss(categoryForm, 'catname')\">\n\t\t\t<label class=\"control-label col-sm-3\" for=\"catname\">Category Name:</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"catname\" placeholder=\"Enter category name\" formControlName=\"catname\" id=\"catname\"\n\t\t\t\t [(ngModel)]=\"catname\">\n\t\t\t\t<span class=\"help-block\" *ngIf=\"isFieldValid(categoryForm, 'catname')\">Category name is required</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss(categoryForm, 'status')\">\n\t\t\t<label class=\"control-label col-sm-3\" for=\"status\">Status:</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<select class=\"form-control\" formControlName=\"status\" id=\"status\" [(ngModel)]=\"status\">\n\t\t\t\t\t<option value=\"1\">Active</option>\n\t\t\t\t\t<option value=\"0\">In-Active</option>\n\t\t\t\t</select>\n\t\t\t\t<span class=\"help-block\" *ngIf=\"isFieldValid(categoryForm, 'status')\">Category status is required</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"col-sm-offset-2 col-sm-10\">\n\t\t\t\t<!-- <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!categoryForm.valid\">Submit</button> -->\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/admin/edit-category/edit-category.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/edit-category/edit-category.component.ts ***!
  \****************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./src/app/admin/utils/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditCategoryComponent = /** @class */ (function () {
    function EditCategoryComponent(admin, route, router, formBuilder) {
        this.admin = admin;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.category = [];
        this.categoryForm = this.formBuilder.group({
            'catname': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'status': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    EditCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.admin.getCategoryDetails(params.id).subscribe(function (response) {
                if (response.status) {
                    _this.category = response.data.category;
                    _this.catname = _this.category['catname'];
                    _this.status = _this.category['status'];
                }
                else {
                    _this.category = [];
                    _this.catname = '';
                    _this.status = 0;
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    EditCategoryComponent.prototype.ngAfterViewInit = function () {
        //console.log("here");
    };
    EditCategoryComponent.prototype.updateCategoryDetails = function () {
        var _this = this;
        if (this.categoryForm.dirty && this.categoryForm.valid) {
            this.message = '';
            this.message_type = '';
            this.route.params.subscribe(function (params) {
                _this.admin.updateCategoryDetails(params.id, _this.categoryForm.value).subscribe(function (response) {
                    _this.message = response.message;
                    _this.message_type = response.status ? 'success' : 'error';
                }, function (error) {
                    console.log(error);
                });
            });
        }
        else {
            _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].validateAllFormFields(this.categoryForm);
        }
    };
    EditCategoryComponent.prototype.isFieldValid = function (formGroup, field) {
        return _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isFieldValid(formGroup, field);
    };
    EditCategoryComponent.prototype.displayFieldCss = function (formGroup, field) {
        return _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].displayFieldCss(formGroup, field);
    };
    EditCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-category',
            template: __webpack_require__(/*! ./edit-category.component.html */ "./src/app/admin/edit-category/edit-category.component.html"),
            styles: [__webpack_require__(/*! ./edit-category.component.css */ "./src/app/admin/edit-category/edit-category.component.css")]
        }),
        __metadata("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditCategoryComponent);
    return EditCategoryComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-sub-category/edit-sub-category.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin/edit-sub-category/edit-sub-category.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonblock button {\r\n    margin-bottom:5px;  \r\n    display: block;\r\n}\r\nh3 {\r\n    margin: 0 0 5px 0;\r\n    font-size: 15px;\r\n    background: #35b035;\r\n    padding: 5px;\r\n    color: #fff;\r\n}\r\n.top-mar-5{\r\n    margin-top: 5px; \r\n}"

/***/ }),

/***/ "./src/app/admin/edit-sub-category/edit-sub-category.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin/edit-sub-category/edit-sub-category.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\n\t<a routerLink=\"../../category/list\">Subcategory</a> >\n\t<span class=\"current\"> Edit</span>\n</div>\n\n<app-message *ngIf=\"message\" [message]=\"message\" [type]=\"message_type\"></app-message>\n\n<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n\t<form [formGroup]=\"subcategoryForm\" (submit)=\"updateSubcategoryDetails()\" class=\"form-horizontal\">\n\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss(subcategoryForm, 'subcatname')\">\n\t\t\t<label class=\"control-label col-sm-3\" for=\"subcatname\">Subcategory Name:</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"subcatname\" placeholder=\"Enter category name\" formControlName=\"subcatname\" id=\"subcatname\"\n\t\t\t\t [(ngModel)]=\"subcatname\">\n\t\t\t\t<span class=\"help-block\" *ngIf=\"isFieldValid(subcategoryForm, 'subcatname')\">Subcategory name is required</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss(subcategoryForm, 'catid')\">\n\t\t\t<label class=\"control-label col-sm-3\" for=\"catid\">Category:</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<select class=\"form-control\" formControlName=\"catid\" id=\"catid\" [(ngModel)]=\"catid\">\n\t\t\t\t\t<option value=\"\">-- Select category --</option>\n\t\t\t\t\t<option *ngFor=\"let category of categories\" value=\"{{category._id}}\">{{category.catname}}</option>\n\t\t\t\t</select>\n\t\t\t\t<span class=\"help-block\" *ngIf=\"isFieldValid(subcategoryForm, 'catid')\">Category is required</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss(subcategoryForm, 'status')\">\n\t\t\t<label class=\"control-label col-sm-3\" for=\"status\">Status:</label>\n\t\t\t<div class=\"col-sm-9\">\n\t\t\t\t<select class=\"form-control\" formControlName=\"status\" id=\"status\" [(ngModel)]=\"status\">\n\t\t\t\t\t<option value=\"1\">Active</option>\n\t\t\t\t\t<option value=\"0\">In-Active</option>\n\t\t\t\t</select>\n\t\t\t\t<span class=\"help-block\" *ngIf=\"isFieldValid(subcategoryForm, 'status')\">Subcategory status is required</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group\">\n\t\t\t<div class=\"col-sm-offset-2 col-sm-10\">\n\t\t\t\t<!-- <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!subcategoryForm.valid\">Submit</button> -->\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n<div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\n\t\t\t\t<h3>Subcategory Image</h3>\n\t\t\t\t<img *ngIf=\"!uploader?.queue?.length\" src=\"{{defaultimage}}\" />\n\t\t\t\t<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showimageerror\">\n\t\t\t\t\t\t<strong>Image Error : </strong> Please upload subcategory image (Allowed Extension: .JPG)\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"uploadsuccess\">\n\t\t\t\t\t\t New subcategory image updated Successfully.\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3 class=\"top-mar-5\">Update Subcategory Image</h3>\n\t\t\t\t<input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\"  *ngIf=\"uploader?.queue?.length < 1\"/>\n\t\t\t\t<table class=\"table\" *ngIf=\"uploader?.queue?.length\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th width=\"50%\">Name</th>\n\t\t\t\t\t\t\t<th>Status</th>\n\t\t\t\t\t\t\t<th>Actions</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let item of uploader.queue\">\n\t\t\t\t\t\t\t\t<div class=\"map\" *ngIf=\"uploader?.queue?.length\">\n\n\t\t\t\t\t\t\t\t\t\t<img src=\"\" imgPreview [image]=\"item?._file\" class=\"media-object\" />\n\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t   <p>{{ item?.file?.name }}</p>\n\t\t\t\t\t\t\t\t\t\t   </div>\n\t\t\t\t\t\t\t\t\t   </div>\n\n\t\t\t\t\t\t\t<td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n\t\t\t\t\t\t\t<!-- <td *ngIf=\"uploader.isHTML5\">\n\t\t\t\t\t\t\t\t<div class=\"progress\" style=\"margin-bottom: 0;\">\n\t\t\t\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td> -->\n\t\t\t\t\t\t\t<td class=\"text-center\">\n\t\t\t\t\t\t\t   <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td nowrap class=\"buttonblock\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-xs\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-upload\"></span> Upload\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-xs\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-xs\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"item.remove()\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-trash\"></span> Remove\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t   <div *ngIf=\"uploader?.queue?.length\">\n\t\t\t\t\t\t\t<div>\n\n\t\t\t\t\t\t\t\t<div class=\"progress\" >\n\t\t\t\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/edit-sub-category/edit-sub-category.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/edit-sub-category/edit-sub-category.component.ts ***!
  \************************************************************************/
/*! exports provided: EditSubCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSubCategoryComponent", function() { return EditSubCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils */ "./src/app/admin/utils/utils.ts");
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
var EditSubCategoryComponent = /** @class */ (function () {
    function EditSubCategoryComponent(admin, route, router, formBuilder) {
        var _this = this;
        this.admin = admin;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.categories = [];
        this.subcategory = [];
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.showimageerror = false;
        this.uploadsuccess = false;
        this.subcategoryForm = this.formBuilder.group({
            subcatname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            catid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            status: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.uploader.onSuccessItem = function (item, response, status, headers) { return _this.onSuccessItem(item, response, status, headers); };
    }
    EditSubCategoryComponent.prototype.onSuccessItem = function (item, response, status, headers) {
        this.imagedata = JSON.parse(response); // success server response
        // console.log('from server', this.imagedata);
        // this.tempimagename = 'assets/images/products/' + this.imagedata.data.filename;
    };
    EditSubCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin.getActiveCategories().subscribe(function (response) {
            if (response.status) {
                _this.categories = response.data.categories;
            }
            else {
                _this.categories = [];
            }
        }, function (error) {
            console.log(error);
        });
        this.route.params.subscribe(function (params) {
            _this.admin.getSubcategoryDetails(params.id).subscribe(function (response) {
                console.log(response);
                if (response.status) {
                    _this.subcategory = response.data.subcategory;
                    _this.subcatname = _this.subcategory['subcatname'];
                    _this.catid = _this.subcategory['catid']['_id'];
                    _this.status = _this.subcategory['status'];
                    _this.defaultimage = _this.subcategory['defaultimage'];
                }
                else {
                    _this.subcategory = [];
                    _this.subcatname = '';
                    _this.catid = '';
                    _this.status = 0;
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    EditSubCategoryComponent.prototype.refreshdata = function () {
        var _this = this;
        this.subcategory.length = 0;
        this.subcatname = '';
        this.catid = '';
        this.status = 0;
        this.route.params.subscribe(function (params) {
            _this.admin.getSubcategoryDetails(params.id).subscribe(function (response) {
                console.log(response);
                if (response.status) {
                    _this.subcategory = response.data.subcategory;
                    _this.subcatname = _this.subcategory['subcatname'];
                    _this.catid = _this.subcategory['catid']['_id'];
                    _this.status = _this.subcategory['status'];
                    _this.defaultimage = _this.subcategory['defaultimage'];
                }
                else {
                    _this.subcategory = [];
                    _this.subcatname = '';
                    _this.catid = '';
                    _this.status = 0;
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    EditSubCategoryComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    EditSubCategoryComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    EditSubCategoryComponent.prototype.updateSubcategoryDetails = function () {
        var _this = this;
        console.log('this.subcategoryForm.valid', this.subcategoryForm.valid);
        if (this.subcategoryForm.valid) {
            this.message = '';
            this.message_type = '';
            var data_1 = {
                catid: this.subcategoryForm.value.catid,
                subcatname: this.subcategoryForm.value.subcatname,
                status: this.subcategoryForm.value.status,
                defaultimage: !!this.imagedata === false ? this.defaultimage : this.imagedata.data,
            };
            // console.log('data', data, this.imagedata, !!this.imagedata);
            this.route.params.subscribe(function (params) {
                // if (typeof this.imagedata !== undefined && this.imagedata) {
                _this.admin
                    .updateSubcategoryDetails(params.id, data_1)
                    .subscribe(function (response) {
                    if (response.status === true) {
                        _this.showimageerror = false;
                        if (typeof _this.imagedata !== undefined && _this.imagedata) {
                            _this.uploadsuccess = true;
                        }
                        else {
                            _this.uploadsuccess = false;
                        }
                        _this.uploader.queue.length = 0;
                        _this.message = response.message;
                        _this.refreshdata();
                        _this.message_type = response.status ? 'success' : 'error';
                    }
                }, function (error) {
                    console.log(error);
                });
                // } else {
                // 	this.showimageerror = true;
                // }
            });
        }
        else {
            _utils_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].validateAllFormFields(this.subcategoryForm);
        }
    };
    EditSubCategoryComponent.prototype.isFieldValid = function (formGroup, field) {
        return _utils_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].isFieldValid(formGroup, field);
    };
    EditSubCategoryComponent.prototype.displayFieldCss = function (formGroup, field) {
        return _utils_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].displayFieldCss(formGroup, field);
    };
    EditSubCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-sub-category',
            template: __webpack_require__(/*! ./edit-sub-category.component.html */ "./src/app/admin/edit-sub-category/edit-sub-category.component.html"),
            styles: [__webpack_require__(/*! ./edit-sub-category.component.css */ "./src/app/admin/edit-sub-category/edit-sub-category.component.css")]
        }),
        __metadata("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditSubCategoryComponent);
    return EditSubCategoryComponent;
}());



/***/ }),

/***/ "./src/app/admin/footer/footer.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/footer/footer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customize-footer {\n    bottom: 0;\n    padding: 0;\n}"

/***/ }),

/***/ "./src/app/admin/footer/footer.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/footer/footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"footer layout2 layout3 customize-footer\">\n    <div class=\"container\">\n      <div class=\"footer-note layout2\">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-7 col-lg-8 left-content\">\n            <div class=\"coppy-right\">\n              <h3 class=\"content\">© Copyright 2018 <span class=\"site-name\"> TechOne</span> <span class=\"text\"> Multipurpose PSD. </span>All rights reserved</h3>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-4 right-content\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/admin/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/admin/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/admin/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/admin/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/header/header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\t<div class=\"header layout5\">\n\t\t<div class=\"container-fluide\">\n\t\t\t<div class=\"topbar layout1 box-has-content\">\n\t\t\t\t<ul class=\"menu-topbar pull-right\">\n\t\t\t\t\t<li class=\"currencies menu-item-has-children\">\n\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"toggle-sub-menu\">Options</a>\n\t\t\t\t\t\t<ul class=\"list-currencies sub-menu\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a routerLink=\"admin/profile\">\n\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-user\"></i> Profile\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" (click)=\"logout()\">\n\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-off\"></i> Logout\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>&nbsp;\n\t\t\t\t\t<span class=\"\">Welcome\n\t\t\t\t\t\t<strong>Admin</strong> &nbsp;</span>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</header>"

/***/ }),

/***/ "./src/app/admin/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _service_routingState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/routingState */ "./src/app/service/routingState.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(admin, route, router, routingstate) {
        this.admin = admin;
        this.route = route;
        this.router = router;
        this.routingstate = routingstate;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }))
            .subscribe(function (_a) {
            var urlAfterRedirects = _a.urlAfterRedirects;
            console.log('header', _this.routingstate.getPreviousUrl());
        });
        this.checksession();
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.admin.logout().subscribe(function (response) {
            if (response.status) {
                _this.router.navigate(['admin/login']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.checksession = function () {
        var _this = this;
        this.previousurl = this.routingstate.getPreviousUrl();
        this.admin.adminsession().subscribe(function (res) {
            if (res.status === 'fail') {
                _this.router.navigate(['admin/login']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/admin/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/admin/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_routingState__WEBPACK_IMPORTED_MODULE_0__["RoutingState"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/admin/layout/layout.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/layout/layout.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-vertical-wapper {\n    padding-left: 15px;\n    min-height: calc(100vh - 113px);\n}"

/***/ }),

/***/ "./src/app/admin/layout/layout.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/layout/layout.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"main-content home-page main-content-home6\">\n\t<div class=\"container-fluide\">\n\t\t<app-leftmenu></app-leftmenu>\n\n\t\t<div class=\"slideshow-offset container-vertical-wapper\">\n\t\t\t<div class=\"main-slideshow slideshow6\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/admin/layout/layout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/layout/layout.component.ts ***!
  \**************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_routingState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/routingState */ "./src/app/service/routingState.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(router, routingstate) {
        this.router = router;
        this.routingstate = routingstate;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function () {
            _this.routingstate.loadRouting();
        });
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/admin/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/admin/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_routingState__WEBPACK_IMPORTED_MODULE_3__["RoutingState"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/admin/leftmenu/leftmenu.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/leftmenu/leftmenu.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vertical-content{\r\n    min-height: calc(100vh - 165px);\r\n}"

/***/ }),

/***/ "./src/app/admin/leftmenu/leftmenu.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/leftmenu/leftmenu.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left-main-top-content\">\n\t<div class=\"vertical-wapper parent-content\">\n\t\t<div class=\"block-title show-content\">\n\t\t\t<span class=\"icon-bar\">\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t\t<span></span>\n\t\t\t</span>\n\t\t\t<span class=\"text\">Menus</span>\n\t\t</div>\n\t\t<div class=\"vertical-content hidden-content show-up \">\n\t\t\t<ul class=\"vertical-menu ovic-clone-mobile-menu\">\n\t\t\t\t<li>\n\t\t\t\t\t<a routerLink=\"dashboard\" class=\"ovic-menu-item-title\" title=\"Dashboard\">\n\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-th-large\"></i>\n\t\t\t\t\t\t</span> Dashboard</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li class=\"menu-item-has-children has-megamenu\">\n\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"ovic-menu-item-title\" title=\"Category\">\n\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-tasks\"></i>\n\t\t\t\t\t\t</span> Category</a>\n\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"toggle-sub-menu\"></a>\n\t\t\t\t\t<ul class=\"vertical-menu ovic-clone-mobile-menu\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a routerLink=\"category/list\" class=\"ovic-menu-item-title\" title=\"List Category\">\n\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-align-justify\"></i>\n\t\t\t\t\t\t\t\t</span> List\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a routerLink=\"category/add\" class=\"ovic-menu-item-title\" title=\"Add Category\">\n\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-plus\"></i>\n\t\t\t\t\t\t\t\t</span> Add\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a routerLink=\"subcategory/add\" class=\"ovic-menu-item-title\" title=\"Add Subcategory\">\n\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-plus\"></i>\n\t\t\t\t\t\t\t\t</span> Add Subcategory\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\n\t\t\t\t<li class=\"menu-item-has-children has-megamenu\">\n\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"ovic-menu-item-title\" title=\"Product\">\n\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-tree-deciduous\"></i>\n\t\t\t\t\t\t</span> Product</a>\n\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"toggle-sub-menu\"></a>\n\t\t\t\t\t<ul class=\"vertical-menu ovic-clone-mobile-menu\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a routerLink=\"product/list\" class=\"ovic-menu-item-title\" title=\"List Product\">\n\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-align-justify\"></i>\n\t\t\t\t\t\t\t\t</span> List\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\n\t\t\t\t<li class=\"menu-item-has-children has-megamenu\">\n\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"ovic-menu-item-title\" title=\"User\">\n\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-user\"></i>\n\t\t\t\t\t\t</span> User</a>\n\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"toggle-sub-menu\"></a>\n\t\t\t\t\t<ul class=\"vertical-menu ovic-clone-mobile-menu\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a routerLink=\"user/list\" class=\"ovic-menu-item-title\" title=\"List User\">\n\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-align-justify\"></i>\n\t\t\t\t\t\t\t\t</span> List\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/admin/leftmenu/leftmenu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/leftmenu/leftmenu.component.ts ***!
  \******************************************************/
/*! exports provided: LeftmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftmenuComponent", function() { return LeftmenuComponent; });
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

var LeftmenuComponent = /** @class */ (function () {
    function LeftmenuComponent() {
    }
    LeftmenuComponent.prototype.ngOnInit = function () {
    };
    LeftmenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leftmenu',
            template: __webpack_require__(/*! ./leftmenu.component.html */ "./src/app/admin/leftmenu/leftmenu.component.html"),
            styles: [__webpack_require__(/*! ./leftmenu.component.css */ "./src/app/admin/leftmenu/leftmenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftmenuComponent);
    return LeftmenuComponent;
}());



/***/ }),

/***/ "./src/app/admin/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/admin/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.login-page {\n    /* background: #d2d6de; */\n}\n.login-box, .register-box {\n    width: 360px;\n    margin: 7% auto;\n}\n.login-logo, .register-logo {\n    font-size: 35px;\n    text-align: center;\n    margin-bottom: 25px;\n    font-weight: 300;\n}\n.login-box-body, .register-box-body {\n    background: #fff;\n    padding: 20px;\n    border-top: 0;\n    color: #666;\n}\n.login-box-msg, .register-box-msg {\n    margin: 0;\n    text-align: center;\n    padding: 0 20px 20px 20px;\n}"

/***/ }),

/***/ "./src/app/admin/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-message *ngIf=\"message\" [message]=\"message\" [type]=\"message_type\"></app-message>\n\n<div class=\"login-page\">\n\t<div class=\"container\">\n\t\t<div class=\"login-box\">\n\t\t\t<div class=\"login-logo\">\n\t\t\t\t<a routerLink=\"../../admin/login\">\n\t\t\t\t\t<b>Agriculture</b> Admin</a>\n\t\t\t</div>\n\t\t\t<div class=\"login-box-body\">\n\t\t\t\t<p class=\"login-box-msg\">Sign in to start your session</p>\n\n\t\t\t\t<form [formGroup]=\"loginForm\" (submit)=\"login()\">\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss(loginForm, 'email')\">\n\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" formControlName=\"email\" id=\"email\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n\t\t\t\t\t\t<span class=\"help-block\" *ngIf=\"isFieldValid(loginForm, 'email')\">Email is required</span>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss(loginForm, 'password')\">\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Enter password\" formControlName=\"password\" id=\"password\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n\t\t\t\t\t\t<span class=\"help-block\" *ngIf=\"isFieldValid(loginForm, 'password')\">Password is required</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-xs-8\">\n\t\t\t\t\t\t\t<!--<div class=\"checkbox icheck\">\n\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"remember_me\"> Remember Me\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-xs-4\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Sign In</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/admin/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./src/app/admin/utils/utils.ts");
/* harmony import */ var _service_routingState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/routingState */ "./src/app/service/routingState.ts");
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
    function LoginComponent(admin, route, router, formBuilder, routingstate) {
        this.admin = admin;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.routingstate = routingstate;
        this.previousurl = '';
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.router.events
        // .pipe(filter(event => event instanceof NavigationEnd))
        // .subscribe(() => {
        //   this.previousurl = this.routingstate.getPreviousUrl();
        //   console.log('le', this.routingstate.getHistory());
        // });
        // this.router.events
        // .pipe(filter(event => event instanceof NavigationEnd))
        // .subscribe(() => {
        //   this.routingstate.loadRouting();
        // });
        this.checksession();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.loginForm.dirty && this.loginForm.valid) {
            this.message = '';
            this.message_type = '';
            this.admin.login(this.loginForm.value).subscribe(function (response) {
                if (response.status) {
                    _this.message = response.message;
                    _this.message_type = 'success';
                    _this.router.navigate(['admin']);
                }
                else {
                    _this.message = response.message;
                    _this.message_type = 'error';
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].validateAllFormFields(this.loginForm);
        }
    };
    LoginComponent.prototype.checksession = function () {
        var _this = this;
        // console.log('prev url', this.routingstate.getPreviousUrl());
        this.admin.adminsession().subscribe(function (res) {
            if (res.status === 'success') {
                if (_this.routingstate.getPreviousUrl() !== '/index') {
                    _this.router.navigate([_this.routingstate.getPreviousUrl()]);
                }
                else {
                    _this.router.navigate(['admin/']);
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginComponent.prototype.isFieldValid = function (formGroup, field) {
        return _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isFieldValid(formGroup, field);
    };
    LoginComponent.prototype.displayFieldCss = function (formGroup, field) {
        return _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].displayFieldCss(formGroup, field);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/admin/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/admin/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _service_routingState__WEBPACK_IMPORTED_MODULE_5__["RoutingState"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/message/message.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin/message/message.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n    position: absolute;\n    top: 10px;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    z-index: 10;\n    width: 50%;\n}\n\n@media(max-width: 767px) {\n    .message {\n        width: 90%;\n    }\n}"

/***/ }),

/***/ "./src/app/admin/message/message.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/message/message.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"show_message\" class=\"message\">\n\t<div class=\"alert alert-{{ message_style_class }} fade in alert-dismissible\">\n\t\t<a class=\"close\" (click)=\"hideMessage()\" title=\"close\">×</a>\n\t\t<strong>{{message_type_text}}!</strong> {{message}}\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/admin/message/message.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/message/message.component.ts ***!
  \****************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
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

var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
        this.show_message = true;
    }
    MessageComponent.prototype.ngOnChanges = function (changes) {
        // console.log(this.message);
        // const msg: SimpleChange = changes.message;
        // console.log('prev value: ', msg.previousValue);
        // console.log('got name: ', msg.currentValue);
        // this.message_text = msg.currentValue;
    };
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.show_message = true;
        switch (this.type) {
            case 'success':
                this.message_style_class = 'success';
                this.message_type_text = 'Success';
                break;
            case 'error':
                this.message_style_class = 'danger';
                this.message_type_text = 'Error';
                break;
            case 'warning':
                this.message_style_class = 'warning';
                this.message_type_text = 'Warning';
                break;
            case 'info':
                this.message_style_class = 'info';
                this.message_type_text = 'Info';
                break;
            default:
                this.message_style_class = 'success';
                this.message_type_text = 'Success';
        }
        window.setTimeout(function () {
            _this.show_message = false;
        }, 10000);
    };
    MessageComponent.prototype.hideMessage = function () {
        this.show_message = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "type", void 0);
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/admin/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/admin/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/admin/product-list/product-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/product-list/product-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-list {\n    margin-top: 15px;\n    border-top: 1px solid #cfcfcf;\n}\n.product-list-heading {\n    margin-bottom: 15px;\n    border-bottom: 1px solid #cfcfcf;\n}\n.product-details {\n    width: 100%;\n    height: auto;\n    padding: 10px;\n    margin-bottom: 10px;\n    border: 1px solid #cfcfcf;\n}\n.product-details img {\n    width: 100%;\n    height: auto;\n    margin-bottom: 10px;\n}"

/***/ }),

/***/ "./src/app/admin/product-list/product-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/product-list/product-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\n\t<a routerLink=\"../../product/list\">Product</a> >\n\t<span class=\"current\"> List</span>\n</div>\n\n<app-message *ngIf=\"message\" [message]=\"message\" [type]=\"message_type\"></app-message>\n\n<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n\t<div class=\"row\">\n\t\t<form [formGroup]=\"productSearchForm\" (submit)=\"findProducts()\" class=\"form-inline\">\n\t\t\t<!-- <div class=\"form-group\" [ngClass]=\"displayFieldCss(productSearchForm, 'catid')\">\n\t\t\t\t<label for=\"catid\">Category : </label>&nbsp;\n\t\t\t\t<select class=\"form-control\" formControlName=\"catid\" id=\"catid\">\n\t\t\t\t\t<option value=\"\">-- Select Category --</option>\n\t\t\t\t\t<option *ngFor=\"let category of categories\" value=\"{{ category._id }}\">{{ category.catname }}</option>\n\t\t\t\t</select>\n\t\t\t\t<span class=\"help-block\" *ngIf=\"isFieldValid(productSearchForm, 'catid')\">Category is required</span>\n\t\t\t</div>&nbsp;&nbsp;\n\t\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss(productSearchForm, 'subcatid')\">\n\t\t\t\t<label for=\"subcatid\">Subcategory : </label>&nbsp;\n\t\t\t\t<select class=\"form-control\" formControlName=\"subcatid\" id=\"subcatid\">\n\t\t\t\t\t<option value=\"\">-- Select Subcategory --</option>\n\t\t\t\t\t<option *ngFor=\"let subcategory of subcategories\" value=\"{{ subcategory._id }}\">{{ subcategory.subcatname }}</option>\n\t\t\t\t</select>\n\t\t\t\t<span class=\"help-block\" *ngIf=\"isFieldValid(productSearchForm, 'subcatid')\">Subcategory is required</span>\n\t\t\t</div>&nbsp;&nbsp;\n\t\t\t<button type=\"submit\" class=\"btn btn-default\">Submit</button> -->\n\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss(productSearchForm, 'catid')\">\n\t\t\t\t\t<label for=\"catid\">Category : </label>&nbsp;\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"catid\" id=\"catid\" (change)=\"loadSubcategoryByCategoryID($event.target.value)\">\n\t\t\t\t\t\t<option value=\"\">-- Select Category --</option>\n\t\t\t\t\t\t<option *ngFor=\"let category of categories\" value=\"{{ category._id }}\">{{ category.catname }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<span class=\"help-block\" *ngIf=\"isFieldValid(productSearchForm, 'catid')\">Category is required</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t<div class=\"form-group\" [ngClass]=\"displayFieldCss(productSearchForm, 'subcatid')\">\n\t\t\t\t\t<label for=\"subcatid\">Subcategory : </label>&nbsp;\n\t\t\t\t\t<select class=\"form-control\" formControlName=\"subcatid\" id=\"subcatid\" (change)=\"currentSubcategory = $event.target.value\">\n\t\t\t\t\t\t<option value=\"\">-- Select Subcategory --</option>\n\t\t\t\t\t\t<option *ngFor=\"let subcategory of subcategories\" value=\"{{ subcategory._id }}\">{{ subcategory.subcatname }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<span class=\"help-block\" *ngIf=\"isFieldValid(productSearchForm, 'subcatid')\">Subcategory is required</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success pull-left\">Show Product</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\t<div class=\"row product-list\">\n\t\t<div class=\"product-list-heading\">\n\t\t\t<h4>Product List</h4>\n\t\t</div>\n\t\t<div class=\"products\">\n\n\t\t\t<div *ngIf=\"!productFormSubmitted; else productElseBlock\" class=\"col-md-6\">\n\t\t\t\t<div class=\"alert alert-info fade in alert-dismissible\">\n\t\t\t\t\t<strong>Info!</strong> Click on\n\t\t\t\t\t<strong>Show Product</strong> button to see product.\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<ng-template #productElseBlock>\n\t\t\t\t<div *ngIf=\"!productLoaded; else productElseBlock\">\n\t\t\t\t\t<h4>\n\t\t\t\t\t\t<i class=\"fa fa-spinner fa-spin fa-lg\"></i> Loading products ...\n\t\t\t\t\t</h4>\n\t\t\t\t</div>\n\t\t\t\t<ng-template #productElseBlock>\n\t\t\t\t\t<div class=\"col-sm-2\" *ngFor=\"let product of products\">\n\t\t\t\t\t\t<div class=\"product-details\">\n\t\t\t\t\t\t\t<img src=\"{{ product.pimage }}\">\n\t\t\t\t\t\t\t<h5>{{ product.pname }}</h5>\n\t\t\t\t\t\t\t<button class=\"btn btn-success btn-block\" (click)=\"makeProductFeatured(product)\" *ngIf=\"!product.is_featured; else featureButtonElseBlock\">Make Featured</button>\n\t\t\t\t\t\t\t<ng-template #featureButtonElseBlock>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-block\" (click)=\"makeProductUnfeatured(product)\">Make Unfeatured</button>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\t\t\t</ng-template>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/product-list/product-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/product-list/product-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/admin.service */ "./src/app/service/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils */ "./src/app/admin/utils/utils.ts");
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
    function ProductListComponent(admin, route, router, formBuilder) {
        this.admin = admin;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.categories = [];
        this.subcategories = [];
        this.currentSubcategory = '';
        this.products = [];
        this.productFormSubmitted = false;
        this.productLoaded = false;
        this.productSearchForm = this.formBuilder.group({
            catid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            subcatid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin.getActiveCategories().subscribe(function (response) {
            if (response.status) {
                _this.categories = response.data.categories;
            }
            else {
                _this.categories = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProductListComponent.prototype.loadSubcategoryByCategoryID = function (category_id) {
        var _this = this;
        this.category_id = category_id;
        this.admin.getActiveSubcategoryListByCategory(category_id).subscribe(function (response) {
            if (response.status) {
                _this.subcategories = response.data.subcategories;
            }
            else {
                _this.subcategories = [];
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProductListComponent.prototype.findProducts = function () {
        var _this = this;
        if (this.productSearchForm.dirty && this.productSearchForm.valid) {
            this.productFormSubmitted = true;
            this.productLoaded = false;
            var category_id = this.productSearchForm.controls.catid.value;
            var subcategory_id = this.productSearchForm.controls.subcatid.value;
            this.admin
                .getProductListByCategorySubcategory(category_id, subcategory_id)
                .subscribe(function (response) {
                if (response.status) {
                    _this.products = response.data.products;
                }
                else {
                    _this.products = [];
                }
                _this.productLoaded = true;
            }, function (error) {
                console.log(error);
            });
        }
        else {
            _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].validateAllFormFields(this.productSearchForm);
        }
    };
    ProductListComponent.prototype.makeProductFeatured = function (product) {
        var _this = this;
        var product_id = product._id;
        this.message = '';
        this.message_type = '';
        this.admin
            .makeProductFeatured(this.category_id, this.currentSubcategory, product_id)
            .subscribe(function (response) {
            _this.message = response.message;
            _this.message_type = response.status ? 'success' : 'error';
            if (response.status) {
                _this.products.map(function (item, index) {
                    if (item._id === product_id) {
                        item.is_featured = true;
                    }
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProductListComponent.prototype.makeProductUnfeatured = function (product) {
        var _this = this;
        var product_id = product._id;
        this.message = '';
        this.message_type = '';
        this.admin
            .makeProductUnfeatured(this.currentSubcategory, product_id)
            .subscribe(function (response) {
            _this.message = response.message;
            _this.message_type = response.status ? 'success' : 'error';
            if (response.status) {
                _this.products.map(function (item, index) {
                    if (item._id === product_id) {
                        item.is_featured = false;
                    }
                });
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProductListComponent.prototype.isFieldValid = function (formGroup, field) {
        return _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].isFieldValid(formGroup, field);
    };
    ProductListComponent.prototype.displayFieldCss = function (formGroup, field) {
        return _utils_utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].displayFieldCss(formGroup, field);
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/admin/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/admin/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/admin/user-list/user-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/user-list/user-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uc-first {\n    text-transform: capitalize;\n}\n.uppercase {\n    text-transform: uppercase;\n}"

/***/ }),

/***/ "./src/app/admin/user-list/user-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/user-list/user-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\n\t<a routerLink=\"../../user/list\">User</a> >\n\t<span class=\"current\"> List</span>\n</div>\n\n<div class=\"col-xs-12 col-sm-12 col-md-10 col-lg-10\">\n\t<div class=\"table-responsive\">\n\t\t<table class=\"table table-bordered table-striped\">\n\t\t\t<thead>\n\t\t\t\t<tr>\n\t\t\t\t\t<th class=\"text-center\">First Name</th>\n\t\t\t\t\t<th class=\"text-center\">Middle Name</th>\n\t\t\t\t\t<th class=\"text-center\">Last Name</th>\n\t\t\t\t\t<th class=\"text-center\">Email</th>\n\t\t\t\t\t<th class=\"text-center\">Date Created</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngIf=\"!userLoaded; else elseBlock\">\n\t\t\t\t\t<td colspan=\"3\" class=\"text-center\">\n\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\t<i class=\"fa fa-spinner fa-spin fa-lg\"></i> Loading users ...\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t<tr *ngFor=\"let user of users\">\n\t\t\t\t\t\t<td class=\"uc-first\">{{ user.firstname }}</td>\n\t\t\t\t\t\t<td class=\"uc-first\">{{ user.middlename }}</td>\n\t\t\t\t\t\t<td class=\"uc-first\">{{ user.lastname }}</td>\n\t\t\t\t\t\t<td>{{ user.email }}</td>\n\t\t\t\t\t\t<td class=\"text-center\">{{ user.created_at | date: 'dd-MM-yyyy h:m a' }}</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</ng-template>\n\t\t\t</tbody>\n\t\t</table>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/admin/user-list/user-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/user-list/user-list.component.ts ***!
  \********************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/admin.service */ "./src/app/service/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListComponent = /** @class */ (function () {
    function UserListComponent(admin) {
        this.admin = admin;
        this.users = [];
        this.userLoaded = false;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.admin.getUserList().subscribe(function (response) {
            if (response.status) {
                _this.users = response.data.users;
            }
            else {
                _this.users = [];
            }
            _this.userLoaded = true;
        }, function (error) {
            console.log(error);
        });
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/admin/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/admin/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [_service_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/admin/utils/utils.ts":
/*!**************************************!*\
  !*** ./src/app/admin/utils/utils.ts ***!
  \**************************************/
/*! exports provided: Utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.validatefields = function (somefields) {
        console.log(somefields);
    };
    Utils.validateAllFormFields = function (formGroup) {
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
                Utils.validateAllFormFields(control);
            }
        });
    };
    Utils.isFieldValid = function (formGroup, field) {
        return !formGroup.get(field).valid && formGroup.get(field).touched;
    };
    Utils.displayFieldCss = function (formGroup, field) {
        return {
            'has-error': Utils.isFieldValid(formGroup, field)
        };
    };
    Utils.removeObjectFromArray = function (list, obj, checking_field) {
        var removeIndex;
        var categories = list.map(function (item, index) {
            if (item[checking_field] === obj[checking_field]) {
                removeIndex = index;
                return index;
            }
        });
        list.splice(categories[removeIndex], 1);
        return list;
    };
    return Utils;
}());



/***/ }),

/***/ "./src/app/service/admin.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/admin.service.ts ***!
  \******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
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
var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    AdminService.prototype.handleError = function (error) {
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
    AdminService.prototype.login = function (formData) {
        return this.http.post(apiUrl + 'admin/login', formData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.logout = function () {
        return this.http.get(apiUrl + 'admin/logout', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.getCategoryList = function () {
        return this.http.get(apiUrl + 'admin/categories').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.getActiveCategories = function () {
        return this.http.get(apiUrl + 'admin/active-categories', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.getSubcategoryListByCategory = function (category_id) {
        return this.http
            .get(apiUrl + 'admin/category/' + category_id + '/subcategories', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.getActiveSubcategoryListByCategory = function (category_id) {
        return this.http
            .get(apiUrl + 'admin/category/' + category_id + '/active-subcategories', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.getCategoryDetails = function (category_id) {
        return this.http
            .get(apiUrl + 'admin/category/' + category_id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.updateCategoryDetails = function (category_id, formData) {
        return this.http
            .put(apiUrl + 'admin/category/' + category_id, formData, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.addCategory = function (formData) {
        return this.http
            .post(apiUrl + 'admin/category/', formData, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.deleteCategory = function (category_id) {
        return this.http
            .delete(apiUrl + 'admin/category/' + category_id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.getSubcategoryDetails = function (subcategory_id) {
        return this.http
            .get(apiUrl + 'admin/subcategory/' + subcategory_id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.updateSubcategoryDetails = function (subcategory_id, formData) {
        return this.http
            .put(apiUrl + 'admin/subcategory/' + subcategory_id, formData, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.addSubcategory = function (formData) {
        return this.http
            .post(apiUrl + 'admin/subcategory/', formData, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.deleteSubcategory = function (subcategory_id) {
        return this.http
            .delete(apiUrl + 'admin/subcategory/' + subcategory_id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.getProductListByCategorySubcategory = function (category_id, subcategory_id) {
        return this.http
            .get(apiUrl +
            'admin/category/' +
            category_id +
            '/subcategory/' +
            subcategory_id +
            '/products', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.makeProductFeatured = function (category_id, subcategory_id, product_id) {
        return this.http
            .post(apiUrl +
            'admin/categoryid/' +
            category_id +
            '/subcategory/' +
            subcategory_id +
            '/product/' +
            product_id +
            '/featured', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.makeProductUnfeatured = function (subcategory_id, product_id) {
        return this.http
            .post(apiUrl +
            'admin/subcategory/' +
            subcategory_id +
            '/product/' +
            product_id +
            '/unfeatured', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.getUserList = function () {
        return this.http.get(apiUrl + 'admin/users', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService.prototype.adminsession = function () {
        return this.http.get(apiUrl + 'adminauth', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ })

}]);
//# sourceMappingURL=app-admin-admin-module.js.map