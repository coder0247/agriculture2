import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, AbstractControl } from '@angular/forms';
import { HomeService } from '../../service/home.service';
import { FormBase } from '../../form/formbase/form-base';
import { ControlService } from '../../form/service/control.service';
import { AddNewProductService } from '../../service/addnewproduct.service';
import { Textbox } from './../../form/formcontrol/textbox';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  newadForm: FormGroup;
  forcevalidation = false;
  @Input() formbaseelements: FormBase<any>[] = []; 
  payLoad = '';
  constructor(public formelementservice: AddNewProductService, public homepage: HomeService, private qcs: ControlService) { }
  trackByFn(index, item) {
    return index;
  }
  ngOnInit() {
    this.formbaseelements = this.formelementservice.getQuestions();
    console.log(this.formbaseelements);
    this.newadForm = this.qcs.toFormGroup(this.formbaseelements);
    // this.homepage.getformfields().subscribe(res => {
    //   if (res.status === 'success') {
    //     console.log(res.data[0].form[0].fieldname);
    //     this.newadForm.addControl(res.data[0].form[0].fieldname, new FormControl('', Validators.required));
    //     this.newadForm.addControl(res.data[0].form[0].fieldname, new FormControl('', Validators.required));
    //     this.subCats = res.data.subcategory;
    //   }
    // }, (err) => {
    //   console.log(err);
    // });
    // this.createForm();
    setTimeout(() => {
      console.log('this.newadForm', this.newadForm.value);
      this.formbaseelements.splice(1, 1);
      delete this.newadForm.controls['emailAddress'];
      delete this.newadForm.value['emailAddress'];
      console.log('after this.newadForm', this.newadForm.controls);
      this.formbaseelements.push(  new Textbox({
        key: 'mycontroll',
        label: 'jst test lebel',
        value: 'labosto',
        required: true,
        order: 10
      }));
      this.newadForm = this.qcs.toFormGroup(this.formbaseelements);
    }, 5000);

  }
  private createForm() {
// this.testForm.addControl('new', new FormControl('', Validators.required));
    // this.newadForm = new FormGroup({
    //   // tslint:disable-next-line
    //   firstname:new FormControl('', Validators.required),
    //   lastname: new FormControl('', Validators.required)
    //   }); // remove updateon to change the event to onchange
  }
  onSubmit() {

    this.payLoad = JSON.stringify(this.newadForm.value);
  }
  addnewproduct() {
  //   console.log('aa', this.newadForm.controls);
  //   const control = <FormArray>this.newadForm['controls'].emailAddress ;

  // console.log('hhh', control);
    // console.log('aa', this.newadForm.controls);
    // this.forcevalidation = true;
    // console.log(this.newadForm.value);
    this.payLoad = JSON.stringify(this.newadForm.value);
  }
}
