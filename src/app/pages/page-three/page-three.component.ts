import { Component, OnInit } from '@angular/core';
import { Domaine } from 'src/app/entities/domaine/domaine';
import { Etudiant } from 'src/app/entities/etudiant/etudiant';
import { EtudiantService } from 'src/app/services/etudiant/etudiant.service';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {

  etudiants!: Etudiant[];

  constructor(private service:EtudiantService) { }

  ngOnInit(): void {
    console.log("test")
    this.service.getEtudiants().subscribe(etus => {
      console.log(etus)
      etus.forEach(e => {
        this.etudiants.push(e);
        console.log(e)
      });
      
    });

  }

}
