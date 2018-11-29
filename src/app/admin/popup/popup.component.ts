
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  closeBtnName: string;
  modaldata: any[] = [];
  public onClose: Subject<boolean>;
  constructor(public bsModalRef: BsModalRef) { }


  ngOnInit() {
    this.onClose = new Subject();
  }
confirmdelete() {
  this.onClose.next(true);
  this.bsModalRef.hide();
}
}
