import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customeDecrement, customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-coustom-counter-input',
  templateUrl: './coustom-counter-input.component.html',
  styleUrls: ['./coustom-counter-input.component.scss']
})
export class CoustomCounterInputComponent {
  constructor(private store: Store<{ counter: CounterState }>) { }
  value!: number;

  add() {
    this.store.dispatch(customIncrement({ count: this.value }));
  }

  remove() {
    this.store.dispatch(customeDecrement({ count: this.value }))
  }
}
