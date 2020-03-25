const fs = require('fs');
const path = require('path');

// option 1
// const keyboard = path.resolve('keyboard.txt')
// console.log(keyboard);

// const readFile = fs.readFileSync(keyboard, 'utf-8');
// console.log(readFile);

// option 2
const readFile = fs.readFileSync(path.resolve('keyboard.txt'), 'utf-8');
console.log(readFile);