import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { patternValidator , passwordMatchValidator} from '../../sharedfn/userfn';
import { HomeService } from '../../service/home.service';
@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {
  contactForm: FormGroup;
  loading = false;
  replymsg = '';
  sentsuccess = false;
  formsubmitted = false;
  countrycode: any;
  constructor( private homepage: HomeService ) { }

  ngOnInit() {
    this.createForm();
    this.getCountryCodeList();
  }
  getCountryCodeList() {
    this.homepage.intlcodes()
    .subscribe(res => {
       if (res.status === 'success') {
         this.countrycode = res.data.intlcodes;
        // console.log('intlcode', res.data.intlcodes);
       }
      }, (err) => {
        console.log(err);
      });
  }
  private createForm() {
    this.contactForm = new FormGroup({
       // tslint:disable-next-line
       email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      fullname: new FormControl('', Validators.required),
      // tslint:disable-next-line:max-line-length
      phoneno: new FormControl('', [Validators.required, patternValidator(/^(0?)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/)]),
      countrycode: new FormControl('', Validators.required),
      msg: new FormControl('', Validators.required),
    });
  }
contactus() {
  this.formsubmitted = true;
  if (this.contactForm.valid) {
    this.loading = true;
    this.homepage.contactus(this.contactForm.value).subscribe(res => {
      if ( res['status'] === 'success') {
        this.sentsuccess = true;
        this.loading = false;
        this.replymsg = res.data['msg'];
        this.formsubmitted = false;
        this.contactForm.reset();
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
