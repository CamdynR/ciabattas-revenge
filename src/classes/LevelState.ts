import {
  LEVEL_THEMES,
  PLACEMENT_TYPE_GOAL,
  PLACEMENT_TYPE_HERO,
  T_LEVEL_THEMES,
  T_LEVEL_FORMAT
} from '../helpers/consts';
import { TILES } from '../helpers/tiles';
import { placementProperties } from '../game-objects/Placement';

export type state = {
  theme: T_LEVEL_THEMES;
  tilesWidth: number;
  tilesHeight: number;
  placements: placementProperties[];
};

export class LevelState {
  #theme!: T_LEVEL_THEMES;
  #tilesWidth!: number;
  #tilesHeight!: number;
  #placements!: placementProperties[];

  constructor(
    public levelId: T_LEVEL_FORMAT,
    public onEmit: (state: state) => void
  ) {
    this.start();
  }

  start() {
    this.#theme = LEVEL_THEMES.BLUE;
    this.#tilesWidth = 8;
    this.#tilesHeight = 8;
    this.#placements = [
      { id: 0, x: 2, y: 2, type: PLACEMENT_TYPE_HERO },
      { id: 1, x: 6, y: 4, type: PLACEMENT_TYPE_GOAL }
    ];

    setTimeout(() => {
      this.#placements = [
        ...this.#placements,
        { id: 6, x: 5, y: 5, frameCoord: TILES.BULLET }
      ];
      this.onEmit(this.getState());
    }, 1000);
  }

  getState(): state {
    return {
      theme: this.#theme,
      tilesWidth: this.#tilesWidth,
      tilesHeight: this.#tilesHeight,
      placements: this.#placements
    };
  }

  destroy() {
    // Tear down the level.
  }
}
