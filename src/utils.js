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

export {
    lcm, gcd
}
