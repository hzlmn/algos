/**
 * Abstract queue data structure
 */
class Queue {
  constructor(maxSize) {
    this.queue = []
    this.maxSize = maxSize
  }

  /**
   * Add element to queue
   */
  enqueue(value) {
    if (this.isFull()) {
      throw new Error('Out of range')
    }

    this.queue.push(value)
  }

  /**
   * Fetch element from queue
   */
  dequeue() {
    return this.queue.shift()
  }

  /**
   * Check if queue if full
   */
  isFull() {
    return this.queue.length >= this.maxSize
  }

  /**
   * Get length
   */
  length() {
    return this.queue.length
  }
}
