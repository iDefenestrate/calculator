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

const display = document.querySelector('.main-display');
const digit = document.querySelectorAll('.digit');
const clear = document.querySelector('.clear-all');
const operator = document.querySelectorAll('.operator');

const bank = [];

digit.forEach((digit) => {
  digit.addEventListener('click', () => {
    bank.push(digit.textContent);
    let newbank = bank.join('');
    newbank = Number(newbank);
    display.textContent = newbank;
  });
});
