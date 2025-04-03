import _ from 'lodash';
import launchGame from '../index.js';

const getGcd = (a, b) => {
  if (b === 0) return a;
  return getGcd(b, a % b);
};

const information = 'Find the greatest common divisor of given numbers.';
const getGameData = () => {
  const number1 = _.random(0, 100);
  const number2 = _.random(0, 100);
  const numbers = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2).toString();
  return [numbers, correctAnswer];
};

const playGame = () => {
  launchGame(information, getGameData);
};

export default playGame;
