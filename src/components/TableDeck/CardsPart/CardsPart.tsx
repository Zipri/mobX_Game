import React, {FC} from 'react';
import {Card} from "../../../types/types";
import SimpleCard from "../../SimpleCard/SimpleCard";

import styles from './CardsPart.module.scss';

type PropsType = {
  cards: Array<Card>;
  isPlayerWin: boolean;
  isComputerWin: boolean;
  isPlayer?: boolean;
  onStep?: (card: Card) => void;
}

const CardsPart: FC<PropsType> = ({ cards, isPlayerWin, isComputerWin, onStep, isPlayer }) => {
  if (isPlayerWin && isPlayer) {
    return (
      <div className={`${styles.cardsWrapper} ${styles.center}`}>
        <h2>Поздравляем с победой!</h2>
      </div>
    )
  }

  if (isComputerWin && !isPlayer) {
    return (
      <div className={`${styles.cardsWrapper} ${styles.center}`}>
        <div>
          <h2>Поражение :(</h2>
          <h4>Не грусти, попробуй снова!</h4>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles.cardsWrapper} ${cards.length < 7 ? styles.center : ''}`}>
      {cards.map(
        (item) => <SimpleCard key={item.id} card={item} isPlayer={isPlayer} onClick={() => onStep && onStep(item)} />
      )}
    </div>
  );
};

export default CardsPart;
