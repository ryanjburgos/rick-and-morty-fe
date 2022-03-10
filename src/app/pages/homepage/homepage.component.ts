import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { IBaseResponse, IInfo } from '../../shared/models/base-response.model';
import { ICharacter } from '../../shared/models/character.model';
import { CharactersService } from '../../shared/services/http/characters.service';
import { SpinnerService } from '../../shared/services/utils/spinner.service';
import { ModalCharacterDetailsComponent } from '../../ui/modal-character-details/modal-character-details.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public characters!: Array<ICharacter>;
  public pageInfo!: IInfo;

  public isLoading$: Observable<boolean> = this.spinner.isLoading$;

  constructor(private characterService: CharactersService, private spinner: SpinnerService, private modal: NgbModal) {
    this.loadCharactersByPageNumber(1);
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

  public loadCharactersByPageNumber(n: number): void {
    this.spinner.show();
    this.characterService.getCharacters(n).subscribe(({ info, results }: IBaseResponse<ICharacter>) => {
      this.pageInfo = info;
      this.characters = results;
      this.spinner.hide();
    });
  }

  public onOpenDetails(character: ICharacter): void {
    const modalRef = this.modal.open(ModalCharacterDetailsComponent, {
      size: 'xl',
      scrollable: true,
    });

    modalRef.componentInstance.character = character;
  }
}
