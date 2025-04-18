import _ from 'lodash';
import launchGame from '../index.js';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const information = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getGameData = () => {
  const number = _.random(0, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const playGame = () => {
  launchGame(information, getGameData);
};

export default playGame;
