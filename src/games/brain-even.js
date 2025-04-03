import _ from 'lodash';
import launchGame from '../index.js';

const information = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameData = () => {
  const number = _.random(0, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [number, correctAnswer];
};

const playGame = () => {
  launchGame(information, getGameData);
};

export default playGame;
