import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormBase } from '../../form/formbase/form-base';
import { FormGroup } from '@angular/forms';
import { FvalidationService } from './../../service/fvalidation';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addnewproductfrm',
  templateUrl: './addnewproductfrm.component.html',
  styleUrls: ['./addnewproductfrm.component.css']
})
export class AddnewproductfrmComponent  {
  @Input() formbase: FormBase<any>;
  @Input() newadForm: FormGroup;
  forcevalidation: boolean;
  subscription: Subscription;
  constructor( private fvalid: FvalidationService) {
    this.subscription = this.fvalid.message.subscribe(res => {
      console.log('this.forcevalidation', res);
      this.forcevalidation = res;
    });
  }
  @Output() selectoptcat = new EventEmitter();
  @Output() selectoptsubcat = new EventEmitter();

  // type: String = 'checkbox';
  getSubcatList = (evt) => {
    // console.log('category change', evt);
    this.selectoptcat.emit(evt);
  }
  getSubcatimages = (evt) => {
    console.log('subcategory change', evt);
    this.selectoptsubcat.emit(evt);
  }
  get isValid() {
    console.log('this.newadform',this.formbase.key);
     return this.newadForm.controls[this.formbase.key].valid;
  }
}
