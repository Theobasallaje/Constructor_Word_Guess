var inquirer = require('inquirer');
var Word = require("./Word");
var wordArr = ["banana", "game", "apple", "computer"];
var randWord = wordArr[Math.floor(Math.random() * wordArr.length)];
var guessNum = 5;
var inRandWord = false;
var gameWon = false;

console.log(randWord);

var gameWord = new Word();
gameWord.buildLetters(randWord);

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
      if (!gameWon) {
        gameWord.guessLetter(answers.guess);
        for (var i=0; i<randWord.length; i++){
          if (randWord[i]===answers.guess){
            inRandWord = true;
            break;
          } else {
            inRandWord = false;
          }
        }

        if (inRandWord){
          console.log("Correct!")
        } else if (!inRandWord && guessNum != 1) {
          console.log(`Incorrect! you have ${guessNum} guesses left!`)
          guessNum--;
        } else if (guessNum = 1){
          console.log("out of guesses")
          for (var i=0; i<gameWord.getWordArr().length; i++){
            if (!(gameWord.getWordArr()[i] == "_")){
              gameWon = true;
              break;
            } else {
              gameWon = false;
            }
          }
        }

        if ((gameWon) && (guessNum == 0)){
          console.log("You Won!");
        } else if ((!gameWon) && (guessNum == 0)){
          console.log("You Lose!");
        }

        gameWord.display();
        // console.log(gameWord.getWordArr().length);
        // console.log(gameWord.checkUnderScore());
        console.log(guessNum);
        play()
      }
    });
}

// function checkLetter(){

// }

play()