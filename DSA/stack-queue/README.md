### 1: Implement Stack

_Difficulty: Easy_

#### Problem statement

Recall that a stack is a last in first out data structure– data is always added to and removed from the top.
You need to implement a Stack data structure that has the following functions:

- `push(value)` //to add elements (to the top of the stack)
- `pop()` // removes the top element and returns its value
- `peek()` // returns the value of the top item without removing it from the stack

All of the above functions should run in constant ( O(1) ) time.
No arrays or array methods should be used.

[Solution](./1-stack-solution.js)

---

### 2: Implement Queue

_Difficulty: Easy_

#### Problem statement

A _queue_ is a data structure that stores pieces of data and returns them in the same order in which they were inserted. One way of implementing them is as a linked list.

Implement a priority with the following 3 methods:

- push(data) // inserts data into the queue
- peek() // returns the value at the start of the queue without removing it from the queue
- shift() // returns the value at the start of the queue and also removes it from the queue

The queue would work the following way:

```javascript
var pq = new Queue();
pq.push(7);
pq.push(5);
pq.peek(); // ==> '7'
pq.peek(); // ==> '7'  // '7' is still in the PQ
pq.push(1);
pq.push(8);
pq.shift(); // ==> '7'
pq.peek(); // ==> '5' // '7' has been removed from the PQ
```

[Solution](./2-queue-solution.js)

---

### 3: Implement Minimal-stack

_Difficulty: Medium_

#### Problem statement

[Slides](https://slides.com/seemaullal/reacto-3-8-10)

Recall that a stack is a last in first out data structure– data is always added to and removed from the top.
You need to implement a Stack data structure that has the following functions:

- `push(value)` //to add elements (to the top of the stack)
- `pop()` // removes the top element and returns its value
- `min()` //returns the minimum element

All of the above functions should run in constant ( O(1) ) time.
No arrays or array methods should be used.

[Solution](./3-minimal-stack-solution.js)

### 4: Implement Priority-queue

_Difficulty: Medium_

#### Problem statement

[Slides](http://slides.com/gtelljohann/reacto-priority-queue/#/)

A _queue_ is a data structure that stores pieces of data and returns them in the same order in which they were inserted. One way of implementing them is as a linked list.
A _priority queue_ is a data structure that takes with each piece of data a priority value and returns the data in order of priority.
Implement a priority queue with the following 3 methods:

- insert(data, priority) // inserts data into the priority queue with the given priority
- peek() // returns the value of the item with the highest priority without removing it from the priority queue
- popMax() // returns the value of the item with the highest priority and also removes it from the priority queue

For example, a hospital emergency room could use a priority queue to determine the order in which their doctors see patients. The priority queue would work the following way:

```javascript
var pq = new PriorityQueue();
pq.insert("Jill, concussion", 7);
pq.insert("John, stomach pain", 5);
pq.peek(); // ==> 'Jill, concussion'
pq.peek(); // ==> 'Jill, concussion'  // Jill is still in the PQ
pq.insert("Dave, sprained ankle", 1);
pq.insert("Bob, breathing problems", 8);
pq.peek(); // ==> 'Bob, breathing problems'
pq.popMax(); // ==> 'Bob, breathing problems'
pq.peek(); // ==> 'Jill, concussion' // Bob has been removed from the PQ
```

[Solution](./4-priority-queue-solution.js)
