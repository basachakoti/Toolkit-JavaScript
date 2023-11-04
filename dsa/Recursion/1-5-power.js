function power(base, exponent) {
    // Problem description - 5^2 = 5 * 5 = 5 is base, 2 is exponent

    // Base Case
    if(exponent == 0) {
        return 1;
    }

    // Recursion Case

    // Stacking
    console.log(`${base} * power(${base}, ${exponent})`)
    const result = base * power(base, exponent-1);

    // Unwinding
    console.log(`power(${base}, ${exponent}) = ${result}`);
    return result;
}

// Arrow function method
// const power = (base, exponent) => exponent == 0 ? 1 : base * power(base, exponent-1);

const result = power(2,5);
console.log(`result = ${result}`);