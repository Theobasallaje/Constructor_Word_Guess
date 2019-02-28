var inquirer = require('inquirer');
var Word = require("./Word");

var wordArr = ["banana", "game", "apple", "computer"];
var randWord = wordArr[Math.floor(Math.random()*wordArr.length)];
console.log(randWord)

var gameWord = new Word();
gameWord.buildLetters(randWord);

  function play(){
    inquirer
  .prompt([
      {
          type: 'input',
          name: "guess",
          message: "guess a letter"
      }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    // check if you have any guess left
    // check if you win or lose
    // put if to check:
    console.log(answers);
    gameWord.guessLetter(answers.guess);
    gameWord.display();
    play()
  });
  }

  play()