import { CELL_SIZE } from '../../helpers/consts';
import { TILES } from '../../helpers/tiles';
import styles from './Hero.module.css';
import Sprite from './Sprite';

export default function Hero(): JSX.Element {
  return (
    <div className={styles.hero}>
      <div>
        <Sprite frameCoord={TILES.SHADOW} />
      </div>
      <div className={styles.heroBody}>
        <Sprite frameCoord={TILES.HERO_RIGHT} size={CELL_SIZE * 2} />
      </div>
    </div>
  );
}
