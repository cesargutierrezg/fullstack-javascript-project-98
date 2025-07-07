#!/usr/bin/env node

import saludo from '../src/cli.js';
import runProgressionGame from '../src/games/progression-game.js';

const name = saludo();
runProgressionGame(name);