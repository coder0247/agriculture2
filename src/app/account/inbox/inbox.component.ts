import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MsgService } from '../../service/msg.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  inbox: Array<any> = [];
  loadingmsg = false;
  noinboxmsg = false;
  constructor(private route: ActivatedRoute, private router: Router, private msg: MsgService) { }

  ngOnInit() {
    const userid = localStorage.getItem('id');
    // if (typeof userid === undefined) {
    //   this.router.navigate(['user/signin']);
    // }
    this.loadingmsg = true;
    this.msg.getInboxMsg(userid)
      .subscribe(res => {
        if (res['status'] === 'success') {
          this.inbox = res.data.inbox;
          this.loadingmsg = false;
          this.noinboxmsg = false;
        } else {
          this.loadingmsg = false;
          this.noinboxmsg = true;
        }
      }, (err) => {
        this.loadingmsg = false;
        this.noinboxmsg = false;
        console.log(err);
      });

  }
  viewmsg(id) {
    localStorage.setItem('msgid', id);
    this.router.navigate(['user/account/view']);
  }

}
