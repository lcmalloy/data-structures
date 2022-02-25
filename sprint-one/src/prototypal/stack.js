var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var outcome = Object.create(stackMethods);
  outcome.container = {};
  outcome.index = 0;

  return outcome;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.container[this.index] = value;
  this.index++;
};

stackMethods.pop = function() {
  if (this.index > 0) {
    this.index--;
  }
  return this.container[this.index];
};

stackMethods.size = function() {
  return this.index;
};


