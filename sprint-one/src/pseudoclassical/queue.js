var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.container = {};
  this.index = 0;
  this.remove = 0;
};

Queue.prototype.enqueue = function(value) {
  this.container[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
  var result = this.container[this.remove];
  delete this.container[this.remove];
  this.remove++;
  return result;
};

Queue.prototype.size = function() {
  return Object.keys(this.container).length;
};

var test1 = new Queue();


