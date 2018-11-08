import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { HeaderCommonComponent } from './header-common.component';
import { AutocompService } from '../service/autocomp.service';
const routes: Routes = [
  {
    path: '',
    component: HeaderCommonComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  declarations: [HeaderCommonComponent],
  exports: [HeaderCommonComponent, CommonModule, RouterModule],
  providers: [ProductService, AutocompService],
})
export class HeaderCommonModule { }
