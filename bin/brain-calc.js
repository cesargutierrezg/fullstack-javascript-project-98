#!/usr/bin/env node

import saludo from '../src/cli.js';
import runCalcGame from '../src/games/calc-game.js';

const name = saludo();
runCalcGame(name);
