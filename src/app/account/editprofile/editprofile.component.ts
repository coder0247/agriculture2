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
  regions: NgOption[];
  registerForm: FormGroup;
  formsubmitted = false;
  showloading = false;
  usermsg: any;
  error = false;
  success = false;
  constructor(  private route: ActivatedRoute, private router: Router, private authservice: AuthService, private homepage: HomeService) { }

  ngOnInit() {
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
  private createForm() {
    this.registerForm = new FormGroup({
       // tslint:disable-next-line
       email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      phoneno: new FormControl('', Validators.required),
      region: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      newsletter: new FormControl(''),
      confirm_password: new FormControl('', Validators.required),
    }, passwordMatchValidator);
  }

  public register() {
    this.formsubmitted = true;
    if (this.registerForm.valid) {
      this.showloading = true;
      this.authservice.newUserRegister(this.registerForm.value).subscribe(res => {
        if ( res['status'] === 'success') {
          this.usermsg = 'You have successfully registered.';
          this.showloading = false;
          this.success = true;
          this.error = false;
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
 
    // console.log(this.registerForm.value);
  }
}
