// Sprite.ts
import { useEffect, useRef, memo } from 'react';
import { CELL_SIZE } from '../../helpers/consts';

type spriteProps = {
  image: HTMLImageElement;
  frameCoord: `${number}x${number}`;
  size?: number;
};

function Sprite({ image, frameCoord, size = 16 }: spriteProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Grab the <canvas> element reference
    const canvasEl = canvasRef.current;
    if (canvasEl === null) return;

    // Grab the context for the Canvas element
    const ctx = canvasEl.getContext('2d');
    if (ctx === null) {
      throw Error('Unable to get Canvas context');
    }

    // Clear out anything in the canvas tag
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    // Draw out graphic to canvas tag
    const tileSheetX = Number(frameCoord.split('x')[0]);
    const tileSheetY = Number(frameCoord.split('x')[1]);

    ctx.drawImage(
      image, // Image to pull from
      tileSheetX * CELL_SIZE, // Left X corner of frame
      tileSheetY * CELL_SIZE, // Top Y corner of frame
      size, // How much to crop from the sprite sheet (X)
      size, // How much to crop from the sprite sheet (Y)
      0, // Where to place this on canvas tag X (0)
      0, // Where to place this on canvas tag Y (0)
      size, // How large to scale it (X)
      size // How large to scale it (Y)
    );
  }, [image, frameCoord, size]);

  return <canvas width={size} height={size} ref={canvasRef}></canvas>;
}

const MemoizedSprite = memo(Sprite);
export default MemoizedSprite;
