class Queue {
  constructor() {
    this._storage = {};
    this._start = 0;
    this._end = 0;
  }

  enqueue(value) {
    this._storage[this._end] = value;
    this._end++;
  }

  dequeue() {
    let dequeued = this._storage[this._start];
    delete this._storage[this._start];
    this.size() && this._start++;
    return dequeued;
  }

  size() {
    return this._end - this._start;
  }
}
