class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.collection = {};
    this.index = 0;
  }
  push(value) {
    this.collection[this.index] = value;
    this.index++;
  };

  pop() {
    if (this.index > 0) {
      this.index--;
    }
    return this.collection[this.index];
  };

  size() {
    return this.index;
  };

};

var test1 = new Stack();