import { Injectable } from '@angular/core';
import { Dropdown } from './../form/formcontrol/dropdown';
import { FormBase } from '../form/formbase/form-base';
import { Textbox } from '../form/formcontrol/textbox';
import { Radio } from '../form/formcontrol/radio';

@Injectable()
export class FormControlService {
  // TODO: get from a remote source of category subcategory metadata
  // TODO: make asynchronous
  getTextBox() {}
  getEmailBox() {}
  getDropDown() {
    return new Dropdown({
      key: 'brave',
      label: 'Bravery Rating',
      options: [
        { key: 'solid', value: 'Solid' },
        { key: 'great', value: 'Great' },
        { key: 'good', value: 'Good' },
        { key: 'unproven', value: 'Unproven' }
      ],
      order: 3
    });
  }
  categoryfield(categoryoptions) {
    const adnewformcontrols: FormBase<any>[] = [
      new Dropdown({
        key: 'category',
        label: 'Category',
        options: categoryoptions,
        required: true
      }),
      new Dropdown({
        key: 'subcatnames',
        label: 'Sub Category',
        required: true,
        options: []
      }),
      new Dropdown({
        key: 'region',
        label: 'Region',
        required: true,
        options: []
      }),
      new Dropdown({
        key: 'amtunit',
        label: 'Amount Unit',
        required: true,
        options: []
      }),
          new Textbox({
      key: 'productname',
      label: 'Name',
      value: '',
      required: true,
      order: 1
    }),
    new Textbox({
      key: 'saleamount',
      label: 'Amount For Sale',
      value: '',
      required: true,
      order: 1
    }),
    new Textbox({
      key: 'unitprice',
      label: 'Price Per Unit',
      value: '',
      required: true,
      order: 1
    }),
    new Radio({
      key: 'priceneg',
      label: 'Price Negotiable',
      value: 'yes',
      type: 'radio'
    }),
        new Radio({
          key: 'priceneg',
          label: 'Price Negotiable',
          value: 'no',
          type: 'radio'
        })
    ];
    return adnewformcontrols;
  }
  saleamountfield(isrequired) {
    const adnewformcontrols: FormBase<any> =
    new Textbox({
      key: 'saleamount',
      label: 'Amount For Sale',
      value: '',
      required: isrequired,
      order: 1
    });

    return adnewformcontrols;
  }
  unitpricefield(isrequired) {
    const adnewformcontrols: FormBase<any> =
    new Textbox({
      key: 'unitprice',
      label: 'Price Per Unit',
      value: '',
      required: isrequired,
      order: 1
    });

    return adnewformcontrols;
  }
  productnamefield(isrequired) {
    const adnewformcontrols: FormBase<any> =
    new Textbox({
      key: 'productname',
      label: 'Name',
      value: '',
      required: isrequired,
      order: 1
    });

    return adnewformcontrols;
  }
  subcategoryfield(subcategoryoptions) {
    const adnewformcontrols: FormBase<any> =
      new Dropdown({
        key: 'subcatnames',
        label: 'Sub Category',
        options: subcategoryoptions,
        required: true
      });

    return adnewformcontrols;
  }
  amountunitfield(amountunitlist, isrequired) {
    const adnewformcontrols: FormBase<any> =
      new Dropdown({
        key: 'amtunit',
        label: 'Amount Unit',
        required: isrequired,
        options: amountunitlist
      });

    return adnewformcontrols;
  }
  regionfield(regionoptions, isrequired) {
    const adnewformcontrols: FormBase<any> =
      new Dropdown({
        key: 'region',
        label: 'Region',
        required: isrequired,
        options: regionoptions
      });

    return adnewformcontrols;
  }
  priceneg() {
    const adnewformcontrols: FormBase<any>[] = [
      new Radio({
        key: 'priceneg',
        label: 'Price Negotiable',
        value: 'yes',
        type: 'radio'
      }),
      new Radio({
        key: 'priceneg',
        label: 'Price Negotiable',
        value: 'no',
        type: 'radio'
      })
    ];
    return adnewformcontrols;
  }

}
