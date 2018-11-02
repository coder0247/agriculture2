import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { OwlCarousel } from 'ngx-owl-carousel';
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse
} from '@angular/common/http';
@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.css']
})
export class QuickviewComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;
  closeBtnName: string;
  modaldata: any;
  showloading = false;
  singleproduct: any;
  productlocation: any;
  slideindex = 0;
  progress = 0;
  constructor(
    public bsModalRef: BsModalRef,
    private route: ActivatedRoute,
    private router: Router,
    private product: ProductService,
    private http: HttpClient,
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
  ngOnInit() {
    this.showloading = true;
    // this.product.getProductDetail(this.modaldata.product).subscribe(
    //   res => {
    //     if (res['status'] === 'success') {
    //       this.showloading = false;
    //       this.singleproduct = res['data'].singleproduct[0];
    //       this.productlocation = res['data'].location[0];
    //     }
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
    const uploadReq = this.product.geteproductDetails1(this.modaldata.product);
    this.http.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.Sent) {
        setTimeout(() => {
          if (this.progress <= 25) { this.progress++; }
        }, 500);
      }
      if (event.type === HttpEventType.ResponseHeader) {
        this.progress = 50;
      }
      if (event.type === HttpEventType.DownloadProgress) {
        this.progress = 75;
      }
      if (event.type === HttpEventType.Response) {
        this.progress = 100;
        if (event.body['status'] === 'success') {
          setTimeout(() => {
            this.showloading = false;
            this.singleproduct = event.body['data'].singleproduct[0];
            this.productlocation = event.body['data'].location[0];
          }, 500);
        }
      }
    });
  }

  showproductdetails(itemid) {
    this.bsModalRef.hide();
    this.router.navigate(['product/detail/' + itemid]);
  }
}
