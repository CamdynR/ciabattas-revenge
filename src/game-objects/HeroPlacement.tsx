import { Placement } from './Placement';
import Sprite from '../components/object-graphics/Sprite';
import { CELL_SIZE } from '../helpers/consts';
import { TILES } from '../helpers/tiles';

export class HeroPlacement extends Placement {
  renderComponent(): JSX.Element {
    return <Sprite frameCoord={TILES.HERO_RIGHT} size={CELL_SIZE * 2} />;
  }
}
