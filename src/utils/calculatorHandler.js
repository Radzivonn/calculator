import calculate from './calculate';

/**
 * @param {string} inputValue - button meaning
 * @param {string} value - current operand
 * @param {number []} operands - array of operands
 * @param {String []} operations - array of operations
 * @returns {{value: string, operands: number[], operations: String[]}}
 * @description Function that performs certain actions depending on the button pressed
 */
const calculatorHandler = (inputValue, value, operands, operations) => {
  let resultValue = value;
  let resultOperands = operands;
  let resultOperations = operations;

  if (inputValue.match(/^[0-9]/)) {
    if (resultValue.slice(resultValue.length - 2) === '.0') {
      resultValue = resultValue.slice(0, -1); // if a dot was placed as a separator
    }
    resultValue += inputValue;
  } else if (inputValue.match(/\+|\-|\*|\/|%/)) {
    resultOperands.push(Number(resultValue));
    resultOperations.push(inputValue);
    resultValue = '';
  } else {
    switch (inputValue) {
      case 'AC':
        resultValue = '';
        resultOperands = [];
        resultOperations = [];
        break;
      case 'X':
        if (Number(resultValue) < 0 && resultValue.length === 2) {
          resultValue = '';
        } else {
          resultValue = resultValue.slice(0, -1);
        }
        if (resultValue.slice(-1) === '.') {
          resultValue = resultValue.slice(0, -1);
        }
        resultOperands[-1] = resultValue;
        break;
      case '=':
        resultOperands.push(Number(resultValue));
        resultValue = calculate(resultOperations, resultOperands);
        resultOperations = [];
        resultOperands = [];
        resultValue = String(resultValue);
        break;
      case '.':
        if (!resultValue.includes('.')) resultValue += inputValue + '0';
        break;
    }
  }
  return {
    value: resultValue,
    operands: resultOperands,
    operations: resultOperations,
  };
};

export default calculatorHandler;
