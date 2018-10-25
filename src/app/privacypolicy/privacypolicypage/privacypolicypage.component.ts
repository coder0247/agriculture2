import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-privacypolicypage',
  templateUrl: './privacypolicypage.component.html',
  styleUrls: ['./privacypolicypage.component.css']
})
export class PrivacypolicypageComponent implements OnInit {
  pageslug = 'privacypolicy';
  pagecontent: any;
    constructor(private homepage: HomeService) { }

    ngOnInit() {
      this.homepage.getPageContent('privacypolicy').subscribe(
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
