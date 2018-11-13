import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from '@angular/forms';
import { Utils } from '../utils/utils';

import * as _ from 'lodash';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Uploader } from '../../entities/uploader';
import { UploadQueue } from '../../entities/uploadqueue';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBase } from '../configformfield/formbase/form-base';
import { ControlService } from '../configformfield/service/control.service';
import { AdminConfigControlService } from '../../service/adminconfigcontrol';
import { CroperpopupComponent } from './../croperpopup/croperpopup.component';

@Component({
  selector: 'app-create-sub-category',
  templateUrl: './create-sub-category.component.html',
  styleUrls: ['./create-sub-category.component.css']
})
export class CreateSubCategoryComponent implements OnInit {
  newadForm: FormGroup;
  @Input() formbaseelements: FormBase<any>[] = [];
  payLoad = '';
  subcategoryForm: any;
  categories = [];
  message: string;
  message_type: string;
  defaultimage: any;
  // images upload specific
  imagedata: any;

  showimageerror = false;
  uploadsuccess = false;
  tempimagename: any;
  uploader: Uploader = new Uploader();
  uploadedimages: any;
  bsModalRef: BsModalRef;
  // fieldbuttons: Array<String> = ['Category', 'Sub Category', 'Region', 'Name', 'Amount for sale', 'Amount Unit', 'Price per unit'];
  // copyfieldbuttons: Array<String> = ['Category', 'Sub Category', 'Region', 'Name', 'Amount for sale', 'Amount Unit', 'Price per unit'];
  // formkey: Array<String> = ['category', 'subcategory', 'region', 'name', 'amountforsale', 'amountunit', 'priceperunit'];
  // checkboxfield = [
  //   { key: 'category', checkedstatus: false },
  //   { key: 'subcategory', checkedstatus: false },
  //   { key: 'region', checkedstatus: false },
  //   { key: 'name', checkedstatus: false },
  //   { key: 'amountforsale', checkedstatus: false },
  //   { key: 'amountunit', checkedstatus: false },
  //   { key: 'priceperunit', checkedstatus: false },
  // ];
 // tslint:disable-next-line:max-line-length
 fieldbuttons: Array<String> = ['Name', 'Amount for sale', 'Type of Unit', 'Price per unit', 'Price Negotiable', 'Currency', 'Description', 'status', 'Year of manufacture', 'City', 'Country', 'Condition', 'Addition Information', 'Manufacture'];
 // tslint:disable-next-line:max-line-length
 copyfieldbuttons: Array<String> = [ 'Name', 'Amount for sale', 'Type of Unit', 'Price per unit', 'Price Negotiable', 'Currency', 'Description', 'status', 'Year of manufacture', 'City', 'Country', 'Condition', 'Addition Information', 'Manufacture'];
 // tslint:disable-next-line:max-line-length
 formkey: Array<String> = ['name', 'amountforsale', 'amountunit', 'priceperunit', 'pricenegotiable', 'currency', 'description', 'status', 'yearmfg', 'city', 'country', 'condition', 'addinfo', 'manufacture' ];
 tempformfield: Array<String> = [];
 checkboxfield = [
   { key: 'name', checkedstatus: false },
   { key: 'amountforsale', checkedstatus: false },
   { key: 'amountunit', checkedstatus: false },
   { key: 'priceperunit', checkedstatus: false },
   { key: 'pricenegotiable', checkedstatus: false },
   { key: 'currency', checkedstatus: false },
   { key: 'description', checkedstatus: false },
   { key: 'status', checkedstatus: false },
   { key: 'yearmfg', checkedstatus: false },
   { key: 'city', checkedstatus: false },
   { key: 'country', checkedstatus: false },
   { key: 'condition', checkedstatus: false },
   { key: 'addinfo', checkedstatus: false },
   { key: 'manufacture', checkedstatus: false },
 ];
  checkeditems: Array<String> = [];
  checked = 'checked';
  isChecked: boolean;
  constructor(
    private admin: AdminService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private http: HttpClient,
    private cs: ControlService,
    private accs: AdminConfigControlService
  ) {
    this.subcategoryForm = this.formBuilder.group({
      subcatname: ['', Validators.required],
      catid: ['', Validators.required],
      status: ['1', Validators.required]
    });
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
  ngOnInit() {
    this.createForm();
    this.admin.getActiveCategories().subscribe(
      response => {
        // console.log(response);
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
  }
  createForm() {
    this.formbaseelements.push(this.accs.getCheckbox(this.formkey[0], this.copyfieldbuttons[0]));
    this.newadForm = this.cs.toFormGroup(this.formbaseelements);
    // this.fieldbuttons.splice(0, 1);
    this.newadForm.controls[this.formbaseelements[0].key].setValue('required', { onlySelf: true });
    // this is to fix the formgroup null error
    this.formbaseelements.splice(0, 1);
    delete this.newadForm.controls['category'];
    delete this.newadForm.value['category'];
  }
  addfield(index, value) {
    const actualindex = _.findIndex(this.copyfieldbuttons, function (o) { return o === value; });
    this.formbaseelements.push(this.accs.getCheckbox(this.formkey[actualindex], this.copyfieldbuttons[actualindex]));

    this.newadForm = this.cs.toFormGroup(this.formbaseelements);
    this.fieldbuttons.splice(index, 1);
  }

  persistchkstatus(checkstatus) {
    const afterpatchingstatus = _.forEach(this.formbaseelements, function (value, index) {
      if (value.key === checkstatus.key) {
        value.status = checkstatus.checkedstatus ? 'checked' : '';
        value.value = checkstatus.checkedstatus ? 'required' : '';

      }
    });
    this.formbaseelements = [];
    this.formbaseelements = afterpatchingstatus;
    const chkboxtoupdate = _.findIndex(this.checkboxfield, function (o) { return o.key === checkstatus.key; });
    Object.assign(this.checkboxfield[chkboxtoupdate], checkstatus);
  }
  trackByFn(index, item) {
    return item;
  }
  removeField(formkeyname) {
    // reset checkboxfield status
    const chkboxtoupdate = _.findIndex(this.checkboxfield, function (o) { return o.key === formkeyname.key; });
    this.checkboxfield[chkboxtoupdate].checkedstatus = false;

    // console.log('this.formbaseelements before remove', this.formbaseelements);

    // remove from form base elements
    const formBaseElementAfterRemove = _.remove(this.formbaseelements, function(item) {
      // console.log('item', item.key, 'formkeyname' + formkeyname);
      return item.key !== formkeyname.key;
    });
    this.formbaseelements = [];
    this.formbaseelements = formBaseElementAfterRemove;

    // add fields back to options
    this.fieldbuttons.push(formkeyname.label);
    // console.log('formbaseelements after remove', this.formbaseelements);
    // reset status
  }
  addSubcategory() {
    let selectedFormField: Array<any> = [];
    selectedFormField = this.formbaseelements.map(item => {
      const itemrow = { fieldname: '' , isrequired: true};
      itemrow.fieldname = item.key;
      itemrow.isrequired = item.status === 'checked' ? true : false;
      return itemrow;
    });
    const newformdata = {
      subcatid: '',
      formname: 'addnewproduct',
      form: selectedFormField
    };
    if (typeof this.uploadedimages !== undefined && this.uploadedimages) {
      this.showimageerror = false;
      if (this.subcategoryForm.dirty && this.subcategoryForm.valid) {
        this.message = '';
        this.message_type = '';
        const data = {
          catid: this.subcategoryForm.value.catid,
          subcatname: this.subcategoryForm.value.subcatname,
          status: this.subcategoryForm.value.status,
          defaultimage: typeof this.uploadedimages !== undefined && this.uploadedimages ? this.uploadedimages : ''
        };
        this.admin.addSubcategory(data, newformdata).subscribe(
          response => {
            console.log('subcatresponse', response);
            this.message = response.message;
            this.message_type = response.status ? 'success' : 'error';

            if (response.status) {
              this.showimageerror = false;
              this.uploadsuccess = true;
              window.setTimeout(() => {
                this.router.navigate(['admin/category/list']);
              }, 2000);
            }
          },
          error => {
            console.log(error);
          }
        );
      } else {
        Utils.validateAllFormFields(this.subcategoryForm);
      }
    } else {
      this.showimageerror = true;
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
        if (Math.floor(parseFloat(event.target.files[0].size) / 1024) > 300) {
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
