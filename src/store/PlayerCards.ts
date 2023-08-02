import {Card} from "../types/types";
import PlayersCards from "./PlayersCards";
import {makeObservable, observable} from "mobx";
import {game} from "./index";

class PlayerCards extends PlayersCards {
  cards: Array<Card> = [];

  constructor() {
    super();

    makeObservable(this, {
      cards: observable,
    })
  }

  checkPlayerStep(card: Card, allBattleCards: Card[]) {
    if (game.isPlayerAttack) {
      return this.playerAttack(card, allBattleCards);
    }

    return this.playerDefense(card, game.attackCard);
  }

  playerAttack(card: Card, battleFieldCards: Card[]) {
    if (!battleFieldCards.length || battleFieldCards.some(c => c.rank === card.rank)) {
      game.setAttackCard(card)
      this.reduceCard(card.id)
      return card
    }
    alert('Такой карты нет на поле битвы')
  }

  playerDefense(card: Card, attackCard: Card) {
    const strongerCard = card.rank > attackCard.rank && card.type === attackCard.type
    const strongerTrumpCard = attackCard.type !== game.trumpCard && card.type === game.trumpCard

    if (strongerCard || strongerTrumpCard) {
      this.reduceCard(card.id)
      return card
    }

    alert('У него карта сильнее')
  }

}

export default new PlayerCards();
