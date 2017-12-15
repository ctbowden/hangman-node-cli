// Require Letter.js 
var letter = require('./letter.js');

// Word Object
function Word(target){
	// 
	this.target = target;
	// Array of Letters
	this.lets = [];
	// Determines whether word has been guessed or not
	this.found = false;
	// Method to create letter objects and push them into this.letters array
	this.getLet = function(){
		for (var i = 0; i < this.target.length; i++) {
			this.lets.push( new letter(this.target[i]));
		}
	};
	// Sets this.found equal to 
	this.findWord = function() {
		this.found = this.lets.every(function(currLett){
			return currLett.appear;
		});
		return this.found;
	};

	//
	this.checkLetter = function(guessLet) {
		var toReturn = 0;

		for (var i = 0; i < this.lets.length; i++) {
			if (this.lets[i].charac == guessLet){
				this.lets[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};

	//
	this.wordRender = function(){
		var string = '';
		for (var i = 0; i < this.lets.length; i++) {
			string += this.lets[i].letterRender();
		}
		return string;
	};

} 

module.exports = Word;