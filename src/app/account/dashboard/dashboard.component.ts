import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showloading = true;
  dashboardata: any;
  archiveadslength: any = 0;
  constructor(  private route: ActivatedRoute, private router: Router, private product: ProductService) {}

  ngOnInit() {
    const userid = localStorage.getItem('id');
    if (!userid) { this.router.navigate(['user/signin']); }
    this.product.userdashboard(userid)
    .subscribe(res => {
        if (res['status'] === 'success') {
         this.showloading = false;
         this.dashboardata = res.data;
       } else {
        this.showloading = false;
       }
      }, (err) => {
        console.log(err);
      });
      this.product.getArchiveProductByUser(userid)
    .subscribe(res => {
        if (res['status'] === 'success') {
          this.archiveadslength = res.data.product.length;
       }
      }, (err) => {
        console.log(err);
      });
  }

  

}
