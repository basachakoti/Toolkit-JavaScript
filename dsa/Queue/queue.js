class Queue {
    constructor() {
        this.data = [];
        this.head = 0;
        this.tail = 0;
        this.maxSize = 100;
    }

    enQueue(value) {
        if(this.isFull()) {
            return false;
        }
        this.data[this.tail] = value;
        this.tail++;
    }

    deQueue() {
        if(this.isEmpty()) {
            return null;
        }
        let item = this.data[this.head];
        this.head++;
        return item;
    }

    peek() {
        return this.data[this.head];
    }

    isFull() {
        return (this.tail - this.head) == this.maxSize;
    }

    isEmpty() {
        return this.tail == this.head;
    }

}

let queue = new Queue();

// queue.enQueue("a");
// queue.enQueue("b");
// queue.enQueue("c");
// console.log(queue.isFull())

// // console.log(queue.peek());       //returns a
// queue.deQueue()
// console.log(queue.peek());          //return b
// queue.deQueue()
// queue.deQueue()
// console.log(queue.isEmpty())
// console.log(queue);

// Reverse a string
const reverseString = (str) => {
    for(let i = str.length - 1; i >= 0; i--) {
        queue.enQueue(str[i]);
    }

    console.log(queue);

    let reversedString = "";
    for(let i = 0; i < str.length; i++) {
        reversedString += queue.deQueue();
    }
    // console.log(`Reversed String = ${reversedString}`);
    return reversedString;
}

console.log(reverseString("Hello"));

let str = "a man, a plan, a canal: panama";
let formattedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
console.log(`isPalindrome = ${reverseString(formattedStr) == formattedStr}`);
