import _ from 'lodash';
import commonLogic from '../index.js';

const information = 'What is the result of the expression?';
const localLogic = () => {
  const signs = ['+', '-', '*'];
  const functions = [((a, b) => a + b), ((a, b) => a - b), ((a, b) => a * b)];
  const index = _.random(0, 2);
  const num1 = _.random(0, 10);
  const num2 = _.random(0, 10);
  const expression = `${num1} ${signs[index]} ${num2}`;
  const correctAnswer = functions[index](num1, num2).toString();
  return [expression, correctAnswer];
};

const game = () => {
  commonLogic(information, localLogic);
};

export default game;
