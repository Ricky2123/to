import {Injectable} from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from "app/store";
import { INCREMENT, DECREMENT, PLUS } from "app/actions";
import { Observable } from "rxjs/Observable";
import { select } from "ng2-redux/lib/decorators/select";

@Injectable()
export class CounterActions_1 {
  
    constructor(private ngdux:NgRedux<IAppState>
    ){
    }

   increment():number{
   return this.ngdux.dispatch({type: INCREMENT});
   } 

   decrement():number{
    return this.ngdux.dispatch({type: DECREMENT});
   }
   plus():number{
    return this.ngdux.dispatch({type: PLUS, payload:10})
   }
}