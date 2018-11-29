import { Component, Input } from '@angular/core';
import { FormBase } from '../../form/formbase/form-base';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-formname',
  templateUrl: './formname.component.html',
  styleUrls: ['./formname.component.css']
})
export class FormnameComponent  {
  @Input() formbase: FormBase<any>;
  @Input() newadForm: FormGroup;
  // constructor() {
  //   console.log('aaa', this.formbase);
  // }
  get isValid() {
     return this.newadForm.controls[this.formbase.key].valid; }
}
