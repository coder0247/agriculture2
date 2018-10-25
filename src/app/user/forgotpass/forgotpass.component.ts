import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { patternValidator } from '../../sharedfn/userfn';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {
  closeBtnName: string;
  forgotPassForm: FormGroup;
  replymsg = '';
  sentsuccess = false;
  formsubmitted = false;
  loading = false;
  constructor(public bsModalRef: BsModalRef, private authservice: AuthService) {}

  ngOnInit() {
    this.forgotPassForm = new FormGroup({
      // tslint:disable-next-line
      email: new FormControl('', [Validators.required,patternValidator(/^(([^<>()\[\]\\.,;:\s@']+(\.[^<>()\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ])
    });
  }

  showproductdetails(itemid) {
    this.bsModalRef.hide();
  }
contactus() {
    this.formsubmitted = true;
    console.log(this.forgotPassForm.value);
    if (this.forgotPassForm.valid) {
      this.loading = true;
      this.authservice.forgotPassword(this.forgotPassForm.value).subscribe(
        res => {
          if (res['status'] === 'success') {
            this.sentsuccess = true;
            this.loading = false;
            this.replymsg = res.data;
            this.formsubmitted = false;
          } else {
            this.loading = false;
            this.replymsg = res.data;
            this.sentsuccess = false;
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
