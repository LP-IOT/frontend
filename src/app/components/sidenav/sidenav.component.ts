import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  opened!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.opened = true;
  }

  open() {
    this.opened = !this.opened;
  }

}
