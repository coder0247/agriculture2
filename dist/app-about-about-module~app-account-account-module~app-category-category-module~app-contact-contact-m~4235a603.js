(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~4235a603"],{

/***/ "./src/app/header-common/header-common.component.css":
/*!***********************************************************!*\
  !*** ./src/app/header-common/header-common.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-row {\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -5px;\n    margin-left: -5px;\n}\n.search-button {\n    font-size: 20px;\n    color: #fff;\n    width: 60px;\n    height: 42px;\n    line-height: 42px;\n    text-align: center;\n    border-radius: 0 21px 21px 0;\n    display: inline-block;\n    background-color: #35b035;\n}"

/***/ }),

/***/ "./src/app/header-common/header-common.component.html":
/*!************************************************************!*\
  !*** ./src/app/header-common/header-common.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #mmenu class=\"ovic-menu-clone-wrap\">\n    <div class=\"ovic-menu-panels-actions-wrap\">\n\t\t<span class=\"ovic-menu-current-panel-title\">MENU</span>\n\t\t<a class=\"ovic-menu-close-btn ovic-menu-close-panels\" href=\"javascript:void(0)\" (click)=\"mmenutoggleClass()\">x</a>\n\t</div>\n    <div class=\"ovic-menu-panels\">\n        <div id=\"ovic-menu-panel-main\" class=\"ovic-menu-panel ovic-menu-panel-main ovic-menu-panel-opened\">\n\t\t\t\t<!-- <ul class=\"vertical-menu ovic-clone-mobile-menu\" *ngIf=\"mainCats ; else sidebarloading\">\n\n\t\t\t\t\t\t<li *ngFor=\"let item of mainCats;let i = index\">\n\t\t\t\t\t\t\t<a routerLink=\"/category/{{item._id}}\" class=\"ovic-menu-item-title\" title=\"{{item.catname}}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"></span>{{item.catname}}</a>\n\t\t\t\t\t\t</li> -->\n            <ul class=\"depth-01\" *ngIf=\"mainCats ; else sidebarloading\">\n\t\t\t\t\t<li *ngFor=\"let item of mainCats;let i = index\">\n\t\t\t\t\t\t\t<a routerLink=\"/category/{{item._id}}\" class=\"ovic-menu-item-title\" title=\"{{item.catname}}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"></span>{{item.catname}}</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<!-- <li class=\"menu-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t\t\t<a routerLink=\"/\" class=\"kt-item-title ovic-menu-item-title\" title=\"Home\">HOME</a>\n\t\t\t\t\t\t\t</li> -->\n                <li class=\"menu-item clone-menu-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t<a routerLink=\"/\" class=\"kt-item-title ovic-menu-item-title\" title=\"Home\">HOME</a>\n                </li>\n\t\t\t\t<li class=\"menu-item clone-menu-item\" routerLinkActive=\"active\">\n\t\t\t\t\t\t<a routerLink=\"/about\" class=\"kt-item-title ovic-menu-item-title\" title=\"Home\">About Us</a>\n                </li>\n                <li class=\"menu-item clone-menu-item\">\t<a routerLink=\"/contact\" class=\"kt-item-title ovic-menu-item-title\" title=\"Home\">Contact Us</a></li>\n            </ul>\n        </div>\n\n\n    </div>\n</div>\n<header>\n\t<div class=\"header layout3 no-prepend-box-sticky header-home4\">\n\t\t<div class=\"header-mobile\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"logo-mob\">\n\t\t\t\t\t\t\t\t<a routerLink=\"/\"><img src=\"assets/images/logo.jpg\" alt=\"\" style=\"width: 139px\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a #cogactive href=\"javascript:void(0)\" (click)=\"mconfigtoggleClass()\" class=\"header-top-menu-mobile\"><span class=\"fa fa-cog\" aria-hidden=\"true\"></span></a><a class=\"menu-bar menu-toggle\" href=\"javascript:void(0)\" (click)=\"mmenutoggleClass()\"><span class=\"icon\"><span></span><span></span><span></span></span><span class=\"text\">Menu</span></a>\n\t\t\t\t\t\t<div  #mobileconfig class=\"mobile-config\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"close-btn\" (click)=\"mconfigtoggleClass()\" >x</a>\n\t\t\t\t\t\t\t<div class=\"topbar\">\n\n\t\t\t\t\t\t\t\t<ul class=\"menu-topbar top-links\" *ngIf=\"!loggedinMenu\">\n\t\t\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/user/register\">Register</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/user/signin\">Sign in</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<ul class=\"menu-topbar top-links\" *ngIf=\"loggedinMenu\">\n\t\t\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/user/account\">My Account</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"logout()\">Logout</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<ul class=\"list-socials\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t<li class=\"pull-right\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"postnewadd()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tPost New Ad\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<form [formGroup]=\"searchForm\" (ngSubmit)=\"submitForm()\" class=\"form-inline\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"search-form layout1 box-has-content\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"search-block1\" *ngIf=\"mainCats; else showloading\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-3 col-xs-12 cropoption  subcategory-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"false\" #categorySelect [items]=\"mainCats\" [selectOnTab]=\"true\" bindLabel=\"catname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Select category\" formControlName=\"category\" (change)=\"getSubcatList($event._id)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-xs-12 col-md-3 cropoption subcategory-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"false\" #cropsSelect [items]=\"subCats\" [selectOnTab]=\"true\" bindLabel=\"subcatname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Select subcategory\" formControlName=\"subcategory\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group  col-xs-12 col-md-3 regionoption region-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"false\" #regionSelect [items]=\"regions\" [selectOnTab]=\"true\" bindLabel=\"regionname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Select region\" formControlName=\"region\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"search-button1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tSearch <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<ng-template #showloading>Loading...</ng-template>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t<div class=\"topbar layout1\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<ul class=\"list-socials\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"menu-topbar top-links hidden-xs hidden-sm abc\" *ngIf=\"!loggedinMenu\" >\n\t\t\t\t\t<li routerLinkActive=\"active\">\n\t\t\t\t\t\t<a routerLink=\"/user/register\">Register</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li routerLinkActive=\"active\">\n\t\t\t\t\t\t<a routerLink=\"/user/signin\">Sign in</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- <li routerLinkActive=\"active\">\n\t\t\t\t\t\t<a routerLink=\"/newsletter\">Newsletter</a>\n\t\t\t\t\t</li> -->\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"menu-topbar top-links hidden-xs hidden-sm\" *ngIf=\"loggedinMenu\">\n\t\t\t\t\t<li routerLinkActive=\"active\">\n\t\t\t\t\t\t<a routerLink=\"/user/account\">My Account</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li routerLinkActive=\"active\">\n\t\t\t\t\t\t<a (click)=\"logout()\">Logout</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- <li routerLinkActive=\"active\">\n\t\t\t\t\t\t<a routerLink=\"/newsletter\">Newsletter</a>\n\t\t\t\t\t</li> -->\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"main-header\">\n\t\t\t<div class=\"top-header\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-12 col-xs-12 left-content hidden-xs hidden-sm\">\n\t\t\t\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t\t\t<a routerLink=\"/\"><img src=\"assets/images/logo.jpg\" alt=\"Agriculture\" style=\"width: 139px\"></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-7 col-sm-8 col-xs-12 midle-content\">\n\n\t\t\t\t\t\t\t<form [formGroup]=\"searchForm\" (ngSubmit)=\"submitForm()\" class=\"form-inline\">\n\n\t\t\t\t\t\t\t\t<div class=\"search-form layout1 box-has-content\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"search-block1\" *ngIf=\"mainCats; else showloading\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-row\" [ngClass]=\"{'selecthascontent': selecthascontent}\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-3 category-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"false\" #categorySelect [items]=\"mainCats\" [selectOnTab]=\"true\" bindLabel=\"catname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Select category\" formControlName=\"category\" (change)=\"getSubcatList($event._id)\">\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-3 cropoption subcategory-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"false\" #cropsSelect [items]=\"subCats\" [selectOnTab]=\"true\" bindLabel=\"subcatname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Select subcategory\" formControlName=\"subcategory\">\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group  col-md-3 regionoption region-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"false\" #regionSelect [items]=\"regions\" [selectOnTab]=\"true\" bindLabel=\"regionname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Select region\" formControlName=\"region\">\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"search-button\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\" firstselect search-choice parent-content\">\n\t\t\t\t\t\t\t\t\t\t\t<select data-placeholder=\"All Categories\" class=\"chosen-select\" formControlName=\"crop\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"{{item._id}}\" *ngFor=\"let item of crops;let i = index\">{{item.cropname}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"secondselect search-choice parent-content\">\n\t\t\t\t\t\t\t\t\t\t\t<select data-placeholder=\"Divisions\" class=\"chosen-select\" formControlName=\"region\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"{{item._id}}\" *ngFor=\"let item of regions;let i = index\">{{item.regionname}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<ng-template #showloading>Loading...</ng-template>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-12 right-content hidden-sm hidden-xs\">\n\t\t\t\t\t\t\t<ul class=\"header-control\">\n\t\t\t\t\t\t\t\t<!-- <li class=\"hotline\">\n\t\t\t\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"text\">Call us now</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"number\">(080)123 4567 891</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t<li class=\"box-minicart\">\n\t\t\t\t\t\t\t\t\t<div class=\"minicart \">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"postnewadd()\">\n\t\t\t\t\t\t\t\t\t\t\tPost New Ad\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"this-sticky\">\n\t\t\t\t<div class=\"header-nav-wapper\">\n\t\t\t\t\t<div class=\"container main-menu-wapper\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-4 col-sm-12 hidden-xs hidden-sm\">\n\t\t\t\t\t\t\t\t<div class=\"vertical-wapper parent-content nonactive\" #parentcontent>\n\t\t\t\t\t\t\t\t\t<div class=\"block-title show-content\" (click)=\"toggleClass()\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-bar\">\n\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"text\">Categories</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"vertical-content hidden-content\" #hiddencontent>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"vertical-menu ovic-clone-mobile-menu\" *ngIf=\"mainCats ; else sidebarloading\">\n\n\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let item of mainCats;let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/category/{{item._id}}\" class=\"ovic-menu-item-title\" title=\"{{item.catname}}\" (click)=\"toggleClass()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon\"></span>{{item.catname}}</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t\t\t<!-- <li class=\"menu-item-has-children has-megamenu\">\n                          <a href=\"#\" class=\"ovic-menu-item-title\" title=\"More...\"><span class=\"icon\"></span> More...</a>\n                          <a href=\"#\" class=\"toggle-sub-menu\"></a>\n                          <div class=\"sub-menu mega-menu sub-menu2\">\n                            <div class=\"row\">\n                              <div class=\"widget-custom-menu col-xs-12 col-sm-12 col-md-4 col-lg-4\" *ngFor=\"let subarray of morecats\">\n\n                                  <ul>\n                                      <li *ngFor=\"let item of subarray\">\n                                        <a routerLink=\"/crop/{{item._id}}\">{{item.cropname}}</a>\n                                      </li>\n                                  </ul>\n                              </div>\n                            </div>\n                          </div>\n                        </li> -->\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<ng-template #sidebarloading>Loading...</ng-template>\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"view-all-categori\">\n                      <a href=\"#\" class=\"button\">All Categories <i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></a>\n                    </div> -->\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-9 col-md-8 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"header-nav container-vertical-wapper \">\n\t\t\t\t\t\t\t\t\t<div class=\"header-nav-inner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"box-header-nav\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\" container-wapper\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"header-top-menu-mobile\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"fa fa-cog\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"menu-bar mobile-navigation \" href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"text\">Main Menu</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"menu-main-menu\" class=\"main-menu clone-main-menu ovic-clone-mobile-menu box-has-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"menu-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/\" class=\"kt-item-title ovic-menu-item-title\" title=\"Home\">HOME</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"menu-item\" routerLinkActive=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/about\">About US</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"menu-item\" routerLinkActive=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/contact\">Contact US</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</header>\n"

/***/ }),

