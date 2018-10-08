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
  constructor(private route: ActivatedRoute, private router: Router, private adminservice: AdminService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.adminservice.getReportedAd(params['id'])
      .subscribe(res => {
        // if (res['status'] === 'success') {
        //   this.msgs = res.data.msgs[0];
        // }
      }, (err) => {
        console.log(err);
      }); 
    });
     
    }

}