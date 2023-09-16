

export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes < 10 ? "0" + minutes.toString() : minutes}:${seconds < 10 ? "0" + seconds.toString() : seconds
    }`;
};

export const defaultBreakTime = 5 * 60;
export const defaultSessionTime = 25 * 60;
export const min = 60;
export const max = 60 * 60;
export const interval = 60;