import { Component, OnInit, Input } from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'auction-start',
  templateUrl: './stars.component.html',
  styleUrls: [`.starrating{ color: #d17581 }`],
})
export class StarsComponent implements OnInit{
  @Input() count: number = 5;
  @Input() rating: number = 0;
  stars: boolean[] = [];

  ngOnInit(): void {
    for (let i = 1; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }
}
