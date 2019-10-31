import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SearchDataCountry } from './header/search/search.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'auction-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent {

  constructor(private router: Router) {
  }

  showThours(searchData: SearchDataCountry) {
    this.router.navigate(['/search'], { queryParams: searchData.country });
  }
}
