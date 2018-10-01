import { ProductService } from '../../service/product.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { HomeService } from '../../service/home.service';
import { CroperpopupComponent } from '../croperpopup/croperpopup.component';
import * as _ from 'lodash';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Uploader } from '../../entities/uploader';
import { UploadQueue } from '../../entities/uploadqueue';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgOption } from '@ng-select/ng-select';
const URL = '/api/upload';

@Component({
  selector: 'app-newad',
  templateUrl: './newad.component.html',
  styleUrls: ['./newad.component.css']
})
export class NewadComponent implements OnInit {
  newadForm: FormGroup;
  subCats: NgOption[];
  amtforsale: NgOption[];
  regions:  NgOption[];
  imagedata: any;
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;
  showimageerror = false;
  uploadsuccess = false;
  tempimagename: any;
  forcevalidation = false;
  mainCats: NgOption[];
  bsModalRef: BsModalRef;
  // subCats: Array<any> = [];
  selectedCategory = '';
  defaultproductimage: any;
  productimage: any;
  defaultimagepath: any;
  uploader: Uploader = new Uploader();
  uploadedimages: any;
constructor( private productservice: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              public homepage: HomeService,
              private modalService: BsModalService,
              private http: HttpClient) {
  // this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
 // this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
}
showCroperWindow(event) {
  const initialState = {
    modaldata: [event]
  };
  this.bsModalRef = this.modalService.show(CroperpopupComponent, {
    initialState
  });
  this.bsModalRef.content.closeBtnName = 'Close';
}
ngOnInit () {

  this.homepage.getCatList().subscribe(res => {
    if (res.status === 'success') {
      this.mainCats = res.data.category;
      if (this.mainCats.length > 0) {
        this.selectedCategory = this.mainCats[0]._id;
      }
    }
  }, (err) => {
    console.log(err);
  });
  this.createForm();
  const userid = localStorage.getItem('id');
  if (!userid) {
  this.router.navigate(['user/signin']);
  }
  // croplist
  // this.homepage.getCropList()
  // .subscribe(res => {
  //    if (res.status === 'success') {
  //      this.subcatsnames = res.data.crops;
  //    }
  //   }, (err) => {
  //     console.log(err);
  //   });
  // region list
  this.homepage.getRegionList()
  .subscribe(res => {
     if (res.status === 'success') {
       this.regions = res.data.regions;
     }
    }, (err) => {
      console.log(err);
    });
     // amounit list
  this.homepage.getAmountUnitList()
  .subscribe(res => {
     if (res.status === 'success') {
      // console.log(res);
       this.amtforsale = res.data.amountunit;
     }
    }, (err) => {
      console.log(err);
    });

}
getSubcatList(catid) {
  // console.log(catid);
  this.homepage.getSubcatListByCatID(catid).subscribe(res => {
    if (res.status === 'success') {
      this.subCats = res.data.subcategory;
    }
  }, (err) => {
    console.log(err);
  });
}
getSubcatimages(e) {
  this.productimage = e.defaultimage;
 this.defaultproductimage = e.defaultimage;

}
  // public fileOverBase(e: any): void {
  //   this.hasBaseDropZoneOver = e;
  // }

  // public fileOverAnother(e: any): void {
  //   this.hasAnotherDropZoneOver = e;
  // }
  private createForm() {
    this.newadForm = new FormGroup({
      // tslint:disable-next-line
      category:new FormControl('', Validators.required),
      subcatnames: new FormControl('', Validators.required),
      amtunit: new FormControl('', Validators.required),
      unitprice: new FormControl('', Validators.required),
      region : new FormControl('', Validators.required),
      saleamount: new FormControl('', Validators.required),
      productname: new FormControl('', Validators.required)
        }); // remove updateon to change the event to onchange
  }

  addnewproduct(templatenewaddposted) {
    const userid = localStorage.getItem('id');
    // console.log('this.uploadedimages', this.uploadedimages);
    let productimage;
    if (typeof this.uploadedimages !== undefined && this.uploadedimages) {
      productimage = this.uploadedimages;
    } else {
      productimage = this.productimage;
    }
    this.forcevalidation = true;
    const newproduct = {
      'subcat': this.newadForm.value.subcatnames,
      'region': this.newadForm.value.region,
      'saleamount': this.newadForm.value.saleamount,
      'amtunit': this.newadForm.value.amtunit,
      'unitprice': this.newadForm.value.unitprice,
      'productname': this.newadForm.value.productname,
      'productimage': productimage,
      'userid' : userid
    };
   if (this.newadForm.valid) {
    this.productservice.addNewProduct(newproduct).subscribe(res => {
      if (res['status'] === 'success') {
        this.showimageerror = false;
        this.showAlert(templatenewaddposted);
        this.uploader.queue.length = 0;
        this.forcevalidation = false;
        this.newadForm.reset();
      }
    }, (error) => {
      console.log(error);
    });
   }
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
    console.log('event.target.files', event.target.files);
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      console.log('file details', event.target.files[0]);
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
           console.log('Total Count:' + this.uploader.queue.length);
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
        console.log('selectedFile.file', selectedFile.file);
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
