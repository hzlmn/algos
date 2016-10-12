/**
 * Abstract stack data structure
 */
class Stack {
  constructor(max) {
    this.stack = []
    this.max = max
  }

  push(value) {
    if (max && this.stack.length >= this.max) {
      throw new Error('Out of range')
    } else {
      this.stack.push(value)
    }
  }

  pop() {
    return this.stack.pop()
  }

  isFull() {
    if (!this.max) {
      return false
    }

    return this.stack.length >= this.max
  }
}
