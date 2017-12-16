// Hangman Node CLI Application
// UNC Coding Bootcamp
// Decemember 2017
// Charles Bowden

// Main file for running Hangman Game

// NPM Dependencies
var inquirer = require("inquirer");
var fs = require("fs");
// var prompt = require("prompt");

// Imported objects
var Word = require("./word.js");
var Playhangman = require("./game.js");


console.log("Welcome to Hangman!");
console.log("-------------------");


game = {
	wordBank: ['Captain America', 'The Falcon', 'Iron Man', 'The Hulk'],
	wordsWon: 0,
	guessesRemaining: 10,
	currentWrd: null,

	startGame: function(wrd) {
		this.resetGuesses();
		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
		this.currentWrd.getLetters();
		this.currentWrd.removeSpaces();
		this.promptUser();
	},

	resetGuesses: function(){
		this.guessesRemaining = 10;
	},

	promptUser: function(){
		if (this.currentWrd.revealed === false) {

			for (var i = 0; i < this.currentWrd.letterArray.length; i++) {
				var string = [];
				if (this.currentWrd.letterArray[i].show === true) {
					string.push(this.currentWrd.letterArray[i].letter);
				} else {
					string.push("_");
				}
				console.log(string);
			};
		};

			inquirer.prompt([
				{
					name: 'try',
					type: 'input',
					message: 'Choose a Letter to fill in the blanks.'
				}
				]).then(function(answers){

					this.currentWrd.checkLetter(answers.try);
					this.currentWrd.updateStatus();
					promptUser();
				});

			this.currentWrd.updateStatus();
			promptUser();
		}
}

game.startGame();