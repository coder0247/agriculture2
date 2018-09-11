(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-home-home-module"],{

/***/ "./node_modules/ngx-owl-carousel/index.js":
/*!************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var owl_carousel_component_1 = __webpack_require__(/*! ./src/owl-carousel.component */ "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js");
var owl_child_component_1 = __webpack_require__(/*! ./src/owl-child.component */ "./node_modules/ngx-owl-carousel/src/owl-child.component.js");
__export(__webpack_require__(/*! ./src/owl-carousel.component */ "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js"));
var OwlModule = (function () {
    function OwlModule() {
    }
    OwlModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                owl_carousel_component_1.OwlCarousel, owl_child_component_1.OwlChild
            ],
            exports: [
                owl_carousel_component_1.OwlCarousel
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], OwlModule);
    return OwlModule;
}());
exports.OwlModule = OwlModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/src/owl-carousel.component.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var owl_child_component_1 = __webpack_require__(/*! ./owl-child.component */ "./node_modules/ngx-owl-carousel/src/owl-child.component.js");
var OwlCarousel = (function () {
    function OwlCarousel(differs) {
        this.differs = differs;
        this.carouselClasses = '';
        this.options = {};
    }
    Object.defineProperty(OwlCarousel.prototype, "items", {
        set: function (coll) {
            this._items = coll;
            if (coll && !this.differ) {
                this.differ = this.differs.find(coll).create(null);
            }
        },
        enumerable: true,
        configurable: true
    });
    OwlCarousel.prototype.ngDoCheck = function () {
        if (this.differ) {
            var changes = this.differ.diff(this._items);
            if (changes) {
                var changed_1 = false;
                var changedFn = function () {
                    changed_1 = true;
                };
                changes.forEachAddedItem(changedFn);
                changes.forEachMovedItem(changedFn);
                changes.forEachRemovedItem(changedFn);
                if (changed_1) {
                    this.reInit();
                }
            }
        }
    };
    OwlCarousel.prototype.reInit = function () {
        var _this = this;
        if (this.$owlChild.$owl) {
            this.$owlChild.$owl.css('display', 'none');
        }
        setTimeout(function () {
            _this.$owlChild.destroyOwl();
            if (_this.$owlChild.$owl) {
                var itemLength = _this._items && _this._items.length;
                if (itemLength && itemLength <= _this.$owlChild.currentSlideIndex) {
                    _this.$owlChild.currentSlideIndex = itemLength;
                }
                _this.$owlChild.$owl.css('display', 'block');
            }
            _this.$owlChild.initOwl();
        }, 0);
    };
    OwlCarousel.prototype.refresh = function () {
        this.trigger('refresh.owl.carousel');
    };
    OwlCarousel.prototype.next = function (options) {
        this.trigger('next.owl.carousel', options);
    };
    OwlCarousel.prototype.previous = function (options) {
        this.trigger('prev.owl.carousel', options);
    };
    OwlCarousel.prototype.to = function (options) {
        this.trigger('to.owl.carousel', options);
    };
    OwlCarousel.prototype.trigger = function (action, options) {
        this.$owlChild.trigger(action, options);
    };
    __decorate([
        core_1.ViewChild('owl'), 
        __metadata('design:type', owl_child_component_1.OwlChild)
    ], OwlCarousel.prototype, "$owlChild", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "carouselClasses", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], OwlCarousel.prototype, "items", null);
    OwlCarousel = __decorate([
        core_1.Component({
            selector: 'owl-carousel',
            template: '<owl-carousel-child #owl [ngClass]="carouselClasses" [options]="options" >' +
                '<ng-content></ng-content></owl-carousel-child>',
        }), 
        __metadata('design:paramtypes', [core_1.IterableDiffers])
    ], OwlCarousel);
    return OwlCarousel;
}());
exports.OwlCarousel = OwlCarousel;
//# sourceMappingURL=owl-carousel.component.js.map

/***/ }),

/***/ "./node_modules/ngx-owl-carousel/src/owl-child.component.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/src/owl-child.component.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var OwlChild = (function () {
    function OwlChild(el) {
        this.el = el;
        this.owlClass = true;
        this.options = {};
        if (typeof $ === 'undefined' && typeof jQuery !== 'undefined') {
            $ = jQuery;
        }
    }
    OwlChild.prototype.ngOnInit = function () {
        if ((typeof window !== 'undefined') && $ && typeof $.fn.owlCarousel === 'function') {
            this.$owl = $(this.el.nativeElement);
        }
    };
    OwlChild.prototype.ngAfterViewInit = function () {
        this.initOwl();
    };
    OwlChild.prototype.initOwl = function () {
        var _this = this;
        if (this.$owl) {
            var options = {};
            Object.assign(options, this.options);
            if (this.currentSlideIndex) {
                options.startPosition = this.currentSlideIndex;
            }
            this.$owl.owlCarousel(options);
            this.$owl.on('changed.owl.carousel', function (event) {
                _this.currentSlideIndex = event.item.index;
            });
        }
    };
    OwlChild.prototype.trigger = function (action, options) {
        if (this.$owl) {
            this.$owl.trigger(action, options);
        }
    };
    OwlChild.prototype.ngOnDestroy = function () {
        this.destroyOwl();
        delete this.$owl;
    };
    OwlChild.prototype.destroyOwl = function () {
        if (this.$owl) {
            this.$owl.trigger('destroy.owl.carousel')
                .removeClass('owl-loaded owl-hidden')
                .find('.owl-stage:empty, .owl-item:empty')
                .remove();
        }
    };
    __decorate([
        core_1.HostBinding('class.owl-carousel'), 
        __metadata('design:type', Object)
    ], OwlChild.prototype, "owlClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlChild.prototype, "options", void 0);
    OwlChild = __decorate([
        core_1.Component({
            selector: 'owl-carousel-child',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OwlChild);
    return OwlChild;
}());
exports.OwlChild = OwlChild;
//# sourceMappingURL=owl-child.component.js.map

/***/ }),

/***/ "./src/app/home/banner/banner.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/banner/banner.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/banner/banner.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/banner/banner.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!--Banner-->\n  <div class=\"row row-banner\">\n    <div class=\"col-ts-12 col-xs-6 col-sm-6\">\n      <div class=\"banner banner-effect1\">\n        <a href=\"#\"><img src=\"images/bannersmall/1.jpg\" alt=\"\"></a>\n      </div>\n    </div>\n    <div class=\"col-ts-12 col-xs-6 col-sm-6\">\n      <div class=\"banner banner-effect1\">\n        <a href=\"#\"><img src=\"images/bannersmall/2.jpg\" alt=\"\"></a>\n      </div>\n    </div>\n  </div>\n  <!--/Banner-->"

/***/ }),

/***/ "./src/app/home/banner/banner.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/banner/banner.component.ts ***!
  \*************************************************/
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
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/home/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/home/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/home/brands/brands.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/brands/brands.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand1 {\r\n    margin: 30px 0;\r\n    /* background-color: #f8f8f8; */\r\n    padding: 23px;\r\n}"

/***/ }),

/***/ "./src/app/home/brands/brands.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/brands/brands.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Logo Brand-->\n<div class=\"brand1\">\n\t<!-- <div class=\"owl-carousel\" data-autoplay=\"false\" data-nav=\"false\" data-dots=\"false\" data-loop=\"false\" data-slidespeed=\"800\"\n\t data-margin=\"30\" data-responsive='{\"0\":{\"items\":2}, \"640\":{\"items\":2}, \"768\":{\"items\":3}, \"992\":{\"items\":4}, \"1200\":{\"items\":5}}'>\n\t\t<div class=\"brand-item\">\n\t\t\t<a href=\"#\">\n\t\t\t\t<img src=\"images/small/1.png\" alt=\"\">\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"brand-item\">\n\t\t\t<a href=\"#\">\n\t\t\t\t<img src=\"images/small/1.png\" alt=\"\">\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"brand-item\">\n\t\t\t<a href=\"#\">\n\t\t\t\t<img src=\"images/small/1.png\" alt=\"\">\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"brand-item\">\n\t\t\t<a href=\"#\">\n\t\t\t\t<img src=\"images/small/1.png\" alt=\"\">\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"brand-item\">\n\t\t\t<a href=\"#\">\n\t\t\t\t<img src=\"images/small/1.png\" alt=\"\">\n\t\t\t</a>\n\t\t</div>\n\t</div> -->\n</div>\n<!--/Logo brand-->"

