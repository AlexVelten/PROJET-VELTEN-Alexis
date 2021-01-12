import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsDetailRoutingModule } from './products-detail-routing.module';
import { ProductsDetailComponent } from './products-detail.component';


@NgModule({
  declarations: [
    ProductsDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsDetailRoutingModule
  ]
})
export class ProductsDetailModule { }
