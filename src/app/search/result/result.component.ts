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

  quickview(image, pname, pprice) {
    const initialState = {
      modaldata: [image, pname, pprice]
    };
    this.bsModalRef = this.modalService.show(QuickviewComponent, {
      initialState
    });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  ngOnInit() {
    this.fetchNewProductList();

    this.route.params.subscribe(params => {
      // console.log('params[id]', params['id']);
      // // this.router.navigate(['/cropnotfound']);
      // this.imageurl =  'assets/images/crop/small/' + params['id'] + '.jpeg';
      // console.log(params); // log the entire params object
      // console.log(params['id']); // log the value of id
      this.showloading = true;
      // console.log('search params', params);
      this.product
        .getSearchResult(params['subcatid'], params['regionid'])
        .subscribe(
          res => {
            console.log('search result response', res);
            if (res['status'] === 'success') {
              this.showloading = false;
              this.noresultfound = false;
              this.products = res['data'].product;
            } else {
              // this.router.navigate(['/cropnotfound']);
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
