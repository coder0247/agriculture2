import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-sitesetting',
  templateUrl: './sitesetting.component.html',
  styleUrls: ['./sitesetting.component.css']
})
export class SitesettingComponent implements OnInit {
  sitesettingsForm: FormGroup;
  loading = false;
  saving = false;
  replymsg = '';
  sentsuccess = false;
  formsubmitted = false;
  settingid: any;
  constructor(private admin: AdminService) { }

  ngOnInit() {
    this.createForm();
    this.loading = true;
     this.admin.getSiteSettings().subscribe(response => {
      if (response.status == 'success') {
        this.settingid = response.data.sitesettings[0]._id
        this.sitesettingsForm.patchValue({
          email: response.data.sitesettings[0].email,
          phoneno: response.data.sitesettings[0].phonenumber  ,
          address: response.data.sitesettings[0].address,
          footertext: response.data.sitesettings[0].footertext,
          twitter: response.data.sitesettings[0].twitter,
          facebook: response.data.sitesettings[0].facebook,
          pinterest: response.data.sitesettings[0].pinterest,
          instagram: response.data.sitesettings[0].instagram
        });

        this.loading = false;
      }
    }, error => {
      console.log(error);
    });
  }
  private createForm() {
    this.sitesettingsForm = new FormGroup({
      // tslint:disable-next-line
      email: new FormControl(''),
      phoneno: new FormControl(''),
      address: new FormControl(''),
      footertext: new FormControl(''),
      twitter: new FormControl(''),
      facebook: new FormControl(''),
      pinterest: new FormControl(''),
      instagram: new FormControl('')
    });
  }
  savesettings() {
    const data = {
      settingid: this.settingid,
      phonenumber: this.sitesettingsForm.value.phoneno,
      address: this.sitesettingsForm.value.address,
      footertext: this.sitesettingsForm.value.footertext,
      twitter: this.sitesettingsForm.value.twitter,
      facebook: this.sitesettingsForm.value.facebook,
      pinterest: this.sitesettingsForm.value.pinterest,
      instagram: this.sitesettingsForm.value.instagram,
      email: this.sitesettingsForm.value.email,
    }
    this.replymsg = '';
    if(typeof this.settingid === 'undefined' || this.settingid === ''){
      console.log('asyn id not');
    } else {
          this.saving = true;
        this.admin.updateSiteSettings(data).subscribe(res => {
          if (res['status'] === 'success') {
            this.sentsuccess = true;
            this.saving = false;
            this.replymsg = res.data['settingsupdated'];
          } else {
            this.saving = false;
            this.replymsg = res.data['settingsupdated'];
            this.sentsuccess = false;
          }
        }, (err) => {
          console.log(err);
        });
    }
  }
  // contactus() {
  //   this.loading = true;
  //   this.admin.updateSiteSettings(this.sitesettingsForm.value).subscribe(res => {
  //     if (res['status'] === 'success') {
  //       this.sentsuccess = true;
  //       this.loading = false;
  //       this.replymsg = res.data['msg'];
  //     } else {
  //       this.loading = false;
  //       this.replymsg = res.data['msg'];
  //       this.sentsuccess = false;
  //     }
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }
}

