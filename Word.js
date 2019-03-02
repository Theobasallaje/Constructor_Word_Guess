var Letter = require("./Letter");

function Word(){
    this.letterArr = [];
    this.buildLetters = function(word){
        for (var i=0; i<word.length; i++){
            var newLetter = new Letter(word[i]);
            this.letterArr.push(newLetter);
        }
    }

    this.display = function(){
        var word = [];
        for (var i=0; i<this.letterArr.length; i++){
            word.push(this.letterArr[i].check());
        }
        // console.log(this.letter[i].check());
        console.log(word.join(" "));
        this.getWordArr = function(){
            return word;
        }
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

    this.guessLetter = function(char){
        for (var i=0; i<this.letterArr.length; i++){
            this.letterArr[i].guess(char);
        }
    }
}

module.exports = Word;