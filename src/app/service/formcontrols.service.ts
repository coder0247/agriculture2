import { Injectable } from '@angular/core';
import { Dropdown } from './../form/formcontrol/dropdown';
import { FormBase } from '../form/formbase/form-base';
import { Textbox } from '../form/formcontrol/textbox';
import { Radio } from '../form/formcontrol/radio';
import { Textareabox } from '../form/formcontrol/textareabox';

@Injectable()
export class FormControlService {
  // TODO: get from a remote source of category subcategory metadata
  // TODO: make asynchronous
  categoryfield1() {
    const adnewformcontrols: FormBase<any>[] = [

      new Dropdown({
        key: 'currency',
        label: 'Currency',
        options: [
          { _id: 'usd', currencyname: 'USD' },
          { _id: 'eur', currencyname: 'EUR' },
          { _id: 'tzs', currencyname: 'TZS' }
        ],
        required: true
      }),
 

      new Dropdown({
        key: 'amtunit',
        label: 'Amount Unit',
        required: true,
        options: []
      }),
      new Dropdown({
        key: 'condition',
        label: 'Condition',
        required: true,
        options: []
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
        key: 'yearmfg',
        label: 'Year of manufacture',
        required: true,
        options: []
      }),
      new Textbox({
        key: 'manufacture',
        label: 'Manufacture',
        value: '',
        required: true,
        order: 1
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
    new Textareabox({
      key: 'description',
      label: 'Description',
      value: '',
      required: true,
      order: 1
    }),
    new Textareabox({
      key: 'addinfo',
      label: 'Addition Information',
      value: '',
      required: true,
      order: 1
    }),
    new Radio({
      key: 'status',
      label: 'Status',
      value: 'comm',
      type: 'radio'
    }),
    new Radio({
      key: 'status',
      label: 'Status',
      value: 'pvt',
      type: 'radio'
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
  categoryfield(categoryoptions) {
    const adnewformcontrols: FormBase<any>[] = [
      new Dropdown({
        key: 'category',
        label: 'Category',
        options: categoryoptions,
        required: true
      }),
      new Dropdown({
        key: 'currency',
        label: 'Currency',
        options: [
          { _id: 'usd', currencyname: 'USD' },
          { _id: 'eur', currencyname: 'EUR' },
          { _id: 'tzs', currencyname: 'TZS' }
        ],
        required: true
      }),
      new Dropdown({
        key: 'subcatnames',
        label: 'Sub Category',
        required: true,
        options: []
      }),

      new Dropdown({
        key: 'amtunit',
        label: 'Amount Unit',
        required: true,
        options: []
      }),
      new Dropdown({
        key: 'condition',
        label: 'Condition',
        required: true,
        options: []
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
        key: 'yearmfg',
        label: 'Year of manufacture',
        required: true,
        options: []
      }),
      new Textbox({
        key: 'manufacture',
        label: 'Manufacture',
        value: '',
        required: true,
        order: 1
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
    new Textareabox({
      key: 'description',
      label: 'Description',
      value: '',
      required: true,
      order: 1
    }),
    new Textareabox({
      key: 'addinfo',
      label: 'Addition Information',
      value: '',
      required: true,
      order: 1
    }),
    new Radio({
      key: 'status',
      label: 'Status',
      value: 'comm',
      type: 'radio'
    }),
    new Radio({
      key: 'status',
      label: 'Status',
      value: 'pvt',
      type: 'radio'
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
  currencyfield() {
    const adnewformcontrols: FormBase<any> = new Dropdown({
      key: 'currency',
      label: 'Currency',
      options: [
      { _id: 'usd', currencyname: 'USD' },
      { _id: 'eur', currencyname: 'EUR' },
      { _id: 'tzs', currencyname: 'TZS' }],
      required: true
    });
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
  cityfield(cityoptions, isrequired) {
    const adnewformcontrols: FormBase<any> =
      new Dropdown({
        key: 'city',
        label: 'City',
        options: cityoptions,
        required: isrequired,
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

}
