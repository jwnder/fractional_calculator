//Great Common Divisisor
function gcd(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y; y = x % y; x = t;
    }
    return x;
}

//Least Common Multiplier
function lcm(x, y) {
    return x * y / gcd(x, y);
}

//Does string has nominator and denominator
function isFraction(str) {
    return str.indexOf('/') >= 0;
}

function splitFraction(str) {
    let splits = str.split(/_/);
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

//Convert split fraction to fraction
function makeFraction(sf) {
    let str = '';
    if (sf.num * 1 != 0) str += sf.num;
    if (sf.nom * 1 != 0 && sf.num * 1 != 0) str += "_";
    if (sf.nom * 1 != 0) str += sf.nom + "/" + sf.denom;
    if (str === '') str += '0';
    return str;
}

//Simplify split fraction
function simplifySplitFraction(sf) {
    if (sf.nom * 1 > sf.denom * 1) {
        let num = sf.num + Math.floor(sf.nom / sf.denom);
        let nom = sf.nom % sf.denom;
        let denom = nom == 0 ? 1 : sf.denom;
        if (nom != 0) {
            let gcdV = gcd(nom, denom);
            denom /= gcdV;
            nom /= gcdV;
        }
        return { num, nom, denom };
    }
    return sf;
}

export {
    isFraction, splitFraction, makeFraction,
    simplifySplitFraction, lcm, gcd
}
