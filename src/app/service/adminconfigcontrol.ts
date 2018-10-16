import { Injectable } from '@angular/core';
import { Checkbox } from './../admin/configformfield/formcontrol/checkbox';
import { FormBase } from './../admin/configformfield/formbase/form-base';

@Injectable()
export class AdminConfigControlService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getCheckbox (formkey, formlabel) {
    const checkbox: FormBase<any> =  new Checkbox({
      key: formkey,
      label: formlabel,
      required: true,
      value: '',
      status: '',
      order: 1
    });
    return checkbox;
  }
  getEditCheckbox (formkey, formlabel, checkstatus) {
    const checkbox: FormBase<any> =  new Checkbox({
      key: formkey,
      label: formlabel,
      required: true,
      value: '',
      status: checkstatus,
      order: 1
    });
    return checkbox;
  }
}
