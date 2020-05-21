Array.prototype.random = function() {
	let indexRandom = Math.floor(Math.random() * this.length)
	return this[indexRandom]
}; 