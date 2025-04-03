import _ from 'lodash';
import launchGame from '../index.js';

const getProgression = () => {
  const progression = [];
  let startNumber = _.random(0, 100);
  const addedNumber = _.random(2, 7);
  const elementsCount = 10;
  for (let i = 1; i <= elementsCount; i += 1) {
    const resultnumber = startNumber + addedNumber;
    progression.push(resultnumber);
    startNumber = resultnumber;
  }
  return progression;
};

const information = 'What number is missing in the progression?';
const getGameData = () => {
  const progression = getProgression();
  const randomIndex = _.random(0, progression.length - 1);
  const correctAnswer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const progressionStr = progression.join(' ');
  return [progressionStr, correctAnswer];
};

const playGame = () => {
  launchGame(information, getGameData);
};

export default playGame;
