

// Instantiate a new graph
var Graph = function() {
  // create a storage object
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // set the node to the node or the connection between nodes
  this.storage[node] = this.storage[node] || { edges: {} };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this.storage[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // if the node is in the graph
  if (this.contains(node)) {
    // iterate through each node in the node's connections
    for (var targetNode in this.storage[node].edges) {
      // remove the connection between nodes
      this.removeEdge(node, targetNode);
    }
    // remove the node
    delete this.storage[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // if the graph does not contain the from node
  if (!this.contains(fromNode)) {
    // return false
    return false;
  }
  // otherwise, return the boolean value of the connection between the from node and the to node
  return !!this.storage[fromNode].edges[toNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


