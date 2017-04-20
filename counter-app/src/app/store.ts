import { INCREMENT, DECREMENT, PLUS } from './actions';
import { Action } from "@ngrx/store";

export interface IAppState{
    counter:number ;
}
export const INITIAL_STATE : IAppState = {
    counter : 0
}
export function rootCounter (state=INITIAL_STATE,action:Action): IAppState{
    switch(action.type){
        case INCREMENT: return {counter : state.counter + 1}          
        case DECREMENT: return {counter: state.counter -1};
        case PLUS : return {counter : state.counter + action.payload};
    }
    return state;
}


