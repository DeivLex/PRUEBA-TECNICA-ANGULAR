import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  /*
  min: es la variable para el numero minimo
  max: es la variable para el numero maximo
  DataArray: es el arreglo de datos que se mostrara para ser completado
  Results: es la variable que ira sumando los puntos del desempeño
  */
  min = 1;
  max = 9;
  DataArray = [];
  results = 0;

  constructor() { }
  /*
  Este metodo sirve para generar un array aleatorio de 7 numeros
  que puede empezar entre el minimo y el maximo
  */
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
