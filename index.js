var inquirer = require('inquirer');
var Word = require("./Word");
var wordArr = ["banana", "game", "apple", "computer"];
var randWord = wordArr[Math.floor(Math.random() * wordArr.length)];
var guessNum = 4;

console.log(randWord);
console.log(this.isGuessed); 

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
      // check if you have any guess left
      // check if you win or lose
      // put if to check:
      if (guessNum > 0) {
        // console.log(answers); // answers is an object containing the letters that the user has guessed
        // for (var i=0; i<randWord.length; i++){
        //   if (randWord[i] === answers.guess){
        //     console.log("Correct!")
        //   } else {
        //     console.log(`Incorrect! You Have ${guessNum} Guesses Remaining!`);
        //   }
        // }
          // if (!this.isGuessed){
          //   console.log("Correct!")
          //   console.log(this.isGuessed); 
          //   // console.log(Word[0]); 

          // } else if (this.isGuessed){
          //   console.log(`Incorrect! You Have ${guessNum} Guesses Remaining!`);
          // }
        gameWord.guessLetter(answers.guess);
        gameWord.display();
        play()
        guessNum--;
      }
    });
}

play()