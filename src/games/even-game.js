import readlineSync from "readline-sync";
import {descriptionGame, getUserName, ROUNDS} from "../index.js";

export const evenGame = () => {

    const userName = getUserName();
    descriptionGame('even-game');

    let correctAnswers = 0;
    while (correctAnswers < ROUNDS) {
        const number = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ');

        const isEven = number % 2 === 0;
        const correctAnswer = isEven ? 'yes' : 'no';

        if (userAnswer === correctAnswer) {
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