import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  counter: any = 0;


  onIncrement() {
    this.counter = this.counter + 1;
  }

  onDecrement() {
    this.counter = this.counter - 1;
  }

  onReset() {
    this.counter = 0;
  }
}
