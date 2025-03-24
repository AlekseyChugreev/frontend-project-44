import readlineSync from 'readline-sync';
export { commonLogic };

const commonLogic = (information, localLogic) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(information);

    let flag = true;
    for (let i = 0; i < 3; i++) {
        const [question, correctAnswer] = localLogic();
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');

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