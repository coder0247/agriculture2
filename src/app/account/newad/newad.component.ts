import { ProductService } from '../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { HomeService } from '../../service/home.service';

import { NgOption } from '@ng-select/ng-select';
const URL = '/api/upload';
@Component({
  selector: 'app-newad',
  templateUrl: './newad.component.html',
  styleUrls: ['./newad.component.css']
})
export class NewadComponent implements OnInit {
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
  defaultimagepath: any;

constructor( private productservice: ProductService,  private route: ActivatedRoute, private router: Router, public homepage: HomeService) {
  // this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
  this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
}

onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
  this.imagedata = JSON.parse(response); // success server response
   // this.tempimagename = 'assets/images/products/' + this.imagedata.data.filename;
}

// onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
//   let error = JSON.parse(response); //error server response
// }
ngOnInit () {

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
  this.homepage.getRegionList()
  .subscribe(res => {
     if (res.status === 'success') {
      // console.log(res);
       this.regions = res.data.regions;
     }
    }, (err) => {
      console.log(err);
    });
     // amounit list
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
  console.log(catid);
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
 this.defaultproductimage = e.defaultimage;

}
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  private createForm() {
    this.newadForm = new FormGroup({
      // tslint:disable-next-line
      category:new FormControl('', Validators.required),
      subcatnames: new FormControl('', Validators.required),
      amtunit: new FormControl('', Validators.required),
      unitprice: new FormControl('', Validators.required),
      region : new FormControl('', Validators.required),
      saleamount: new FormControl('', Validators.required),
      productname: new FormControl('', Validators.required)
        }); // remove updateon to change the event to onchange
  }

  addnewproduct() {
    const userid = localStorage.getItem('id');
    // if (!userid) {
    //   this.router.navigate(['user/signin']);
    //   }
    let productimage;
    if (typeof this.imagedata !== undefined && this.imagedata) {
      productimage = this.imagedata.data;
    } else {
      productimage = this.productimage;
    }
    this.forcevalidation = true;
    const newproduct = {
      'subcat': this.newadForm.value.subcatnames,
      'region': this.newadForm.value.region,
      'saleamount': this.newadForm.value.saleamount,
      'amtunit': this.newadForm.value.amtunit,
      'unitprice': this.newadForm.value.unitprice,
      'productname': this.newadForm.value.productname,
      'productimage': productimage,
      'userid' : userid
    };
   if (this.newadForm.valid) {
    this.productservice.addNewProduct(newproduct).subscribe(res => {
      if (res['status'] === 'success') {
        this.showimageerror = false;
        this.uploadsuccess = true;
        this.uploader.queue.length = 0;
        this.forcevalidation = false;
        this.newadForm.reset();
      }
    }, (error) => {
      console.log(error);
    });
   }
  }
}
