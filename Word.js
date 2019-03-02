var Letter = require("./Letter");
// var word = [];

function Word(randWord){
    this.letterArr = [];
    this.wordAswArray = [];
    this.word = randWord;

    this.guessLetter = function(char){
        let isMatch = false;
        for (var i=0; i<this.letterArr.length; i++){
            if (this.letterArr[i].guess(char)) {
                isMatch = true;
            }
        }
        return isMatch;
    }

    this.buildLetters = function(){
        for (var i=0; i<this.word.length; i++){
            var newLetter = new Letter(this.word[i]);
            this.letterArr.push(newLetter);
        }
    }

    this.display = function(){
        let tempArr = [];
        for (var i=0; i<this.letterArr.length; i++){
            tempArr.push(this.letterArr[i].check());
        }
        
        console.log(tempArr.join(" "));        
    }

    this.getWordArr = function(){
        return this.letterArr;
    }

    this.isFinished = function() {
        for (var i=0; i<this.letterArr.length; i++){
            if (this.letterArr[i].check() === "_") {
                return false;
            }
        }
        return true;
        //check every letter and return true if all letters have been guessed
    }

    // this.checkUnderScore = function(){
    //     for (var i=0; i<word.length; i++){
    //         if (word[i] === "_"){
    //             return true;
    //             break;
    //         } else {
    //             return false;
    //         }
    //     }
    // }
}

// console.log(word);

module.exports = Word;