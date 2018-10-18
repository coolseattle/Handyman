import { Component, Input } from '@angular/core';
import { ICustomer } from './shared/index';
import {NgbRating} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: `customer-thumbnail`,
  template: `

  <div [routerLink]="['/customer/edit', customer.id]" class="card well hoverwell thumbnail" style="max-width: 15rem; max-height:25rem;">
  <img style="width:15rem; height:25rem;" class="card-img-top img-fluid Thumbnail" src="{{customer?.PhotoImageUrl}}" alt="customer image">
  <div class="card-body"> <!-- card-img-overlay -->
    <h4 class="card-title">{{customer?.fname}} {{customer?.lname}} </h4>
    <div class="card-text">
      Phone: {{customer?.phone}} <BR>
      <div *ngIf="customer?.location">
        <span>Location: {{customer?.location?.Address1}}</span>
        <span class="pad-left">{{customer?.location?.city}}, {{customer?.location?.zipcode}}</span>
      </div>
    </div>
    <ngb-rating rate="{{3}}" max="5" readonly="true"></ngb-rating>
    <!-- a  [routerLink]="['/customer/edit', customer.id]" class="btn btn-primary">See Profile</a -->
  </div>
</div>
<div>&nbsp;</div>
`,
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
    .bad {
      color: #deb0b0;
    }
    .filled.bad {
      color: #ff1e1e;
    }
    ` ]
})
export class CustomerThumbnailComponent {
  @Input() customer: ICustomer;
}
