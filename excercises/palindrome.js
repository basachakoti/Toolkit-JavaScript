let str = "10101";
// let str = "TENET";
// let str = "DENNED";

function isPalindrome(str) {
    console.log(str);

    let len = str.length;
    let isPal = true;
    for(let i = 0; i < len/2; i++) {
        console.log(i);
        if(str[i] !== str[len-1-i]) {
            isPal = false;
            break;
        }
    }
    console.log('Palindrome = ', isPal);
}

isPalindrome(str.toLowerCase());