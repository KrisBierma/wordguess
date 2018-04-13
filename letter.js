// var arg=process.argv[2];
var letters=[];

var Letter = function(char, guessed){
    //stores the character
    this.char=char;
    //whether it's been guessed or not
    this.guessed=false;
    //if it's guessed, send the letter; if not, send the _
    this.isGuessed=function(){
        if (this.guessed) {
            console.log("adding letter: "+this.char);
            letters.push(this.char);
        }
        else {
            console.log("adding _");
            letters.push("_");
        }
        // console.log(letters.join(" "));
    };
    //compares guessed letter to see if there's a match
    this.checkLetter=function(currentChar){
        if (currentChar.toLowerCase() === this.char){
            this.guessed = true;
            console.log("checkLetter: "+this.guessed);
        }
    }
    this.print=function(){
        console.log(letters.join(" "));
    }
}

module.exports = Letter;