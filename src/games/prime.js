import runGame from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return {
    question: number.toString(),
    correctAnswer,
  };
};

const runPrimeGame = (name) => {
  runGame(name, 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".', generateRound);
};

export default runPrimeGame;
