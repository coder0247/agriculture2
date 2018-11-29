import { Component, OnInit , TemplateRef} from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { patternValidator , passwordMatchValidator} from '../../sharedfn/userfn';
import { AuthService } from '../../service/auth.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  resetForm: FormGroup;
  formsubmitted = false;
  showloading = false;
  success = false;
  bsModalRef: BsModalRef;
  resetcode: any;
  constructor(
              private authservice: AuthService,
              private modalService: BsModalService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // this.homepage.getPageContent('about').subscribe(
    //   res => {
    //     if (res.status === 'success') {
    //         this.pagecontent = res.data.pagecontent[0].content;
    //     }
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
    this.route.params.subscribe(params => {
     this.resetcode =  params['resetpwid'];
      });
    this.createForm();
  }
  private createForm() {
    this.resetForm = new FormGroup({
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required),
    }, passwordMatchValidator);
  }
  showAlert(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template);
  }
  resetpw(templateresetsuccess) {
    this.formsubmitted = true;
    if (this.resetForm.valid) {
      this.showloading = true;
      const resetdata = {
        'password': this.resetForm.value.password,
        'resetcode': this.resetcode
      };
      this.authservice.restpasswordverify(resetdata).subscribe(res => {
        if (res['status'] === 'success') {
          this.showloading = false;
          this.success = true;
          this.formsubmitted = false;
          this.showAlert(templateresetsuccess);
        } else {
          this.showloading = false;
          this.success = false;
          this.router.navigate(['/notfound']);
        }
      }, (err) => {
        this.showloading = false;
        console.log(err);
      });
    }

    console.log(this.resetForm.value);
  }
  gotologin() {
    this.router.navigate(['/user/signin']);
  }
}
