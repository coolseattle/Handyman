import { Component, Input } from '@angular/core';
import { IHandyMan } from '../Handyman/shared/Handyman.model';
import {NgbRating} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: `Handyman-thumbnail`,
  template: `
  <div [routerLink]="['/handyman/edit', Handyman.id]" class="card well hoverwell thumbnail" style="max-width: 15rem; max-height:25rem;">
    <img style="width:14rem; height:24rem;" class="card-img-top Thumbnail rounded" src="{{Handyman?.PhotoImageUrl}}" alt="Handyman image" >
    <div class="card-body"> <!-- card-img-overlay -->
      <h4 class="card-title">{{Handyman?.fname}} {{Handyman?.lname}} </h4>
      <div class="card-text">
        Phone: {{Handyman?.phone}} <BR>
        <div *ngIf="Handyman?.location">
          <span>Location: {{Handyman?.location?.Address1}}</span>
          <span class="pad-left">{{Handyman?.location?.city}}, {{Handyman?.location?.zipcode}}</span>
        </div>
      </div>
      <ngb-rating rate="{{Handyman?.ratingaverage}}" max="5" [readonly]="true" >
         <ng-template let-fill="fill" let-index="index">
             <span class="star" [class.filled]="fill === 100" [class.bad]="index < 3">&#9733;</span>
        </ng-template>
      </ngb-rating>
      <!-- a  [routerLink]="['/handyman/edit', Handyman.id]" class="btn btn-primary">See Profile</a -->
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
export class HandymanThumbnailComponent {
  @Input() Handyman: IHandyMan;
}
