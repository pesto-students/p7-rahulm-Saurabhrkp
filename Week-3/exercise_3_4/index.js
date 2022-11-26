/**
 * Solution
 */
function createStack() {

  const items = [];

  function push(item) {
    items.push(item);
  }

  function pop() {
    return items.pop();
  }

  return Object.freeze({
    push,
    pop
  });
}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());
// => 5
console.log(stack.items);
// => undefined
