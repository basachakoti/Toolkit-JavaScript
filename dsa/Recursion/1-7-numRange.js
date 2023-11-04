function numRange(start, end) {
    // Problem description - Fetch all the values that are betwen the start and end range

    // Base Case
    if(end - start == 0) {
        return [start];
    }

    // Recursion Case
    const arr = numRange(start, end-1);
    arr.push(end);
    return arr;
}

const result = numRange(1,5);
console.log(`Result = ${result}`)