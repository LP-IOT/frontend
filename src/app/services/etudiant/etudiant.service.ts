import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/entities/etudiant/etudiant';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private baseUrl = 'http://adrianpaul-carrieres.fr:3000/api/etudiant';

  constructor(private http: HttpClient) { }

  getEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.baseUrl)
  
  }
}
