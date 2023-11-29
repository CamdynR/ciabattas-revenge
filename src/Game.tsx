// Game.tsx

import { useEffect, useState } from 'react';
import { SPRITE_SHEET_SRC } from './helpers/consts';
import { SpriteContext } from './hooks/useSpriteSheet';
import RenderLevel from './components/level-layout/RenderLevel/RenderLevel';

export default function Game(): JSX.Element | null {
  const [spriteSheetImage, setSpriteSheetImage] = useState<HTMLImageElement | null>(null);

  // Load the sprite sheet on game mount
  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC;
    image.addEventListener('load', () => {
      setSpriteSheetImage(image);
    });
  }, []);

  // Exit early if there's no sprite sheet
  if (!spriteSheetImage) return null;

  return (
    <SpriteContext.Provider value={spriteSheetImage}>
      <RenderLevel />
    </SpriteContext.Provider>
  );
}
