import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { patternValidator , passwordMatchValidator} from '../../sharedfn/userfn';
import { AuthService } from '../../service/auth.service';
import { HomeService } from '../../service/home.service';
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  regions: any;
  editProfileForm: FormGroup;
  formsubmitted = false;
  showloading = false;
  usermsg: any;
  error = false;
  success = false;
  userdetails: any;
  detailsloading = true;
  countrycode: any;
  constructor(  private route: ActivatedRoute, private router: Router, private authservice: AuthService, private homepage: HomeService) { }

  ngOnInit() {
    this.getCountryCodeList();
    const userid = localStorage.getItem('id');
    // this.homepage.getRegionList()
    // .subscribe(res => {
    //   if (res.status === 'success') {
    //     // console.log(res);
    //     this.regions = res.data.regions;
    //   }
    // }, (err) => {
    //   console.log(err);
    // });
    this.createForm();

    this.authservice.getUserDetails(userid)
    .subscribe(res => {
      if (res.status === 'success') {
        this.detailsloading = false;
        this.editProfileForm.patchValue({
        'email' : res.data[0].email,
        'firstname': res.data[0].firstname,
        'lastname': res.data[0].lastname,
        'phoneno': res.data[0].phonenumber,
        'region': res.data[0].region,
        'countrycode': res.data[0].usercountrycode
        });
      }
    }, (err) => {
      console.log(err);
    });
  }
  getCountryCodeList() {
    this.authservice.intlcodes()
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
    this.editProfileForm = new FormGroup({
       // tslint:disable-next-line
       email: new FormControl('Loading...', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      firstname: new FormControl('Loading...', Validators.required),
      lastname: new FormControl('Loading...', Validators.required),
      // tslint:disable-next-line:max-line-length
      phoneno: new FormControl('', [Validators.required, patternValidator(/^(0?)(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{4,20}$/)]),
      countrycode: new FormControl('', Validators.required)
    });
  }

  public editprofile() {
    this.formsubmitted = true;
    const userid = localStorage.getItem('id');
    const profiledata = {
      'userid': userid,
      'email': this.editProfileForm.value.email,
      'firstname': this.editProfileForm.value.firstname,
      'lastname': this.editProfileForm.value.lastname,
      'phoneno': this.editProfileForm.value.phoneno,
      'region': this.editProfileForm.value.region,
      'countrycode': this.editProfileForm.value.countrycode
    };
    this.showloading = false;
    this.usermsg = '';
    this.success = false;
    this.error = true;
    if (this.editProfileForm.valid) {
      this.showloading = true;
      this.authservice.editProfile(profiledata).subscribe(res => {
        if ( res['status'] === true) {
          this.usermsg = 'Profile updated successfully.';
          this.showloading = false;
          this.success = true;
          this.error = false;
        } else {
          this.showloading = false;
          this.usermsg = 'Please resubit form';
          this.success = false;
          this.error = true;
        }
      }, (err) => {
        this.showloading = false;
        console.log(err);
      });
    }
    this.validateAllFormFields (this.editProfileForm);
    // console.log('editProfileForm', profiledata);
  }
  validateAllFormFields(formGroup: any) {
    Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
            control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
            this.validateAllFormFields(control);
        }
    });
}
}
