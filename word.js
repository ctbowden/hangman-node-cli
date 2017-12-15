// Require Letter.js to access Letter constructor
var letter = require('./letter.js');
// Word Object
var Word = function(wrd){
	// Takes argument and sets this.word to arg value
	this.word = wrd;
	// Will hold all Letter Objects from our Letter Constructor
	this.letterArray = [];
	// Starts as false will become true once all letters in letterArray are true
	this.revealed = false;
	// Method to add letters to our letterArray
	this.getLetters = function(){
		for (var i = 0; i < this.word.length; i++) {
			this.letterArray.push( new letter(this.word[i]));
		}
	};
	// When called updateStatus will test each Letter in the letterArray if all their .appear values are true, it will set the revealed value to true.  We'll use this to help determine win/loss later.
	this.updateStatus = function(){
		this.revealed = this.letterArray.every(function(eachLetter){
			return eachLetter.appear;
		});
		return this.revealed;
	};
	// Take User Guesses and check the letterArray, if it exists flip that letter's value to true
	this.checkLetter = function(userGuess){
		// variable to hold user input and convert it to uppercase to handle errors
		var inTheWord = userGuess.toUpperCase();

		for (var i = 0; i < this.letterArray.length; i++) {
			if (this.letterArray[i].letter === inTheWord){
				this.letterArray[i].appearsInWord = true;
			}

		}
	};

};

module.exports = Word;