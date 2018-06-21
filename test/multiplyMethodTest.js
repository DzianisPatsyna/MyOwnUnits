const calculatorClass = require('../main/calculator');
const instance = new calculatorClass();

describe('calculator should be able to multiply numbers', () => {

    it('should allow to call multiply method for instance of class', () => {
        expect(instance.multiply).toBeDefined();
        expect(typeof instance.multiply).toBe('function');
        throw new Error('My first error');
    });

    it('should be able to multiply numbers if their length two', () => {
        expect(instance.multiply(2, 2)).toEqual(4);
        expect(instance.multiply(2, 1)).toEqual(2);
        expect(instance.multiply(1, 2)).toEqual(2);
        expect(instance.multiply(1, 1)).toEqual(1);
        expect(instance.multiply(19, 0)).toEqual(0);
        expect(instance.multiply(23, 23)).toEqual(529);
        expect(instance.multiply(534, 123)).toEqual(65682);
        expect(instance.multiply(0, 0)).toEqual(0);
    });

    it('should be able to multiply numbers of an array', () => {
        expect(instance.multiply([2, 1])).toEqual(4);
        expect(instance.multiply([1, 2])).toEqual(2);
        expect(instance.multiply([-2, 3])).toEqual(-6);
        expect(instance.multiply([3, -2])).toEqual(-6);
        expect(instance.multiply([-24, -6])).toEqual(144);
        expect(instance.multiply([-12, 3])).toEqual(-36);
        expect(instance.multiply([143, 343])).toEqual(49049);
        expect(instance.multiply([0, 0])).toEqual(0);
    });

    it('should return false', () => {
        expect(instance.multiply(null, null)).toBeFalsy();
        expect(instance.multiply(1, null)).toBeFalsy();
        expect(instance.multiply(null, 1)).toBeFalsy();
        expect(instance.multiply([1, 2], null)).toBeFalsy();
        expect(instance.multiply(null, [1, 4])).toBeFalsy();
        expect(instance.multiply(1, 2, 3)).toBeFalsy();
        expect(instance.multiply('string', 'string')).toBeFalsy();
        expect(instance.multiply([1, 3], 'string')).toBeFalsy();
        expect(instance.multiply([1])).toBeFalsy();
        expect(instance.add(['string', 'string'])).toBeFalsy();
        expect(instance.add([[1, 2]], [1, 5])).toBeFalsy();
        expect(instance.add([{a: 1, a: 2}, {a: 1, b: 5}])).toBeFalsy();
    });
});