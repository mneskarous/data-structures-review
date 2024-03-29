var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a node and set it to a new node object with the value as argument
    var node = Node(value);
    // if there is no head
    if (!this.head) {
      // set the head to the node
      this.head = node;
    }
    // if there is a tail
    if (this.tail) {
      // set the new tail to the node
      this.tail.next = node;
    }
    // otherwise, set the tail to the node
    this.tail = node;
  };

  list.removeHead = function() {
    // create a head and set it to the head of the list
    var head = this.head;
    // set the head of the list to the node after the head
    this.head = this.head.next;
    // return the value of the original head
    return head.value;
  };

  list.contains = function(target) {
    // set the current node to the head of the list
    var currentNode = this.head;
    // while there is a current node
    while (currentNode) {
      // if the value of the current node is equal to the target
      if (currentNode.value === target) {
        // return true
        return true;
      }
      // set the current node to the node after the current node
      currentNode = currentNode.next;
    }
    // return false
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
