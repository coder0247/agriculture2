import { Component, OnInit, Inject, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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
import { distinctUntilChanged, debounceTime, switchMap, tap, catchError } from 'rxjs/operators'
import { Subject, Observable, of, concat } from 'rxjs';
import { AutocompService } from './../../service/autocomp.service';

@Component({
  selector: 'app-headerprimary',
  templateUrl: './headerprimary.component.html',
  styleUrls: ['./headerprimary.component.css']
})
export class HeaderprimaryComponent implements OnInit {
  subcatlist: NgOption[];
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
  subcatAC$: Observable<any>;
  subcatACLoading = false;
  subcatACinput$ = new Subject<string>();
  catsubcatlist: Array<any> = [];
  constructor(
    private homepage: HomeService,
    @Inject(FormBuilder) fb: FormBuilder,
    private product: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthService,
    private _location: Location,
    private renderer: Renderer2,
    private autocomp: AutocompService
  ) {
    const categoryid = localStorage.getItem('categoryid') !== null ? localStorage.getItem('categoryid') : '';
    this.searchForm = fb.group({
      category: [],
      subcategory: []
    });
    // if (categoryid !== '') {
    //   this.selecthascontent = true;
    //   this.getSubcatList(categoryid);
    //   this.searchForm = fb.group({
    //     category: [categoryid],
    //     subcategory: []
    //   });
    //   this.searchForm.controls['category'].markAsDirty({ onlySelf: true });
    // } else {
    //   this.selecthascontent = false;
    //   this.searchForm = fb.group({
    //     category: [],
    //     subcategory: []
    //   });
    // }
    // if (subcategoryid !== '') {
    //   this.searchForm.controls['subcategory'].markAsDirty({ onlySelf: true });
    // }
    if (categoryid !== '') {
      this.searchForm.patchValue({
        category: categoryid
      });
      this.searchForm.controls['category'].markAsTouched({ onlySelf: true });
    }
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
    this.loadsubcatAC();
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
    this.homepage.getAllCatSubcatList().subscribe(
      res => {
        if (res.status === 'success') {
          //  _.filter(subcategory, {'catid' : '5b56cd9ecb50b83ff77b5166'})
          for ( let catitem of res.data.category) {
            // tslint:disable-next-line:max-line-length
            this.catsubcatlist.push({'catid': catitem._id , 'catname': catitem.catname, 'subcatlist': _.chunk(_.filter(res.data.subcategory, {'catid' : catitem._id}), 6 )});
          }
          // console.log(this.catsubcatlist);
        }
      },
      err => {
        console.log(err);
      }
    );
    
  }
  private loadsubcatAC() {
    this.subcatAC$ = concat(
        of([]), // default items
        this.subcatACinput$.pipe(
           debounceTime(200),
           distinctUntilChanged(),
           tap(() => this.subcatACLoading = true),
           switchMap(term => this.autocomp.getsubcategorylist(term).pipe(
               catchError(() => of([])), // empty list on error
               tap(() => this.subcatACLoading = false)
           ))
        )
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
    this.loadsubcatAC();
    // this.homepage.getSubcatListByCatID(catid).subscribe(
    //   res => {
    //     if (res.status === 'success') {
    //       this.subCats = res.data.subcategory;

    //     }
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }

  submitForm() {
    const credentials = this.searchForm.value;
    // console.log('search', credentials);
    // tslint:disable-next-line:max-line-length
    this.categoryerror = false;
    if (credentials.category === null) {
      this.categoryerror = true;
    }
    if (this.categoryerror !== null && this.subcategoryerror !== null) {
      this.router.navigate([
        '/search',
        'subcategory',
        credentials.subcategory._id
      ]);
    }
}
}
