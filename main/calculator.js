
class calculator {

    add(first, second) {

        if (arguments.length === 2 && typeof first === 'number' && typeof second === 'number') return first + second;

        if (arguments.length === 1 && Array.isArray(first) && first.length > 1 && first.every(a => typeof a === 'number')) {
            return first.reduce((a, b) => a + b);
        }

        return false;
    }

    multiply(first, second) {

        if (arguments.length === 2 && typeof first === 'number' && typeof second === 'number') return first * second;

        if (arguments.length === 1 && Array.isArray(first) && first.length > 1 && first.every(a => typeof a === 'number')) {
            return first.reduce((a, b) => a * b);
        }

        return false;
    }
}

module.exports = calculator;