import { Component, OnInit, HostBinding } from '@angular/core';
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
  // @HostBinding() {

  // }
  public countries: Array<TravelCountry>;

  constructor(private _searchService: SearchService) {
  }

  ngOnInit() {
    this._searchService.getContries()
      .subscribe((countries: any) => {
        this.countries = countries.data;
        console.log(this.countries);
      });
  }
}
