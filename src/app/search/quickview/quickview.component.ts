import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.css']
})
export class QuickviewComponent implements OnInit {
  closeBtnName: string;
  modaldata: any[] = [];
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    // this.list.push('PROFIT!!!');
  }

}
