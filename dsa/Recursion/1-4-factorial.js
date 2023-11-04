function factorial(num) {
    // Problem description - num! = num * (num - 1) * (num-2)
    //  3 = 3 * 2 * 1 = 6

    // Base Case
    if(num <= 1) {
        return num;
    }

    // Recursion case
    
    // Stacking
    console.log(`Fact(${num}) = ${num} * factorial(${num-1})`);
    const result = num * factorial(num-1);

    // Unwinding
    console.log(`Factorial of ${num} = ${result}`)
    return result;
}

// Arrow function method
// const factorial = (num) => num <= 1 ? num : num*factorial(num-1);

// Problem
const result = factorial(5);
console.log(result);