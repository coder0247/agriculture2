import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { patternValidator , passwordMatchValidator} from '../../sharedfn/userfn';
import { AuthService } from '../../service/auth.service';
import { HomeService } from '../../service/home.service';
import { NgOption } from '@ng-select/ng-select';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  regions: NgOption[];
  passwordresetForm: FormGroup;
  formsubmitted = false;
  showloading = false;
  usermsg: any;
  error = false;
  success = false;
  constructor(  private route: ActivatedRoute, private router: Router, private authservice: AuthService, private homepage: HomeService) { }

  ngOnInit() {
    this.createForm();
  }
  private createForm() {
    this.passwordresetForm = new FormGroup({
       // tslint:disable-next-line
       email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      currentpassword: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required),
    }, passwordMatchValidator);
  }

  public resetPassword() {
    this.formsubmitted = true;
    this.showloading = false;
          this.usermsg = '';
          this.success = false;
          this.error = false;
    if (this.passwordresetForm.valid) {
      this.showloading = true;
      this.authservice.resetUserPassword(this.passwordresetForm.value).subscribe(res => {
        if ( res['status'] === 'success') {
          this.usermsg = 'Password Updated successfully.';
          this.showloading = false;
          this.success = true;
          this.error = false;
        } else {
          this.showloading = false;
          this.usermsg = res.data;
          this.success = false;
          this.error = true;
        }
      }, (err) => {
        this.showloading = false;
        console.log(err);
      });
    }
    this.validateAllFormFields(this.passwordresetForm);
    // console.log(this.passwordresetForm.value);
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
