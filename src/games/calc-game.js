import runGame from '../index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);
const operators = ['+', '-', '*'];

const generateRound = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let result;
  switch (operator) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
  }

  return {
    question: `${a} ${operator} ${b}`,
    correctAnswer: result.toString(),
  };
};

const runCalcGame = (name) => {
  runGame(name, '¿Cuál es el resultado de la expresión?', generateRound);
};

export default runCalcGame;
