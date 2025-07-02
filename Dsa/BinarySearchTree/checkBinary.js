//check a tree is binary or not

class Node {
    constructor(value) {
        this.left = null;
        this.value = value;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);

        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }
    insertNode(root, newNode) {
        if (root.value < newNode.value) {
            if (!root.right) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        } else if (root.value > newNode.value) {
            if (!root.left) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        }
    }
    display() {
        if (!this.root) {
            console.log("cannot display an empty binary tree");
            return;
        }

        let queue = [this.root];

        while (queue.length) {
            const shiftedElement = queue.shift();
            console.log(shiftedElement.value);
            if (shiftedElement.left) {
                queue.push(shiftedElement.left);
            }
            if (shiftedElement.right) {
                queue.push(shiftedElement.right);
            }
        }
    }
    min(root = this.root) {
        if (root.left) {
            return this.min(root.left);
        } else {
            return root.value;
        }
    }
    max(root = this.root) {
        if (root.right) {
            return this.max(root.right);
        } else {
            return root.value;
        }
    }
    preorder(root = this.root) {
        if (root) {
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }
    inorder(root = this.root) {
        if (root) {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }
    postorder(root = this.root) {
        if (root) {
            this.inorder(root.left);
            this.inorder(root.right);
            console.log(root.value);
        }
    }

    isValidTree(root = this.root, min = -Infinity, max = Infinity) {
        if (!node) {
            return true;
        }
        if (root.value >= min || root.value <= max) {
            return false;
        }
        return (
            this.isValidTree(root.left, min, root.value) &&
            this.isValidTree(root.right, root.value, max)
        );
    }
}
const binaryTree = new BinarySearchTree();
binaryTree.insert(1);
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(8);
binaryTree.insert(9);
binaryTree.display();
binaryTree.isValidTree();
