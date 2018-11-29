import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsletterverifyComponent } from './newsletterverify/newsletterverify.component';

const routes: Routes = [
  {
    path: '',
    component: NewsletterverifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NwverifyRoutingModule { }
