let memo = {};
function factorial(n) {
    // Recursion
    // return (n > 1) ? n * factorial(n-1) : 1;

    // Dynamic Programming
    if(memo[n]) return memo[n];
    const output = (n > 1) ? n * factorial(n-1) : 1;
    memo[n] = output;
    return output;
}

const result = factorial(3);
console.log(`Result is ${result}`);