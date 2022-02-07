
import input from 'input';
import { makeFraction, simplifySplitFraction } from './splitfraction.js';
import { calculate } from './operations.js';

//Use simple compiler algorithm
function compile(scans) {
    let operations = ['+', '-', '/', '*'];
    let operator = null;
    let lastValue = '0';
    while (scans.length > 0) {
        let val = scans.shift();
        if (operations.includes(val)) {
            operator = val;
        } else {
            if (operator == null)
                lastValue = val;
            else {
                let calcV = calculate(lastValue, operator, val);
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
