import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CustomerService } from './shared/Customer.Service';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ICustomer } from './shared/Service.model';

@Injectable()
export class CustomerListResolver implements Resolve<any> {

  constructor(private customerService: CustomerService) {

  }

 resolve() : Observable<ICustomer[]> {
     return this.customerService.getCustomers();
  }
}