/***/ "./src/app/header-common/header-common.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/header-common/header-common.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderCommonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderCommonComponent", function() { return HeaderCommonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/home.service */ "./src/app/service/home.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderCommonComponent = /** @class */ (function () {
    function HeaderCommonComponent(homepage, renderer, fb, product, route, router, auth, _location) {
        this.homepage = homepage;
        this.renderer = renderer;
        this.fb = fb;
        this.product = product;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this._location = _location;
        this.loggedinMenu = false;
        this.categoryerror = false;
        this.subcategoryerror = false;
        this.regionerror = false;
        this.selectedCategory = '';
        this.selecthascontent = false;
    }
    HeaderCommonComponent.prototype.mmenutoggleClass = function () {
        // console.log('menu click', this.mmenu.nativeElement.classList);
        if (this.mmenu.nativeElement.classList.contains('open')) {
            this.renderer.removeClass(this.mmenu.nativeElement, 'open');
        }
        else {
            this.renderer.addClass(this.mmenu.nativeElement, 'open');
        }
    };
    HeaderCommonComponent.prototype.mconfigtoggleClass = function () {
        // console.log('menu click', this.mmenu.nativeElement.classList);
        if (this.mobileconfig.nativeElement.classList.contains('open')) {
            this.renderer.removeClass(this.cogactive.nativeElement, 'active');
            this.renderer.removeClass(this.mobileconfig.nativeElement, 'open');
            this.renderer.removeClass(this.mmenu.nativeElement, 'open');
        }
        else {
            this.renderer.addClass(this.cogactive.nativeElement, 'active');
            this.renderer.addClass(this.mobileconfig.nativeElement, 'open');
            this.renderer.removeClass(this.mmenu.nativeElement, 'open');
        }
    };
    HeaderCommonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checksession();
        var regionid = localStorage.getItem('regionid') !== null ? localStorage.getItem('regionid') : '';
        var subcategoryid = localStorage.getItem('subcategoryid') !== null ? localStorage.getItem('subcategoryid') : '';
        var categoryid = localStorage.getItem('categoryid') !== null ? localStorage.getItem('categoryid') : '';
        if (categoryid !== '') {
            console.log('categoryid', categoryid);
            this.selecthascontent = true;
            // this.getSubcatList(categoryid);
            this.searchForm = this.fb.group({
                category: [categoryid],
                subcategory: [subcategoryid],
                region: [regionid]
            });
        }
        else {
            this.selecthascontent = false;
            this.searchForm = this.fb.group({
                category: [],
                subcategory: [],
                region: []
            });
        }
        // this.route.params.subscribe(params => {
        //   this.category = params.catid || null;
        //   this.crop = params.cropid || null;
        //   this.region = params.regionid || null;
        //   if (this.category) {
        //     this.selectedCategory = this.category;
        //     this.searchForm = this.fb.group({
        //       category: [this.selectedCategory],
        //       subcategory: [],
        //       region: []
        //     });
        //   } else {
        //     this.searchForm = this.fb.group({
        //       category: [],
        //       subcategory: [],
        //       region: []
        //     });
        //   }
        // });
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
        // regions
        this.homepage.getRegionList().subscribe(function (res) {
            if (res.status === 'success') {
                // console.log(res);
                _this.regions = res.data.regions;
            }
        }, function (err) {
            console.log(err);
        });
        // if (this.selectedCategory) {
        this.homepage.getSubcatListByCatID(categoryid).subscribe(function (res) {
            if (res.status === 'success') {
                _this.subCats = res.data.subcategory;
            }
        }, function (err) {
            console.log(err);
        });
        // }
    };
    HeaderCommonComponent.prototype.routing = function () {
        var pattern = /(inbox|newad|activeads|archiveads|sent|profile|view|viewsent)$/;
        return pattern.test(this._location.path());
    };
    HeaderCommonComponent.prototype.checksession = function () {
        var _this = this;
        this.auth.authsession().subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.loggedinMenu = true;
            }
            else {
                _this.loggedinMenu = false;
                localStorage.removeItem('firstname');
                localStorage.removeItem('email');
                localStorage.removeItem('lastname');
                localStorage.removeItem('isadmin');
                localStorage.removeItem('id');
                if (_this.routing()) {
                    _this.router.navigate(['user/signin']);
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeaderCommonComponent.prototype.logout = function () {
        var _this = this;
        this.auth.dologout().subscribe(function (res) {
            _this.loggedinMenu = false;
            localStorage.removeItem('firstname');
            localStorage.removeItem('email');
            localStorage.removeItem('lastname');
            localStorage.removeItem('isadmin');
            localStorage.removeItem('id');
            _this.router.navigate(['user/signin']);
        }, function (err) {
            console.log(err);
        });
    };
    HeaderCommonComponent.prototype.postnewadd = function () {
        this.router.navigate(['user/account/newad']);
    };
    HeaderCommonComponent.prototype.getSubcatList = function (catid) {
        var _this = this;
        this.homepage.getSubcatListByCatID(catid).subscribe(function (res) {
            if (res.status === 'success') {
                _this.subCats = res.data.subcategory;
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeaderCommonComponent.prototype.toggleClass = function () {
        if (this.parentcontent.nativeElement.classList.contains('nonactive')) {
            this.renderer.removeClass(this.parentcontent.nativeElement, 'nonactive');
            this.renderer.addClass(this.parentcontent.nativeElement, 'active');
            this.renderer.addClass(this.hiddencontent.nativeElement, 'show-up');
        }
        else {
            this.renderer.removeClass(this.parentcontent.nativeElement, 'active');
            this.renderer.addClass(this.parentcontent.nativeElement, 'nonactive');
            this.renderer.removeClass(this.hiddencontent.nativeElement, 'show-up');
        }
    };
    HeaderCommonComponent.prototype.submitForm = function () {
        var credentials = this.searchForm.value;
        this.categoryerror = false;
        this.subcategoryerror = false;
        this.regionerror = false;
        if (credentials.category === null) {
            this.categoryerror = true;
        }
        if (credentials.subcategory === null) {
            this.subcategoryerror = true;
        }
        if (credentials.region === null) {
            this.regionerror = true;
        }
        this.router.navigate(['/search', 'subcategory', credentials.subcategory, 'region', credentials.region]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('parentcontent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderCommonComponent.prototype, "parentcontent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('hiddencontent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderCommonComponent.prototype, "hiddencontent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mmenu', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderCommonComponent.prototype, "mmenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mobileconfig', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderCommonComponent.prototype, "mobileconfig", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cogactive', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderCommonComponent.prototype, "cogactive", void 0);
    HeaderCommonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-common',
            template: __webpack_require__(/*! ./header-common.component.html */ "./src/app/header-common/header-common.component.html"),
            styles: [__webpack_require__(/*! ./header-common.component.css */ "./src/app/header-common/header-common.component.css")]
        }),
        __metadata("design:paramtypes", [_service_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], HeaderCommonComponent);
    return HeaderCommonComponent;
}());



/***/ }),

/***/ "./src/app/header-common/header-common.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/header-common/header-common.module.ts ***!
  \*******************************************************/
/*! exports provided: HeaderCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderCommonModule", function() { return HeaderCommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _header_common_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header-common.component */ "./src/app/header-common/header-common.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _header_common_component__WEBPACK_IMPORTED_MODULE_6__["HeaderCommonComponent"]
    }
];
var HeaderCommonModule = /** @class */ (function () {
    function HeaderCommonModule() {
    }
    HeaderCommonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"]
            ],
            declarations: [_header_common_component__WEBPACK_IMPORTED_MODULE_6__["HeaderCommonComponent"]],
            exports: [_header_common_component__WEBPACK_IMPORTED_MODULE_6__["HeaderCommonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]],
        })
    ], HeaderCommonModule);
    return HeaderCommonModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-about-about-module~app-account-account-module~app-category-category-module~app-contact-contact-m~4235a603.js.map