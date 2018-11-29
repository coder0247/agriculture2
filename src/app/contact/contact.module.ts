import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCommonModule } from '../header-common/header-common.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    HeaderCommonModule,
    FooterModule,
		FormsModule,
		ReactiveFormsModule
  ],
  declarations: [ContactpageComponent]
})
export class ContactModule { }
