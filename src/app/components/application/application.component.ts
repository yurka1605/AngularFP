import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SearchDataCountry } from './header/search/search.component';
import { SearchData } from '../search/search.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'auction-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent implements OnInit {

  public searchData = {
    departureCity: 'Москва',
    countryVisited: '',
    startDate: '',
    endDate: '',
    tourists: '',
  };

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    ) {
  }

  ngOnInit() {
  }

  showThours(searchDatas: SearchDataCountry) {
    this.router.navigate(['/search'], { queryParams: searchDatas.country });
    this.searchData.countryVisited = searchDatas.country.name;
    this.cdr.markForCheck();
  }
}
