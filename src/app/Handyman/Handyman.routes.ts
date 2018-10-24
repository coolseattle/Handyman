import { HandymanListComponent } from './Handyman-list.component';
import { HandymanListResolver } from './Handyman-list-resolver.service';
import {HandymanCreateComponent } from './Handyman-create.component';
import { AdminGuardService } from './../router.guard.service/index';

export const HandymanRoutes = [
  { 
    path: 'list', component: HandymanListComponent, resolve: {Handymen: HandymanListResolver}
  },
  { 
    path: 'edit/:id', 
    component: HandymanCreateComponent,
    canActivate: [AdminGuardService]
  }
];
