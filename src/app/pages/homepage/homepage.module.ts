import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharactersService } from '../../shared/services/http/characters.service';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, HomepageRoutingModule],
  providers: [CharactersService],
})
export class HomepageModule {}
