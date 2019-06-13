
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [''];
var computerGuess;

var winText = document.getElementById("win-count");
winText.textContent = wins;

var lossText = document.getElementById("loss-count");
lossText.textContent = losses;

var guessText = document.getElementById("guess-count");
guessText.textContent = guessesLeft;

var letterGuessText = document.getElementById("letter-guess");
/*
letterGuessText.addEventListener(onkeyup, function(){
    onkeyup.appen
})
*/

function updateValues() {
    winText.textContent = wins;
    lossText.textContent = losses;
    guessText.textContent = guessesLeft;
    letterGuessText.textContent = guesses;
}

document.getElementsByTagName("body")[0].onkeyup = function(e) {
    myFunction(e)
};

function myFunction(e) {
    //pull random element from array if guesses left is = 9
    computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    //compare item with e.key
if (computerGuess == e.key) {
    wins++;
    winText.textContent = wins;
    guessesLeft = 9;
    guesses = [];
} else if ( guessesLeft > 0) {
    guessesLeft--;
    guesses.push(e.key);
} else if ( guessesLeft == 0) {
    losses++;
    guessesLeft = 9;
    guesses = [];
} 
updateValues();
    //if they are equal wins ++, guesses left = 9


    //else if guesses left is > 0 then gusses left --, add my guess to guesses array

    //else if guesses left = 0 then losses ++, guesses left = 9

  console.log('computer guess '+ computerGuess);
  console.log('my guess ' + e.key);
}



