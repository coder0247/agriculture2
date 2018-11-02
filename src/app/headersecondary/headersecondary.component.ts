import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit, Inject } from '@angular/core';
import { HomeService } from '../service/home.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { NgOption } from '@ng-select/ng-select';
import { AuthService } from '../service/auth.service';

@Component({
	selector: 'app-headersecondary',
	templateUrl: './headersecondary.component.html',
	styleUrls: ['./headersecondary.component.css']
})
export class HeadersecondaryComponent implements OnInit {
	crops: NgOption[];
	regions: NgOption[];
	mainCats: Array<any> = [];
	morecats: Array<any> = [];
	searchForm: FormGroup;
	loggedinMenu = false;
	@ViewChild('parentcontent', { read: ElementRef }) parentcontent: ElementRef;
	@ViewChild('hiddencontent', { read: ElementRef }) hiddencontent: ElementRef;

	constructor(
		private homepage: HomeService,
		private renderer: Renderer2,
		@Inject(FormBuilder) fb: FormBuilder,
		private product: ProductService,
		private route: ActivatedRoute,
		private router: Router,
		private auth: AuthService
	) {
		this.searchForm = fb.group({
			'crop': ['5b45cd0412e2fc5b9879b73a'],
			'region': ['5b45cf40364504e1dff51c5c']
		});
	}

	ngOnInit() {
		const userid = localStorage.getItem('id');
		if (userid) {
			this.loggedinMenu = true;
		}
		this.homepage.getCatList()
			.subscribe(res => {
				if (res.status === 'success') {
					this.mainCats = res.data.category;
				}
			}, (err) => {
				console.log(err);
			});
		// this.homepage.getCropList()
		// 	.subscribe(res => {
		// 		if (res.status === 'success') {
		// 			this.crops = res.data.crops;
		// 			const tempcrops = res.data.crops;
		// 			this.crops = res.data.crops;
		// 			//  this.mainCats = _.slice(tempcrops, 0, 8);
		// 			//  this.morecats = _.chunk(_.slice(tempcrops, 8, tempcrops.length), 6);
		// 			//  console.log('this.mainCats', this.mainCats);
		// 			//  console.log('this.morecats', this.morecats);
		// 			//  console.log('this.morecats', this.morecats);
		// 		}
		// 	}, (err) => {
		// 		console.log(err);
		// 	});
		// regions
		// this.homepage.getRegionList()
		// 	.subscribe(res => {
		// 		if (res.status === 'success') {
		// 			// console.log(res);
		// 			this.regions = res.data.regions;
		// 		}
		// 	}, (err) => {
		// 		console.log(err);
		// 	});

		// this.renderer.listen('document', 'click', () => {
		//   if (this.parentcontent.nativeElement.classList.contains('active')) {
		//   this.renderer.removeClass(this.parentcontent.nativeElement, 'active');
		//   this.renderer.addClass(this.parentcontent.nativeElement, 'nonactive');
		//   this.renderer.removeClass(this.hiddencontent.nativeElement, 'show-up');
		//   }
		// });
	}

	toggleClass() {
		if (this.parentcontent.nativeElement.classList.contains('nonactive')) {
			this.renderer.removeClass(this.parentcontent.nativeElement, 'nonactive');
			this.renderer.addClass(this.parentcontent.nativeElement, 'active');
			this.renderer.addClass(this.hiddencontent.nativeElement, 'show-up');
		} else {
			this.renderer.removeClass(this.parentcontent.nativeElement, 'active');
			this.renderer.addClass(this.parentcontent.nativeElement, 'nonactive');
			this.renderer.removeClass(this.hiddencontent.nativeElement, 'show-up');
		}
	}
	submitForm() {
		const credentials = this.searchForm.value;
		this.router.navigate(['/search', 'crop', credentials.crop, 'region', credentials.region]);
		this.route.params.subscribe(params => {
			// console.log('params[id]', params['id']);
			// // this.router.navigate(['/cropnotfound']);
			// this.imageurl =  'assets/images/crop/small/' + params['id'] + '.jpeg';
			// console.log(params); // log the entire params object
			// console.log(params['id']); // log the value of id
			//  this.product.getSearchResult(params['id'])
			//   .subscribe(res => {
			//      if (res.status === 'success') {
			//        this.showloading = false;
			//        this.products = res.data.product;
			//      } else {
			//       this.router.navigate(['/cropnotfound']);
			//      }
			//     }, (err) => {
			//       console.log(err);
			//     });
		});
	}
	logout() {
		this.auth.dologout()
			.subscribe(res => {
				//  if (res.status === 'success') {
				//    this.crops = res.data.crops;
				//    const tempcrops = res.data.crops;
				//    this.crops = res.data.crops;
				//    this.mainCats = _.slice(tempcrops, 0, 8);
				//    this.morecats = _.chunk(_.slice(tempcrops, 8, tempcrops.length), 6);
				//   //  console.log('this.mainCats', this.mainCats);
				//   //  console.log('this.morecats', this.morecats);
				//   //  console.log('this.morecats', this.morecats);
				//  }
			}, (err) => {
				console.log(err);
			});
		this.loggedinMenu = false;
		localStorage.removeItem('firstname');
		localStorage.removeItem('email');
		localStorage.removeItem('lastname');
		localStorage.removeItem('isadmin');
		localStorage.removeItem('id');
		this.router.navigate(['user/signin']);
	}
}
