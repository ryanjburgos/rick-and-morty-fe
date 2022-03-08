import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBaseResponse } from '../../models/BaseResponse.model';
import { ICharacter } from '../../models/Character.model';

@Injectable()
export class CharactersService {
  constructor(private http: HttpClient) {}

  public getCharacters(pageNumber: number = 1): Observable<IBaseResponse<ICharacter>> {
    return this.http.get<IBaseResponse<ICharacter>>(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`);
  }

  public moveCharactersPage(url: string): Observable<IBaseResponse<ICharacter>> {
    return this.http.get<IBaseResponse<ICharacter>>(url);
  }
}
