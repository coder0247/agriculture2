import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from './../configformfield/formbase/form-base';

@Component({
  selector: 'app-formfields',
  templateUrl: './formfields.component.html',
  styleUrls: ['./formfields.component.css']
})
export class FormfieldsComponent {

  @Input() formbase: FormBase<any>;
  @Input() newadForm: FormGroup;
  @Output() checkboxevent = new EventEmitter();
  @Output() removeformfield = new EventEmitter();
  type: String = 'checkbox';
  changed = (evt) => {
    this.checkboxevent.emit({ 'key': this.formbase.key, 'checkedstatus': evt.target.checked });
  }
  removeField = (formkey , formlabel) => {
    this.removeformfield.emit({'key': formkey, 'label': formlabel});
    // console.log('formkey', formkey);
  }
}
