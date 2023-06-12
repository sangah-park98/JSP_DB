//	명시적 함수(이름이 있는 함수)
function func1() {
	alert('명시적 함수');
}

//	익명 함수(이름이 없는 함수)
/*
const func2=  function () {
	alert('익명 함수');
}
*/
const func2= () => alert('익명 함수');

//	함수 리터럴 (함수의 인수로 익명 함수를 전달한다.)
/*
function func3() {
	literalTest(function (msg){
		alert(msg);
	});
}
*/
function func3() {
	literalTest(msg => alert(msg));
}
function literalTest(literal) { // 인수로 함수가 넘어온다.
	literal('함수 리터럴 입니다.');
	
}

//	자바스크립트 함수는 실인수와 가인수의 개수가 다르더라도 정상적으로 실행된다. => 함수 오버로딩은
//	지원되지 않는다.
//	함수가 호출될 때 넘어오는 인수를 저장할 변수가 모자라면 모자라는대로 남으면 남는대로 실행한다.
//	자바스크립트의 함수가 호출될 때 실인수는 arguments 객체로 먼저 전달되고 arguments 객체에 저장된
//	인수 목록에서 가인수의 개수만큼 반복하며 arguments 객체에 저장된 데이터를 꺼내서 가인수에 넣어준다.

function varTest() {
//	console.log('varTest()');
	console.log(arguments);
	console.log('함수가 호출될 때 전달되는 데이터의 개수: ' + arguments.length);
	for(let i=0; i<arguments.length; i++){
		console.log(`arguments[${i}] = ${arguments[i]}`);
	}
}

/*
function goodEdu(good) {
	console.log(good);
}
*/


//	클로저: 함수가 생성될 당시 외부 함수의 값을 기억해 두었다가 내부 함수가 호출될 때 사용한다.
//	참조할 수 없는 위치에 있는 값도 참조할 수 있다.

function closureTest(value) { // 외부 함수 => 클로저
	console.log('value: ' + value);
	var a = 100;
	
	function addValue(msg) { // 내부 함수
		console.log('msg: ' + msg);
		console.log('a: ' + a);
		
	} 
//	반드시 클로저 내부에서 정의한 함수를 리턴시켜야 한다.
	return addValue;
}
//	goodEdu에는 자바스크립트 파일이 읽혀질 때 closureTest() 함수를 실행한 후 return값이 저장된다.
const goodEdu = closureTest('자바스크립트');

//	자바스크립트는 js 파일을 순서대로 먼저 읽기 때문에 위에서 다 함수 정의만 하다가 68번 줄은 함수 실행문이다.
//	따라서 closureTest('자바스크립트'); 을 먼저 실행하면 55번줄로 올라가고 내부 함수가 실행된다.
// 	내부 함수가 실행되면 addValue() 함수가 리턴되므로
//	const goodEdu = function addValue(msg) {
//		console.log('msg: ' + msg);
//		console.log('a: ' + a);

//	} 
//	와 같이 된다.
//	즉, goodEdu 변수에 closureTest() 함수의 내부 함수인 addValue() 함수가 들어간다.


//	익명 함수 뿐만 아니라 이름이 있는 함수(addValue)도 변수에 할당할 수 있으므로 goodEdu에 할당된 addValue()
//	함수를 goodEdu(msg) 형태로 실행이 가능하다.



















































