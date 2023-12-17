/**
 * calculation function
 * @param {String []} actions - array of operations
 * @param {number []} numbers - array of operands(numbers)
 * @returns {String} number in string format for easy display
 * @description Function that returns the result of calculations based on the operations and operands passed to it
 */
const calculate = (actions, numbers) => {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    switch (actions[i - 1]) {
      case '+':
        result += numbers[i];
        break;
      case '-':
        result -= numbers[i];
        break;
      case '*':
        result *= numbers[i];
        break;
      case '/':
        result /= numbers[i];
        break;
      case '%':
        result /= 100;
        break;
    }
  }
  return String(result);
};

export default calculate;
