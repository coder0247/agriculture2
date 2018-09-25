import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
	selector: 'app-quickview',
	templateUrl: './quickview.component.html',
	styleUrls: ['./quickview.component.css']
})
export class QuickviewComponent implements OnInit {
	closeBtnName: string;
	modaldata: any;
	constructor(
		public bsModalRef: BsModalRef,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		// this.list.push('PROFIT!!!');
		console.log('modaldata: any[] = [];', this.modaldata);
	}

	showproductdetails(itemid) {
		this.bsModalRef.hide();
		this.router.navigate(['product/detail/' + itemid]);
	}

}
