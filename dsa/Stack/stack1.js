class Stack {
    constructor() {
        this.top = -1;
        this.data = [];
        this.maxSize = 3;
    }

    isEmpty() {
        return this.top == -1;
    }

    isFull() {
        return this.data.length == this.maxSize;
    }

    peek() {
        return this.data[this.top];
    }

    push(value) {
        if(this.isFull()) {
            return false;
        }
        this.data[this.top] = value;
        this.top++;
    }

    pop() {
        if(this.isEmpty()) {
            return null;
        }
        this.top--;
        return this.data.pop();
    }
}

let stack = new Stack();


stack.push("1");
stack.push("2");
stack.push("3");
stack.push("4");
console.log(stack);

console.log(stack.peek());

console.log(stack.isFull());
stack.pop();
stack.pop();
stack.pop();
console.log(stack.isEmpty());