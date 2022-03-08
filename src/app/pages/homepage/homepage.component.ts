import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBaseResponse, IInfo } from '../../shared/models/BaseResponse.model';
import { ICharacter } from '../../shared/models/Character.model';
import { CharactersService } from '../../shared/services/http/characters.service';
import { SpinnerService } from '../../shared/services/utils/spinner.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public characters!: Array<ICharacter>;
  public pageInfo!: IInfo;

  public isLoading$: Observable<boolean> = this.spinner.isLoading$;

  constructor(private characterService: CharactersService, private spinner: SpinnerService) {
    this._loadCharactersAndPageInfo();
  }

  public ngOnInit(): void {}

  public movePage(url: string): void {
    this.spinner.show();
    this.characterService.moveCharactersPage(url).subscribe(({ info, results }: IBaseResponse<ICharacter>) => {
      this.pageInfo = info;
      this.characters = results;
      this.spinner.hide();
    });
  }

  private _loadCharactersAndPageInfo(): void {
    this.spinner.show();
    this.characterService.getCharacters().subscribe(({ info, results }: IBaseResponse<ICharacter>) => {
      this.pageInfo = info;
      this.characters = results;
      this.spinner.hide();
    });
  }
}
