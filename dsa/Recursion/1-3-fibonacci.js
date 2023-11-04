function fibonacci(index) {
    // Problem Description - fibonacci(10) = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 - next value is the sum of previous 2 values

    // Base Case
    if(index < 2) {
        return index;
    }

    // Recursion Case

    // Stacking
    console.log(`Calculating fibonacci(${index})`);
    const fib1 = fibonacci(index-1);
    const fib2 = fibonacci(index-2);
    const result = fib1 + fib2;
    
    // Unwinding
    console.log(`Fib(${index}) => ${result}`);
    // console.log(`Fib(${index - 1}) - ${fib1}, Fib(${index - 2}) - ${fib2} => ${result}`);
    return result;
}

// Arrow functio method
// const fibonacci = (num) => num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2);

let result = fibonacci(10);
console.log(result);