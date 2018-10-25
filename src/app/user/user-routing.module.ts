import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';

const routes: Routes = [
  {
    path: '',
    component: CreateaccountComponent
  },
{
path: 'forgotpas',
component: ForgotpassComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
