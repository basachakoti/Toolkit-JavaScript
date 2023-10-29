let str1 = "SILENT";
let str2 = "LISTEN";    // true
// let str2 = "LISTET";    // false

function isAnagram(str1, str2) {
    if(str1.length != str2.length) {
        return false;
    }

    let sortedString1 = [...str1].sort().join("");
    let sortedString2 = [...str2].sort().join("");

    console.log(sortedString1, sortedString2);

    // if(sortedString1[0] != sortedString2[0]) {
    //     return false;
    // }

    let isAnag = true;
    for(let i = 0; i < sortedString1.length; i++) {
        // console.log(i);
        if(sortedString1[i] != sortedString2[i]) {
            isAnag = false;
            break;
        }
    }
    return isAnag;
}
console.log(isAnagram(str1, str2));