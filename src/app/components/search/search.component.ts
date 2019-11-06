import * as moment from 'moment';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef
} from '@angular/core';
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
  public ru = {
    firstDayOfWeek: 0,
    dayNames: [
      'Воскресенье', 'Понедельник', 'Вторник',
      'Среда', 'Четверг', 'Пятница', 'Суббота'
    ],
    dayNamesShort: ['Вск', 'Пон', 'Втр', 'Сре', 'Чет', 'Пят', 'Субб'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    monthNames: [
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Откябрь', 'Ноябрь', 'Декабрь'
    ],
    monthNamesShort: [
      'Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь',
      'Июль', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'
    ],
    today: 'Сегодня',
    clear: 'Удалить',
    dateFormat: 'mm-dd-yy',
    weekHeader: 'Неделя'
  };
  public isFocus = false;
  public rangeDates: Date;
  public value: string;
  public cityList: StartCity[];
  public searchCityList: StartCity[];
  public counytriesList: TravelCountry[];
  public popularCounytriesList: TravelCountry[];
  public otherCounytriesList: TravelCountry[];
  public inputDatesRange = '';

  @Input() searchData: SearchData;
  @ViewChild('input') inputCity: ElementRef;

  public get nextDate(): Date {
    const date = new Date();
    return new Date(date.setDate(date.getDate() + 3));
  }

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.getResorts();
    this.getCountries();
  }

  getResorts(): void {
    this.value = this.searchData.departureCity;
    this.searchService.getResorts().subscribe((answer: any) => {
      this.searchCityList = this.cityList = answer.data.sort((a, b) => {
        if (a.name > b.name) { return 1; }
        if (a.name < b.name) { return -1; }
        return 0;
      });
    });
  }

  getCountries(): void {
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

  onInput(event): void {
    this.value = event.target.value;
    this.searchCityList = this.cityList.filter(item => {
      if (event.target.value) {
        const regExp = new RegExp (event.target.value.toLowerCase());
        return regExp.test(item.name.toLowerCase());
      }
    });
  }

  checkCityName(cityName: string): void {
    this.value = this.searchData.departureCity = this.cityList.filter(item => {
      return item.name === cityName && cityName.trim();
    }).length ? cityName : this.searchData.departureCity;
  }

  toggleList(input): void {
    if (this.isFocus) {
      this.checkCityName(input.value);
    }

    this.isFocus ? input.blur() : input.focus();
    this.isFocus = !this.isFocus;
    this.isShowLists.isShowCities = !this.isShowLists.isShowCities;
  }

  checkboxClick(item): void {
    this.searchData.countryVisited = item.value;
  }

  openCloseParams(params?: string): void {
    if (params !== 'isShowCities' && this.isShowLists.isShowCities) {
      this.checkCityName(this.inputCity.nativeElement.value);
      this.isFocus = !this.isFocus;
    }

    for (const prop in this.isShowLists) {
      if (this.isShowLists.hasOwnProperty( prop )) {
        if (prop !== params && this.isShowLists[params] || params === undefined) {
          this.isShowLists[prop] = false;
        }
      }
    }
  }

  dateRangeChenges(event: Date[]): void {
    const start = event[0];
    const end = event[1];
    if (start !== null) {
      this.inputDatesRange = this.searchData.startDate =
        `${ start.getFullYear() }.${ start.getDay() }.${ start.getMonth() + 1}`;
    }

    if (end !== null) {
      this.searchData.endDate =
        `${ end.getFullYear() }.${ end.getDay() }.${ end.getMonth() + 1}`;
      this.inputDatesRange = `${ this.inputDatesRange } - ${ this.searchData.endDate }`;
    }
  }

  searchThors() {
    // закрываем все контролы
    this.openCloseParams();
  }
}
