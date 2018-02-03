/**
 * https://github.com/ngrx/platform/blob/master/docs/store/README.md
 */
import { Action } from '@ngrx/store';

/**
 * Action base type for Counter.
 * @property type       Action type.
 * @property payload    Option data used to update state.
 */
export interface CounterAction extends Action {
  payload?: number; // Optional
}

// Counter Actions.
export class CountUp implements CounterAction {
  readonly type: string = '[counter] up';
}

export class CountDown implements CounterAction {
  readonly type: string = '[counter] down';
}

export class CountReset implements CounterAction {
  readonly type: string = '[counter] reset';
}

export class CountSet implements CounterAction {
  readonly type: string = '[counter] set';
  constructor(public payload: number) {}
}
