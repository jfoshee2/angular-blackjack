import {Component, OnInit} from '@angular/core';
import {Deck} from './models/deck';
import {CardService} from './card.service';
import {Card} from './models/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  url = 'https://deckofcardsapi.com/static/img/KH.png';

  public disable = false;
  public deck: Deck;
  public playerHand: Card[] = [];
  public opponentHand: Card[];
  public playerScore: number;
  public opponentScore: number;

  constructor(private _cardService: CardService) { }

  ngOnInit() {
    this._cardService.getDeck(1).subscribe(data => {
      this.deck = data;
    });
  }

  addCardToPlayerHand() {
    this._cardService.getCards(1, this.deck.deck_id).subscribe(data => {
      this.playerHand.push(data.cards[0]);
    });
    console.log(this.playerHand);
  }

  buildOpponentHand() {
    this.disable = true;
  }

}
