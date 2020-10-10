const _ = require("lodash");

function average(array){
	let result = 0;
	result = _.mean(array);
	
	console.log("Srednia wynosi: " + result);
	
}

average([1,2,3,4,5,6]);

