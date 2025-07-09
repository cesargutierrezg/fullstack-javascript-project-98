#!/usr/bin/env node

import saludo from '../src/cli.js';
import runPrimeGame from '../src/games/prime.js';

const name = saludo();
runPrimeGame(name);
