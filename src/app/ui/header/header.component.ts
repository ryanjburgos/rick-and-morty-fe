import { Component, Input, OnInit } from '@angular/core';

export interface IMenuItem {
  path: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() public menuItem!: Array<IMenuItem>;

  constructor() {}

  ngOnInit(): void {}
}
