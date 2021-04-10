import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule, 
    MatSidenavModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SidenavModule { }
