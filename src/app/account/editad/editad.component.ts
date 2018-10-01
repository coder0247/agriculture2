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
  selector: 'app-editad',
  templateUrl: './editad.component.html',
  styleUrls: ['./editad.component.css']
})
export class EditadComponent implements OnInit {
  newadForm: FormGroup;
  subCats: NgOption[];
  amtforsale: NgOption[];
  regions:  NgOption[];
  imagedata: any;
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;
  showimageerror = false;
  uploadsuccess = false;
  uploadinginprogress = false;
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
  productdetails: any;
  updatingstatus = false;
  pricetypeyes = false;
  pricetypeno = false;
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
  if (typeof localStorage.getItem('productinfo') === 'undefined' || localStorage.getItem('productinfo') === null) {
    this.router.navigate(['user/account/editads']);
  }
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
   // region list
this.getRegionList();
// amounit list
this.getAmountUnit();

}
getAmountUnit() {
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
getRegionList() {
  this.homepage.getRegionList()
  .subscribe(res => {
     if (res.status === 'success') {
      // console.log(res);
       this.regions = res.data.regions;
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
    this.productdetails = JSON.parse(localStorage.getItem('productinfo'));

    this.defaultproductimage = this.productdetails === null ? '' : this.productdetails.pimage;
    const formprefilled = {
      pimage: this.productdetails === null ? '' : this.productdetails.pimage,
      category_id : this.productdetails === null ? '' : this.productdetails.category_id,
      subcatid : this.productdetails === null ? '' : this.productdetails.subcatid,
      amtunit : this.productdetails === null ? '' : this.productdetails.amtunit,
      unitprice : this.productdetails === null ? '' : this.productdetails.unitprice,
      regionid : this.productdetails === null ? '' : this.productdetails.regionid,
      saleamount : this.productdetails === null ? '' : this.productdetails.saleamount,
      pname : this.productdetails === null ? '' : this.productdetails.pname,
    };
    if(this.productdetails.negotiable === true) {
      this.pricetypeyes = true;
      this.pricetypeno = false;
    } else {
      this.pricetypeyes = false;
      this.pricetypeno = true;
    }
    this.newadForm = new FormGroup({
      // tslint:disable-next-line
      category:new FormControl(formprefilled.category_id, Validators.required),
      subcatnames: new FormControl(formprefilled.subcatid, Validators.required),
      amtunit: new FormControl(formprefilled.amtunit, Validators.required),
      unitprice: new FormControl(formprefilled.unitprice, Validators.required),
      region : new FormControl(formprefilled.regionid, Validators.required),
      saleamount: new FormControl(formprefilled.saleamount, Validators.required),
      productname: new FormControl(formprefilled.pname, Validators.required),
      pricetype: new FormControl()
        }); // remove updateon to change the event to onchange
        this.getSubcatList(this.productdetails === null ? 111111111111111111111111111 : this.productdetails.category_id);
        this.getRegionList();
        this.getAmountUnit();
  }


  addnewproduct(templatenewaddposted) {
    const userid = localStorage.getItem('id');
    // console.log('this.uploadedimages', this.uploadedimages);
    let productimage;
    // if (typeof this.uploadedimages !== undefined && this.uploadedimages) {
    //   productimage = this.uploadedimages;
    // } else {
    //   productimage = this.productimage;
    // }

    if (typeof this.uploadedimages !== undefined && this.uploadedimages) {
      productimage = this.uploadedimages;
    } else {
      if (this.productimage === '' || typeof this.productimage === 'undefined') {
        // console.log('---undefined');
        productimage = this.productdetails.pimage;
      } else {
        productimage = this.productimage;
      }
    }
    this.forcevalidation = true;
    const productdetails = {
      'productid': this.productdetails.productid,
      'subcat': this.newadForm.value.subcatnames,
      'region': this.newadForm.value.region,
      'saleamount': this.newadForm.value.saleamount,
      'amtunit': this.newadForm.value.amtunit,
      'unitprice': this.newadForm.value.unitprice,
      'productname': this.newadForm.value.productname,
      'productimage': productimage,
      'userid' : userid,
      'pricetype': this.newadForm.value.pricetype
    };
    // console.log(this.newadForm.value, productdetails);
   if (this.newadForm.valid) {
    this.uploadsuccess = false;
    this.updatingstatus = true;
    this.productservice.updateProduct(productdetails).subscribe(res => {
      if (res['status'] === true) {
        this.showimageerror = false;
        this.uploadsuccess = true;
        this.uploader.queue.length = 0;
        this.forcevalidation = false;
        this.updatingstatus = false;
        this.defaultproductimage = productimage;
        this.showAlert(templatenewaddposted);
        // this.newadForm.reset();
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
        this.uploadinginprogress = true;
        this.http.request(uploadReq).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            selectedFile.progress = Math.round(100 * event.loaded / event.total);
          }  else {
            if (event.type === HttpEventType.Response) {
              // console.log('upload', event.body['data']);
              this.uploadinginprogress = false;
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
