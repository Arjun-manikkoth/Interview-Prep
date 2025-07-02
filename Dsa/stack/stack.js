class Stack {
    constructor(capacity) {
        this.stack = [];
        this.capacity = capacity;
    }

    push(value) {
        this.stack.push(value);
    }
    pop() {
        this.stack.pop();
    }
    print() {
        for (let i = this.stack.length - 1; i >= 0; i--) {
            console.log(this.stack[i]);
        }
    }
    sumStack() {
        let sum = 0;
        for (let i = 0; i < this.stack.length; i++) {
            sum += this.stack[i];
        }
        console.log(sum);
    }
}
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.print();
stack.sumStack();
