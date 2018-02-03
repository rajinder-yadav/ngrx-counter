// Counter Actions
import { CountDown,
         CountUp,
         CountReset,
         CountSet,
         CounterAction } from './counter-actions';

/**
 * Store state for Counter
 * @property count    Counter current value.
*/
export class CounterState {
  constructor(public count: number = 0) { }
}

// Initial Store value for Counter.
const initialState = new CounterState(12);

/**
 * Reducer maintains state for Counter, filters all Action sent from Store.
 * @param state   Counter state from Store.
 * @param action  Dispacted Action with optional payload.
 */
export function counterReducer( state: CounterState = initialState,
                                action: CounterAction): CounterState {
  // Switch on Class instance to determine action type.
  switch (action.constructor) {
    case CountUp: {
      return new CounterState(state.count + 1);
    }

    case CountDown: {
      return new CounterState(state.count - 1);
    }

    case CountReset: {
      return new CounterState(0);
    }

    case CountSet: {
      return new CounterState(action.payload);
    }

    // Always return the current State for unknown Action.
    default: {
      return state;
    }
  }
}
