import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactpageComponent } from './contactpage/contactpage.component';
const routes: Routes = [
  {
    path: '',
    component: ContactpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ContactRoutingModule { }
