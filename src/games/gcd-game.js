import readlineSync from 'readline-sync';
import { descriptionGame, getUserName, ROUNDS } from '../index.js';

const gcd = (a, b) => {
  let c = a;
  let d = b;

  while (d !== 0) {
    const temp = d;
    d = c % d;
    c = temp;
  }
  return c;
};

const gcdGame = () => {
  const userName = getUserName();
  descriptionGame('gcd-game');

  let correctAnswers = 0;
  while (correctAnswers < ROUNDS) {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);

    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = gcd(num1, num2);

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

export default gcdGame;
