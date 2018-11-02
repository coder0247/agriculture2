import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
  Inject
} from '@angular/core';
import { HomeService } from '../service/home.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
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
  categoryerror = false;
  subcategoryerror = false;
  regionerror = false;

  // creates instance of FormGroup called authForm
  searchForm: FormGroup;
  @ViewChild('parentcontent', { read: ElementRef })
  parentcontent: ElementRef;
  @ViewChild('hiddencontent', { read: ElementRef })
  hiddencontent: ElementRef;
  @ViewChild('mmenu', { read: ElementRef })
  mmenu: ElementRef;
  @ViewChild('mobileconfig', { read: ElementRef })
  mobileconfig: ElementRef;
  @ViewChild('cogactive', { read: ElementRef })
  cogactive: ElementRef;
  selectedCategory = '';
  category: any;
  crop: any;
  region: any;
  selecthascontent = false;
  constructor(
    private homepage: HomeService,
    private renderer: Renderer2,
    public fb: FormBuilder,
    private product: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthService,
    private _location: Location
  ) {}
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
    const regionid =
      localStorage.getItem('regionid') !== 'null'
        ? localStorage.getItem('regionid')
        : '';
    const subcategoryid =
      localStorage.getItem('subcategoryid') !== 'null'
        ? localStorage.getItem('subcategoryid')
        : '';
    const categoryid =
      localStorage.getItem('categoryid') !== 'null'
        ? localStorage.getItem('categoryid')
        : '';
// console.log(categoryid, subcategoryid, regionid );
    if (categoryid !== '' && subcategoryid !== '' && regionid !== '') {
      this.selecthascontent = true;
      // this.getSubcatList(categoryid);
      this.searchForm = this.fb.group({
        category: [categoryid],
        subcategory: [subcategoryid],
        region: [regionid]
      });
    } else {
      this.selecthascontent = false;
      this.searchForm = this.fb.group({
        category: [],
        subcategory: [],
        region: []
      });
    }
    if ( categoryid !== '') {
      this.searchForm.controls['category'].markAsDirty({ onlySelf: true });
     }
    if ( subcategoryid !== '') {
      this.searchForm.controls['subcategory'].markAsDirty({ onlySelf: true });
     }
     if (regionid !== '') {
      this.searchForm.controls['region'].markAsDirty({ onlySelf: true });
     }
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
    // this.homepage.getRegionList().subscribe(
    //   res => {
    //     if (res.status === 'success') {
    //       // console.log(res);
    //       this.regions = res.data.regions;
    //     }
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );

    if (categoryid !== '') {
      this.homepage.getSubcatListByCatID(categoryid).subscribe(
        res => {
          if (res.status === 'success') {
            this.subCats = res.data.subcategory;
            this.searchForm.patchValue({
              category: categoryid,
              subcategory: subcategoryid,
              region: regionid,
            });

          }
        },
        err => {
          console.log(err);
        }
      );
    }
    // this.validateAllFormFields(this.searchForm);
  }
  validateAllFormFields(formGroup: any) {
    Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
            control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {
            this.validateAllFormFields(control);
        }
    });
}
  routing() {
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
    this.categoryerror = false;
    this.subcategoryerror = false;
    if (credentials.category === '') {
      this.categoryerror = true;
    }
    if (credentials.subcategory === '') {
      this.subcategoryerror = true;
    }
    localStorage.setItem('subcategoryid', credentials.subcategory);
    if (!this.categoryerror && !this.subcategoryerror ) {
      this.router.navigate([
        '/search',
        'subcategory',
        credentials.subcategory
      ]);
    }
  }
}
