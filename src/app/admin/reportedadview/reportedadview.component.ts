import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-reportedadview',
  templateUrl: './reportedadview.component.html',
  styleUrls: ['./reportedadview.component.css']
})
export class ReportedadviewComponent implements OnInit {
  msgs: Array<any> = [];
  productinfo: Array<any> = [];
  constructor(private route: ActivatedRoute, private router: Router, private adminservice: AdminService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.adminservice.getReportedAd(params['id'])
      .subscribe(res => {
        console.log('res', res);
        if (res['status'] === 'success') {

          this.msgs = res.data.reportadmsg[0];
          this.productinfo = res.data.productinfo[0];
          // update view status
          this.adminservice.updateReportedAdViewStatus(res.data.reportadmsg[0]._id)
          .subscribe(res => {
            // console.log(res);
          }, (err) => {
            console.log(err);
          });
          // end update view status
        }
      }, (err) => {
        console.log(err);
      });
    });
     
    }

}