import React, {FC} from 'react';
import {Card} from "../../../types/types";
import SimpleCard from "../../SimpleCard/SimpleCard";

import styles from './CardsPart.module.scss';

type PropsType = {
  cards: Array<Card>;
  isPlayer?: boolean;
  onStep?: (card: Card) => void;
}

const CardsPart: FC<PropsType> = ({ cards, onStep, isPlayer }) => {
  return (
    <div className={styles.cardsWrapper}>
      {cards.map(
        (item) => <SimpleCard key={item.id} card={item} isPlayer={isPlayer} onClick={() => onStep && onStep(item)} />
      )}
    </div>
  );
};

export default CardsPart;
