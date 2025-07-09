#!/usr/bin/env node

import saludo from '../src/cli.js';
import runEvenGame from '../src/games/even-game.js';

const name = saludo();
runEvenGame(name);
