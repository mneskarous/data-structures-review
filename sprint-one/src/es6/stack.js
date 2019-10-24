class Stack {
  constructor() {
    this._storage = {};
    this._size = 0;
  }

  push(value) {
    this._storage[this._size] = value;
    this._size++;
  }

  pop() {
    this._size && this._size--;
    let popped = this._storage[this._size];
    delete this._storage[this._size];
    return popped;
  }

  size() {
    return this._size;
  }
}