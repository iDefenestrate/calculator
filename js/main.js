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
    this.main = this.main.toString() + number.toString();
  }

  update() {
    this.display.innerText = this.main;
  }
}

const calculator = new Calculator(display, upperDisplay);

digit.forEach((digit) => {
  digit.addEventListener('click', () => {
    calculator.addDigit(digit.innerText);
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
