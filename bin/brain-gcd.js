#!/usr/bin/env node

import saludo from '../src/cli.js';
import runGcdGame from '../src/games/gcd-game.js';

const name = saludo();
runGcdGame(name);
