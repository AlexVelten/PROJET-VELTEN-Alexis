import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsDetailComponent } from './products-detail.component'

const routes: Routes = [
  {
    path: '',
    component: ProductsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsDetailRoutingModule { }
