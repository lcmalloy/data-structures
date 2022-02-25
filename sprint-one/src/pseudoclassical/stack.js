var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.result = {};
  this.index = 0;
};

Stack.prototype.push = function(value) {
  this.result[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function() {
  if (this.index > 0) {
    this.index--;
  }
  return this.result[this.index];
};

Stack.prototype.size = function() {
  return this.index;
};

var test1 = new Stack();


