import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() updateValue: string | undefined = '';

  constructor() {
    if (this.updateValue) {
      alert(this.updateValue);
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    alert(this.updateValue);
  }

  ngOnInit(): void {
    if (this.updateValue) {
      console.log(this.updateValue);
    }
  }
}
