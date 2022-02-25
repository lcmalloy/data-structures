var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var index = 0;
  var returnIndex = 0;

  someInstance.enqueue = function(value) {
    //enqueue adds a value to the back
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    //dequeue removes value from the front
    if (index > 0) {
      index--;
      storage[returnIndex];
      returnIndex++;
    }

  };

  someInstance.size = function() {
    //We need a counter that will increase when we enqueue and decrease when we dequeue
    return index;
  };

  return someInstance;
};






