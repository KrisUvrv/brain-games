import readlineSync from 'readline-sync';

export const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const ROUNDS = 3;

export const descriptionGame = (game) => {
  if (game === 'calc-game') {
    console.log('What is the result of the expression?');
  }
  if (game === 'even-game') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
  if (game === 'gcd-game') {
    console.log('Find the greatest common divisor of given numbers.');
  }
  if (game === 'prime-game') {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  }
  if (game === 'progression-game') {
    console.log('What number is missing in the progression?');
  }
};
