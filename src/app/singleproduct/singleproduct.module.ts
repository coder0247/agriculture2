import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../service/product.service';
import { SingleproductRoutingModule } from './singleproduct-routing.module';
import { ProductComponent } from './product/product.component';
// import {HeadersecondaryModule} from '../headersecondary/headersecondary.module';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderCommonModule } from '../header-common/header-common.module';
import { ReportadComponent } from './reportad/reportad.component';
import { ModalModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    SingleproductRoutingModule,
    // HeadersecondaryModule,
    HeaderCommonModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    ModalModule.forRoot()
  ],
  declarations: [ProductComponent, ReportadComponent],
  providers: [ProductService]
})
export class SingleproductModule {}
