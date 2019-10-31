import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService, TravelCountry, Thour } from '../../../../services/search.service';

export class SearchData {
  title: string;
  price: number;
  category: string;
}

export interface SearchDataCountry {
  markedData: Thour[];
  country: TravelCountry;
}

@Component({
  selector: 'app-auction-nav-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchHeaderComponent implements OnInit {

  countries: TravelCountry[];
  showResults = false;
  sortCountries: TravelCountry[];
  @Output() itemClick = new EventEmitter<SearchDataCountry>();

  // tslint:disable-next-line: variable-name
  constructor(private _searchService: SearchService) {
  }

  ngOnInit() {
  }

  findCountryThours(country: TravelCountry) {
    const customUrl = 'https://c18.travelpayouts.com/click?shmarker=254035&promo_id=771&source_type=customlink&type=click&custom_url=';
    this._searchService.getInexpensiveThour(country).subscribe((answer: any) => {
      const markedData = answer.data.map(thour => {
        thour.searchPageUrl = `${ customUrl }${ encodeURIComponent(thour.searchPageUrl) }`;
        thour.tourPageUrl = `${ customUrl }${ encodeURIComponent(thour.tourPageUrl) }`;
        return thour;
      });
      const searchData = { markedData, country };
      this.itemClick.emit(searchData);
    });
  }

  onFocus(): void {
    if (!this.countries) {
      this._searchService.getCountries().subscribe((countries: any) => {
        this.sortCountries = this.countries = countries.data;
      });
    }
    this.showResults = true;
  }

  onInput(event): void {
    this.sortCountries = this.countries.filter(country => {
      new RegExp (event.target.value.toLowerCase()).test(country.name.toLowerCase());
    });

    this.showResults = this.sortCountries.length === 0 ? false : true;
  }

  closeList(): void {
    // ставим таймаут, чтобы успевал отрабатывать клик по элементу списка
    setTimeout(_ => this.showResults = false, 0);
  }
}
