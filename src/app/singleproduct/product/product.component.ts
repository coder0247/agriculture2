import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd , RouterStateSnapshot} from '@angular/router';
import { ProductService } from '../../service/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MsgService } from '../../service/msg.service';
import { UtilsService } from '../../service/utils.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {transition, animate } from '@angular/animations';
import { ReportadComponent } from '../reportad/reportad.component';
import {OwlCarousel} from 'ngx-owl-carousel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;
  imageurl: any;
  showloading = false;
  singleproduct: any;
  productlocation: any;
  sendMsgForm: FormGroup;
  showsellerDetails = false;
  sellerdetails = {
    name: '',
    email: '',
    userid: '',
    productid: '',
    country: '',
    city: ''
  };
  showmsgsent = false;
  clientIP: any;
  best_sell_products: Array<any> = [];
  limit: any = 6;
  msgerror = false;
  bsModalRef: BsModalRef;
  desctab = true;
  addinfotab = false;
  sellerinfotab = false;
  slideindex = 0;
  showmsgsending = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private product: ProductService,
    private utils: UtilsService,
    private msgservice: MsgService,
    private modalService: BsModalService
  ) { }
  gotoitem(itemid) {
    this.owlElement.to(itemid);
    this.slideindex = this.owlElement.$owlChild.currentSlideIndex;
  }
  prevprod() {
    this.owlElement.previous([200]);
    this.slideindex = this.owlElement.$owlChild.currentSlideIndex;
    // this.owlElement.$owlChild.$owl.on('changed.owl.carousel', (event) => {
    //   console.log('prev', this.slideindex, event.item.index);
    //   if (event.item.index ===  0) {
    //    this.slideindex = event.item.count;
    //   }
    //  });
  }
  nextprod() {
    // this.owlElement.$owlChild.$owl.on('changed.owl.carousel', (event) => {
    //   console.log('next', this.slideindex, event.item.index);
    //  if (event.item.count - 1 === event.item.index) {
    //   this.owlElement.to([0]);
    //  }
    // });
    this.owlElement.next([200]);
    // console.log(this.owlElement.$owlChild.$owl);
    this.slideindex = this.owlElement.$owlChild.currentSlideIndex;
  }
  showdesc() {
    this.desctab = true;
    this.addinfotab = false;
    this.sellerinfotab = false;
  }
  addinfo() {
    this.desctab = false;
    this.addinfotab = true;
    this.sellerinfotab = false;
  }
  sellerinfo() {
    this.sellerinfotab = false;
    if (!this.showsellerDetails) {
      this.gotosigin();
    } else {
      this.desctab = false;
      this.addinfotab = false;
      this.sellerinfotab = true;
    }
  }
  itemDragEvent(e) {
    this.slideindex = e.item.index;
  }
  intOwl() {
      this.owlElement.$owlChild.$owl.on('dragged.owl.carousel', (event) => {
       this.itemDragEvent(event);
     });
  }

ngOnInit() {

this.router.events.subscribe((event: Event) => {
  if (event instanceof NavigationEnd) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
});
    this.showsellerDetails = false;
    const userid = localStorage.getItem('id');

    this.fetchBestSellProductList();

    if (userid) {
      this.route.params.subscribe(params => {

        this.product.getSellerByProductID(params['id']).subscribe(
          res => {
            if (res['status'] === 'success') {
              this.showloading = false;
              const seller = res.data.sellerinfo[0];
              this.showsellerDetails = true;
              this.sellerdetails.name =
                seller.firstname + ' ' + seller.lastname;
              this.sellerdetails.email = seller.email;
              this.sellerdetails.country = seller.country;
              this.sellerdetails.city = seller.city;
              this.sellerdetails.userid = seller._id;
            } else {
              // this.router.navigate(['/cropnotfound']);
              if (this.singleproduct) {
                this.singleproduct.length = 0;
              }
              this.showloading = false;
            }
          },
          err => {
            console.log(err);
          }
        );
      });
    }
    this.createForm();
    this.route.params.subscribe(params => {
      this.showloading = true;
      // console.log('params[id]', params['id']);
      this.showmsgsent = false;
      this.msgerror = false;
      this.product.getProductDetail(params['id']).subscribe(
        res => {
          if (res['status'] === 'success') {
            this.showloading = false;
            this.singleproduct = res['data'].singleproduct[0];
            this.productlocation = res['data'].location[0];
            this.sellerdetails.productid = this.singleproduct._id;
            setTimeout(() => this.intOwl() , 3000);
          } else {
            // this.router.navigate(['/cropnotfound']);
            if (!!res['pagenotfound']) {
              this.router.navigate(['/notfound']);
            }
            if (this.singleproduct) {
              this.singleproduct.length = 0;
            }
            this.showloading = false;
          }
        },
        err => {
          console.log(err);
        }
      );
    });
  }
  public sendMsg() {
    const msgdata = {
      from: localStorage.getItem('id'),
      comment: this.sendMsgForm.value.comment,
      sellerid: this.sellerdetails.userid,
      productid: this.sellerdetails.productid,
      city: this.sellerdetails.city,
      country: this.sellerdetails.country
    };
    if (this.sendMsgForm.valid) {
      this.showmsgsending = true;
      this.msgservice.postMsg(msgdata).subscribe(
        res => {
          if (res['status'] === 'success') {
            this.sendMsgForm.reset();
            this.showmsgsent = true;
            this.msgerror = false;
            this.showmsgsending = false;
          } else {
            this.showmsgsending = false;
          }
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.msgerror = true;
    }
  }

  private createForm() {
    this.sendMsgForm = new FormGroup({
      // tslint:disable-next-line
      comment: new FormControl('', Validators.required)
    }); // remove updateon to change the event to onchange
  }

  fetchBestSellProductList() {
    this.product.getBestSellProductList(this.limit).subscribe(
      res => {
        if (res['status'] === 'success') {
          this.best_sell_products = res['data'].bestselllist;
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
  gotosigin() {
    const userid = localStorage.getItem('id');
    if (!userid) {
      //  console.log('this.router', this.router.url);
      this.router.navigate(['/user/signin'], { queryParams: { returnUrl: this.router.url }});
      // this.router.navigate(['/user/signin']);
    }
  }
  reportAd(adid) {
    // const image = product.pimage;
    // const pname = product.pname;
    // const pprice = product.saleamount;

    const initialState = {
      modaldata: [adid]
      // modaldata: { product: product }
    };
    this.bsModalRef = this.modalService.show(ReportadComponent, {
      initialState
    });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
