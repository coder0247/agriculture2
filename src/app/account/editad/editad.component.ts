import { ProductService } from '../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { HomeService } from '../../service/home.service';

import { NgOption } from '@ng-select/ng-select';
const URL = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-editad',
  templateUrl: './editad.component.html',
  styleUrls: ['./editad.component.css']
})
export class EditadComponent implements OnInit {
  newadForm: FormGroup;
  subCats: NgOption[];
  amtforsale: NgOption[];
  regions:  NgOption[];
  imagedata: any;
  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;
  showimageerror = false;
  uploadsuccess = false;
  tempimagename: any;
  forcevalidation = false;
  mainCats: NgOption[];
  // subCats: Array<any> = [];
  selectedCategory = '';
  defaultproductimage: any;
  productimage: any;
  defaultimagepath = 'assets/images/products/';
  productdetails: any;
  updatingstatus = false;
constructor( private productservice: ProductService,  private route: ActivatedRoute, private router: Router, public homepage: HomeService) {
  // this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
  this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
}

onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
  this.imagedata = JSON.parse(response); // success server response
   this.tempimagename = 'assets/images/products/' + this.imagedata.data.filename;
}

// onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
//   let error = JSON.parse(response); //error server response
// }
ngOnInit () {

  if (typeof localStorage.getItem('productinfo') === 'undefined' || localStorage.getItem('productinfo') === null) {
    this.router.navigate(['user/account/editads']);
  }
  this.homepage.getCatList().subscribe(res => {
    if (res.status === 'success') {
      this.mainCats = res.data.category;
      if (this.mainCats.length > 0) {
        this.selectedCategory = this.mainCats[0]._id;
      }
    }
  }, (err) => {
    console.log(err);
  });
  this.createForm();
  const userid = localStorage.getItem('id');
  if (!userid) {
  this.router.navigate(['user/signin']);
  }
  // croplist
  // this.homepage.getCropList()
  // .subscribe(res => {
  //    if (res.status === 'success') {
  //      this.subcatsnames = res.data.crops;
  //    }
  //   }, (err) => {
  //     console.log(err);
  //   });
  // region list
this.getRegionList();
     // amounit list
this.getAmountUnit();

}
getAmountUnit() {
  this.homepage.getAmountUnitList()
  .subscribe(res => {
     if (res.status === 'success') {
      // console.log(res);
       this.amtforsale = res.data.amountunit;
     }
    }, (err) => {
      console.log(err);
    });
}
getSubcatList(catid) {
  this.homepage.getSubcatListByCatID(catid).subscribe(res => {
    if (res.status === 'success') {
      this.subCats = res.data.subcategory;
    }
  }, (err) => {
    console.log(err);
  });
}
getSubcatimages(e) {
  this.productimage = e.defaultimage;
 this.defaultproductimage = this.defaultimagepath + e.defaultimage;

}
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  private createForm() {
    this.productdetails = JSON.parse(localStorage.getItem('productinfo'));

    this.defaultproductimage = this.productdetails === null ? '' : this.defaultimagepath + this.productdetails.pimage;
    const formprefilled = {
      pimage: this.productdetails === null ? '' : this.productdetails.pimage,
      category_id : this.productdetails === null ? '' : this.productdetails.category_id,
      subcatid : this.productdetails === null ? '' : this.productdetails.subcatid,
      amtunit : this.productdetails === null ? '' : this.productdetails.amtunit,
      unitprice : this.productdetails === null ? '' : this.productdetails.unitprice,
      regionid : this.productdetails === null ? '' : this.productdetails.regionid,
      saleamount : this.productdetails === null ? '' : this.productdetails.saleamount,
      pname : this.productdetails === null ? '' : this.productdetails.pname,
    };
    this.newadForm = new FormGroup({
      // tslint:disable-next-line
      category:new FormControl(formprefilled.category_id, Validators.required),
      subcatnames: new FormControl(formprefilled.subcatid, Validators.required),
      amtunit: new FormControl(formprefilled.amtunit, Validators.required),
      unitprice: new FormControl(formprefilled.unitprice, Validators.required),
      region : new FormControl(formprefilled.regionid, Validators.required),
      saleamount: new FormControl(formprefilled.saleamount, Validators.required),
      productname: new FormControl(formprefilled.pname, Validators.required)
        }); // remove updateon to change the event to onchange
        this.getSubcatList(this.productdetails === null ? 111111111111111111111111111 : this.productdetails.category_id);
        this.getRegionList();
        this.getAmountUnit();
  }
getRegionList() {
  this.homepage.getRegionList()
  .subscribe(res => {
     if (res.status === 'success') {
      // console.log(res);
       this.regions = res.data.regions;
     }
    }, (err) => {
      console.log(err);
    });
}
  addnewproduct() {
    const userid = localStorage.getItem('id');
    // if (!userid) {
    //   this.router.navigate(['user/signin']);
    //   }
    let productimage;
    if (typeof this.imagedata !== undefined && this.imagedata) {
      productimage = this.imagedata.data.filename;
    } else {
      if (this.productimage === '' || typeof this.productimage === 'undefined') {
        console.log('---undefined');
        productimage = this.productdetails.pimage;
      } else {
        productimage = this.productimage;
      }
    }
    this.forcevalidation = true;
    const productdetails = {
      'productid': this.productdetails.productid,
      'subcat': this.newadForm.value.subcatnames,
      'region': this.newadForm.value.region,
      'saleamount': this.newadForm.value.saleamount,
      'amtunit': this.newadForm.value.amtunit,
      'unitprice': this.newadForm.value.unitprice,
      'productname': this.newadForm.value.productname,
      'productimage': productimage,
      'userid' : userid
    };
    // console.log('productdetails' , productdetails, this.productdetails.pimage , this.productimage, this.newadForm.valid);
   if (this.newadForm.valid) {
    this.uploadsuccess = false;
    this.updatingstatus = true;
    this.productservice.updateProduct(productdetails).subscribe(res => {
      if (res['status'] === true) {
        this.showimageerror = false;
        this.uploadsuccess = true;
        this.uploader.queue.length = 0;
        this.forcevalidation = false;
        this.updatingstatus = false;
        localStorage.removeItem('productinfo');
        // this.newadForm.reset();
      }
    }, (error) => {
      console.log(error);
    });
   }
  }
}
