const Stack = require('./stack')

/**
 * Queue realization with two stacks
 */
class Queue {
  constructor() {
    this.stack = new Stack()
    this.reversed = new Stack()
  }

  /**
   * Add element to queue
   */
  enqueue(value) {
    return this.stack.push(value)
  }

  /**
   * Get element from queue
   */
  dequeue() {
    if (this.reversed.isEmpty()) {
      while (!this.stack.isEmpty()) {
        this.reversed.push(this.stack.pop())
      }
    }

    return this.reversed.pop()
  }
}

/**
 * Examples
 */
var queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.dequeue())
console.log(queue.dequeue())

queue.enqueue(4)

console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue)
