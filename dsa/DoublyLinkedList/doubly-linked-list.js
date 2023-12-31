class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(data) {
        let node = new Node(data);
        if(this.head == null) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    printAll() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.add(100);
doublyLinkedList.add(200);
doublyLinkedList.add(300);
doublyLinkedList.add(400);
doublyLinkedList.printAll()