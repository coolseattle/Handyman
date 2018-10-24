import { Component, Input } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="card" style="width: 14rem; margin-top:0; ">
       <a [routerLink]="['/events', event.id]" class="btn btn-primary"> 
       <h6 class="card-title" style="text-align: center">{{event?.name}}</h6>
       </a>
       <div class="card-body">
          <!-- <img class="img-thumbnail img-responsive  pull-right" src="{{ event?.imageUrl}}" alt="{{event?.name}}"> -->
          <h6 class="card-subtitle mb-2 text-muted">Service Date: {{event?.date | date:'shortDate'}}.</h6>
          <div class="card-text">
          <div *ngIf="event?.location" class="small">
              <span>location: {{event?.location?.city}}, {{event?.location?.country}}</span>
          </div>
          <div>Customer:<a  class="card-link" [routerLink]="['/customer/edit', event.Customerid]"> {{event?.Customername}} </a> </div>
          <div>Handy Man:<a class="card-link" [routerLink]="['/handyman/edit', event.Handymanid]">{{event?.HandymanName}} </a> </div>
         </div>
        </div>
    </div>
    
    
    <div>&nbsp;</div>
    
  `,
  styles: [`
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class EventThumbnailComponent {
  @Input() event:IEvent

  getStartTimeStyle():any {
    if (this.event && this.event.time === '8:00 am')
      return {color: '#003300', 'font-weight': 'bold'}
    return {}
  }
}