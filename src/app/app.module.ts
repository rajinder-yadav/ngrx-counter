import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';                        // 1 nrgx store.
import { StoreDevtoolsModule } from '@ngrx/store-devtools';       // 2 ngrx debugging.

import { counterReducer } from './state/counter/counter-reducer'; // 3 State update.
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }), // 4 Register reducer(s) with Store.
    StoreDevtoolsModule.instrument()                  // 5 Enable Redux (ngrx) debugging.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
