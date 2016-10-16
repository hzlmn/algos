/**
 * Abstract stack data structure
 */
class Stack {
  constructor(max) {
    this.stack = []
    this.stackMaxSize = max
  }

  /**
   * Add to stack
   */
  push(value) {
    if (!this.isFull()) {
      this.stack.push(value)
    }
  }

  /**
   * Pop element from stack
   */
  pop() {
    return this.stack.pop()
  }

  /**
   * Check if stack is full
   */
  isFull() {
    if (!this.stackMaxSize) {
      return false
    }

    return this.stack.length >= this.stackMaxSize
  }

  /**
   * Check if stack is empty
   */
  isEmpty() {
    return !this.stack.length
  }
}

module.exports = Stack
