import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacypolicypageComponent } from './privacypolicypage/privacypolicypage.component';

const routes: Routes = [
  {
    path: '',
    component: PrivacypolicypageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacypolicyRoutingModule { }
