import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MsgService } from '../../service/msg.service';
import { UtilsService } from '../../service/utils.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	imageurl: any;
	showloading = false;
	singleproduct: any;
	sendMsgForm: FormGroup;
	showsellerDetails = false;
	sellerdetails = {
		name: '',
		email: '',
		userid: '',
		productid: ''
	};
	showmsgsent = false;
	clientIP: any;
	best_sell_products: Array<any> = [];
	limit: any = 6;
	msgerror = false;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private product: ProductService,
		private utils: UtilsService,
		private msgservice: MsgService
	) { }

	ngOnInit() {

		this.showsellerDetails = false;
		const userid = localStorage.getItem('id');

		this.fetchBestSellProductList();

		this.utils.getClientIPAddress().subscribe(res => {
			this.clientIP = res['ip'];
			this.route.params.subscribe(params => {
				//console.log('params[id]', params['id']);
				this.product.saveProductViewedStatus(params['id'], this.clientIP).subscribe(res => {
					console.log(res);
				}, (err) => {
					console.log(err);
				});
			});
		}, (err) => {
			console.log(err);
		});

		if (userid) {
			this.route.params.subscribe(params => {
				this.product.getSellerByProductID(params['id'])
					.subscribe(res => {
						if (res['status'] === 'success') {
							this.showloading = false;
							const seller = res.data.sellerinfo[0];
							this.showsellerDetails = true;
							this.sellerdetails.name = seller.firstname + ' ' + seller.lastname;
							this.sellerdetails.email = seller.email;
							this.sellerdetails.userid = seller._id;
						} else {
							// this.router.navigate(['/cropnotfound']);
							if (this.singleproduct) {
								this.singleproduct.length = 0;
							}
							this.showloading = false;
						}
					}, (err) => {
						console.log(err);
					});
			});
		}
		this.createForm();
		this.route.params.subscribe(params => {
			this.showloading = true;
			// console.log('params[id]', params['id']);
			this.showmsgsent = false;
			this.msgerror = false;
			this.product.getProductDetail(params['id'])
				.subscribe(res => {
					if (res['status'] === 'success') {
						this.showloading = false;
						this.singleproduct = res['data'].singleproduct[0];
						this.sellerdetails.productid = this.singleproduct._id;
					} else {
						// this.router.navigate(['/cropnotfound']);
						if (!!res['pagenotfound']) {
							this.router.navigate(['/notfound']);
						}
						if (this.singleproduct) {
							this.singleproduct.length = 0;
						}
						this.showloading = false;
					}
				}, (err) => {
					console.log(err);
				});
		});
	}
	public sendMsg() {
		const msgdata = {
			from: localStorage.getItem('id'),
			comment: this.sendMsgForm.value.comment,
			sellerid: this.sellerdetails.userid,
			productid: this.sellerdetails.productid
		};
		if ( this.sendMsgForm.valid) {
			this.msgservice.postMsg(msgdata).subscribe(res => {
				if (res['status'] === 'success') {
					this.sendMsgForm.reset();
					this.showmsgsent = true;
					this.msgerror = false;
				}
			}, (error) => {
				console.log(error);
			});
		} else {
			this.msgerror = true;
		}
		
	}

	private createForm() {
		this.sendMsgForm = new FormGroup({
			// tslint:disable-next-line
			comment: new FormControl('', Validators.required)
		}); // remove updateon to change the event to onchange
	}

	fetchBestSellProductList() {
		this.product.getBestSellProductList(this.limit).subscribe(res => {
			if (res['status'] === 'success') {
				this.best_sell_products = res['data'].bestselllist;
			}
		}, (err) => {
			console.log(err);
		});
	}
	showproductdetails(itemid) {
		
		this.router.navigate(['product/detail/' + itemid]);
	}
	gotosigin () {
		const userid = localStorage.getItem('id');
		if (!userid) {
			this.router.navigate(['/user/signin']);
		}
	}

}
