// LevelBackgroundTilesLayer.tsx
import MapCell from './MapCell';
import { THEME_TILES_MAP } from '../../helpers/consts';
import { LevelProps } from './LevelLayout';
import { T_SPRITE_COORD } from '../../helpers/consts';

export function LevelBackgroundTilesLayer({ level }: LevelProps): JSX.Element {
  const widthWithWalls = level.tilesWidth + 1;
  const heightWithWalls = level.tilesHeight + 1;
  const tiles = THEME_TILES_MAP[level.theme];

  function getBackgroundTile(x: number, y: number): T_SPRITE_COORD {
    if (x === 0) return tiles.LEFT;
    else if (x === widthWithWalls) return tiles.RIGHT;
    else if (y === 0) return tiles.TOP;
    else if (y === heightWithWalls) return tiles.BOTTOM;
    return tiles.FLOOR;
  }

  const canvases: JSX.Element[] = [];
  for (let y = 0; y <= heightWithWalls; y++) {
    for (let x = 0; x <= widthWithWalls; x++) {
      // Skip Bottom Left and Bottom Right for intentional blank tiles
      if (y === heightWithWalls && (x === 0 || x === widthWithWalls)) {
        continue;
      }

      // Add a cell to the map
      canvases.push(
        <MapCell
          key={`${x}_${y}`}
          x={x}
          y={y}
          frameCoord={getBackgroundTile(x, y)}
        />
      );
    }
  }

  return <div className="backgroundTiles">{canvases}</div>;
}
