// Require Word
var Word = require('./word.js');
var inquirer = require("inquirer");

//Game Constructor
function Playhangman() {
	// New Hangman Word instance
	this.game = new Word();
	// 
	this.theme = function(){
		inquirer.prompt([
	{
		name: "theme",
		type: "list",
		message: "Pick a theme, your Hangman Game will choose a word based on that theme",
		choices: ["Pro Wrestling", "Movies", "Musicians"]
	}]).then(function(answers){
		this.chosenTheme = answers.theme;
	});
	};
	// Set Difficulty Level
	this.difficultyLevel = 10;
	// Choose Difficulty Function
	this.difficulty = function(){
		inquirer.prompt([
			{
				name: "difficulty",
				type: "list",
				message: "Choose a difficulty setting, this will affect your number of guesses.",
				choices: ["Easy = 10", "Hard = 5", "Sudden Death = 1"]
			}
			]).then(function(answers){
				this.difficultyLevel = answers.difficulty;
			});
	};


};



function Playhangman(){
	this.theme
	this.difficulty
	
}


module.exports = Playhangman;