import React, {FC} from 'react';
import styles from './InfoPart.module.scss';
import {Card} from "../../../types/types";
import SimpleCard from "../../SimpleCard/SimpleCard";
import {battleField} from "../../../store";

type PropsType = {
  trump: Card;
  cardBalance: number;
  isPlayerAttack: boolean;
  onClearDeck: () => void;
  onGetCard: () => void;
  isRestart: boolean;
  restart: () => void;
}

const InfoPart: FC<PropsType> = ({
  trump,
  cardBalance,
  isPlayerAttack,
  onClearDeck,
  onGetCard,
  isRestart,
  restart,
}) => {

  return (
    <div className={styles.contentWrapper}>
      <h3 className={styles.header}>
        Остаток карт: {cardBalance}
      </h3>
      <div className={styles.cardsPart}>
        <div className={styles.cardsDeck}>
          <SimpleCard card={trump} />
        </div>
        <div className={styles.trump}>
          <SimpleCard card={trump} isOnDeck />
        </div>
      </div>
      <div>
        {isRestart ? (
          <button
            className={`${styles.btn} ${styles.restartBtn}`}
            onClick={restart}
          >
            Заново!
          </button>
        ) : (
          <button
            className={`${styles.btn} ${isPlayerAttack ? styles.bitoButton : styles.getButton}`}
            onClick={isPlayerAttack ? onClearDeck : onGetCard}
            disabled={!(battleField.cards.player.length || battleField.cards.computer.length)}
          >
            {isPlayerAttack ? 'Бито' : 'Беру'}
          </button>
        )}
      </div>
    </div>
  );
};

export default InfoPart;