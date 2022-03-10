import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocation } from '../../models/location.model';

@Injectable()
export class LocationsService {
  constructor(private http: HttpClient) {}

  public getLocation(url: string): Observable<ILocation> {
    return this.http.get<ILocation>(url);
  }
}
