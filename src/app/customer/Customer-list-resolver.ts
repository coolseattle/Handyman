import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CustomerService } from './shared/Customer.Service';

@Injectable()
export class CustomerListResolver implements Resolve<any> {
  constructor(private customerService: CustomerService) {

  }
  resolve() {
    return this.customerService.getCustomers().map(customers => customers);
  }
}
