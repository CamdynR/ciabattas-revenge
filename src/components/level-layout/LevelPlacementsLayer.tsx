import { CSSProperties } from 'react';
import { CELL_SIZE } from '../../helpers/consts';
import Sprite from '../object-graphics/Sprite';
import { levelProp } from './LevelBackgroundTilesLayer';

export default function LevelPlacementsLayer({ level }: levelProp): JSX.Element {
  return (
    <div className="placementSprites">
      {level.placements.map((placement) => {
        // Wrap each Sprite in a positioned div
        const x = placement.x * CELL_SIZE;
        const y = placement.y * CELL_SIZE;
        const style: CSSProperties = {
          position: 'absolute',
          transform: `translate3d(${x}px, ${y}px, 0)`
        };

        return (
          <Sprite
            key={placement.id}
            frameCoord={placement.frameCoord}
            style={style}
          />
        );
      })}
    </div>
  );
}