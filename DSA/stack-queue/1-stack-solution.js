function createNode(val) {
  return { val, next: null };
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    let node = createNode(value);
    if (this.top) {
      node.next = this.top;
    }
    this.top = node;
  }
  pop() {
    let retVal;
    if (this.top) {
      retVal = this.top.val;
      this.top = this.top.next;
    } else {
      retVal = undefined;
    }
    return retVal;
  }
  peek() {
    return this.top ? this.top.val : undefined;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
