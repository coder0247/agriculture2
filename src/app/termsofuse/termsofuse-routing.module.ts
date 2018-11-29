import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TermsofusepageComponent } from './termsofusepage/termsofusepage.component';

const routes: Routes = [
  {
    path: '',
    component: TermsofusepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsofuseRoutingModule { }
