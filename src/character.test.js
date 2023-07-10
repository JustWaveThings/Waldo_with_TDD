import Character from './character';

describe('Character', () => {
  describe('name', () => {
    it('should return the name of the character', () => {
      const Bob = Character('Bob');
      expect(Bob.name).toBe('Bob');
    });
  });

  describe('checkFound', () => {
    it('should return true if query coordinates are within the circle', () => {
      const Bob = Character('Bob', [0, 0], 5);
      expect(Bob.checkFound([3, 4])).toBe(true);
    });
    it('should return true if query coordinates are on the edge of the circle', () => {
      const Bob = Character('Bob', [0, 0], 5);
      expect(Bob.checkFound([5, 0])).toBe(true);
    });

    it('should return false if query coordinates are outside the circle', () => {
      const Bob = Character('Bob', [0, 0], 5);
      expect(Bob.checkFound([7, 8])).toBe(false);
    });
  });
});
