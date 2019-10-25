

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  this._resizing = false;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create a bucket and set it to itself or an empty array
  var bucket = this._storage.get(index) || [];
  // iterate through the bucket
  for (var i = 0; i < bucket.length; i++) {
    // create a tuple set to the current item in the bucket
    var tuple = bucket[i];
    // if the key in the tuple array is the input key
    if (tuple[0] === k) {
      // create an old value and set it to the value of the tuple array
      var oldValue = tuple[1];
      // set the tuple array's value to the value input
      tuple[1] = v;
      // return the old value
      return oldValue;
    }
  }
  // push the tuple into the bucket
  bucket.push([k, v]);
  this._storage.set(index, bucket)
  // increment the size by 1
  this._size++;
  // if the size is greater than 3/4 of the storage limit
  if (this._size > 0.75 * this._limit) {
    // resize the storage limit to 2 * the storage limit
    this.resize(this._limit * 2);
  }
  // otherwise, return undefined
  return undefined;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create a bucket and set it to itself or an empty array
  var bucket = this._storage.get(index) || [];
  // iterate through the bucket
  for (var i = 0; i < bucket.length; i++) {
    // set the tuple to the current item in the bucket
    var tuple = bucket[i];
    // if the tuple array's key is equal to the key input
    if (tuple[0] === k) {
      // return the tuple's value
      return tuple[1];
    }
  }
  // otherwise, return undefined
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.resize = function(newSize) {

}


/*
 * Complexity: What is the time complexity of the above functions?
 */


