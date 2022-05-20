const button = document.querySelectorAll('button');
const digit = document.querySelectorAll('.digit');
const operator = document.querySelectorAll('.operator');
const upperDisplay = document.querySelector('.upper-display');
const lowerDisplay = document.querySelector('.lower-display');
const clear = document.querySelector('.clear');
const clearAll = document.querySelector('.clear-all');
const deleteBtn = document.querySelector('.delete');

class Calculator {
  constructor(upperDisplay, lowerDisplay) {
    this.upper = upperDisplay;
    this.lower = lowerDisplay;
    this.clear();
  }

  clear() {
    this.upper = '';
    this.lower = '';
  }

  clearAll() {}

  delete() {}

  appendDigit(number) {
    if (number === '.' && this.lower.includes('.')) return;
    this.lower = this.lower.toString() + number.toString();
  }

  selectOperation(operator) {
    switch (operator) {
      case '+':
        console.log('hi');
        break;
      case '-':
        console.log('no');
        break;
      case '×':
        console.log('hie');
        break;
      case '÷':
        console.log('frwer');
        break;
      default:
        console.log('yo');
    }
  }

  compute() {}

  updateDisplay() {
    lowerDisplay.innerText = this.lower;
  }
}

const calculator = new Calculator(upperDisplay, lowerDisplay);

digit.forEach((digit) => {
  digit.addEventListener('click', () => {
    calculator.appendDigit(digit.innerText);
    calculator.updateDisplay();
  });
});

operator.forEach((operator) => {
  operator.addEventListener('click', () => {
    calculator.selectOperation(operator.innerText);
  });
});
