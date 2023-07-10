const Timer = () => {
  const startTimer = () => Date.now() / 1000;
  const stopTimer = () => Date.now() / 1000;

  const ElapsedTime = (start, stop) => stop - start;

  // public methods
  const startClock = () => startTimer();
  const stopClock = () => stopTimer();
  const getElapsedTime = (start, stop) => ElapsedTime(start, stop);

  return { startClock, stopClock, getElapsedTime };
};
export default Timer;
