
const calculatorClass = require('../main/calculator');
const instance = new calculatorClass();

describe('tests for add method', () => {

    it('should allow to call add metod for instance of class', () => {
        expect(instance.add).toBeDefined();
        expect(typeof instance.add).toBe('function');
    });

    it('should return false', () => {
        expect(instance.add(1)).toBeFalsy();
        expect(instance.add('string')).toBeFalsy();
        expect(instance.add({0: 1, 1: 2})).toBeFalsy();

        expect(instance.add('string', 'string')).toBeFalsy();
        expect(instance.add([1, 2], [1, 3])).toBeFalsy();
        expect(instance.add([1, 2, 3], 1)).toBeFalsy();
        expect(instance.add([1, 2, 4], 'string')).toBeFalsy();
        expect(instance.add(1, 'string')).toBeFalsy();

        expect(instance.add(1, 2, 3)).toBeFalsy();
        expect(instance.add([1], [2], [3])).toBeFalsy();
        expect(instance.add('string', 'string', 'string')).toBeFalsy();

        expect(instance.add()).toBeFalsy();
        expect(instance.add(null)).toBeFalsy();
        expect(instance.add(null, [1, 2])).toBeFalsy();

        expect(instance.add([1])).toBeFalsy();
        expect(instance.add(['string', 'string'])).toBeFalsy();
        expect(instance.add([[1, 2]], [1, 5])).toBeFalsy();
        expect(instance.add([{a: 1, b: 2}], {a: 1, b: 5})).toBeFalsy();
    });

    it('should add numbers if their length to equal two', () => {
        expect(instance.add(2, 2)).toEqual(5);
        expect(instance.add(3, 0)).toEqual(3);
        expect(instance.add(0, 3)).toEqual(3);
        expect(instance.add(11, 12)).toEqual(23);
        expect(instance.add(231, 323)).toEqual(554);
        expect(instance.add(0, 0)).toEqual(0);
    });

    it('should add numbers of an array', () => {
        expect(instance.add([1, 3])).toEqual(4);
        expect(instance.add([3, 0])).toEqual(3);
        expect(instance.add([0, 3])).toEqual(3);
        expect(instance.add([11, 12])).toEqual(23);
        expect(instance.add([231, 323])).toEqual(554);
        expect(instance.add([0, 0])).toEqual(0);
    });

    it('should be able to add negative numbers', () => {
        expect(instance.add(-5, 1)).toEqual(-4);
        expect(instance.add(1, -5)).toEqual(-4);
        expect(instance.add([55, -20])).toEqual(35);
        expect(instance.add([-134, 613])).toEqual(479);
        expect(instance.add(-121, -5)).toEqual(-126);
    });
});