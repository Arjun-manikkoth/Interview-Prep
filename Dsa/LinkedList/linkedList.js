class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value);

        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    prepend(value) {
        const node = new Node(value);
        if (this.size == 0) {
            this.append(value);
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    peek() {
        if (this.size) {
            return this.head;
        }
        return -1;
    }
    removeFromFront() {
        if (this.size === 0) {
            return;
        }

        if (this.size) {
            let value = this.head.value;
            this.head = this.head.next;
            return value;
        } else if (this.size === 1) {
            this.head = null;
            this.tail = null;
        }

        this.size--;
    }

    removeFromBack() {
        if (this.size === 0) {
            return;
        }

        if (this.size) {
            let value = this.head.value;
            this.head = this.head.next;
            return value;
        } else if (this.size === 1) {
            this.head = null;
            this.tail = null;
        }

        this.size--;
    }
    search(value) {
        if (this.size === 0) {
            return;
        }

        let curr = this.head;

        while (curr) {
            if (curr.value === value) {
                return value;
            }
            curr = curr.next;
        }
        return -1;
    }
    removeNode(index) {
        if (this.size == 0) {
            console.log("List is empty");
            return -1;
        } else if (index < 0 || index >= this.size) {
            console.log("Invalid index");
            return -1;
        } else if (index == 0) {
            this.head = this.head.next;
        } else {
            let curr = this.head;

            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            curr.next = curr.next.next;
        }
        this.size--;
    }
    print() {
        let string = "";
        let curr = this.head;
        while (curr) {
            string += curr.value + " ";
            curr = curr.next;
        }
        console.log(string);
    }
    reverse() {
        let prev = null;
        let curr = this.head;
        let next = null;

        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
    removeDuplicates() {
        let curr = this.head;
        for (let i = 0; i < this.size - 1; i++) {
            let inner = curr;
            for (let j = i + 1; j < this.size; j++) {
                if (curr.value === inner.next.value) {
                    inner.next = inner.next.next;
                    this.size--;
                } else {
                    inner = inner.next;
                }
            }
            curr = curr.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(3);
linkedList.append(4);
linkedList.append(3);
linkedList.append(5);
console.log(linkedList.search(8));
linkedList.reverse();
linkedList.removeDuplicates();
linkedList.print();
