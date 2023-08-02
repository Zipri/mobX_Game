import {Card} from "../types/types";
import PlayersCards from "./PlayersCards";
import {makeObservable, observable} from "mobx";
import {game} from "./index";

class ComputerCards extends PlayersCards {
  cards: Array<Card> = [];

  constructor() {
    super();

    makeObservable(this, {
      cards: observable,
    })
  }

  defineCardForAction(allBattleCards: Card[]) {
    if (game.isPlayerAttack) {
      return this.defineCardForDefense(game.attackCard, allBattleCards);
    }

    return this.defineCardForAttack(allBattleCards);
  }

  defineCardForDefense(attackCard: Card | null, battleFieldCards: Card[]) {
    if (attackCard) {
      const higherCards = this.cards.filter(card => card.type === attackCard?.type
        && card.rank > attackCard?.rank);
      const trumpCards = this.cards.filter(card => card.type === game.trumpCard.type);

      if (higherCards.length) {
        return this.defineJuniorCard(higherCards);
      }

      if (attackCard.type !== game.trumpCard.type && trumpCards.length) {
        return this.defineJuniorCard(trumpCards);
      }

      this.addCards(battleFieldCards);
      game.toggleStep();
      game.setIsGetCard(true);
    }
  }

  defineCardForAttack(battleFieldCards: Card[]) {
    if (this.cards.length) {
      let cardForAttack = null;

      if (!battleFieldCards.length) {
        const trumpCards = this.cards.filter(card => card.type === game.trumpCard.type);
        const notTrumpCards = this.cards.filter(card => card.type !== game.trumpCard.type);

        if (notTrumpCards.length) {
          cardForAttack = this.defineJuniorCard(notTrumpCards);
        } else {
          cardForAttack = this.defineJuniorCard(trumpCards);
        }
        game.setAttackCard(cardForAttack);

        return cardForAttack;
      }

      cardForAttack = this.defineJuniorExistCard(battleFieldCards);

      if (cardForAttack) {
        game.setAttackCard(cardForAttack);
      }

      return cardForAttack;
    }
  }

  defineJuniorExistCard(battleFieldCards: Card[]) {
    const existRankCards = this.cards.filter(card => !!battleFieldCards.find(c => c.rank === card.rank))
    return existRankCards.length ? this.defineJuniorCard(existRankCards) : null
  }

  defineJuniorCard(cards: Card[]): Card {
    const juniorCard = cards.reduce((acc, curCurd) => acc?.rank < curCurd?.rank ? acc : curCurd)
    if (juniorCard) {
      this.reduceCard(juniorCard.id)
    }
    return juniorCard
  }

}

export default new ComputerCards();
