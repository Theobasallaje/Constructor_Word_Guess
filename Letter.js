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
            console.log("correct");
            this.isGuessed = true;
        } else {
            console.log("incorrect");
        }
    }
}


module.exports = Letter;
