var fs=require("fs");//depends on `Word.js

var wordChoices =["hat", "man", "porpoise"];

//Randomly selects a word and uses the `Word` constructor to store it
var random = Math.floor(Math.random()*wordChoices.length);
console.log(random);
var newWord = new Word (wordChoices[random]);

var numGuesses=10;

//call word.js compareLetters. If it's the same, return true, correct message
function message(){
  if (newWord.compareLetters()){
    console.log("Correct!"); 
    checkWord();
  }
  else {
    console.log("Incorrect! \n "+numGuesses+" remaining");
    numGuesses--;
    checkNumGuesses();
  } 
}

//checks to see if whole word is guessed
function checkWord(){
    //if done
    console.log("You got it right! Next word!");
    numGuesses=10;
    //start over with new word
}

//if out of guesses, restart everything 
function checkNumGuesses(){
    if (numGuesses=0){
        //show word
        //start over with new word
        numGuesses=10;
    }
}

//   * Prompts the user for each guess and keeps track of the user's remaining guesses