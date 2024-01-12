import { Component, Input, Output,EventEmitter } from '@angular/core';

import { Character } from '../../interfaces/character.interfaces';


@Component({
  selector: 'app-dbz-list',
  standalone: false,
  //imports: [ NgClass ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList:Character[]=[{
    name:'Trunk',
    power:10
  }];

  @Output()
  public onDelete:EventEmitter<string> =new EventEmitter();

  onDeleteCharacter(index?:string):void{
    if(!index) return;
    this.onDelete.emit(index);
  }
}