/***/ }),

/***/ "./src/app/home/brands/brands.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/brands/brands.component.ts ***!
  \*************************************************/
/*! exports provided: BrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return BrandsComponent; });
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

var BrandsComponent = /** @class */ (function () {
    function BrandsComponent() {
    }
    BrandsComponent.prototype.ngOnInit = function () {
    };
    BrandsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brands',
            template: __webpack_require__(/*! ./brands.component.html */ "./src/app/home/brands/brands.component.html"),
            styles: [__webpack_require__(/*! ./brands.component.css */ "./src/app/home/brands/brands.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BrandsComponent);
    return BrandsComponent;
}());



/***/ }),

/***/ "./src/app/home/featuredlarge/featuredlarge.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/featuredlarge/featuredlarge.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-item .group-button .add-to-cart{\n    width: 100%;\n}\n.section-head {\n    height: auto !important;\n}\n.section-title span {\n    font-size: 12px;\n}"

/***/ }),

/***/ "./src/app/home/featuredlarge/featuredlarge.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/featuredlarge/featuredlarge.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-show box-has-content\">\n\t<div class=\"section-head box-has-content\">\n\t\t<h4 class=\"section-title\">Best Seller <span *ngIf=\"!topSellProduct\">: Loading</span></h4>\n\t</div>\n\t<div class=\"section-content\">\n\t\t<div class=\"item-show\" *ngIf=\"topSellProduct\">\n\t\t\t<!-- <div class=\"owl-carousel nav-style3 has-thumbs\" data-autoplay=\"false\" data-nav=\"false\" data-dots=\"false\" data-loop=\"false\"\n\t\t\t data-slidespeed=\"800\" data-margin=\"0\" data-responsive='{\"0\":{\"items\":1}, \"640\":{\"items\":1}, \"768\":{\"items\":1}, \"1024\":{\"items\":1}, \"1200\":{\"items\":1}}'>\n\t\t\t\t<a href=\"detail.html\">\n\t\t\t\t\t<img src=\"images/product-slide1.jpg\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t\t<a href=\"detail.html\">\n\t\t\t\t\t<img src=\"images/product-slide1.jpg\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t\t<a href=\"detail.html\">\n\t\t\t\t\t<img src=\"images/product-slide1.jpg\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t\t<a href=\"detail.html\">\n\t\t\t\t\t<img src=\"images/product-slide1.jpg\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t</div> -->\n\t\t\t<div>\n\t\t\t\t<a routerLink=\"product/detail/{{ topSellProduct.productid._id }}\" class=\"\">\n\t\t\t\t\t<img src=\"{{ topSellProduct.productid.pimage }}\" alt=\"\">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"product-item\">\n\t\t\t\t<div class=\"product-inner\">\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t<a routerLink=\"product/detail/{{ topSellProduct.productid._id }}\" class=\"product-name\">\n\t\t\t\t\t\t\t{{ topSellProduct.productid.pname | titlecase}}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t<span class=\"ins\">${{ topSellProduct.productid.saleamount }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"other-product-show auto-clear box-has-content equal-container\">\n\t\t\t<div class=\"product-item layout1 col-lg-4 col-md-4 col-sm-4 col-xs-6 col-ts-12\" *ngFor=\"let item of otherTopSellProduct; let i = index;\">\n\t\t\t\t<div class=\"product-inner equal-elem\">\n\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"quickview-button\" (click)=\"quickview(item.productid)\">\n\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</span> Quick View</a>\n\t\t\t\t\t\t<a routerLink=\"product/detail/{{ item.productid._id }}\" class=\"thumb-link\">\n\t\t\t\t\t\t\t<img src=\"{{ item.productid.pimage }}\" alt=\"\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t<a routerLink=\"product/detail/{{ item.productid._id }}\" class=\"product-name\">\n\t\t\t\t\t\t\t\t{{ item.productid.pname | titlecase}}\n\t\t\t\t\t\t\t</a>\t\n\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t<span>${{ item.productid.saleamount }}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"info\">\n\t\t\t\t\t\t<a routerLink=\"product/detail/{{ item.productid._id }}\" class=\"product-name\">\n\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t<span>${{ item.productid.saleamount }}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div> -->\n\t\t\t\t\t<div class=\"group-button\">\n\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t<a routerLink=\"product/detail/{{ item.productid._id }}\" class=\"add-to-cart\">\n\t\t\t\t\t\t\t\t<span class=\"text\">Contact</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<!-- <a href=\"#\" class=\"compare-button\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-exchange\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"wishlist-button\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</a> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/featuredlarge/featuredlarge.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/featuredlarge/featuredlarge.component.ts ***!
  \***************************************************************/
/*! exports provided: FeaturedlargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedlargeComponent", function() { return FeaturedlargeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quickview/quickview.component */ "./src/app/home/quickview/quickview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeaturedlargeComponent = /** @class */ (function () {
    function FeaturedlargeComponent(product, route, router, modalService) {
        this.product = product;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.bestselllist = [];
        this.otherTopSellProduct = [];
        this.limit = 7;
    }
    FeaturedlargeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product.getBestSellProductList(this.limit).subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.bestselllist = res['data'].bestselllist;
                if (_this.bestselllist.length > 0) {
                    _this.topSellProduct = _this.bestselllist[0];
                }
                if (_this.bestselllist.length > 1) {
                    for (var i = 1; i < _this.bestselllist.length; i++) {
                        var obj = _this.bestselllist[i];
                        _this.otherTopSellProduct.push(obj);
                    }
                }
            }
            else {
            }
        }, function (err) {
            console.log(err);
        });
    };
    FeaturedlargeComponent.prototype.quickview = function (product) {
        var image = product.pimage;
        var pname = product.pname;
        var pprice = product.saleamount;
        var initialState = {
            //modaldata: [image, pname, pprice]
            modaldata: { product: product }
        };
        this.bsModalRef = this.modalService.show(_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_4__["QuickviewComponent"], { initialState: initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    FeaturedlargeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-featuredlarge',
            template: __webpack_require__(/*! ./featuredlarge.component.html */ "./src/app/home/featuredlarge/featuredlarge.component.html"),
            styles: [__webpack_require__(/*! ./featuredlarge.component.css */ "./src/app/home/featuredlarge/featuredlarge.component.css")]
        }),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], FeaturedlargeComponent);
    return FeaturedlargeComponent;
}());



/***/ }),

