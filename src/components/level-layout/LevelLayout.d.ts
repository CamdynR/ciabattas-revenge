import { T_LEVEL_THEMES } from '../../helpers/consts';

export type placement = {
  id: number;
  x: number;
  y: number;
  frameCoord: `${number}x${number}`;
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
