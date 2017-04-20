import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { AppComponent } from './app.component';
import { IAppState, rootCounter, INITIAL_STATE } from './store';
import { CounterActions_1 } from "./app.service";
import {Store, provideStore} from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [CounterActions_1,[provideStore({rootCounter},INITIAL_STATE)]],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
