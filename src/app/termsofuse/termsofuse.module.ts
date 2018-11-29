import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCommonModule } from '../header-common/header-common.module';
import { TermsofuseRoutingModule } from './termsofuse-routing.module';
import { TermsofusepageComponent } from './termsofusepage/termsofusepage.component';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeService } from '../service/home.service';

@NgModule({
  imports: [
    CommonModule,
    TermsofuseRoutingModule,
    HeaderCommonModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TermsofusepageComponent],
  providers: [HomeService],
})
export class TermsofuseModule { }
