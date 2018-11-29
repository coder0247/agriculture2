import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBase } from '../formbase/form-base';

@Injectable()
export class ControlService {
  constructor() {}

  toFormGroup(formcontrols: FormBase<any>[]) {
    const group: any = {};

    formcontrols.forEach(formcontrol => {
      group[formcontrol.key] = formcontrol.required
        ? new FormControl(formcontrol.value || '', Validators.required)
        : new FormControl(formcontrol.value || '');
    });
    return new FormGroup(group);
  }
}
