import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from '@angular/forms';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { Utils } from '../utils/utils';
const URL = '/api/upload';
@Component({
  selector: 'app-edit-sub-category',
  templateUrl: './edit-sub-category.component.html',
  styleUrls: ['./edit-sub-category.component.css']
})
export class EditSubCategoryComponent implements OnInit {
  subcategoryForm: any;
  categories = [];
  subcategory = [];
  subcatname: any;
  catid: any;
  status: number;
  message: string;
  message_type: string;
  defaultimage: any;
  // images upload specific
  imagedata: any;
  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;
  showimageerror = false;
  uploadsuccess = false;
  tempimagename: any;

  constructor(
    private admin: AdminService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.subcategoryForm = this.formBuilder.group({
      subcatname: ['', Validators.required],
      catid: ['', Validators.required],
      status: ['1', Validators.required]
    });

    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
  }
  onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
    this.imagedata = JSON.parse(response); // success server response
    this.tempimagename = 'assets/images/products/' + this.imagedata.data.filename;
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

    this.route.params.subscribe(params => {
      this.admin.getSubcategoryDetails(params.id).subscribe(
        response => {
          console.log(response);
          if (response.status) {
            this.subcategory = response.data.subcategory;
            this.subcatname = this.subcategory['subcatname'];
            this.catid = this.subcategory['catid']['_id'];
            this.status = this.subcategory['status'];
            this.defaultimage = this.subcategory['defaultimage'];
          } else {
            this.subcategory = [];
            this.subcatname = '';
            this.catid = '';
            this.status = 0;
          }
        },
        error => {
          console.log(error);
        }
      );
    });
  }
  refreshdata() {
    this.subcategory.length = 0;
    this.subcatname = '';
    this.catid = '';
    this.status = 0;
    this.route.params.subscribe(params => {
      this.admin.getSubcategoryDetails(params.id).subscribe(
        response => {
          console.log(response);
          if (response.status) {
            this.subcategory = response.data.subcategory;
            this.subcatname = this.subcategory['subcatname'];
            this.catid = this.subcategory['catid']['_id'];
            this.status = this.subcategory['status'];
            this.defaultimage = this.subcategory['defaultimage'];
          } else {
            this.subcategory = [];
            this.subcatname = '';
            this.catid = '';
            this.status = 0;
          }
        },
        error => {
          console.log(error);
        }
      );
    });
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  updateSubcategoryDetails() {
    console.log('this.subcategoryForm.valid', this.subcategoryForm.valid);
    if (this.subcategoryForm.valid) {
      this.message = '';
      this.message_type = '';
      const data = {
        catid: this.subcategoryForm.value.catid,
        subcatname: this.subcategoryForm.value.subcatname,
        status: this.subcategoryForm.value.status,
        defaultimage: !!this.imagedata === false ? this.defaultimage : this.imagedata.data.filename,
      };
      // console.log('data', data, this.imagedata, !!this.imagedata);
      this.route.params.subscribe(params => {
        // if (typeof this.imagedata !== undefined && this.imagedata) {
        this.admin
          .updateSubcategoryDetails(params.id, data)
          .subscribe(
            response => {
              if (response.status === true) {
                this.showimageerror = false;
                if (typeof this.imagedata !== undefined && this.imagedata) {
                  this.uploadsuccess = true;
                } else {
                  this.uploadsuccess = false;
                }

                this.uploader.queue.length = 0;
                this.message = response.message;
                this.refreshdata();
                this.message_type = response.status ? 'success' : 'error';
              }

            },
            error => {
              console.log(error);
            }
          );
        // } else {
        // 	this.showimageerror = true;
        // }
      });
    } else {
      Utils.validateAllFormFields(this.subcategoryForm);
    }
  }

  isFieldValid(formGroup: FormGroup, field: string) {
    return Utils.isFieldValid(formGroup, field);
  }

  displayFieldCss(formGroup: FormGroup, field: string) {
    return Utils.displayFieldCss(formGroup, field);
  }
}
