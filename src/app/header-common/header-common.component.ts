import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit, Inject } from '@angular/core';
import { HomeService } from '../service/home.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { NgOption } from '@ng-select/ng-select';
import { AuthService } from '../service/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-common',
  templateUrl: './header-common.component.html',
  styleUrls: ['./header-common.component.css']
})
export class HeaderCommonComponent implements OnInit {
  // crops: Array<any> = [];
  subcatlist: NgOption[];
  regions: NgOption[];
  mainCats: NgOption[];
  subCats: NgOption[];
  morecats: NgOption[];
  loggedinMenu = false;
  // creates instance of FormGroup called authForm
  searchForm: FormGroup;
  @ViewChild('parentcontent', { read: ElementRef })
  parentcontent: ElementRef;
  @ViewChild('hiddencontent', { read: ElementRef })
  hiddencontent: ElementRef;
  selectedCategory = '';
  category: any;
  crop: any;
  region: any;

  constructor(
    private homepage: HomeService,
    private renderer: Renderer2,
   public fb: FormBuilder,
    private product: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthService,
    private _location: Location
  ) {

  }

  ngOnInit() {
    this.checksession();
    this.route.params.subscribe(params => {
      this.category = params.catid || null;
      this.crop = params.cropid || null;
      this.region = params.regionid || null;

      if (this.category) {
        this.selectedCategory = this.category;
        this.searchForm = this.fb.group({
          category: [this.selectedCategory],
          subcategory: [],
          region: []
        });
      } else {
        this.searchForm = this.fb.group({
          category: [],
          subcategory: [],
          region: []
        });
      }
    });

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

    console.log('selcat', this.selectedCategory);
    if (this.selectedCategory) {
      this.homepage.getSubcatListByCatID(this.selectedCategory).subscribe(
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
  }
  routing () {
    const pattern = /(inbox|newad|activeads|archiveads|sent|profile|view|viewsent)$/;
    return pattern.test(this._location.path());
 }
 checksession() {
  this.auth.authsession().subscribe(
    res => {
      if (res['status'] === 'success') {
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
    this.router.navigate(['/search', 'subcategory', credentials.subcategory, 'region', credentials.region ]);
  }
}
