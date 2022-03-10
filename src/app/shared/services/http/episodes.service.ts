import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEpisode } from '../../models/episode.model';

@Injectable()
export class EpisodesService {
  constructor(private http: HttpClient) {}

  public getEpisodesByIds(ids: string): Observable<Array<IEpisode> | IEpisode> {
    return this.http.get<Array<IEpisode> | IEpisode>(`https://rickandmortyapi.com/api/episode/${ids}`);
  }
}
