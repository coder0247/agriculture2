import { Component, OnInit,  ElementRef, Renderer2 } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { QuickviewComponent } from '../quickview/quickview.component';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from '@angular/forms';
import { Utils } from '../utils/utils';
import * as _ from 'lodash';
import { PopupComponent } from '../popup/popup.component';
import { PagerService } from '../../service/pager.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
  productSearchForm: any;
  categories = [];
  subcategories = [];
  currentSubcategory = '';
  products = [];
  productFormSubmitted = false;
  productLoaded = false;
  message: string;
  message_type: string;
  category_id: any;
  showloading = false;
  bsModalRef: BsModalRef;
  notfound = false;
  pager: any = {};
  pageSize = 8;
  pagedItems: any[];
  isdeleting = 'block';
  constructor(
    private admin: AdminService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private renderer: Renderer2,
    private pageservice: PagerService,
    private elRef: ElementRef
  ) {
    this.productSearchForm = this.formBuilder.group({
      catid: ['', Validators.required],
      subcatid: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.admin.getActiveCategories().subscribe(
      response => {
        if (response.status) {
          this.categories = response.data.categories;
        } else {
          this.categories = [];
        }
      },
      error => {
        console.log(error);
      }
    );
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
  deleteproduct(productid , event , productindex, editbtnid) {
    const initialState = {
      modaldata: [productid]
    };
    this.bsModalRef = this.modalService.show(PopupComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.onClose.subscribe(result => {
      if (result === true) {
        const hElement: HTMLElement = this.elRef.nativeElement;
        const editbutton = hElement.getElementsByClassName(editbtnid);
        this.renderer.setAttribute(event.srcElement, 'disabled', 'disabled');
        this.renderer.setStyle(event.srcElement, 'cursor', 'not-allowed');
        this.renderer.setAttribute(editbutton[0], 'disabled', 'disabled');
        this.renderer.setStyle(editbutton[0], 'cursor', 'not-allowed');
        this.isdeleting = 'none';
        this.confirmdelete(productid, productindex);

      }
    });
  }
  confirmdelete(productid, productindex) {
     console.log('before splice', productid);
    this.products.splice(productindex, 1);
    // console.log('after splice', this.products);
    this.admin.deleteProduct(productid)
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
    // get current page of items
  }

  loadSubcategoryByCategoryID(category_id: any) {
    this.category_id = category_id;
    this.admin.getActiveSubcategoryListByCategory(category_id).subscribe(
      response => {
        if (response.status) {
          this.subcategories = response.data.subcategories;
        } else {
          this.subcategories = [];
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  findProducts() {
    if (this.productSearchForm.dirty && this.productSearchForm.valid) {
      this.productFormSubmitted = true;
      this.productLoaded = false;
      const category_id = this.productSearchForm.controls.catid.value;
      const subcategory_id = this.productSearchForm.controls.subcatid.value;
      this.admin
        .getBestSellerByCategorySubcategory(category_id, subcategory_id)
        .subscribe(
          response => {
            if (response.status) {
              this.products = response.data.products;
              this.setPage(1);
            } else {
              this.products = [];
            }
            this.productLoaded = true;
          },
          error => {
            console.log(error);
          }
        );
    } else {
      Utils.validateAllFormFields(this.productSearchForm);
    }
  }
 
  // makeProductBestSeller(product) {
  //   const product_id = product._id;
  //   this.message = '';
  //   this.message_type = '';

  //   this.admin
  //     .makeProductBestSeller(product_id)
  //     .subscribe(
  //       response => {
  //         this.message = response.message;
  //         this.message_type = response.status ? 'success' : 'error';

  //         if (response.status) {
  //           this.products.map((item, index) => {
  //             if (item._id === product_id) {
  //               item.is_bestseller = true;
  //             }
  //           });
  //         }
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     );
  // }

  // makeProductNotBestSeller(product) {
  //   const product_id = product._id;
  //   this.message = '';
  //   this.message_type = '';

  //   this.admin
  //     .makeProductNotBestSeller(product_id)
  //     .subscribe(
  //       response => {
  //         this.message = response.message;
  //         this.message_type = response.status ? 'success' : 'error';

  //         if (response.status) {
  //           this.products.map((item, index) => {
  //             if (item._id === product_id) {
  //               item.is_bestseller = false;
  //             }
  //           });
  //         }
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     );
  // }

  isFieldValid(formGroup: FormGroup, field: string) {
    return Utils.isFieldValid(formGroup, field);
  }

  displayFieldCss(formGroup: FormGroup, field: string) {
    return Utils.displayFieldCss(formGroup, field);
  }
}
