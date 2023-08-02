export enum TypeCard {
  chervi = 'chervi',
  bubi = 'bubi',
  piki = 'piki',
  kresti = 'kresti',
}

export interface Card {
  id: number;
  rank: number;
  type: TypeCard;
  front: string;
  back: string;
}

export interface DeskCards {
  player: Card[];
  computer: Card[];
}
