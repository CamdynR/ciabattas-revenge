import { Placement, PlacementProps } from './Placement';
import Hero from '../components/object-graphics/Hero';
import { LevelState } from '../classes/LevelState';
import { DIRECTION_RIGHT, DIRECTION_UPDATE_MAP } from '../helpers/consts';

export class HeroPlacement extends Placement {
  constructor(properties: PlacementProps, level: LevelState) {
    super(properties, level);
    this.movingPixelsRemaining = 16;
    this.movingPixelsDirection = DIRECTION_RIGHT;
  }

  tick(): void {
    this.tickMovingPixelProgress();
  }

  tickMovingPixelProgress(): void {
    if (this.movingPixelsRemaining === 0) return;

    console.log(this.movingPixelsRemaining);
    this.movingPixelsRemaining -= this.travelPixelsPerFrame;
    if (this.movingPixelsRemaining <= 0) {
      this.movingPixelsRemaining = 0;
      this.onDoneMoving();
    }
  }

  onDoneMoving() {
    // Update my x/y!
    const { x, y } = DIRECTION_UPDATE_MAP[this.movingPixelsDirection];
    this.x += x;
    this.y += y;
  }

  renderComponent(): JSX.Element {
    return <Hero />;
  }
}
