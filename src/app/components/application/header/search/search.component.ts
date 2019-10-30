import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService, TravelCountry } from '../../../../services/search.service';

export class SearchData {
  title: string;
  price: number;
  category: string;
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
  @Output() itemClick = new EventEmitter<TravelCountry>();

  constructor(private _searchService: SearchService) {
  }

  ngOnInit() {

  }

  findCountryThours(country: TravelCountry) {
    const currentDate = new Date();
    this._searchService.getInexpensiveThour(country).subscribe(item => {
      console.log(item);
      this.itemClick.emit(country);
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
    setTimeout(_ => this.showResults = false, 0);
  }
}