/***/ "./src/app/home/featuredsmall/featuredsmall.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/featuredsmall/featuredsmall.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-item .group-button .add-to-cart{\n    width: 100%;\n}\n.owl-carousel.nav-style2 .owl-nav.disabled {\n    display: block !important;\n}\n.section-title span {\n    font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/app/home/featuredsmall/featuredsmall.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/featuredsmall/featuredsmall.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--List Products-->\n<div class=\"group-product layout1\">\n\t<div class=\"kt-tab nav-tab-style1\">\n\n\t\t\t<div>\n\n\t\t\t\t<!-- <div *ngFor=\"let pitems of allproducts; let i = index\">\n\t\t\t\t\t<div *ngFor=\"let item of allproducts[i].productid\">\n\t\t\t\t\t\t{{item | json}}\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t\t<tabset class=\"featured\">\n\t\t\t\t\t\t<div class=\"section-head box-has-content\">\n\t\t\t\t\t\t\t\t<h4 class=\"section-title\">Featured Products\t<span *ngIf=\"!allproducts?.length\">: Loading...</span></h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t<span *ngFor=\"let item of featurelist\">\n\n\t\t\t\t\t\t<tab #staticTabs *ngIf=\"item.productlist.length > 0\" heading=\"{{item.categoryname}}\" (select)='onSelect($event)'>\n\t\t\t\t\t\t\t<owl-carousel #owlElement *ngIf= \"item.productlist\" [options]=\"{items: 5, dots: false, autoplay: false, smartSpeed:800, navigation: true ,\n\t\t\t\t\t\t\t\tresponsive: { '0': {  items: 1, margin: 0 },\n\t\t\t\t\t\t\t\t\t\t\t  '480': { items: 2,  margin: 0 },\n\t\t\t\t\t\t\t\t\t\t\t  '700': { items: 3, margin: -1 },\n\t\t\t\t\t\t\t\t\t\t\t  '768': { items: 2 },\n\t\t\t\t\t\t\t\t\t\t\t  '1025': { items: 3 },\n\t\t\t\t\t\t\t\t\t\t\t  '1200': { items: 5 }\n\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t}\" [items]=\"images\" [carouselClasses]= \"owlclasses\">\n\t\t\t\t\t\t\t\t\t<div class=\"row-item\" *ngFor=\"let products of item.productlist;let i = index\">\n\t\t\t\t\t\t\t\t<div class=\"product-item layout1\" *ngFor=\"let product of products;let j = index\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"product-inner equal-elem\" (mouseover)=\"mousehoverowl()\" (mouseleave)=\"mouseleaverowl()\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"quickview-button\" (click)=\"quickview(product)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</span> Quick View</a>\n\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"product/detail/{{ product._id }}\" class=\"thumb-link\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{product.pimage}}\" alt=\"\">\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"product/detail/{{ product._id }}\" class=\"product-name\">\n\t\t\t\t\t\t\t\t\t\t\t\t{{ product.pname | titlecase}}\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span>${{ product.saleamount }}</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"group-button\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"product/detail/{{ product._id }}\" class=\"add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"text\">Contact</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a href=\"#\" class=\"compare-button\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-exchange\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"wishlist-button\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</a> -->\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</owl-carousel>\n\t\t\t\t\t\t</tab>\n\t\t\t\t\t</span>\n\t\t\t\t</tabset>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- <div class=\"tab-content\">\n\t\t\t<div id=\"tab1\" class=\"tab-panel active\">\n\t\t\t\t<div class=\"owl-carousel product-list-owl nav-style2 equal-container\" data-autoplay=\"false\" data-nav=\"true\" data-dots=\"false\"\n\t\t\t\t data-loop=\"false\" data-slidespeed=\"800\" data-margin=\"0\" data-responsive='{\"0\":{\"items\":1}, \"480\":{\"items\":2,\"margin\":0},\"700\":{\"items\":3,\"margin\":-1}, \"768\":{\"items\":2}, \"1025\":{\"items\":3}, \"1200\":{\"items\":5}}'>\n\t\t\t\t\t<div class=\"row-item\">\n\t\t\t\t\t\t<div class=\"product-item layout1\">\n\t\t\t\t\t\t\t<div class=\"product-inner equal-elem\">\n\t\t\t\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"quickview-button\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t</span> Quick View</a>\n\t\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"thumb-link\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"images/product1.jpg\" alt=\"\">\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t\t\t\t<a href=\"detail.html\" class=\"product-name\">Rubberized Hard Case Older MacBook Pro 13.3\"</a>\n\t\t\t\t\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t\t\t\t\t<span>$350.00</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"group-button\">\n\t\t\t\t\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"add-to-cart\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"text\">ADD TO CART</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-cart-arrow-down\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"compare-button\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-exchange\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"wishlist-button\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div> -->\n\t</div>\n<!-- </div> -->\n<!--/List Products-->\n"

/***/ }),

/***/ "./src/app/home/featuredsmall/featuredsmall.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/featuredsmall/featuredsmall.component.ts ***!
  \***************************************************************/
/*! exports provided: FeaturedsmallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedsmallComponent", function() { return FeaturedsmallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quickview/quickview.component */ "./src/app/home/quickview/quickview.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeaturedsmallComponent = /** @class */ (function () {
    function FeaturedsmallComponent(product, route, router, modalService, renderer, ele) {
        this.product = product;
        this.route = route;
        this.router = router;
        this.modalService = modalService;
        this.renderer = renderer;
        this.ele = ele;
        this.allproducts = [];
        this.catelist = [];
        this.featurelist = [];
        this.agricultural_services = [];
        this.agro_jobs = [];
        this.farm_lands = [];
        this.fertilizers = [];
        this.crops = [];
        this.machinery = [];
        this.insurance = [];
        this.education = [];
        this.owlclasses = ['owl-theme', 'nav-style2', 'row', 'sliding'];
    }
    FeaturedsmallComponent.prototype.onSelect = function (e) {
        var featureditems = Array.from(document.querySelectorAll('.owl-stage-outer'));
        featureditems.forEach(function (owlitems, index) {
            if (index !== 0) {
                owlitems.setAttribute('style', 'padding: 0px 5px 200px; margin: 0px -5px -200px;');
            }
        });
    };
    FeaturedsmallComponent.prototype.mousehoverowl = function () {
        var elementreference = this.owlElement;
        var owlouterstage = elementreference.nativeElement.querySelector('.owl-stage-outer');
        this.renderer.setStyle(owlouterstage, 'padding-top', '0px');
        this.renderer.setStyle(owlouterstage, 'padding-right', '5px');
        this.renderer.setStyle(owlouterstage, 'padding-left', '5px');
        this.renderer.setStyle(owlouterstage, 'padding-bottom', '200px');
        this.renderer.setStyle(owlouterstage, 'margin-top', '0px');
        this.renderer.setStyle(owlouterstage, 'margin-left', '-5px');
        this.renderer.setStyle(owlouterstage, 'margin-right', '-5px');
        this.renderer.setStyle(owlouterstage, 'margin-bottom', '-200px');
        this.owlclasses = ['owl-theme', 'nav-style2', 'row', 'sliding', 'owl-hover'];
    };
    FeaturedsmallComponent.prototype.mouseleaverowl = function () {
        var elementreference = this.owlElement;
        var owlouterstage = elementreference.nativeElement.querySelector('.owl-stage-outer');
        this.renderer.removeStyle(owlouterstage, 'padding');
        this.renderer.removeStyle(owlouterstage, 'margin');
        this.owlclasses = ['owl-theme', 'nav-style2', 'row', 'sliding'];
    };
    FeaturedsmallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product.getCatList().subscribe(function (res) {
            if (res['status'] === 'success') {
                // this.catlist = res['data'].category;
                // console.log(this.allproducts);
                // tslint:disable-next-line
                for (var item in res['data'].category) {
                    _this.catelist.push(res['data'].category[item].catname);
                }
                // console.log(this.catelist);
            }
            else {
            }
        }, function (err) {
            console.log(err);
        });
        this.product.getSFeaturedProductList().subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.allproducts = res['data'].featured;
                // console.log(this.allproducts);
                // tslint:disable-next-line
                for (var item in _this.allproducts) {
                    if (_this.allproducts[item].categoryid.catname === 'Crops') {
                        for (var prod in _this.allproducts[item].productid) {
                            _this.crops.push(_this.allproducts[item].productid[prod]);
                        }
                    }
                    if (_this.allproducts[item].categoryid.catname ===
                        'Agricultural Services') {
                        for (var prod in _this.allproducts[item].productid) {
                            _this.agricultural_services.push(_this.allproducts[item].productid[prod]);
                        }
                    }
                    if (_this.allproducts[item].categoryid.catname === 'Agro Jobs') {
                        for (var prod in _this.allproducts[item].productid) {
                            _this.agro_jobs.push(_this.allproducts[item].productid[prod]);
                        }
                    }
                    if (_this.allproducts[item].categoryid.catname === 'Farm Lands') {
                        for (var prod in _this.allproducts[item].productid) {
                            _this.farm_lands.push(_this.allproducts[item].productid[prod]);
                        }
                    }
                    if (_this.allproducts[item].categoryid.catname ===
                        'Fertilizers/Chemicals') {
                        for (var prod in _this.allproducts[item].productid) {
                            _this.fertilizers.push(_this.allproducts[item].productid[prod]);
                        }
                    }
                    if (_this.allproducts[item].categoryid.catname ===
                        'Machinery & Equiqment') {
                        for (var prod in _this.allproducts[item].productid) {
                            _this.machinery.push(_this.allproducts[item].productid[prod]);
                        }
                    }
                    if (_this.allproducts[item].categoryid.catname === 'Insurance') {
                        for (var prod in _this.allproducts[item].productid) {
                            _this.insurance.push(_this.allproducts[item].productid[prod]);
                        }
                    }
                    if (_this.allproducts[item].categoryid.catname === 'Education/Training') {
                        for (var prod in _this.allproducts[item].productid) {
                            _this.education.push(_this.allproducts[item].productid[prod]);
                        }
                    }
                }
                _this.featurelist = [
                    {
                        categoryname: 'Crops',
                        productlist: lodash__WEBPACK_IMPORTED_MODULE_5__["chunk"](_this.crops, 2)
                    },
                    {
                        categoryname: 'Agricultural Services',
                        productlist: lodash__WEBPACK_IMPORTED_MODULE_5__["chunk"](_this.agricultural_services, 2)
                    },
                    {
                        categoryname: 'Agro Jobs',
                        productlist: lodash__WEBPACK_IMPORTED_MODULE_5__["chunk"](_this.agro_jobs, 2)
                    },
                    {
                        categoryname: 'Farm Lands',
                        productlist: lodash__WEBPACK_IMPORTED_MODULE_5__["chunk"](_this.farm_lands, 2)
                    },
                    {
                        categoryname: 'Fertilizers/Chemicals',
                        productlist: lodash__WEBPACK_IMPORTED_MODULE_5__["chunk"](_this.farm_lands, 2)
                    },
                    {
                        categoryname: 'Machinery & Equiqment',
                        productlist: lodash__WEBPACK_IMPORTED_MODULE_5__["chunk"](_this.machinery, 2)
                    },
                    {
                        categoryname: 'Insurance',
                        productlist: lodash__WEBPACK_IMPORTED_MODULE_5__["chunk"](_this.insurance, 2)
                    },
                    {
                        categoryname: 'Education/Training',
                        productlist: lodash__WEBPACK_IMPORTED_MODULE_5__["chunk"](_this.education, 2)
                    }
                ];
                // console.log('featured', this.featurelist);
            }
            else {
            }
        }, function (err) {
            console.log(err);
        });
    };
    FeaturedsmallComponent.prototype.showproductdetails = function (itemid) {
        this.router.navigate(['product/detail/' + itemid]);
    };
    FeaturedsmallComponent.prototype.quickview = function (product) {
        var image = product.pimage;
        var pname = product.pname;
        var pprice = product.saleamount;
        var initialState = {
            // modaldata: [image, pname, pprice]
            modaldata: { product: product }
        };
        this.bsModalRef = this.modalService.show(_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_4__["QuickviewComponent"], {
            initialState: initialState
        });
        this.bsModalRef.content.closeBtnName = 'Close';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('owlElement', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FeaturedsmallComponent.prototype, "owlElement", void 0);
    FeaturedsmallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-featuredsmall',
            template: __webpack_require__(/*! ./featuredsmall.component.html */ "./src/app/home/featuredsmall/featuredsmall.component.html"),
            styles: [__webpack_require__(/*! ./featuredsmall.component.css */ "./src/app/home/featuredsmall/featuredsmall.component.css")]
        }),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FeaturedsmallComponent);
    return FeaturedsmallComponent;
}());



