const mongoose = require('mongoose');



var testSchema = mongoose.Schema({
	name: String
});


testSchema.methods.speak = function () {
	var greeting = this.name
	? "Meow name is " + this.name
	: "I don't have a name"
	console.log("speak() - " + greeting);
}

module.exports = mongoose.model("TestModel", testSchema);