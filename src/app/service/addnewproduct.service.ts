import { Injectable } from '@angular/core';
import { Dropdown } from './../form/formcontrol/dropdown';
import { FormBase } from '../form/formbase/form-base';
import { Textbox } from '../form/formcontrol/textbox';

@Injectable()
export class AddNewProductService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    const adnewformcontrols: FormBase<any>[] = [

      new Dropdown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new Textbox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new Textbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return adnewformcontrols.sort((a, b) => a.order - b.order);
  }
}
