import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface TravelCountry {
  id: number;
  name: string;
  popular: number;
}

@Injectable()
export class SearchService {

  private contriesGetURL = 'http://api-gateway.travelata.ru/directory/countries';
  private contriesGetInexpensiveThour = 'https://api-gateway.travelata.ru/statistic/cheapestTours';
  private contriesGetResorts = 'http://api-gateway.travelata.ru/directory/resorts';
  private contriesGetHotels = 'http://api-gateway.travelata.ru/directory/resortHotels?resortId=';
  private contriesGetHotelsCategory = 'http://api-gateway.travelata.ru/directory/hotelCategories';

  constructor(private _HTTP: HttpClient) {}

  getContries() {
     return this._HTTP.get(this.contriesGetURL);
  }
  getInexpensiveThour() {
     return this._HTTP.get(this.contriesGetInexpensiveThour);
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
