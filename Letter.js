function Letter(letter) {
    this.letter = letter;
    this.isGuessed = false;
    this.check = function () {
        if (this.isGuessed) {
            return this.letter;
        } else {
            return "_";
        }
    }
    this.guess = function (char) {
        if (char === this.letter) {
            // console.log("correct"); // shows for EVERY spot that is correct in the word 
            this.isGuessed = true;
            return true;
        } else {
            return false;
            // console.log("incorrect"); // shows for EVERY spot that is incorrect in the word 
        }
    }
}


module.exports = Letter;
