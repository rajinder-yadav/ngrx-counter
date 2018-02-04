import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import { StoreState } from './state/reducers';
import { DoCounterUp,
         DoCounterDown,
         DoCounterReset,
         DoCounterSet } from './state/counter/counter-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // 1 Counter stream.
  count$: Observable<number>;

  // 2 Inject ngrx Store
  constructor(private readonly store: Store<StoreState>) {
    // 3 Connect Counter stream to Store Counter state.
    this.count$ = this.store.select(state => state.counter.count);
  }

  // Template event handlers.
  onUp() {
    // 4 Dispatch action to all reducers.
    this.store.dispatch(new DoCounterUp());
  }

  onDown() {
    // 5 Dispatch action to all reducers.
    this.store.dispatch(new DoCounterDown());
  }

  onSet(count: string) {
    // 6 Dispatch action to all reducers.
    this.store.dispatch(new DoCounterSet(parseInt(count, 10)));
  }

  onReset() {
    // 7 Dispatch action to all reducers.
    this.store.dispatch(new DoCounterReset());
  }
}
