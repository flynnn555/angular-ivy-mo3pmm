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
  numberRolled: number = 0;
  restart = "";
  
  clickCounter(): void {
    console.log('counter clicked');
  }

  async rollDice(): Promise<void> {
    console.log('dice rolled');
    this.numberRolled = await this.randomNumber(6); // six sided dice
    this.moveCounterByDiceRole(this.numberRolled);
  }

  async randomNumber(max: number):Promise<number> {
    let number = Math.floor(Math.random() * max);
    console.log(number);
    ++number  // add one to returned result removing 0
    console.log(number);
    return number
  }

  moveCounterByDiceRole(diceResult: number): void {
    // get counter location
    let counterId = 0;
    for(let tile of this.arrayGrid){
        if(tile.counterExists === true){
            counterId = tile.tileNumber;
            tile.counterExists = false;
            console.log('counterId', counterId);
        } else{}

    }
    // get dice result - done
    
    // get tile id to move counter to
    let moving = 0;
    moving = counterId + diceResult;
    console.log('moving',moving);

    // move counter
    let tileMovingTo = this.arrayGrid.find(a => a.tileNumber === moving);
    if(tileMovingTo === undefined) {
      console.log('undefined',tileMovingTo );
      tileMovingTo = this.arrayGrid.find(a => a.tileNumber === 0);
      tileMovingTo.counterExists = true;
      this.restart = "Game Restarted UNLUCKY !!!!"; 
      console.log(this.restart);
      this.restart = this.restart;
    }
    if(tileMovingTo.tileNumber === 24) {
      console.log('tileMovingTo shoulr be 24',tileMovingTo );
      this.restart = "You Won The Game"; 
      tileMovingTo = this.arrayGrid.find(a => a.tileNumber === 0);
      tileMovingTo.counterExists = true;
    } 
    if (tileMovingTo.tileNumber > 0 && tileMovingTo.tileNumber < 25 ) {
    console.log('tileMovingTo', tileMovingTo);
    tileMovingTo.counterExists = true;
    this.restart = "";
    }

    // check result of counter move

  }
}
