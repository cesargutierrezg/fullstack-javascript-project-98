import runGame from '../index.js';

const getRandomNumber = (min = 1, max = 50) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length = 10) => Array.from({ length },
  (_, i) => start + i * step);
const generateRound = () => {
  const start = getRandomNumber();
  const step = getRandomNumber(2, 10);
  const progression = generateProgression(start, step);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex];

  const question = progression
    .map((num, i) => (i === hiddenIndex ? '..' : num))
    .join(' ');

  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

const runProgressionGame = (name) => {
  runGame(name, '¿Qué número falta en la progresión?', generateRound);
};

export default runProgressionGame;
