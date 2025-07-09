import runGame from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const getGcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
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
