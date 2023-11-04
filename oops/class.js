class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal{
    constructor(name, type) {
        // this.name = name;
        super(name)
        this.type = type;
        console.log(this, 'this')
        
    }

    bark = () => {
        console.log(`Hi, I am ${this.name} of type ${this.type}. I can bark.`);
    }

}

let labrador = new Dog('Tommy', 'puddle');

labrador.bark();