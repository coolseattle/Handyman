import { Component, Input } from '@angular/core';
import { ICustomer } from './shared/index';

@Component({
  selector: `customer-thumbnail`,
  template: `
    <div [routerLink]="['/customer/edit', customer.id]" class="well hoverwell thumbnail">
      <h2>{{customer?.fname | uppercase}} {{customer?.lname | uppercase}} </h2>
      <div>Phone: {{customer?.phone | currency:'USD'}}</div>
      <div *ngIf="customer?.location">
        <span>Location: {{customer?.location?.Address1}}</span>
        <span class="pad-left">{{customer?.location?.city}}, {{customer?.location?.zipcode}}</span>
      </div>
      <div *ngIf="customer?.PhotoImageUrl">
        Online URL: {{customer?.PhotoImageUrl}}
      </div>
    </div>
    `,
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
    ` ]
})
export class CustomerThumbnailComponent {
  @Input() customer: ICustomer;
}
