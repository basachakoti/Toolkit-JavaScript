class One {
    constructor() {

    }

    message = () => console.log("I am One.");
}

class Two extends One{
    constructor() {
        super()
    }

    message = () => console.log("I am Two.");   //  This is overriding the message method from the parent class

    message = (name) => console.log(`Hi ${name}, I am Two.`)
}

let m = new Two();

m.message()
m.message("Basavaprabhu")