import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',

})

export class CounterComponent {
  title = 'App Contador';
  counter = 50;

  increment():void{
    this.counter++;
  }
  decrement():void{
    this.counter--;
  }

  reset():void{
    this.counter = 0;
  }
}
