import assert from 'assert';
import { splitFraction, simplifySplitFraction } from '../src/splitfraction.js';

describe('Split Fraction Tests', () => {
    it('whole number', () => {
        let result = splitFraction('1');
        assert.equal(result.num, 1);
        assert.equal(result.nom, 0);
        assert.equal(result.denom, 1);
    });
    it('simple fraction', () => {
        let result = splitFraction('1/2');
        assert.equal(result.num, 0);
        assert.equal(result.nom, 1);
        assert.equal(result.denom, 2);
    });
    it('complex fraction', () => {
        let result = splitFraction('3_1/2');
        assert.equal(result.num, 3);
        assert.equal(result.nom, 1);
        assert.equal(result.denom, 2);
    });
    it('simplify number', () => {
        let result = simplifySplitFraction({ num: 0, nom: 2, denom: 1 });
        assert.equal(result.num, 2);
        assert.equal(result.nom, 0);
        assert.equal(result.denom, 1);
    });
});

