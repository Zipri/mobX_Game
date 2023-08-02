import React, {FC, useEffect} from 'react';
import {battleField, computerCards, game, playerCards} from "../../store";
import CardsPart from "./CardsPart/CardsPart";
import {observer} from "mobx-react-lite";

import styles from './TableDeck.module.scss';
import BattleFieldPart from "./BattleFieldPart/BattleFieldPart";
import InfoPart from "./InfoPart/InfoPart";
import {Card} from "../../types/types";

const TableDeck: FC = () => {
  const startGame = () => {
    const { firstPlayerCards, firstComputerCards } = game.startGame();

    playerCards.addCards(firstPlayerCards);
    computerCards.addCards(firstComputerCards);
  }

  const restartGame = () => {
    const { firstPlayerCards, firstComputerCards } = game.startGame();

    battleField.clearBattleField(playerCards, computerCards)
    playerCards.clearCards();
    computerCards.clearCards();

    playerCards.addCards(firstPlayerCards);
    computerCards.addCards(firstComputerCards);
  }

  const computerAction = () => {
    if (!game.isPlayerStep) {
      const allBattleCards = [...battleField.cards.computer, ...battleField.cards.player];
      const computerJuniorCard = computerCards.defineCardForAction(allBattleCards);

      if (computerJuniorCard) {
        battleField.addComputerCard(computerJuniorCard);
      } else {
        battleField.clearBattleField(playerCards, computerCards);
      }
    }
  }

  const handleClickCard = (card: Card) => {
    if (game.isPlayerStep) {
      const  playerStepCard = playerCards.checkPlayerStep(
        card, [...battleField.cards.computer, ...battleField.cards.player]
      );

      if (playerStepCard) {
        battleField.addPlayerCard(playerStepCard);
      }
    }
  }

  const getCard = () => {
    playerCards.addCards([...battleField.cards.computer, ...battleField.cards.player]);
    game.toggleStep();
    game.setIsGetCard(true);
    battleField.clearBattleField(playerCards, computerCards);
  }

  useEffect(startGame, [])

  useEffect(computerAction, [game.isPlayerStep]);

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.infoDeckWrapper}>
        <InfoPart
          trump={game.trumpCard}
          cardBalance={game.deckCards.length}
          isPlayerAttack={game.isPlayerAttack}
          onClearDeck={() => battleField.clearBattleField(playerCards, computerCards)}
          onGetCard={getCard}
          isRestart={!playerCards.cards.length || !computerCards.cards.length}
          restart={restartGame}
        />
      </div>
      <div className={styles.deckWrapper}>
        <CardsPart
          isPlayerWin={!playerCards.cards.length}
          isComputerWin={!computerCards.cards.length}
          cards={computerCards.cards}
        />
        <BattleFieldPart cards={battleField.cards} />
        <CardsPart
          isPlayerWin={!playerCards.cards.length}
          isComputerWin={!computerCards.cards.length}
          cards={playerCards.cards} isPlayer onStep={handleClickCard}
        />
      </div>
    </div>
  );
};

export default observer(TableDeck);