import { Component, OnInit } from '@angular/core';
import { Correcteur } from 'src/app/entities/correcteur/correcteur';
import { CorrecteurService } from 'src/app/services/correcteur/correcteur.service';

@Component({
  selector: 'app-correcteur',
  templateUrl: './correcteur.component.html',
  styleUrls: ['./correcteur.component.scss']
})
export class CorrecteurComponent implements OnInit {

  value!: string;

  constructor(private service: CorrecteurService) {
  }

  ngOnInit(): void {
    this.value = '';
  }

  send() {
    console.log("sending : " + this.value)
    let correcteur = new Correcteur();
    correcteur.pseudo = this.value;
    this.service.create(correcteur).subscribe(res => {
      console.log("result : " + res);
    })
  }

}
