import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,  ActivatedRouteSnapshot } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HandymanRoutes } from './Handyman.routes';
import { HandymanListComponent } from './Handyman-list.component';
import { HandymanService } from './shared';
import { HandymanListResolver } from './Handyman-list-resolver.service';
import { HandymanThumbnailComponent } from './Handyman-list-thumpnail.component';
import { HandymanCreateComponent } from './Handyman-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(HandymanRoutes)
  ],
  declarations: [
    HandymanListComponent,
    HandymanThumbnailComponent,
    HandymanCreateComponent
    
  ],
  providers: [
    HandymanService,
    HandymanListResolver
  ]
})
export class HandymanModule { }
