import Timer from './timer';

let timer;
let start;
let end;

beforeAll(() => {
  timer = Timer();
  start = timer.startClock();
});

describe('Timer functions', () => {
  beforeAll(() => {
    timer = Timer();
    start = timer.startClock();
  });

  test('timer starts on start game click', () => {
    // arrange
    const assert = 0;
    // act
    const act = start;
    // assert
    expect(act).toBeGreaterThan(assert);
  });

  test('timer stops after 2 seconds', done => {
    // arrange
    const assert = start;
    // act
    setTimeout(() => {
      end = timer.stopClock();
      const act = end;
      // assert
      expect(act).toBeGreaterThan(assert);
      done();
    }, 2000);
  });

  test('elapsed time is positive', () => {
    // arrange
    // act
    const elapsedTime = timer.getElapsedTime(start, end);
    // assert
    expect(elapsedTime).toBeGreaterThanOrEqual(0);
  }, 10000);
});
