// PSUEDOCODE
// Press any letter to begin the game
// Display wins, losses, number of guesses remaining, and letters guessed with preset values
// Computer chooses a random letter from the array


// User selects letters on keyboard
// If selected letter matches with computer's letter then Add 1 to the Wins
// If selected letter does not match computer's letter:
// - Subtract 1 from "Number of Remaining Guesses" 
// - Add selected letter to "Your guesses so far"

// Game ends when:
// - Number of guesses = 10
// -Number of wins = 1
// Reset guesses to max count
// Reset letters already guessed
// Add 1 to "Losses" total
// Reset guesses to max count
// Reset letters already guessed


// var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;
var losses = 0;
var numGuess = 10;
var guessChoices = [];

for (var i = 97; i < 123; i++) {
    var computerChoices = String.fromCharCode(i);
    console.log(computerChoices);
}

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("guessesleft-text");
var guessessofarText = document.getElementById("guessessofar-text");


document.onkeypress = function (event) {

    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    for (let i = 97; i < 123; i++) {
        let options = String.fromCharCode(i);
        // var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        if (options.indexOf(userGuess) > -1) {

            if (userGuess === computerGuess) {
                wins++;
                numGuess = 10;
                guessChoices = [];
            }

            if (userGuess != computerGuess) {
                numGuess--;
                guessChoices.push(userGuess);
            }

            if (numGuess === 0) {
                numGuess = 10;
                losses++;
                guessChoices = [];
            }
        }
    }
    // Display the user and computer guesses, and wins/losses/ties.
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesleftText.textContent = "Number of Guess left: " + numGuess;
    guessessofarText.textContent = "Your guesses so far: " + guessChoices;
}