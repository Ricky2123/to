// import {Injectable} from '@angular/core';
// import { NgRedux } from 'ng2-Redux';
// import { IAppState } from "app/store";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const PLUS = 'PLUS';

// @Injectable()
// export class CounterActions {
//     constructor(private ngRedux:NgRedux<IAppState>
//     ){}

//    increment():number{
//    return this.ngRedux.dispatch({type: INCREMENT});
//    } 

//    decrement():number{
//     return this.ngRedux.dispatch({type: DECREMENT});
//    }
//    plus():number{
//     return this.ngRedux.dispatch({type: PLUS, payload:10})
//    }
// }