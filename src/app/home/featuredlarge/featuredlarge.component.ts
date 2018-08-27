import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { forEach } from '@angular/router/src/utils/collection';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { QuickviewComponent } from '../quickview/quickview.component';

@Component({
	selector: 'app-featuredlarge',
	templateUrl: './featuredlarge.component.html',
	styleUrls: ['./featuredlarge.component.css']
})
export class FeaturedlargeComponent implements OnInit {
	bestselllist: Array<any> = [];
	topSellProduct: any;
	otherTopSellProduct: Array<any> = [];
	limit: any = 7;
	bsModalRef: BsModalRef;

	constructor(
		private product: ProductService,
		private route: ActivatedRoute,
		private router: Router,
		private modalService: BsModalService
	) { }

	ngOnInit() {
		this.product.getBestSellProductList(this.limit).subscribe(res => {
			if (res['status'] === 'success') {
				this.bestselllist = res['data'].bestselllist;
				if (this.bestselllist.length > 0) {
					this.topSellProduct = this.bestselllist[0];
				}
				if (this.bestselllist.length > 1) {
					for (var i = 1; i < this.bestselllist.length; i++) {
						var obj = this.bestselllist[i];
						this.otherTopSellProduct.push(obj);
					}
				}
			} else {
			}
		}, (err) => {
			console.log(err);
		});
	}

	quickview(product) {
		var image = product.pimage;
		var pname = product.pname;
		var pprice = product.saleamount;

		const initialState = {
			//modaldata: [image, pname, pprice]
			modaldata: { product: product }
		};
		this.bsModalRef = this.modalService.show(QuickviewComponent, { initialState });
		this.bsModalRef.content.closeBtnName = 'Close';
	}

}
