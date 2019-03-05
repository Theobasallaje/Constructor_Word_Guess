var inquirer = require('inquirer');
var Word = require("./Word");
var wordArr = ["banana", "game", "apple", "computer"];
var randWord = wordArr[Math.floor(Math.random() * wordArr.length)];
var guessNum = 5;
// var inRandWord = false;
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
          // console.log('No guesses left');
          // console.log("You Lose!");
          gameOver = true;
          // console.log(gameWord.isFinished());
        }

      }

      //console.log(gameWord.getWordArr());
      gameWord.display();

      // if (guessNum == 0){
      //   console.log("You Lose!");
      // }

      //gameWord.display();
      // console.log(gameWord.getWordArr().length);
      // console.log(gameWord.checkUnderScore());
      // console.log(guessNum);
      // if ((gameWord.isFinished()) || (gameOver)) {
        if (!gameWord.isFinished() && !gameOver) {
          play();
        } else if (gameOver && !gameWord.isFinished()) {
          console.log("You Lose!")
        } else if (gameWord.isFinished() && !gameOver) {
          console.log("You Win!");
        }
      // } else if ((gameWord.isFinished()) || (gameOver)) {
      //   //put win lose logic here?
      //   if (gameOver) {

      //   }
      // }

    });
}

play()

