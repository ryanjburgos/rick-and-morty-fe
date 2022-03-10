import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CharactersService } from '../../shared/services/http/characters.service';
import { CardModule } from '../../ui/card/card.module';
import { ModalCharacterDetailsModule } from '../../ui/modal-character-details/modal-character-details.module';
import { PaginatorModule } from '../../ui/paginator/paginator.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, HomepageRoutingModule, CardModule, PaginatorModule, NgbModalModule, ModalCharacterDetailsModule],
  providers: [CharactersService],
})
export class HomepageModule {}
