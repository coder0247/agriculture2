import { ProductService } from '../../service/product.service';
import { Component, OnInit, TemplateRef, Input } from '@angular/core';
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
  regions: NgOption[];
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
  defaultproductimage: Array<any> = [];
  productimage: any;
  defaultimagepath: any;
  uploader: Uploader = new Uploader();
  uploadedimages: Array<any> = [];
  // productdetails: any;
  updatingstatus = false;
  formselementcat_idx: any;
  formselementsubcat_idx: any;
  pricenegradio1: any;
  pricenegradio2: any;
  statusradio1: any;
  statusradio2: any;
  showcatloading = false;
  showfrmloading = false;
  submitting = false;
  uploadCountAfterRemove = 1;
  currentfilesize: number;
  queuehasproduct = false;
  maxAllowedImage = 0;
  ordinal = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five'];
  ifuploading = false;
  constructor(private productservice: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    public homepage: HomeService,
    private modalService: BsModalService,
    private http: HttpClient,
    private formcontrolservice: EditFormControlService,
    private cs: ControlService,
    private fvalid: FvalidationService) {
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
      } else {
        this.showfrmloading = false;
      }
    }, (err) => {
      console.log(err);
    });
  }
  ngOnInit() {
    if (typeof localStorage.getItem('productinfo') === 'undefined' || localStorage.getItem('productinfo') === null) {
      this.router.navigate(['user/account/editads']);
    }

    this.formbaseelements.push(new Dropdown({
      key: 'category',
      label: 'Category',
      options: []
    }));
    this.newadForm = this.cs.toFormGroup(this.formbaseelements);
    this.formbaseelements.splice(0, 1);
    delete this.newadForm.controls['category'];
    delete this.newadForm.value['category'];
    const productdetails = JSON.parse(localStorage.getItem('productinfo'));
    this.formbaseelements = this.formcontrolservice.categoryfield(productdetails.category, productdetails.subcategory);
    this.newadForm = this.cs.toFormGroup(this.formbaseelements);
    this.formbaseelements.splice(1, this.formbaseelements.length - 1);
    // this.homepage.getCatList().subscribe(res => {
    //   if (res.status === 'success') {
    //     this.mainCats = res.data.category;
    //     if (this.mainCats.length > 0) {
    //       this.selectedCategory = this.mainCats[0]._id;
    //       this.formbaseelements = this.formcontrolservice.categoryfield(res.data.category);
    //       this.newadForm = this.cs.toFormGroup(this.formbaseelements);
    //       this.formbaseelements.splice(1, this.formbaseelements.length - 1);
    //     }
    //   }
    // }, (err) => {
    //   console.log(err);
    // });

    const userid = localStorage.getItem('id');
    if (!userid) { this.router.navigate(['user/signin']); }
    this.getFormFields();
  }
  getCountry(isrequired) {
    this.homepage.getCountryList()
      .subscribe(res => {
        if (res.status === 'success') {
          this.formbaseelements.push(this.formcontrolservice.countryfield(res.countrylist, isrequired));
        }
      }, (err) => {
        console.log(err);
      });
  }
  getCity(cityname) {
    this.homepage.getCityList(cityname)
      .subscribe(res => {
        if (res.status === 'success') {
          this.formbaseelements.push(this.formcontrolservice.cityfield(res.citylist));
        }
      }, (err) => {
        console.log(err);
      });
  }

  getCitieslist(e) {
    this.newadForm.controls['city'].markAsPristine({ onlySelf: true });
    this.newadForm.controls['city'].markAsUntouched({ onlySelf: true });
    this.newadForm.controls['city'].markAsDirty({ onlySelf: false });
    this.newadForm.controls['city'].setValue(null);
    const prevcityindex = _.findIndex(this.formbaseelements, function (o) { return o.key === 'city'; });
    if (prevcityindex !== -1) {
      this.formbaseelements.splice(prevcityindex, 1);
    }
    this.homepage.getCityList(e.target.value)
      .subscribe(res => {
        if (res.status === 'success') {
          this.formbaseelements.push(this.formcontrolservice.cityfield(res.citylist));
        }
      }, (err) => {
        console.log(err);
      });
  }

  getAmountList(isrequired) {
    this.homepage.getAmountUnitList()
      .subscribe(res => {
        if (res.status === 'success') {
          this.formbaseelements.push(this.formcontrolservice.amountunitfield(res.data.amountunit, isrequired));
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
  getCondition(isrequired) {
    this.formbaseelements.push(this.formcontrolservice.conditionfield(isrequired));
  }

  getAddinfo(isrequired) {
    this.formbaseelements.push(this.formcontrolservice.addinfofield(isrequired));
  }
  getManufacture(isrequired) {
    this.formbaseelements.push(this.formcontrolservice.mfgfield(isrequired));
  }
  getYearmfg(isrequired) {
    this.formbaseelements.push(this.formcontrolservice.yearmfgfield(isrequired));
  }

  priceneg() {
    const radio = this.formcontrolservice.priceneg();
    const item = this.formbaseelements.push(radio[0]);
    this.pricenegradio1 = item - 1;
    const vitem = this.formbaseelements.push(radio[1]);
    this.pricenegradio2 = vitem - 1;
  }
  statusradio() {
    const radio = this.formcontrolservice.statusfield();
    const item = this.formbaseelements.push(radio[0]);
    this.statusradio1 = item - 1;
    const vitem = this.formbaseelements.push(radio[1]);
    this.statusradio2 = vitem - 1;
  }
  getSubcatListOnchange(catid) {
    this.showcatloading = true;
    if (this.formbaseelements.length === 2) {
      this.formbaseelements.splice(1, 1);
    } else {
      this.formbaseelements.splice(2, this.formbaseelements.length - 1);
    }
    this.homepage.getSubcatListByCatID(catid._id).subscribe(res => {
      if (res.status === 'success') {
        this.formbaseelements.push(this.formcontrolservice.subcategoryfield(res.data.subcategory));
        this.showcatloading = false;
      } else {
        this.formbaseelements.splice(2, this.formbaseelements.length);
      }
    }, (err) => {
      console.log(err);
    });
  }
  getSubcatList(catid) {
    this.showcatloading = true;
    if (this.formbaseelements.length === 2) {
      this.formbaseelements.splice(1, 1);
    }
    const productdetails = JSON.parse(localStorage.getItem('productinfo'));
    this.defaultproductimage = productdetails === null ? '' : productdetails.pimage;
    this.homepage.getSubcatListByCatID(catid).subscribe(res => {
      if (res.status === 'success') {
        this.formbaseelements.push(this.formcontrolservice.subcategoryfield(productdetails.subcategory));
        // this.newadForm.patchValue({
        //   'category': productdetails.category_id,
        //   'subcatnames': productdetails.subcatid
        // });
        this.newadForm.controls['category'].markAsDirty({ onlySelf: true });
        this.newadForm.controls['subcatnames'].markAsDirty({ onlySelf: true });
        for (let item in this.formElements) {
          if (this.formElements[item].fieldname) {
            switch (this.formElements[item].fieldname) {
              case 'country':
                this.getCountry(this.formElements[item].isrequired);
                this.newadForm.patchValue({
                  'country': productdetails.country
                });
                this.newadForm.controls['country'].markAsDirty({ onlySelf: true });
                break;
              case 'city':
                this.getCity(productdetails.country);
                this.newadForm.patchValue({
                  'city': productdetails.city
                });
                this.newadForm.controls['city'].markAsDirty({ onlySelf: true });
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
                  'amountunit': productdetails.amtunitid
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
                this.newadForm.controls['pricenegotiable'].markAsDirty({ onlySelf: true });
                break;
              case 'description':
                this.getProductDescription(this.formElements[item].isrequired);
                this.newadForm.patchValue({
                  'description': productdetails.pdesc
                });
                this.newadForm.controls['description'].markAsDirty({ onlySelf: true });
                break;
              case 'condition':
                this.getCondition(this.formElements[item].isrequired);
                this.newadForm.patchValue({
                  'condition': productdetails.condition
                });
                this.newadForm.controls['condition'].markAsDirty({ onlySelf: true });
                break;
              case 'status':
                this.statusradio();

                this.newadForm.patchValue({
                  'status': productdetails.productstatus
                });
                this.newadForm.controls['status'].markAsDirty({ onlySelf: true });
                break;
              case 'addinfo':
                this.getAddinfo(this.formElements[item].isrequired);
                this.newadForm.patchValue({
                  'addinfo': productdetails.addinfo
                });
                this.newadForm.controls['addinfo'].markAsDirty({ onlySelf: true });
                break;
              case 'manufacture':
                this.getManufacture(this.formElements[item].isrequired);
                this.newadForm.patchValue({
                  'manufacture': productdetails.manufacture
                });
                this.newadForm.controls['manufacture'].markAsDirty({ onlySelf: true });
                break;
              case 'yearmfg':
                this.getYearmfg(this.formElements[item].isrequired);
                this.newadForm.patchValue({
                  'yearmfg': parseInt(productdetails.yearmfg, 10)
                });
                this.newadForm.controls['yearmfg'].markAsDirty({ onlySelf: true });
                break;
              case 'currency':
                this.getCurrency();
                this.newadForm.patchValue({
                  'currency': productdetails.currency.toUpperCase()
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
      } else {
        this.formbaseelements.splice(2, this.formbaseelements.length);
      }
    }, (err) => {
      console.log(err);
    });
  }

  removeprevimage(i) {
    this.defaultproductimage.splice(i, 1);
    this.uploadCountAfterRemove--;
    this.maxAllowedImage = 5 - this.uploadCountAfterRemove;
    if (this.uploadCountAfterRemove === 0) {
      const productdetails = JSON.parse(localStorage.getItem('productinfo'));
      this.productimage = [productdetails.subcatimg];
    this.defaultproductimage = [productdetails.subcatimg];
    this.maxAllowedImage = 5;
    }
  }
  setSubcatimages() {
    const productdetails = JSON.parse(localStorage.getItem('productinfo'));
    this.productimage = productdetails.pimage;
    this.defaultproductimage = productdetails.pimage;
    this.uploadCountAfterRemove = productdetails.pimage.length;
    this.maxAllowedImage = 5 - productdetails.pimage.length;
    console.log('this.uploadCountAfterRemove', this.uploadCountAfterRemove);
  }
  getSubcatimages(e) {
    this.productimage = e.defaultimage;
    this.defaultproductimage = e.defaultimage;
  }
  addnewproduct(templatenewaddposted, templateproductimg) {
    console.log('form values', this.newadForm.value);
    const userid = localStorage.getItem('id');
    const productdetails = JSON.parse(localStorage.getItem('productinfo'));
  
    let productimage;
    if (typeof this.uploadedimages !== undefined && this.uploadedimages) {
      productimage = this.uploadedimages;
    } else {
      productimage = this.productimage;
    }
    this.forcevalidation = true;
    this.fvalid.setMessage(this.forcevalidation);
    const allproductimages = _.concat(productimage, this.defaultproductimage)
    const updateproductdetails = {
      'productid': productdetails.productid,
      'subcat': productdetails.subcatid,
      'saleamount': this.newadForm.value.amountforsale,
      'amtunit': this.newadForm.value.amountunit,
      'unitprice': this.newadForm.value.priceperunit,
      'productname': this.newadForm.value.name,
      'pdesc': this.newadForm.value.description,
      'currencytype': this.newadForm.value.currency,
      'productimage':  allproductimages,
      'userid': userid,
      'pricetype': this.newadForm.value.pricenegotiable === 'no' ? false : true,
      'productstatus': this.newadForm.value.status,
      'manufacture': this.newadForm.value.manufacture,
      'yearmfg': this.newadForm.value.yearmfg,
      'addinfo': this.newadForm.value.addinfo,
      'city': this.newadForm.value.city,
      'condition': this.newadForm.value.condition,
      'country': this.newadForm.value.country
    };
    console.log('updateproductdetails', this.newadForm);
    if (this.newadForm.valid) {
      if (allproductimages.length === 0 ) {
        this.showAlert(templateproductimg);
      } else {
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
          }
      }
      , (error) => {
        console.log(error);
      });

    }
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
  dataURItoBlob(dataURI) {
    const binary = atob(dataURI.split(',')[1]);
    const mimeString = dataURI
      .split(',')[0]
      .split(':')[1]
      .split(';')[0];
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: mimeString });
  }
  showAlert(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template);
  }

  onSelectChange(event, template, exceededuploadlimit) {
    const image = new Image();
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.currentfilesize = Math.floor(
        parseFloat(event.target.files[0].size) / 1024
      );
      if (Math.floor(parseFloat(event.target.files[0].size) / 1024) > 300) {
        this.showAlert(template);
        return;
      } else {
        reader.onload = e => {
          this.showCroperWindow(event);
          this.bsModalRef.content.onClose.subscribe(result => {
            if (result === true) {
              let blob = this.dataURItoBlob(
                this.bsModalRef.content.croppedImage
              );
              const filename = event.target.files[0].name;
              this.uploader.queue.push(
                new UploadQueue(
                  new File([blob], filename, {
                    type: 'image/jpeg',
                    lastModified: Date.now()
                  })
                )
              );
              if (this.uploader.queue.length > 0) {
                this.queuehasproduct = true;
              }
              if (
                _.head(this.uploader.queue) !== undefined &&
                this.uploader.queue.length + this.uploadCountAfterRemove > 5
              ) {
                this.uploader.queue.pop();
                this.showAlert(exceededuploadlimit);
                return;
              }
              //  console.log('Total Count:' + this.uploader.queue.length);
            }
          });
        };
      }
    }
  }

  // upload
  upload(id) {
    if (id === null) {
      return;
    }
    const selectedFile = this.uploader.queue.find(s => s.id === id);
    if (selectedFile) {
      const formData = new FormData();
      formData.append('filename', selectedFile.file.name);
      formData.append('file', selectedFile.file);
      const uploadReq = new HttpRequest('POST', `/api/upload`, formData, {
        reportProgress: true
      });
      this.http.request(uploadReq).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.ifuploading = true;
          selectedFile.progress = Math.round(
            (100 * event.loaded) / event.total
          );
        } else {
          if (event.type === HttpEventType.Response) {
            this.ifuploading = false;
            this.uploadedimages.push(event.body['data']);
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
    this.uploader.queue.splice(idx, 1);
    this.uploadedimages.splice(idx, 1);
    if ( this.uploader.queue.length === 0 &&  !!this.uploader.queue) {
      this.queuehasproduct = false;
    }
    // console.log('queue', this.uploader.queue, this.uploadedimages);
  }
}
