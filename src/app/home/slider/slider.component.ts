import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images: Array<any> = [];
  constructor(private route: ActivatedRoute,
    private router: Router) {
    const slide1 = {
      'imgsrc': 'assets/images/slider/3a.jpg',
      'subtitle': 'up to <span class="text-main-color">60% off</span>',
      'title': 'Crops',
      'smalltitle': 'Only: <span> 226 TZS</span>',
      'buttontext': 'Shop Now',
      'buttonurl': 'category/5b56cd9ecb50b83ff77b5168'
    };
    const slide2 = {
      'imgsrc': 'assets/images/slider/agri1.jpg',
      'subtitle': 'up to <span class="text-main-color"> 50% off</span>',
      'title': '<span>Agriculture</span> Services',
      'smalltitle': 'Only: <span> 68 USD</span>',
      'buttontext': 'Shop Now',
      'buttonurl': 'category/5b56cd2fcb50b83ff77b4e84'
    };
    const slide3 = {
      'imgsrc': 'assets/images/slider/farm1.jpg',
      'subtitle': '<span class="text-main-color"> 50% off</span>',
      'title': 'Farm Lands',
      'smalltitle': 'Only: <span> 2000 TZS</span>',
      'buttontext': 'Shop Now',
      'buttonurl': 'category/5b56cd9ecb50b83ff77b5164'
    };

    this.images.push(slide1);
    this.images.push(slide2);
    this.images.push(slide3);
    // console.log(this.images);
  }
  public redirectotpage(pageurl) {
    this.router.navigate([pageurl]);
  }
  ngOnInit() { }

}
