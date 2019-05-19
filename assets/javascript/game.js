/*function randomString() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    var string_length = 1;
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }
    document.randform.randomfield.value = randomstring;
}
*/
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [''];

var winCount = document.getElementById("win-count");
var lossCount = document.getElementById("loss-count");
var guessCount = document.getElementById("guess-count");
var letterGuess = document.getElementById("letter-guess");

document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

}
