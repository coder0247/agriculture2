import { Component, OnInit } from '@angular/core';
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
  selector: 'app-makeonsale',
  templateUrl: './makeonsale.component.html',
  styleUrls: ['./makeonsale.component.css']
})
export class MakeonsaleComponent implements OnInit {

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
    private formBuilder: FormBuilder
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
        .getOnSaleByCategorySubcategory(category_id, subcategory_id)
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

  makeProductOnSale(product) {
    const product_id = product._id;
    this.message = '';
    this.message_type = '';

    this.admin
      .makeProductOnSale(product_id)
      .subscribe(
        response => {
          this.message = response.message;
          this.message_type = response.status ? 'success' : 'error';

          if (response.status) {
            this.products.map((item, index) => {
              if (item._id === product_id) {
                item.is_onsale = true;
              }
            });
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  makeProductNotOnSale(product) {
    const product_id = product._id;
    this.message = '';
    this.message_type = '';

    this.admin
      .makeProductNotOnSale(product_id)
      .subscribe(
        response => {
          this.message = response.message;
          this.message_type = response.status ? 'success' : 'error';

          if (response.status) {
            this.products.map((item, index) => {
              if (item._id === product_id) {
                item.is_onsale = false;
              }
            });
          }
        },
        error => {
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
