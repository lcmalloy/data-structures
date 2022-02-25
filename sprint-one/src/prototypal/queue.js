var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var outcome = Object.create(queueMethods);
  outcome.container = {};
  outcome.index = 0;
  outcome.remove = 0;

  return outcome;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.container[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function() {
  var result = this.container[this.remove];
  delete this.container[this.remove];
  this.remove++;
  return result;
};

queueMethods.size = function() {
  return Object.keys(this.container).length;
};

