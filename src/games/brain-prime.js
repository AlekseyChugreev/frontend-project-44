import _ from 'lodash';
import { commonLogic } from '../index.js';
export { game };

const information = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const localLogic = () => {
    const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 47, 53, 59, 67, 71, 83, 89, 101];
    const number = _.random(0, 102);
    const correctAnswer = primeNumbers.includes(number) ? 'yes' : 'no';
    return [number, correctAnswer];
};

const game = () => {
    commonLogic(information, localLogic);
};