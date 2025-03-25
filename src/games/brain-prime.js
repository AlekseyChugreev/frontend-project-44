import _ from 'lodash';
import { commonLogic } from '../index.js';
export { game };

const isPrime = (number) => {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
};

const information = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const localLogic = () => {
    const number = _.random(0, 100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return [number, correctAnswer];
};

const game = () => {
    commonLogic(information, localLogic);
};