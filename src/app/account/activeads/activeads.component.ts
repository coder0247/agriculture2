import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { QuickviewComponent } from '../quickview/quickview.component';
import { PagerService } from '../../service/pager.service';
@Component({
  selector: 'app-activeads',
  templateUrl: './activeads.component.html',
  styleUrls: ['./activeads.component.css']
})
export class ActiveadsComponent implements OnInit {
  products: any;
  showloading = false;
  bsModalRef: BsModalRef;
  notfound = false;
  pager: any = {};
  pageSize = 9;
  pagedItems: any[]; 
  constructor( private product: ProductService,
               private route: ActivatedRoute, private router: Router,
               private modalService: BsModalService,
               private pageservice: PagerService ) {  }

  quickview(pname, pimage, saleamount, amtunit, unitprice) {

    const initialState = {
      modaldata: [pname, pimage, saleamount, amtunit, unitprice]
    };
    this.bsModalRef = this.modalService.show(QuickviewComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pageservice.getPager(
      this.products.length,
      page,
      this.pageSize
    );
    setTimeout(() => {
      this.pagedItems = this.products.slice(
        this.pager.startIndex,
        this.pager.endIndex + 1
      );
    }, 500);
  }
  activeads() {
    const userid = localStorage.getItem('id');
    this.showloading = true;
     this.product.getProductListByUser(userid)
      .subscribe(res => {
          if (res['status'] === 'success') {
           this.showloading = false;
           this.notfound = false;
           this.products = res.data.product;
           this.setPage(1);
         } else {
          if (this.products) {
            this.products.length = 0;
          }
          this.showloading = false;
          this.notfound = true;
         }
        }, (err) => {
          console.log(err);
        });
  }

  ngOnInit() {
    this.activeads();
  }
  archivead(productid) {
    this.showloading = true;
    this.product.setAdArchive(productid)
    .subscribe(res => {
        if (res['status'] === 'success') {
         this.showloading = false;
        this.activeads();
       } else {
        this.showloading = false;
       }
      }, (err) => {
        console.log(err);
      });
  }
  showproductdetails(itemid) {
      this.router.navigate(['product/detail/' + itemid]);
  }
}
