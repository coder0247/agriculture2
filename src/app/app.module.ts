import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// import {FooterModule} from './footer/footer.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ImagePreview } from './directive/image-preview.directive';
// bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { RoutingState } from './service/routingState';


@NgModule({
  declarations: [AppComponent, ImagePreview],
  imports: [

  BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    ModalModule.forRoot(),
  ],
  providers: [RoutingState],
  bootstrap: [AppComponent]
})
export class AppModule {}
