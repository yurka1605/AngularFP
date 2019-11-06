import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-input-drop',
  templateUrl: './input-drop.component.html',
  styleUrls: ['./input-drop.component.scss'],
})

export class InputGroupComponent implements OnInit {

  public isFocus = false;
  @Input() readonly = false;
  @Input() customClass = false;
  @Input() showParams = false;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() inputValue = '';
  @Output() itemChange = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  clickControl(control) {
    this.showParams = !this.showParams;
    this.showParams ? control.focus() : control.blur();
    this.itemChange.emit(this.showParams);
  }
}
