import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import {HeadersecondaryModule} from '../headersecondary/headersecondary.module';
import { BannerComponent } from './banner/banner.component';
import { ProductService } from '../service/product.service';
import { ModalModule } from 'ngx-bootstrap';
import { QuickviewComponent } from './quickview/quickview.component';
import {FooterModule} from '../footer/footer.module';
import { PagerService } from './../service/pager.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HeadersecondaryModule,
    ModalModule.forRoot(),
    FooterModule
    ],
  declarations: [ProductListComponent, BannerComponent, QuickviewComponent],
  providers: [ProductService, PagerService],
})
export class ProductsModule { }
