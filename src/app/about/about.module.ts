import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCommonModule } from '../header-common/header-common.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeService } from '../service/home.service';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    HeaderCommonModule,
    FooterModule,
		FormsModule,
		ReactiveFormsModule
  ],
  declarations: [AboutpageComponent],
  providers: [HomeService],
})
export class AboutModule { }
