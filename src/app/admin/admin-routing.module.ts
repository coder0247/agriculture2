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
