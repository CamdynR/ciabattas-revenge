import { LEVEL_THEMES } from '../helpers/consts';

export class LevelState {
  constructor(
    public levelId: string,
    public onEmit: () => void
  ) {}

  start() {
    this.theme = LEVEL_THEMES.BLUE;
    this.tilesWidth = 8;
    this.tilesHeight = 8;
    this.placements = [{ id: 0, x: 2, y: 2, frameCoord: '0x2' }];
  }
}
