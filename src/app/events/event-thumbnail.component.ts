import { Component, Input } from '@angular/core'
import { IEvent } from './shared/index'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2><a [routerLink]="['/events', event.id]" class="hoverwell"> {{event?.name | uppercase}} </a></h2>
      <div>Service Date: {{event?.date | date:'shortDate'}}</div>
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Customer: <a [routerLink]="['/customer/edit', event.Customerid]"> {{event?.Customername}} </a> </div>
      <span>Handyman: <a [routerLink]="['/handyman/edit', event.Handymanid]">{{event?.HandymanName}} </a></span>
      <div *ngIf="event?.location">
        <span>location: {{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
      </div>
    </div>
  `,
  styles: [`
    .thumbnail { min-height: 210px; }
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