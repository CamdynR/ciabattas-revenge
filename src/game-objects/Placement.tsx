import { LevelState } from '../classes/LevelState';
import { PlacementOpts } from '../components/level-layout/LevelLayout';
import {
  CELL_SIZE,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_UP,
  T_DIRECTION,
  T_PLACEMENT_TYPE
} from '../helpers/consts';

// Swap frameCoord for a placement type
export type PlacementProps = Omit<PlacementOpts, 'frameCoord'> & {
  type: T_PLACEMENT_TYPE;
};

export class Placement {
  // Placement Properties
  type: PlacementProps['type'];
  x: PlacementProps['x'];
  y: PlacementProps['y'];
  id: PlacementProps['id'];
  // Level State
  level: LevelState;
  // Basic Defaults
  travelPixelsPerFrame: number;
  movingPixelsRemaining: number;
  movingPixelsDirection: T_DIRECTION;

  constructor(properties: PlacementProps, level: LevelState) {
    // Placement Properties
    this.type = properties.type;
    this.x = properties.x;
    this.y = properties.y;
    this.id = properties.id;
    // Level State
    this.level = level;
    // Basic Defaults
    this.travelPixelsPerFrame = 1.5;
    this.movingPixelsRemaining = 0;
    this.movingPixelsDirection = DIRECTION_RIGHT;
  }

  tick(): void {}

  displayXY(): [number, number] {
    if (this.movingPixelsRemaining > 0) {
      return this.displayMovingXY();
    }

    const x = this.x * CELL_SIZE;
    const y = this.y * CELL_SIZE;
    return [x, y];
  }

  displayMovingXY(): [number, number] {
    const x = this.x * CELL_SIZE;
    const y = this.y * CELL_SIZE;
    const progressPixels = CELL_SIZE - this.movingPixelsRemaining;
    switch (this.movingPixelsDirection) {
      case DIRECTION_LEFT:
        return [x - progressPixels, y];
      case DIRECTION_RIGHT:
        return [x + progressPixels, y];
      case DIRECTION_UP:
        return [x, y - progressPixels];
      default:
        return [x, y + progressPixels];
    }
  }

  renderComponent(): JSX.Element {
    return <></>;
  }
}
