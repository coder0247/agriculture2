import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
//import { HeadersecondaryModule } from '../headersecondary/headersecondary.module';
import { ResultComponent } from './result/result.component';
import { ProductService } from '../service/product.service';
import { ModalModule } from 'ngx-bootstrap';
import { QuickviewComponent } from './quickview/quickview.component';
import { FooterModule } from '../footer/footer.module';
//import { HeaderprimaryComponent } from '../home/headerprimary/headerprimary.component';

//Dependent modules for common header
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
//import { HeaderCommonComponent } from '../header-common/header-common.component';
import { HeaderCommonModule } from '../header-common/header-common.module';
// End of dependices for common header

@NgModule({
	imports: [
		CommonModule,
		SearchRoutingModule,
		//HeadersecondaryModule,
		//HeaderCommonComponent,
		HeaderCommonModule,
		ModalModule.forRoot(),
		FooterModule,
		FormsModule,
		ReactiveFormsModule,
		NgSelectModule
	],
	declarations: [ResultComponent, QuickviewComponent],
	providers: [ProductService],
})
export class SearchModule { }
