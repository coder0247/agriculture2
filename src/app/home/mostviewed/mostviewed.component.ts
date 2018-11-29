import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-mostviewed',
	templateUrl: './mostviewed.component.html',
	styleUrls: ['./mostviewed.component.css']
})
export class MostviewedComponent implements OnInit {
	most_viewed_products: Array<any> = [];
	limit: any = 3;
	clientIP: any;

	constructor(
		private product: ProductService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.product.getMostViewedProductList(this.limit).subscribe(res => {
			if (res['status'] === 'success') {
				this.most_viewed_products = res['data'].mostviewed;
				//console.log("Most viewed", this.most_viewed_products);
			}
		}, (err) => {
			console.log(err);
		});
	}

}
