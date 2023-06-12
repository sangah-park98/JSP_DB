const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function callback(element) {
	if(element.length > 6) {
		return element;
	}
}

function callback2(element) {
	return element.length > 6;
}

newWords = words.filter((element) =>  element.length > 6);

newWords = words.filter(function (element) {
	return element.length > 6;
});


function myFilter(origin, callback) { // origin = 변수, callback = 함수
	let result = [];
	for(let i=0; i<origin.length; i++) {
		let current = origin[i];
		if(callback(current)) {
			result.push(current);
		}
	}
	return result;
}


// newWords = myFilter(words, element => element.length > 6);
newWords = myFilter(words, function(element) {
	return element.length > 6;
});
console.log(newWords);










