import {Injectable} from '@angular/core';
import { IAppState } from "app/store";
import { INCREMENT, DECREMENT, PLUS } from "app/actions";
import { Store } from "@ngrx/store";

@Injectable()
export class CounterActions_1 {
  private countvalue;
    
  constructor(private _store:Store<IAppState>){
     _store.map(state=> state['rootCounter']).distinctUntilChanged()
     .subscribe(count=>{
           return this.countvalue =count.counter;
        })

  }
   increment(){
     return this._store.dispatch({type: INCREMENT});
   } 

   decrement(){
    return this._store.dispatch({type: DECREMENT});
   }
  
   plus(){
    return this._store.dispatch({type: PLUS, payload:10})
   }

   login(data){
     console.log(data);
     //return this._store.dispatch({type:LOGIN, payload:data})
   }
   forgotpass(data){
    console.log(data);
   }
}