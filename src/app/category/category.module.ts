import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryRoutingModule } from './category-routing.module';
import { BannerComponent } from './banner/banner.component';
import { ProductService } from '../service/product.service';
import { ModalModule } from 'ngx-bootstrap';
import { QuickviewComponent } from './quickview/quickview.component';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HeaderCommonComponent } from '../header-common/header-common.component';
import { HeaderCommonModule } from '../header-common/header-common.module';
// End of dependices for common header
import { PagerService } from './../service/pager.service';
import { OwlModule } from 'ngx-owl-carousel';
@NgModule({
	imports: [
		CommonModule,
		CategoryRoutingModule,
		HeaderCommonModule,
		ModalModule.forRoot(),
		FooterModule,
		FormsModule,
		ReactiveFormsModule,
		NgSelectModule,
		OwlModule
	],
	declarations: [ProductListComponent, BannerComponent, QuickviewComponent],
	providers: [ProductService, PagerService],
})
export class CategoryModule { }
