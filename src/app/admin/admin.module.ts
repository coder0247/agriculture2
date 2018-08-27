import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminService } from '../service/admin.service';
import { CategoryListComponent } from './category-list/category-list.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';
import { CreateSubCategoryComponent } from './create-sub-category/create-sub-category.component';
import { EditSubCategoryComponent } from './edit-sub-category/edit-sub-category.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RoutingState } from './../service/routingState';
import { FileSelectDirective } from 'ng2-file-upload';
import { ImagePreview } from '../directive/image-preview.directive';
@NgModule({
  imports: [
  CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' })
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LeftmenuComponent,
    LoginComponent,
    DashboardComponent,
    CategoryListComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    MessageComponent,
    CreateSubCategoryComponent,
    EditSubCategoryComponent,
    UserListComponent,
    ProductListComponent,
    FileSelectDirective,
    ImagePreview,
  ],
  providers: [AdminService, RoutingState]
})
export class AdminModule {}
