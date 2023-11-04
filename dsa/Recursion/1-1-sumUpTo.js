function sumUpTo(num) {

    // Problem Description = sumUpTo(3) = 3+2+1
    // Base Case
    if(num <= 1){
        return 1;
    }

    // Recursion case
    // console.log(num);
    // num--;
    // console.log(`${num} + sumUpTo(${num - 1})`);
    // const result = num+sumUpTo(num - 1);
    // console.log(`sumUpTo(${num}) = ${result}`);
    // return result;

    return num + sumUpTo(num - 1);
}

let result = sumUpTo(6)
console.log(result)