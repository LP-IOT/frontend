import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Copie } from 'src/app/entities/copie/copie';
import { Copiedto } from 'src/app/entities/copiedto/copiedto';

@Injectable({
  providedIn: 'root'
})
export class CopieService {

  private baseUrl = 'http://adrianpaul-carrieres.fr:3000/api/copie';

  constructor(private http: HttpClient) { }

  create(copie: Copiedto) {
    return this.http.post(this.baseUrl, copie);
  }}
