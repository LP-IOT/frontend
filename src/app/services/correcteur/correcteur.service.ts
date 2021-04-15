import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Correcteur } from 'src/app/entities/correcteur/correcteur';

@Injectable({
  providedIn: 'root'
})
export class CorrecteurService {

  private baseUrl = 'http://adrianpaul-carrieres.fr:3000/correcteur';

  constructor(private http: HttpClient) { }

  create(correcteur: Correcteur) {
    return this.http.post(this.baseUrl, correcteur);
  }

}
