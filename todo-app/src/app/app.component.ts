import { Component, ChangeDetectionStrategy, ElementRef, Inject } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import {IAppState} from './store';
import { CounterActions_1 } from './app.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
  
})
export class AppComponent {
  
  @select() counter:Observable<number>; 
  title = 'Counter';
  private CountService: CounterActions_1;
  constructor(@Inject(CounterActions_1) countService){
    this.CountService = countService;
  }
  
 
  
  clicked(event){
    console.log(this.CountService);
    let btnvalue = event.target.id;
    switch(btnvalue)
    {
      case 'incrementbtn' : {this.CountService.increment(); break;}
      case 'decrementbtn' : {this.CountService.decrement(); break;}
      case 'plusbtn': {this.CountService.plus(); break;}
    }
  }

}
