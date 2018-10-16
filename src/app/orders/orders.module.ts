import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing.module';
import { HomeService } from '../service/home.service';
import { FormnameComponent } from './formname/formname.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ControlService } from './../form/service/control.service';
import { AddNewProductService } from '../service/addnewproduct.service';

@NgModule({
  imports: [

  CommonModule,
    OrdersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [OrderListComponent, FormnameComponent],
  providers: [HomeService, ControlService, AddNewProductService],
})
export class OrdersModule {}
