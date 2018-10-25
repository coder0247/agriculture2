import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-termsconditionpage',
  templateUrl: './termsconditionpage.component.html',
  styleUrls: ['./termsconditionpage.component.css']
})
export class TermsconditionpageComponent implements OnInit {

  pageslug = 'termscondition';
  pagecontent: any;
    constructor(private homepage: HomeService) { }

    ngOnInit() {
      this.homepage.getPageContent('termscondition').subscribe(
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
