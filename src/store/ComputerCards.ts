import {Card} from "../types/types";
import PlayersCards from "./PlayersCards";
import {makeObservable, observable} from "mobx";

class ComputerCards extends PlayersCards {
  cards: Array<Card> = [];

  constructor() {
    super();

    makeObservable(this, {
      cards: observable,
    })
  }
}

export default new ComputerCards();
