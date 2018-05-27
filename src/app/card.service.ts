import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Deck} from './models/deck';
import {Observable} from 'rxjs';
import {Draw} from './models/draw';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private _url = 'https://deckofcardsapi.com/api/deck/';

  constructor(private http: HttpClient) { }

  getDeck(numOfDecks: number): Observable<Deck> {
    return this.http.get<Deck>(this._url + 'new/shuffle/?deck_count=' + numOfDecks);
  }

  getCards(numOfCards: number, deckId: string): Observable<Draw> {
    return this.http.get<Draw>(this._url + deckId + '/draw/?count=' + numOfCards);
  }
}
