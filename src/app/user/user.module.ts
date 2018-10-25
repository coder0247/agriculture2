import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
// import { HeadersecondaryModule } from '../headersecondary/headersecondary.module';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderCommonModule } from '../header-common/header-common.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ModalModule } from 'ngx-bootstrap';
import { AuthService } from './../service/auth.service';

@NgModule({
  imports: [
  CommonModule,
    UserRoutingModule,
    FooterModule,
    // HeadersecondaryModule,
    HeaderCommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    ModalModule.forRoot()
  ],
  declarations: [LoginComponent, RegisterComponent, CreateaccountComponent, ForgotpassComponent],
  providers: [AuthService],
})
export class UserModule {}
