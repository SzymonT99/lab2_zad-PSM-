// zad 1 i 2
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


// zad 3
const user = {
	name: 'Imie',
	surname: 'Nazwisko',
	allGrades: [
		{
			subjectName: 'Name1',
			grades: [5, 4, 3, 5, 2],
			weight: 3
		},
		{
			subjectName: 'Name2',
			grades: [3, 3.5, 2],
			weight: 1
		},
		{
			subjectName: 'Name3',
			grades: [4, 3, 3.5],
			weight: 5
		}
	]
}

function  checkUser(user){
	
	let sum = 0;
	let sumOfWeight = 0;
	let average = 0;
	
	for (let i = 0; i < user.allGrades.length; i++){
		
		sumOfWeight += user.allGrades[i].weight * user.allGrades[i].grades.length;
		
		for (let j = 0; j < user.allGrades[i].grades.length; j++){
			
			let currentGrade = user.allGrades[i].grades[j];
			let currentWeight = user.allGrades[i].weight;
			sum += (currentGrade * currentWeight);
			
		}
	}
	
	average = sum / sumOfWeight;
	average = Math.round(average * 100) / 100;
	
	console.log("Użytkownik o imieniu: " + user.name + " oraz nazwisku: " + user.surname + " osiągną średnią ważoną: " + average);
	
}

checkUser(user);

// zad 4
function findSubjectWithWeight(user, weight){
	let subject = _.find(user.allGrades, function(o){
		return o.weight == weight;
	});
	console.log("Przedmiot o wadze ocen równej " + weight+ ": " + subject.subjectName);
}

findSubjectWithWeight(user, 1);







































