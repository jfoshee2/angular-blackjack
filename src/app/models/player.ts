import {Card} from './card';

export class Player {

  private hand: Card[]; // Used to hold the data for the player hand

  constructor() {}

  getHand(): Card[] {
    return this.hand;
  }

  getScore(): number {
    return 1; // TODO: Implement function for evaluation the player's hand
  }

}
