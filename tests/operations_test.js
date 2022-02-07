import assert from 'assert';
import { addFraction, subFraction, divFraction, mulFraction } from '../src/operations.js';
import { splitFraction } from '../src/splitfraction.js';

describe('Operations Tests', () => {
    it('add whole number', () => {
        let result = addFraction(splitFraction(1), splitFraction(2));
        assert.equal(result.num, 3);
        assert.equal(result.nom, 0);
        assert.equal(result.denom, 1);
    });
    it('add fraction', () => {
        let result = addFraction(splitFraction('1/2'), splitFraction('1/4'));
        assert.equal(result.num, 0);
        assert.equal(result.nom, 3);
        assert.equal(result.denom, 4);
    });
    it('subtract whole number', () => {
        let result = subFraction(splitFraction('2'), splitFraction('1'));
        assert.equal(result.num, 1);
        assert.equal(result.nom, 0);
        assert.equal(result.denom, 1);
    });
    it('subtract fraction', () => {
        let result = subFraction(splitFraction('1/2'), splitFraction('1/4'));
        assert.equal(result.num, 0);
        assert.equal(result.nom, 1);
        assert.equal(result.denom, 4);
    });
    it('multiply whole number', () => {
        let result = mulFraction(splitFraction('1'), splitFraction('2'));
        assert.equal(result.num, 0);
        assert.equal(result.nom, 2);
        assert.equal(result.denom, 1);
    });
    it('multiply fraction', () => {
        let result = mulFraction(splitFraction('1/2'), splitFraction('1/4'));
        assert.equal(result.num, 0);
        assert.equal(result.nom, 1);
        assert.equal(result.denom, 8);
    });
    it('divide whole number', () => {
        let result = divFraction(splitFraction('1'), splitFraction('2'));
        assert.equal(result.num, 0);
        assert.equal(result.nom, 1);
        assert.equal(result.denom, 2);
    });
    it('divide fraction', () => {
        let result = divFraction(splitFraction('1/2'), splitFraction('1/4'));
        assert.equal(result.num, 0);
        assert.equal(result.nom, 4);
        assert.equal(result.denom, 2);
    });
});
