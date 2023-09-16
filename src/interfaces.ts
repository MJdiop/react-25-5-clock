export interface DisplayState {
  time: number;
  timeType: "Session" | "Break";
  timerRunning: boolean;
}


export interface TimerSetterProps {
  time: number;
  setTime: (time: number) => void;
  min: number;
  max: number;
  interval: number;
  type: "break" | "session";
}

export interface DisplayProps {
  displayState: DisplayState;
  reset: () => void;
  startStop: (displayState: DisplayState) => void;
}