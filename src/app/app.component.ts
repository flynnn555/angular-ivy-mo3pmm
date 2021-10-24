import { Component, VERSION } from '@angular/core';
import { TileDataService } from './tile-data-service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor( private _tileDataService: TileDataService){}

  arrayGrid = this._tileDataService.getTileDate();
  
  clickCounter(): void {
    console.log('counter clicked');
  }

  rollDice(): void {
    console.log('dice rolled');
  }
}
