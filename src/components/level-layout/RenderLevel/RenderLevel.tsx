// RenderLevel.tsx

import { useState, useEffect } from 'react';
import styles from './RenderLevel.module.css';
import { LevelBackgroundTilesLayer } from '../LevelBackgroundTilesLayer';
import { THEME_BACKGROUNDS } from '../../../helpers/consts';
import LevelPlacementsLayer from '../LevelPlacementsLayer';
import { LevelState, StateProperties } from '../../../classes/LevelState';

export default function RenderLevel(): JSX.Element | null {
  const [level, setLevel] = useState<StateProperties | null>(null);

  useEffect(() => {
    // Create and subscribe to state changes
    const levelState = new LevelState('1-1', (newState) => {
      setLevel(newState);
    });

    // Get initial state
    setLevel(levelState.getState());

    // Destroy method when this component unmounts for cleanup
    return () => levelState.destroy();
  }, []);

  if (level === null) return null;

  return (
    <div
      className={styles.fullScreenContainer}
      style={{
        background: THEME_BACKGROUNDS[level.theme]
      }}
    >
      <div className={styles.gameScreen}>
        <LevelBackgroundTilesLayer level={level} />
        <LevelPlacementsLayer level={level} />
      </div>
    </div>
  );
}
