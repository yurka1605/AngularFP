import { TravelCountry } from './search.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface TravelCountry {
  id: number;
  name: string;
  popular: number;
}

export interface StartCity {
   id: number;
   name: string;
   isPopular: boolean;
   countryId: number;
   atFiltering: boolean;
}

export interface Thour {
   checkinDate: string;
   expired: string;
   hotelCategory: number;
   hotelCategoryName: string;
   hotelId: number;
   hotelName: string;
   hotelPreview: string;
   hotelRating: string;
   mealId: number;
   nights: number;
   operatorId: number;
   price: number;
   publishedAt: string;
   resortId: number;
   searchPageUrl: string;
   tourIdentity: string;
   tourPageUrl: string;
}


@Injectable()
export class SearchService {

  private contriesGetURL = 'http://api-gateway.travelata.ru/directory/countries';
  private contriesGetResorts = 'http://api-gateway.travelata.ru/directory/resorts';
  private contriesGetHotels = 'http://api-gateway.travelata.ru/directory/resortHotels?resortId=';
  private contriesGetHotelsCategory = 'http://api-gateway.travelata.ru/directory/hotelCategories';
  private DEPARTURE_CITY = [
      {
         id: 90,
         city: 'Абакан'
      },
      {
         id: 8	,
         city: 'Архангельск',
      },
      {
         id: 10,
         city: 'Астрахань',
      },
      {
         id: 12,
         city: 'Барнаул',
      },
      {
         id: 13,
         city: 'Белгород',
      },
      {
         id: 15,
         city: 'Благовещенск',
      },
      {
         id: 18,
         city: 'Брянск',
      },
      {
         id: 19,
         city: 'Владивосток',
      },
      {
         id: 20,
         city: 'Владикавказ',
      },
      {
         id: 21,
         city: 'Волгоград',
      },
      {
         id: 22,
         city: 'Воронеж',
      },
      {
         id: 25,
         city: 'Екатеринбург',
      },
      {
         id: 28,
         city: 'Иркутск',
      },
      {
         id: 29,
         city: 'Казань',
      },
      {
         id: 30,
         city: 'Калининград',
      },
      {
         id: 32,
         city: 'Кемерово',
      },
      {
         id: 36,
         city: 'Краснодар',
      },
      {
         id: 37,
         city: 'Красноярск',
      },
      {
         id: 38,
         city: 'Курган',
      },
      {
         id: 39,
         city: 'Курск',
      },
      {
         id: 91,
         city: 'Липецк',
      },
      {
         id: 42,
         city: 'Магадан',
      },
      {
         id: 43,
         city: 'Магнитогорск',
      },
      {
         id: 92,
         city: 'Махачкала',
      },
      {
         id: 44,
         city: 'Минеральные Воды',
      },
      {
         id: 2	,
         city: 'Москва',
      },
      {
         id: 46,
         city: 'Мурманск',
      },
      {
         id: 47,
         city: 'Нальчик',
      },
      {
         id: 48,
         city: 'Нижневартовск',
      },
      {
         id: 50,
         city: 'Нижний Новгород',
      },
      {
         id: 51,
         city: 'Новокузнецк',
      },
      {
         id: 52,
         city: 'Новороссийск',
      },
      {
         id: 53,
         city: 'Новосибирск',
      },
      {
         id: 56,
         city:	'Омск',
      },
      {
         id: 57,
         city: 'Оренбург',
      },
      {
         id: 60,
         city: 'Пенза',
      },
      {
         id: 61,
         city: 'Пермь',
      },
      {
         id: 62,
         city: 'Петропавловск-Камчатский',
      },
      {
         id: 63,
         city: 'Ростов-на-Дону',
      },
      {
         id: 64,
         city: 'Самара',
      },
      {
         id: 1	,
         city: 'Санкт-Петербург',
      },
      {
         id: 65,
         city: 'Саратов',
      },
      {
         id: 66,
         city: 'Симферополь',
      },
      {
         id: 67,
         city: 'Сочи',
      },
      {
         id: 93,
         city: 'Ставрополь',
      },
      {
         id: 68,
         city: 'Сургут',
      },
      {
         id: 70,
         city: 'Сыктывкар',
      },
      {
         id: 71,
         city: 'Тольятти',
      },
      {
         id: 72,
         city: 'Томск',
      },
      {
         id: 74,
         city: 'Тюмень',
      },
      {
         id: 75,
         city: 'Улан-Удэ',
      },
      {
         id: 76,
         city: 'Ульяновск',
      },
      {
         id: 79,
         city: 'Уфа',
      },
      {
         id: 80,
         city: 'Хабаровск',
      },
      {
         id: 81,
         city: 'Ханты-Мансийск',
      },
      {
         id: 83,
         city: 'Чебоксары',
      },
      {
         id: 84,
         city: 'Челябинск',
      },
      {
         id: 85,
         city: 'Чита',
      },
      {
         id: 87,
         city: 'Южно-Сахалинск',
      },
      {
         id: 88,
         city: 'Якутск',
      },
   ];

