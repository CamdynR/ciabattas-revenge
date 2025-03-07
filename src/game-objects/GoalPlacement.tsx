import Sprite from '../components/object-graphics/Sprite';
import { TILES } from '../helpers/tiles';
import { Placement } from './Placement';

export class GoalPlacement extends Placement {
  tick(): void {}

  renderComponent(): JSX.Element {
    return <Sprite frameCoord={TILES.GOAL_DISABLED} />;
  }
}
