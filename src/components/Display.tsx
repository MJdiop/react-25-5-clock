import { PauseIcon, PlayIcon, ResetIcon } from '../icons';
import { DisplayProps } from '../interfaces';
import { formatTime } from '../utils';

export const Display = ({ displayState, reset, startStop }: DisplayProps) => {
  return (
    <div className="display">
      <h4 id="timer-label">{displayState.timeType}</h4>
      <span
        id="time-left"
        style={{
          color: `${
            displayState.timerRunning
              ? 'rgba(232, 74, 74, 0.87)'
              : 'rgba(40, 38, 38, 0.87)'
          }`,
        }}
      >
        {formatTime(displayState.time)}
      </span>
      <div>
        <button id="start_stop" onClick={() => startStop(displayState)}>
          {displayState.timerRunning ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button id="reset" onClick={reset}>
          <ResetIcon />
        </button>
      </div>
    </div>
  );
};
