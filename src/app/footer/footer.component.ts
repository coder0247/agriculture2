import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { patternValidator } from '../sharedfn/userfn';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  subsForm: FormGroup;
  success = false;
  alreadysubs = false;
  checking = false;
  validationerror = false;
  constructor(private homepage: HomeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }
  private createForm() {
    this.subsForm = new FormGroup({
       // tslint:disable-next-line
       email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    });
  }
  subscribe() {

    if (this.subsForm.valid) {
      this.validationerror = false;
      this.checking = true;
      this.homepage.checksubscription(this.subsForm.value).subscribe(res => {
        if ( res['status'] === 'success') {
          this.checking = false;
         this.alreadysubs = true;
         this.success = false;
        } else {
          this.homepage.subscribeemail(this.subsForm.value).subscribe(response => {
            if ( response['status'] === 'success') {
             this.success = true;
             this.alreadysubs = false;
             this.checking = false;
            }
          }, (err) => {
            console.log(err);
          });
        }
      }, (err) => {
        console.log(err);
      });
    } else {
      this.validationerror = true;
    }
  }
}
