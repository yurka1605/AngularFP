import { Component } from '@angular/core';

@Component({
  selector: 'app-auction-navbar',
  templateUrl: './navbar.component.html',
  styles: [``],
})
export class NavbarComponent {

  pages = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Features',
      url: '/features'
    },
    {
      name: 'Pricing',
      url: '/pricing'
    },
    {
      name: 'About',
      url: '/aboute'
    }
  ];

  constructor() {
  }
}
