import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RoutingState } from '../../service/routingState';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  previousurl;
  togglesidebar = false;
  constructor(private router: Router, private routingstate: RoutingState) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.routingstate.loadRouting();
      });
  }
  sidebarstatus(event) {
    this.togglesidebar = event;
  }
}
