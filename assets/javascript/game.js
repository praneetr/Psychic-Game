// define necessary variables
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var Guesses_Left = 10;
var Guesses_So_Far = [];
var Computers_Letter = [];


// after page loads you can see computers guess in the console

window.onload = function() {
  var compGuess = choices[Math.floor(Math.random() * choices.length)];
  Computers_Letter.push(compGuess);
  console.log(Computers_Letter[0]);
}

// to begin guessing type any key

document.onkeyup = function(event) {
  var playerGuess = event.key;
  Guesses_So_Far.push(playerGuess);

if ((playerGuess === Computers_Letter[0]) && (Guesses_Left > 0)) {
  wins++;
  Guesses_Left = 10;
  Guesses_So_Far.length = 0;
  Computers_Letter.length = 0;
  var compGuess = choices[Math.floor(Math.random() * choices.length)];
  Computers_Letter.push(compGuess);

//to see computers letter in console
  console.log(Computers_Letter[0]);
}

else if ((playerGuess !== Computers_Letter[0]) && (Guesses_Left > 0)) {
  Guesses_Left = Guesses_Left-1;
}

else {
  losses++;
  Guesses_Left = 10;
  Guesses_So_Far.length = 0;
  Computers_Letter.length = 0;
  var compGuess = choices[Math.floor(Math.random() * choices.length)];
  Computers_Letter.push(compGuess);

//to see computers letter in console
  console.log(Computers_Letter[0]);
}

// updated stats

var summary = "<p>Guess what letter I'm thinking of</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + Guesses_Left + "</p>" +
          "<p>Your guesses so far: " + Guesses_So_Far + "</p>";
 
 // to display updated stats in html
document.querySelector("#stats").innerHTML = summary;

}