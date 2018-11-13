import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NwverifyRoutingModule } from './nwverify-routing.module';
import { NewsletterverifyComponent  } from './newsletterverify/newsletterverify.component';
import { AuthService } from '../service/auth.service';

@NgModule({
  imports: [
    CommonModule,
    NwverifyRoutingModule
  ],
  declarations: [NewsletterverifyComponent],
  providers: [AuthService],
})
export class NwverifyModule { }
