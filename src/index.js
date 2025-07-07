import readlineSync from 'readline-sync';

const runGame = (name, instructions, generateRound) => {
  console.log(instructions);

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const { question, correctAnswer } = generateRound();

    console.log(`Pregunta: ${question}`);
    const userAnswer = readlineSync.question('Tu respuesta: ');

    if (userAnswer.toLowerCase() === correctAnswer.toString()) {
      console.log('¡Correcto!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default runGame;
