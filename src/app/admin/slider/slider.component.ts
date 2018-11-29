import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Uploader } from '../../entities/uploader';
import { UploadQueue } from '../../entities/uploadqueue';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from '@angular/forms';
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse
} from '@angular/common/http';
import { CroperpopupComponent } from '../croperpopup/croperpopup.component';
import * as _ from 'lodash';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  sliderForm: FormGroup;
  uploader: Uploader = new Uploader();
  bsModalRef: BsModalRef;
  uploadedimages: any;
  imageloader = false;
  submitting = false;
  formsuccess = false;
  deleteing = false;
  message: any;
  slideritems: Array<any> = [];
  constructor(
    private modalService: BsModalService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private admin: AdminService
  ) { }

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
    this.getPrevUploadedItems();
    this.createForm();
  }
  private createForm() {
    /*
      'subtitle': 'up to <span class="text-main-color">60% off</span>',
      'title': 'Crops',
      'smalltitle': 'Only: <span> 226 TZS</span>',
      'buttontext': 'Shop Now',
      'buttonurl': 'category/5b56cd9ecb50b83ff77b5168'
    */
    this.sliderForm = new FormGroup({
      title: new FormControl(''),
      subtitle: new FormControl(''),
      smalltext: new FormControl(''),
      buttontext: new FormControl(''),
      buttonurl: new FormControl('')
    });
  }
  addNewSlider() {
    this.submitting = true;
    const data = {
      title: this.sliderForm.value.title,
      subtitle: this.sliderForm.value.subtitle,
      smalltext: this.sliderForm.value.smalltext,
      buttontext: this.sliderForm.value.buttontext,
      buttonurl: this.sliderForm.value.buttonurl,
      sliderimage: this.uploadedimages
    };
    if (typeof this.uploadedimages !== undefined && this.uploadedimages) {
      this.admin.addNewSlider(data).subscribe(
        response => {
          this.submitting = false;
          // this.message_type = response.status ? 'success' : 'error';
          if (response.status) {
            this.getPrevUploadedItems();
            this.formsuccess = true;
            this.sliderForm.reset();
            this.message = response.message;
            this.uploader.queue.length = 0;
          }
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.submitting = false;
    }
  }
getPrevUploadedItems() {
  this.admin.getSlideritems().subscribe(
    response => {
      if (response.status) {
        this.slideritems = response.slideritems;
      }
    },
    error => {
      console.log(error);
    }
  );
}
deleteslider(itemid) {
this.deleteing = true;
this.admin.deleteslideritem(itemid).subscribe(
  response => {
    if (response.status) {
      this.deleteing = false;
      this.slideritems.length = 0;
      this.getPrevUploadedItems();
    }
  },
  error => {
    console.log(error);
  }
);
}
  // FILE UPLOAD CODE
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
  dataURItoBlob(dataURI) {
    const binary = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: mimeString });
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
      //   console.log('file details', event.target.files[0]);
      // this.currentfilesize = Math.floor(parseFloat(event.target.files[0].size) / 1024) ;
      if (event.target.files[0].type === 'image/jpeg') {
        if (Math.floor(parseFloat(event.target.files[0].size) / 1024) > 1300) {
          this.showAlert(template);
          return;
        } else {
          reader.onload = (e) => {
            this.showCroperWindow(event);
            this.bsModalRef.content.onClose.subscribe(result => {
              if (result === true) {
                let blob = this.dataURItoBlob(this.bsModalRef.content.croppedImage);
                const filename = event.target.files[0].name;
                this.uploader.queue.push(new UploadQueue(new File([blob], filename, { type: 'image/jpeg', lastModified: Date.now() })));
              }
            });
          };

        }
      } else {
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
      this.imageloader = true;
      const formData = new FormData();
      formData.append('filename', selectedFile.file.name);
      formData.append('file', selectedFile.file);
      console.log('selectedFile.file', selectedFile.file);
      const uploadReq = new HttpRequest('POST', `/api/upload`, formData, {
        reportProgress: true,
      });

      this.http.request(uploadReq).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          selectedFile.progress = Math.round(100 * event.loaded / event.total);
        } else {
          if (event.type === HttpEventType.Response) {
            // console.log('upload', event.body['data']);
            this.uploadedimages = event.body['data'];
            this.imageloader = false;
            // console.log('uploadedimages', this.uploadedimages);
            selectedFile.message = event.body.toString();
          }
        }
      });
    }
  }
  // cancel all
  cancelAll() {
    // TODO
  }
  removeAll() {
    this.uploader.queue.length = 0;
  }
  removeSelected(idx) {
    this.uploader.queue.length = 0;
    this.uploadedimages = '';
    // console.log('queue', this.uploader.queue, this.uploadedimages);
  }
}
