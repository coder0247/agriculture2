import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-newarrivals',
	templateUrl: './newarrivals.component.html',
	styleUrls: ['./newarrivals.component.css']
})
export class NewarrivalsComponent implements OnInit {
	new_products: Array<any> = [];
	limit: any = 3;

	constructor(
		private product: ProductService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.fetchNewProductList();
	}

	fetchNewProductList() {
		this.product.getNewProductList(this.limit).subscribe(res => {
			if (res['status'] === 'success') {
				this.new_products = res['data'].newarrival;
				//console.log("new product", this.new_products);
			}
		}, (err) => {
			console.log(err);
		});
	}
}
