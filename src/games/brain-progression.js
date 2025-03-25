import _ from 'lodash';
import { commonLogic } from '../index.js';
export { game };

const getProgression = () => {
    const progressions = [
        [5, 7, 9, 11, 13, 15, 17, 19, 21, 23],
        [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
        [14, 19, 24, 29, 34, 39, 44, 49, 54, 59],
        [4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
        [0, 4, 8, 12, 16, 20, 24, 28, 32, 36],
        [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    ];
    return progressions[_.random(0, progressions.length - 1)];
};

const information = 'What number is missing in the progression?';
const localLogic = () => {
    const progression = getProgression();
    const randomIndex = _.random(0, progression.length - 1);
    const correctAnswer = progression[randomIndex].toString();
    progression[randomIndex] = '..';
    const progressionStr = progression.join(' ');
    return [progressionStr, correctAnswer];
};

const game = () => {
    commonLogic(information, localLogic);
};