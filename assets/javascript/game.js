/*
MAIN CODE GOALS

on page load, there is a random letter

user must press keys to guess what that letter is

if the key pressed matches the letter, they score a win point

if the key does not match 10 times in a row, then they gain a loss point

*/
// Declare global variable
var winsCount = 0;
var lossesCount = 0;
var guessesLeft = 10;
var chars = "abcdefghijklmnopqrstuvwxyz";
var randomLetter = "";


//Generates random number
function numGen(){
    randomLetter = chars.substr( Math.floor(Math.random() * 26), 1);
}

//Key listener and compare to random
//Also increments win/loss counter
document.onkeyup = function(e) {
    if (randomLetter === e.key) {
        document.getElementById("winsCount").innerHTML = winsCount++;
        alert("You did it!!");
        numGen();
        document.getElementById("guessesSoFar").innerHTML = " ";
    } else {
        document.getElementById("guessesSoFar").innerHTML += ", " + e.key;
        guessesLeft--;
        if (guessesLeft === 0){
            alert("You're out of guesses! Start over!");
            document.getElementById("guessesSoFar").innerHTML = " ";
        }
    }
    
}
//Runs generator on page load
numGen();





// var guessesLeft = 10;
// document.getElementById(guessesLeft).innerHTML = guessesLeft;
// var guessesSoFar;

    
    



