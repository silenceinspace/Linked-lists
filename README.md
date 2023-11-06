### Thinking process behind the solution

## What is a linked list data structure?

A linked list is a type of data structure that is a linear sequence of nodes. Every node in the chain usually has two properties - a value and a pointer to its descendant. The first node in the chain is called the **"head"**, whereas the last one is the **"tail"**. The last node of the chain always points to **null**. To access a specific node, it is important to build up a proper sequence of references starting from the head.

Linked lists are relatively easy to remove and insert nodes at any place inside a chain. Instead of ovewriting all items indexes (the way it is done in arrays), all we care about is the nodes' references.

Methods such as append, prepend, insertAt, removeAt, at, find, contains, toString, pop are all properly functioning thanks to the nodes' references. **Head** and **tail** pointers as well as the **size** value of the linked list are stored inside a class constructor, which means they are just properties that could change dynamically.