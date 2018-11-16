import { ProductService } from '../../service/product.service';
import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';
import { HomeService } from '../../service/home.service';
import { CroperpopupComponent } from '../croperpopup/croperpopup.component';
import * as _ from 'lodash';
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse
} from '@angular/common/http';
import { Uploader } from '../../entities/uploader';
import { UploadQueue } from '../../entities/uploadqueue';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgOption } from '@ng-select/ng-select';
import { FormBase } from '../../form/formbase/form-base';
import { ControlService } from '../../form/service/control.service';
import { FormControlService } from './../../service/formcontrols.service';
import { Dropdown } from './../../form/formcontrol/dropdown';
import { FvalidationService } from './../../service/fvalidation';

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
 
  @Input()
  formbaseelements: FormBase<any>[] = [];
  dformbaseelements: FormBase<any>[] = [];
  imagedata: any;
  formElements: Array<any> = [];
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
  uploadedimages: Array<any> = [];
  formselementcat_idx: any;
  formselementsubcat_idx: any;
  pricenegradio1: any;
  pricenegradio2: any;
  statusradio1: any;
  statusradio2: any;
  showcatloading = false;
  showfrmloading = false;
  submitting = false;
  currentfilesize: number;
  // tslint:disable-next-line:max-line-length
  defaultformelement = ['addinfo', 'amtunit', 'condition', 'country', 'city',  'currency', 'description', 'manufacture', 'priceneg', 'productname', 'saleamount', 'status',
   'unitprice', 'yearmfg'];
  constructor(
    private productservice: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    public homepage: HomeService,
    private modalService: BsModalService,
    private http: HttpClient,
    private formcontrolservice: FormControlService,
    private cs: ControlService,
    private fvalid: FvalidationService
  ) {}
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
    this.dformbaseelements.push(
      new Dropdown({
        key: 'category',
        label: 'Category',
        options: []
      })
    );
    this.newadForm = this.cs.toFormGroup(this.dformbaseelements);
    this.dformbaseelements.splice(0, 1);
    delete this.newadForm.controls['category'];
    delete this.newadForm.value['category'];
    this.homepage.getCatList().subscribe(
      res => {
        if (res.status === 'success') {
          this.mainCats = res.data.category;
          if (this.mainCats.length > 0) {
            this.selectedCategory = this.mainCats[0]._id;
            this.dformbaseelements = this.formcontrolservice.categoryfield( res.data.category );
            this.newadForm = this.cs.toFormGroup(this.dformbaseelements);
            this.dformbaseelements.splice(1, this.dformbaseelements.length - 1);
          }
        }
      },
      err => {
        console.log(err);
      }
    );
    // this.createForm();
    const userid = localStorage.getItem('id');
    if (!userid) {
      this.router.navigate(['user/signin']);
    }
  }
  generateForm() {
    // console.log('before ...', this.formbaseelements);
    // this.formbaseelements.length = 0;
    // this.formbaseelements.splice(2, this.formbaseelements.length - 1);
    this.homepage.getCatList().subscribe(
      res => {
        if (res.status === 'success') {
          this.mainCats = res.data.category;
          if (this.mainCats.length > 0) {
            this.selectedCategory = this.mainCats[0]._id;
            // this.formbaseelements.splice(0, this.formbaseelements.length - 1);
            // for ( let item of this.formcontrolservice.categoryfield1()) {
            //   this.formbaseelements.push(item);
            //   // console.log('hmm', item);
            // }
            // console.log('00000000000000000', this.formbaseelements);
            // this.newadForm = this.cs.toFormGroup(this.formbaseelements);
            for ( let item of this.defaultformelement) {
              this.newadForm.addControl(item, new FormControl('', Validators.required));
            }
            // this.formbaseelements.splice(2, this.formbaseelements.length - 1);
          }
        }
      },
      err => {
        console.log(err);
      }
    );
    // this.createForm();
    const userid = localStorage.getItem('id');
    if (!userid) {
      this.router.navigate(['user/signin']);
    }
  }
  getCountry(isrequired) {
    this.homepage.getCountryList()
    .subscribe(res => {
      if (res.status === 'success') {
        // console.log(res);
        this.formbaseelements.push(this.formcontrolservice.countryfield(res.countrylist, isrequired));
      }
    }, (err) => {
      console.log(err);
    });
}
  getAmountList(isrequired) {
    // amounit list
    this.homepage.getAmountUnitList().subscribe(
      res => {
        if (res.status === 'success') {
          // console.log(res);
          this.formbaseelements.push(
            this.formcontrolservice.amountunitfield(
              res.data.amountunit,
              isrequired
            )
          );
          // this.amtforsale = res.data.amountunit;
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  getProductName(isrequired) {
    this.formbaseelements.push(
      this.formcontrolservice.productnamefield(isrequired)
    );
  }
  getSaleAmount(isrequired) {
    this.formbaseelements.push(
      this.formcontrolservice.saleamountfield(isrequired)
    );
  }
  getUnitPrice(isrequired) {
    this.formbaseelements.push(
      this.formcontrolservice.unitpricefield(isrequired)
    );
  }
  getProductDescription(isrequired) {
    this.formbaseelements.push(
      this.formcontrolservice.productdescfield(isrequired)
    );
  }
  getCurrency() {
    this.formbaseelements.push(this.formcontrolservice.currencyfield());
  }

  priceneg() {
    const radio = this.formcontrolservice.priceneg();

    const item = this.formbaseelements.push(radio[0]);
    this.pricenegradio1 = item - 1;
    const vitem = this.formbaseelements.push(radio[1]);
    this.pricenegradio2 = vitem - 1;
    // this.newadForm. = this.cs.toFormGroup(this.radiobutton);
  }
  statusradio() {
    const radio = this.formcontrolservice.statusfield();

    const item = this.formbaseelements.push(radio[0]);
    this.statusradio1 = item - 1;
    const vitem = this.formbaseelements.push(radio[1]);
    this.statusradio2 = vitem - 1;
    // this.newadForm. = this.cs.toFormGroup(this.radiobutton);
  }
  getCitieslist(e) {
    // console.log('this.formbaseelements', this.formbaseelements);
    // console.log('city index', _.findIndex(this.formbaseelements, function(o) { return o.key === 'city'; }));
    this.newadForm.controls['city'].markAsPristine({ onlySelf: true });
    this.newadForm.controls['city'].markAsUntouched({ onlySelf: true });
    this.newadForm.controls['city'].markAsDirty({ onlySelf: false });
    this.newadForm.controls['city'].setValue(null);
    const prevcityindex = _.findIndex(this.formbaseelements, function(o) { return o.key === 'city'; });
    if ( prevcityindex !== -1) {
      this.formbaseelements.splice(prevcityindex, 1);
    }
    this.homepage.getCityList(e.target.value)
      .subscribe(res => {
        if (res.status === 'success') {
          // console.log(res);
          // this.cities = res.citylist;
          res.citylist.sort(function(a, b) {
            const nameA = a.toUpperCase(); // ignore upper and lowercase
            const nameB = b.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          });
          this.formbaseelements.push(this.formcontrolservice.cityfield(res.citylist, true));

        }
      }, (err) => {
        console.log(err);
      });
  }
  getSubcatList(e) {
   
    this.showcatloading = true;
    if (this.dformbaseelements.length === 2) {
      this.dformbaseelements.splice(1, 1);
    } else {
      this.dformbaseelements.splice(1, this.dformbaseelements.length - 1);
    }
    if (e.target.value !== '') {
      this.homepage.getSubcatListByCatID(e.target.value).subscribe(
        res => {
          if (res.status === 'success') {
            this.dformbaseelements.push(
              this.formcontrolservice.subcategoryfield(res.data.subcategory)
            );
            this.showcatloading = false;
          }
          //  else {
          //   this.formbaseelements.splice(2, this.formbaseelements.length);
          // }
        },
        err => {
          console.log(err);
        }
      );
    } else {
      // this.formbaseelements.splice(1, this.formbaseelements.length - 1);
      this.productimage = '';
      this.defaultproductimage = '';
      this.showcatloading = false;
    }
  }
  getCondition(isrequired) {
    this.formbaseelements.push(
      this.formcontrolservice.conditionfield(isrequired)
    );
  }
  getAddinfo(isrequired) {
    this.formbaseelements.push(
      this.formcontrolservice.addinfofield(isrequired)
    );
  }
  getManufacture(isrequired) {
    this.formbaseelements.push(
      this.formcontrolservice.mfgfield(isrequired)
    );
  }
  yearmfg(isrequired) {
    this.formbaseelements.push(
      this.formcontrolservice.yearmfgfield(isrequired)
    );
  }
  getSubcatimages(e) {
    if (this.formbaseelements.length) {
      // for ( let item of this.defaultformelement) {
      //   if (this.newadForm.contains(item)) {
      //     this.newadForm.removeControl(item);
      //   }
      // }

      // this.formElements.length = 0;
      // this.newadForm.removeControl('category');
      // this.formbaseelements.splice(2, this.formbaseelements.length - 1);
      this.formbaseelements.length = 0;
      this.generateForm();
    }

    if (e.target.value !== 'none') {

      this.pricenegradio1 = null;
      this.pricenegradio2 = null;
      this.showfrmloading = true;
     // let optindex = _.findIndex(this.dformbaseelements, function(o) { return o.key === 'subcatnames'; });
      this.productimage = this.dformbaseelements[1]['options'][
        parseInt(e.target.selectedIndex, 10) - 1
      ].defaultimage;
      let controlstokeep: Array<any> = [];
      controlstokeep.length = 0;
      this.defaultproductimage = this.dformbaseelements[1]['options'][parseInt(e.target.selectedIndex, 10) - 1].defaultimage;

      this.homepage.getformfields(e.target.value).subscribe(
        res => {
          if (res.status === 'success') {

            this.formElements = res.data[0].form;
  
            for (let item in this.formElements) {
              if (this.formElements[item].fieldname) {
                switch (this.formElements[item].fieldname) {
                  case 'country':
                    controlstokeep.push('country');
                    controlstokeep.push('city');
                    this.getCountry(this.formElements[item].isrequired);
                    break;
                  case 'name':
                    controlstokeep.push('productname');
                    this.getProductName(this.formElements[item].isrequired);
                    break;
                  case 'amountforsale':
                    controlstokeep.push('saleamount');
                    this.getSaleAmount(this.formElements[item].isrequired);
                    break;
                  case 'amountunit':
                    controlstokeep.push('amtunit');
                    this.getAmountList(this.formElements[item].isrequired);
                    break;
                  case 'priceperunit':
                    controlstokeep.push('unitprice');
                    this.getUnitPrice(this.formElements[item].isrequired);
                    break;
                  case 'pricenegotiable':
                    controlstokeep.push('priceneg');
                    this.priceneg();
                    break;
                    case 'yearmfg':
                    controlstokeep.push('yearmfg');
                    this.yearmfg(this.formElements[item].isrequired);
                    break;
                  case 'status':
                  controlstokeep.push('status');
                  this.statusradio();
                  break;
                  case 'condition':
                  controlstokeep.push('condition');
                  this.getCondition(this.formElements[item].isrequired);
                  break;
                  case 'addinfo':
                  controlstokeep.push('addinfo');
                  this.getAddinfo(this.formElements[item].isrequired);
                  break;
                  case 'manufacture':
                  controlstokeep.push('manufacture');
                  this.getManufacture(this.formElements[item].isrequired);
                  break;
                  case 'description':
                  controlstokeep.push('description');
                    this.getProductDescription(
                      this.formElements[item].isrequired
                    );
                    break;
                  case 'currency':
                  controlstokeep.push('currency');
                    this.getCurrency();
                    break;
                  default:
                    break;
                }
              }
            }
            this.removeFormControls(controlstokeep);

            controlstokeep.length = 0;
            this.showfrmloading = false;
          } else {
            this.showfrmloading = false;
          }
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.formbaseelements.splice(2, this.formbaseelements.length - 1);
      this.productimage = '';
      this.defaultproductimage = '';
      this.showcatloading = false;

    }
  }
  removeFormControls(keepcontrols) {
    const formeleremove =  _.without(this.defaultformelement, ...keepcontrols);
    if ( formeleremove.length > 0) {
      for ( let item of formeleremove) {
        if (this.newadForm.contains(item)) {
          // console.log('item', item);
          this.newadForm.removeControl(item);
        }
      }
    }
   }
  // public fileOverBase(e: any): void {
  //   this.hasBaseDropZoneOver = e;
  // }

  // public fileOverAnother(e: any): void {
  //   this.hasAnotherDropZoneOver = e;
  // }
  private createForm() {
    // this.newadForm = new FormGroup({
    //   // tslint:disable-next-line
    //   category:new FormControl('', Validators.required),
    //   subcatnames: new FormControl('', Validators.required),
    //   amtunit: new FormControl('', Validators.required),
    //   unitprice: new FormControl('', Validators.required),
    //   region : new FormControl('', Validators.required),
    //   saleamount: new FormControl('', Validators.required),
    //   productname: new FormControl('', Validators.required)
    //     }); // remove updateon to change the event to onchange
  }

  addnewproduct(templatenewaddposted, templateproductimg) {
    const userid = localStorage.getItem('id');
    let productimages: any;
    if (typeof this.uploadedimages !== undefined && this.uploadedimages.length > 0) {
      productimages = this.uploadedimages;
    } else {
      productimages = [this.productimage];
    }

    this.forcevalidation = true;
    this.fvalid.setMessage(this.forcevalidation);

    const newproduct = {
      subcat: this.newadForm.value.subcatnames,
      saleamount: this.newadForm.value.saleamount,
      amtunit: this.newadForm.value.amtunit,
      unitprice: this.newadForm.value.unitprice,
      productname: this.newadForm.value.productname,
      description: this.newadForm.value.description,
      currencytype: this.newadForm.value.currency,
      productimage: [productimages],
      addinfo: this.newadForm.value.addinfo,
      city: this.newadForm.value.city,
      condition: this.newadForm.value.condition,
      country: this.newadForm.value.country,
      manufacture: this.newadForm.value.manufacture,
      status: this.newadForm.value.status,
      yearmfg: this.newadForm.value.yearmfg,
      priceneg : this.newadForm.value.priceneg,
      userid: userid
    };
  //  console.log('form bindings', newproduct);
    if (this.newadForm.valid) {
      this.submitting = true;
      // if (this.uploadedimages.length === 0) {
      //   // console.log('upload images for the product');
      //   this.showAlert(templateproductimg);
      //   this.submitting = false;
      //   return;
      //  }
      this.productservice.addNewProduct(newproduct).subscribe(
        res => {
          if (res['status'] === 'success') {
            this.showimageerror = false;
            this.showAlert(templatenewaddposted);
            this.uploader.queue.length = 0;
            this.forcevalidation = false;
            this.newadForm.reset();
            this.submitting = false;
          }
        },
        error => {
          console.log(error);
        }
      );
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
              if (
                _.head(this.uploader.queue) !== undefined &&
                this.uploader.queue.length > 5
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
          selectedFile.progress = Math.round(
            (100 * event.loaded) / event.total
          );
        } else {
          if (event.type === HttpEventType.Response) {
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
    // console.log('queue', this.uploader.queue, this.uploadedimages);
  }
}
