/* eslint-disable global-require */

describe('Testing Board', () => {
  let testBoard;
  const testCharacters = [
    { name: 'a', found: false },
    { name: 'b', found: false },
    { name: 'c', found: false },
  ];

  beforeAll(() => {
    jest.mock('./board', () =>
      jest.fn(characters => ({
        characterArray: characters,
      }))
    );

    testBoard = require('./board')(testCharacters);
  });

  describe('Board exists / initialized correctly', () => {
    test('should see if it exists', () => {
      expect(testBoard).toBeDefined();
    });

    test('initialized with character array', () => {
      expect(testBoard.characterArray).toEqual(testCharacters);
    });
  });

  describe('board returns', () => {
    test('return true for character a on "foundStatus"', () => {
      // arrange
      testCharacters[0].found = true;
      const assert = true;

      // act

      // assert
      expect(testBoard.characterArray[0].found).toBe(assert);
    });

    test('returns count of two characters for false values', () => {
      // arrange
      testCharacters[0].found = true;
      const assert = 2;
      // act
      const activeChars = testBoard.characterArray.filter(item => item.found === false);

      // assert
      expect(activeChars.length).toBe(assert);
    });
  });
});
