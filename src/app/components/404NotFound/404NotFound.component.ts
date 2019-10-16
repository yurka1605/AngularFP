import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';

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
    const selector1 = this.firstDigit.nativeElement;
    const selector2 = this.secondDigit.nativeElement;
    const selector3 = this.thirdDigit.nativeElement;

    this.timerNum(selector1, 4, 100);
    this.timerNum(selector2, 0, 80);
    this.timerNum(selector3, 4, 40);
  }

  timerNum(selector, textNum, inum) {
    let i = 0;
    const loop = setInterval(_ => {
      if (i > inum) {
          clearInterval(loop);
          selector.textContent = textNum;
      } else {
          selector.textContent = Math.floor(Math.random() * 9) + 1;
          i++;
      }
    }, 30);
  }
}
