// Hangman Node CLI Application
// UNC Coding Bootcamp
// Decemember 2017
// Charles Bowden

// Main file for running Hangman Game

// NPM Dependencies
var inquirer = require("inquirer");

// Imported objects
var word = require("./word.js");
var letter = require("./letter.js");

var lives = 5;

// While Loop to repeat Inquirer prompts? Until Victory or Defeat
while (lives > 0){
	inquirer.prompt([
	{
		name: "letter",
		message: "Welcome to Hangman! Choose a letter."
	}
	]).then(function(answers){
		var someLetter = new Letter(answers.letter);
	})


if (lives > 0) {
	console.log("Congrats You're a Winner!");
} else {
	console.log("Sorry Try Again?");
};

