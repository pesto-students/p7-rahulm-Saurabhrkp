const mathOperations = require('./mathOperations');

describe('mathOperations', () => {
  describe('sum', () => {
    it('should add two positive numbers correctly', () => {
      expect(mathOperations.sum(1, 2)).toBe(3);
    });

    it('should add a positive and a negative number correctly', () => {
      expect(mathOperations.sum(1, -2)).toBe(-1);
    });

    it('should add two negative numbers correctly', () => {
      expect(mathOperations.sum(-1, -2)).toBe(-3);
    });
  });

  describe('diff', () => {
    it('should subtract two positive numbers correctly', () => {
      expect(mathOperations.diff(2, 1)).toBe(1);
    });

    it('should subtract a positive and a negative number correctly', () => {
      expect(mathOperations.diff(2, -1)).toBe(3);
    });

    it('should subtract two negative numbers correctly', () => {
      expect(mathOperations.diff(-2, -1)).toBe(-1);
    });
  });

  describe('product', () => {
    it('should multiply two positive numbers correctly', () => {
      expect(mathOperations.product(2, 3)).toBe(6);
    });

    it('should multiply a positive and a negative number correctly', () => {
      expect(mathOperations.product(2, -3)).toBe(-6);
    });

    it('should multiply two negative numbers correctly', () => {
      expect(mathOperations.product(-2, -3)).toBe(6);
    });
  });
});
