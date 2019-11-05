import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-input-drop',
  templateUrl: './input-drop.component.html',
  styleUrls: ['./input-drop.component.scss'],
})

export class InputGroupComponent implements OnInit {

  @Input() showParams = false;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() inputValue = '';

  constructor() {
  }

  ngOnInit() {
  }
}
