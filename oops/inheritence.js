class One {
    constructor(speed) {
        this.speed = speed;
    }
}

class Two extends One {
    constructor(speed, height) {
        super(speed)
        this.height = height
    }
}

class Three extends Two {
    constructor(speed, height, width) {
        super(speed, height)
        this.width = width
    }

    calc = () => this.speed * this.height * this.width;
}

let obj = new Three(60,5,1);
console.log(obj.calc())