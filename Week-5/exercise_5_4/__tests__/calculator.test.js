const mathOperations = require('../mathOperations');

describe('Math operations', () => {
  describe('Sum function', () => {
    test('adds two positive integers', () => {
      expect(mathOperations.sum(2, 3)).toEqual(5);
    });

    test('adds a positive and a negative integer', () => {
      expect(mathOperations.sum(2, -3)).toEqual(-1);
    });

    test('adds two negative integers', () => {
      expect(mathOperations.sum(-2, -3)).toEqual(-5);
    });
  });

  describe('Diff function', () => {
    test('subtracts two positive integers', () => {
      expect(mathOperations.diff(5, 2)).toEqual(3);
    });

    test('subtracts a positive and a negative integer', () => {
      expect(mathOperations.diff(2, -3)).toEqual(5);
    });

    test('subtracts two negative integers', () => {
      expect(mathOperations.diff(-2, -3)).toEqual(1);
    });
  });

  describe('Product function', () => {
    test('multiplies two positive integers', () => {
      expect(mathOperations.product(2, 3)).toEqual(6);
    });

    test('multiplies a positive and a negative integer', () => {
      expect(mathOperations.product(2, -3)).toEqual(-6);
    });

    test('multiplies two negative integers', () => {
      expect(mathOperations.product(-2, -3)).toEqual(6);
    });
  });
});
