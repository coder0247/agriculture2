import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  Input
} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnChanges, OnInit {
  @Input()
  message: any;
  @Input()
  type: any;
  message_style_class: string;
  message_type_text: string;
  show_message = true;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    // console.log(this.message);
    // const msg: SimpleChange = changes.message;
    // console.log('prev value: ', msg.previousValue);
    // console.log('got name: ', msg.currentValue);
    // this.message_text = msg.currentValue;
  }

  ngOnInit() {
    this.show_message = true;

    switch (this.type) {
      case 'success':
        this.message_style_class = 'success';
        this.message_type_text = 'Success';
        break;
      case 'error':
        this.message_style_class = 'danger';
        this.message_type_text = 'Error';
        break;
      case 'warning':
        this.message_style_class = 'warning';
        this.message_type_text = 'Warning';
        break;
      case 'info':
        this.message_style_class = 'info';
        this.message_type_text = 'Info';
        break;
      default:
        this.message_style_class = 'success';
        this.message_type_text = 'Success';
    }

    window.setTimeout(() => {
      this.show_message = false;
    }, 10000);
  }

  hideMessage() {
    this.show_message = false;
  }
}
