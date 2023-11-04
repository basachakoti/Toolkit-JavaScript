function symmetricDifference(array1, array2) {
    let set1 = new Set(array1);
    let set2 = new Set(array2);
    // let arr1 = [...set1], arr2 = [...set2];
    
    // let newSet = new Set([...arr1, ...arr2]);
    // console.log(arr1,arr2, newSet);
    // let newArray = [...arr1, ...arr2];
    // return new Set(newArray);
    // return newSet;
    let newSet = new Set();
    for(let arr1 of array1) {
        if(!set2.has(arr1)) {
            newSet.add(arr1);
        }
    }

    for(let arr2 of array2) {
        if(!set1.has(arr2)) {
            newSet.add(arr2);
        }
    }
    return [...newSet];
}

let array1 = [1,2,3];
let array2 = [3,4,5];
const result = symmetricDifference(array1, array2);
console.log(result)