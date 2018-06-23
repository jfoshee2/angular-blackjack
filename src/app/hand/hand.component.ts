import {Component, OnChanges, Input, SimpleChanges} from '@angular/core';
import {Card} from '../models/card';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnChanges {

  @Input() hand: Card[];

  constructor() { }

  ngOnChanges() {
    console.log('something changed');
  }

  getHandValue() {
    let value = 0;
    this.hand.forEach(card => {
      if (card.value === 'ACE') {
        value += 11;
      } else if (card.value === 'KING' || card.value === 'QUEEN' || card.value === 'JACK') {
        value += 10;
      } else {
        value += +card.value;
      }
    });
    return value;
  }
}
