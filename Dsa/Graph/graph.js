class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set();
        }
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }

        this.adjacencyList[vertex1].add(vertex1);
        this.adjacencyList[vertex2].add(vertex2);
    }

    hasEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)) {
            return true;
        } else {
            return false;
        }
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            console.log("vertex not found");
            return;
        }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex);
        }
    }
    display() {
        for (let vertex in this.adjacencyList) {
            console.log(Array.from(this.adjacencyList[vertex]));
        }
    }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("D");
graph.addEdge("A", "D");
graph.display();
