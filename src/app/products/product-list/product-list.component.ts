import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { QuickviewComponent } from '../quickview/quickview.component';
import { PagerService } from '../../service/pager.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any;
  showloading = false;
  bsModalRef: BsModalRef;
  notfound = false;
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  constructor( private product: ProductService,
               private route: ActivatedRoute, private router: Router,
               private modalService: BsModalService , private pageservice: PagerService) {  }

   quickview(pname, pimage, saleamount,  amtunit, unitprice) {

    const initialState = {
      modaldata : [ pname, pimage , saleamount,  amtunit, unitprice]
    };
    this.bsModalRef = this.modalService.show(QuickviewComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pageservice.getPager(this.products.length, page);

    // get current page of items
    this.pagedItems = this.products.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log('params[id]', params['id']);
      // // this.router.navigate(['/cropnotfound']);
      // this.imageurl =  'assets/images/crop/small/' + params['id'] + '.jpeg';
      // console.log(params); // log the entire params object
      // console.log(params['id']); // log the value of id
    this.showloading = true;
    // console.log('params[id]', params['id']);
     this.product.getProductList(params['id'])
      .subscribe(res => {
          if (res['status'] === 'success') {
           this.showloading = false;
           this.notfound = false;
           this.products = res.data.product;
         } else {
          // this.router.navigate(['/cropnotfound']);
          if (this.products) {
            this.products.length = 0;
          }
          this.showloading = false;
          this.notfound = true;
         }
        }, (err) => {
          console.log(err);
        });
    });
  }
  showproductdetails(itemid) {
      this.router.navigate(['product/detail/' + itemid]);
  }
}
