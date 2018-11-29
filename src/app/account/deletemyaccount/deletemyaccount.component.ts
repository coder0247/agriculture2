import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-deletemyaccount',
  templateUrl: './deletemyaccount.component.html',
  styleUrls: ['./deletemyaccount.component.css']
})
export class DeletemyaccountComponent implements OnInit {

  accountdeleteForm: FormGroup;
  formsubmitted = false;
  showloading = false;
  usermsg: any;
  error = false;
  success = false;
  constructor(private route: ActivatedRoute, private router: Router, private authservice: AuthService) { }

  ngOnInit() {
    this.accountdeleteForm = new FormGroup({
     password: new FormControl('', Validators.required)
   });
  }
  deleteMyAccount() {
    this.formsubmitted = true;
    this.showloading = false;
          this.usermsg = '';
          this.success = false;
          this.error = false;
    if (this.accountdeleteForm.valid) {
      this.showloading = true;
      this.authservice.deleteUserAccount(this.accountdeleteForm.value.password).subscribe(res => {
        if ( res.status === 'success') {
          this.showloading = false;
          this.success = true;
          this.error = false;
          this.router.navigate(['user/signin']);
        } else {
          this.showloading = false;
          this.success = false;
          this.error = true;
          this.usermsg = res.msg;
        }
      }, (err) => {
        this.showloading = false;
        console.log(err);
      });
    }
    console.log(this.accountdeleteForm.value);
  }
}
