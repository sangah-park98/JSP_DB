//	변수 선언 방법
//	var는 변수 선언 방식에 있어서 큰 단점을 가지고 있다.
var name = 'hong'; // 변수 선언
console.log('name: ' + name);

//	같은 이름으로 변수를 다시 선언했음에도 불구하고 에러가 발생되지 않고 각기 다른 값이 출력되는 것을
//	볼 수 있다.
var name = 'javascript';
console.log('name: ' + name);

//	이 방식은 유연한 변수 선언으로 간단한 테스트에는 편리할 수 있으나 코드의 양이 많아지면 어디에서
//	어떻게 사용될지 파악하기 힘들고 변수에 저장된 값이 변경될 우려가 있다.
//	그래서 ES6 이후 이를 보완하기 위해서 추가된 변수 선언 방식이 let과 const이다.

let id = 'lim'; // 변수 선언
console.log('id: ' + id);

//	let으로 선언한 id라는 변수를 같은 이름으로 다시 선언하면 이미 변수가 선언된 상태이므로 에러가 발생한다.
//	let id = 'hong'; // 에러 발생

//	선언된 변수에 다른 값을 할당하는 것은 가능하다.
id = 'jang';
console.log('id: ' + id);

const test = 'test'; // 상수 선언
console.log('test: ' + test);

//	let 뿐만 아니라 const를 사용해서 변수(상수)를 선언해도 같은 이름으로 변수를 선언하면 변수가 이미
//	선언되어 있다는 에러 메시지가 출력된다.
//	const test = 'test'; // 에러 발생 

//	const로 선언한 변수는 상수이므로 값을 할당하면 상수는 한 번 초기화 시키면 프로그램에서 값을 변경할 수 
//	없으므로 에러가 발생한다.
//	test = 'check'; // 에러 발생


// ★ let과 const는 변수 재선언이 되지 않는다는 공통점이 있고,
//	 let은 선언된 변수에 데이터 재할당이 가능하지만 const는 선언 시 할당된 데이터를 프로그램에서 재할당할 수 없다.
console.log('-------------------------------');

//	전역 변수: 함수 외부에서 선언된 변수로 스크립트의 모든 함수에서 공통적으로 사용할 수 있다.
//	지역 변수: 함수 내부에서 선언된 변수로 함수 내부(var) 또는 {} 블록 내부(let, const)에서만 사용할 수 있다.

var variable = 10; // 전역 변수
function scopeTest() {
//	alert('scopeTest() 함수 실행됨');
//	console.log('scopeTest() 함수 실행됨');	
	var a = 0; // 지역 변수
	
	if(true) {
		console.log('scopeTest() 함수 블록에서 선언한 a: ' + a);
		var b = 0; // 지역 변수
		console.log('if 블록에서 선언한 b: ' + b);
		let c = 100; // 지역 변수
		console.log('if 블록에서 선언한 c: ' + c);
		
		// var로 선언한 변수는 호이스팅에 의해서 프로그램 맨 위에 var i;와 같이 선언된다.
		// i라는 변수는 선언된 상태이지만 할당되지 않았으므로 undefined가 출력된다.
		console.log('for 블록에서 선언한 i를 for 블록 이전에서 출력: ' + i); // undefined
		
		for(var i=0; i<5; i++){
			console.log('for 블록에서 선언한 i: ' + i);
		}
	}
	
//	var로 선언한 변수는 function scope이므로 변수가 선언된 함수 내부에서 자유롭게 사용할 수 있다.

	console.log('scopeTest() 함수 블록에서 선언한 a: ' + a);
	console.log('if 블록에서 선언한 b: ' + b);
	console.log('for 블록에서 선언한 i: ' + i);
//	let과 const는 block scope이므로 변수가 선언된 {} 블록 내부에서 사용할 수 없다.
//	console.log('if 블록에서 선언한 c: ' + c); // 에러 발생



	console.log('함수 외부에서 선언한 전역 변수 variable: ' + variable);
//	앞에 아무것도 붙이지 않고 변수를 선언하면 전역 변수로 인식된다.
	variable = 999;
	console.log('함수 내부에서 선언한 전역 변수 variable: ' + variable);
//	전역 변수와 같은 이름으로 var를 사용해서 지역 변수를 선언하면 더 이상 전역 변수를 사용할 수 없다.
	var variable = 777;
	console.log('scopeTest() 함수 블록에서 선언한 variable: ' + variable);
}
console.log('함수 외부에서 선언한 전역 변수 variable: ' + variable);
	
function test1() {
//	console.log('test1() 함수 실행됨');
	variable += 5;
	console.log(variable);
	
//	getElementById(): html 문서에서 인수로 지정된 id 속성을 가지는 객체(태그)를 얻어온다.
//	alert(window.document.getElementById('var1'));		
//	자바스크립트의 최상위 객체 window는 생략해도 자동으로 붙는다.
//	console.log(document.getElementById('var1'));		

//	innerText: 선택된 객체 내부에 html 태그 구현이 불가능한 문자열을 넣거나 얻어올 수 있다.
	document.getElementById('var1').innerText= '<b style="color: red; background-color:yellow;">' + variable + '</b>';

//	innerHTML: 선택된 객체 내부에 html 태그 구현이 가능한 문자열을 넣거나 얻어올 수 있다.
	document.getElementById('var1').innerHTML = '<b style="color: red; background-color:yellow;">' + variable + '</b>';


}

function test2() {
//	console.log('test2() 함수 실행됨');
//	지역 변수가 선언되기 전에 변수를 사용하면 undefined가 출력된다. => 호이스팅
	console.log(variable);

//	함수 내부에서 전역 변수와 같은 이름의 지역 변수를 선언하면 지역 변수에 우선권이 있다.
//	함수 내부에서 아래와 같이 var를 이용해서 전역 변수와 같은 이름의 지역 변수를 선언하면 함수 내부의
//	variable이라는 이름을 가지는 지역 변수로 선언되지만 var를 사용하지 않으면 전역 변수를 의미한다.
	var variable = 5;
	console.log(variable);
}


function test3() {
//	console.log('test3() 함수 실행됨');
	var variable2 = variable + 3;
	document.getElementById('var2').innerHTML = '<i style="color: tomato; background-color:skyblue;">' + variable2 + '</i>';
}


function test4() {
//	console.log('test4() 함수 실행됨');
	let variable3 = '문자열'; 
	console.log(typeof variable3); // string

	variable3 = 5.5;
	console.log(typeof variable3); // number

	variable3 = 5;
	console.log(typeof variable3); // number

	variable3 = true;
	console.log(typeof variable3); // boolean

	variable3 = null;
	console.log(typeof variable3); // object, null도 객체로 취급된다.

	variable3 = [1, 2, 3, 4, 5];
	console.log(typeof variable3); // object, 배열도 객체로 취급된다.

	variable3 = {name: '홍길동'};
	console.log(typeof variable3); // object
	
/*	variable3 = function (name) {
		console.log(name + '님 안녕하세요');
	}
	console.log(typeof variable3);*/ // function
	
	variable3 = name=> console.log(name + '님 안녕하세요');
	console.log(typeof variable3);
	variable3('홍길동');

}












