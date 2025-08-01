import runGame from '../index.js';

const getRandomNumber = (min = 1, max = 50) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step) => {
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};
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
