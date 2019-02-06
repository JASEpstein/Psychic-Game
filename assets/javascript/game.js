var winsCount = 0;
document.getElementById(winsCount).innerHTML = winsCount;
var lossesCount = 0;
document.getElementById(lossesCount).innerHTML = lossesCount;
var guessesLeft = 10;
document.getElementById(guessesLeft).innerHTML = guessesLeft;
var guessesSoFar;
document.getElementById(guessesSoFar).innerHTML = guessesSoFar;

document.onkeyup = function(e) {
    var rletter = (function random_character() {
        var chars = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
        return chars.substr( Math.floor(Math.random() * 52), 1);
    })
    if (rletter === e.key){
        alert("You guessed it!!");
        document.getElementById(winsCount).innerHTML = winsCount++;
    } else {
        document.getElementById()
    }
    
}