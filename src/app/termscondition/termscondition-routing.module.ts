import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsconditionpageComponent } from './termsconditionpage/termsconditionpage.component';

const routes: Routes = [
  {
    path: '',
    component: TermsconditionpageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsconditionRoutingModule { }
