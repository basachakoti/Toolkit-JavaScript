class Stack {
    constructor() {
        this.maxSize = 100;
        this.stack = [];
        this.top = -1;
    }

    push(value) {
        if(this.isFull()) {
            return false;
        }

        this.top++;
        this.stack[this.top] = value;
        return true;
    }

    isFull() {
        return this.top == this.maxSize - 1;
    }

    pop() {
        if(this.isEmpty()) {
            return null;
        }

        this.top--;
        return this.stack.pop();
    }

    isEmpty() {
        return this.top == -1;
    }

    peek() {
        if(this.isEmpty()) {
            return null
        }

        return this.stack[this.top];
    }
}

let stack = new Stack();

// stack.push(100);
// stack.push(200);
// stack.push(300);
// stack.push(400);
// console.log(stack);

// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// console.log(stack);

// stack.peek();
// console.log(stack);


// Reverse a string using stack
// Problem description - Push each character of string into the stack and pop each element out to the stack
// const str = "Hello";
// for(let i = 0; i < str.length; i++) {
//     stack.push(str[i]);
// }

// let reversedString = "";
// while(!stack.isEmpty()) {
//     reversedString += stack.pop();
// }
// console.log(`Reversed String = ${reversedString}`);
    
    
// Balanced Paranthesis
// Problem description - take a string and check if the paranthesis are balanced

let str = ")(";
for(let i = 0; i < str.length; i++) {
    if(str[i] == '(') {
        stack.push('(')
    }
    if(str[i] == ')') {
        stack.pop()
    }
}
if(stack.peek()) {
    console.log("Not balanced");
}
else {
    console.log("Balanced");
}