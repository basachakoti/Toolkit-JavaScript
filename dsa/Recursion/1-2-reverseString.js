function reverseString(str) {
    let length = str.length - 1;

    // Base Case
    if(length <= 0) {
        return str[0];
    }

    // Recursion Case
    let subStr = str.substr(0, length);
    // console.log(length, str, subStr, str[length], );
    return str[length] + reverseString(subStr);
}
let result = reverseString("basava");
console.log(result);

// Arrow Function Solution
// const reverseString = (str) => str == "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
// let result = reverseString("basava");
// console.log(result);