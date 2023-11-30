// How many ticks per second
const STEP = 1 / 60;

export class GameLoop {
  rafCallback: number | undefined;

  constructor(public onStep: () => void) {
    this.start();
  }

  start(): void {
    let previousMs: number | undefined;
    const tick: FrameRequestCallback = (timestampMs: number): void => {
      // Set previous if this is the first time running
      if (previousMs === undefined) previousMs = timestampMs;
      // Determine the time difference
      let delta = (timestampMs - previousMs) / 1000;
      // Wait for enough time to pass before continuing
      while (delta >= STEP) {
        this.onStep();
        delta -= STEP;
      }
      previousMs = timestampMs - delta * 1000;
      // Recapture the callback to be able to shut it off
      this.rafCallback = requestAnimationFrame(tick);
    };

    // Initial Kickoff
    this.rafCallback = requestAnimationFrame(tick);
  }

  stop(): void {
    this.rafCallback && cancelAnimationFrame(this.rafCallback);
  }
}
