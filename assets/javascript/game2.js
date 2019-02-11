// Global Variables

var alphabetArray = [];
var keyMatch = "";
var winsCount = 0;
var lossesCount = 0;
var guessesSoFar = [];
var guessesLeftCount = 10 - guessesSoFar.length;
var randomLetter = "";

//Generates alphabet array
function genCharArray(charA, charZ) {
    alphabetArray = [],
        i = charA.charCodeAt(0),
        j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        alphabetArray.push(String.fromCharCode(i));
    }
    return alphabetArray;
}
genCharArray('a', 'z');

//Generates random letter
function numGen() {
    randomLetter = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
}
//Resets the game
function roundReset() {
    numGen();
    guessesSoFar = [];
    document.getElementById("guessesSoFar").textContent = guessesSoFar;
    document.getElementById("guessesLeft").textContent = 10 - guessesSoFar.length;
}

//Key event that stores alphabet key values into a variable
document.onkeyup = function (e) {
    keyMatch = alphabetArray.find(function (letterMatch) {
        return letterMatch === e.key;
    });
    //Win Criteria
    if (keyMatch === randomLetter) {
        document.getElementById("wins").textContent = ++winsCount;
        roundReset();
        //Exclude keys that aren't the alphabet
    } else if (keyMatch === undefined) {
        return;
        //Loss Criteria
    } else {
        guessesSoFar.push(keyMatch);
        document.getElementById("guessesLeft").textContent = 10 - guessesSoFar.length;
        document.getElementById("guessesSoFar").textContent = guessesSoFar;
    }
    //Loss Counter to Reset after too many guesses
    if (guessesSoFar.length === 10) {
        document.getElementById("losses").textContent = ++lossesCount;
        roundReset();
    }
};

//Page Load Events
numGen();
document.getElementById("wins").textContent = winsCount;
document.getElementById("losses").textContent = lossesCount;
document.getElementById("guessesLeft").textContent = guessesLeftCount;