import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HandymanService } from '../Handyman/shared/Handyman.Service';
import { Observable } from 'rxjs';


@Injectable()
export class HandymanListResolver implements Resolve<any> {
  constructor(private handymanService: HandymanService) {
  }
  resolve() : Observable<any> {
    return this.handymanService.getHandymen();
  }
}
