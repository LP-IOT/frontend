import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CorrecteurComponent } from '../../forms/correcteur/correcteur/correcteur.component'

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  createCorrecteur() {
    const dialogRef = this.dialog.open(CorrecteurComponent);

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
