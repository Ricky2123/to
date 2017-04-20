import { Component} from '@angular/core';
import {IAppState} from './store';
import { CounterActions_1 } from './app.service';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import { INCREMENT, DECREMENT, PLUS } from "app/actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
  
})
export class AppComponent {
  counter:number;
  title = 'Counter';
  constructor(private countservice: CounterActions_1,private _store:Store<IAppState>)
  {
     _store.map(state=> state['rootCounter']).distinctUntilChanged()
     .subscribe(count=>{
           return this.counter =count.counter;
        })

  }

  clicked(event){
    switch(event.target.id){
      case 'incrementbtn': 
          this.countservice.increment();
      break;
      case 'decrementbtn':
          this.countservice.decrement();
      break;
      case 'plusbtn':
          this.countservice.plus();
      break;
    }
  }

}
