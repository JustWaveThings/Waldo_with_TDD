import Character from './character';

describe('Character', () => {
  describe('charObject', () => {
    test('should return the name of the character', () => {
      // arrange
      const Bob = Character('Bob');
      const arrange = Bob.charObject.pubName();
      const assert = 'Bob';
      // act

      // assert
      expect(arrange).toBe(assert);
    });
    test('should return value of the found property', () => {
      // arrange
      const Bob = Character('Bob');
      const arrange = Bob.charObject.pubFound();
      const assert = false;
      // act
      // assert
      expect(arrange).toBe(assert);
    });
  });

  describe('checkFound', () => {
    test('should return true if query coordinates are within the circle', () => {
      // arrange
      const Bob = Character('Bob', [0, 0], 5);
      const assert = true;
      // act
      const act = [3, 4];
      // assert
      expect(Bob.getCheckFound(act)).toBe(assert);
    });
    test('should return true if query coordinates are on the edge of the circle', () => {
      // arrange
      const Bob = Character('Bob', [0, 0], 5);
      const assert = true;
      // act
      const act = [5, 0];
      // assert
      expect(Bob.getCheckFound(act)).toBe(assert);
    });

    test('should return false if query coordinates are outside the circle', () => {
      // arrange
      const Bob = Character('Bob', [0, 0], 5);
      const assert = false;
      // act
      const act = [7, 8];
      // assert
      expect(Bob.getCheckFound(act)).toBe(assert);
    });

    test('should return true on second call if query coordinates are within the circle', () => {
      // arrange
      const Bob = Character('Bob', [0, 0], 5);
      const assert = true;
      // act
      const act = [3, 4];
      Bob.getCheckFound(act);
      Bob.getCheckFound(act);
      // assert
      expect(Bob.charObject.pubFound()).toBe(assert);
    });

    test('should return true after all calls if query coordinates on any of the calls are within the circle', () => {
      // arrange
      const Bob = Character('Bob', [0, 0], 5);
      const assert = true;
      // act
      const act = [3, 4];
      Bob.getCheckFound(act);
      Bob.getCheckFound(act);
      Bob.getCheckFound([15, 15]); // outside the circle to test it didn't flip back to false
      // assert
      expect(Bob.charObject.pubFound()).toBe(assert);
    });
  });
});
