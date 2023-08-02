import React, {FC} from 'react';
import {DeskCards} from "../../../types/types";
import SimpleCard from "../../SimpleCard/SimpleCard";

import styles from './BattleFieldPart.module.scss';

type PropsType = {
  cards: DeskCards;
}

const BattleFieldPart: FC<PropsType> = ({ cards }) => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.battleCardsWrapper}>
        {cards.computer.map((item) => <SimpleCard key={item.id} isOnDeck card={item} />)}
      </div>
      <div className={styles.battleCardsWrapper}>
        {cards.player.map((item) => <SimpleCard key={item.id} isOnDeck card={item} />)}
      </div>
    </div>
  );
};

export default BattleFieldPart;