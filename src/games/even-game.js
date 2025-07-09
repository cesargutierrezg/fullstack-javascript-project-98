import runGame from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);
const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return {
    question: number.toString(),
    correctAnswer,
  };
};

const runEvenGame = (name) => {
  runGame(name, 'Responde "yes" si el número es par, de lo contrario responde "no".', generateRound);
};

export default runEvenGame;
