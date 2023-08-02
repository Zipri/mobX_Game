import {Card, DeskCards} from "../types/types";
import {action, makeObservable, observable} from "mobx";
import {game} from "./index";

class BattleField {
  cards: DeskCards = {
    player: [],
    computer: [],
  }

  constructor() {
    makeObservable(this, {
      cards: observable,
      addPlayerCard: action,
      addComputerCard: action,
    })
  }

  addPlayerCard(card: Card) {
    this.cards.player.push(card);
    game.toggleStep();
  }

  addComputerCard(card: Card) {
    this.cards.computer.push(card);
    game.toggleStep();
  }

  clearBattleField(playerCards: any, computerCards: any) {
    this.cards.player = [];
    this.cards.computer = [];

    game.addPlayersCards(playerCards, computerCards);
    if (!game.isGetCard) {
      game.toggleStep();
      game.toggleAttackStep();
    } else {
      game.setIsGetCard(false);
    }
  }

}

export default new BattleField();
