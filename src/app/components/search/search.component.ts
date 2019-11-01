import { Component, OnInit, Input } from '@angular/core';
import { TravelCountry, SearchService } from './../../services/search.service';

export interface SearchData {
  departureCity: string;
  countryVisited: string;
  startDate: string;
  endDate: string;
  tourists: number;
}

@Component({
  selector: 'app-auction-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent implements OnInit {

  public departureCity = 'Москва';
  public countryList: TravelCountry[];

  @Input() searchData: SearchData;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchService.getCountries().subscribe((answer: any) => this.countryList = answer.data);
    // console.log(this.searchData);
  }
}
