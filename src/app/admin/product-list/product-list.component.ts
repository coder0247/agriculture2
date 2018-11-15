import { Component, OnInit,  ElementRef, Renderer2 } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from '@angular/forms';
import { Utils } from '../utils/utils';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
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
  constructor(
    private admin: AdminService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private renderer: Renderer2
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
        .getProductListByCategorySubcategory(category_id, subcategory_id)
        .subscribe(
          response => {
            if (response.status) {
              this.products = response.data.products;
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

  makeProductFeatured(product, event) {
    const product_id = product._id;
    this.message = '';
    this.message_type = '';
    this.renderer.setAttribute(event.srcElement, 'disabled', 'disabled');
    event.srcElement.innerHTML =  'Please Wait';
    this.admin
      .makeProductFeatured(this.category_id, this.currentSubcategory, product_id)
      .subscribe(
        response => {
          this.message = response.message;
          this.message_type = response.status ? 'success' : 'error';

          if (response.status) {
            event.srcElement.innerHTML = 'Make Unfeatured';
            this.renderer.removeAttribute(event.srcElement, 'disabled');
            this.products.map((item, index) => {
              if (item._id === product_id) {
                item.is_featured = true;
              }
            });
          }
        },
        error => {
          console.log(error);
          event.srcElement.innerHTML = 'Make Unfeatured';
          this.renderer.removeAttribute(event.srcElement, 'disabled');
        }
      );
  }

  makeProductUnfeatured(product, event) {
    const product_id = product._id;
    this.message = '';
    this.message_type = '';
    this.renderer.setAttribute(event.srcElement, 'disabled', 'disabled');
    event.srcElement.innerHTML =  'Please Wait';
    this.admin
      .makeProductUnfeatured(this.currentSubcategory, product_id)
      .subscribe(
        response => {
          this.message = response.message;
          this.message_type = response.status ? 'success' : 'error';
          event.srcElement.innerHTML = 'Make Featured';
          if (response.status) {
            this.renderer.removeAttribute(event.srcElement, 'disabled');
            this.products.map((item, index) => {
              if (item._id === product_id) {
                item.is_featured = false;
              }
            });
          }
        },
        error => {
          event.srcElement.innerHTML = 'Make Featured';
          this.renderer.removeAttribute(event.srcElement, 'disabled');
          console.log(error);
        }
      );
  }

  isFieldValid(formGroup: FormGroup, field: string) {
    return Utils.isFieldValid(formGroup, field);
  }

  displayFieldCss(formGroup: FormGroup, field: string) {
    return Utils.displayFieldCss(formGroup, field);
  }
}
