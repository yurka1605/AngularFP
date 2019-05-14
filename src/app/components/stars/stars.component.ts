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
  start: boolean[] = {};

  ngOnInit(): void {
    this.count.forEach( (count, index) => {
      this.start.push(index > this.rating);
    });
  }
}
