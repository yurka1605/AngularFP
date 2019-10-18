import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { elementClassProp } from '@angular/core/src/render3';

@Component({
  selector: 'app-auction-not-found',
  templateUrl: './404NotFound.component.html',
  styleUrls: ['./404NotFound.component.scss'],
})

export class _404NotFoundComponent implements OnInit {

  @ViewChild('thirdDigit') thirdDigit: ElementRef;
  @ViewChild('secondDigit') secondDigit: ElementRef;
  @ViewChild('firstDigit') firstDigit: ElementRef;

  constructor() {

  }

  ngOnInit() {
    [
      [this.firstDigit.nativeElement, 4, 60],
      [this.secondDigit.nativeElement, 0, 50],
      [this.thirdDigit.nativeElement, 4, 40]
    ].forEach(el => {
      this.timerNum(el);
    });
  }

  timerNum(args) {
    let i = 0;
    const loop = setInterval(_ => {
      if (i > args[2]) {
          clearInterval(loop);
          args[0].textContent = args[1];
      } else {
          args[0].textContent = Math.floor(Math.random() * 9) + 1;
          i++;
      }
    }, 30);
  }
}
