function arraySum(arr) {
    // Problem description - If empty return 0, sum of first element and the rest - [1,2,3,4,5] = 15
    
    // Base Case
    if(arr.length == 0) {
        return 0;
    }

    // Recursion Case
    // Stacking
    // arr.shift - removes the first element from the array
    // let value = arr.shift();

    // arr.pop - removes the last element form the array
    let value = arr.pop();

    console.log(`${value}`);
    return value+arraySum(arr);
}

// Arrow Function method
// const arraySum = (arr) => arr.length == 0 ? 0 : arr.pop()+arraySum(arr);
const result = arraySum([1,2,3,4,5,6,7,8,9,10]);
console.log(`Sum of array => ${result}`);