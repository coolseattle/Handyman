import { Component, Input } from '@angular/core';
import { ICustomer } from './shared/index';
import {NgbRating} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: `customer-thumbnail`,
  template: `

  <div [routerLink]="['/customer/edit', customer.id]" class="card well hoverwell thumbnail">
  <img class="card-img-top img-fluid Thumbnail" src="{{customer?.PhotoImageUrl}}" alt="customer image">
  <div class="card-body"> <!-- card-img-overlay -->
    <h4 class="card-title">{{customer?.fname}} {{customer?.lname}} </h4>
    <div class="card-text">
      Phone: {{customer?.phone}} <BR>
      <div *ngIf="customer?.location">
        <span>Location: {{customer?.location?.Address1}}</span>
        <span class="pad-left">{{customer?.location?.city}}, {{customer?.location?.zipcode}}</span>
      </div>
    </div>
    <ngb-rating rate="{{8}}"></ngb-rating>
    <!-- a  [routerLink]="['/customer/edit', customer.id]" class="btn btn-primary">See Profile</a -->
  </div>
</div>
<div>&nbsp;</div>
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
