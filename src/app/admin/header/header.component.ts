import { RoutingState } from '../../service/routingState';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  previousurl: String;
  constructor(
    private admin: AdminService,
    private route: ActivatedRoute,
    private router: Router,
    private routingstate: RoutingState
  ) {

  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({urlAfterRedirects}: NavigationEnd) => {
      });
        this.checksession();
  }

  logout() {
    this.admin.logout().subscribe(
      response => {
        if (response.status) {
          this.router.navigate(['admin/login']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  checksession() {
    this.previousurl = this.routingstate.getPreviousUrl();
    this.admin.adminsession().subscribe(
      res => {
        if (res.status === 'fail') {
          this.router.navigate(['admin/login']);
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
