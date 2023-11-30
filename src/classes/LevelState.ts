import { PlacementInstance, placementFactory } from './PlacementFactory';
import { PlacementProps } from '../game-objects/Placement';
import {
  LEVEL_THEMES,
  PLACEMENT_TYPE_GOAL,
  PLACEMENT_TYPE_HERO,
  T_LEVEL_THEMES,
  T_LEVEL_FORMAT
} from '../helpers/consts';

export type StateProperties = {
  theme: T_LEVEL_THEMES;
  tilesWidth: number;
  tilesHeight: number;
  placements: PlacementInstance[];
};

export class LevelState {
  #theme!: T_LEVEL_THEMES;
  #tilesWidth!: number;
  #tilesHeight!: number;
  #placements!: PlacementInstance[];

  constructor(
    public levelId: T_LEVEL_FORMAT,
    public onEmit: (state: StateProperties) => void,
    private initialTilesWidth = 8,
    private initialTilesHeight = 8
  ) {
    this.start();
  }

  start() {
    this.#theme = LEVEL_THEMES.BLUE;
    this.#tilesWidth = this.initialTilesWidth;
    this.#tilesHeight = this.initialTilesHeight;
    // Create an array of placement property configurations
    const placementProps: PlacementProps[] = [
      { id: 0, x: 2, y: 2, type: PLACEMENT_TYPE_HERO },
      { id: 1, x: 6, y: 4, type: PLACEMENT_TYPE_GOAL }
    ];
    // Create instances from those configurations and assign them to placements
    this.#placements = placementProps
      .map((config): PlacementInstance | null => {
        return placementFactory.createPlacement(config, this);
      })
      // Filter out any placement that is null, meaning the "type" was not found
      .filter((placement) => placement !== null) as PlacementInstance[];
  }

  getState(): StateProperties {
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
