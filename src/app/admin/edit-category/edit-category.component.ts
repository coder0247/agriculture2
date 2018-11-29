import { Component, OnInit, AfterViewInit } from '@angular/core';
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
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit, AfterViewInit {
  categoryForm: any;
  category = [];
  catname: any;
  status: number;
  message: string;
  message_type: string;

  constructor(
    private admin: AdminService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.categoryForm = this.formBuilder.group({
      catname: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.admin.getCategoryDetails(params.id).subscribe(
        response => {
          if (response.status) {
            this.category = response.data.category;
            this.catname = this.category['catname'];
            this.status = this.category['status'];
          } else {
            this.category = [];
            this.catname = '';
            this.status = 0;
          }
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  ngAfterViewInit() {
    // console.log('here');
  }

  updateCategoryDetails() {
    if (this.categoryForm.dirty && this.categoryForm.valid) {
      this.message = '';
      this.message_type = '';
      this.route.params.subscribe(params => {
        this.admin
          .updateCategoryDetails(params.id, this.categoryForm.value)
          .subscribe(
            response => {
              this.message = response.message;
              this.message_type = response.status ? 'success' : 'error';
            },
            error => {
              console.log(error);
            }
          );
      });
    } else {
      Utils.validateAllFormFields(this.categoryForm);
    }
  }

  isFieldValid(formGroup: FormGroup, field: string) {
    return Utils.isFieldValid(formGroup, field);
  }

  displayFieldCss(formGroup: FormGroup, field: string) {
    return Utils.displayFieldCss(formGroup, field);
  }
}
