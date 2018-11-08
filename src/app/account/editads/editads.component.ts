import { Component, OnInit,  ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
// import { QuickviewComponent } from '../quickview/quickview.component';
import * as _ from 'lodash';
import { PopupComponent } from '../popup/popup.component';
import { PagerService } from '../../service/pager.service';
@Component({
  selector: 'app-editads',
  templateUrl: './editads.component.html',
  styleUrls: ['./editads.component.css']
})
export class EditadsComponent implements OnInit {
  products: any;
  showloading = false;
  bsModalRef: BsModalRef;
  notfound = false;
  catsubcat: Array<any> = [];
  pager: any = {};
  pageSize = 9;
  pagedItems: any[];
  isdeleting = 'block';
  constructor(
    private product: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService,
    private renderer: Renderer2,
    private pageservice: PagerService,
    private elRef: ElementRef
  ) {}

  deleteproduct(productid , event , productindex, editbtnid) {
    const initialState = {
      modaldata: [productid]
    };
    this.bsModalRef = this.modalService.show(PopupComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.onClose.subscribe(result => {
      if (result === true) {
        // console.log(event.srcElement.attributes.id);
        // console.log(event);
        const hElement: HTMLElement = this.elRef.nativeElement;
        const editbutton = hElement.getElementsByClassName(editbtnid);
        this.renderer.setAttribute(event.srcElement, 'disabled', 'disabled');
        this.renderer.setAttribute(editbutton[0], 'disabled', 'disabled');
        this.isdeleting = 'none';
        this.confirmdelete(productid, productindex);

      }
    });
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pageservice.getPager(
      this.catsubcat.length,
      page,
      this.pageSize
    );
    setTimeout(() => {
      this.pagedItems = this.catsubcat.slice(
        this.pager.startIndex,
        this.pager.endIndex + 1
      );
    }, 500);
    // get current page of items
  }
  confirmdelete(productid, productindex) {
    this.catsubcat.splice(productindex, 1);
    this.product.deleteProduct(productid)
    .subscribe(res => {
        if (res['status'] === 'success') {
          this.pagedItems.splice(productindex, 1);
          this.isdeleting = 'block';
       } else {
        this.isdeleting = 'block';
       }
      }, (err) => {
        this.isdeleting = 'block';
        console.log(err);
      });
  }
  editproductdetails(productinfo) {
    //  console.log('productid', productid);
    localStorage.removeItem('productinfo');
    localStorage.setItem('productinfo', JSON.stringify(productinfo));
    this.router.navigate(['user/account/editad']);
  }
  activeads() {
    const userid = localStorage.getItem('id');
    // if (!userid) {
    //   this.router.navigate(['user/signin']);
    //   }

    this.showloading = true;
    // console.log('params[id]', params['id']);
    this.product.getProductListByUser(userid).subscribe(
      res => {
        if (res['status'] === 'success') {
          this.showloading = false;
          this.notfound = false;
          this.products = res.data['product'];
          for (let item of res.mapping) {
            // let productinfo = _.find(res.data['product'], function(producta) {
            //   return producta._id === item.productid;
            // });
            for (let pitem in this.products) {
               if (this.products[pitem]._id === item.productid) {
                let productinfo = this.products[pitem];
           
                let catsubcat = {
                  productid: item.productid,
                  category: item.subcatid.catid.catname,
                  subcategory: item.subcatid.subcatname,
                  subcatimg: item.subcatid.defaultimage,
                  pimage: productinfo.pimage,
                  pname: productinfo.pname,
                  amtunit: !!productinfo.amtunit.amountunit? productinfo.amtunit.amountunit:  '',
                  amtunitid:  !!productinfo.amtunit._id? productinfo.amtunit._id: '',
                  unitprice: !!productinfo.unitprice? productinfo.unitprice: '',
                  saleamount: !!productinfo.saleamount? productinfo.saleamount: '',
                  category_id: item.subcatid.catid._id,
                  subcatid: item.subcatid._id,
                  adid: !!productinfo.adid? productinfo.adid: '' ,
                  currency: !!productinfo.currencytype? productinfo.currencytype: '' ,
                  pdesc: !!productinfo.pdesc? productinfo.pdesc: '',
                  negotiable: productinfo.negotiable,
                  country: item.country,
                  city: item.city,
                  condition: productinfo.condition,
                  productstatus: productinfo.productstatus,
                  addinfo: productinfo.addinfo,
                  manufacture: productinfo.manufacture,
                  yearmfg: productinfo.yearmfg,
                  updated_at: productinfo.updated_at,
                  created_at: productinfo.created_at
                };
                this.catsubcat.push(catsubcat);
              }
            }
          }
          this.setPage(1);
        } else {
          if (this.products) {
            this.products.length = 0;
          }
          if (!!this.pagedItems && !!this.pagedItems.length) {
            this.pagedItems.length = 0;
          }
          this.showloading = false;
          this.notfound = true;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.activeads();
  }
  archivead(productid) {
    this.showloading = true;
    this.product.setAdArchive(productid).subscribe(
      res => {
        if (res['status'] === 'success') {
          this.showloading = false;
          this.activeads();
        } else {
          this.showloading = false;
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  showproductdetails(itemid) {
    this.router.navigate(['product/detail/' + itemid]);
  }
}
