import { ProductService } from '../../service/product.service';
import { Component, OnInit, TemplateRef , Input} from '@angular/core';
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
import { FormBase } from '../../form/formbase/form-base';
import { ControlService } from '../../form/service/control.service';
import { Dropdown } from './../../form/formcontrol/dropdown';
import { FvalidationService } from './../../service/fvalidation';
import { EditFormControlService } from './../../service/editformcontrols.service';
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
  @Input() formbaseelements: FormBase<any>[] = [];
  imagedata: any;
  formElements: Array<any> = [];
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
  // productdetails: any;
  updatingstatus = false;
  formselementcat_idx: any;
  formselementsubcat_idx: any;
  pricenegradio1: any;
  pricenegradio2: any;
  showcatloading = false;
  showfrmloading = false;
  submitting = false;
constructor( private productservice: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              public homepage: HomeService,
              private modalService: BsModalService,
              private http: HttpClient,
              private formcontrolservice: EditFormControlService,
              private cs: ControlService,
              private fvalid: FvalidationService) {
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
getFormFields() {
  this.formbaseelements.splice(2, this.formbaseelements.length - 1);
  this.pricenegradio1 = null;
  this.pricenegradio2 = null;
  this.showfrmloading = true;

  const productdetails = JSON.parse(localStorage.getItem('productinfo'));

  this.homepage.getformfields(productdetails.subcatid).subscribe(res => {
   if (res.status === 'success') {
    this.formElements = res.data[0].form;
    this.getSubcatList(productdetails.category_id);
     // this.formbaseelements.push(this.formcontrolservice.subcategoryfield(res.data.subcategory));
     // console.log('formfields', res.data[0].form);
   } else {
     this.showfrmloading = false;
   }
 }, (err) => {
     console.log(err);
 });
}
ngOnInit () {
  if (typeof localStorage.getItem('productinfo') === 'undefined' || localStorage.getItem('productinfo') === null) {
    this.router.navigate(['user/account/editads']);
  }
//   this.homepage.getCatList().subscribe(res => {
//     if (res.status === 'success') {
//       this.mainCats = res.data.category;
//       if (this.mainCats.length > 0) {
//         this.selectedCategory = this.mainCats[0]._id;
//       }
//     }
//   }, (err) => {
//     console.log(err);
//   });
//   this.createForm();
//   const userid = localStorage.getItem('id');
//   if (!userid) {
//   this.router.navigate(['user/signin']);
//   }
//    // region list
// this.getRegionList();
// // amounit list
// this.getAmountUnit();
this.formbaseelements.push(new Dropdown({
  key: 'category',
  label: 'Category',
  options: []
}));
this.newadForm = this.cs.toFormGroup( this.formbaseelements);
this.formbaseelements.splice(0, 1);
delete this.newadForm.controls['category'];
delete this.newadForm.value['category'];
this.homepage.getCatList().subscribe(res => {
  if (res.status === 'success') {
    this.mainCats = res.data.category;
    if (this.mainCats.length > 0) {
      this.selectedCategory = this.mainCats[0]._id;
      this.formbaseelements = this.formcontrolservice.categoryfield(res.data.category);
      // console.log(this.formbaseelements);
     this.newadForm = this.cs.toFormGroup(this.formbaseelements);
     this.formbaseelements.splice(1, this.formbaseelements.length - 1);
    //  const productdetails = JSON.parse(localStorage.getItem('productinfo'));
    }
  }
}, (err) => {
  console.log(err);
});
// this.createForm();
const userid = localStorage.getItem('id');
if (!userid) { this.router.navigate(['user/signin']); }
this.getFormFields();
}
getRegion(isrequired) {
  // region list
  this.homepage.getRegionList()
  .subscribe(res => {
     if (res.status === 'success') {
      //  this.regions = res.data.regions;
       this.formbaseelements.push(this.formcontrolservice.regionfield(res.data.regions, isrequired));

     }
    }, (err) => {
      console.log(err);
    });
  }
  getAmountList(isrequired) {
   // amounit list
   this.homepage.getAmountUnitList()
   .subscribe(res => {
      if (res.status === 'success') {
       // console.log(res);
       this.formbaseelements.push(this.formcontrolservice.amountunitfield(res.data.amountunit, isrequired));
        // this.amtforsale = res.data.amountunit;
      }
     }, (err) => {
       console.log(err);
     });
  }
  getProductName(isrequired) {
    this.formbaseelements.push(this.formcontrolservice.productnamefield(isrequired));
  }
  getSaleAmount(isrequired) {
    this.formbaseelements.push(this.formcontrolservice.saleamountfield(isrequired));
  }
  getUnitPrice(isrequired) {
    this.formbaseelements.push(this.formcontrolservice.unitpricefield(isrequired));
  }
  getProductDescription(isrequired) {
    this.formbaseelements.push(this.formcontrolservice.productdescfield(isrequired));
  }
  getCurrency() {
    this.formbaseelements.push(this.formcontrolservice.currencyfield());
  }

  priceneg() {
    const radio = this.formcontrolservice.priceneg();
    const item = this.formbaseelements.push(radio[0]);
   this.pricenegradio1 = item - 1;
   console.log('this.pricenegradio1', this.pricenegradio1);
    const vitem = this.formbaseelements.push(radio[1]);
    this.pricenegradio2 = vitem - 1;
    console.log('this.pricenegradio2', this.pricenegradio2);
    // this.newadForm. = this.cs.toFormGroup(this.radiobutton);
  }

  getSubcatListOnchange(catid) {
    // console.log('catid', catid);
    this.showcatloading = true;
    if (this.formbaseelements.length === 2) {
      this.formbaseelements.splice(1, 1);
    } else {
      this.formbaseelements.splice(2, this.formbaseelements.length - 1);
    }
    // console.log('aaaa', this.formbaseelements);
    this.homepage.getSubcatListByCatID(catid._id).subscribe(res => {
      if (res.status === 'success') {
        // this.formbaseelements[this.formselementsubcat_idx] = res.data.subcategory;
        this.formbaseelements.push(this.formcontrolservice.subcategoryfield(res.data.subcategory));
        this.showcatloading = false;
        // console.log('this.formbaseelements[1]', this.formbaseelements);
        // this.subCats = res.data.subcategory;
      } else {
        this.formbaseelements.splice(2, this.formbaseelements.length);
      }
    }, (err) => {
      console.log(err);
    });
  }
  getSubcatList(catid) {
    // console.log('catid', catid);
    this.showcatloading = true;
    if (this.formbaseelements.length === 2) {
      this.formbaseelements.splice(1, 1);
    } 
    const productdetails = JSON.parse(localStorage.getItem('productinfo'));

    this.defaultproductimage = productdetails === null ? '' : productdetails.pimage;
    // console.log('aaaa', this.formbaseelements);
    this.homepage.getSubcatListByCatID(catid).subscribe(res => {
      // console.log('00000000', res);
      if (res.status === 'success') {
        // this.formbaseelements[this.formselementsubcat_idx] = res.data.subcategory;
        this.formbaseelements.push(this.formcontrolservice.subcategoryfield(res.data.subcategory));
       
        this.newadForm.patchValue({
          'category': productdetails.category_id,
          'subcatnames': productdetails.subcatid
        });
        this.newadForm.controls['category'].markAsDirty({ onlySelf: true });
        this.newadForm.controls['subcatnames'].markAsDirty({ onlySelf: true });
    //  console.log('form data', this.formElements);
     // this.subCats = res.data;
     for ( let item in this.formElements) {
       // console.log('this.formElements[item].fieldname', this.formElements[item].fieldname);
       // ['region', 'name', 'amountforsale', 'amountunit', 'priceperunit', 'pricenegotiable']
      if (this.formElements[item].fieldname) {
       switch (this.formElements[item].fieldname) {
         case 'region':
         this.getRegion(this.formElements[item].isrequired);
         this.newadForm.patchValue({
          'region': productdetails.regionid
        });
           this.newadForm.controls['region'].markAsDirty({ onlySelf: true });
           break;
           case 'name':
           this.getProductName(this.formElements[item].isrequired);
           this.newadForm.patchValue({
            'name': productdetails.pname
          });
          this.newadForm.controls['name'].markAsDirty({ onlySelf: true });
           break;
           case 'amountforsale':
           this.getSaleAmount(this.formElements[item].isrequired);
           this.newadForm.patchValue({
            'amountforsale': productdetails.saleamount
          });
          this.newadForm.controls['amountforsale'].markAsDirty({ onlySelf: true });
           break;
           case 'amountunit':
           this.getAmountList(this.formElements[item].isrequired);
           this.newadForm.patchValue({
            'amountunit': productdetails.amtunit
          });
          this.newadForm.controls['amountunit'].markAsDirty({ onlySelf: true });
           break;
           case 'priceperunit':
           this.getUnitPrice(this.formElements[item].isrequired);
           this.newadForm.patchValue({
            'priceperunit': productdetails.unitprice
          });
          this.newadForm.controls['priceperunit'].markAsDirty({ onlySelf: true });
           break;
           case 'pricenegotiable':
           this.priceneg();
           this.newadForm.patchValue({
            'pricenegotiable': productdetails.negotiable
          });
          // this.newadForm.controls['pricenegotiable'].markAsDirty({ onlySelf: true });
           break;
           case 'description':
           this.getProductDescription(this.formElements[item].isrequired);
           this.newadForm.patchValue({
            'description': productdetails.pdesc
          });
          this.newadForm.controls['description'].markAsDirty({ onlySelf: true });
           break;
           case 'currency':
           this.getCurrency();
           this.newadForm.patchValue({
            'currency': productdetails.currency
          });
           this.newadForm.controls['currency'].markAsDirty({ onlySelf: true });
           break;
         default:
           break;
       }
      }
     }
     this.showfrmloading = false;
     this.setSubcatimages();

        this.showcatloading = false;
        // console.log('this.formbaseelements[1]', this.formbaseelements);
        // this.subCats = res.data.subcategory;
      } else {
        this.formbaseelements.splice(2, this.formbaseelements.length);
      }
    }, (err) => {
      console.log(err);
    });
  }
// getAmountUnit() {
//   this.homepage.getAmountUnitList()
//   .subscribe(res => {
//      if (res.status === 'success') {
//       // console.log(res);
//        this.amtforsale = res.data.amountunit;
//      }
//     }, (err) => {
//       console.log(err);
//     });
// }
// getRegionList() {
//   this.homepage.getRegionList()
//   .subscribe(res => {
//      if (res.status === 'success') {
//       // console.log(res);
//        this.regions = res.data.regions;
//      }
//     }, (err) => {
//       console.log(err);
//     });
// }
// getSubcatList(catid) {
//   // console.log(catid);
//   this.homepage.getSubcatListByCatID(catid).subscribe(res => {
//     if (res.status === 'success') {
//       this.subCats = res.data.subcategory;
//     }
//   }, (err) => {
//     console.log(err);
//   });
// }
setSubcatimages() {
const productdetails = JSON.parse(localStorage.getItem('productinfo'));
  this.productimage = productdetails.pimage;
  this.defaultproductimage =  productdetails.pimage;
}
getSubcatimages(e) {
  // console.log('subcat details', e);

 this.productimage = e.defaultimage;
 this.defaultproductimage = e.defaultimage;

}
  // public fileOverBase(e: any): void {
  //   this.hasBaseDropZoneOver = e;
  // }

  // public fileOverAnother(e: any): void {
  //   this.hasAnotherDropZoneOver = e;
  // }
  // private createForm() {
  //   this.productdetails = JSON.parse(localStorage.getItem('productinfo'));

  //   this.defaultproductimage = this.productdetails === null ? '' : this.productdetails.pimage;
  //   const formprefilled = {
  //     pimage: this.productdetails === null ? '' : this.productdetails.pimage,
  //     category_id : this.productdetails === null ? '' : this.productdetails.category_id,
  //     subcatid : this.productdetails === null ? '' : this.productdetails.subcatid,
  //     amtunit : this.productdetails === null ? '' : this.productdetails.amtunit,
  //     unitprice : this.productdetails === null ? '' : this.productdetails.unitprice,
  //     regionid : this.productdetails === null ? '' : this.productdetails.regionid,
  //     saleamount : this.productdetails === null ? '' : this.productdetails.saleamount,
  //     pname : this.productdetails === null ? '' : this.productdetails.pname,
  //   };
  //   if (this.productdetails.negotiable === true) {
  //     this.pricetypeyes = true;
  //     this.pricetypeno = false;
  //   } else {
  //     this.pricetypeyes = false;
  //     this.pricetypeno = true;
  //   }
  //   this.newadForm = new FormGroup({
  //     // tslint:disable-next-line
  //     category:new FormControl(formprefilled.category_id, Validators.required),
  //     subcatnames: new FormControl(formprefilled.subcatid, Validators.required),
  //     amtunit: new FormControl(formprefilled.amtunit, Validators.required),
  //     unitprice: new FormControl(formprefilled.unitprice, Validators.required),
  //     region : new FormControl(formprefilled.regionid, Validators.required),
  //     saleamount: new FormControl(formprefilled.saleamount, Validators.required),
  //     productname: new FormControl(formprefilled.pname, Validators.required),
  //     pricetype: new FormControl()
  //   }); // remove updateon to change the event to onchange

  //       this.getSubcatList(this.productdetails === null ? 111111111111111111111111111 : this.productdetails.category_id);
  //       this.getRegionList();
  //       this.getAmountUnit();
  // }


  addnewproduct(templatenewaddposted) {
    console.log('form values', this.newadForm.value);
    const userid = localStorage.getItem('id');
    // console.log('this.uploadedimages', this.uploadedimages);
   const productdetails = JSON.parse(localStorage.getItem('productinfo'));
    let productimage;
    if (typeof this.uploadedimages !== undefined && this.uploadedimages) {
      productimage = this.uploadedimages;
    } else {
      productimage = this.productimage;
    }
    this.forcevalidation = true;
    this.fvalid.setMessage(this.forcevalidation);
    /*
    amountforsale: "33"
    amountunit: "5b4debdd5580971bc49e89d4"
    category: "5b56cd9ecb50b83ff77b516e"
    currency: "tzs"
    description: "Contrary to popular belief Lorem Ipsum is not simply random text. I
    name: "Test 66"
    pricenegotiable: false
    priceperunit: "33"
    region: "5b45cf40364504e1dff51c5e"
    subcatnames: "5bc44733da3f0033ec1b7c0a"
    */
    const updateproductdetails = {
      'productid': productdetails.productid,
      'subcat': this.newadForm.value.subcatnames,
      'region': this.newadForm.value.region,
      'saleamount': this.newadForm.value.amountforsale,
      'amtunit': this.newadForm.value.amountunit,
      'unitprice': this.newadForm.value.priceperunit,
      'productname': this.newadForm.value.name,
      'pdesc': this.newadForm.value.description,
      'currencytype': this.newadForm.value.currency,
      'productimage': productimage,
      'userid' : userid,
      'pricetype': this.newadForm.value.pricenegotiable === 'no' ? false : true
    };
    // console.log(this.newadForm.value, productdetails);
    
   if (this.newadForm.valid) {
    this.submitting = true;
    this.uploadsuccess = false;
    this.updatingstatus = true;
    this.productservice.updateProduct(updateproductdetails).subscribe(res => {
      if (res['status'] === true) {
        this.showimageerror = false;
        this.uploadsuccess = true;
        this.uploader.queue.length = 0;
        this.forcevalidation = false;
        this.updatingstatus = false;
        this.defaultproductimage = productimage;
        this.submitting = false;
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
