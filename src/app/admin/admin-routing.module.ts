import { MakebestsellerComponent } from './makebestseller/makebestseller.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CreateSubCategoryComponent } from './create-sub-category/create-sub-category.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditSubCategoryComponent } from './edit-sub-category/edit-sub-category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { CroperpopupComponent } from './croperpopup/croperpopup.component';
import { ReportedadsComponent } from './reportedads/reportedads.component';
import { ReportedadviewComponent } from './reportedadview/reportedadview.component';
import { AboutComponent } from './about/about.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsconditionComponent } from './termscondition/termscondition.component';
import { TermsofuseComponent } from './termsofuse/termsofuse.component';
import { SitesettingComponent } from './sitesetting/sitesetting.component';
import { MakemostviewedComponent } from './makemostviewed/makemostviewed.component';
import { MakeonsaleComponent } from './makeonsale/makeonsale.component';
import { MakenewarrivalsComponent } from './makenewarrivals/makenewarrivals.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'category/list',
        component: CategoryListComponent
      },
      {
        path: 'category/add',
        component: CreateCategoryComponent
      },
      {
        path: 'category/:id',
        component: EditCategoryComponent
      },
      {
        path: 'subcategory/add',
        component: CreateSubCategoryComponent
      },
      {
        path: 'subcategory/:id',
        component: EditSubCategoryComponent
      },
      {
        path: 'user/list',
        component: UserListComponent
      },
      {
        path: 'croperpopup',
        component: CroperpopupComponent
      },
      {
        path: 'product/list',
        component: ProductListComponent
      },
      {
        path: 'product/bestseller',
        component: MakebestsellerComponent
      },
      {
        path: 'product/mostviewed',
        component: MakemostviewedComponent
      },
      {
        path: 'product/onsale',
        component: MakeonsaleComponent
      },
      {
        path: 'product/newarrivals',
        component: MakenewarrivalsComponent
      },
      {
        path: 'reportedads/list',
        component: ReportedadsComponent
      },
      {
        path: 'reportedads/view/:id',
        component: ReportedadviewComponent
      },
      {
        path: 'edit/about',
        component: AboutComponent
      },
      {
        path: 'edit/termsofuse',
        component: TermsofuseComponent
      },
      {
        path: 'edit/privacypolicy',
        component: PrivacypolicyComponent
      },
      {
        path: 'edit/termsandcondition',
        component: TermsconditionComponent
      },
      {
        path: 'edit/sitesettings',
        component: SitesettingComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdminRoutingModule {}
