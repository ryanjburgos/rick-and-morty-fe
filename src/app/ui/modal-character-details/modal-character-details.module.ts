import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { EpisodesService } from '../../shared/services/http/episodes.service';
import { LocationsService } from '../../shared/services/http/locations.service';
import { ModalCharacterDetailsComponent } from './modal-character-details.component';

@NgModule({
  declarations: [ModalCharacterDetailsComponent],
  exports: [ModalCharacterDetailsComponent],
  imports: [CommonModule, NgbModalModule],
  providers: [LocationsService, EpisodesService],
})
export class ModalCharacterDetailsModule {}
