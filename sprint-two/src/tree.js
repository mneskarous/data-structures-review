var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create child set to new tree
  var child = Tree(value);
  // push child into children array
  this.children.push(child);  
};

treeMethods.contains = function(target) {
  // base case
  // if the value of the tree node is the target
  if (this.value === target) {
    // return true
    return true;
  }
  // recursive case
  // iterate through children array
  for (var i = 0; i < this.children.length; i++) {
    // if the current item in the children array is equal to the target
    if (this.children[i].contains(target)) {
      // return true
      return true;
    }
  }
  // return false
  return false;
};

treeMethods.traverse = function(callback) {
  // invoke the callback with the value as the parameter
  callback(this.value);
  // base case
  // if there is no children array
  if (!this.children) {
    // stop
    return;
  }
  // recursive case
  // otherwise, iterate through the children array
  for (var i = 0; i < this.children.length; i++) {
    // invoke the traverse method recursively on the current child
    this.children[i].traverse(callback);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
