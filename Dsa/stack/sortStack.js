const arr = [0, 5, 4, 1];

function sortStack(stack) {
    let tempStack = [];

    while (stack.length) {
        let temp = stack.pop();

        while (tempStack.length && tempStack[tempStack.length - 1] > temp) {
            stack.push(tempStack.pop());
        }
        tempStack.push(temp);
    }
    console.log(tempStack);
}
sortStack(arr);
