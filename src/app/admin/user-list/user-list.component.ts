import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
	users = [];
	userLoaded = false;

	constructor(private admin: AdminService) { }

	ngOnInit() {
		this.admin.getUserList().subscribe(response => {
			if (response.status) {
				this.users = response.data.users;
			} else {
				this.users = [];
			}
			this.userLoaded = true;
		}, error => {
			console.log(error);
		});
	}

}
