/*
on page load, there is a random letter

user must press keys to guess what that letter is

if the key pressed matches the letter, they score a win point

if the key does not match 10 times in a row, then they gain a loss point

*/

var winsCount = 0;
var lossesCount = 0;
var rounds = 0;
var chars = "abcdefghijklmnopqrstuvwxyz";
var randomLetter = "";

function numGen(){
    randomLetter = chars.substr( Math.floor(Math.random() * 26), 1);
}

document.onkeyup = function(e) {
    if (randomLetter === e.key) {
        document.getElementById("winsCount").innerHTML = winsCount++;
        alert("You did it!!");
    } else {
        document.getElementById("guessesSoFar").innerHTML += ", " + e.key;
    }
}

numGen();



// var winsCount = 0;
// document.getElementById(winsCount).innerHTML = winsCount;
// var lossesCount = 0;
// document.getElementById(lossesCount).innerHTML = lossesCount;
// var guessesLeft = 10;
// document.getElementById(guessesLeft).innerHTML = guessesLeft;
// var guessesSoFar;

    
    

// console.log(rletter);




