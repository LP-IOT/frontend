import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOneRoutingModule } from './page-one-routing.module';
import { PageOneComponent } from './page-one.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    PageOneComponent
  ],
  imports: [
    CommonModule,
    PageOneRoutingModule,
    MatDialogModule
  ]
})
export class PageOneModule { }
