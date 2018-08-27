import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from '@angular/forms';
import { Utils } from '../utils/utils';
import { filter } from 'rxjs/operators';
import { RoutingState } from '../../service/routingState';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  message: string;
  message_type: string;
  previousurl = '';
  constructor(
    private admin: AdminService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private routingstate: RoutingState
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    // this.router.events
    // .pipe(filter(event => event instanceof NavigationEnd))
    // .subscribe(() => {
    //   this.previousurl = this.routingstate.getPreviousUrl();
    //   console.log('le', this.routingstate.getHistory());
    // });
    // this.router.events
    // .pipe(filter(event => event instanceof NavigationEnd))
    // .subscribe(() => {
    //   this.routingstate.loadRouting();
    // });
    this.checksession();

  }

  login() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.message = '';
      this.message_type = '';
      this.admin.login(this.loginForm.value).subscribe(
        response => {
          if (response.status) {
            this.message = response.message;
            this.message_type = 'success';
            this.router.navigate(['admin']);
          } else {
            this.message = response.message;
            this.message_type = 'error';
          }
        },
        error => {
          console.log(error);
        }
      );
    } else {
      Utils.validateAllFormFields(this.loginForm);
    }
  }
  checksession() {
    // console.log('prev url', this.routingstate.getPreviousUrl());
    this.admin.adminsession().subscribe(
      res => {
        if (res.status === 'success') {
          if (this.routingstate.getPreviousUrl() !== '/index') {
            this.router.navigate([this.routingstate.getPreviousUrl()]);
          } else {
            this.router.navigate(['admin/']);
          }
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  isFieldValid(formGroup: FormGroup, field: string) {
    return Utils.isFieldValid(formGroup, field);
  }

  displayFieldCss(formGroup: FormGroup, field: string) {
    return Utils.displayFieldCss(formGroup, field);
  }

}
