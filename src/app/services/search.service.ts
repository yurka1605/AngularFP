import { TravelCountry } from './search.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { $ } from 'protractor';

export interface TravelCountry {
  id: number;
  name: string;
  popular: number;
}

@Injectable()
export class SearchService {

  private contriesGetURL = 'http://api-gateway.travelata.ru/directory/countries';
  private contriesGetResorts = 'http://api-gateway.travelata.ru/directory/resorts';
  private contriesGetHotels = 'http://api-gateway.travelata.ru/directory/resortHotels?resortId=';
  private contriesGetHotelsCategory = 'http://api-gateway.travelata.ru/directory/hotelCategories';

  constructor(private _HTTP: HttpClient) {}

  getCountries() {
     return this._HTTP.get(this.contriesGetURL);
  }
  getInexpensiveThour(
     country: TravelCountry,
     departureCity = '',
     nightRangeFrom = '2',
     nightRangeTo = '10',
     resorts = '',
     touristGroupAdults = '2',
     touristGroupKids = '0',
     touristGroupInfants = '0',
     hotelCategoriesMin = '0',
     hotelCategoriesMax = '7',
     checkInDateRangeStart = '',
     checkInDateRangeEnd = '',
   ) {
      // Id города
      departureCity = departureCity.length ? `&departureCity=${departureCity}` : '';

      // Количество ночей
      nightRangeFrom = `&nightRange[from]=${ nightRangeFrom }`;
      nightRangeTo = `&nightRange[to]=${ nightRangeTo }`;

      // Id города
      resorts = resorts.length ? `&resorts[]=${ resorts }` : '';

      // Взрослые
      touristGroupAdults = `&touristGroup[adults]=${ touristGroupAdults }`;

      // Дети от 2 до 11 лет
      touristGroupKids = `&touristGroup[kids]=${ touristGroupKids }`;

      // Дети до 2 лет
      touristGroupInfants = `&touristGroup[infants]=${ touristGroupInfants }`;

      // Категория отеля
      hotelCategoriesMin = `&hotelCategories[]=${ hotelCategoriesMin }`;
      hotelCategoriesMax = `&hotelCategories[]=${ hotelCategoriesMax }`;

      // Период
      const currentDate = new Date();
      // Берем период 29 дней
      const monthSeconds = 30 * 86400000;
      const fullEndDate = new Date(currentDate.getTime() + monthSeconds);

      const startDate = `${ currentDate.getFullYear() }-${ currentDate.getMonth() + 1 }-${ currentDate.getDate() }`;
      const endDate = `${ fullEndDate.getFullYear() }-${ fullEndDate.getMonth() + 1 }-${ fullEndDate.getDate() }`;

      checkInDateRangeStart = checkInDateRangeStart.length ?
         `&checkInDateRange[from]=${ checkInDateRangeStart }`
         : `&checkInDateRange[from]=${ startDate }`;
      checkInDateRangeEnd = checkInDateRangeEnd.length ?
         `&checkInDateRange[to]=${ checkInDateRangeEnd }`
         : `&checkInDateRange[to]=${ endDate }`;

      const httpPart1 = 'https://api-gateway.travelata.ru/statistic/cheapestTours?countries[]=';
      const httpPart2 = `${country}${ departureCity }${ nightRangeFrom }${ nightRangeTo }`;
      return this._HTTP.get(`${ httpPart1 }${ httpPart2 }`);
  }
  getResorts() {
     return this._HTTP.get(this.contriesGetResorts);
  }
  getHotels(resortsId: number) {
     return this._HTTP.get(`${ this.contriesGetHotels }${ resortsId }`);
  }
  getHotelsCategory() {
     return this._HTTP.get(this.contriesGetHotelsCategory);
  }
}
