var Letter = require("./letter");
//creates an object representing the current word the user is attempting to guess. 

function Word(currentWord){
    //splits the word into pieces
    this.chars = currentWord.split("");

    //concatenates the split pieces with spaces to display
    this.displayedWord=function(char, guessed){
        //run this for each letter in this.char (the split word)
        for (var i=0; i<this.chars.length;i++){
            //call the letter.js first func - if it's already guessed it'll show the letter, if not an _
            var char = this.chars[i];
            console.log("char: "+char);
            var newLetter = new Letter(char, guessed);
            console.log("newLetter: "+newLetter.char+newLetter.guessed);
            newLetter.isGuessed();
        }
        newLetter.print();
    };

    //true if a letter has been guessed
    this.flag=0;

    //gets user inputed letter, calls letter.js second func to compare to each letter in this.char
    this.compareLetters=function(currentChar, guessed){
        console.log("currentChar: "+currentChar);
        for (var i=0; i<this.chars.length;i++){
            var char = this.chars[i];
            console.log("here1");
            var newCheck = new Letter(char, guessed);

            console.log(currentChar);
            newCheck.checkLetter(currentChar);            
            
            if (newCheck.guessed===true){
                console.log("newCheck.guess: "+newCheck.guessed);
                this.flag++;
            }
        }
    }

    this.print=function(){
        console.log(this.chars);
        console.log(this.displayedWord());
    }
}

module.exports = Word;