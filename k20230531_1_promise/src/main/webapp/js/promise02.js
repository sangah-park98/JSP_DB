//	동기 방식 처리 => 순서대로 실행한다.
console.log('1');
console.log('2');
console.log('3');
// 출력은 1, 2, 3이 하나씩 출력된다.
// ---------------------------------------------------------------
//	비동기 방식 처리
console.log('a');
//	setTimeout(함수, 시간): 지정한 시간이 경과된 후 함수를 실행한다.
	setTimeout(function () {
		console.log('b');
	}, 1000)
console.log('c');
// 위와 같이 실행하면 setTimeout() 함수에 의해 비동기 방식으로 실행해서 1 2 3 a c b 순으로 출력된다.
// ---------------------------------------------------------------

//	동기적 콜백
//	변수를 var를 붙여서 선언하거나 함수가 선언되면 호이스팅에 의해서 맨 위로 올라간다.
function printImmdiately(print) {
	print();
}
printImmdiately(function () {
	console.log('hello');
});

//	비동기적 콜백
function printWithDelay(print, timeout) {
	setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 1000);

