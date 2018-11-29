import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';
@Component({
  selector: 'app-useraction',
  templateUrl: './useraction.component.html',
  styleUrls: ['./useraction.component.css']
})
export class UseractionComponent implements OnInit {
  userStatusForm: FormGroup;
  showloading = false;
  userdataloading = false;
  user: any;
  userid: any;
  msg: any;
  successmsg = false;
  constructor(private admin: AdminService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.createForm();
    this.userdataloading = true;
    this.route.params.subscribe(params => {
      this.admin.getUserDetails(params['id'])
      .subscribe(res => {
        if (res['status'] === 'success') {
          this.userdataloading = false;
          this.userid = params['id'];
          this.user = res.data[0];
        } else {
          this.userdataloading = false;
        }
      }, (err) => {
        this.userdataloading = false;
        console.log(err);
      });
    });
  }
  private createForm() {
    this.userStatusForm = new FormGroup({
      // tslint:disable-next-line
      userstatus: new FormControl(1, Validators.required),
    }); // remove updateon to change the event to onchange
  }
  public updateuserstatus() {
    // console.log('this', this.userStatusForm.value);
    if (this.userStatusForm.valid) {
      this.showloading = true;
      this.successmsg = false;
      this.admin.updateUserStatus(this.userStatusForm.value.userstatus,  this.userid ).subscribe(res => {
        if (res['status'] === 'success') {
          this.showloading = false;
          this.successmsg = true;
          this.msg = res.msg;
          if (this.userStatusForm.value.userstatus === '3') {
            this.router.navigate(['/admin/user/list']);
          }
        } else {
          this.showloading = false;
          this.successmsg = false;
        }
      }, (error) => {
        this.showloading = false;
        this.successmsg = false;
        console.log(error);
      });
    }
  }
}
