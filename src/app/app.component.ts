import { Component } from '@angular/core';
import { AppRoutingEnum } from './app-routing.enum';
import { IMenuItem } from './ui/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public menuItem: Array<IMenuItem> = [
    {
      path: AppRoutingEnum.HOMEPAGE,
      label: 'Homepage',
    },
  ];
}
