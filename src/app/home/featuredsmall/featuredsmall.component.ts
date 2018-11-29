import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { QuickviewComponent } from '../quickview/quickview.component';
import * as _ from 'lodash';
import {OwlCarousel} from 'ngx-owl-carousel';
@Component({
  selector: 'app-featuredsmall',
  templateUrl: './featuredsmall.component.html',
  styleUrls: ['./featuredsmall.component.css']
})
export class FeaturedsmallComponent implements OnInit {
  // @ViewChild('owlElement') owlElement: OwlCarousel;
  @ViewChild('owlElement', { read: ElementRef }) owlElement: ElementRef;
  allproducts: Array<any> = [];
  bsModalRef: BsModalRef;
  catelist: Array<any> = [];
  featurelist: Array<any> = [];
  agricultural_services: Array<any> = [];
  agro_jobs: Array<any> = [];
  farm_lands: Array<any> = [];
  fertilizers: Array<any> = [];
  crops: Array<any> = [];
  machinery: Array<any> = [];
  insurance: Array<any> = [];
  education: Array<any> = [];
  owlclasses: Array<any> = ['owl-theme', 'nav-style2', 'row', 'sliding'];
  constructor(
    private product: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService,
    private renderer: Renderer2,
    private ele: ElementRef
  ) {}
  onSelect(e) {
    const featureditems = Array.from(document.querySelectorAll('.owl-stage-outer'));
    featureditems.forEach(function(owlitems , index) {
     if (index !== 0) {
      owlitems.setAttribute('style', 'padding: 0px 5px 200px; margin: 0px -5px -200px;');
     }
    });

  }
mousehoverowl() {
  const elementreference = this.owlElement;
 const owlouterstage  = elementreference.nativeElement.querySelector('.owl-stage-outer');
 this.renderer.setStyle(owlouterstage, 'padding-top', '0px');
 this.renderer.setStyle(owlouterstage, 'padding-right', '5px');
 this.renderer.setStyle(owlouterstage, 'padding-left', '5px');
 this.renderer.setStyle(owlouterstage, 'padding-bottom', '200px');
 this.renderer.setStyle(owlouterstage, 'margin-top', '0px');
 this.renderer.setStyle(owlouterstage, 'margin-left', '-5px');
 this.renderer.setStyle(owlouterstage, 'margin-right', '-5px');
 this.renderer.setStyle(owlouterstage, 'margin-bottom', '-200px');

this.owlclasses = ['owl-theme', 'nav-style2', 'row', 'sliding', 'owl-hover'];
}
mouseleaverowl() {
  const elementreference = this.owlElement;
  const owlouterstage = elementreference.nativeElement.querySelector('.owl-stage-outer');
  this.renderer.removeStyle(owlouterstage, 'padding');
  this.renderer.removeStyle(owlouterstage, 'margin');

  this.owlclasses = ['owl-theme', 'nav-style2', 'row', 'sliding'];

}
  ngOnInit() {
    this.product.getCatList().subscribe(
      res => {
        if (res['status'] === 'success') {
          // this.catlist = res['data'].category;
          // console.log(this.allproducts);
          // tslint:disable-next-line
          for (let item in res['data'].category) {
            this.catelist.push(res['data'].category[item].catname);
          }
          // console.log(this.catelist);
        } else {
        }
      },
      err => {
        console.log(err);
      }
    );
    this.product.getSFeaturedProductList().subscribe(
      res => {
        if (res['status'] === 'success') {
          this.featurelist = res['data'].featured;
        } else {
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

  quickview(product) {
    const initialState = {
      modaldata: { product: product._id }
    };
    this.bsModalRef = this.modalService.show(QuickviewComponent, {
      initialState
    });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
