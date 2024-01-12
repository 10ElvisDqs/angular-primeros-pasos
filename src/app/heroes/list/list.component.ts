import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  //imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[]=['Spiderman','Ironman','Hulk','She Hulk','Thor'];
  public heroBorrado?:string;
  public num:number[]=[1,2,3,4,5,6,7,8,9];
  removeLastHero():void{
    this.heroBorrado=this.heroNames.pop();
    this.num.push(43);
  }

}
