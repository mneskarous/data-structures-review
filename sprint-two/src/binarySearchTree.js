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
  // base case
  // if the target is equal to the node's value
  if (target === this.value) {
    // return true
    return true;
  }
  // recursive cases
  // else if the target is less than the node's value
  else if (target < this.value) {
    // return the boolean value of the left child's value and the left child's children's values
    return !!(this.left && this.left.contains(target));
  } else // else
  // return he boolean value of the right child's value and the right child's children's values
  return !!(this.right && this.right.contains(target));
};

binaryTreeMethods.depthFirstLog = function(callback) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
