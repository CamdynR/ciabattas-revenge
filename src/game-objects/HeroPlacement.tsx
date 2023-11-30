import { Placement } from './Placement';
import Hero from '../components/object-graphics/Hero';

export class HeroPlacement extends Placement {
  tick(): void {
    console.log('Update the hero!');
  }

  renderComponent(): JSX.Element {
    return <Hero />;
  }
}
