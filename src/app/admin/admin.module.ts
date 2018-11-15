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
// import { ImagePreview } from '../directive/image-preview.directive';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ModalModule } from 'ngx-bootstrap';

import { ReportedadsComponent } from './reportedads/reportedads.component';
import { ReportedadviewComponent } from './reportedadview/reportedadview.component';
import { TruncatePipe } from '../pipe/truncate.pipe';
import { AboutComponent } from './about/about.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { TermsofuseComponent } from './termsofuse/termsofuse.component';
import { SitesettingComponent } from './sitesetting/sitesetting.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { MakebestsellerComponent } from './makebestseller/makebestseller.component';
import { MakemostviewedComponent } from './makemostviewed/makemostviewed.component';
import { MakeonsaleComponent } from './makeonsale/makeonsale.component';
import { MakenewarrivalsComponent } from './makenewarrivals/makenewarrivals.component';
import { DataTablesModule } from 'angular-datatables';
import { FormfieldsComponent } from './formfields/formfields.component';
import { AdminConfigControlService } from '../service/adminconfigcontrol';

import { ControlService } from './configformfield/service/control.service';
import { CroperpopupComponent } from './croperpopup/croperpopup.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { PagerService } from './../service/pager.service';
import { PopupComponent } from './popup/popup.component';
import { QuickviewComponent } from './quickview/quickview.component';
import { OwlModule } from 'ngx-owl-carousel';
import { UseractionComponent } from './useraction/useraction.component';
@NgModule({
  imports: [
  CommonModule,
    CKEditorModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    ModalModule.forRoot(),
    ImageCropperModule,
    DataTablesModule,
    OwlModule
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
    CroperpopupComponent,
    ReportedadsComponent,
    ReportedadviewComponent,
    TruncatePipe,
    AboutComponent,
    PrivacypolicyComponent,
    TermsconditionComponent,
    TermsofuseComponent,
    SitesettingComponent,
    MakebestsellerComponent,
    MakemostviewedComponent,
    MakeonsaleComponent,
    MakenewarrivalsComponent,
    FormfieldsComponent,
    DeleteproductComponent,
    PopupComponent,
    QuickviewComponent,
    UseractionComponent
  ],
  providers: [AdminService, RoutingState, AdminConfigControlService, ControlService, PagerService]
})
export class AdminModule {}
