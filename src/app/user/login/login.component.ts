import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { patternValidator } from '../../sharedfn/userfn';
import { AuthService } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = false;
  loginForm: FormGroup;
  formsubmitted = false;
  showloading = false;
  constructor(private authservice: AuthService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.loginForm = new FormGroup({
      // tslint:disable-next-line
      email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', Validators.required),
    }); // remove updateon to change the event to onchange
  }

  public login() {
    this.formsubmitted = true;
    if (this.loginForm.valid) {
      this.showloading = true;
      this.authservice.doLogin(this.loginForm.value).subscribe(res => {
        if (res['status'] === 'success') {
          this.showloading = false;
          localStorage.setItem( 'firstname', res.data.firstname);
          localStorage.setItem( 'email' , res.data.email);
          localStorage.setItem( 'lastname' , res.data.lastname);
          localStorage.setItem( 'isadmin' , res.data.is_admin);
          localStorage.setItem( 'id' , res.data.id);
          this.router.navigate(['/']);
        } else {
          this.showloading = false;
          this.error = true;
        }
      }, (error) => {
        this.showloading = false;
        console.log(error);
      });
    }
  }

}
