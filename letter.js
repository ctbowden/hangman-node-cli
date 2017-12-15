// Letter Object

var Letter = function(ltr) {
	// Property to store the letter input
	this.letter = ltr.toUpperCase();
	// Sets a Boolean (default false) as to whether letter appears in our MysteryWord
	this.appearsInWord = false;
};

module.exports = Letter;