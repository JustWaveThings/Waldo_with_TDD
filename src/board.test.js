import Board from './board';

describe('Testing Board', () => {
  let testBoard;
  const testCharacters = [{ a: false }, { b: false }, { c: false }];
  beforeAll(() => {
    testBoard = Board(testCharacters);
  });

  describe('Board exists', () => {
    test('should see if it exists', () => {
      expect(testBoard).toBeDefined();
    });
    test('initialized with character array', () => {
      expect(testBoard.characterArray).toEqual(testCharacters);
    });
  });
});
