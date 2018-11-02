import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { QuickviewComponent } from '../quickview/quickview.component';
import { PagerService } from '../../service/pager.service';
import { NgOption } from '@ng-select/ng-select';
import * as _ from 'lodash';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  sidecorps: any;
  showloading = false;
  blockui = false;
  catname: String;
  bsModalRef: BsModalRef;
  notfound = false;
  filterchange: any;
  pagevaluechange: any;
  // pager object
  pager: any = {};
  pageSize = 9;
  // paged items
  pagedItems: any[];
  filterchoice: NgOption[];
  perpageitems: NgOption[];
  filtersubcat: Array<any> = [];
  filterdefault: any;
  pagevaluedefault: any;
  gridstatus = true;
  liststatus =  false;
  togglestatus = false;
  constructor(
    private product: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService,
    private pageservice: PagerService
  ) {
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

  quickview(product) {
    const initialState = {
      modaldata: { product: product}
    };
    this.bsModalRef = this.modalService.show(QuickviewComponent, {
      initialState
    });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  togglegrid() {
    this.gridstatus = true;
    this.liststatus = false;
    this.togglestatus = false;
  }
  togglelist() {
    this.gridstatus = false;
    this.liststatus = true;
    this.togglestatus = true;
  }
  setPage(page: number) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // get pager object from service
    this.pager = this.pageservice.getPager(
      this.products.length,
      page,
      this.pageSize
    );
    // sorting logic
    // end sorting logic
    // get current page of items
    this.pagedItems = this.products.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }

  ngOnInit() {
    this.products = '';
    this.getAllProductbycat();
  }
  getAllProductbycat() {
    this.route.params.subscribe(params => {
      this.showloading = true;
      this.products = '';
      this.filtersubcat.length = 0;
      if (!!this.pagedItems && !!this.pagedItems.length) {
        this.pagedItems.length = 0;
      }
      this.product.getProductListByCat(params['catid']).subscribe( 
        res => {
          if (res['status'] === 'success') {
            this.showloading = false;
            this.notfound = false;
            this.products = res.data.product;
            this.products.sort(function (a, b) {
              const nameA = a.pname.toUpperCase(); // ignore upper and lowercase
              const nameB = b.pname.toUpperCase(); // ignore upper and lowercase
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
            this.sidecorps = res.subcat.subcat;
            this.catname = res.cat.cat.catname;
          } else {
            if (!!res.pagenotfound) {
              this.router.navigate(['/notfound']);
            }
            if (!!this.pagedItems && !!this.pagedItems.length) {
              this.pagedItems.length = 0;
              this.sidecorps.length = 0;
              this.catname = '';
            }
            this.showloading = false;
            this.notfound = true;
          }
        },
        err => {
          console.log(err);
        }
      );
    });
  }
  showproductdetails(itemid) {
    this.router.navigate(['product/detail/' + itemid]);
  }
  getproductbysubcat(subcatid) {
    let searchstart = false;
    this.products = '';
    if (subcatid.target.checked) {
      if (!this.filtersubcat.includes(subcatid.target.defaultValue)) {
        this.filtersubcat.push(subcatid.target.defaultValue);
        searchstart = true;
      }
    } else {
      // remove value
      const index = this.filtersubcat.findIndex(
        subcat => subcat === subcatid.target.defaultValue
      );
      this.filtersubcat.splice(index, 1);
      searchstart = true;
    }
    if (searchstart && this.filtersubcat.length > 0) {

      this.showloading = true;
      this.blockui = true;
      const subcatlist = {
        subcatlist: this.filtersubcat
      };
      this.product.getProductListBySubCat(subcatlist).subscribe(
        res => {
          if (res['status'] === 'success') {
            this.showloading = false;
            this.blockui = false;
            this.notfound = false;
            const data = res['data'].prodlist;
            let subCategoryItem = [];
            for (let item of data) {
              subCategoryItem.push(item.productid);
            }
            if (typeof this.filterchange !== 'undefined') {
              this.products = subCategoryItem;
              this.setProductSortOrder(this.filterchange);
            } else {
              subCategoryItem.sort(function (a, b) {
                const nameA = a.pname.toUpperCase(); // ignore upper and lowercase
                const nameB = b.pname.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                // names must be equal
                return 0;
              });
              this.products = subCategoryItem;
              this.setPage(1);
            }
          } else {
            if (!!this.pagedItems && !!this.pagedItems.length) {
              this.pagedItems.length = 0;
            }
            this.showloading = false;
            this.notfound = true;
            this.blockui = false;
          }
        },
        err => {
          console.log(err);
        }
      );
    } else if (this.filtersubcat.length === 0) {
      this.getAllProductbycat();
    }
  }
  getfilteritem(_id) {
    this.filterchange = _id;
    this.setProductSortOrder(this.filterchange);
  }
  setProductSortOrder(ordertype) {
    let productCollection;
    switch (ordertype) {
      case '1':
        // Sort by Name
        this.products.sort(function (a, b) {
          const nameA = a.pname.toUpperCase(); // ignore upper and lowercase
          const nameB = b.pname.toUpperCase(); // ignore upper and lowercase
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
        this.products.sort((a, b) => a.saleamount - b.saleamount);
        const reversed = this.products.reverse();
        this.products = reversed;
        this.setPage(1);
        break;
      case '3':
        // Price -- Low to High
        this.products.sort((a, b) => a.saleamount - b.saleamount);
        this.setPage(1);
        break;
      case '4':
        // Newest First
        productCollection = _.orderBy(this.products, ['created_at'], ['desc']);
        this.products = productCollection;
        this.setPage(1);
        break;
      default:
        break;
    }
  }
  getitembypagevalue(_id) {
    this.pagevaluechange = _id;
    this.pageSize = _id;
    this.setPage(1);
  }
}
