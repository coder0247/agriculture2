import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyRoutingModule } from './verify-routing.module';
import { VerifyregistrationComponent } from './verifyregistration/verifyregistration.component';
import { AuthService } from '../service/auth.service';

@NgModule({
  imports: [
    CommonModule,
    VerifyRoutingModule
  ],
  declarations: [VerifyregistrationComponent],
  providers: [AuthService],
})
export class VerifyModule { }
