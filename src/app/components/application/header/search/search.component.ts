import { Component, OnInit } from '@angular/core';
import { SearchService, TravelCountry } from '../../../../services/search.service';

export class SearchData {
  title: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-auction-nav-search',
  templateUrl: './search.component.html',
})

export class SearchHeaderComponent implements OnInit {
  public countries: Array<TravelCountry>;
  public showResults: false;
  public sortCountries: Array<TravelCountry>;

  constructor(private _searchService: SearchService) {
  }

  ngOnInit() {
    // this._searchService.getContries()
    //   .subscribe((countries: any) => {
    //     this.countries = countries.data;
    //     console.log(this.countries);
    //   });
  }

  onFocus(): void {
    if (!this.countries) {
      this._searchService.getContries()
      .subscribe((countries: any) => {
        this.countries = countries.data;
      });
    }
  }

  onInput(event: InputEvent): void {
    console.log(event.target.value);
    this.countries.filter(country =>
      event.target.value.toLowerCase().test(country.name.toLowerCase()));
  }
}
