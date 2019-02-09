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
function numGen() {
  randomLetter = chars.substr(Math.floor(Math.random() * 26), 1);
}
//Resets the guesses counter
function guessCountReset() {
  document.getElementById("guessesLeft").innerHTML = guessesLeft = 10;
}

//Keyup event listener
document.onkeyup = function(e) {
  //When user guesses correctly
  if (randomLetter === e.key) {
    document.getElementById("winsCount").innerHTML = ++winsCount;
    guessesLeft = 10;
    alert("You did it!!");
    document.getElementById("guessesSoFar").innerHTML = " ";
    numGen();
  } else {
    //Stops the final comma from showing
    if (guessesLeft === 1) {
      document.getElementById("guessesSoFar").innerHTML += e.key;
      guessesLeft--;
      document.getElementById("guessesLeft").innerHTML = guessesLeft;
    } else {
      //Decrements the guesses and displays guessed letters
      document.getElementById("guessesSoFar").innerHTML += e.key + ", ";
      guessesLeft--;
      document.getElementById("guessesLeft").innerHTML = guessesLeft;
    }
    //When user fails to guess right after 10 tries
    if (guessesLeft === 0) {
      alert("You're out of guesses! Start over!");
      document.getElementById("lossesCount").innerHTML = ++lossesCount;
      document.getElementById("guessesSoFar").innerHTML = " ";
      guessCountReset();
    }
  }
};
//Runs generator on page load
numGen();
guessCountReset();
