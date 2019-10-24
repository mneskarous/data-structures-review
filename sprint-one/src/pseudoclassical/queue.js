var Queue = function() {
  this._storage = {};
  this._start = 0;
  this._end = 0;
};

Queue.prototype.enqueue = function(value) {
  this._storage[this._end] = value;
  this._end++;
};

Queue.prototype.dequeue = function() {
  var dequeued = this._storage[this._start];
  delete this._storage[this._start];
  this.size() && this._start++;
  return dequeued;
};

Queue.prototype.size = function() {
  return this._end - this._start;
};