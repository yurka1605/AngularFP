import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auction-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss'],
})
export class StarsComponent implements OnInit {
  @Input() rating: number;
  stars: boolean[] = [];

  ngOnInit(): void {
    for (let i = 1; i - 0.5 <= this.rating; i++) {
      this.stars.push(true);
    }
  }
}
