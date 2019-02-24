import { Injectable } from '@angular/core';
import { Card } from './card';
import { CARDS } from './mock-cards';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards(): Card[] {
    console.log('Returning all cards...');
    return CARDS;
  }

  getCard(cardId: Number): Card {
    console.log('Returning cards with id: ' + cardId);
    var c = CARDS.find(x=>x.id == cardId);
    return c;
  }
}
