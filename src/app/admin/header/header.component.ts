import { RoutingState } from '../../service/routingState';
import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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
  @Output() sidebartoggle = new EventEmitter();
  sidebarstatus = false;
  @ViewChild('rwdmenu', { read: ElementRef })
  rwdmenu: ElementRef;
  togglestate = false;
  constructor(
    private admin: AdminService,
    private route: ActivatedRoute,
    private router: Router,
    private routingstate: RoutingState,
    private renderer: Renderer2
  ) {

  }
  sidebar = () => {
    // console.log('subcategory change', evt);
    // console.log('sidebar sidebar');
    this.sidebarstatus = !this.sidebarstatus;
    this.sidebartoggle.emit(this.sidebarstatus);
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
  topmenu(togglestate) {
    this.togglestate = !this.togglestate;
    if (this.togglestate) {
      this.renderer.setStyle(this.rwdmenu.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.rwdmenu.nativeElement, 'display', 'none');
    }
  }
}
