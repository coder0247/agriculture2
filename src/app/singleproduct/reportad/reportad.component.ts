import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { patternValidator , passwordMatchValidator} from '../../sharedfn/userfn';
import { ProductService } from '../../service/product.service';
import { NgOption } from '@ng-select/ng-select';
@Component({
  selector: 'app-reportad',
  templateUrl: './reportad.component.html',
  styleUrls: ['./reportad.component.css']
})
export class ReportadComponent implements OnInit {
  closeBtnName: string;
  modaldata: any[] = [];
  reportadForm: FormGroup;
  loading = false;
  replymsg = '';
  sentsuccess = false;
  formsubmitted = false;
  reportreason:  NgOption[];
  countrycode:   NgOption[];
  constructor(public bsModalRef: BsModalRef, private productservice: ProductService) { }
  getReasonList() {
    this.productservice.reportadreason()
    .subscribe(res => {
       if (res.status === 'success') {
         this.reportreason = res.data.reportreason;
       }
      }, (err) => {
        console.log(err);
      });
  }
  getCountryCodeList() {
    this.productservice.intlcodes()
    .subscribe(res => {
       if (res.status === 'success') {
         this.countrycode = res.data.intlcodes;
       }
      }, (err) => {
        console.log(err);
      });
  }
  ngOnInit() {
    this.getReasonList();
    this.getCountryCodeList();
    this.createForm();
  }
  private createForm() {
    this.reportadForm = new FormGroup({
       // tslint:disable-next-line
       email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      fullname: new FormControl('', Validators.required),
      phoneno: new FormControl('', Validators.required),
      reason: new FormControl('', Validators.required),
      countrycode: new FormControl('', Validators.required),
      msg: new FormControl('', Validators.required),
    });
  }
  senddata() {
  this.formsubmitted = true;
  let reportaddata = {
    adid: this.modaldata[0],
    countrycode: this.reportadForm.value.countrycode,
    email: this.reportadForm.value.email,
    fullname: this.reportadForm.value.fullname,
    msg: this.reportadForm.value.msg,
    phoneno: this.reportadForm.value.phoneno,
    reason: this.reportadForm.value.reason
  };
  // console.log(reportaddata);
  if (this.reportadForm.valid) {
    this.loading = true;
    this.productservice.reportad(reportaddata).subscribe(res => {
      if ( res['status'] === 'success') {
        this.sentsuccess = true;
        this.loading = false;
        this.replymsg = res.data['msg'];
        this.formsubmitted = false;
        this.reportadForm.reset();
        setTimeout(()=>this.bsModalRef.hide(), 6000);
      } else {
        this.loading = false;
        this.replymsg = res.data['msg'];
        this.sentsuccess = false;
      }
    }, (err) => {
      console.log(err);
    });
  }
}
}

