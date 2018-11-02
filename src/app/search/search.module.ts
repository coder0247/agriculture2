import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { ResultComponent } from './result/result.component';
import { ProductService } from '../service/product.service';
import { ModalModule } from 'ngx-bootstrap';
import { QuickviewComponent } from './quickview/quickview.component';
import { FooterModule } from '../footer/footer.module';
// Dependent modules for common header
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HeaderCommonModule } from '../header-common/header-common.module';
// End of dependices for common header
import { OwlModule } from 'ngx-owl-carousel';
@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    HeaderCommonModule,
    ModalModule.forRoot(),
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    OwlModule
  ],
  declarations: [ResultComponent, QuickviewComponent],
  providers: [ProductService]
})
export class SearchModule {}
