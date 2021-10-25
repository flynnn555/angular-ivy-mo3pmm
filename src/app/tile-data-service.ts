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
      {
        tileNumber: 10,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 11,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 12,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 13,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 14,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 15,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 16,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 17,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 18,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 19,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 20,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 21,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 22,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 23,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },
      {
        tileNumber: 24,
        tileColour: '',
        counterExists: false,
        counterNumber: 0,
      },



    ]
    return tileDataArray;

  }
}