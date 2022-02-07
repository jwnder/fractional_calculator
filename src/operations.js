import { lcm } from './utils.js';
import { splitFraction } from './splitfraction.js'

/**
 * Add operation
 * @param {Object} sf1 
 * @param {Object} sf2 
 * @returns 
 */
function addFraction(sf1, sf2) {
    let num = Number(sf1.num) + Number(sf2.num);
    let lcmVal = lcm(sf1.denom, sf2.denom);
    let rnom = (lcmVal / sf1.denom * sf1.nom) + (lcmVal / sf2.denom * sf2.nom);
    return { num, nom: rnom, denom: lcmVal }
}

/**
 * Subtract operation
 * @param {Object} sf1 
 * @param {Object} sf2 
 * @returns 
 */
 function subFraction(sf1, sf2) {
    let num = Number(sf1.num) - Number(sf2.num);
    let lcmVal = lcm(sf1.denom, sf2.denom);
    let rnom1 = lcmVal / sf1.denom * sf1.nom;
    let rnom2 = lcmVal / sf2.denom * sf2.nom;
    let rnom = rnom1 < rnom2 ? rnom1 + lcmVal - rnom2 : rnom1 - rnom2;
    num = rnom1 < rnom2 ? num - 1 : num;
    return { num, nom: rnom, denom: lcmVal }
}

/**
 * Multiply operation
 * @param {Object} sf1 
 * @param {Object} sf2 
 * @returns 
 */
 function mulFraction(sf1, sf2) {
    let nom1 = sf1.denom * sf1.num + sf1.nom;
    let nom2 = sf2.denom * sf2.num + sf2.nom;
    let rnom = nom1 * nom2;
    let rdenom = sf1.denom * sf2.denom;
    return { num: 0, nom: rnom, denom: rdenom };
}

/**
 * Divide operation
 * @param {Object} sf1 
 * @param {Object} sf2 
 * @returns 
 */
function divFraction(sf1, sf2) {
    let nom1 = sf1.denom * sf1.num + sf1.nom;
    let nom2 = sf2.denom * sf2.num + sf2.nom;
    let rnom = nom1 * sf2.denom;
    let rdenom = sf1.denom * nom2;
    return { num: 0, nom: rnom, denom: rdenom };
}

//Perform Operations on fraction
function calculate(op1, operator, op2) {
    let sf1 = splitFraction(op1);
    let sf2 = splitFraction(op2);
    switch (operator) {
        case '+':
            return addFraction(sf1, sf2);
        case '-':
            return subFraction(sf1, sf2);
        case '*':
            return mulFraction(sf1, sf2);
        case '/':
            return divFraction(sf1, sf2);
        default:
            return op1;
    }
}

export { calculate, addFraction, subFraction, divFraction, mulFraction };
