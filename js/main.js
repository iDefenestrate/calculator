const button = document.querySelectorAll('button');
const digit = document.querySelectorAll('.digit');
const operator = document.querySelectorAll('.operator');
const upperDisplay = document.querySelector('.upper-display');
const lowerDisplay = document.querySelector('.lower-display');
const clear = document.querySelector('.clear');
const clearAll = document.querySelector('.clear-all');
const deleteBtn = document.querySelector('.delete');
const equalBtn = document.querySelector('.equal');

class Calculator {
  constructor(upperDisplay, lowerDisplay) {
    this.upper = upperDisplay;
    this.lower = lowerDisplay;
    this.clearAll();
  }

  clearAll() {
    this.upper = '';
    this.lower = '';
    this.operation = '';
  }
  clear() {
    this.lower = '';
  }

  delete() {
    this.lower = this.lower.toString().slice(0, length - 1);
  }

  appendDigit(digit) {
    if (digit === '.' && this.lower.includes('.')) return;
    this.lower = this.lower.toString() + digit.toString();
  }

  selectOperator(operation) {
    if (this.lower === '') return;
    if (this.upper !== '') {
      this.compute();
    }
    this.upper = this.lower;
    this.lower = '';
    this.operation = operation;
  }

  compute() {
    let computation;
    const prev = parseFloat(this.upper);
    const curr = parseFloat(this.lower);
    if (isNaN(prev) || isNaN(curr)) return;

    switch (this.operation) {
      case '+':
        computation = prev + curr;
        break;
      case '-':
        computation = prev - curr;
        break;
      case '×':
        computation = prev * curr;
        break;
      case '÷':
        computation = prev / curr;

        break;
      default:
        return;
    }
    if (`${prev} ${this.operation} ${curr}` !== 0) {
      computation = computation.toFixed(3);
    }
    this.lower = computation;
    this.upper = '';
    this.operation = undefined;
  }

  updateDisplay() {
    lowerDisplay.innerText = this.lower;
    upperDisplay.innerText = this.upper;

    if (this.operation != null) {
      upperDisplay.innerText = `${this.upper} ${this.operation} ${this.lower}`;
    }
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
    calculator.selectOperator(operator.innerText);
    calculator.updateDisplay();
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

equalBtn.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});
