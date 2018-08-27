import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { QuickviewComponent } from './quickview/quickview.component';
const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'quickview',
    component: QuickviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
