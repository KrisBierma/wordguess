var fs=require("fs");
// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

function Word(currentWord){
    this.chars = currentWord.split("");
    this.displayedWord=function(){
        var g = isGuessed
        // if (isGuessed(chars[0])){console.log("true");}
        for (var i=0; i<this.chars.length;i++){
            var displayedWord=this.isGuessed(this.chars[i])+" ";
        }
    }
    this.compareLetters=function(){
        for (var i=0; i<currentWord.length;i++){
            return checkLetter();
        }
    }
    this.print=function(){
        console.log(this.chars);
        console.log(this.displayedWord());
    }
}

var word = new Word("pie");
word.print();


//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)