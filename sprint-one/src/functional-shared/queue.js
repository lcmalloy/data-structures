var Queue = function() {
  var instance = {};
  instance.container = {};
  instance.index = 0;
  instance.removed = 0;

  _.extend(instance, queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.container[this.index] = value;
  this.index++;
  // storage[index] = value;
  // index++;
};

queueMethods.dequeue = function() {
  var result = this.container[this.removed];
  delete this.container[this.removed];
  this.removed++;
  return result;
};

queueMethods.size = function() {
  return Object.keys(this.container).length;
};

