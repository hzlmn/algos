/**
 * Abstract queue data structure
 */
class Queue {
  constructor(queueMaxSize) {
    this.queue = []
    this.queueMaxSize = queueMaxSize
  }

  /**
   * Add element to queue
   */
  enqueue(value) {
    if (!this.queueIsFull()) {
      this.queue.push(value)
    }
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
  queueIsFull() {
    return this.queue.length >= this.maxSize
  }

  /**
   * Get length
   */
  length() {
    return this.queue.length
  }
}
