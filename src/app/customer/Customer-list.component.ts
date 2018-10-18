import { Component, OnInit } from '@angular/core';
import { CustomerService } from './shared/Customer.Service';
import { ActivatedRoute } from '@angular/router';
import { ICustomer } from './shared/index';
import {NgbRating} from '@ng-bootstrap/ng-bootstrap';

@Component({
  template: `
    <div>
        <h1>Recently Enrolled Customers</h1>
        <hr/>
        <div class="row">
        <div *ngFor="let customer of customers" class="col-md-3">
           <div class="card-deck">
             <customer-thumbnail [customer]="customer"></customer-thumbnail>
            </div>
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
