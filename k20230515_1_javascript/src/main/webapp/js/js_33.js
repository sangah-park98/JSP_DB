function foodShow() {
	
	let food = document.getElementsByName('food')[0];
	
	let index = food.options.selectedIndex;
	console.log(food.options[index].value);
}

function foodShow2() {
	let food = document.getElementsByName('food')[1];
	
	
	let str = '';
	for(let i=0; i<food.length; i++) {
		str += food[i].selected ? food[i].value + ' ' : '';
	}
	console.log(str.length < 0 ? '없음' : str);
}