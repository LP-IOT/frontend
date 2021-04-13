import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  deployed!: boolean;
  retracted!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.deploy();
  }

  deploy() {
    this.deployed = true;
    this.retracted = false;
    console.log("deployed")
  }

  retract() {
    this.deployed = false;
    this.retracted = true;
    console.log("retracted")
  }

  advise() {
    if(this.deployed) {
      this.retract();
      return;
    }
    else if(this.retracted) {
      this.deploy();
      return;
    }
  }

}
