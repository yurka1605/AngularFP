import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'auction-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent {

  constructor() {
  }

  showThours(event) {
    console.log(event);
  }
}
