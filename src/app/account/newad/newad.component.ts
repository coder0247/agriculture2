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
    this.formbaseelements.push(
      new Dropdown({
        key: 'category',
        label: 'Category',
        options: []
      })
    );
    this.newadForm = this.cs.toFormGroup(this.formbaseelements);
    this.formbaseelements.splice(0, 1);
    delete this.newadForm.controls['category'];
    delete this.newadForm.value['category'];
    this.homepage.getCatList().subscribe(
      res => {
        if (res.status === 'success') {
          this.mainCats = res.data.category;
          if (this.mainCats.length > 0) {
            this.selectedCategory = this.mainCats[0]._id;
            this.formbaseelements = this.formcontrolservice.categoryfield(
              res.data.category
            );
            this.newadForm = this.cs.toFormGroup(this.formbaseelements);
            this.formbaseelements.splice(1, this.formbaseelements.length - 1);
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

  // getCity(isrequired) {}
  // getRegion(isrequired) {
  // // region list
  // this.homepage.getRegionList()
  // .subscribe(res => {
  //    if (res.status === 'success') {
  //     //  this.regions = res.data.regions;
  //      this.formbaseelements.push(this.formcontrolservice.regionfield(res.data.regions, isrequired));
  //      console.log('aaaa', this.formbaseelements);
  //    }
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }
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
    console.log('this.formbaseelements', this.formbaseelements);
    console.log('city index', _.findIndex(this.formbaseelements, function(o) { return o.key === 'city'; }));
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
          this.formbaseelements.push(this.formcontrolservice.cityfield(res.citylist, true));

        }
      }, (err) => {
        console.log(err);
      });
  }
  getSubcatList(e) {
   console.log('this.formbaseelements.length', this.formbaseelements.length);
    this.showcatloading = true;
    if (this.formbaseelements.length === 2) {
      this.formbaseelements.splice(1, 1);
    } else {
      this.formbaseelements.splice(1, this.formbaseelements.length - 1);
    }
    if (e.target.value !== '') {
      this.homepage.getSubcatListByCatID(e.target.value).subscribe(
        res => {
          if (res.status === 'success') {
            this.formbaseelements.push(
              this.formcontrolservice.subcategoryfield(res.data.subcategory)
            );
            this.showcatloading = false;
          } else {
            this.formbaseelements.splice(2, this.formbaseelements.length);
          }
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.formbaseelements.splice(1, this.formbaseelements.length - 1);
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
    this.formbaseelements.splice(2, this.formbaseelements.length - 1);
    if (e.target.value !== 'none') {
      this.pricenegradio1 = null;
      this.pricenegradio2 = null;
      this.showfrmloading = true;
      this.productimage = this.formbaseelements[1]['options'][
        parseInt(e.target.selectedIndex, 10) - 1
      ].defaultimage;
      this.defaultproductimage = this.formbaseelements[1]['options'][parseInt(e.target.selectedIndex, 10) - 1].defaultimage;
      console.log('this.productimage', this.productimage);
      this.homepage.getformfields(e.target.value).subscribe(
        res => {
          if (res.status === 'success') {
            this.formElements = res.data[0].form;
            console.log('this.formElements', this.formElements);
            for (let item in this.formElements) {
              if (this.formElements[item].fieldname) {
                switch (this.formElements[item].fieldname) {
                  case 'country':
                    this.getCountry(this.formElements[item].isrequired);
                    break;
                  case 'name':
                    this.getProductName(this.formElements[item].isrequired);
                    break;
                  case 'amountforsale':
                    this.getSaleAmount(this.formElements[item].isrequired);
                    break;
                  case 'amountunit':
                    this.getAmountList(this.formElements[item].isrequired);
                    break;
                  case 'priceperunit':
                    this.getUnitPrice(this.formElements[item].isrequired);
                    break;
                  case 'pricenegotiable':
                    this.priceneg();
                    break;
                    case 'yearmfg':
                    this.yearmfg(this.formElements[item].isrequired);
                    break;
                  case 'status':
                  this.statusradio();
                  break;
                  case 'condition':
                  this.getCondition(this.formElements[item].isrequired);
                  break;
                  case 'addinfo':
                  this.getAddinfo(this.formElements[item].isrequired);
                  break;
                  case 'manufacture':
                  this.getManufacture(this.formElements[item].isrequired);
                  break;
                  case 'description':
                    this.getProductDescription(
                      this.formElements[item].isrequired
                    );
                    break;
                  case 'currency':
                    this.getCurrency();
                    break;
                  default:
                    break;
                }
              }
            }
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
    console.log('this.newadForm.value', this.newadForm.value);
    // console.log('this.productimage111', this.productimage);
    /*
 amtunit: ""
currencytype: ""
description: ""
priceneg: "no"
productimage: Array(1)
0: Array(3)
0: "https://res.cloudinary.com/minati/image/upload/v1540908840/uxjihyd0deggbechbhxo.png"
1: "https://res.cloudinary.com/minati/image/upload/v1540908840/ohkq82nhfcdxb20urvda.png"
2: "https://res.cloudinary.com/minati/image/upload/v1540908849/jiwctleiqlxsedpcuzbe.png"
productname: ""
region: ""
saleamount: ""
subcat: "5bd8002b2b9cc82fe4feccaa"
unitprice: ""
userid: "5b6193e4b85809c142b2dceb"
    */
    const userid = localStorage.getItem('id');
    let productimages: any;
    if (typeof this.uploadedimages !== undefined && this.uploadedimages.length > 0) {
      productimages = this.uploadedimages;
      // console.log('productimagescccccccccccccccc', productimages, this.uploadedimages);
    } else {
      productimages = [this.productimage];
      // console.log('productimagesbbbbbbbbbbbbbbb', productimages);
    }
    // console.log('productimagesaaaaaaaaaaaaaaaaa', productimages);
    this.forcevalidation = true;
    this.fvalid.setMessage(this.forcevalidation);
    // append these fields carefully
    /*
        subcatnames: "5bd8002b2b9cc82fe4feccaa"
        region: ""
        saleamount: ""
        amtunit: ""
        unitprice: ""
        productname: ""
        description: ""
        currency: ""
        [productimages]
        priceneg: "no"

        addinfo: "vb"
        category: "5b56cd9ecb50b83ff77b516e"
        city: "Achin"
        condition: "Used"
        country: "Afghanistan"
        manufacture: ""
        status: "pvt"
        yearmfg: 1980
    */
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
            // this.newadForm.reset();
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
