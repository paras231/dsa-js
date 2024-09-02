/**
 * creating Graph data structure using javascript
 * and performing some operations
 */


class Graph{
    constructor() {
        this.adjacencyList = {};
    }
    addNode(node){
        if(!this.adjacencyList[node]){
            this.adjacencyList[node] = [ ];
        }
    }
    // edge is added in between two nodes
    addEdge(node1, node2){
     if(this.adjacencyList[node1] && this.adjacencyList[node2]){
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1);
     }
    }

    removeEdge(node1, node2){
        this.adjacencyList[node1] = this.adjacencyList[node1].filter((n)=>n!==node2);
        this.adjacencyList[node2] = this.adjacencyList[node2].filter((n)=>n!==node1);
    }

    removeNode(node) {
        while(this.adjacencyList[node].length) {
          let adjacentNode = this.adjacencyList[node].pop();
          this.removeEdge(node, adjacentNode);
        }
    }
    display() {
        for (let node in this.adjacencyList) {
          console.log(`${node} -> ${this.adjacencyList[node].join(", ")}`);
        }
      }
}

const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");

  graph.display();

  graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

graph.removeEdge("A", "B");
graph.removeNode("C");
export const values =  graph.display();