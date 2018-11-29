import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCommonModule } from '../header-common/header-common.module';
import { ResetpasswordRoutingModule } from './resetpassword-routing.module';
import { ResetpasswordComponent } from './resetpasswordpage/resetpassword.component';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeService } from '../service/home.service';

@NgModule({
  imports: [
    CommonModule,
    ResetpasswordRoutingModule,
    HeaderCommonModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ResetpasswordComponent],
  providers: [HomeService],
})
export class ResetpasswordModule { }
