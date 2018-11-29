import { Component, OnInit,  ElementRef, Renderer2 } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PagerService } from '../../service/pager.service';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from '@angular/forms';
import { Utils } from '../utils/utils';

@Component({
  selector: 'app-makenewarrivals',
  templateUrl: './makenewarrivals.component.html',
  styleUrls: ['./makenewarrivals.component.css']
})
export class MakenewarrivalsComponent implements OnInit {

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
  pager: any = {};
  pageSize = 9;
  pagedItems: any[];
  constructor(
    private admin: AdminService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private pageservice: PagerService
  ) {
    this.productSearchForm = this.formBuilder.group({
      catid: ['', Validators.required],
      subcatid: ['', Validators.required]
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
        .getNewArrivalsByCategorySubcategory(category_id, subcategory_id)
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

  makeProductNewArrival(product, event) {
    const product_id = product._id;
    this.message = '';
    this.message_type = '';
    this.renderer.setAttribute(event.srcElement, 'disabled', 'disabled');
    event.srcElement.innerHTML =  'Please Wait';
    this.admin
      .makeProductNewArrival(product_id)
      .subscribe(
        response => {
          this.message = response.message;
          this.message_type = response.status ? 'success' : 'error';

          if (response.status) {
            event.srcElement.innerHTML = 'Not New Arrivals';
            this.renderer.removeAttribute(event.srcElement, 'disabled');
            this.products.map((item, index) => {
              if (item._id === product_id) {
                item.is_newarrival = true;
              }
            });
          }
        },
        error => {
          event.srcElement.innerHTML = 'Make New Arrivals';
          this.renderer.removeAttribute(event.srcElement, 'disabled');
          console.log(error);
        }
      );
  }

  makeProductNotNewArrival(product, event) {
    const product_id = product._id;
    this.message = '';
    this.message_type = '';
    this.renderer.setAttribute(event.srcElement, 'disabled', 'disabled');
    event.srcElement.innerHTML =  'Please Wait';
    this.admin
      .makeProductNotNewArrival(product_id)
      .subscribe(
        response => {
          this.message = response.message;
          this.message_type = response.status ? 'success' : 'error';

          if (response.status) {
            event.srcElement.innerHTML = 'Make New Arrivals';
            this.renderer.removeAttribute(event.srcElement, 'disabled');
            this.products.map((item, index) => {
              if (item._id === product_id) {
                item.is_newarrival = false;
              }
            });
          }
        },
        error => {
          event.srcElement.innerHTML = 'Not New Arrivals';
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
