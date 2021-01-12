import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from "./products.component";
import { ProductsFilterComponent } from "../products-filter/products-filter.component";

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsFilterComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
