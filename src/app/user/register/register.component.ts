import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { patternValidator, passwordMatchValidator } from '../../sharedfn/userfn';
import { AuthService } from '../../service/auth.service';
import { HomeService } from '../../service/home.service';
@Component({
  selector: 'app-register', 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countries: any;
  cities: any;
  registerForm: FormGroup;
  formsubmitted = false;
  showloading = false;
  usermsg: any;
  error = false;
  success = false;
  countrycode: any;
  constructor(private authservice: AuthService, private homepage: HomeService) {

  }
  ngOnInit() {
    this.getCountryCodeList();
    this.homepage.getCountryList()
      .subscribe(res => {
        if (res.status === 'success') {
          // console.log(res);
          this.countries = res.countrylist;
        }
      }, (err) => {
        console.log(err);
      });
    this.createForm();
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
    this.registerForm = new FormGroup({
      // tslint:disable-next-line
      email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      // tslint:disable-next-line:max-line-length
      phoneno: new FormControl('', [Validators.required, patternValidator(/^(0|00)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/)]),
      country: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      password: new FormControl('', Validators.required),
      countrycode: new FormControl('none', Validators.required),
      newsletter: new FormControl(''),
      confirm_password: new FormControl('', Validators.required),
    }, passwordMatchValidator);
  }
  getCities(e) {
    this.homepage.getCityList(e.target.value)
      .subscribe(res => {
        if (res.status === 'success') {
          // console.log(res);
          this.cities = res.citylist;
        }
      }, (err) => {
        console.log(err);
      });
  }
  public register() {
    this.formsubmitted = true;
    if (this.registerForm.valid) {
      this.showloading = true;
      this.authservice.newUserRegister(this.registerForm.value).subscribe(res => {
        if (res['status'] === 'success') {
          this.usermsg = 'You have successfully registered.';
          this.showloading = false;
          this.success = true;
          this.error = false;
          this.formsubmitted = false;
          this.registerForm.reset();
        } else {
          this.showloading = false;
          this.usermsg = res.dup;
          this.success = false;
          this.error = true;
        }
      }, (err) => {
        this.showloading = false;
        console.log(err);
      });
    }

    //   console.log(this.registerForm.value);
  }

}
