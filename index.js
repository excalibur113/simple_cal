const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.keys');
const display = calculator.querySelector('#result');
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const keyValue = key.textContent;
    const displayValue = display.value;

    if (key.classList.contains('operator')) {
      operator = keyValue;
      firstNumber = displayValue;
      display.value = '';
    }

    if (keyValue === '.') {
      if (!displayValue.includes('.')) {
        display.value = displayValue + keyValue;
      }
    }

    if (keyValue === 'C') {
      display.value = '';
    }

    if (keyValue === '=') {
      secondNumber = displayValue;
      result = calculateResult(firstNumber, secondNumber , operator);
      display.value = result;
    }
    
    if (!key.classList.contains('operator') && keyValue !== '.' && keyValue !== 'C' && keyValue !== '=') {
      display.value = displayValue + keyValue;
    }
    }
    });
    
    function calculateResult(num1, num2, operator) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    switch (operator) {
    case '+':
    return (a + b).toFixed(2);
    case '-':
    return (a - b).toFixed(2);
    case '×':
    return (a * b).toFixed(2);
    case '÷':
    return (a / b).toFixed(2);
    default:
    return '0';
    }
    }