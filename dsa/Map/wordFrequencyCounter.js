// Problem description - Count number of words repeated in a string using maps

function wordFrequencyCounter(paragraph) {
    let words = paragraph.toLowerCase().split(/\W+/);
    const map = new Map();
    words.forEach((value) => {
        if(value !== '') {
            if(map.has(value)) {
                map.set(value,map.get(value)+1);
            }
            else {
                map.set(value,1);
            }
        }
    });
    return map;
}

let paragraph = "The quick brown fox jumps over the lazy dog.";
const result = wordFrequencyCounter(paragraph);
console.log(result);