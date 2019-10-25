

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
  // create bucket set to itself or empty array
  var bucket = this._storage.get(index) || [];
  // iterate through bucket
  for (var i = 0; i < bucket.length; i++) {
    // create tuple set to current item in array
    var tuple = bucket[i];
    // if the tuple array's key is equal to the key input
    if (tuple[0] === k) {
      // remove the tuple from the bucket
      bucket.splice(i, 1);
      // decrement the size by 1
      this._size--;
      // if the size is less than 1/4 of the storage limit
      if (this._size < 0.25 * this._limit) {
        // resize the storage limit by half
        this.resize(this._limit * 0.5);
      }
      // return the tuple's value
      return tuple[1];
    }
  }
};

HashTable.prototype.resize = function(newSize) {
  // create old storage set to storage object
  var oldStorage = this._storage;

  // set input to at least 8
  newSize = Math.max(newSize, 8);
  // if the new size is equal to the storage limit
  if (newSize === this._limit) {
    // stop
    return; 
  }
  // otherwise set the storage limit to the new size
  this._limit = newSize;
  // set storage object's limit to the storage limit
  this._storage = LimitedArray(this._limit);
  // set the size to 0
  this._size = 0;
  // for each bucket in the old storage object
  oldStorage.each(function(bucket) {
    // if there is no bucket
    if (!bucket) {
      // stop
      return; 
    }
    // otherwise iterate through the bucket
    for (var i = 0; i < bucket.length; i++) {
      // create tuple set to the current item in the bucket
      var tuple = bucket[i];
      // insert the key and value of the tuple into the bucket
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
}


/*
 * Complexity: What is the time complexity of the above functions?
 */


