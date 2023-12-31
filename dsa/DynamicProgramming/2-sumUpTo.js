var memo = {};

function sumUpTo(n) {
    // Problem Description : SumUpTo(3) = 3 + 2 + 1;
    
    // Recursion
    if(n == 1) {
        return 1;
    }
    return n + sumUpTo(n-1);

    // Dynamic Programming
    // if(memo[n]) {
    //     return memo[n];
    // }
    // const output = (n > 1) ? n + sumUpTo(n-1) : 1;
    // memo[n] = output;
    // return output;
}

const result = sumUpTo(800);
console.log(`Result is ${result}`);