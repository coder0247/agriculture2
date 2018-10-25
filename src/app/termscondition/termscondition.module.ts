import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCommonModule } from '../header-common/header-common.module';
import { TermsconditionRoutingModule } from './termscondition-routing.module';
import { TermsconditionpageComponent } from './termsconditionpage/termsconditionpage.component';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeService } from '../service/home.service';

@NgModule({
  imports: [
    CommonModule,
    TermsconditionRoutingModule,
    HeaderCommonModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TermsconditionpageComponent],
  providers: [HomeService],
})
export class TermsconditionModule { }
