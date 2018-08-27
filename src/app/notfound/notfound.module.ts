import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundRoutingModule } from './notfound-routing.module';
import { Page404Component } from './page404/page404.component';

@NgModule({
  imports: [
    CommonModule,
    NotfoundRoutingModule
  ],
  declarations: [Page404Component]
})
export class NotfoundModule { }
