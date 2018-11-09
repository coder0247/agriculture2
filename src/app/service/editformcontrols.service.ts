import { Injectable } from '@angular/core';
import { Dropdown } from './../form/formcontrol/dropdown';
import { FormBase } from '../form/formbase/form-base';
import { Textbox } from '../form/formcontrol/textbox';
import { Radio } from '../form/formcontrol/radio';
import { Textareabox } from '../form/formcontrol/textareabox';

@Injectable()
export class EditFormControlService {
  // TODO: get from a remote source of category subcategory metadata
  // TODO: make asynchronous

  categoryfield(categoryoptions, subcategoryoptions) {
    const adnewformcontrols: FormBase<any>[] = [
      new Textbox({
        key: 'category',
        label: 'Category',
        value: categoryoptions,
        required: true,
        order: 1
      }),
      new Dropdown({
        key: 'currency',
        label: 'Currency',
        options: [
          {currencyname: 'USD' },
          { currencyname: 'EUR' },
          { currencyname: 'TZS' }
        ],
        required: true
      }),
      new Textbox({
        key: 'subcatnames',
        label: 'Sub Category',
        value: subcategoryoptions,
        required: true,
        order: 1
      }),
      new Dropdown({
        key: 'country',
        label: 'Country',
        required: true,
        options: []
      }),
      new Dropdown({
        key: 'city',
        label: 'City',
        required: true,
        options: []
      }),
  
      new Dropdown({
        key: 'amountunit',
        label: 'Type of Unit',
        required: true,
        options: []
      }),
          new Textbox({
      key: 'name',
      label: 'Name',
      value: '',
      required: true,
      order: 1
    }),
    new Textbox({
      key: 'amountforsale',
      label: 'Amount For Sale',
      value: '',
      required: true,
      order: 1
    }),
    new Textbox({
      key: 'priceperunit',
      label: 'Price Per Unit',
      value: '',
      required: true,
      order: 1
    }),
    new Textareabox({
      key: 'description',
      label: 'Description',
      value: '',
      required: true,
      order: 1
    }),
    new Radio({
      key: 'pricenegotiable',
      label: 'Price Negotiable',
      value: 'yes',
      type: 'radio'
    }),
        new Radio({
          key: 'pricenegotiable',
          label: 'Price Negotiable',
          value: 'no',
          type: 'radio'
        }),
        new Dropdown({
          key: 'condition',
          label: 'Condition',
          required: true,
          options: []
        }),
        new Radio({
          key: 'status',
          label: 'Status',
          value: 'commercial',
          type: 'radio'
        }),
        new Radio({
          key: 'status',
          label: 'Status',
          value: 'private',
          type: 'radio'
        }),
        new Textareabox({
          key: 'addinfo',
          label: 'Addition Information',
          value: '',
          required: true,
          order: 1
        }),
        new Textbox({
          key: 'manufacture',
          label: 'Manufacture',
          value: '',
          required: true,
          order: 1
        }),
        new Dropdown({
          key: 'yearmfg',
          label: 'Year of manufacture',
          required: true,
          options: []
        })
    ];
    return adnewformcontrols;
  }
  currencyfield() {
    const adnewformcontrols: FormBase<any> = new Dropdown({
      key: 'currency',
      label: 'Currency',
      options: [
        { currencyname: 'USD' },
      {  currencyname: 'EUR' },
      { currencyname: 'TZS' }],
      required: true
    });
    return adnewformcontrols;
  }
  saleamountfield(isrequired) {
    const adnewformcontrols: FormBase<any> =
    new Textbox({
      key: 'amountforsale',
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
      key: 'priceperunit',
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
      key: 'name',
      label: 'Name',
      value: '',
      required: isrequired,
      order: 1
    });

    return adnewformcontrols;
  }
  productdescfield(isrequired) {
    const adnewformcontrols: FormBase<any> =
    new Textareabox({
      key: 'description',
      label: 'Description',
      value: '',
      required: isrequired,
      order: 1
    });

    return adnewformcontrols;
  }
  subcategoryfield(subcategoryoptions) {
    const adnewformcontrols: FormBase<any> =
    new Textbox({
      key: 'subcatnames',
      label: 'Sub Category',
      value: subcategoryoptions,
      required: true,
      order: 1
    });

    return adnewformcontrols;
  }
  amountunitfield(amountunitlist, isrequired) {
    const adnewformcontrols: FormBase<any> =
      new Dropdown({
        key: 'amountunit',
        label: 'Type of Unit',
        required: isrequired,
        options: amountunitlist
      });

    return adnewformcontrols;
  }

  priceneg() {
    const adnewformcontrols: FormBase<any>[] = [
      new Radio({
        key: 'pricenegotiable',
        label: 'Price Negotiable',
        value: 'yes',
        type: 'radio'
      }),
      new Radio({
        key: 'pricenegotiable',
        label: 'Price Negotiable',
        value: 'no',
        type: 'radio'
      })
    ];
    return adnewformcontrols;
  }
  conditionfield(isrequired) {
    const adnewformcontrols: FormBase<any> =
      new Dropdown({
        key: 'condition',
        label: 'Condition',
        options: ['Used', 'New', 'DemonstratorAdvertiser'],
        required: isrequired,
      });
    return adnewformcontrols;
  }
  countryfield(countryoptions, isrequired) {
    const adnewformcontrols: FormBase<any> =
      new Dropdown({
        key: 'country',
        label: 'Country',
        options: countryoptions,
        required: isrequired,
      });

    return adnewformcontrols;
  }
  cityfield(cityoptions) {
    const adnewformcontrols: FormBase<any> =
      new Dropdown({
        key: 'city',
        label: 'City',
        options: cityoptions,
        required: true,
      });

    return adnewformcontrols;
  }
statusfield() {
    const adnewformcontrols: FormBase<any>[] = [
      new Radio({
        key: 'status',
        label: 'Status ',
        value: 'commercial',
        type: 'radio'
      }),
      new Radio({
        key: 'status',
        label: 'Status',
        value: 'private',
        type: 'radio'
      })
    ];
    return adnewformcontrols;
  }
  addinfofield(isrequired) {
    const adnewformcontrols: FormBase<any> =
    new Textareabox({
      key: 'addinfo',
      label: 'Addition Information',
      value: '',
      required: isrequired,
      order: 1
    });

    return adnewformcontrols;
  }
  mfgfield(isrequired) {
    const adnewformcontrols: FormBase<any> =
    new Textbox({
      key: 'manufacture',
      label: 'Manufacture',
      value: '',
      required: isrequired,
      order: 1
    });

    return adnewformcontrols;
  }
  yearmfgfield(isrequired) {
    const d = new Date();
    const curyear = d.getFullYear();
    let yearstart = 1980;
    let year: Array<any> = [];
    while (yearstart < curyear + 1) {
      year.push(yearstart);
      yearstart++;
    }
    const adnewformcontrols: FormBase<any> =
      new Dropdown({
        key: 'yearmfg',
        label: 'Year of manufacture',
        options: year,
        required: isrequired,
      });
    return adnewformcontrols;
  }
}
