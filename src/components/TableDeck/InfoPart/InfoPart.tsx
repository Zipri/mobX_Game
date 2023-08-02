import React, {FC} from 'react';
import styles from './InfoPart.module.scss';
import {TypeCard} from "../../../types/types";

type PropsType = {
  trump: TypeCard;
  cardBalance: number;
  isPlayerAttack: boolean;
  onClearDeck: () => void;
  onGetCard: () => void;
}

const InfoPart: FC<PropsType> = ({ trump, cardBalance, isPlayerAttack, onClearDeck, onGetCard }) => {
  const trumps = {
    'chervi': { color: 'red', code: { __html: '&#9829;', }, },
    'bubi': { color: 'red', code: { __html: '&#9830;' }, },
    'kresti': { color: 'black', code: { __html: '&#9827;' }, },
    'piki': { color: 'black', code: { __html: '&#9824;' }, },
  }


  return (
    <div className={styles.contentWrapper}>
      <div>
        <div className={`${trumps[trump].color} ${styles.trumpItem}`} dangerouslySetInnerHTML={trumps[trump].code} />
        <div>
          Остаток карт: {cardBalance}
        </div>
      </div>
      <div>
        <button onClick={isPlayerAttack ? onClearDeck : onGetCard}>
          {isPlayerAttack ? 'Бито' : 'Беру'}
        </button>
      </div>
    </div>
  );
};

export default InfoPart;