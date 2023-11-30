import { LevelState } from '../classes/LevelState';
import { PlacementOpts } from '../components/level-layout/LevelLayout';
import { T_PLACEMENT_TYPE } from '../helpers/consts';

// Swap frameCoord for a placement type
export type PlacementProps = Omit<PlacementOpts, 'frameCoord'> & {
  type: T_PLACEMENT_TYPE;
};

export class Placement {
  type: PlacementProps['type'];
  x: PlacementProps['x'];
  y: PlacementProps['y'];
  id: PlacementProps['id'];
  level: LevelState;

  constructor(properties: PlacementProps, level: LevelState) {
    this.type = properties.type;
    this.x = properties.x;
    this.y = properties.y;
    this.id = properties.id;
    this.level = level;
  }

  tick(): void {}

  renderComponent(): JSX.Element {
    return <></>;
  }
}
