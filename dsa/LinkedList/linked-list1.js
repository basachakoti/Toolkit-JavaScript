class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(data) {
        const node = new Node(data);

        if(this.head == null) {
            this.head = node;
        }
        else {
            this.tail.next = node;
        }
        this.tail = node;
    }

    get(index) {
        if(index == 0) {
            return this.head.data;
        }
        else {
            let current = this.head;
            let i = 0;

            while(i<index) {
                current = current.next;
                i++;
            }
            return current.data;
        }
    }

    printAll() {
        let current = this.head;
        while(current != null) {
            console.log(current.data);
            current = current.next;
        }
    }

    insertAt(index, data) {
        let node = new Node(data);
        if(index == 0) {
            node.next = this.head;
            this.head = node;
        }
        else {
            let current = this.head;
            let previous = null;
            let i = 0;

            while(i<index) {
                previous = current;
                current = current.next;
                i++;
            }
            previous.next = node;
            node.next = current;
        }
    }

    removeFrom(index) {
        if(index == 0) {
            this.head = this.head.next;
        }
        else {
            let current = this.head;
            let previous = null;
            let i = 0;
            while(i<index) {
                previous = current;
                current = current.next;
                i++;
            }
            previous.next = current.next;
        }
    }
}

let list = new LinkedList();
list.add(100)
list.add(200)
list.add(300)

// list.printAll()
// console.log(list.get(0))
// console.log(list.get(2))
list.insertAt(0, 50)
list.insertAt(2, 150)
list.removeFrom(1)
list.printAll()

function reversedString(str) {
    let list = new LinkedList();

    for(let i = str.length - 1; i >= 0; i--) {
        list.add(str[i]);
    }
    let current = list.head;
    let reversedStr = "";
    while(current != null) {
        reversedStr+=current.data;
        current = current.next;
    }
    return reversedStr;
}

console.log(reversedString('Hello'))