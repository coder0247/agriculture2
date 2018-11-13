import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-newsletterverify',
  templateUrl: './newsletterverify.component.html',
  styleUrls: ['./newsletterverify.component.css']
})
export class NewsletterverifyComponent implements OnInit {

  constructor(private authservice: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const userid = localStorage.getItem('id');
    if (!userid) {
      this.route.params.subscribe(params => {
        this.authservice.nwverify(params['nwcode']).subscribe(res => {
          if ( res['status'] === 'success') {
            this.router.navigate(['/']);
          } else {
            this.router.navigate(['/notfound']);
          }
        }, (err) => {
          // this.showloading = false;
          console.log(err);
        });
        // this.router.navigate(['product/detail/' + itemid]);
    // this.router.navigate(['/notfound']);
        });
    } else {
      this.router.navigate(['/user/account']);
    }

  }

}