/***/ }),

/***/ "./src/app/home/headerprimary/headerprimary.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/headerprimary/headerprimary.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-row {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-right: -5px;\r\n    margin-left: -5px;\r\n}\r\n.search-button {\r\n    font-size: 20px;\r\n    color: #fff;\r\n    width: 60px;\r\n    height: 42px;\r\n    line-height: 42px;\r\n    text-align: center;\r\n    border-radius: 0 21px 21px 0;\r\n    display: inline-block;\r\n    background-color: #35b035;\r\n}"

/***/ }),

/***/ "./src/app/home/headerprimary/headerprimary.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/headerprimary/headerprimary.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #mmenu class=\"ovic-menu-clone-wrap\">\n    <div class=\"ovic-menu-panels-actions-wrap\">\n\t\t<span class=\"ovic-menu-current-panel-title\">MENU</span>\n\t\t<a class=\"ovic-menu-close-btn ovic-menu-close-panels\" href=\"javascript:void(0)\" (click)=\"mmenutoggleClass()\">x</a>\n\t</div>\n    <div class=\"ovic-menu-panels\">\n        <div id=\"ovic-menu-panel-main\" class=\"ovic-menu-panel ovic-menu-panel-main ovic-menu-panel-opened\">\n\t\t\t\t<!-- <ul class=\"vertical-menu ovic-clone-mobile-menu\" *ngIf=\"mainCats ; else sidebarloading\">\n\n\t\t\t\t\t\t<li *ngFor=\"let item of mainCats;let i = index\">\n\t\t\t\t\t\t\t<a routerLink=\"/category/{{item._id}}\" class=\"ovic-menu-item-title\" title=\"{{item.catname}}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"></span>{{item.catname}}</a>\n\t\t\t\t\t\t</li> -->\n            <ul class=\"depth-01\" *ngIf=\"mainCats ; else sidebarloading\">\n\t\t\t\t\t<li *ngFor=\"let item of mainCats;let i = index\">\n\t\t\t\t\t\t\t<a routerLink=\"/category/{{item._id}}\" class=\"ovic-menu-item-title\" title=\"{{item.catname}}\">\n\t\t\t\t\t\t\t\t<span class=\"icon\"></span>{{item.catname}}</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<!-- <li class=\"menu-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t\t\t<a routerLink=\"/\" class=\"kt-item-title ovic-menu-item-title\" title=\"Home\">HOME</a>\n\t\t\t\t\t\t\t</li> -->\n                <li class=\"menu-item clone-menu-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t<a routerLink=\"/\" class=\"kt-item-title ovic-menu-item-title\" title=\"Home\">HOME</a>\n                </li>\n\t\t\t\t<li class=\"menu-item clone-menu-item\" routerLinkActive=\"active\">\n\t\t\t\t\t\t<a routerLink=\"/about\" class=\"kt-item-title ovic-menu-item-title\" title=\"Home\">About Us</a>\n                </li>\n                <li class=\"menu-item clone-menu-item\">\t<a routerLink=\"/contact\" class=\"kt-item-title ovic-menu-item-title\" title=\"Home\">Contact Us</a></li>\n            </ul>\n        </div>\n\n\n    </div>\n</div>\n<header>\n\t<div class=\"header layout3 no-prepend-box-sticky header-home4\">\n\t\t<div class=\"header-mobile\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"logo-mob\">\n\t\t\t\t\t\t\t\t<a routerLink=\"/\"><img src=\"assets/images/logo.jpg\" alt=\"\" style=\"width: 139px\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a #cogactive href=\"javascript:void(0)\" (click)=\"mconfigtoggleClass()\" class=\"header-top-menu-mobile\"><span class=\"fa fa-cog\" aria-hidden=\"true\"></span></a><a class=\"menu-bar menu-toggle\" href=\"javascript:void(0)\" (click)=\"mmenutoggleClass()\"><span class=\"icon\"><span></span><span></span><span></span></span><span class=\"text\">Menu</span></a>\n\t\t\t\t\t\t<div  #mobileconfig class=\"mobile-config\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"close-btn\" (click)=\"mconfigtoggleClass()\" >x</a>\n\t\t\t\t\t\t\t<div class=\"topbar\">\n\n\t\t\t\t\t\t\t\t<ul class=\"menu-topbar top-links\" *ngIf=\"!loggedinMenu\">\n\t\t\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/user/register\">Register</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/user/signin\">Sign in</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<ul class=\"menu-topbar top-links\" *ngIf=\"loggedinMenu\">\n\t\t\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/user/account\">My Account</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li routerLinkActive=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"logout()\">Logout</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<ul class=\"list-socials\">\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i></a></li>\n\t\t\t\t\t\t\t\t\t<li class=\"pull-right\">\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"postnewadd()\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tPost New Ad\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<form [formGroup]=\"searchForm\" (ngSubmit)=\"submitForm()\" class=\"form-inline\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"search-form layout1 box-has-content\">\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"search-block1\" *ngIf=\"mainCats; else showloading\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-3 col-xs-12 cropoption  subcategory-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"false\" #categorySelect [items]=\"mainCats\" [selectOnTab]=\"true\" bindLabel=\"catname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Select category\" formControlName=\"category\" (change)=\"getSubcatList($event._id)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"categoryerror\">Please select category</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-xs-12 col-md-3 cropoption subcategory-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"false\" #cropsSelect [items]=\"subCats\" [selectOnTab]=\"true\" bindLabel=\"subcatname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Select subcategory\" formControlName=\"subcategory\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"subcategoryerror\">Please select subcategory</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group  col-xs-12 col-md-3 regionoption region-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"false\" #regionSelect [items]=\"regions\" [selectOnTab]=\"true\" bindLabel=\"regionname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Select region\" formControlName=\"region\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"regionerror\">Please select region</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"search-button1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tSearch <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<ng-template #showloading>Loading...</ng-template>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t<div class=\"topbar layout1\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<ul class=\"list-socials\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"menu-topbar top-links hidden-xs hidden-sm abc\" *ngIf=\"!loggedinMenu\" >\n\t\t\t\t\t<li routerLinkActive=\"active\">\n\t\t\t\t\t\t<a routerLink=\"/user/register\">Register</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li routerLinkActive=\"active\">\n\t\t\t\t\t\t<a routerLink=\"/user/signin\">Sign in</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- <li routerLinkActive=\"active\">\n\t\t\t\t\t\t<a routerLink=\"/newsletter\">Newsletter</a>\n\t\t\t\t\t</li> -->\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"menu-topbar top-links hidden-xs hidden-sm\" *ngIf=\"loggedinMenu\">\n\t\t\t\t\t<li routerLinkActive=\"active\">\n\t\t\t\t\t\t<a routerLink=\"/user/account\">My Account</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li routerLinkActive=\"active\">\n\t\t\t\t\t\t<a (click)=\"logout()\">Logout</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<!-- <li routerLinkActive=\"active\">\n\t\t\t\t\t\t<a routerLink=\"/newsletter\">Newsletter</a>\n\t\t\t\t\t</li> -->\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"main-header\">\n\t\t\t<div class=\"top-header\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-2 col-sm-12 col-xs-12 left-content hidden-xs hidden-sm\">\n\t\t\t\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t\t\t<a routerLink=\"/\"><img src=\"assets/images/logo.jpg\" alt=\"Agriculture\" style=\"width: 139px\"></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-lg-8 col-md-7 col-sm-8 col-xs-12 midle-content\">\n\n\t\t\t\t\t\t\t<form [formGroup]=\"searchForm\" (ngSubmit)=\"submitForm()\" class=\"form-inline\">\n\n\t\t\t\t\t\t\t\t<div class=\"search-form layout1 box-has-content\">\n\n\t\t\t\t\t\t\t\t\t<div class=\"search-block1\" *ngIf=\"mainCats; else showloading\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-row\" [ngClass]=\"{'selecthascontent': selecthascontent}\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-3 category-list\" >\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"false\" #categorySelect [items]=\"mainCats\" [selectOnTab]=\"true\" bindLabel=\"catname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Select category\" formControlName=\"category\" (change)=\"getSubcatList($event._id)\"\n\t\t\t\t\t\t\t\t\t\t\t\t >\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group col-md-3 cropoption subcategory-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"false\" #cropsSelect [items]=\"subCats\" [selectOnTab]=\"true\" bindLabel=\"subcatname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Select subcategory\" formControlName=\"subcategory\">\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group  col-md-3 regionoption region-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select [searchable]=\"false\" #regionSelect [items]=\"regions\" [selectOnTab]=\"true\" bindLabel=\"regionname\" bindValue=\"_id\"\n\t\t\t\t\t\t\t\t\t\t\t\t placeholder=\"Select region\" formControlName=\"region\">\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"search-button\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"categoryerror\">Please select category</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"subcategoryerror\">Please select subcategory</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"error\" *ngIf=\"regionerror\">Please select region</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\" firstselect search-choice parent-content\">\n\t\t\t\t\t\t\t\t\t\t\t<select data-placeholder=\"All Categories\" class=\"chosen-select\" formControlName=\"crop\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"{{item._id}}\" *ngFor=\"let item of crops;let i = index\">{{item.cropname}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"secondselect search-choice parent-content\">\n\t\t\t\t\t\t\t\t\t\t\t<select data-placeholder=\"Divisions\" class=\"chosen-select\" formControlName=\"region\">\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"{{item._id}}\" *ngFor=\"let item of regions;let i = index\">{{item.regionname}}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<ng-template #showloading>Loading...</ng-template>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-lg-2 col-md-3 col-sm-4 col-xs-12 right-content hidden-sm hidden-xs\">\n\t\t\t\t\t\t\t<ul class=\"header-control\">\n\t\t\t\t\t\t\t\t<!-- <li class=\"hotline\">\n\t\t\t\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"text\">Call us now</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"number\">(080)123 4567 891</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li> -->\n\t\t\t\t\t\t\t\t<li class=\"box-minicart\">\n\t\t\t\t\t\t\t\t\t<div class=\"minicart \">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"postnewadd()\">\n\t\t\t\t\t\t\t\t\t\t\tPost New Ad\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"this-sticky\">\n\t\t\t\t<div class=\"header-nav-wapper\">\n\t\t\t\t\t<div class=\"container main-menu-wapper\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-md-4 col-sm-12 hidden-xs hidden-sm\">\n\t\t\t\t\t\t\t\t<div class=\"vertical-wapper parent-content\">\n\t\t\t\t\t\t\t\t\t<div class=\"block-title show-content\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"icon-bar\">\n\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"text\">Categories</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"vertical-content hidden-content always-open\">\n\t\t\t\t\t\t\t\t\t\t<ul class=\"vertical-menu ovic-clone-mobile-menu\" *ngIf=\"mainCats ; else sidebarloading\">\n\n\t\t\t\t\t\t\t\t\t\t\t<li *ngFor=\"let item of mainCats;let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/category/{{item._id}}\" class=\"ovic-menu-item-title\" title=\"{{item.catname}}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon\"></span>{{item.catname}}</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t<ng-template #sidebarloading>Loading...</ng-template>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-9 col-md-8 col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"header-nav container-vertical-wapper \">\n\t\t\t\t\t\t\t\t\t<div class=\"header-nav-inner\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"box-header-nav\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\" container-wapper\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"header-top-menu-mobile\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"fa fa-cog\" aria-hidden=\"true\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"menu-bar mobile-navigation \" href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"text\">Main Menu</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t<ul id=\"menu-main-menu\" class=\"main-menu clone-main-menu ovic-clone-mobile-menu box-has-content\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"menu-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/\" class=\"kt-item-title ovic-menu-item-title\" title=\"Home\">HOME</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"menu-item\" routerLinkActive=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/about\">About US</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"menu-item\" routerLinkActive=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/contact\">Contact US</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</header>\n"

