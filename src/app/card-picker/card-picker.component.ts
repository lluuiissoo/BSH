import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-picker',
  templateUrl: './card-picker.component.html',
  styleUrls: ['./card-picker.component.css']
})
export class CardPickerComponent implements OnInit {

  selectedCard: Card;
  cards: Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.getCards();
    this.selectedCard = this.getCard(1);
  }

  getCards(): void {
    this.cards = this.cardService.getCards();
  }

  getCard(cardId: Number): Card {
    var c = this.cardService.getCard(cardId);
    return c;
  }

  onChange(cardValue) {
    console.log(cardValue);
    this.selectedCard = this.getCard(cardValue);
    console.log(this.selectedCard.name);
  }


}
