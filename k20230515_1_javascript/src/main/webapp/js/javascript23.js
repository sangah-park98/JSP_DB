//	객체 선언 => function
function Clazz(name) {
//	객체를 구성하는 멤버 변수를 선언할 때 this를 붙이면 객체 외부에서 접근이 불가능하다.
	this.name = name; // 멤버 변수 초기화	
	age = 20; 
//	this를 붙여서 선언하지 않은 멤버 변수에 저장된 데이터를 얻어내려면 함수를 사용해야 한다.
//	객체를 구성하는 멤버 변수를 선언할 때 this를 붙이지 않으면 객체 외부에서 접근이 불가능하다.
	this.getAge = function () {	// 함수 선언
		return age;
	}
}

function objectFunction() {
//	function을 사용해서 선언한 클래스 객체는 new를 사용해서 생성한다.
	const obj = new Clazz('홍길동');
	console.log(obj);
//	객체의 멤버에 접근하려면 객체 이름에 '.'을 찍어서 접근한다.
	console.log(obj.name); // 접근 가능
	console.log(obj.age); // 접근 불가능
	console.log(obj.getAge()); // this를 붙이지 않은 변수는 함수를 통해서 접근한다.
	
}

//	객체 선언 => class 사용
//	function을 사용해서 객체를 선언할 때 멤버 변수 앞에 this를 붙이지 않으면 객체 내부에서 사용하는
//	변수로 인식되었지만 class를 사용해서 객체를 선언할 때는 멤버 변수 앞에 무조건 this를 붙여서
//	선언해야 한다.
class Clazz2 {
	constructor(name){ // 생성자에서 멤버 변수를 초기화 한다.
		this.name = name; // 멤버 변수 초기화	
		this.age = 20;
	}
	getAge () {	// 함수 선언
		return this.age;
	}
	
}


function objectClass() {
//	class를 사용해서 선언한 클래스 객체도 new를 사용해서 생성한다.
	const obj = new Clazz2('임꺽정');
	console.log(obj);
	console.log(obj.name);
	console.log(obj.age);
	console.log(obj.getAge());
	
}


//	json 객체 선언 => key 부분을 반드시 큰따옴표로 묶어야 한다.
const Clazz3 = {
	"name": '장길산',
	"age": 45,
	"getAge": function () {
		// 함수 내부에서 json 형식을 사용한 객체의 key를 참조하려면 반드시 클래스 이름에 "."을 찍어서 접근해야 한다.
		return Clazz3.age; 
		
	}	
}

function objectJSON() {
//	function이나 class를 사용해서 선언한 객체는 new를 사용해서 객체를 생성하고 사용한다.
//	json 형식으로 선언한 객체는 별도의 선언 과정없이 사용할 수 있다.
	console.log(Clazz3.name);
	console.log(Clazz3.age);
	console.log(Clazz3.getAge());
	console.log('-------------------------------------');
	
//	json을 가장한 문자열 => key 부분은 반드시 큰따옴표를 사용해서 문자열로 만든다.
	let myJson = '{"name": "일지매", "age": 41}';
	console.log(myJson);
	console.log(typeof myJson); // string
	console.log('-------------------------------------');
	
//	JSON.parse(): 인수로 지정된 json을 가장한 문자열을 json 객체로 반환한다.
	let jsonObj = JSON.parse(myJson);
	console.log(jsonObj);
	console.log(typeof jsonObj); // object
	console.log(jsonObj.name);
	console.log(jsonObj.age);
	
//	JSON.stringify(): 인수로 지정된 json 객체를 문자열로 변환한다.
	myJson = {
		"name": '손오공',
		"age": 30
	}
	console.log(myJson);
	console.log(typeof myJson); // object
	
	let jsonStr = JSON.stringify(myJson);
	console.log(jsonStr);
	console.log(typeof jsonStr); // string
}



























