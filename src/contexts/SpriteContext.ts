// SpriteContext.ts

import { createContext } from 'react';

const SpriteContext = createContext<HTMLImageElement | null>(null);

export default SpriteContext;
