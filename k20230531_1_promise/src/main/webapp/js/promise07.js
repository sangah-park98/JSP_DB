//	jsonplaceholder 검색
//	https://jsonplaceholder.typicode.com/ 사이트 아래쪽으로 내려가서 post를 클릭한다.
//	'https://jsonplaceholder.typicode.com/posts'

//	javascript fetch api 검색
//	https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch

//	fetch() 결과(리턴)는 promise 이다. ★

/*
console.log(1);
//	fetch(요청 url)
fetch('https://jsonplaceholder.typicode.com/posts')
	.then(function (data) { // then()을 사용한다는 것은 fetch() 실행 후 리턴이 promise라는 의미이다.
		// console.log(data); // 1 2 response
		console.log(data.json()); // 1 2 Promise {<pending>} // json 타입의 데이터를 javascript 객체로 변환한다.
	})
console.log(2);
*/

console.log(1);
fetch('https://jsonplaceholder.typicode.com/posts')
	.then(data => data.json())
	.then(data => console.log(data)) // .then(console.log)
console.log(2);

//	------------------------------------------------------

//	fetch(요청 url) 함수의 리턴값은 promise이며 response(응답) 객체이다.
let fetched = fetch('https://jsonplaceholder.typicode.com/posts');
//	리턴값이 promise면 비동기적으로 실행되는 함수이다.
console.log('2. fetched: ' + fetched); // fetched: [object Promise] => 전체 문자열
console.log('2. fetched: ',  fetched); // fetched:  ▶Promise {<pending>} => 문자열 Promise 객체
//	외부에서 받아오는 딜레이 시간이 걸리므로 나중에 출력

//	fetch() 함수가 리턴한 리턴값에는 then()과 catch() 2개의 함수를 사용할 수 있다.
//	then() 함수는 fetch() 함수가 성공적으로 실행되면 호출되고 catch() 함수는 fetch() 함수가 에러일 때 호출된다.
//	fetch() 함수가 실행되면 promise가 리턴되고, then() 함수가 실행되면 promise()를 리턴한다.
//	
fetched.then(function (response) {
	console.log('2. response: ', response); // Response
})
fetched = fetch('https://jsonplaceholder1.typicode.com/posts'); // 주소 틀림
fetched
	.catch(function(e) {
		console.log('2. error: ' + e); // :ERR_NAME_NOT_RESOLVED
	});

//	---------------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/posts')
	.then(function (response) {
	// console.log('3. response: ', response.json());
		/*
		response.json().then(function (data) {
			console.log('3. data: ' , data);
		});
		*/
		return response.json(); // promise를 리턴한다.
	})
	.then(function (data) {
		// then() 함수에서 promise를 리턴시키고 외부에서 then() 함수를 받아서 사용하는 방식을
		// promise chaining이라 하고 일반적으로 nested promise 방식보다 더 많이 사용한다.
		console.log('3. data 2: ' , data);
	})
	.catch(function(error) {
		console.log('3. error: ' + error); 
	});;








