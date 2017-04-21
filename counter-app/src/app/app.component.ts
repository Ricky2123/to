import { Component} from '@angular/core';
import {IAppState} from './store';
import { CounterActions_1 } from './app.service';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import { INCREMENT, DECREMENT, PLUS, COUNTERBTNS, LOGININPUTS, LOGINBTNS } from "app/actions";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loginBtns: string[];
  counterbtn:string[];
  counter:number;
  logininputs :any[];
  title = 'Counter';
  myForm = FormGroup;
  constructor(private countservice: CounterActions_1, private _store:Store<IAppState>)
    {
      this.counterbtn = COUNTERBTNS;
      this.logininputs = LOGININPUTS;
      this.loginBtns = LOGINBTNS;
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
      case 'Login':
          this.countservice.login(this.myForm);
      break;
      case 'Forgot Password':
          this.countservice.forgotpass(this.myForm);
      break;
    }
  }

}
