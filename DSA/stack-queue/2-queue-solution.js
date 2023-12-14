function createNode(val) {
  return { val, next: null };
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  push(value) {
    let node = createNode(value);
    if (this.head === null) {
      this.head = node;
    }

    if (this.tail === null) {
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  shift() {
    let retVal;
    if (this.head) {
      retVal = this.head.val;
      this.head = this.head.next;
    } else {
      retVal = undefined;
    }
    return retVal;
  }
  peek() {
    return this.head ? this.head.val : undefined;
  }
}

let queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.peek());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.peek());

var pq = new Queue();
pq.push(7);
pq.push(5);
console.log(pq.peek()); // ==> '7'
console.log(pq.peek()); // ==> '7'  // '7' is still in the PQ
pq.push(1);
pq.push(8);
console.log(pq.shift()); // ==> '7'
console.log(pq.peek()); // ==> '5' // '7' has been removed from the PQ
