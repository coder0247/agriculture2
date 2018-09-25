import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MsgService } from '../../service/msg.service';
@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {
  sentmsg: Array<any> = [];
  loadingmsg = false;
  constructor(private route: ActivatedRoute, private router: Router, private msg: MsgService) { }

  ngOnInit() {
    const userid = localStorage.getItem('id');
    // if (typeof userid === undefined) {
    //   this.router.navigate(['user/signin']);
    // }
    this.loadingmsg = true;
    this.msg.getSentMsg(userid)
      .subscribe(res => {
        if (res['status'] === 'success') {
          this.sentmsg = res.data.sentmsg;
          this.loadingmsg = false;
        }
      }, (err) => {
        this.loadingmsg = false;
        console.log(err);
      });

  }
  viewmsg(id) {
    localStorage.setItem('msgid', id);
    this.router.navigate(['user/account/viewsent']);
  }

}
