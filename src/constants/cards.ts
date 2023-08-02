import {Card, TypeCard} from "../types/types";

const back = 'assets/backs/astronaut.svg'
const bubi = (key: string | number) => `assets/fronts/diamonds_${key}.svg`;
const chervi = (key: string | number) => `assets/fronts/hearts_${key}.svg`;
const kresti = (key: string | number) => `assets/fronts/clubs_${key}.svg`;
const piki = (key: string | number) => `assets/fronts/spades_${key}.svg`;

export const CARDS: Array<Card> = [
  { id: 1, rank: 6, type: TypeCard.bubi, front: bubi(6), back },
  { id: 2, rank: 6, type: TypeCard.chervi, front: chervi(6), back },
  { id: 3, rank: 6, type: TypeCard.kresti, front: kresti(6), back },
  { id: 4, rank: 6, type: TypeCard.piki, front: piki(6), back },

  { id: 5, rank: 7, type: TypeCard.bubi, front: bubi(7), back },
  { id: 6, rank: 7, type: TypeCard.chervi, front: chervi(7), back },
  { id: 7, rank: 7, type: TypeCard.kresti, front: kresti(7), back },
  { id: 8, rank: 7, type: TypeCard.piki, front: piki(7), back },

  { id: 9, rank: 8, type: TypeCard.bubi, front: bubi(8), back },
  { id: 10, rank: 8, type: TypeCard.chervi, front: chervi(8), back },
  { id: 11, rank: 8, type: TypeCard.kresti, front: kresti(8), back },
  { id: 12, rank: 8, type: TypeCard.piki, front: piki(8), back },

  { id: 13, rank: 9, type: TypeCard.bubi, front: bubi(9), back },
  { id: 14, rank: 9, type: TypeCard.chervi, front: chervi(9), back },
  { id: 15, rank: 9, type: TypeCard.kresti, front: kresti(9), back },
  { id: 16, rank: 9, type: TypeCard.piki, front: piki(9), back },

  { id: 17, rank: 10, type: TypeCard.bubi, front: bubi(10), back },
  { id: 18, rank: 10, type: TypeCard.chervi, front: chervi(10), back },
  { id: 19, rank: 10, type: TypeCard.kresti, front: kresti(10), back },
  { id: 20, rank: 10, type: TypeCard.piki, front: piki(10), back },

  { id: 21, rank: 11, type: TypeCard.bubi, front: bubi('jack'), back },
  { id: 22, rank: 11, type: TypeCard.chervi, front: chervi('jack'), back },
  { id: 23, rank: 11, type: TypeCard.kresti, front: kresti('jack'), back },
  { id: 24, rank: 11, type: TypeCard.piki, front: piki('jack'), back },

  { id: 25, rank: 12, type: TypeCard.bubi, front: bubi('queen'), back },
  { id: 26, rank: 12, type: TypeCard.chervi, front: chervi('queen'), back },
  { id: 27, rank: 12, type: TypeCard.kresti, front: kresti('queen'), back },
  { id: 28, rank: 12, type: TypeCard.piki, front: piki('queen'), back },

  { id: 29, rank: 13, type: TypeCard.bubi, front: bubi('king'), back },
  { id: 30, rank: 13, type: TypeCard.chervi, front: chervi('king'), back },
  { id: 31, rank: 13, type: TypeCard.kresti, front: kresti('king'), back },
  { id: 32, rank: 13, type: TypeCard.piki, front: piki('king'), back },

  { id: 33, rank: 14, type: TypeCard.bubi, front: bubi('ace'), back },
  { id: 34, rank: 14, type: TypeCard.chervi, front: chervi('ace'), back },
  { id: 35, rank: 14, type: TypeCard.kresti, front: kresti('ace'), back },
  { id: 36, rank: 14, type: TypeCard.piki, front: piki('ace'), back },
];
