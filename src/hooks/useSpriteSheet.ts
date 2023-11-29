// SpriteContext.ts

import { createContext, useContext } from 'react';

export const SpriteContext = createContext<HTMLImageElement | null>(null);

// Custom hook to consume the context with a type guard
export const useSpriteSheet = (): HTMLImageElement => {
  const spriteSheetImage = useContext(SpriteContext);
  if (!spriteSheetImage) throw new Error('Sprite sheet image not available.');
  return spriteSheetImage
};
