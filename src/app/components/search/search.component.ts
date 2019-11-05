import { Component, OnInit, Input } from '@angular/core';
import { SearchService, StartCity, TravelCountry } from './../../services/search.service';

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

  public isShowLists = {
    isShowCities: false,
    isShowCountries: false,
    isShowDate: false,
    isShowNight: false,
    isShowTourists: false
  };
  public isFocus = false;
  public value: string;
  public cityList: StartCity[];
  public searchCityList: StartCity[];
  public counytriesList: TravelCountry[];
  public popularCounytriesList: TravelCountry[];
  public otherCounytriesList: TravelCountry[];

  @Input() searchData: SearchData;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.getResorts();
    this.getCountries();
  }

  getResorts() {
    this.value = this.searchData.departureCity;
    this.searchService.getResorts().subscribe((answer: any) => {
      this.searchCityList = this.cityList = answer.data.sort((a, b) => {
        if (a.name > b.name) { return 1; }
        if (a.name < b.name) { return -1; }
        return 0;
      });
    });
  }

  getCountries() {
    this.searchService.getCountries().subscribe((answer: any) => {
      this.counytriesList = answer.data.sort((a, b) => {
        if (a.name > b.name) { return 1; }
        if (a.name < b.name) { return -1; }
        return 0;
      });
      this.popularCounytriesList = answer.data
        .filter((item: TravelCountry) => item.popular > 0);
      this.otherCounytriesList = answer.data
        .filter((item: TravelCountry) => item.popular === 0);
    });
  }

  onInput(event: InputEvent) {
    this.value = event.target.value;
    this.searchCityList = this.cityList.filter(item => {
      if (event.target.value) {
        const regExp = new RegExp (event.target.value.toLowerCase());
        return regExp.test(item.name.toLowerCase());
      }
    });
  }

  checkCityName(cityName: string) {
    this.value = this.searchData.departureCity = this.cityList.filter(item => {
      return item.name === cityName && cityName.trim();
    }).length ? cityName : this.searchData.departureCity;
  }

  toggleList(input: HTMLElement) {
    if (this.isFocus) {
      this.checkCityName(input.value);
    }

    this.isFocus ? input.blur() : input.focus();
    this.isFocus = !this.isFocus;
    this.isShowLists.isShowCities = !this.isShowLists.isShowCities;
    this.openCloseParams('isShowCities');
  }

  checkboxClick(item: HTMLElement) {
    this.searchData.countryVisited = item.value;
    console.log(this.searchData);
  }

  openCloseParams(params: string) {
    for (const prop in this.isShowLists) {
      if (this.isShowLists.hasOwnProperty( prop )) {
        if (this.this.isShowLists)
        console.log("obj." + prop + " = " + obj[prop]);
      }
    }
  }
}
