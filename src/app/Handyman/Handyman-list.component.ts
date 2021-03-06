import { Component, OnInit } from '@angular/core';
import { HandymanService } from  '../Handyman/shared/Handyman.Service';
import { ActivatedRoute } from '@angular/router';
import { IHandyMan } from '../Handyman/shared/Handyman.model';

@Component({
  template: `
    <div>
        <h1>Top Handymen</h1>
        <hr/>
        <div class="row">
        <div *ngFor="let handyman of Handymen" class="col-md-3">
            <div class="card-deck">
                <Handyman-thumbnail [Handyman]="handyman"></Handyman-thumbnail>
             </div>
        </div>
        </div>
    </div>
    `
})

export class HandymanListComponent implements OnInit {
  Handymen: IHandyMan[];
  constructor(private handymanService: HandymanService, private route: ActivatedRoute) {
  }

  ngOnInit() {
   this.Handymen =  this.route.snapshot.data['Handymen'];
  }


}
