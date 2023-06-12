onload = function () {
	
	document.getElementsByTagName('button')[0].onclick = testDate1;
	document.getElementsByTagName('button')[1].onclick = testDate2;
	
}

function testDate1() {
	let date = new Date();
	console.log(date);
	
	let today = document.getElementById('today');
	today.innerHTML = date;
	today.innerHTML = date.toDateString();
	today.innerHTML = date.toLocaleDateString();
	today.innerHTML = date.toLocaleString();
	today.innerHTML = date.toLocaleTimeString();
}

function testDate2() {
	
	let date = new Date();
	
	let year = date.getFullYear();
	let month = date.getMonth();
	let day = date.getDay();
	let week = date.getDay(); // 요일(1, 2, 3 ...)
	let hour = date.getHours();
	let minute = date.getMinutes();
	let seconds = date.getSeconds();
	
	const weekday = ['일', '월', '화', '수', '목', '금', '토'];
	let now = `${year}.${month}.${day}.(${weekday[week]})`;
	console.log(now);
	
	document.getElementById('today').innerHTML = now;
	
}

function testDate3() {
	
	let year = 2023;
	let month = 5;
	let day = 22;
	
	let date = new Date(year, month -1, day);
	console.log(date);
	
	document.getElementById('specific').innerHTML = date;
	date = new Date(year, month - 1, day, 21, 08, 00);
	console.log(date);
	
	document.getElementById('inputDate').value = date;


}

function testDate4() {
	
	let date1 = document.getElementById('date1').value;
	let date = new Date(date1);
	console.log(date);
	
	let dateInput = document.getElementById('dateInput').value;
	console.log(dateInput);
	
	console.log(date.getDate() + parseInt(dateInput) - 1);
	date.setDate(date.getDate() + parseInt(dateInput) - 1);
	console.log(date);
	console.log(date.toLocaleDateString());
	
	document.getElementById('result').value = date.toLocaleDateString();
}


function testDate5() {
	
	let date2 = document.getElementById('date2').value; 
	let endDate = new Date(date2); 
	
	
	let dateInput2 = document.getElementById('dateInput2').value;
	let startDate = new Date(dateInput2);
	
	let result2 = startDate - endDate;
	console.log(result2);
	console.log(result2 / 24 * 60 * 60 * 1000) + 1;
	document.getElementById('result2').value = result2/ (24 * 60 * 60 * 1000) + 1;
	
}














