import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Epreuve } from 'src/app/entities/epreuve/epreuve';

@Injectable({
  providedIn: 'root'
})
export class EpreuveService {

  private baseUrl = 'http://adrianpaul-carrieres.fr:3000/api/epreuve';

  constructor(private http: HttpClient) { }

  getEpreuves(): Observable<Epreuve[]> {
    return this.http.get<Epreuve[]>(this.baseUrl)
  
  }
}
