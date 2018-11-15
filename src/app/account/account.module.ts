import { AddnewproductfrmComponent } from './addnewproductfrm/addnewproductfrm.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InboxComponent } from './inbox/inbox.component';
import { NewadComponent } from './newad/newad.component';
import { HeaderCommonModule } from './../header-common/header-common.module';
import {FooterModule} from '../footer/footer.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActiveadsComponent } from './activeads/activeads.component';
import { ArchiveadsComponent } from './archiveads/archiveads.component';
import { SentComponent } from './sent/sent.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
// import { ImagePreview } from '../directive/image-preview.directive';
import { QuickviewComponent } from './quickview/quickview.component';
import { CroperpopupComponent } from './croperpopup/croperpopup.component';
import { ModalModule } from 'ngx-bootstrap';
import { ProductService } from '../service/product.service';
import { ViewmsgComponent } from './viewmsg/viewmsg.component';
import { SentmsgComponent } from './sentmsg/sentmsg.component';
import { EditadComponent } from './editad/editad.component';
import { EditadsComponent } from './editads/editads.component';
import { PopupComponent } from './popup/popup.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { PagerService } from './../service/pager.service';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ControlService } from './../form/service/control.service';
import { EditFormControlService } from './../service/editformcontrols.service';
import { FvalidationService } from '../service/fvalidation';
import { EditproductfrmComponent } from './editproductfrm/editproductfrm.component';
import { FormControlService } from './../service/formcontrols.service';
import { DataTablesModule } from 'angular-datatables';
import { DeletemyaccountComponent } from './deletemyaccount/deletemyaccount.component';
@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    HeaderCommonModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    ModalModule.forRoot(),
    ImageCropperModule,
    DataTablesModule
  ],
  declarations: [
                    DashboardComponent,
                    InboxComponent,
                    NewadComponent,
                    SidebarComponent,
                    ActiveadsComponent,
                    ArchiveadsComponent,
                    SentComponent,
                    EditprofileComponent,
                    QuickviewComponent,
                    CroperpopupComponent,
                    ViewmsgComponent,
                    SentmsgComponent,
                    EditadComponent,
                    EditadsComponent,
                    PopupComponent,
                    ChangepasswordComponent,
                    AddnewproductfrmComponent,
                    EditproductfrmComponent,
                    DeletemyaccountComponent
                  ],

                    providers: [
                      ProductService , PagerService , ControlService, FormControlService,
                      EditFormControlService, FvalidationService],
})
export class AccountModule { }
