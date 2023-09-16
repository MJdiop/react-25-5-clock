import { DownIcon, UpIcon } from '../icons';
import { TimerSetterProps } from '../interfaces';

export const TimeSetter = ({
  time,
  setTime,
  min,
  max,
  interval,
  type,
}: TimerSetterProps) => {
  return (
    <div>
      <button
        onClick={() => (time > min ? setTime(time - interval) : null)}
        id={`${type}-decrement`}
      >
        <DownIcon />
      </button>
      <span id={`${type}-length`}>{time / interval}</span>
      <button
        onClick={() => (time < max ? setTime(time + interval) : null)}
        id={`${type}-increment`}
      >
        <UpIcon />
      </button>
    </div>
  );
};
