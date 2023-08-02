import React, {FC} from 'react';
import {Card} from "../../types/types";
import styles from './SimpleCard.module.scss';

type PropsType = {
  card: Card;
  isOnDeck?: boolean;
  isPlayer?: boolean;
  onClick?: () => void;
}

const SimpleCard: FC<PropsType> = ({ card, isOnDeck, isPlayer, onClick }) => {
  return (
    <div onClick={onClick}>
      <img
        className={`${styles.card} ${isPlayer ? styles.playerCard : ''}`}
        src={(isPlayer || isOnDeck) ? card.front : card.back}
        key={card.id}
        alt={`${card.type} ${card.rank}`}
      />
    </div>
  );
};

export default SimpleCard;