const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (a, b, operator) => {
  if (operator === '+') {
    return add(a, b);
  }
  if (operator === '-') {
    return subtract(a, b);
  }
  if (operator === '*') {
    return multiply(a, b);
  }
  if (operator === '/') {
    return divide(a, b);
  }
};