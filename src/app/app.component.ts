import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { OptionData } from 'src/interfaces/option-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /*@ViewChild('dv') dv: ElementRef | undefined;
  testValue: string | undefined;*/

  options: OptionData[] = [
    { id: 0, value: 'Option 1' },
    { id: 1, value: 'Option 2' },
    { id: 2, value: 'Option 3' },
    { id: 3, value: 'Option 4' },
    { id: 4, value: 'Option 5' },
  ];
  selectedOption: OptionData = this.options[2];

  setOption() {
    this.selectedOption = this.options.filter((o) => o.id == 4)[0];
  }

  /*constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (this.dv) {
      this.renderer.setStyle(
        this.dv.nativeElement.children[0],
        'top',
        `${this.dv.nativeElement.offsetTop + 50}px`
      );
    }
    setTimeout(() => {
      this.testValue = 'hello';
    }, 5000);
  }*/
}
