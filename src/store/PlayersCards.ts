import {Card} from "../types/types";

abstract class PlayersCards {
  abstract cards: Array<Card>;

  reduceCard(id: number): void {
    this.cards = this.cards.filter((card) => card.id !== id);
  }

  addCards(cards: Card[]): void {
    this.cards = [...this.cards, ...cards];
  }

  clearCards(): void {
    this.cards = [];
  }

}

export default PlayersCards;
