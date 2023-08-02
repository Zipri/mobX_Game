import {Card} from "../types/types";
import PlayersCards from "./PlayersCards";
import {makeObservable, observable} from "mobx";

class PlayerCards extends PlayersCards {
  cards: Array<Card> = [];

  constructor() {
    super();

    makeObservable(this, {
      cards: observable,
    })
  }
}

export default new PlayerCards();
