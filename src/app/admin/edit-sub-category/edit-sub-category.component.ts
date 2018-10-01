import { Component, OnInit, TemplateRef } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from '@angular/forms';
import { Utils } from '../utils/utils';
import { CroperpopupComponent } from './../../account/croperpopup/croperpopup.component';

import * as _ from 'lodash';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Uploader } from '../../entities/uploader';
import { UploadQueue } from '../../entities/uploadqueue';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// const URL = 'http://localhost:3000/api/upload';
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
  bsModalRef: BsModalRef;
  // public uploader: FileUploader = new FileUploader({ url: URL });
  // public hasBaseDropZoneOver = false;
  // public hasAnotherDropZoneOver = false;
  showimageerror = false;
  uploadsuccess = false;
  tempimagename: any;
  uploader: Uploader = new Uploader();
  uploadedimages: any;
  constructor(
    private admin: AdminService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private http: HttpClient
  ) {
    this.subcategoryForm = this.formBuilder.group({
      subcatname: ['', Validators.required],
      catid: ['', Validators.required],
      status: ['1', Validators.required]
    });

    // this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
  }
  // onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
  //   this.imagedata = JSON.parse(response); // success server response
  // }
  showCroperWindow(event) {
    const initialState = {
      modaldata: [event]
    };
    this.bsModalRef = this.modalService.show(CroperpopupComponent, {
      initialState
    });
    this.bsModalRef.content.closeBtnName = 'Close';
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
  // public fileOverBase(e: any): void {
  //   this.hasBaseDropZoneOver = e;
  // }

  // public fileOverAnother(e: any): void {
  //   this.hasAnotherDropZoneOver = e;
  // }
  updateSubcategoryDetails() {
    if (this.subcategoryForm.valid) {
      this.message = '';
      this.message_type = '';
      const data = {
        catid: this.subcategoryForm.value.catid,
        subcatname: this.subcategoryForm.value.subcatname,
        status: this.subcategoryForm.value.status,
        defaultimage: typeof this.uploadedimages !== undefined && this.uploadedimages ? this.uploadedimages : this.defaultimage,
      };
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
     // FILE UPLOAD CODE
  // getter : get overall progress
  get progress(): number {
    let psum = 0;

    for (const entry of this.uploader.queue) {
      psum += entry.progress;
    }

    if (psum === 0) {
      return 0;
    }

    return Math.round(psum / this.uploader.queue.length);
  }


  onFilesChange(fileList: Array<File>) {

    for (const file of fileList) {
      this.uploader.queue.push(new UploadQueue(file));
    }

}

  onFileInvalids(fileList: Array<File>) {
    // TODO handle invalid files here
  }
   dataURItoBlob (dataURI) {
    const binary = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: mimeString});
  }
  showAlert(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template);
  }

  onSelectChange(event, template, templateproductimg) {
    const image = new Image();
    // console.log('event.target.files', event.target.files);
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      // console.log('file details', event.target.files[0]);
      // this.currentfilesize = Math.floor(parseFloat(event.target.files[0].size) / 1024) ;
      if (event.target.files[0].type === 'image/jpeg') {
     if (Math.floor(parseFloat(event.target.files[0].size) / 1024) > 300) {
      this.showAlert(template);
      return;
     } else {
      reader.onload = (e) => {
        this.showCroperWindow(event);
        this.bsModalRef.content.onClose.subscribe(result => {
          if (result === true) {
           let blob = this.dataURItoBlob(this.bsModalRef.content.croppedImage);

          //  console.log('ok', this.bsModalRef.content.croppedImage);
          // const filename =  Date.now() + 'fname.jpg';
          const filename = event.target.files[0].name;
          // console.log('_.head(this.uploader.queue.length)', this.uploader.queue.length);

               this.uploader.queue.push(new UploadQueue(new File([blob], filename, {type: 'image/jpeg', lastModified: Date.now()})));

          //  console.log(this.uploader.queue);
          // if (_.head(this.uploader.queue) !== undefined && this.uploader.queue.length > 6) {
          //   this.uploader.queue.pop();
          //   this.showAlert(exceededuploadlimit);
          //   return;
          // }
          //  console.log('Total Count:' + this.uploader.queue.length);
          }
        });
      };

     }
    }  else {
      // file extension check
      this.showAlert(templateproductimg);
      return;
    }

    }

  }

  // upload
  upload(id, ) {
    if (id === null) {
      return;
    }
      const selectedFile = this.uploader.queue.find(s => s.id === id);
      if (selectedFile) {
        const formData = new FormData();
        formData.append('filename', selectedFile.file.name);
        formData.append('file', selectedFile.file);
        // console.log('selectedFile.file', selectedFile.file);
        const uploadReq = new HttpRequest('POST', `/api/upload`, formData, {
          reportProgress: true,
        });

        this.http.request(uploadReq).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            selectedFile.progress = Math.round(100 * event.loaded / event.total);
          }  else {
            if (event.type === HttpEventType.Response) {
              // console.log('upload', event.body['data']);
              this.uploadedimages = event.body['data'];
              // console.log('uploadedimages', this.uploadedimages);
              selectedFile.message = event.body.toString();
            }
          }
        });
      }
  }
  // upload all selected files to server
  // uploadAll() {
  //   // find the remaning files to upload
  //   const remainingFiles = this.uploader.queue.filter(s => !s.isSuccess);
  //   for (const item of remainingFiles) {
  //     this.upload(item.id);
  //   }
  // }

  // cancel all
  cancelAll() {
    // TODO
  }
  removeAll() {
    this.uploader.queue.length = 0;
  }
  removeSelected(idx) {
    // this.uploader.queue.splice(idx, 1);
    // this.uploadedimages.splice(idx, 1);
    this.uploader.queue.length = 0;
    this.uploadedimages = '';
    console.log('queue', this.uploader.queue, this.uploadedimages);
  }
}
