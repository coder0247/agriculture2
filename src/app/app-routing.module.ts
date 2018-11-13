import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../app/home/home.module#HomeModule'
  },
  {
    path: 'user/register',
    loadChildren: '../app/user/user.module#UserModule'
  },
  {
    path: 'user/account',
    loadChildren: '../app/account/account.module#AccountModule'
  },
  {
    path: 'user/signin',
    loadChildren: '../app/user/user.module#UserModule'
  },
  {
    path: 'search/subcategory/:subcatid',
    loadChildren: '../app/search/search.module#SearchModule'
  },
  {
    path: 'products/:subcatid',
    loadChildren: '../app/productlist/productlist.module#ProductListModule'
  },
  {
    path: 'reset/password/:resetpwid',
    loadChildren: '../app/resetpassword/resetpassword.module#ResetpasswordModule'
  },
  {
    path: 'newsletter/verify/:nwcode',
    loadChildren: '../app/nwverify/nwverify.module#NwverifyModule'
  },
  {
    path: 'orders',
    loadChildren: '../app/orders/orders.module#OrdersModule'
  },
  {
    path: 'product/detail/:id',
    loadChildren:
      '../app/singleproduct/singleproduct.module#SingleproductModule'
  },
  {
    path: 'category/:catid',
    loadChildren: '../app/category/category.module#CategoryModule'
  },
  {
    path: 'admin',
    loadChildren: '../app/admin/admin.module#AdminModule'
  },
  {
    path: 'about',
    loadChildren: '../app/about/about.module#AboutModule'
  },
  {
    path: 'privacy',
    loadChildren: '../app/privacypolicy/privacypolicy.module#PrivacypolicyModule'
  },
  {
    path: 'termscondition',
    loadChildren: '../app/termscondition/termscondition.module#TermsconditionModule'
  },
  {
    path: 'sitemap',
    loadChildren: '../app/sitemap/sitemap.module#SitemapModule'
  },
  {
    path: 'termsofuse',
    loadChildren: '../app/termsofuse/termsofuse.module#TermsofuseModule'
  },
  {
    path: 'contact',
    loadChildren: '../app/contact/contact.module#ContactModule'
  },
  {
    path: 'verify/:msgid',
    loadChildren: '../app/verify/verify.module#VerifyModule'
  },
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  {
    path: '**',
    loadChildren: '../app/notfound/notfound.module#NotfoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot( routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
