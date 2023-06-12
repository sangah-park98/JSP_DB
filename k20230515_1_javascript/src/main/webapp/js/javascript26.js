function evalTest() {
	let str = document.getElementsByName('evalValue')[0];
	
	console.log(str);
	console.log(str.value);
	console.log(typeof str.value);
	
	if(confirm('연산식을 올바르게 입력했나요?\n입력한 연산식: ' + str.value)) {
		// eval(): 인수로 지정된 문자열 형태의 자바스크립트 코드를 실행한다.
		//document.getElementsByTagName('span')[0].innerHTML = '<h2>계산 결과: ' + eval(str.value)+ '<h2>';
		document.querySelectorAll('span')[0].innerHTML = '<h2>계산 결과: ' + eval(str.value)+ '<h2>';
	} else {
		str.value = ''; // 입력한 값을 지운다.
		str.focus(); // 입력창에 커서를 깜빡인다.
	}
	
	console.log(eval(str.value));
}

function calTest() {
	let docs = document.getElementsByClassName('cal');
	let str = '';
	for(let doc of docs) {
		str += doc.value;
	}
	console.log(str);
	console.log(typeof str);
	console.log(eval(str));
	
	document.querySelectorAll('span')[1].innerHTML = '<h2>계산 결과: ' + eval(str)+ '<h2>';
}