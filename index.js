var inquirer = require('inquirer');
var Word = require("./Word");
var wordArr = ["banana", "game", "apple", "computer"];
var randWord = wordArr[Math.floor(Math.random() * wordArr.length)];
var guessNum = 5;
var inRandWord = false;
var gameOver = false;

console.log(randWord);

var gameWord = new Word(randWord);

gameWord.buildLetters();
//gameWord.buildLetters(randWord);

function play() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: "guess",
        message: "guess a letter"
      }
    ])
    .then(answers => {
      // Still need to check if you win or lose
        //console.log(gameWord);
        if (gameWord.guessLetter(answers.guess) === true) {
          console.log("Correct!");
        }
        else {
          if (guessNum != 0) {
            console.log(`Incorrect! you have ${guessNum} guesses left!`)
            guessNum--;
          }
          else {
            console.log('No guesses left');
          }

        }

        //console.log(gameWord.getWordArr());
        gameWord.display();

        if ((gameOver) && (guessNum == 0)){
          console.log("You Won!");
        } else if ((!gameOver) && (guessNum == 0)){
          console.log("You Lose!");
        }

        //gameWord.display();
        // console.log(gameWord.getWordArr().length);
        // console.log(gameWord.checkUnderScore());
        // console.log(guessNum);
        if (!gameWord.isFinished()) {
          play();
        } //out win lose logic here?

    });
}

// function checkLetter(){

// }

play()