import { counterReducer,
         CounterState } from './counter/counter-reducer';

export interface StoreState {
  counter: CounterState;
}

export const reducers = {
  counter: counterReducer
};
