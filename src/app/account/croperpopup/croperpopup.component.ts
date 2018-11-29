import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-croperpopup',
  templateUrl: './croperpopup.component.html',
  styleUrls: ['./croperpopup.component.css']
})
export class CroperpopupComponent implements OnInit {
  closeBtnName: string;
  modaldata: any[] = [];
  title = 'app';
  imageChangedEvent: any = '';
  croppedImage: any = '';
  public onClose: Subject<boolean>;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.onClose = new Subject();
    this.fileChangeEvent ( this.modaldata[0]);
    // this.list.push('PROFIT!!!');
  }


fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(image: string) {
    this.croppedImage = image;
}
imageLoaded() {
    // show cropper
}
loadImageFailed() {
    // show message
}
confirmupload() {
  
  this.onClose.next(true);
  this.bsModalRef.hide();
}
}
