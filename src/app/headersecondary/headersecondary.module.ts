import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersecondaryComponent } from './headersecondary.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { NgSelectModule } from '@ng-select/ng-select';
const routes: Routes = [
  {
    path: '',
    component: HeadersecondaryComponent
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
  declarations: [HeadersecondaryComponent],
  exports: [HeadersecondaryComponent, CommonModule, RouterModule],
  providers: [ProductService],
})
export class HeadersecondaryModule { }