  constructor(private _HTTP: HttpClient) {}

  getCountries() {
     return this._HTTP.get(this.contriesGetURL);
  }
  getInexpensiveThour(
     country: TravelCountry,
     departureCity = '',
     nightRangeFrom = '',
     nightRangeTo = '',
     resorts = '',
     touristGroupAdults = '2',
     touristGroupKids = '0',
     touristGroupInfants = '0',
     hotelCategoriesMin = '0',
     hotelCategoriesMax = '7',
     checkInDateRangeStart = '',
     checkInDateRangeEnd = '',
   ) {
      // Вычисляем период от текущей даты в 30 дней
      const currentDate = new Date();
      const monthSeconds = 30 * 86400000;
      const fullEndDate = new Date(currentDate.getTime() + monthSeconds);

      const startDate = `${ currentDate.getFullYear() }-${ currentDate.getMonth() + 1 }-${ currentDate.getDate() }`;
      const endDate = `${ fullEndDate.getFullYear() }-${ fullEndDate.getMonth() + 1 }-${ fullEndDate.getDate() }`;

      const queryParams = {
         country: `countries[]=${ country.id }`,
         departureCity: this.getUserCity(departureCity),
         // Количество ночей(по умолчанию min=2,max=10)
         nightRangeFrom: `&nightRange[from]=${ nightRangeFrom ? nightRangeFrom : '2'}`,
         nightRangeTo: `&nightRange[to]=${ nightRangeTo ? nightRangeTo : '10'}`,
         // Id города
         resorts: resorts ? `&resorts[]=${ resorts }` : '',
         // Взрослые
         touristGroupAdults: `&touristGroup[adults]=${ touristGroupAdults }`,
         // Дети от 2 до 11 лет
         touristGroupKids: `&touristGroup[kids]=${ touristGroupKids }`,
         // Дети до 2 лет
         touristGroupInfants: `&touristGroup[infants]=${ touristGroupInfants }`,
         // Категория отеля
         hotelCategoriesMin: `&hotelCategories[]=${ hotelCategoriesMin }`,
         hotelCategoriesMax: `&hotelCategories[]=${ hotelCategoriesMax }`,
         // Период отпуска
         checkInDateRangeStart: checkInDateRangeStart.length ? `&checkInDateRange[from]=${ checkInDateRangeStart }`
            : `&checkInDateRange[from]=${ startDate }`,
         checkInDateRangeEnd: checkInDateRangeEnd.length ? `&checkInDateRange[to]=${ checkInDateRangeEnd }`
            : `&checkInDateRange[to]=${ endDate }`
      };

      // Формируем запрос
      let apiRequest = `https://api-gateway.travelata.ru/statistic/cheapestTours?`;

      for (const key in queryParams) {
         if (queryParams.hasOwnProperty(key)) {
            apiRequest += queryParams[key];
         }
      }

      return this._HTTP.get(apiRequest);
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

  // TO DO определять город по IP
  getUserCity(city: string) {
      const items = this.DEPARTURE_CITY
         .filter(item => item.city.toLocaleLowerCase() === city.toLocaleLowerCase());
      city = items.length ? items[0].city : '2';
      return `&departureCity=${ city }`;
      //   return this._HTTP.get('http://api.ipstack.com?access_key=a14305b98106c2cfa1b03b5173174b73');
  }
}
