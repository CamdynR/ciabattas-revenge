import { CSSProperties } from 'react';
import { CELL_SIZE } from '../../helpers/consts';
import { StateProperties } from '../../classes/LevelState';

export default function LevelPlacementsLayer({
  level
}: {
  level: StateProperties;
}): JSX.Element {
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
          <div className="placementWrapper" key={placement.id} style={style}>
            {placement.renderComponent()}
          </div>
        );
      })}
    </div>
  );
}
