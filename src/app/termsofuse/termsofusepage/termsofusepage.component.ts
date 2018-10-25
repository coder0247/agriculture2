import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
@Component({
  selector: 'app-termsofusepage',
  templateUrl: './termsofusepage.component.html',
  styleUrls: ['./termsofusepage.component.css']
})
export class TermsofusepageComponent implements OnInit {
  pageslug = 'termsofuse';
  pagecontent: any;
    constructor(private homepage: HomeService) { }

    ngOnInit() {
      this.homepage.getPageContent('termsofuse').subscribe(
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
