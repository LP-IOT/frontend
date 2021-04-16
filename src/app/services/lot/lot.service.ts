import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lot } from 'src/app/entities/lot/lot';

@Injectable({
  providedIn: 'root'
})
export class LotService {

  private baseUrl = 'http://adrianpaul-carrieres.fr:3000/api/lot';

  constructor(private http: HttpClient) { }

  getLots(): Observable<Lot[]> {
    return this.http.get<Lot[]>(this.baseUrl);
  }
}
