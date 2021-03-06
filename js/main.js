const button = document.querySelectorAll('button');
const digit = document.querySelectorAll('.digit');
const operator = document.querySelectorAll('.operator');
const upperDisplay = document.querySelector('.upper-display');
const lowerDisplay = document.querySelector('.lower-display');
const clear = document.querySelector('.clear');
const clearAll = document.querySelector('.clear-all');
const deleteBtn = document.querySelector('.delete');
const equalBtn = document.querySelector('.equal');
const signBtn = document.querySelector('.plus-minus');

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

  roundNumber(number) {
    return Math.round(number * 1000) / 1000;
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
        if (curr === 0) {
          alert("Chill! You can't divide by 0!");
          this.clear();
          return;
        }
        break;
      default:
        return;
    }

    this.lower = this.roundNumber(computation);
    this.upper = '';
    this.operation = undefined;
  }

  changeSign() {
    if (this.lower > 0) {
      this.lower = Number(`-${this.lower}`);
    } else if (this.lower < 0) {
      this.lower = Number(this.lower.toString().slice(1));
    } else {
      return;
    }
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

signBtn.addEventListener('click', () => {
  calculator.changeSign();
  calculator.updateDisplay();
});

// Add keyboard support

window.addEventListener('keydown', useKeypad);

function useKeypad(e) {
  if ((e.key >= 0 && e.key < 10) || e.key === '.') {
    calculator.appendDigit(e.key);
    calculator.updateDisplay();
  }
  if (e.key === '+') {
    calculator.selectOperator('+');
    calculator.updateDisplay();
  }
  if (e.key === '-') {
    calculator.selectOperator('-');
    calculator.updateDisplay();
  }
  if (e.key === '*') {
    calculator.selectOperator('×');
    calculator.updateDisplay();
  }
  if (e.key === '/') {
    calculator.selectOperator('÷');
    calculator.updateDisplay();
  }
  if (e.key === '=' || e.key === 'Enter') {
    calculator.compute();
    calculator.updateDisplay();

    if ((e.key >= 0 && e.key < 10) || e.key === '.') {
      calculator.appendDigit(e.key);
      calculator.updateDisplay();
    }
  }
  if (e.key === 'Backspace') {
    calculator.delete();
    calculator.updateDisplay();
  }

  if (e.key === 'Delete') {
    calculator.clear();
    2 - calculator.updateDisplay();
    if ((e.key >= 0 && e.key < 10) || e.key === '.') {
      calculator.appendDigit(e.key);
      calculator.updateDisplay();
    }
  }

  if (e.key === 'Escape') {
    calculator.clearAll();
    calculator.updateDisplay();
    if (e.key >= 0 && e.key < 10) {
      calculator.appendDigit(e.key);
      calculator.updateDisplay();
    }
  }
}
