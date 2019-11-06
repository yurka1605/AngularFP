import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TravelCountry } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})

export class SearchListComponent implements OnInit {

  @Input() borderColor: string;
  @Input() list: TravelCountry[];
  @Output() itemClick = new EventEmitter<TravelCountry>();

  constructor() {
  }

  ngOnInit() {
  }
}
