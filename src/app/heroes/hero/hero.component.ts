import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  //imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string='ironman';
  public age:number=23;


  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  public changeHero():void{
    this.name='Spiderman';
  }
  public changeAge():void{
    this.age=20;
  }
  reset():void{
    this.name='ironman';
    this.age=23;
  }

}
