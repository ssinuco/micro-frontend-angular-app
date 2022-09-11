import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data:any = {
    tractors: {
      eicher: {
        label: 'Eicher Diesel 215/16',
        img: 'https://mi-fr.org/img/eicher.svg',
        recomendations: ['porsche', 'fendt'],
        price: 58
      },
      fendt: {
        label: 'Fendt F20 Dieselroß',
        img: 'https://mi-fr.org/img/fendt.svg',
        recomendations: ['porsche', 'eicher'],
        price: 54
      },
      porsche: {
        label: 'Porsche-Diesel Master 419',
        img: 'https://mi-fr.org/img/porsche.svg',
        recomendations: ['eicher', 'fendt'],
        price: 66
      }
    }
  };

  constructor() { }

  getProduct(productId: string){
    return this.data.tractors[productId];
  }
}
