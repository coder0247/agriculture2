import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SliderComponent } from './slider/slider.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TopsellingComponent } from './topselling/topselling.component';
import { HeaderprimaryComponent } from './headerprimary/headerprimary.component';
import { FeaturedsmallComponent } from './featuredsmall/featuredsmall.component';
import { FeaturedlargeComponent } from './featuredlarge/featuredlarge.component';
import { BannerComponent } from './banner/banner.component';
import { BrandsComponent } from './brands/brands.component';
import { MostviewedComponent } from './mostviewed/mostviewed.component';
import { OnsaleComponent } from './onsale/onsale.component';
import { NewarrivalsComponent } from './newarrivals/newarrivals.component';
import { HomeService } from '../service/home.service';
import { OwlModule } from 'ngx-owl-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { FooterModule } from '../footer/footer.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap';
import { QuickviewComponent } from './quickview/quickview.component';
import { AutocompService } from './../service/autocomp.service';

@NgModule({
	imports: [

	CommonModule,
		HomeRoutingModule,
		AccordionModule.forRoot(),
		CarouselModule.forRoot(),
		TabsModule.forRoot(),
		OwlModule,
		FormsModule,
		NgSelectModule,
		ReactiveFormsModule,
		FooterModule,
		ModalModule.forRoot()
	],
	declarations: [
		HomepageComponent, SliderComponent, TopsellingComponent, HeaderprimaryComponent, FeaturedsmallComponent,
		FeaturedlargeComponent, BannerComponent, BrandsComponent, MostviewedComponent, OnsaleComponent, NewarrivalsComponent, QuickviewComponent],
	providers: [HomeService, ProductService, AutocompService],
})
export class HomeModule { }
