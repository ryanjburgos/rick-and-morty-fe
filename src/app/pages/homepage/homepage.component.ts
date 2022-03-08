import { Component, OnInit } from '@angular/core';
import { IBaseResponse, IInfo } from '../../shared/models/BaseResponse.model';
import { ICharacter } from '../../shared/models/Character.model';
import { CharactersService } from '../../shared/services/http/characters.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public characters!: Array<ICharacter>;
  public pageInfo!: IInfo;

  constructor(private characterService: CharactersService) {
    this._loadCharactersAndPageInfo();
  }

  public ngOnInit(): void {}

  public movePage(url: string): void {
    this.characterService.moveCharactersPage(url).subscribe(({ info, results }: IBaseResponse<ICharacter>) => {
      this.pageInfo = info;
      this.characters = results;
    });
  }

  private _loadCharactersAndPageInfo(): void {
    this.characterService.getCharacters().subscribe(({ info, results }: IBaseResponse<ICharacter>) => {
      this.pageInfo = info;
      this.characters = results;
    });
  }
}
