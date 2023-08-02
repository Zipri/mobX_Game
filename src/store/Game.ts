import {Card, TypeCard} from "../types/types";
import {cards} from "../constants/cards";
import {action, makeObservable, observable} from "mobx";

class Game {
  trumpCard: TypeCard = TypeCard.bubi;
  isPlayerStep: boolean = false;
  isGetCard: boolean = false;
  isPlayerAttack: boolean = false;
  deckCards: Array<Card> = [];
  attackCard: Card = cards[0];

  constructor() {
    makeObservable(this, {
      isPlayerStep: observable,
      isGetCard: observable,
      isPlayerAttack: observable,
      deckCards: observable,
      attackCard: observable,
      reduceCards: action,
    })
  }

  toggleStep() {
    this.isPlayerStep = !this.isPlayerStep;
  }

  toggleAttackStep() {
    this.isPlayerAttack = !this.isPlayerAttack;
  }

  setIsGetCard(isGetCard: boolean) {
    this.isGetCard = isGetCard;
  }

  setAttackCard(card: Card) {
    this.attackCard = card;
  }

  defineStep(playerCards: Card[], computerCards: Card[]) {
    const playerTrumpRank = this.defineJuniorTrumpCard(playerCards);
    const computerTrumpRank = this.defineJuniorTrumpCard(computerCards);

    if (playerTrumpRank) {
      if ((playerTrumpRank < computerTrumpRank) || !computerTrumpRank) {
        this.toggleStep();
        this.toggleAttackStep();
      }
    }
  }

  mixDeck() {
    this.deckCards = this.deckCards.sort(() => Math.random() - 0.5);
    this.trumpCard = this.deckCards[this.deckCards.length - 1].type
  }

  startGame() {
    this.deckCards = cards;
    this.mixDeck();

    const firstPlayerCards = this.reduceCards(6);
    const firstComputerCards = this.reduceCards(6);

    this.defineStep(firstPlayerCards, firstComputerCards);

    return {firstPlayerCards, firstComputerCards};
  }

  addPlayersCards(player: any, computer: any) {

  }

  defineJuniorTrumpCard(cards: Card[]) {
    const trumpRanks = cards.filter((card) => card.type === this.trumpCard)
      .map((card) => card.rank);

    return trumpRanks.length ? Math.min(...trumpRanks) : 0;
  }

  reduceCards(countCards: number): Array<Card> {
    // мутируем объект deckCards
    const removedCard = this.deckCards.splice(0, countCards);

    return removedCard;
  }

}

export default Game;