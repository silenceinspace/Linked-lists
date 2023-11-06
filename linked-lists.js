class Node {
  constructor(curValue = null, next = null) {
    this.curValue = curValue;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add nodes to the end of the list
  append(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
      this.tail = node;
    }
    this.size += 1;
    return this;
  }

  // Add nodes to the start of the list
  prepend(value) {
    let node;

    if (this.head === null) {
      node = new Node(value);
      this.head = node;
    } else {
      let tmp = this.head;
      node = new Node(value, tmp);
      this.head = node;
    }
    this.size += 1;
    return this;
  }

  // Find nodes at the given index
  at(index) {
    if (this.head === null) return 'List does not exist...';

    if (index > this.size - 1 || index < 0) {
      return `index doesnt exit, choose from 0 to ${this.size - 1}`;
    }

    let initialNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (i === index) return initialNode;
      initialNode = initialNode.next;
    }
    return initialNode;
  }

  // Remove nodes from the end of the list
  pop() {
    let currentNode = this.head;
    let previousNode;

    if (currentNode == null) {
      console.log('List does not exist yet...');
      return;
    }

    if (currentNode.next == null) {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return this;
    }

    while (currentNode.next != null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = previousNode;
    this.size -= 1;
    previousNode.next = null;
    return this;
  }

  // Boolean answer to whether the value exists in the list
  contains(value) {
    let currentNode = this.head;

    while (currentNode != null) {
      if (currentNode.curValue === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  // Value of the index that contains the node
  find(value) {
    let currentNode = this.head;

    for (let i = 0; i < this.size; i++) {
      if (value === currentNode.curValue) return i;
      else currentNode = currentNode.next;
    }

    return null;
  }

  // Represent linked objects as as strings
  toString() {
    let string = '';

    let currentNode = this.head;
    while (currentNode !== null) {
      string += `(${currentNode.curValue}) -> `;

      currentNode = currentNode.next;
    }

    string += 'null';
    return string;
  }

  // Insert nodes at a specific index
  insertAt(value, index) {
    if (index > this.size - 1) {
      return `Available indexes are from 0 to ${this.size - 1}`;
    }

    let initialNode = this.head;
    let node;
    let previous;
    let current;

    if (index === 0) {
      node = new Node(value, initialNode);
      this.head = node;
    } else {
      for (let i = 0; i < index; i++) {
        previous = initialNode;
        initialNode = initialNode.next;
        current = initialNode;
      }

      node = new Node(value, current);
      previous.next = node;
    }
    this.size += 1;
    return this;
  }

  // Remove nodes at a specific index
  removeAt(index) {
    if (this.head === null) return 'List does not exist...';

    if (index > this.size - 1) {
      return `Available indexes are from 0 to ${this.size - 1}`;
    }

    let initialNode = this.head;
    let previous;
    let current;

    if (index === 0) {
      current = initialNode.next;
      this.head = current;
    } else {
      for (let i = 0; i < index; i++) {
        previous = initialNode;
        initialNode = initialNode.next;
        current = initialNode;
      }

      previous.next = current.next;
      if (previous.next === null) this.tail = previous;
    }
    this.size -= 1;
    return this;
  }
}

const list = new LinkedList();
console.log(list);
