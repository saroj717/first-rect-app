var foo = 30; // does not create window.foo

export var sum = function sum(a, b) {
  return a + b;
};
export var numbers = [5, 10, 15, 20, 25, foo];