/***/ }),

/***/ "./src/app/home/headerprimary/headerprimary.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/headerprimary/headerprimary.component.ts ***!
  \***************************************************************/
/*! exports provided: HeaderprimaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderprimaryComponent", function() { return HeaderprimaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/home.service */ "./src/app/service/home.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var HeaderprimaryComponent = /** @class */ (function () {
    function HeaderprimaryComponent(homepage, fb, product, route, router, auth, _location, renderer) {
        this.homepage = homepage;
        this.product = product;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this._location = _location;
        this.renderer = renderer;
        this.loggedinMenu = false;
        this.selectedCategory = '';
        this.categoryerror = false;
        this.subcategoryerror = false;
        this.regionerror = false;
        this.selecthascontent = false;
        var regionid = localStorage.getItem('regionid') !== null ? localStorage.getItem('regionid') : '';
        var subcategoryid = localStorage.getItem('subcategoryid') !== null ? localStorage.getItem('subcategoryid') : '';
        var categoryid = localStorage.getItem('categoryid') !== null ? localStorage.getItem('categoryid') : '';
        if (categoryid !== '') {
            this.selecthascontent = true;
            this.getSubcatList(categoryid);
            this.searchForm = fb.group({
                category: [categoryid],
                subcategory: [subcategoryid],
                region: [regionid]
            });
        }
        else {
            this.selecthascontent = false;
            this.searchForm = fb.group({
                category: [],
                subcategory: [],
                region: []
            });
        }
    }
    HeaderprimaryComponent.prototype.mmenutoggleClass = function () {
        // console.log('menu click', this.mmenu.nativeElement.classList);
        if (this.mmenu.nativeElement.classList.contains('open')) {
            this.renderer.removeClass(this.mmenu.nativeElement, 'open');
        }
        else {
            this.renderer.addClass(this.mmenu.nativeElement, 'open');
        }
    };
    HeaderprimaryComponent.prototype.mconfigtoggleClass = function () {
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
    HeaderprimaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checksession();
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
    };
    HeaderprimaryComponent.prototype.routing = function () {
        var pattern = /(inbox|newad|activeads|archiveads|sent|profile|view|viewsent)$/;
        return pattern.test(this._location.path());
    };
    HeaderprimaryComponent.prototype.checksession = function () {
        var _this = this;
        this.auth.authsession().subscribe(function (res) {
            if (res.status === 'success') {
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
    HeaderprimaryComponent.prototype.logout = function () {
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
    HeaderprimaryComponent.prototype.postnewadd = function () {
        this.router.navigate(['user/account/newad']);
    };
    HeaderprimaryComponent.prototype.getSubcatList = function (catid) {
        var _this = this;
        localStorage.setItem('categoryid', catid);
        this.homepage.getSubcatListByCatID(catid).subscribe(function (res) {
            if (res.status === 'success') {
                _this.subCats = res.data.subcategory;
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeaderprimaryComponent.prototype.submitForm = function () {
        var credentials = this.searchForm.value;
        // tslint:disable-next-line:max-line-length
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
        localStorage.setItem('regionid', credentials.region);
        localStorage.setItem('subcategoryid', credentials.subcategory);
        this.router.navigate(['/search', 'subcategory', credentials.subcategory, 'region', credentials.region]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mmenu', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderprimaryComponent.prototype, "mmenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mobileconfig', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderprimaryComponent.prototype, "mobileconfig", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cogactive', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderprimaryComponent.prototype, "cogactive", void 0);
    HeaderprimaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-headerprimary',
            template: __webpack_require__(/*! ./headerprimary.component.html */ "./src/app/home/headerprimary/headerprimary.component.html"),
            styles: [__webpack_require__(/*! ./headerprimary.component.css */ "./src/app/home/headerprimary/headerprimary.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])),
        __metadata("design:paramtypes", [_service_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _service_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], HeaderprimaryComponent);
    return HeaderprimaryComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/home/homepage/homepage.component.ts");
/* harmony import */ var _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quickview/quickview.component */ "./src/app/home/quickview/quickview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]
    },
    {
        path: 'quickview',
        component: _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_3__["QuickviewComponent"]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/home/homepage/homepage.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/home/slider/slider.component.ts");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/index.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/index.js");
/* harmony import */ var _topselling_topselling_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topselling/topselling.component */ "./src/app/home/topselling/topselling.component.ts");
/* harmony import */ var _headerprimary_headerprimary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./headerprimary/headerprimary.component */ "./src/app/home/headerprimary/headerprimary.component.ts");
/* harmony import */ var _featuredsmall_featuredsmall_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./featuredsmall/featuredsmall.component */ "./src/app/home/featuredsmall/featuredsmall.component.ts");
/* harmony import */ var _featuredlarge_featuredlarge_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./featuredlarge/featuredlarge.component */ "./src/app/home/featuredlarge/featuredlarge.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/home/banner/banner.component.ts");
/* harmony import */ var _brands_brands_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./brands/brands.component */ "./src/app/home/brands/brands.component.ts");
/* harmony import */ var _mostviewed_mostviewed_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mostviewed/mostviewed.component */ "./src/app/home/mostviewed/mostviewed.component.ts");
/* harmony import */ var _onsale_onsale_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./onsale/onsale.component */ "./src/app/home/onsale/onsale.component.ts");
/* harmony import */ var _newarrivals_newarrivals_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./newarrivals/newarrivals.component */ "./src/app/home/newarrivals/newarrivals.component.ts");
/* harmony import */ var _service_home_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../service/home.service */ "./src/app/service/home.service.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../service/product.service */ "./src/app/service/product.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/index.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./quickview/quickview.component */ "./src/app/home/quickview/quickview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_5__["AccordionModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_22__["TabsModule"].forRoot(),
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_17__["OwlModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_20__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_21__["FooterModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_23__["ModalModule"].forRoot()
            ],
            declarations: [
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_4__["SliderComponent"], _topselling_topselling_component__WEBPACK_IMPORTED_MODULE_7__["TopsellingComponent"], _headerprimary_headerprimary_component__WEBPACK_IMPORTED_MODULE_8__["HeaderprimaryComponent"], _featuredsmall_featuredsmall_component__WEBPACK_IMPORTED_MODULE_9__["FeaturedsmallComponent"],
                _featuredlarge_featuredlarge_component__WEBPACK_IMPORTED_MODULE_10__["FeaturedlargeComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_11__["BannerComponent"], _brands_brands_component__WEBPACK_IMPORTED_MODULE_12__["BrandsComponent"], _mostviewed_mostviewed_component__WEBPACK_IMPORTED_MODULE_13__["MostviewedComponent"], _onsale_onsale_component__WEBPACK_IMPORTED_MODULE_14__["OnsaleComponent"], _newarrivals_newarrivals_component__WEBPACK_IMPORTED_MODULE_15__["NewarrivalsComponent"], _quickview_quickview_component__WEBPACK_IMPORTED_MODULE_24__["QuickviewComponent"]
            ],
            providers: [_service_home_service__WEBPACK_IMPORTED_MODULE_16__["HomeService"], _service_product_service__WEBPACK_IMPORTED_MODULE_19__["ProductService"]],
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/homepage/homepage.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/homepage/homepage.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/homepage/homepage.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/homepage/homepage.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<!--Header primary-->\n\t<app-headerprimary></app-headerprimary>\n\t<!--/Header primary-->\n\n\t<!--Content slider-->\n\t<div class=\"main-content home-page main-content-home1\">\n\t\t<div class=\"container\">\n\t\t\t<!--slider-->\n\t\t\t<app-slider></app-slider>\n\t\t\t<!--/slider-->\n\t\t\t<!--featured Products small-->\n\t\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t<app-featuredsmall></app-featuredsmall>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!--/featured Products small-->\n\t\t\t<!--Banner-->\n\t\t\t<!-- <app-banner></app-banner> -->\n\t\t\t<!--/Banner-->\n\t\t\t<!--featured Products large-->\n\t\t\t<app-featuredlarge></app-featuredlarge>\n\t\t\t<!--/featured Products large-->\n\t\t\t<!--Logo Brand-->\n\t\t\t<app-brands></app-brands>\n\t\t\t<!--/Logo brand-->\n\t\t\t<!--Recent Post-->\n\t\t\t<div class=\"post\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<app-mostviewed></app-mostviewed>\n\t\t\t\t\t<app-onsale></app-onsale>\n\t\t\t\t\t<app-newarrivals></app-newarrivals>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--/Recent Post-->\n\t\t</div>\n\t\t<!--/container-->\n\t</div>\n\t<!--/Content-->\n</div>\n<!--/special container-->\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/home/homepage/homepage.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/homepage/homepage.component.ts ***!
  \*****************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
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

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/home/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/home/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/home/mostviewed/mostviewed.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/mostviewed/mostviewed.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-recent-posts .product-item .thumb {\r\n    max-width: 232px !important;\r\n}"

/***/ }),

/***/ "./src/app/home/mostviewed/mostviewed.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/mostviewed/mostviewed.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-4 col-md-4\">\n\t<div class=\"widget widget-recent-post\">\n\t\t<h5 class=\"widgettitle\">Most viewed</h5>\n\t\t<ul class=\"list-recent-posts\">\n\t\t\t<li class=\"product-item\" *ngFor=\"let item of most_viewed_products\">\n\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t<a routerLink=\"product/detail/{{ item.productid._id }}\">\n\t\t\t\t\t\t<img src=\"{{ item.productid.pimage }}\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<a routerLink=\"product/detail/{{ item.productid._id }}\" class=\"product-name\">\n\t\t\t\t\t\t{{ item.productid.pname | titlecase}}\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<span class=\"ins\">${{ item.productid.saleamount }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/mostviewed/mostviewed.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/mostviewed/mostviewed.component.ts ***!
  \*********************************************************/
/*! exports provided: MostviewedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostviewedComponent", function() { return MostviewedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
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



var MostviewedComponent = /** @class */ (function () {
    function MostviewedComponent(product, route, router) {
        this.product = product;
        this.route = route;
        this.router = router;
        this.most_viewed_products = [];
        this.limit = 3;
    }
    MostviewedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product.getMostViewedProductList(this.limit).subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.most_viewed_products = res['data'].mostviewed;
                //console.log("Most viewed", this.most_viewed_products);
            }
        }, function (err) {
            console.log(err);
        });
    };
    MostviewedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mostviewed',
            template: __webpack_require__(/*! ./mostviewed.component.html */ "./src/app/home/mostviewed/mostviewed.component.html"),
            styles: [__webpack_require__(/*! ./mostviewed.component.css */ "./src/app/home/mostviewed/mostviewed.component.css")]
        }),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MostviewedComponent);
    return MostviewedComponent;
}());



