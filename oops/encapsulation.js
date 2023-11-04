class Human {
    #age        // Declare a private variable, JavaScript considers all variables to be public by default
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.#age = age;
    }

    info = () => console.log(`Hi, My name is ${this.name}, ${this.gender} and I am ${this.#age} years old.`)
}

let indian = new Human('Basavaprabhu', "M", 29);

console.log(indian.name)
console.log(indian.gender)
// console.log(indian.#age)    //  Private access is not allowed