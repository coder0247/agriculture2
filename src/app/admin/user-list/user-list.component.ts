import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [];
  userLoaded = false;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private admin: AdminService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.admin.getUserList().subscribe(
      response => {
        if (response.status) {
          this.users = response.data.users;
          this.dtTrigger.next();
        } else {
          this.users = [];
        }
        this.userLoaded = true;
      },
      error => {
        console.log(error);
      }
    );
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  getUserDetails(id) {
    this.router.navigate(['/admin/user/detail/' + id]);
  }
}