/***/ }),

/***/ "./src/app/home/newarrivals/newarrivals.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/newarrivals/newarrivals.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-recent-posts .product-item .thumb {\r\n    max-width: 232px !important;\r\n}"

/***/ }),

/***/ "./src/app/home/newarrivals/newarrivals.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/newarrivals/newarrivals.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-4 col-md-4\">\n\t<div class=\"widget widget-recent-post\">\n\t\t<h5 class=\"widgettitle\">New arrivals</h5>\n\t\t<ul class=\"list-recent-posts\">\n\t\t\t<li class=\"product-item\" *ngFor=\"let product of new_products\">\n\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t<a routerLink=\"product/detail/{{ product._id }}\">\n\t\t\t\t\t\t<img src=\"{{ product.pimage }}\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<a routerLink=\"product/detail/{{ product._id }}\" class=\"product-name\">\n\t\t\t\t\t\t{{ product.pname | titlecase}}\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<span>${{ product.saleamount }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<!-- <li class=\"product-item\">\n\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t<a href=\"detail.html\">\n\t\t\t\t\t\t<img src=\"images/small/2.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<a href=\"detail.html\" class=\"product-name\">Bravia KLV-32W562D 32 Inch Full HD LED 3D Smart TV</a>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<span>$1000</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"product-item\">\n\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t<a href=\"detail.html\">\n\t\t\t\t\t\t<img src=\"images/small/4.jpg\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<a href=\"detail.html\" class=\"product-name\"> Bravia KDL 40W600B 40 Inch Full HD LED Television Price in India</a>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<span>$850</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li> -->\n\t\t</ul>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/newarrivals/newarrivals.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/newarrivals/newarrivals.component.ts ***!
  \***********************************************************/
