// trying to test without mocking the board
import Board from './board';
import Character from './character';

describe('testing board without board mock', () => {
  const bob = Character('Bob', [0, 0], 5);
  const terry = Character('Terry', [10, 10], 5);
  const sylvia = Character('Sylvia', [20, 20], 5);
  const characters = [bob, terry, sylvia];
  const testBoard = Board(characters);

  describe('Board exists / initialized correctly', () => {
    test('should see if it exists', () => {
      expect(testBoard).toBeDefined();
    });

    test('initialized with character array', () => {
      expect(testBoard.characters).toEqual(characters);
    });
  });

  describe('board returns', () => {
    test('returns count of two characters for false values based on three characters', () => {
      // arrange

      const assert = 2;

      // act
      bob.getCheckFound([3, 4]);
      const act = testBoard.numberOfNotFoundCharacters();

      // assert
      expect(act).toBe(assert);
    });
  });
});
