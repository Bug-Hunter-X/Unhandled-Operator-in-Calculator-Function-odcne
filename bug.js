function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Function to handle calculator operations
function calculate(operation, a, b) {
  let result;
  switch (operation) {
    case '+':
      result = add(a, b);
      break;
    case '-':
      result = subtract(a, b);
      break;
    case '*':
      result = multiply(a, b);
      break;
    case '/':
      result = divide(a, b);
      break;
    default:
      throw new Error('Invalid operation');
  }
  return result;
}

// Example usage
console.log(calculate('+', 5, 3)); // Output: 8
console.log(calculate('-', 10, 4)); // Output: 6
console.log(calculate('*', 7, 2)); // Output: 14
console.log(calculate('/', 20, 5)); // Output: 4
//console.log(calculate('/', 10, 0)); // This will throw an error
console.log(calculate('%', 10, 3)); // This will throw an error