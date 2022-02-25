var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = {};
  instance.container = {};
  instance.index = 0;
  _.each(instance, stackMethods);
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.container[index] = value;
  this.index++;
};

stackMethods.pop = function() {
  if (this.index > 0) {
    this.index--;
  }
  return this.container[index];
};

stackMethods.size = function() {
  return this.index;
};


