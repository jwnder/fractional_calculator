
import input from 'input';
import { lcm, splitFraction, makeFraction, simplifySplitFraction } from './utils.js';

function addFraction(sf1, sf2) {
    let num = Number(sf1.num) + Number(sf2.num);
    let lcmVal = lcm(sf1.denom, sf2.denom);
    let rnom = (lcmVal / sf1.denom * sf1.nom) + (lcmVal / sf2.denom * sf2.nom);
    return { num, nom: rnom, denom: lcmVal }
}

function subFraction(sf1, sf2) {
    let num = Number(sf1.num) - Number(sf2.num);
    let lcmVal = lcm(sf1.denom, sf2.denom);
    let rnom1 = lcmVal / sf1.denom * sf1.nom;
    let rnom2 = lcmVal / sf2.denom * sf2.nom;
    let rnom = rnom1 < rnom2 ? rnom1 + lcmVal - rnom2 : rnom1 - rnom2;
    num = rnom1 < rnom2 ? num - 1 : num;
    return { num, nom: rnom, denom: lcmVal }
}

function mulFraction(sf1, sf2) {
    let nom1 = sf1.denom * sf1.num + sf1.nom;
    let nom2 = sf2.denom * sf2.num + sf2.nom;
    let rnum = 0;
    let rnom = nom1 * nom2;
    let rdenom = sf1.denom * sf2.denom;
    return { num: 0, nom: rnom, denom: rdenom };
}

function divFraction(sf1, sf2) {
    let nom1 = sf1.denom * sf1.num + sf1.nom;
    let nom2 = sf2.denom * sf2.num + sf2.nom;
    let rnum = 0;
    let rnom = nom1 * sf2.denom;
    let rdenom = sf1.denom * sf2.denom;
    return { num: 0, nom: rnom, denom: rdenom };
}

//Perform Operations on fraction
function calculate(lastValue, operator, operand) {
    let sf1 = splitFraction(lastValue);
    let sf2 = splitFraction(operand);
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
            return lastValue;
    }
}

//Use simple compiler algorithm
function compile(scans) {
    let operations = ['+', '-', '/', '*'];
    let operator = null;
    let lastValue = '0';
    while (scans.length > 0) {
        let op = scans.shift();
        if (operations.includes(op)) {
            operator = op;
        } else {
            if (operator == null)
                lastValue = op;
            else {
                let calcV = calculate(lastValue, operator, op);
                let simpleV = simplifySplitFraction(calcV);
                lastValue = makeFraction(simpleV);
            }
        }
    }
    return lastValue;
}

//Command line compile results
let formula = await input.text(' ');
let scans = formula.split(/\s+/);
let result = compile(scans);
console.log(result);
