import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICharacter } from '../../shared/models/character.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() public character!: ICharacter;

  @Output() public detailClick$: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  public ngOnInit(): void {}

  public onDetailClick(id: number): void {
    this.detailClick$.emit(id);
  }
}
