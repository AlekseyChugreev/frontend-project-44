import readlineSync from 'readline-sync';
import _ from 'lodash';
export { game };

const isEven = (number) => {
    return number % 2 === 0;
};

const game = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let flag = true;
    for (let i = 0; i < 3; i++) {
        const number = _.random(0, 100);
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = isEven(number) ? 'yes' : 'no';

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            flag = false;
            break;
        }
        console.log('Correct!');
    }
    if (flag) console.log(`Congratulations, ${userName}!`);
    else console.log(`Let's try again, ${userName}!`);
};
