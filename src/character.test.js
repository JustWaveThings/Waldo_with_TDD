import Character from './character';

describe('Character', () => {
  describe('name', () => {
    test('should return the name of the character', () => {
      // arrange
      const Bob = Character('Bob');
      const assert = 'Bob';
      // act
      // assert
      expect(Bob.name).toBe(assert);
    });
  });

  describe('checkFound', () => {
    test('should return true if query coordinates are within the circle', () => {
      // arrange
      const Bob = Character('Bob', [0, 0], 5);
      const assert = true;
      // act
      // assert
      expect(Bob.checkFound([3, 4])).toBe(assert);
    });
    test('should return true if query coordinates are on the edge of the circle', () => {
      // arrange
      const Bob = Character('Bob', [0, 0], 5);
      const assert = true;
      // act
      // assert
      expect(Bob.checkFound([5, 0])).toBe(assert);
    });

    test('should return false if query coordinates are outside the circle', () => {
      // arrange
      const Bob = Character('Bob', [0, 0], 5);
      const assert = false;
      // act
      // assert

      expect(Bob.checkFound([7, 8])).toBe(assert);
    });
  });
});
