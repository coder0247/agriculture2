import { Component, OnInit, Inject } from '@angular/core';
import { HomeService } from '../../service/home.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { NgOption } from '@ng-select/ng-select';
import { AuthService } from '../../service/auth.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-headerprimary',
  templateUrl: './headerprimary.component.html',
  styleUrls: ['./headerprimary.component.css']
})
export class HeaderprimaryComponent implements OnInit {
  // crops: Array<any> = [];
  subcatlist: NgOption[];
  regions: NgOption[];
  mainCats: NgOption[];
  subCats: NgOption[];
  morecats: NgOption[];
  loggedinMenu = false;
  selectedCategory = '';
  // creates instance of FormGroup called authForm
  searchForm: FormGroup;
  constructor(
    private homepage: HomeService,
    @Inject(FormBuilder) fb: FormBuilder,
    private product: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthService,
    private _location: Location
  ) {
    this.searchForm = fb.group({
      category: [],
      subcategory: [],
      region: []
    });
  }

  ngOnInit() {
    this.checksession();
    this.homepage.getCatList().subscribe(
      res => {
        if (res.status === 'success') {
          this.mainCats = res.data.category;
          if (this.mainCats.length > 0) {
            this.selectedCategory = this.mainCats[0]._id;
          }
        }
      },
      err => {
        console.log(err);
      }
    );

    // regions
    this.homepage.getRegionList().subscribe(
      res => {
        if (res.status === 'success') {
          // console.log(res);
          this.regions = res.data.regions;
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  routing() {
    const pattern = /(inbox|newad|activeads|archiveads|sent|profile|view|viewsent)$/;
    return pattern.test(this._location.path());
  }
  checksession() {
    this.auth.authsession().subscribe(
      res => {
        if (res.status === 'success') {
          this.loggedinMenu = true;
        } else {
          this.loggedinMenu = false;
          localStorage.clear();
          if (this.routing()) {
            this.router.navigate(['user/signin']);
          }
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  logout() {
    this.auth.dologout().subscribe(
      res => {
        this.loggedinMenu = false;
        localStorage.clear();
        this.router.navigate(['user/signin']);
      },
      err => {
        console.log(err);
      }
    );
  }

  postnewadd() {
    this.router.navigate(['user/account/newad']);
  }

  getSubcatList(catid) {
    this.homepage.getSubcatListByCatID(catid).subscribe(
      res => {
        if (res.status === 'success') {
          this.subCats = res.data.subcategory;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  submitForm() {
    const credentials = this.searchForm.value;
    // tslint:disable-next-line:max-line-length
    this.router.navigate(['/search', 'subcategory', credentials.subcategory, 'region', credentials.region ]);
    // this.router.navigate(['/search',
    // 'category', credentials.category,
    // 'subcategory', credentials.subcategory,
    // 'region', credentials.region ]);
    // this.route.params.subscribe(params => {
    //   // console.log('params[id]', params['id']);
    //   // // this.router.navigate(['/cropnotfound']);
    //   // this.imageurl =  'assets/images/crop/small/' + params['id'] + '.jpeg';
    //   // console.log(params); // log the entire params object
    //   // console.log(params['id']); // log the value of id
    //   //  this.product.getSearchResult(params['id'])
    //   //   .subscribe(res => {
    //   //      if (res.status === 'success') {
    //   //        this.showloading = false;
    //   //        this.products = res.data.product;
    //   //      } else {
    //   //       this.router.navigate(['/cropnotfound']);
    //   //      }
    //   //     }, (err) => {
    //   //       console.log(err);
    //   //     });
    // });
  }
}
