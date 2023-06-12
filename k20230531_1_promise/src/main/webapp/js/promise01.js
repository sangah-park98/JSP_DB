//	JSON(JavaScript Object Notation)

//	javascript 객체를 json으로 변환하기
//	stringify(객체): 인수로 지정된 javascript 객체를 json으로 변환한다.
let json = JSON.stringify(true);
console.log(json);
console.log('1.-------------------------');

json = JSON.stringify(['apple', 'banana']);
console.log(['apple', 'banana']);
console.log(json);
console.log('2.-------------------------');

//	javascript 객체
const rabbit = {
	name: '토오끼',
	color: '분홍색',
	size: '쪼마남',
	birthDate: new Date(), 
	jump: () => {
		console.log('jump!!!');
	}
}
console.log(rabbit);
//	json
//	json은 key 부분을 반드시 큰따옴표로 만들어야 한다.
json = JSON.stringify(rabbit);
console.log(json); // json은 함수나 날짜 데이터가 변환되지 않는다.
console.log('3.-------------------------');


//	stringify() 함수의 2번째 인수로 json으로 변환할 속성을 배열로 지정할 수 있다.
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);
console.log('4.-------------------------');

//	보다 더 세밀한 제어를 하기 위해서 두번째 인수로 콜백 함수를 지정할 수 있다.
json = JSON.stringify(rabbit, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	// return value; // json은 함수로 객체를 만들면 함수 형태로 변환이 가능하다.
	return key == 'name' ? '토끼' : value;
});

console.log('5.-------------------------');
console.log(json);
console.log('6.-------------------------');

//	json을 javascript 객체로 변환하기
//	parse(json 객체): 인수로 지정된 json 객체를 javascript 객체로 변환한다.
console.log('***************************');
// console.clear(); 콘솔 창 싹 다 지우기

//	rabbit javascript 객체를 json으로 변환한 후 다시 javascript 객체로 변환한다.
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json);
console.log(obj);

console.log('7.-------------------------');
rabbit.jump();
// obj.jump(); 에러
// javascript 객체의 함수는 json으로 변환할 수 없다.

console.log(rabbit.birthDate.getDate());
// javascript 객체나 함수는 json으로 넘어가면 실행이 되지 않는다.
// console.log(obj.birthDate.getDate());
console.log('8.-------------------------');

//	보다 더 세밀한 제어를 하기 위해서 두번째 인수로 콜백 함수를 지정할 수 있다.
const obj2 = JSON.parse(json, function(key, value) {
	// console.log(`key: ${key}, value: ${value}`);
	// return value;
	return key == 'birthDate' ? new Date(): value;
});
console.log(obj2);
console.log(obj2.birthDate.getDate());

//   json 관련 유용한 사이트
//   1. json diff(https://json-diff.com/): 서버로 요청해 응답받은 데이터를 비교한다.
//   2. json beautifier(https://codebeautify.org/jsonviewer): json 데이터 포맷을 예쁘게 만든다.
//   3. json parser(http://json.parser.online.fr/): json 데이터를 객체 형태로 만든다.
//   4. json validator(https://jsonformatter.curiousconcept.com/): json 데이터가 유효한지 검사한다.

