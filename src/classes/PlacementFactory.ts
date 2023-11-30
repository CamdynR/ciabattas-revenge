import { GoalPlacement } from '../game-objects/GoalPlacement';
import { HeroPlacement } from '../game-objects/HeroPlacement';
import { PlacementProps } from '../game-objects/Placement';
import { PLACEMENT_TYPE_GOAL, PLACEMENT_TYPE_HERO } from '../helpers/consts';
import { LevelState } from './LevelState';

export type PlacementInstance = HeroPlacement | GoalPlacement;

class PlacementFactory {
  createPlacement(
    config: PlacementProps,
    level: LevelState
  ): PlacementInstance | null {
    const instance = this.getInstance(config, level);
    // Make ID here...
    return instance;
  }

  getInstance(
    config: PlacementProps,
    level: LevelState
  ): PlacementInstance | null {
    switch (config.type) {
      case PLACEMENT_TYPE_HERO:
        return new HeroPlacement(config, level);
      case PLACEMENT_TYPE_GOAL:
        return new GoalPlacement(config, level);
      default:
        console.error(`Type not found: ${config.type}`);
        return null;
    }
  }
}

export const placementFactory = new PlacementFactory();
