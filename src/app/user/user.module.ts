import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { FooterModule } from '../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderCommonModule } from '../header-common/header-common.module';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ModalModule } from 'ngx-bootstrap';
import { AuthService } from './../service/auth.service';

@NgModule({
  imports: [
  CommonModule,
    UserRoutingModule,
    FooterModule,
    HeaderCommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  declarations: [LoginComponent, RegisterComponent, CreateaccountComponent, ForgotpassComponent],
  providers: [AuthService],
})
export class UserModule {}
