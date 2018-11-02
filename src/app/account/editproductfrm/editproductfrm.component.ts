import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormBase } from '../../form/formbase/form-base';
import { FormGroup } from '@angular/forms';
import { FvalidationService } from './../../service/fvalidation';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editproductfrm',
  templateUrl: './editproductfrm.component.html',
  styleUrls: ['./editproductfrm.component.css']
})
export class EditproductfrmComponent  {
  @Input() formbase: FormBase<any>;
  @Input() newadForm: FormGroup;
  forcevalidation: boolean;
  subscription: Subscription;
  checkboxstatus: any;
  commercialpvtstatus: any;
  constructor( private fvalid: FvalidationService) {
    this.subscription = this.fvalid.message.subscribe(res => {
      // console.log('this.forcevalidation', res);
      this.forcevalidation = res;
    });
    const productdetails = JSON.parse(localStorage.getItem('productinfo'));
    this.checkboxstatus = productdetails.negotiable === true ? 'yes' : 'no';
    // console.log('productdetails.productstatus', productdetails.productstatus);
    this.commercialpvtstatus = productdetails.productstatus;
  }
  @Output() selectoptcat = new EventEmitter();
  @Output() selectoptsubcat = new EventEmitter();
  @Output() selectcities = new EventEmitter();

  getCities = (evt) => {
    this.selectcities.emit(evt);
  }
  // type: String = 'checkbox';
  getSubcatList = (evt) => {
    // console.log('category change', evt);
    this.selectoptcat.emit(evt);
  }
  getSubcatimages = (evt) => {
    // console.log('subcategory change', evt);
    this.selectoptsubcat.emit(evt);
  }
  get isValid() {
    // console.log('this.newadform',this.formbase.key);
     return this.newadForm.controls[this.formbase.key].valid;
  }
}
