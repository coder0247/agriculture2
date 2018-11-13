import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MsgService } from '../../service/msg.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {
  sentmsg: Array<any> = [];
  loadingmsg = false;
  noinboxmsg = false;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private route: ActivatedRoute, private router: Router, private msg: MsgService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    const userid = localStorage.getItem('id');
    // if (typeof userid === undefined) {
    //   this.router.navigate(['user/signin']);
    // }
    this.loadingmsg = true;
    this.msg.getSentMsg(userid)
      .subscribe(res => {
        if (res['status'] === 'success') {
          this.sentmsg = res.data.sentmsg;
          this.dtTrigger.next();
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
    this.router.navigate(['user/account/viewsent']);
  }

}
