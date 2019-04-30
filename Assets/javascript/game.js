// 1. upon loading webpage, have javascript randomly select a letter and save it somewhere.

var charList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // maybe w/ quotes?
var computerChoice = charList[Math.floor(Math.random() * charList.length)];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesText = [];

console.log(computerChoice)

var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text"); 


var userChoice = document.getElementById("user-choice");

document.onkeyup = function(event) {
userChoice.textContent = event.key;
if (userChoice === computerChoice) {wins++; winsText.textContent = + 1;}
else {guesses--; losses++; lossesText.textContent = + 1; // guessesText.push(userChoice) not working
    ;

}

}

// 2. upon user selecting a letter,  add letter to list of letters guessed, 

// 3. compare computer letter to user letter.

// 4. if the same letter, add 1 to wins.

// 5. if not the same, subtract 1 from guesses remaining.

// 6. if guesses remaining reaches zero, add 1 to losses.