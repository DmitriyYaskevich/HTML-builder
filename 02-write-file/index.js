const fs = require('fs');
const process = require('process');
const { stdin } = process;
const path = require('path');
let writeableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));
console.log('Введите текст!');


stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    console.log('Пока!');
    process.exit();     
  }
  console.log('Введите еще текст!');
  writeableStream.write(data); 
});

process.on('SIGINT', () => {
  console.log('Вы использовали команду выхода. До встречи!');
  process.exit(); 
});