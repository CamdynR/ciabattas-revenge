import { T_LEVEL_THEMES, T_SPRITE_COORD } from '../../helpers/consts';

export type placement = {
  id: number;
  x: number;
  y: number;
  frameCoord: T_SPRITE_COORD;
};

export type level = {
  theme: T_LEVEL_THEMES;
  tilesHeight: number;
  tilesWidth: number;
  placements: placement[];
};

export type levelProp = {
  level: level;
};
