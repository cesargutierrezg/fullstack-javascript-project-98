import runGame from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const getGcd = (a, b) => {
  let x = a;
  let y = b;

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return x;
};

const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();

  return { question, correctAnswer };
};

const runGcdGame = (name) => {
  runGame(name, 'Encuentra el máximo común divisor de los números dados.', generateRound);
};

export default runGcdGame;
