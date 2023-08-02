import {Card, TypeCard} from "../types/types";
import {cards} from "../constants/cards";

class Game {
  trumpCard: TypeCard = TypeCard.bubi;
  isPlayerStep: boolean = false;
  isGetCard: boolean = false;
  isPlayerAttack: boolean = false;
  deckCard: Array<Card> = [];
  attackCard: Card = cards[0];

};
