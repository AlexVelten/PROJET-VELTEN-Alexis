import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormCustomerComponent } from './form-customer.component';

const routes: Routes = [
  {
    path: '',
    component: FormCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormCustomerRoutingModule { }
