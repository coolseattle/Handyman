import { Component, OnInit } from '@angular/core';
import { CustomerService } from './shared/Customer.Service';
import { ActivatedRoute } from '@angular/router';
import { ICustomer } from './shared/index';

@Component({
  template: `
    <div>
        <h1>Recently Enrolled Customers</h1>
        <hr/>
        <div class="row">
        <div *ngFor="let customer of customers" class="col-md-5">
            <customer-thumbnail [customer]="customer"></customer-thumbnail>
        </div>
        </div>
    </div>
    `
})

export class CustomersListComponent implements OnInit {
  customers: ICustomer[];
  constructor(private eventService: CustomerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.customers = this.route.snapshot.data['customers'];
  }
}
