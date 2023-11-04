function anagramGrouping(list) {
    // let sortedList = list.map(item => {
    //     return item.split("").sort().join("");
    // });

    let group = new Map();
    list.forEach((value, key) => {
        let sortedValue = value.split("").sort().join("");
        if(group.has(sortedValue)) {
            group.get(sortedValue).push(value);
        }
        else {
            group.set(sortedValue,[value])
        }
    });
    return Array.from(group.values());
}

let data = ['cat', 'act', 'dog', 'god', 'tac'];
// let data = ['listen', 'silent', 'enlist', 'hello', 'world'];
const result = anagramGrouping(data)
console.log(result);