import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FormCustomerComponent } from './form-customer/form-customer.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form-customer', loadChildren: () => import('./form-customer/form-customer.module').then(m => m.FormCustomerModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'detail/:id', loadChildren: () => import('./products-detail/products-detail.module').then(m => m.ProductsDetailModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'account', component: AccountComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
