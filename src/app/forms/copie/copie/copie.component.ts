import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Domaine } from 'src/app/entities/domaine/domaine';
import { Epreuve } from 'src/app/entities/epreuve/epreuve';
import { Etudiant } from 'src/app/entities/etudiant/etudiant';
import { Lot } from 'src/app/entities/lot/lot';
import { CopieService } from 'src/app/services/copie/copie.service';
import { DomaineService } from 'src/app/services/domaine/domaine.service';
import { EpreuveService } from 'src/app/services/epreuve/epreuve.service';
import { EtudiantService } from 'src/app/services/etudiant/etudiant.service';
import { LotService } from 'src/app/services/lot/lot.service';
import {map, startWith} from 'rxjs/operators';
import { Copie } from 'src/app/entities/copie/copie';
import { Copiedto } from 'src/app/entities/copiedto/copiedto';

@Component({
  selector: 'app-copie',
  templateUrl: './copie.component.html',
  styleUrls: ['./copie.component.scss']
})
export class CopieComponent implements OnInit {

  domaines: Domaine[] = [];
  domainesOptions: string[] = [];
  filteredDomainesOptions!: Observable<string[]>;
  domaineControl = new FormControl();

  etudiants: Etudiant[] = [];
  etudiantsOptions: string[] = [];
  filteredEtusOptions!: Observable<string[]>;
  etuControl = new FormControl();

  lots: Lot[] = [];
  lotsOptions: string[] = [];
  filteredLotsOptions!: Observable<string[]>;
  lotControl = new FormControl();

  epreuves: Epreuve[] = [];
  epreuvesOptions: string[] = [];
  filteredEpreuvesOptions!: Observable<string[]>;
  epreuveControl = new FormControl();

  note!: number;

  
  

  constructor(private copieService: CopieService, private domaineService: DomaineService, private etudiantService: EtudiantService, private lotService: LotService, private epreuveService: EpreuveService) { }

  ngOnInit(): void {
    this.domaineService.getDomaines().subscribe(datas => {
      datas.forEach(domaine => {
        this.domaines.push(domaine);
      });
      this.domaines.forEach(domaine => {
        this.domainesOptions.push(domaine.nom);
      });
    });
    this.etudiantService.getEtudiants().subscribe(datas => {
      datas.forEach(etudiant => {
        this.etudiants.push(etudiant);
      });
      this.etudiants.forEach(etu => {
        this.etudiantsOptions.push(etu.prenom + ' ' + etu.nom);
      })
    });
    this.lotService.getLots().subscribe(datas => {
      datas.forEach(lot => {
        this.lots.push(lot);
      });
      this.lots.forEach(lot => {
        this.lotsOptions.push(lot.numLot);
      });
    });
    this.epreuveService.getEpreuves().subscribe(datas => {
      datas.forEach(epreuve => {
        this.epreuves.push(epreuve);
      });
      this.epreuves.forEach(epreuve => {
        this.epreuvesOptions.push(epreuve.nom);
      });
      console.log(this.epreuvesOptions)
    });

    this.filteredEtusOptions = this.etuControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterEtus(value))
    );
    this.filteredDomainesOptions = this.domaineControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterDomaines(value))
    );
    this.filteredLotsOptions = this.lotControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterLots(value))
    );
    this.filteredEpreuvesOptions = this.epreuveControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterEpreuves(value))
    );
  }

  private _filterEtus(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.etudiantsOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private _filterDomaines(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.domainesOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private _filterLots(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.lotsOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private _filterEpreuves(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.epreuvesOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  send() {
    let copie = new Copiedto();
    copie.note = this.note;
    this.domaines.forEach(domaine => {
      if(domaine.nom === this.domaineControl.value) {
        copie.idDomaine = domaine.id;
      }
    });
    this.etudiants.forEach(etu => {
      if(etu.prenom + ' ' + etu.nom === this.etuControl.value) {
        copie.idEtu = etu.idetudiant;
      }
    });
    this.lots.forEach(lot => {
      if(lot.numLot === this.lotControl.value) {
        copie.idLot = lot.id;
      }
    });
    this.epreuves.forEach(epreuve => {
      if(epreuve.nom === this.epreuveControl.value) {
        copie.idEpreuve = epreuve.id;
      }
    });
    console.log(copie);
    this.copieService.create(copie).subscribe(res => {
      console.log("sent : " + copie);
      console.log(res)
    });
  }

}