/*! exports provided: NewarrivalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewarrivalsComponent", function() { return NewarrivalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
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



var NewarrivalsComponent = /** @class */ (function () {
    function NewarrivalsComponent(product, route, router) {
        this.product = product;
        this.route = route;
        this.router = router;
        this.new_products = [];
        this.limit = 3;
    }
    NewarrivalsComponent.prototype.ngOnInit = function () {
        this.fetchNewProductList();
    };
    NewarrivalsComponent.prototype.fetchNewProductList = function () {
        var _this = this;
        this.product.getNewProductList(this.limit).subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.new_products = res['data'].newarrival;
                //console.log("new product", this.new_products);
            }
        }, function (err) {
            console.log(err);
        });
    };
    NewarrivalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newarrivals',
            template: __webpack_require__(/*! ./newarrivals.component.html */ "./src/app/home/newarrivals/newarrivals.component.html"),
            styles: [__webpack_require__(/*! ./newarrivals.component.css */ "./src/app/home/newarrivals/newarrivals.component.css")]
        }),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewarrivalsComponent);
    return NewarrivalsComponent;
}());



/***/ }),

/***/ "./src/app/home/onsale/onsale.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/onsale/onsale.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-recent-posts .product-item .thumb {\r\n    max-width: 232px !important;\r\n}"

/***/ }),

/***/ "./src/app/home/onsale/onsale.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/onsale/onsale.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-4 col-md-4\">\n\t<div class=\"widget widget-recent-post\">\n\t\t<h5 class=\"widgettitle\">Onsale Products</h5>\n\t\t<ul class=\"list-recent-posts\">\n\t\t\t<li class=\"product-item\" *ngFor=\"let item of best_sell_products; let i = index;\">\n\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t<a routerLink=\"product/detail/{{ item.productid._id }}\">\n\t\t\t\t\t\t<img src=\"{{ item.productid.pimage }}\" alt=\"\">\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<a routerLink=\"product/detail/{{ item.productid._id }}\" class=\"product-name\">\n\t\t\t\t\t\t{{ item.productid.pname | titlecase}}\n\t\t\t\t\t</a>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t<span class=\"ins\">${{ item.productid.saleamount }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/onsale/onsale.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/onsale/onsale.component.ts ***!
  \*************************************************/
/*! exports provided: OnsaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnsaleComponent", function() { return OnsaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/service/product.service.ts");
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



var OnsaleComponent = /** @class */ (function () {
    function OnsaleComponent(product, route, router) {
        this.product = product;
        this.route = route;
        this.router = router;
        this.best_sell_products = [];
        this.limit = 3;
    }
    OnsaleComponent.prototype.ngOnInit = function () {
        this.fetchBestSellProductList();
    };
    OnsaleComponent.prototype.fetchBestSellProductList = function () {
        var _this = this;
        this.product.getBestSellProductList(this.limit).subscribe(function (res) {
            if (res['status'] === 'success') {
                _this.best_sell_products = res['data'].bestselllist;
                // console.log("Best sell", this.best_sell_products);
            }
        }, function (err) {
            console.log(err);
        });
    };
    OnsaleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-onsale',
            template: __webpack_require__(/*! ./onsale.component.html */ "./src/app/home/onsale/onsale.component.html"),
            styles: [__webpack_require__(/*! ./onsale.component.css */ "./src/app/home/onsale/onsale.component.css")]
        }),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OnsaleComponent);
    return OnsaleComponent;
}());



/***/ }),

/***/ "./src/app/home/quickview/quickview.component.css":
/*!********************************************************!*\
  !*** ./src/app/home/quickview/quickview.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button.close{\r\n    cursor: pointer;\r\n    /* background: 0 0; */\r\n    border: 0;\r\n    position: relative;\r\n    right: -28px;\r\n    top: -33px;\r\n    background: white;\r\n    padding: 5px 10px;\r\n    border-radius: 100%;\r\n    text-shadow: none;\r\n    opacity: 1;\r\n    outline: none;  \r\n}\r\n"

/***/ }),

/***/ "./src/app/home/quickview/quickview.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/quickview/quickview.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"modal-header\">\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div> -->\n\n\n<div class=\"modal-content modal-lg\">\n\t<div class=\"modal-body\">\n\t\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t</button>\n\t\t<!-- {{modaldata | json}} -->\n\t\t<!-- [ \"Green Okra\", \"file-1531900835736.jpg\", \"100\", \"5b4debdd5580971bc49e89d4\", \"22\" ] -->\n\t\t<!-- <ul *ngIf=\"list.length\">\n      <li *ngFor=\"let item of list\">{{item}}</li>\n    </ul> -->\n\t\t<div class=\"row\">\n\t\t\t<div class=\"details-info col-xs-12 col-sm-6\">\n\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(modaldata.product._id)\" class=\"product-name\">\n\t\t\t\t\t<img src=\"{{ modaldata.product.pimage }}\" alt=\"{{ modaldata.product.pname }}\" />\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"details-info col-xs-12 col-sm-6\">\n\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(modaldata.product._id)\" class=\"product-name\">{{ modaldata.product.pname }}</a>\n\n\t\t\t\t<div class=\"price\">\n\t\t\t\t\t<span>$ {{ modaldata.product.saleamount }}</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"group-button\">\n\t\t\t\t\t<div class=\"inner\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showproductdetails(modaldata.product._id)\" class=\"add-to-cart\">\n\t\t\t\t\t\t\t<span class=\"text\">CONTACT</span>\n\t\t\t\t\t\t\t<span class=\"icon\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-cart-arrow-down\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/quickview/quickview.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/quickview/quickview.component.ts ***!
  \*******************************************************/
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
            template: __webpack_require__(/*! ./quickview.component.html */ "./src/app/home/quickview/quickview.component.html"),
            styles: [__webpack_require__(/*! ./quickview.component.css */ "./src/app/home/quickview/quickview.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuickviewComponent);
    return QuickviewComponent;
}());



