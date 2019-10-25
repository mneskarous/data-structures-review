var BinarySearchTree = function(value) {
  var binaryTree = Object.create(binaryTreeMethods);

  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;

  return binaryTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(val) {
  // if the input is less than the node's value
  if (val < this.value) {
    // if the left child's value is null
    if (this.left === null) {
      // create a node with the input as the value and assign it to the left child
      this.left = BinarySearchTree(val);
    } else { // else 
      // assign the input to the left child's value
      this.left.insert(val);
    }
  } else if (val > this.value) { // else if the input is greater than the node's value)
    // if the right child's value is null
    if (this.right === null) {
      // create a node with the input as the value and assign it to the right child
      this.right = BinarySearchTree(val);
    } else { // else
      // assign the input to the right child's value
      this.right.insert(val);
    }
  } else { // else
    // do nothing
  }
  
};

binaryTreeMethods.contains = function(target) {

};

binaryTreeMethods.depthFirstLog = function(callback) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
