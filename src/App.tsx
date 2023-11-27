// App.tsx

import { useEffect, useState } from 'react';
import { SPRITE_SHEET_SRC } from './helpers/consts';
import SpriteContext from './contexts/SpriteContext';
import RenderLevel from './components/level-layout/RenderLevel';

export default function App(): JSX.Element | null {
  const [spriteSheetImage, setSpriteSheetImage] =
    useState<HTMLImageElement | null>(null);

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
