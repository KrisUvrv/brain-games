import readlineSync from 'readline-sync';
import { descriptionGame, getUserName, ROUNDS } from '../index.js';

const calcGame = () => {
  const userName = getUserName();
  let correctAnswers = 0;
  descriptionGame('calc-game');

  while (correctAnswers < ROUNDS) {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    const expression = `${num1} ${operator} ${num2}`;
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    let correctAnswer;
    switch (operator) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      default:
        throw new Error(`Unknown operator: ${operator}`);
    }

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
};

export default calcGame;
