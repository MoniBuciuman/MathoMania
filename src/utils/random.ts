/* eslint-disable prettier/prettier */
/**
 * Generates a random integer between min (inclusive) and max (inclusive).
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} A random integer between min and max.
 */
const getRandomFirstNumber = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomSecondNumber = (firstNumber: number, operator: string) => {
  if (operator === '+') {
    const maxAddend = 100 - firstNumber;

    return Math.floor(Math.random() * maxAddend);
  } else if (operator === '-') {
    // const number = Math.floor(Math.random() * firstNumber);
    return Math.floor(Math.random() * firstNumber);
  }
};

export const getRandomNumber = (min = 0, max = 3) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Generates a random boolean value.
 * @returns {boolean} A random true or false.
 */
export const getRandomBoolean = () => {
  return Math.random() < 0.5;
};

export const getRandomOperator = () => {
  const operators = ['+', '-'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const getAnswer = (
  firstNo: number,
  secondNo: number,
  mathOperator: string,
  truthV: boolean,
) => {
  let calculatedAnswer;
  if (truthV) {
    if (mathOperator === '+') {
      calculatedAnswer = firstNo + secondNo;
    } else {
      calculatedAnswer = firstNo - secondNo;
    }
  } else {
    if (mathOperator === '+') {
      calculatedAnswer = firstNo + secondNo + getRandomNumber();
    } else {
      calculatedAnswer = firstNo - secondNo + getRandomNumber();
    }
  }

  return calculatedAnswer;
};

export const generateEquation = () => {
  const newFirstNumber = getRandomFirstNumber();
  const newOperator = getRandomOperator();

  const newSecondNumber = getRandomSecondNumber(newFirstNumber, newOperator);
  const newTruthValue = getRandomBoolean();
  const newAnswer = getAnswer(
    newFirstNumber,
    newSecondNumber,
    newOperator,
    newTruthValue,
  );
  const eq = `${newFirstNumber} ${newOperator} ${newSecondNumber} = ${newAnswer} `;
  return {newTruthValue, eq};
};
