var Word = require("./word");
var inquirer = require("inquirer");
var wordChoices =["hat", "man", "porpoise"];

//Randomly selects a word and uses the `Word` constructor to store it
var random = Math.floor(Math.random()*wordChoices.length);
var currentWord = wordChoices[random];
console.log(currentWord);

//make new object from Word constructor
var newWord = new Word(currentWord);
// console.log("newWord: "+newWord.print());

var numGuesses=10;
// var wordGuessed = false;

var askLetter = function(){
    if (numGuesses=10){
      console.log(newWord.displayedWord());
    // if (numGuesses>0 && !wordGuessed){
      inquirer.prompt([{
        name:"letter",
        message:"Guess a letter!"
      }]).then (function(answer) {
        //call word.js compareLetters. 
        // function message(){
          newWord.compareLetters(answer.letter);

          // If it's the same answer "correct"
          if (newWord.flag>0){
            console.log("Correct!");
            //display word with correct letters filled in 
            var char=answer.letter;
            console.log("var char="+char);
            console.log(newWord.displayedWord());
            //check if whole word is guessed
            checkWord();
          }
          else {
            console.log("Incorrect! \n "+numGuesses+" remaining");
            numGuesses--;
            checkNumGuesses();
            newWord.flag=0;
          } 
// }
      })
    //   askLetter();
    }
};

//checks to see if whole word is guessed
function checkWord(){
    if (newWord.flag === currentWord.length){
      console.log("You got it right! Next word!");
      numGuesses=10;
      //start over with new word
    }
    // askLetter();
}

//if out of guesses, restart everything 
function checkNumGuesses(){
    if (numGuesses=0){
        //show word
        console.log("display word");
        //start over with new word
        numGuesses=10;
    }
}

askLetter();