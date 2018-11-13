import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MsgService } from '../../service/msg.service';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  inbox: Array<any> = [];
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
    this.msg.getInboxMsg(userid)
      .subscribe(res => {
        if (res['status'] === 'success') {
          this.inbox = res.data.inbox;
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
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  viewmsg(id) {
    localStorage.setItem('msgid', id);
    this.router.navigate(['user/account/view']);
  }

}
