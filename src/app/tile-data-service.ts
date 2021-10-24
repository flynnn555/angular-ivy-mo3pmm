import { Injectable } from '@angular/core';
import { Itile } from './itile';

@Injectable({
  providedIn: 'root'
})
export class TileDataService {

  constructor() { }
 
  getTileDate(): Itile[] {
    let tileDataArray: Itile[] = [
      {
        tileNumber: 0,
        tileColour: '',
        counterExists: true,
        counterNumber: 1,
      },
      {
        tileNumber: 1,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 2,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 3,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 4,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 5,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 6,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 7,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 8,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 9,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },

    ]
    return tileDataArray;

  }
}