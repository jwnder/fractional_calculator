/**
 * Does string has nominator and denominator
 * @param {String} str 
 * @returns {boolean}
 */
function isFraction(str) {
    return String(str).indexOf('/') >= 0;
}

/**
 * Convert string to split function
 * @param {String} str 
 * @returns {Object}
 */
function splitFraction(str) {
    let splits = String(str).split(/_/);
    if (isFraction(splits[0])) {
        let num = 0;
        let [nom, denom] = isFraction(splits[0]) ? splits[0].split(/\//) : [0, 1];
        return { num, nom: Number(nom), denom: Number(denom) }
    } else {
        let num = Number(splits[0]);
        let [nom, denom] = isFraction(splits[1]) ? splits[1].split(/\//) : [0, 1];
        return { num, nom: Number(nom), denom: Number(denom) }
    }
}

/**
 * Convert split fraction to fraction string format 
 * @param {Number} sf 
 * @returns {String}
 */
function makeFraction(sf) {
    let str = '';
    if (sf.num * 1 != 0) str += sf.num;
    if (sf.nom * 1 != 0 && sf.num * 1 != 0) str += "_";
    if (sf.nom * 1 != 0) str += sf.nom + "/" + sf.denom;
    if (str === '') str += '0';
    return str;
}

/**
 * Simplify split fraction 
 * @param {Number} sf : split fraction 
 * @returns 
 */
function simplifySplitFraction(sf) {
    let { num, nom, denom } = sf;
    if (nom * 1 >= denom * 1) {
        num = num + Math.floor(nom / denom);
        nom = nom % denom;
        denom = nom == 0 ? 1 : denom;
    }
    if (nom != 0) {
        let gcdV = gcd(nom, denom);
        denom /= gcdV;
        nom /= gcdV;
    }
    return { num, nom, denom };
}

export { makeFraction, simplifySplitFraction, splitFraction }