/***/ }),

/***/ "./src/app/home/slider/slider.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/slider/slider.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/slider/slider.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/slider/slider.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-offset\">\n    <!--Slideshow-->\n    <div class=\"main-slideshow slideshow1\">\n            <owl-carousel\n            [options]=\"{items: 1, dots: false, navigation: true, loop:true, autoplay: true, smartSpeed:800}\"\n               [items]=\"images\"\n               [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"item\" *ngFor=\"let image of images;let i = index\">\n                  <img src=\"{{image.imgsrc}}\" width=\"100%\" />\n                  <div class=\"slide-content\">\n                        <h5 class=\"subtitle\" [innerHTML]=\"image.subtitle\"></h5>\n                        <h3 class=\"title\" [innerHTML]=\"image.title\"></h3>\n                        <h5 class=\"smalltitle\" [innerHTML]=\"image.smalltitle\"></h5>\n                        <a href=\"javascript:void(0)\" (click)=\"redirectotpage(image.buttonurl)\" class=\"button\">{{image.buttontext}}</a>\n                    </div>\n                         <!-- <div class=\"thumbnail-image\" [ngStyle]=\"{'background': 'url({{image}}) no-repeat scroll center center / 80px 80px'}\"></div> -->\n                </div>\n            </owl-carousel>\n        <!-- <div class=\"owl-carousel nav-style1\" data-autoplay=\"true\" data-nav=\"true\" data-dots=\"false\" data-loop=\"true\" data-slidespeed=\"800\" data-margin=\"30\"  data-responsive = '{\"0\":{\"items\":1}, \"640\":{\"items\":1}, \"768\":{\"items\":1}, \"1024\":{\"items\":1}, \"1200\":{\"items\":1}}'>\n            <div class=\"slide-item item1\">\n                <img src=\"assets/images/slider/3a.jpg\" alt=\"\">\n                <div class=\"slide-content\">\n                    <h5 class=\"subtitle\">up to <span class=\"text-main-color\">60% off</span> </h5>\n                    <h3 class=\"title\">Smart Watchs</h3>\n                    <h5 class=\"smalltitle\">Only: <span> $226.00</span></h5>\n                    <a href=\"#\" class=\"button\">Shop Now</a>\n                </div>\n            </div>\n            <div class=\"slide-item item2\">\n                <img src=\"assets/images/slider/1a.jpg\" alt=\"\">\n                <div class=\"slide-content\">\n                    <h3 class=\"title\"><span>Sales</span> & Sevice of Laptop</h3>\n                    <h4 class=\"subtitle\">up to <span class=\"text-main-color\"> 50% off</span></h4>\n                    <h5 class=\"smalltitle\">Only: <span> $268.00</span></h5>\n                    <a href=\"#\" class=\"button\">Shop Now</a>\n                </div>\n            </div>\n            <div class=\"slide-item item3\">\n                <img src=\"assets/images/slider/2a.jpg\" alt=\"\">\n                <div class=\"slide-content\">\n                    <h4 class=\"subtitle text-main-color\">Up to 50% Off</h4>\n                    <h3 class=\"title\">Gear VR 3D.</h3>\n                    <h5 class=\"smalltitle\">Virtual reality through a new lens</h5>\n                    <a href=\"#\" class=\"button\">Shop Now</a>\n                </div>\n            </div>\n        </div> -->\n    </div>\n    <!--/Slideshow-->\n</div>"

/***/ }),

/***/ "./src/app/home/slider/slider.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/slider/slider.component.ts ***!
  \*************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderComponent = /** @class */ (function () {
    function SliderComponent(route, router) {
        this.route = route;
        this.router = router;
        this.images = [];
        var slide1 = {
            'imgsrc': 'assets/images/slider/3a.jpg',
            'subtitle': 'up to <span class="text-main-color">60% off</span>',
            'title': 'Crops',
            'smalltitle': 'Only: <span> $226.00</span>',
            'buttontext': 'Shop Now',
            'buttonurl': 'category/5b56cd9ecb50b83ff77b5168'
        };
        var slide2 = {
            'imgsrc': 'assets/images/slider/agri1.jpg',
            'subtitle': 'up to <span class="text-main-color"> 50% off</span>',
            'title': '<span>Agriculture</span> Services',
            'smalltitle': 'Only: <span> $68.00</span>',
            'buttontext': 'Shop Now',
            'buttonurl': 'category/5b56cd2fcb50b83ff77b4e84'
        };
        var slide3 = {
            'imgsrc': 'assets/images/slider/farm1.jpg',
            'subtitle': '<span class="text-main-color"> 50% off</span>',
            'title': 'Farm Lands',
            'smalltitle': 'Only: <span> $2000.00</span>',
            'buttontext': 'Shop Now',
            'buttonurl': 'category/5b56cd9ecb50b83ff77b5164'
        };
        this.images.push(slide1);
        this.images.push(slide2);
        this.images.push(slide3);
        // console.log(this.images);
    }
    SliderComponent.prototype.redirectotpage = function (pageurl) {
        this.router.navigate([pageurl]);
    };
    SliderComponent.prototype.ngOnInit = function () { };
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/home/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/home/slider/slider.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/home/topselling/topselling.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/topselling/topselling.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/topselling/topselling.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/topselling/topselling.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"col-sm-6 col-md-3\">\n        <div class=\"thumbnail\">\n          <img src=\"assets/images/crop/small/1.jpeg\" alt=\"...\">\n          <div class=\"caption\">\n            <h3>Crop 1</h3>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rerum </p>\n            <p><a routerLink=\"/crop/1\" class=\"btn btn-primary\" role=\"button\">Contact</a></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-md-3\">\n          <div class=\"thumbnail\">\n            <img src=\"assets/images/crop/small/2.jpeg\" alt=\"...\">\n            <div class=\"caption\">\n              <h3>Crop 1</h3>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rerum </p>\n              <p><a routerLink=\"/crop/2\" class=\"btn btn-primary\" role=\"button\">Contact</a></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-3\">\n            <div class=\"thumbnail\">\n              <img src=\"assets/images/crop/small/3.jpeg\" alt=\"...\">\n              <div class=\"caption\">\n                <h3>Crop 1</h3>\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rerum </p>\n                <p><a routerLink=\"/crop/3\" class=\"btn btn-primary\" role=\"button\">Contact</a></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-md-3\">\n              <div class=\"thumbnail\">\n                <img src=\"assets/images/crop/small/4.jpeg\" alt=\"...\">\n                <div class=\"caption\">\n                  <h3>Crop 1</h3>\n                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rerum </p>\n                  <p><a routerLink=\"/crop/4\" class=\"btn btn-primary\" role=\"button\">Contact</a></p>\n                </div>\n              </div>\n            </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/topselling/topselling.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/topselling/topselling.component.ts ***!
  \*********************************************************/
/*! exports provided: TopsellingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopsellingComponent", function() { return TopsellingComponent; });
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

var TopsellingComponent = /** @class */ (function () {
    function TopsellingComponent() {
    }
    TopsellingComponent.prototype.ngOnInit = function () {
    };
    TopsellingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topselling',
            template: __webpack_require__(/*! ./topselling.component.html */ "./src/app/home/topselling/topselling.component.html"),
            styles: [__webpack_require__(/*! ./topselling.component.css */ "./src/app/home/topselling/topselling.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopsellingComponent);
    return TopsellingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-home-home-module.js.map