import { Component, OnInit } from '@angular/core';
import {CardService} from '../card.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  public deck = {};

  constructor(private _cardService: CardService) { }

  ngOnInit() {
    this._cardService.getDeck(1).subscribe(data => {
      this.deck = data;
    });
  }

}
