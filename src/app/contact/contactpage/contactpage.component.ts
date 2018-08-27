import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { patternValidator , passwordMatchValidator} from '../../sharedfn/userfn';
import { HomeService } from '../../service/home.service';
@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {
  contactForm: FormGroup;
  loading = false;
  replymsg = '';
  sentsuccess = false;
  formsubmitted = false;
  constructor( private homepage: HomeService ) { }

  ngOnInit() {
    this.createForm();
  }
  private createForm() {
    this.contactForm = new FormGroup({
       // tslint:disable-next-line
       email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      fullname: new FormControl('', Validators.required),
      phoneno: new FormControl('', Validators.required),
      msg: new FormControl('', Validators.required),
    });
  }
contactus() {
  this.formsubmitted = true;
  if (this.contactForm.valid) {
    this.loading = true;
    this.homepage.contactus(this.contactForm.value).subscribe(res => {
      if ( res['status'] === 'success') {
        this.sentsuccess = true;
        this.loading = false;
        this.replymsg = res.data['msg'];
        this.formsubmitted = false;
        this.contactForm.reset();
      } else {
        this.loading = false;
        this.replymsg = res.data['msg'];
        this.sentsuccess = false;
      }
    }, (err) => {
      console.log(err);
    });
  }
}
}
