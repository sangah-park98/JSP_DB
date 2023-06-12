function randomNumber(number) {
//	random(): 0 이상이고 1 미만인 무작위수를 발생시킨다.
	for(let i=0; i<6; i++) {
		//console.log(Math.random());	
		console.log(parseInt(Math.random()*number + 1));
	}
//	ceil(): 올림, floor(): 내림, round(): 반올림
	console.log('올림: ' + Math.ceil(3.14));
	console.log('올림: ' + Math.ceil(3.94));
	console.log('내림: ' + Math.floor(3.14));
	console.log('내림: ' + Math.floor(3.94));
	console.log('반올림: ' + Math.round(3.14));
	console.log('반올림: ' + Math.round(3.94));
}

function randomColor() {
	
	let r = parseInt(Math.random() * 256);
	let g = parseInt(Math.random() * 256);
	let b = parseInt(Math.random() * 256);
	
	
	/*
	console.log(`r: ${r}, g:${g}, b: ${b}`);

	document.body.style.backgroundColor = `rgb(${r}, ${b}, ${b}`;
	*/
	
	/*
	let random = function() {
		return parseInt(Math.random() *256);
	}
	document.body.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
	*/
	
	let random = () => parseInt(Math.random() *256);
	document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	
}

// 반지름이 1 ~ 100 사이의 원 만들기
function randomCircle() {
		
	let radius = parseInt(Math.random() *100 + 1); // 반지름 1 ~ 100 사이의 랜덤한 원 그리기
	let circle =  document.getElementById('circle'); // 어디에? id가 circle인 div 태그 안에!
	
	circle.style.width = radius * 2 + 'px';
	circle.style.height = radius * 2 + 'px';
	
	let random = () => parseInt(Math.random() *256);

	circle.style.border = '3px solid' + `rgb(${random()}, ${random()}, ${random()})`;
	circle.style.backgroundColor =  `rgb(${random()}, ${random()}, ${random()})`;
	circle.style.borderRadius = '50%';
}


function randomCircleArea() {
//	원의 지름을 얻어온다.
	let circleWidth = document.getElementById('circle').style.width;
	console.log(circleWidth);
	
//	let width = circleWidth.substring(0, circleWidth.length -2); // 'px'을 없애주는 작업, type: string
	let width = parseInt(circleWidth); // 'px'을 없애주는 작업, type: number
//	console.log(width);		
	
	let radius = width / 2;
//	console.log('원의 반지름: ' + radius);	
	
	let area = Math.PI * Math.pow(radius, 2); // 원의 너비
	let len = 2 * Math.PI * radius; // 원의 둘레
	
	document.getElementById('area').innerHTML = Math.round(area);
	document.getElementById('len').innerHTML = Math.round(len);
}







