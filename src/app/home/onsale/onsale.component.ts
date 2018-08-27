import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-onsale',
	templateUrl: './onsale.component.html',
	styleUrls: ['./onsale.component.css']
})
export class OnsaleComponent implements OnInit {
	best_sell_products: Array<any> = [];
	limit: any = 3;

	constructor(
		private product: ProductService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.fetchBestSellProductList();
	}

	fetchBestSellProductList() {
		this.product.getBestSellProductList(this.limit).subscribe(res => {
			if (res['status'] === 'success') {
				this.best_sell_products = res['data'].bestselllist;
				console.log("Best sell", this.best_sell_products);
			}
		}, (err) => {
			console.log(err);
		});
	}

}
