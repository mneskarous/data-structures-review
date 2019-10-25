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

};





/*
 * Complexity: What is the time complexity of the above functions?
 */
