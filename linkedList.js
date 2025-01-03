// Linked Lists

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
  
}

class LinkedList {
    constructor() {
        this.headNode = null;
        this.listSize = 0;
    }

    append(value) { 
        const newNode = new Node(value); 
        if (!this.headNode) { 
            this.headNode = newNode; 
            return; 
        } else {
            let currentNode = this.headNode; 
            while (currentNode.nextNode) { 
                currentNode = currentNode.nextNode; 
            } 
            currentNode.nextNode = newNode; 
        }
        this.listSize++;
    }

    prepend(value) {
        const newNode = new Node(value); 
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
        this.listSize++;
    }

    size () {
        return this.listSize;
     }
 

    head() {
        return this.headNode;
    }

    tail() {
        if (!this.headNode) return null;
        let currentNode = this.headNode;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at(index) { 
        if (index < 0 || index >= this.listSize) 
            return null; let currentNode = this.headNode; 
        for (let i = 0; i < index; i++) { 
            currentNode = currentNode.nextNode; 
        } 
        return currentNode;
    }

    pop() {
        if (!this.headNode) return;
    
        // if there's only one node in the list, set to null
        if (!this.headNode.nextNode) {
            this.headNode = null;
            this.listSize--;
            return;
        }
    
        let currentNode = this.headNode;
        let previousNode = null;
    
        while (currentNode.nextNode) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
    
        previousNode.nextNode = null;
        this.listSize--;
    }
    
    
    contains(value) {
        let currentNode = this.headNode;
        while (currentNode) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }
    
    find(value) {
        let currentNode = this.headNode;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === value) return index;
            currentNode = currentNode.nextNode;
            index++;
        }
        return null;
    }
    
    toString() { 
        let string = ""; 
        let currentNode = this.headNode; 
        while (currentNode) { 
            string += `( ${currentNode.value} ) -> `; 
            currentNode = currentNode.nextNode; 
        } 
        return string + "null"; 
    }
}

module.exports = LinkedList;

