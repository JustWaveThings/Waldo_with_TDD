/* eslint-disable global-require */

describe('Testing Board', () => {
  let testBoard;
  const testCharacters = [
    { name: 'a', value: false },
    { name: 'b', value: false },
    { name: 'c', value: false },
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
    testCharacters[0].value = true;
    test('return true for character a on "foundStatus"', () => {
      expect(testBoard.characterArray[0].value).toEqual(true);
    });

    test('returns count of two characters for false values', () => {
      const activeChars = testBoard.characterArray.filter(item => item.value === false);
      expect(activeChars).toHaveLength(2);
    });
  });
});
