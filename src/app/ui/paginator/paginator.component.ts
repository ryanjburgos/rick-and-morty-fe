import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IInfo } from '../../shared/models/BaseResponse.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() public pageInfo!: IInfo;

  @Output() public prev$: EventEmitter<string> = new EventEmitter<string>();
  @Output() public next$: EventEmitter<string> = new EventEmitter<string>();

  public numberOfPages: Array<number> = [];
  public currentPage!: number;

  constructor() {}

  public ngOnInit(): void {
    this.currentPage = this._getCurrentPage();
    this.numberOfPages = this._numberOfPagesToShow();
  }

  public prev(): void {
    this.prev$.emit(this.pageInfo.prev);
  }

  public next(): void {
    this.next$.emit(this.pageInfo.next);
  }

  private _getCurrentPage(): number {
    let currentPage: number;
    if (!!this.pageInfo?.next) {
      let nextPage: string = new URLSearchParams(`?${this.pageInfo?.next.split('?')[1]}`).get('page') as string;
      currentPage = +nextPage - 1;
    } else {
      let prevPage = new URLSearchParams(`?${this.pageInfo?.next.split('?')[1]}`).get('page') as string;
      currentPage = +prevPage + 1;
    }
    return currentPage;
  }

  private _numberOfPagesToShow(): Array<number> {
    let listOfNumber: Array<number> = [1, 2, 3];

    if (this.currentPage === 1) return listOfNumber;

    if (this.currentPage === this.pageInfo?.pages) {
      listOfNumber = [this.pageInfo.pages - 2, this.pageInfo.pages - 1, this.pageInfo.pages];
    } else {
      listOfNumber = [this.currentPage - 1, this.currentPage, this.currentPage + 1];
    }

    return listOfNumber;
  }
}
