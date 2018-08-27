import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images: Array<any> = [];
  constructor() {
    const slide1 = {
        'imgsrc' : 'assets/images/slider/3a.jpg',
        'subtitle': 'up to <span class="text-main-color">60% off</span>',
        'title': 'Smart Watchs',
        'smalltitle': 'Only: <span> $226.00</span>',
        'buttontext': 'Shop Now',
        'buttonurl': ''
    };
    const slide2 = {
      'imgsrc' : 'assets/images/slider/1a.jpg',
      'subtitle': 'up to <span class="text-main-color"> 50% off</span>',
      'title': '<span>Sales</span> & Sevice of Laptop',
      'smalltitle': 'Only: <span> $268.00</span>',
      'buttontext': 'Shop Now',
      'buttonurl': ''
  };
  const slide3 = {
    'imgsrc' : 'assets/images/slider/2a.jpg',
    'subtitle': '<span class="text-main-color"> 50% off</span>',
    'title': 'Gear VR 3D.',
    'smalltitle': 'Virtual reality through a new lens',
    'buttontext': 'Shop Now',
    'buttonurl': ''
};

    this.images.push(slide1);
    this.images.push(slide2);
    this.images.push(slide3);
    // console.log(this.images);
  }

  ngOnInit() {
  }

}
