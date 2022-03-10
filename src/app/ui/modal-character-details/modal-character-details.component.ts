import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ICharacter } from '../../shared/models/character.model';
import { IEpisode } from '../../shared/models/episode.model';
import { ILocation } from '../../shared/models/location.model';
import { EpisodesService } from '../../shared/services/http/episodes.service';
import { LocationsService } from '../../shared/services/http/locations.service';

@Component({
  selector: 'app-modal-character-details',
  templateUrl: './modal-character-details.component.html',
  styleUrls: ['./modal-character-details.component.scss'],
})
export class ModalCharacterDetailsComponent implements OnInit {
  @Input() character!: ICharacter;

  public origin!: ILocation;
  public location!: ILocation;
  public episodes!: Array<IEpisode>;

  constructor(private activeModal: NgbActiveModal, private locationService: LocationsService, private episodeService: EpisodesService) {}

  public ngOnInit(): void {}

  public onCloseClick(): void {
    this.activeModal.close();
  }

  public loadOriginInfo(origin: Pick<ILocation, 'name' | 'url'>): void {
    if (!!this.origin || origin.url === '') return;
    this.locationService.getLocation(origin.url).subscribe((origin: ILocation) => {
      this.origin = origin;
    });
  }

  public loadLocationInfo(location: Pick<ILocation, 'name' | 'url'>): void {
    if (!!this.location || location.url === '') return;
    this.locationService.getLocation(location.url).subscribe((location: ILocation) => {
      this.location = location;
    });
  }

  public loadAllRelatedEpisode(episode: Array<string>): void {
    if (!!this.episodes) return;
    const episodeIds: Array<string> = episode.map((ep) => ep.split('/')[ep.split('/').length - 1]);
    const ids: string = episodeIds.join(',');
    this.episodeService.getEpisodesByIds(ids).subscribe((episodes: Array<IEpisode> | IEpisode) => {
      if (Array.isArray(episodes)) {
        this.episodes = episodes;
      } else {
        this.episodes = [episodes];
      }
    });
  }
}
