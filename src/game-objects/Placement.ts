import { placement } from '../components/level-layout/LevelLayout';
import { T_LEVEL_FORMAT, T_PLACEMENT_TYPE } from '../helpers/consts';

// Swap frameCoord for a placement type
export type placementProperties = Omit<placement, 'frameCoord'> & {
  type: T_PLACEMENT_TYPE;
};

export class Placement {
  type: placementProperties['type'];
  x: placementProperties['x'];
  y: placementProperties['y'];
  level: T_LEVEL_FORMAT;

  constructor(properties: placementProperties, level: T_LEVEL_FORMAT) {
    this.type = properties.type;
    this.x = properties.x;
    this.y = properties.y;
    this.level = level;
  }

  renderComponent(): null {
    return null;
  }
}
