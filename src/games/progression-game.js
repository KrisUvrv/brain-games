import readlineSync from "readline-sync";
import {descriptionGame, getUserName, ROUNDS} from "../index.js";

const generateArithmeticProgression = (length) => {
    const start = Math.floor(Math.random() * 50); // Random starting point
    const diff = Math.floor(Math.random() * 10) + 1; // Random difference between 1 and 10
    const progression = [];

    for (let i = 0; i < length; i++) {
        progression.push(start + i * diff);
    }

    const hiddenIndex = Math.floor(Math.random() * length);
    progression[hiddenIndex] = '..';

    return { progression, hiddenNumber: start + hiddenIndex * diff };
}

export const progressionGame = () => {

    const userName = getUserName();
    descriptionGame('progression-game');

    let correctAnswers = 0;

    while (correctAnswers < ROUNDS) {
        const { progression, hiddenNumber } = generateArithmeticProgression(10);
        console.log(`Question: ${progression.join(' ')}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (Number(userAnswer) === hiddenNumber) {
            console.log('Correct!');
            correctAnswers += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
};