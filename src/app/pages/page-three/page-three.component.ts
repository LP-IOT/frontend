import { Component, OnInit } from '@angular/core';
import { Domaine } from 'src/app/entities/domaine/domaine';
import { DomaineService } from 'src/app/services/domaine/domaine.service';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {

  domaine!: Domaine[];

  constructor(private service:DomaineService) { }

  ngOnInit(): void {
    this.service.getDomaines();
  }

}
