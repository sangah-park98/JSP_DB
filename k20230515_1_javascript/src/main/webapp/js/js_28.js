function randomNumber(number) {
	for(let i=0; i<6; i++) {
		console.log(parent(Math.random() * number + 1));
	}
}

function randomColor() {
	let r = parent(Math.random() * 256);
	let g = parent(Math.random() * 256);
	let b = parent(Math.random() * 256);
	
	document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function randomCircle() {
	let radius = parseInt(Math.random() * 100 + 1);
	let circle = document.getElementById('circle');
	
	circle.style.width = radius * 2 + 'px';
	circle.style.height = radius * 2 + 'px';
	
	let random = function() {
		return parseInt(Math.random() * 256);
	}
	document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function randomCircle() {
	let radius = parseInt(Math.random() * 100 + 1);
	let circle = document.getElementById('circle');
	
	circle.style.width = radius * 2 + 'px';
	circle.style.height = radius * 2 + 'px';
	
	let random = function() {
		return parseInt(Math.random() * 256);
	}
	document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
	
	circle.style.border = '3px solid' + `rgb(${random()}, ${random()}, ${random()}`;
	circle.style.borderRadius = '50%';
	circle.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()}`;
}


function randomCircleArea() {
	
	let circleWidth = document.getElementById('circle').style.width;
	let width = parseInt(circleWidth);
	
//	console.log(width);
	let radius = width / 2;
	let area = Math.PI * Math.pow(radius, 2);
	let len = radius * 2 * Math.PI;
	
	document.getElementById('area').innerHTML = area;
	document.getElementById('len').innerHTML = len;
}










