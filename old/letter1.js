// Letter Object

var Letter = function(ltr) {
	// Property to store the letter input
	this.charac = ltr;
	// Boolean value of Letter upon creation, will change to true if in word
	this.appear = false;
	// Function to show the letter if value equals true
	this.letterRender = function(){
			return !(this.appear) ? "_" : this.char;
	};
};

module.exports = Letter;