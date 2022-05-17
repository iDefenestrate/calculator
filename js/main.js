const button = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const upperDisplay = document.querySelector('.upper-display');
const digit = document.querySelectorAll('.digit');
const clear = document.querySelectorAll('.clear');
const operator = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');

class Calculator {
  constructor(main, upper) {
    this.display = main;
    this.upperDisplay = upper;
    this.clear();
  }

  clear() {
    (this.main = ''), (this.upper = '');
  }

  addDigit(number) {
    if (number === '.' && this.main.includes('.')) return;
    this.main = this.main.toString() + number.toString();
  }

  selectOperation(operation) {
    if (this.main === '') return;
    this.operation = operation;
    this.upper = this.main;
    this.main = '';
  }

  update() {
    this.display.innerText = this.main;
    this.upperDisplay.innerText = this.upper;
  }
}

const calculator = new Calculator(display, upperDisplay);

digit.forEach((digit) => {
  digit.addEventListener('click', () => {
    calculator.addDigit(digit.innerText);
    calculator.update();
  });
});

operator.forEach((digit) => {
  digit.addEventListener('click', () => {
    calculator.selectOperation(digit.innerText);
    calculator.update();
  });
});

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (a, b, operator) => {
  if (operator === '+') {
    console.log(add(a, b));
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
