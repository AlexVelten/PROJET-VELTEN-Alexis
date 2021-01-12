import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormCustomerRoutingModule } from './form-customer-routing.module';
import { FormCustomerComponent } from './form-customer.component';
import { FormValidationsComponent } from '../form-validations/form-validations.component';
import { PhonePipe } from '../phone.pipe';


@NgModule({
  declarations: [
    FormCustomerComponent,
    FormValidationsComponent,
    PhonePipe
  ],
  imports: [
    CommonModule,
    FormCustomerRoutingModule,
    FormsModule
  ]
})
export class FormCustomerModule { }
