import { Component, Input } from '@angular/core';
import { IHandyMan } from '../Handyman/shared/Handyman.model';

@Component({
  selector: `Handyman-thumbnail`,
  template: `
    <div [routerLink]="['/handyman/edit', Handyman.id]" class="well hoverwell thumbnail">
      <h2>{{Han?.fname | uppercase}} {{Handyman?.lname | uppercase}} </h2>
      <div>Phone: {{Handyman?.phone}}</div>
      <div *ngIf="Handyman?.location">
        <span>Location: {{Handyman?.location?.Address1}}</span>
        <span class="pad-left">{{Handyman?.location?.city}}, {{Handyman?.location?.zipcode}}</span>
      </div>
      <div *ngIf="Handyman?.PhotoImageUrl">
        Online URL: {{Handyman?.PhotoImageUrl}}
      </div>
    </div>
    `,
  styles: [`
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
    ` ]
})
export class HandymanThumbnailComponent {
  @Input() Handyman: IHandyMan;
}
