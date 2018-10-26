import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifyregistrationComponent } from './verifyregistration/verifyregistration.component';

const routes: Routes = [
  {
    path: '',
    component: VerifyregistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifyRoutingModule { }
