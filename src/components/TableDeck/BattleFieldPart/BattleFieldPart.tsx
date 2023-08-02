import React, {FC} from 'react';
import {DeskCards} from "../../../types/types";
import SimpleCard from "../../SimpleCard/SimpleCard";

type PropsType = {
  cards: DeskCards;
}

const BattleFieldPart: FC<PropsType> = ({ cards }) => {
  return (
    <div>
      <div>
        {cards.computer.map((item) => <SimpleCard key={item.id} card={item} />)}
      </div>
      <div>
        {cards.player.map((item) => <SimpleCard key={item.id} card={item} />)}
      </div>
    </div>
  );
};

export default BattleFieldPart;