import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { QuickviewComponent } from '../quickview/quickview.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  products: any;
  showloading = false;
  bsModalRef: BsModalRef;
  noresultfound = false;
  new_products: Array<any> = [];
  limit: any = 6;

  constructor(
    private product: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService
  ) {}

  quickview(product) {

    const initialState = {
      modaldata: { product: product._id }
    };
    this.bsModalRef = this.modalService.show(QuickviewComponent, {
      initialState
    });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit() {
    this.fetchNewProductList();

    this.route.params.subscribe(params => {
      this.showloading = true;
      this.product
        .getSearchResult(params['subcatid'])
        .subscribe(
          res => {
            if (res['status'] === 'success') {
              this.showloading = false;
              this.noresultfound = false;
              this.products = res['data'].product;
            } else {
              if (this.products) {
                this.products.length = 0;
              }
              this.showloading = false;
              this.noresultfound = true;
            }
          },
          err => {
            console.log(err);
          }
        );
    });
  }

  fetchNewProductList() {
    this.product.getNewProductList(this.limit).subscribe(
      res => {
        if (res['status'] === 'success') {
          this.new_products = res['data'].newarrival;
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
