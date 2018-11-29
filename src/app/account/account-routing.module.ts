import { PopupComponent } from './popup/popup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InboxComponent } from './inbox/inbox.component';
import { NewadComponent } from './newad/newad.component';
import { ActiveadsComponent } from './activeads/activeads.component';
import { ArchiveadsComponent } from './archiveads/archiveads.component';
import { SentComponent } from './sent/sent.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { QuickviewComponent } from './quickview/quickview.component';
import { ViewmsgComponent } from './viewmsg/viewmsg.component';
import { SentmsgComponent } from './sentmsg/sentmsg.component';
import { EditadComponent } from './editad/editad.component';
import { EditadsComponent } from './editads/editads.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CroperpopupComponent } from './croperpopup/croperpopup.component';
import { DeletemyaccountComponent } from './deletemyaccount/deletemyaccount.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'inbox',
    component: InboxComponent,
  },
  {
    path: 'newad',
    component: NewadComponent
  },
  {
    path: 'editad',
    component: EditadComponent
  },
  {
    // show list of ads to edit
    path: 'editads',
    component: EditadsComponent
  },
  {
    path: 'activeads',
    component: ActiveadsComponent
  },
  {
    path: 'archiveads',
    component: ArchiveadsComponent
  },
  {
    path: 'sent',
    component: SentComponent
  },
  {
    path: 'profile',
    component: EditprofileComponent
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent
  },
  {
    path: 'quickview',
    component: QuickviewComponent
  },
  {
    path: 'croperpopup',
    component: CroperpopupComponent
  },
  {
    path: 'popup',
    component: PopupComponent
  },
  {
    path: 'view',
    component: ViewmsgComponent
  },
  {
    path: 'viewsent',
    component: SentmsgComponent
  },
  {
    path: 'deletemyaccount',
    component: DeletemyaccountComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AccountRoutingModule { }
