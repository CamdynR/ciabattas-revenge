import { T_LEVEL_THEMES, T_SPRITE_COORD } from '../../helpers/consts';

export type PlacementOpts = {
  id: number;
  x: number;
  y: number;
  frameCoord: T_SPRITE_COORD;
};

export type LevelOpts = {
  theme: T_LEVEL_THEMES;
  tilesHeight: number;
  tilesWidth: number;
  placements: PlacementOpts[];
};

export type LevelProps = {
  level: LevelOpts;
};
