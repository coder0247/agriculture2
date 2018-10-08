import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {
pageslug = 'about';
pagecontent: any;
  constructor(private homepage: HomeService) { }

  ngOnInit() {
    this.homepage.getPageContent('about').subscribe(
      res => {
        if (res.status === 'success') {
            this.pagecontent = res.data.pagecontent[0].content;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
