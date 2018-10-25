import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { patternValidator , passwordMatchValidator} from '../../sharedfn/userfn';
import { AuthService } from '../../service/auth.service';
import { HomeService } from '../../service/home.service';
import { NgOption } from '@ng-select/ng-select';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regions: any;
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
    this.homepage.getRegionList()
    .subscribe(res => {
      if (res.status === 'success') {
        // console.log(res);
        this.regions = res.data.regions;
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
      phoneno: new FormControl('', [Validators.required, patternValidator(/^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/)]),
      region: new FormControl('none', Validators.required),
      password: new FormControl('', Validators.required),
      countrycode: new FormControl('none', Validators.required),
      newsletter: new FormControl(''),
      confirm_password: new FormControl('', Validators.required),
    }, passwordMatchValidator);
  }

  public register() {
    /*
    confirm_password: "111"
    countrycode: "5bb49e6de7179a1193d9bf85"
    email: "dsfsd@uyaho.com"
    firstname: "sdfs"
    lastname: "sdf"
    newsletter: ""
    password: "111"
    phoneno: "123-456-7890"
    region: "5b45cf40364504e1dff51c5e"
    */ 
    this.formsubmitted = true;
    if (this.registerForm.valid) {
      this.showloading = true;
      this.authservice.newUserRegister(this.registerForm.value).subscribe(res => {
        if ( res['status'] === 'success') {
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

//    console.log(this.registerForm.value);
  }

}
