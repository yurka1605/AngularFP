import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auction-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() itemClick = new EventEmitter<boolean>();

  constructor() {}
}
