var Letter = require("./Letter");

function Word(){
    this.letterArr = [];
    this.buildLetters = function(word){
        for(var i=0; i<word.length; i++){
            var newLetter = new Letter(word[i]);
            this.letterArr.push(newLetter);
        }
    }

    this.display = function(){
        var word = [];
        for(var i=0; i<this.letterArr.length; i++){
            word.push(this.letterArr[i].check());
        }

        console.log(word.join(" "));
    }

    this.guessLetter = function(char){
        for(var i=0; i<this.letterArr.length; i++){
            this.letterArr[i].guess(char);
        }
    }
}

module.exports = Word;