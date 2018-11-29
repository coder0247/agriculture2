import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css'],
})
export class LeftmenuComponent implements OnInit {
 leftsidebar = false;
 submenu = false;
 prevsubmenustatus: any;
 prevliparent: any;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }
  @Input()
  set leftsidebarstatus(status: boolean) {
    // console.log('got status: ', status);
    this.leftsidebar = status;
    if (status) {
      if (!!this.prevsubmenustatus) {
        this.renderer.setStyle(this.prevsubmenustatus, 'display', 'none');
      }
    } else {
      if (!!this.prevsubmenustatus) {
        this.renderer.setStyle(this.prevsubmenustatus, 'display', 'none');
      }
    }
  }

  submenutoggle(e) {
    const liparent = this.renderer.parentNode(e.srcElement);
    this.renderer.addClass(liparent, 'active');

    if (!!this.prevsubmenustatus) {
      this.renderer.setStyle(this.prevsubmenustatus, 'display', 'none');
      this.renderer.removeClass(this.prevliparent, 'active');
    }
    const ulsubmenu = this.renderer.nextSibling(e.target);
    this.prevsubmenustatus = ulsubmenu;
    this.prevliparent = liparent;
    this.renderer.setStyle(this.prevsubmenustatus, 'display', 'block');
  }
}
