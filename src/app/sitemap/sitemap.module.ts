import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitemapRoutingModule } from './sitemap-routing.module';
import { SitemappageComponent } from './sitemappage/sitemappage.component';

@NgModule({
  imports: [
    CommonModule,
    SitemapRoutingModule
  ],
  declarations: [SitemappageComponent]
})
export class SitemapModule { }
