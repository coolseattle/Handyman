import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,  ActivatedRouteSnapshot } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { customerRoutes } from './customer.routes';
import { CustomersListComponent } from './Customer-list.component';
import { CustomerService } from './shared';
import { CustomerListResolver } from './Customer-list-resolver';
import { CustomerThumbnailComponent } from './Customer-list-thumpnail.component';
import { CustomerCreateComponent } from './Customer-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(customerRoutes)
  ],
  declarations: [
    CustomersListComponent,
    CustomerThumbnailComponent,
    CustomerCreateComponent
  ],
  providers: [
    CustomerService,
    CustomerListResolver
  ]
})
export class CustomerModule { }
