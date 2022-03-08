import { Component, OnInit } from '@angular/core';
import { IBaseResponse } from '../../shared/models/BaseResponse.model';
import { ICharacter } from '../../shared/models/Character.model';
import { CharactersService } from '../../shared/services/http/characters.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public characters!: Array<ICharacter>;

  constructor(private characterService: CharactersService) {
    console.log();
    this.characterService.getCharacters().subscribe(({ results }: IBaseResponse<ICharacter>) => {
      this.characters = results;
    });
  }

  public ngOnInit(): void {}
}
