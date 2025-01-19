import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";


export const getCounterSelector = createFeatureSelector<CounterState>('counter');


export const getCounter = createSelector(getCounterSelector, (state) => state.counter);