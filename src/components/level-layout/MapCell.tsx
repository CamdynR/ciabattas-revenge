// MapCell.tsx
import { CELL_SIZE, T_SPRITE_COORD } from '../../helpers/consts';
import Sprite from '../object-graphics/Sprite';

type MapCellProps = {
  frameCoord: T_SPRITE_COORD;
  x: number;
  y: number;
};

export default function MapCell({
  frameCoord,
  x,
  y
}: MapCellProps): JSX.Element {
  return (
    <Sprite
      frameCoord={frameCoord}
      style={{
        position: 'absolute',
        left: x * CELL_SIZE,
        top: y * CELL_SIZE
      }}
    />
  );
}
