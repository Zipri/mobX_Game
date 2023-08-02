import React, {FC, useEffect} from 'react';
import {computerCards, game, playerCards} from "../../store";
import CardsPart from "./CardsPart/CardsPart";
import {observer} from "mobx-react-lite";

import styles from './TableDeck.module.scss';

const TableDeck: FC = () => {
  const startGame = () => {
    const { firstPlayerCards, firstComputerCards } = game.startGame();

    playerCards.addCards(firstPlayerCards);
    computerCards.addCards(firstComputerCards);
  }

  useEffect(startGame, [])

  return (
    <div className={styles.deckWrapper}>
      <CardsPart cards={computerCards.cards} />
      {/*<BattleFieldPart />*/}
      <CardsPart cards={playerCards.cards} isPlayer onStep={() => {}} />
    </div>
  );
};

export default observer(TableDeck);