import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent {
  counter$!: Observable<number>;

  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit() {
    this.counter$ = this.store.select(getCounter)
  }

}
