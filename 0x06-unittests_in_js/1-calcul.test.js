const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 6 when inputs are 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 0 when inputs are -0.4 and 0.4', () => {
            assert.strictEqual(calculateNumber('SUM', -0.4, 0.4), 0);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -4 when inputs are 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return 0 when inputs are -0.5 and -0.5', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -0.5, -0.5), 0);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.2 when inputs are 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" when inputs are 1.4 and 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });

        it('should return 1 when inputs are 0.5 and 0.5', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0.5, 0.5), 1);
        });
    });
});
