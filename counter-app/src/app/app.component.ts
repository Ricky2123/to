import { Component} from '@angular/core';
import {IAppState} from './store';
import { CounterActions_1 } from './app.service';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import { INCREMENT, DECREMENT, PLUS, COUNTERBTNS } from "app/actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
  
})
export class AppComponent {
  counterbtn:string[];
  counter:number;
  title = 'Counter';
  constructor(private countservice: CounterActions_1,private _store:Store<IAppState>)
    {
      this.counterbtn = COUNTERBTNS;
     _store.map(state=> state['rootCounter']).distinctUntilChanged()
     .subscribe(count=>{
           return this.counter =count.counter;
        })

  }

  clicked(event){
    switch(event.target.id){
      case 'Increment': 
          this.countservice.increment();
      break;
      case 'Decrement':
          this.countservice.decrement();
      break;
      case 'Plus':
          this.countservice.plus();
      break;
    }
  }

}
