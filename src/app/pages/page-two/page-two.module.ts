import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTwoRoutingModule } from './page-two-routing.module';
import { PageTwoComponent } from './page-two.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PageTwoComponent
  ],
  imports: [
    CommonModule,
    PageTwoRoutingModule,
    MatIconModule
  ]
})
export class PageTwoModule { 

  

}
