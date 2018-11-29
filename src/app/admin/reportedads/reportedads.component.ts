import { Component, OnDestroy, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reportedads',
  templateUrl: './reportedads.component.html',
  styleUrls: ['./reportedads.component.css']
})
export class ReportedadsComponent implements OnInit {
  message='';
  reportedads: Array<any> = [];
  loadingmsg = false;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private route: ActivatedRoute, private router: Router, private reportadservice: AdminService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.loadingmsg = true;
    this.reportadservice.getReportedAdList()
    .subscribe(res => {
      if (res['status'] === 'success') {
        this.reportedads = res.data;
        this.dtTrigger.next();
        this.loadingmsg = false;
      }
      // console.log(res);
    }, (err) => {
      this.loadingmsg = false;
      console.log(err);
    });

  }
  viewreportmsg(id) {
    // localStorage.setItem('msgid', id);
    this.router.navigate(['admin/reportedads/view/', id]);
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
}
