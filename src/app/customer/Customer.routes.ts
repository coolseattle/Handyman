import { CustomersListComponent } from './Customer-list.component';
import { CustomerListResolver } from './Customer-list-resolver';
import {CustomerCreateComponent } from './Customer-create.component';


export const customerRoutes = [
  { 
    path: 'list', component: CustomersListComponent, resolve: {customers: CustomerListResolver}
  },
  {path: 'edit/:id', component: CustomerCreateComponent}
];
