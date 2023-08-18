import readlineSync from "readline-sync";
import {descriptionGame, getUserName, ROUNDS} from "../index.js";

const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    // Проверяем делители в интервале от 5 до квадратного корня из числа
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

export const primeGame = () => {

    const userName = getUserName();
    descriptionGame('prime-game');

    let correctAnswers = 0;
    while (correctAnswers < ROUNDS) {
        const number = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ');

        const isPrimeNumber = isPrime(number);
        const correctAnswer = isPrimeNumber ? 'yes' : 'no';

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