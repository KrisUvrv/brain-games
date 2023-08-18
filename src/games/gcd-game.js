import readlineSync from "readline-sync";
import {descriptionGame, getUserName, ROUNDS} from "../index.js";

const gcd = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

export const gcdGame = () => {

    const userName = getUserName();
    descriptionGame('gcd-game');

    let correctAnswers = 0;
    while (correctAnswers < ROUNDS) {
        const num1 = Math.floor(Math.random() * 100);
        const num2 = Math.floor(Math.random() * 100);

        console.log(`Question: ${num1} ${num2}`);
        const userAnswer = readlineSync.question('Your answer: ');

        let correctAnswer = gcd(num1, num2);

        if (Number(userAnswer) === correctAnswer) {
            console.log('Correct!');
            correctAnswers += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
}

