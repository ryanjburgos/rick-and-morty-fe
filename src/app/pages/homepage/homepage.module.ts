import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharactersService } from '../../shared/services/http/characters.service';
import { CardModule } from '../../ui/card/card.module';
import { PaginatorModule } from '../../ui/paginator/paginator.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, HomepageRoutingModule, CardModule, PaginatorModule],
  providers: [CharactersService],
})
export class HomepageModule {}
