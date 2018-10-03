import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HandymanService } from '../Handyman/shared/Handyman.Service';

@Injectable()
export class HandymanListResolver implements Resolve<any> {
  constructor(private handymanService: HandymanService) {

  }
  resolve() {
    return this.handymanService.getHandymen().map(Handymen => Handymen);
  }
}
