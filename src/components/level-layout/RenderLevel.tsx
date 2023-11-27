// RenderLevel.tsx

import { useContext } from 'react';
import SpriteContext from '../../contexts/SpriteContext';
import styles from './RenderLevel.module.css';
import Sprite from '../object-graphics/Sprite';

export default function RenderLevel(): JSX.Element {
  const spriteSheetImage = useContext(SpriteContext);

  return (
    (spriteSheetImage && (
      <div className={styles.fullScreenContainer}>
        <div className={styles.gameScreen}>
          <Sprite image={spriteSheetImage} frameCoord={'1x0'} />
          <Sprite image={spriteSheetImage} frameCoord={'0x2'} />
          <Sprite image={spriteSheetImage} frameCoord={'2x3'} />
          <Sprite image={spriteSheetImage} frameCoord={'5x3'} />
          <Sprite image={spriteSheetImage} frameCoord={'3x4'} />
          <Sprite image={spriteSheetImage} frameCoord={'1x5'} />
          <Sprite image={spriteSheetImage} frameCoord={'2x5'} />
        </div>
      </div>
    )) || <></>
  );
}
