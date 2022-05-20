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
    this.clearAll();
  }

  clearAll() {
    this.upper = '';
    this.lower = '';
  }
  clear() {
    this.lower = '';
  }

  delete() {
    this.lower = this.lower.slice(0, length - 1);
  }

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
    upperDisplay.innerText = this.upper;
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

clearAll.addEventListener('click', () => {
  calculator.clearAll();
  calculator.updateDisplay();
});

clear.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteBtn.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});
