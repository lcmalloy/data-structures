class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.collection = {};
    this.index = 0;
    this.remove = 0;
  }

  enqueue(value) {
    this.collection[this.index] = value;
    this.index++;
  }
  
  dequeue() {
    var result = this.collection[this.remove];
    delete this.collection[this.remove];
    this.remove++;
    return result;
  }

  size() {
    return Object.keys(this.collection).length;
  }

}

var result = new Queue();
