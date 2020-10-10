const _ = require("lodash");

function average(){
	let result = 0;
	result = _.mean(arguments);
	
	console.log("Srednia wynosi: " + result);
	
}

average(1,2,3,4,5,6);