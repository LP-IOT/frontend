import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Domaine } from 'src/app/entities/domaine/domaine';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  private baseUrl = 'http://adrianpaul-carrieres.fr:3000/api/domaine';

  constructor(private http: HttpClient) { }

  getDomaines(): Observable<Domaine[]> {
    return this.http.get<Domaine[]>(this.baseUrl)
  }
}
