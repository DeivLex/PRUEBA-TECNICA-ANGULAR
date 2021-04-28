import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sequence = 5;
  min = 1;
  max = 9;
  DataArray = [];
  results = 0;

  constructor() { }

  // tslint:disable-next-line:typedef
  getArray(){
    this.DataArray = [];
    const value = Math.floor(Math.random() * this.max) + this.min;
    for (let index = 0; index < 7; index++) {
      this.DataArray.push(value + index);
    }
    return this.DataArray;
  }

}
