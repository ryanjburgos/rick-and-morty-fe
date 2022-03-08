import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CharactersService {
  constructor(private http: HttpClient) {}

  public getCharacters(pageNumber: number = 1): Observable<any> {
    return this.http.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`);
  }
}
