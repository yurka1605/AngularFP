import { Component } from '@angular/core';

@Component({
  selector: 'app-auction-navbar',
  templateUrl: './navbar.component.html',
  styles: [``],
})
export class NavbarComponent {

  pages = [
    {
      name: 'Дешевые туры',
      url: '/cheap-tours'
    },
    {
      name: 'Расширенный поиск',
      url: '/advance-search'
    },
    {
      name: 'Сотрудничество',
      url: '/сooperation'
    },
    {
      name: 'O нас',
      url: '/about'
    }
  ];

  constructor() {
  }
}
