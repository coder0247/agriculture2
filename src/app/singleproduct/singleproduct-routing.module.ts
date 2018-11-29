import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ReportadComponent } from './reportad/reportad.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'ReportadComponent',
    component: ReportadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleproductRoutingModule {}
