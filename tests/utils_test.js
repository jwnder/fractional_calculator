import assert from 'assert';
import { gcd, lcm } from '../src/utils.js';

describe('Utility Tests', () => {
    it('great common divisor prime numbers', () => {
        let result = gcd(3, 2);
        assert.equal(result, 1);
    });
    it('great common divisor non prime numbers', () => {
        let result = gcd(6, 12);
        assert.equal(result, 6);
    });
    it('least common multiplier prime numbers', () => {
        let result = lcm(3, 2);
        assert.equal(result, 6);
    });
    it('least common multiplier non prime numbers', () => {
        let result = lcm(6, 12);
        assert.equal(result, 12);
    });
});
