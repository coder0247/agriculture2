import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MsgService } from '../../service/msg.service';
@Component({
  selector: 'app-sentmsg',
  templateUrl: './sentmsg.component.html',
  styleUrls: ['./sentmsg.component.css']
})
export class SentmsgComponent implements OnInit {

  msgs: Array<any> = [];
  constructor(private route: ActivatedRoute, private router: Router, private msg: MsgService) { }

  ngOnInit() {
    const msgid = localStorage.getItem('msgid');
    if (msgid) {
      this.msg.getMsg(msgid, 'sent/')
      .subscribe(res => {
        if (res['status'] === 'success') {
          this.msgs = res.data.msgs[0];
        }
      }, (err) => {
        console.log(err);
      });
    } else {
      this.router.navigate(['user/account/sent']);
    }
    }
}
