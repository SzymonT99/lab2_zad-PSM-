const _ = require("lodash");

function calculations(array){
	let result = 0;
	result = _.mean(array);
	
	let max = _.max(array);
	let min = _.min(array);
	
	console.log("Srednia wynosi: " + result);
	console.log("Największa wartosc elementu w tablicy wynosi: " + max);
	console.log("Najmniejsza wartosc elementu w tablicy wynosi: " + min);
	
}

calculations([1,2,3,4,5,6]);

