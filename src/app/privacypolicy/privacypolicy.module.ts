import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCommonModule } from '../header-common/header-common.module';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeService } from '../service/home.service';
import { PrivacypolicyRoutingModule } from './privacypolicy-routing.module';
import { PrivacypolicypageComponent } from './privacypolicypage/privacypolicypage.component';

@NgModule({
  imports: [
    CommonModule,
    PrivacypolicyRoutingModule,
    HeaderCommonModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PrivacypolicypageComponent],
  providers: [HomeService],
})
export class PrivacypolicyModule { }
