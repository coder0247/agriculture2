import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { RoutingState } from './service/routingState';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Agriculture';
  signinForm: FormGroup;
  username: string;
  password: string;
  modalRef: BsModalRef;
  isCollapsed = true;

  constructor( private formBuilder: FormBuilder, private modalService: BsModalService, private routingState: RoutingState) {
    routingState.loadRouting();
  }
  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.required],
    });
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  // onFormSubmit(form: NgForm) {
  //   // console.log(form);
  //   this.authservice.doLogin(form)
  //     .subscribe(res => {
  //       console.log('login successful', res);
  //         // let id = res['_id'];
  //         // this.router.navigate(['/product-details', id]);
  //       }, (err) => {
  //         console.log(err);
  //       });
  // }
}
