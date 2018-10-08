import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-reportedads',
  templateUrl: './reportedads.component.html',
  styleUrls: ['./reportedads.component.css']
})
export class ReportedadsComponent implements OnInit {

  reportedads: Array<any> = [];
  loadingmsg = false;
  constructor(private route: ActivatedRoute, private router: Router, private reportadservice: AdminService) { }

  ngOnInit() {
    // const userid = localStorage.getItem('id');
    // if (typeof userid === undefined) {
    //   this.router.navigate(['user/signin']);
    // }
    this.loadingmsg = true;
    this.reportadservice.getReportedAdList()
      .subscribe(res => {
        if (res['status'] === 'success') {
          this.reportedads = res.data.reportedadlist;
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
    this.router.navigate(['admin/reportedads/view/',id]);
  }

}
