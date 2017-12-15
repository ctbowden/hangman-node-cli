// Hangman Node CLI Application
// UNC Coding Bootcamp
// Decemember 2017
// Charles Bowden

// Main file for running Hangman Game

// NPM Dependencies
var inquirer = require("inquirer");
var fs = require("fs");

// Imported objects
var word = require("./word.js");
var game = require("./game.js");

var lives = 5;






inquirer.prompt([
	{
		name: "play",
		type: "confirm"
		message: "Welcome to Hangman!  Choose Yes to continue"
	},
	{
		name: "theme"
		type: "list",
		message: "Pick a theme, your Hangman Game will choose a word based on that theme",
		choices: ["Pro Wrestlers", "Movies", "Songs"]
	},
	{
		name: "difficulty",
		type: "list",
		chocies: ["Easy", "Hard", "Sudden Death"]
	}

	]).then(function(answers){
		
		var theme =  answers.theme;
		var difficulty = answers.difficulty;

		if (difficulty === "Easy")
			
		// Read in Text Files with Hangman Choices
		fs.readFile("", "utf8", function(error, data){
			if (error) {
			return console.log(error);
		}
		//
		var dataArr = data.split("\n");
		//
		})


})