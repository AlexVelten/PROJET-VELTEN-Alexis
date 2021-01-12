import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

import { Client } from './models/client';
import { Pipe } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { FormCustomerComponent } from './form-customer/form-customer.component';
import { PhonePipe } from './phone.pipe';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductState } from "../shared/states/product-state";
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([ProductState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
