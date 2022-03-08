import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../shared/services/http/characters.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private characterService: CharactersService) {
    console.log();
    this.characterService.getCharacters().subscribe((res) => {
      console.log(res);
    });
  }

  public ngOnInit(): void {}
}
