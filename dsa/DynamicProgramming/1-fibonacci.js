var memo = {};
function fibonacci(n) {
    // Recursion
    // if(n <= 1)  return 1;
    // return fibonacci(n-1)+fibonacci(n-2);

    // Dynamic Programing
    if(memo[n]) {
        return memo[n];
    }
    const output = (n <= 2) ? 1 : fibonacci(n-1) + fibonacci(n-2);
    memo[n] = output;
    return output;
}

const result = fibonacci(50);
console.log(`Result is ${result}`)