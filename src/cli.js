import readlineSync from 'readline-sync';

const saludo = () => {
    console.log('¡Bienvenido a Brain Games!');
    const name = readlineSync.question('Cual es tu nombre? ');
    console.log(`Hello, ${name}!`);
    return name;
}

export default saludo;