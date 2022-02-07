import assert from 'assert';
import { lcm, splitFraction, makeFraction, simplifySplitFraction } from '../src/utils.js';

describe('Utils', () => {
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
});

