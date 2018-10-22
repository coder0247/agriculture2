import {  Component, OnInit, Inject, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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
  @ViewChild('mmenu', { read: ElementRef })
 mmenu: ElementRef;
 @ViewChild('mobileconfig', { read: ElementRef })
 mobileconfig: ElementRef;
 @ViewChild('cogactive', { read: ElementRef })
 cogactive: ElementRef;
 categoryerror = false;
 subcategoryerror = false;
 regionerror = false;
 selectedcats: any;
 selecthascontent = false;
  // creates instance of FormGroup called authForm
  searchForm: FormGroup;
  constructor(
    private homepage: HomeService,
    @Inject(FormBuilder) fb: FormBuilder,
    private product: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthService,
    private _location: Location,
     private renderer: Renderer2
  ) {
    const regionid = localStorage.getItem('regionid') !== null ? localStorage.getItem('regionid') : '';
    const subcategoryid = localStorage.getItem('subcategoryid') !== null ? localStorage.getItem('subcategoryid') : '';
    const categoryid = localStorage.getItem('categoryid') !== null ? localStorage.getItem('categoryid') : '';
    if (categoryid !== '') {
      this.selecthascontent = true;
      this.getSubcatList(categoryid);
      this.searchForm = fb.group({
        category: [categoryid],
        subcategory: [subcategoryid],
        region: [regionid]
      });
      this.searchForm.controls['category'].markAsDirty({ onlySelf: true });
    } else {
      this.selecthascontent = false;
      this.searchForm = fb.group({
        category: [],
        subcategory: [],
        region: []
      });
    }
   if ( subcategoryid !== '') {
    this.searchForm.controls['subcategory'].markAsDirty({ onlySelf: true });
   }
   if (regionid !== '') {
    this.searchForm.controls['region'].markAsDirty({ onlySelf: true });
   }
    this.searchForm.patchValue({
      category: categoryid,
      subcategory: subcategoryid,
      region: regionid,
    });
  }
  mmenutoggleClass() {
  // console.log('menu click', this.mmenu.nativeElement.classList);
    if (this.mmenu.nativeElement.classList.contains('open')) {
      this.renderer.removeClass(this.mmenu.nativeElement, 'open');
    } else {
      this.renderer.addClass(this.mmenu.nativeElement, 'open');
    }
  }
  mconfigtoggleClass() {
    // console.log('menu click', this.mmenu.nativeElement.classList);
      if (this.mobileconfig.nativeElement.classList.contains('open')) {
        this.renderer.removeClass(this.cogactive.nativeElement, 'active');
        this.renderer.removeClass(this.mobileconfig.nativeElement, 'open');
        this.renderer.removeClass(this.mmenu.nativeElement, 'open');
      } else {
        this.renderer.addClass(this.cogactive.nativeElement, 'active');
        this.renderer.addClass(this.mobileconfig.nativeElement, 'open');
        this.renderer.removeClass(this.mmenu.nativeElement, 'open');
      }
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
          localStorage.removeItem('firstname');
    localStorage.removeItem('email');
    localStorage.removeItem('lastname');
    localStorage.removeItem('isadmin');
    localStorage.removeItem('id');
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
        localStorage.removeItem('firstname');
        localStorage.removeItem('email');
        localStorage.removeItem('lastname');
        localStorage.removeItem('isadmin');
        localStorage.removeItem('id');
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
    localStorage.setItem('categoryid', catid);
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
    console.log('credentials', credentials);
    // tslint:disable-next-line:max-line-length
    this.categoryerror = false;
    this.subcategoryerror = false;
    this.regionerror = false;
    if (credentials.category === '') {
   this.categoryerror = true;
 }
 if (credentials.subcategory === '') {
   this.subcategoryerror = true;
 }
 if (credentials.region === '') {
   this.regionerror = true;
 }
 console.log('re ressor', this.regionerror);
 localStorage.setItem('regionid', credentials.region);
 localStorage.setItem('subcategoryid', credentials.subcategory);
 if (!!this.categoryerror && !!this.subcategoryerror && !!this.regionerror ) {
  this.router.navigate([
    '/search',
    'subcategory',
    credentials.subcategory,
    'region',
    credentials.region
  ]);
}
    // this.router.navigate(['/search', 'subcategory', credentials.subcategory, 'region', credentials.region ]);

  }
}
